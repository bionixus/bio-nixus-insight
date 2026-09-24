import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { FORMSPREE_ENDPOINT, submitLeadDual } from '@/lib/submitLeadDual';

const ROOT = resolve(__dirname, '../../..');

const LEAD_SURFACES = [
  'src/components/ContactSection.tsx',
  'src/components/conversion/QualificationForm.tsx',
  'src/components/conversion/GatedAssetForm.tsx',
  'src/components/CaseStudyContactGate.tsx',
  'src/components/WhatsAppProposalWidget.tsx',
  'src/pages/ClinicalDiagnosticsProposalRequest.tsx',
  'src/components/conversion/EmailCaptureForm.tsx',
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
  data.set('company', 'Pfizer');
  data.set('formVariant', 'contact_section');
  data.set('message', 'Need a proposal');
  return data;
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('submitLeadDual', () => {
  it('posts Formspree and HighLevel together', async () => {
    const urls: string[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo) => {
        urls.push(String(input));
        if (String(input) === FORMSPREE_ENDPOINT) return jsonResponse({ ok: true });
        if (String(input) === '/api/highlevel-lead') return jsonResponse({ success: true, contactId: 'c1' });
        throw new Error(`unexpected ${String(input)}`);
      }),
    );

    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(true);
    expect(result.formspreeOk).toBe(true);
    expect(result.highLevelOk).toBe(true);
    expect(urls).toContain(FORMSPREE_ENDPOINT);
    expect(urls).toContain('/api/highlevel-lead');

    const hlCall = (fetch as ReturnType<typeof vi.fn>).mock.calls.find((call) => String(call[0]) === '/api/highlevel-lead');
    const body = JSON.parse(String(hlCall?.[1]?.body));
    expect(body.workEmail).toBe('buyer@pfizer.com');
    expect(body.message).toBe('Need a proposal');
    expect(JSON.stringify(hlCall?.[1]?.headers || {})).not.toMatch(/Bearer|HIGHLEVEL_API_KEY|pit-/);
  });

  it('starts both posts before either response returns', async () => {
    const urls: string[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo) => {
        urls.push(String(input));
        return new Promise(() => {});
      }),
    );
    const pending = submitLeadDual(leadForm());
    await Promise.resolve();
    await Promise.resolve();
    expect(urls).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, '/api/highlevel-lead']));
    pending.catch(() => {});
  });

  it('succeeds when Formspree is over quota and HighLevel accepts the lead', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo) => {
        if (String(input) === FORMSPREE_ENDPOINT) {
          return jsonResponse({ error: 'Form quota exceeded' }, 422);
        }
        return jsonResponse({ success: true, contactId: 'c1', new: true });
      }),
    );
    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(true);
    expect(result.formspreeOk).toBe(false);
    expect(result.highLevelOk).toBe(true);
    expect(result.formspreeError).toBe('Form quota exceeded');
    expect(warn).toHaveBeenCalled();
  });

  it('fails only when both channels fail', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo) => {
        if (String(input) === FORMSPREE_ENDPOINT) return Promise.reject(new Error('offline'));
        return jsonResponse({ error: 'Could not save your request. Please try again.' }, 502);
      }),
    );
    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(false);
    expect(result.formspreeNetworkError).toBe('offline');
    expect(result.highLevelOk).toBe(false);
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

describe('lead form surfaces', () => {
  it('routes every Formspree surface through the shared helper and keeps the Formspree URL server-side of the client token', () => {
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
    }
  });
});
