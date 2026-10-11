import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  FORMSPREE_ENDPOINT,
  HIGHLEVEL_LEAD_ENDPOINT,
  buildFormspreePayload,
  submitLeadDual,
} from '@/lib/submitLeadDual';

const ROOT = resolve(__dirname, '../../..');

const LEAD_SURFACES = [
  'src/components/ContactSection.tsx',
  'src/components/conversion/QualificationForm.tsx',
  'src/components/conversion/GatedAssetForm.tsx',
  'src/components/CaseStudyContactGate.tsx',
  'src/components/WhatsAppProposalWidget.tsx',
  'src/pages/ClinicalDiagnosticsProposalRequest.tsx',
  'src/components/conversion/EmailCaptureForm.tsx',
  'src/components/Footer.tsx',
];

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function leadForm() {
  const data = new FormData();
  data.set('workEmail', 'buyer@pfizer.com');
  data.set('firstName', 'Jane');
  data.set('lastName', 'Doe');
  data.set('company', 'Pfizer');
  data.set('formVariant', 'contact_section');
  data.set('message', 'Need a proposal');
  data.set('hp_company', '');
  return data;
}

function mockFetch(handlers: { formspree: () => Promise<Response>; highLevel: () => Promise<Response> }) {
  const fetchMock = vi.fn((input: RequestInfo) => {
    const url = String(input);
    if (url === FORMSPREE_ENDPOINT) return handlers.formspree();
    if (url === HIGHLEVEL_LEAD_ENDPOINT) return handlers.highLevel();
    throw new Error(`unexpected ${url}`);
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

function callFor(fetchMock: ReturnType<typeof vi.fn>, url: string) {
  return fetchMock.mock.calls.find((call) => String(call[0]) === url);
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('submitLeadDual posts every lead to HighLevel and Formspree', () => {
  it('sends both requests and succeeds when both accept', async () => {
    const fetchMock = mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => Promise.resolve(jsonResponse({ success: true, contactId: 'c1' })),
    });

    const result = await submitLeadDual(leadForm());
    expect(result).toMatchObject({ ok: true, formspreeOk: true, highLevelOk: true });
    expect(result.error).toBeUndefined();

    const hlCall = callFor(fetchMock, HIGHLEVEL_LEAD_ENDPOINT);
    const hlBody = JSON.parse(String(hlCall?.[1]?.body));
    expect(hlBody.workEmail).toBe('buyer@pfizer.com');
    expect(hlBody.message).toBe('Need a proposal');
    expect(hlBody).not.toHaveProperty('hp_company');
    expect(JSON.stringify(hlCall?.[1]?.headers || {})).not.toMatch(/Bearer|HIGHLEVEL_API_KEY|pit-/);
  });

  it('posts Formspree as JSON with Accept: application/json, the form name, page URL and every field', async () => {
    const fetchMock = mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => Promise.resolve(jsonResponse({ success: true })),
    });
    const data = leadForm();
    data.set('sourceUrl', 'https://www.bionixus.com/contact');
    data.set('_subject', 'Proposal request — Jane Doe');
    data.append('researchInterest', 'Quantitative');
    data.append('researchInterest', 'Market Access');

    await submitLeadDual(data);
    const call = callFor(fetchMock, FORMSPREE_ENDPOINT);
    const init = call?.[1] as RequestInit;
    expect(init.method).toBe('POST');
    expect(init.headers).toMatchObject({ Accept: 'application/json', 'Content-Type': 'application/json' });
    const body = JSON.parse(String(init.body));
    expect(body).toMatchObject({
      form: 'contact_section',
      formVariant: 'contact_section',
      pageUrl: 'https://www.bionixus.com/contact',
      email: 'buyer@pfizer.com',
      workEmail: 'buyer@pfizer.com',
      firstName: 'Jane',
      lastName: 'Doe',
      company: 'Pfizer',
      message: 'Need a proposal',
      researchInterest: 'Quantitative, Market Access',
      _subject: 'Proposal request — Jane Doe',
    });
    expect(body).not.toHaveProperty('hp_company');
  });

  it('waits for HighLevel before posting to Formspree', async () => {
    let releaseHighLevel: (response: Response) => void = () => {};
    const fetchMock = mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => new Promise<Response>((resolveResponse) => (releaseHighLevel = resolveResponse)),
    });
    const pending = submitLeadDual(leadForm());
    await new Promise((r) => setTimeout(r, 0));
    expect(fetchMock.mock.calls.map((call) => String(call[0]))).toEqual([HIGHLEVEL_LEAD_ENDPOINT]);

    releaseHighLevel(jsonResponse({ success: true }));
    const result = await pending;
    expect(fetchMock.mock.calls.map((call) => String(call[0]))).toEqual([HIGHLEVEL_LEAD_ENDPOINT, FORMSPREE_ENDPOINT]);
    expect(result).toMatchObject({ ok: true, formspreeOk: true, highLevelOk: true });
  });

  it('succeeds on HighLevel alone and logs the Formspree failure', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ error: 'Form quota exceeded' }, 422)),
      highLevel: () => Promise.resolve(jsonResponse({ success: true, contactId: 'c1', new: true })),
    });
    const result = await submitLeadDual(leadForm());
    expect(result).toMatchObject({ ok: true, formspreeOk: false, highLevelOk: true, formspreeStatus: 422 });
    expect(result.formspreeError).toBe('Form quota exceeded');
    expect(result.error).toBeUndefined();
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('formspree failed for contact_section'),
      422,
      'Form quota exceeded',
    );
  });

  it('succeeds on Formspree alone and logs the HighLevel failure', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => Promise.resolve(jsonResponse({ error: 'Lead capture is not configured' }, 503)),
    });
    const result = await submitLeadDual(leadForm());
    expect(result).toMatchObject({ ok: true, formspreeOk: true, highLevelOk: false, highLevelStatus: 503 });
    expect(result.highLevelError).toBe('Lead capture is not configured');
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('highlevel failed for contact_section'),
      503,
      'Lead capture is not configured',
    );
  });

  it('fails with the HighLevel message when both destinations fail', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    mockFetch({
      formspree: () => Promise.reject(new Error('offline')),
      highLevel: () => Promise.resolve(jsonResponse({ error: 'Could not save your request. Please try again.' }, 502)),
    });
    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(false);
    expect(result.formspreeNetworkError).toBe('offline');
    expect(result.error).toBe('Could not save your request. Please try again.');
    expect(result.networkError).toBeUndefined();
  });

  it('does not post to Formspree when HighLevel rejects the email with a 400', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const fetchMock = mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => Promise.resolve(jsonResponse({ error: 'Please check your email address and try again.' }, 400)),
    });
    const result = await submitLeadDual(leadForm());
    expect(result).toMatchObject({
      ok: false,
      invalidEmail: true,
      formspreeSkipped: true,
      formspreeOk: false,
      highLevelStatus: 400,
      error: 'Please check your email address and try again.',
    });
    expect(callFor(fetchMock, FORMSPREE_ENDPOINT)).toBeUndefined();
  });

  it.each([422, 429])('does not post to Formspree after any other HighLevel %i', async (status) => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const fetchMock = mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => Promise.resolve(jsonResponse({ error: 'Too many requests' }, status)),
    });
    const result = await submitLeadDual(leadForm());
    expect(result).toMatchObject({ ok: false, formspreeSkipped: true, highLevelStatus: status, error: 'Too many requests' });
    expect(result.invalidEmail).toBeUndefined();
    expect(callFor(fetchMock, FORMSPREE_ENDPOINT)).toBeUndefined();
  });

  it('falls back to Formspree when HighLevel is unreachable', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const fetchMock = mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => Promise.reject(new Error('offline')),
    });
    const result = await submitLeadDual(leadForm());
    expect(result).toMatchObject({ ok: true, formspreeOk: true, highLevelOk: false, highLevelError: 'offline' });
    expect(callFor(fetchMock, FORMSPREE_ENDPOINT)).toBeDefined();
  });

  it.each([
    ['a malformed address', 'jane@pfizer'],
    ['a local part over 64 characters', `${'a'.repeat(65)}@pfizer.com`],
    ['an address over 254 characters', `${'a'.repeat(64)}@${'b'.repeat(63)}.${'c'.repeat(63)}.${'d'.repeat(58)}.com`],
  ])('sends nothing for %s', async (_label, email) => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const data = leadForm();
    data.set('workEmail', email);
    const result = await submitLeadDual(data);
    expect(result).toMatchObject({
      ok: false,
      invalidEmail: true,
      formspreeOk: false,
      highLevelOk: false,
      error: 'Please check your email address and try again.',
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends nothing when the lead has no email', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const data = leadForm();
    data.delete('workEmail');
    const result = await submitLeadDual(data);
    expect(result).toMatchObject({ ok: false, invalidEmail: true, error: 'A valid email is required' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('reports a network error only when both destinations are unreachable', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('offline'))));
    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(false);
    expect(result.networkError).toBe('offline');
  });

  it('does not post when the honeypot is filled', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const data = leadForm();
    data.set('companyWebsite', 'https://spam.example');
    const result = await submitLeadDual(data);
    expect(result).toMatchObject({ ok: true, skipped: true, formspreeOk: false, highLevelOk: false });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('buildFormspreePayload', () => {
  it('falls back to a descriptive subject and the newsletter email field', () => {
    expect(
      buildFormspreePayload({ email: 'reader@novartis.com', firstName: 'Ana', formVariant: 'footer_newsletter' }),
    ).toMatchObject({
      _subject: 'Website lead (footer_newsletter) — Ana',
      form: 'footer_newsletter',
      email: 'reader@novartis.com',
      pageUrl: '',
    });
  });
});

describe('lead form surfaces', () => {
  it('routes every lead surface through the shared helper and keeps secrets out of the client', () => {
    const helper = readFileSync(resolve(ROOT, 'src/lib/submitLeadDual.ts'), 'utf8');
    expect(helper).toContain('https://formspree.io/f/xgozewew');
    expect(helper).not.toContain('HIGHLEVEL_API_KEY');
    expect(helper).not.toContain('leadconnectorhq.com');

    for (const file of LEAD_SURFACES) {
      const src = readFileSync(resolve(ROOT, file), 'utf8');
      expect(src, file).toContain('submitLeadDual');
      expect(src, file).not.toContain('HIGHLEVEL_API_KEY');
      expect(src, file).not.toContain('GHL_API_KEY');
      expect(src, file).not.toContain('leadconnectorhq.com');
      expect(src, file).not.toContain('fetch(FORMSPREE_ENDPOINT');
      expect(src, file).toMatch(/role="(status|alert)"/);
      expect(src, file).toContain('isValidLeadEmail');
      expect(src, file).not.toMatch(/\[\^\\s@\]\+@/);
    }
  });

  it('reveals server-error alerts with the shared helper instead of focusing the email field', () => {
    for (const file of LEAD_SURFACES) {
      const src = readFileSync(resolve(ROOT, file), 'utf8');
      expect(src, file).toMatch(/role="alert"\s+tabIndex=\{-1\}\s+ref=\{revealStatus\}/);
      expect(src, file).not.toContain('highLevelStatus === 400');
      expect(src, file).not.toMatch(/focusFirstInvalidField\(form, \{ workEmail: (result\.error|'invalid') \}\)/);
    }
  });

  it('uses one email rule on the server and in the browser', () => {
    const server = readFileSync(resolve(ROOT, 'src/server/highlevelLead.ts'), 'utf8');
    expect(server).toContain("from '../lib/leadEmailValidation.js'");
    expect(server).not.toMatch(/const EMAIL_RE\b/);
  });

  it('never navigates the visitor to a mailto: URL on failure', () => {
    for (const file of LEAD_SURFACES) {
      const src = readFileSync(resolve(ROOT, file), 'utf8');
      expect(src, file).not.toMatch(/window\.location\.href\s*=\s*`mailto:/);
    }
  });
});
