import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { FORMSPREE_ENDPOINT, submitLeadDual, submitScopingCallLead } from '@/lib/submitLeadDual';

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

describe('submitLeadDual (default: HighLevel only)', () => {
  it('posts to HighLevel and never to Formspree', async () => {
    const urls: string[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo) => {
        urls.push(String(input));
        if (String(input) === '/api/highlevel-lead') return jsonResponse({ success: true, contactId: 'c1' });
        throw new Error(`unexpected ${String(input)}`);
      }),
    );

    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(true);
    expect(result.channels).toBe('highlevel-only');
    expect(result.formspreeOk).toBe(false);
    expect(result.highLevelOk).toBe(true);
    expect(urls).toEqual(['/api/highlevel-lead']);
    expect(urls).not.toContain(FORMSPREE_ENDPOINT);

    const hlCall = (fetch as ReturnType<typeof vi.fn>).mock.calls.find((call) => String(call[0]) === '/api/highlevel-lead');
    const body = JSON.parse(String(hlCall?.[1]?.body));
    expect(body.workEmail).toBe('buyer@pfizer.com');
    expect(body.message).toBe('Need a proposal');
    expect(JSON.stringify(hlCall?.[1]?.headers || {})).not.toMatch(/Bearer|HIGHLEVEL_API_KEY|pit-/);
  });

  it('surfaces the HighLevel error message when the only channel fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => jsonResponse({ error: 'Could not save your request. Please try again.' }, 502)),
    );
    const result = await submitLeadDual(leadForm());
    expect(result.ok).toBe(false);
    expect(result.error).toBe('Could not save your request. Please try again.');
    expect(result.networkError).toBeUndefined();
  });

  it('reports a network error when HighLevel is unreachable', async () => {
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

describe('submitScopingCallLead (Formspree + HighLevel)', () => {
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

    const result = await submitScopingCallLead(leadForm());
    expect(result.ok).toBe(true);
    expect(result.channels).toBe('scoping-call');
    expect(result.formspreeOk).toBe(true);
    expect(result.highLevelOk).toBe(true);
    expect(urls).toContain(FORMSPREE_ENDPOINT);
    expect(urls).toContain('/api/highlevel-lead');
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
    const pending = submitScopingCallLead(leadForm());
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
    const result = await submitScopingCallLead(leadForm());
    expect(result.ok).toBe(true);
    expect(result.formspreeOk).toBe(false);
    expect(result.highLevelOk).toBe(true);
    expect(result.formspreeError).toBe('Form quota exceeded');
    expect(result.error).toBeUndefined();
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
    const result = await submitScopingCallLead(leadForm());
    expect(result.ok).toBe(false);
    expect(result.formspreeNetworkError).toBe('offline');
    expect(result.highLevelOk).toBe(false);
    expect(result.error).toBe('Could not save your request. Please try again.');
    // Only one of two channels failed at the network level, so this is not a network-only failure.
    expect(result.networkError).toBeUndefined();
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
    }
  });

  it('only the scoping-call form references Formspree; every other surface is HighLevel-only', () => {
    for (const file of LEAD_SURFACES) {
      const src = readFileSync(resolve(ROOT, file), 'utf8');
      const isScopingCall = file.endsWith('QualificationForm.tsx');
      if (isScopingCall) {
        expect(src, file).toContain('submitScopingCallLead');
      } else {
        expect(src, file).not.toContain('FORMSPREE_ENDPOINT');
        expect(src, file).not.toContain('submitScopingCallLead');
        expect(src, file).not.toContain("channels: 'scoping-call'");
      }
    }
  });
});
