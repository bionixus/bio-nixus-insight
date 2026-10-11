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

  it('starts both posts before either response returns', async () => {
    const fetchMock = mockFetch({
      formspree: () => new Promise(() => {}),
      highLevel: () => new Promise(() => {}),
    });
    const pending = submitLeadDual(leadForm());
    await Promise.resolve();
    await Promise.resolve();
    const urls = fetchMock.mock.calls.map((call) => String(call[0]));
    expect(urls).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]));
    pending.catch(() => {});
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

  it('treats a HighLevel 400 email rejection as a failure even when Formspree accepted', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    mockFetch({
      formspree: () => Promise.resolve(jsonResponse({ ok: true })),
      highLevel: () => Promise.resolve(jsonResponse({ error: 'Please check your email address and try again.' }, 400)),
    });
    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(false);
    expect(result.highLevelStatus).toBe(400);
    expect(result.error).toBe('Please check your email address and try again.');
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
    }
  });

  it('never navigates the visitor to a mailto: URL on failure', () => {
    for (const file of LEAD_SURFACES) {
      const src = readFileSync(resolve(ROOT, file), 'utf8');
      expect(src, file).not.toMatch(/window\.location\.href\s*=\s*`mailto:/);
    }
  });
});
