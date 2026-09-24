import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  planLeadWrite,
  processHighLevelLead,
  resetHighLevelLeadStateForTests,
  type GhlCustomField,
} from '@/server/highlevelLead';

const DEFS: GhlCustomField[] = [
  { id: 'msg1', fieldKey: 'contact.message', dataType: 'LARGE_TEXT' },
  { id: 'bud1', fieldKey: 'contact.budget_range', dataType: 'TEXT' },
  { id: 'job1', fieldKey: 'contact.job_title', dataType: 'TEXT' },
  { id: 'svc1', fieldKey: 'contact.service_type', dataType: 'TEXT' },
  { id: 'note1', fieldKey: 'contact.brief_description_of_your_situation', dataType: 'LARGE_TEXT' },
  { id: 'radio1', fieldKey: 'contact.yes__no_12ugy', dataType: 'RADIO' },
];

const SAMPLE = {
  firstName: 'Jane',
  lastName: 'Doe',
  workEmail: 'Jane.Doe@Pfizer.com',
  phone: '+1 202 555 0143',
  company: 'Pfizer',
  country: 'United States',
  message: 'Need KSA ATU',
  budget: '$50K-150K',
  role: 'Market Access Lead',
  jobTitle: 'Director',
  timeline: '1-3 months',
  markets: 'Saudi Arabia, UAE',
  researchInterest: 'Market Access',
  formVariant: 'contact_section',
  requestType: 'Contact Request',
  utmSource: 'google',
  sourceUrl: 'https://www.bionixus.com/contact',
};

const ENV = {
  HIGHLEVEL_API_KEY: 'pit-test-token',
  HIGHLEVEL_LOCATION_ID: 'SjwWFl3GxGB1WQ1LbzLq',
};

type Call = { url: string; init: RequestInit };

function mockGhl(options?: { failWhenPhone?: boolean; customFieldsStatus?: number; upsertStatus?: number }) {
  const calls: Call[] = [];
  const fetchImpl = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    calls.push({ url, init: init || {} });
    if (url.includes('/customFields')) {
      if (options?.customFieldsStatus) {
        return new Response(JSON.stringify({ message: 'no scope' }), { status: options.customFieldsStatus });
      }
      return new Response(JSON.stringify({ customFields: DEFS }), { status: 200 });
    }
    if (url.endsWith('/contacts/upsert')) {
      const body = JSON.parse(String(init?.body || '{}')) as { phone?: string };
      if (options?.failWhenPhone && body.phone) {
        return new Response(JSON.stringify({ message: 'duplicate phone' }), { status: 400 });
      }
      if (options?.upsertStatus) {
        return new Response(JSON.stringify({ message: 'nope' }), { status: options.upsertStatus });
      }
      return new Response(JSON.stringify({ new: true, contact: { id: 'contact123' } }), { status: 200 });
    }
    if (url.includes('/tags') || url.includes('/notes')) {
      return new Response(JSON.stringify({ ok: true }), { status: 201 });
    }
    return new Response('missing', { status: 404 });
  }) as typeof fetch;
  return { calls, fetchImpl };
}

function upsertBodies(calls: Call[]) {
  return calls
    .filter((call) => call.url.endsWith('/contacts/upsert'))
    .map((call) => JSON.parse(String(call.init.body)) as Record<string, unknown>);
}

describe('planLeadWrite', () => {
  it('maps known custom fields and keeps unmapped extras in the note', () => {
    const plan = planLeadWrite(SAMPLE, 'SjwWFl3GxGB1WQ1LbzLq', DEFS);
    expect(plan.email).toBe('jane.doe@pfizer.com');
    expect(plan.upsert.email).toBe('jane.doe@pfizer.com');
    expect(plan.upsert.source).toBe('website form / contact_section');
    expect(plan.upsert.companyName).toBe('Pfizer');
    expect(plan.upsert.tags).toBeUndefined();
    expect(plan.tags).toEqual(['website-lead', 'form:contact_section']);

    const custom = plan.upsert.customFields as { id: string; fieldValue: string }[];
    const ids = custom.map((field) => field.id);
    expect(ids).toEqual(['msg1', 'bud1', 'job1', 'svc1', 'note1']);
    expect(ids).not.toContain('radio1');
    expect(custom.find((field) => field.id === 'job1')?.fieldValue).toBe('Director');
    expect(custom.find((field) => field.id === 'svc1')?.fieldValue).toBe('Market Access');
    expect(plan.note).toContain('Timeline: 1-3 months');
    expect(plan.note).toContain('Markets: Saudi Arabia, UAE');
    expect(plan.note).toContain('UTM source: google');
    expect(plan.note).toContain('Role: Market Access Lead');
  });
});

describe('processHighLevelLead', () => {
  beforeEach(() => {
    resetHighLevelLeadStateForTests();
  });

  it('refuses to run without an API key and does not call HighLevel', async () => {
    const { calls, fetchImpl } = mockGhl();
    const result = await processHighLevelLead(SAMPLE, {
      env: {},
      fetchImpl,
      skipRateLimit: true,
    });
    expect(result.status).toBe(503);
    expect(result.body.error).toBe('Lead capture is not configured');
    expect(calls).toHaveLength(0);
    expect(JSON.stringify(result.body)).not.toContain('pit-test-token');
  });

  it('upserts, tags, and notes a lead without putting the token in the response', async () => {
    const { calls, fetchImpl } = mockGhl();
    const result = await processHighLevelLead(SAMPLE, {
      env: ENV,
      fetchImpl,
      skipRateLimit: true,
      now: 1_700_000_000_000,
    });
    expect(result).toEqual({ status: 200, body: { success: true, contactId: 'contact123', new: true } });
    expect(calls.map((call) => call.url)).toEqual([
      'https://services.leadconnectorhq.com/locations/SjwWFl3GxGB1WQ1LbzLq/customFields?model=contact',
      'https://services.leadconnectorhq.com/contacts/upsert',
      'https://services.leadconnectorhq.com/contacts/contact123/tags',
      'https://services.leadconnectorhq.com/contacts/contact123/notes',
    ]);
    const auth = calls[1].init.headers as Record<string, string>;
    expect(auth.Authorization).toBe('Bearer pit-test-token');
    expect(auth.Version).toBe('2021-07-28');
    const upsert = upsertBodies(calls)[0];
    expect(upsert.tags).toBeUndefined();
    expect(upsert.phone).toBe('+1 202 555 0143');
    const tags = JSON.parse(String(calls[2].init.body)) as { tags: string[] };
    expect(tags.tags).toEqual(['website-lead', 'form:contact_section']);
    const note = JSON.parse(String(calls[3].init.body)) as { body: string };
    expect(note.body).toContain('Timeline: 1-3 months');
    expect(JSON.stringify(result.body)).not.toContain('pit-test-token');
  });

  it('retries without phone when HighLevel rejects the phone number', async () => {
    const { calls, fetchImpl } = mockGhl({ failWhenPhone: true });
    const result = await processHighLevelLead(SAMPLE, {
      env: ENV,
      fetchImpl,
      skipRateLimit: true,
    });
    expect(result.status).toBe(200);
    const bodies = upsertBodies(calls);
    expect(bodies).toHaveLength(2);
    expect(bodies[0].phone).toBe('+1 202 555 0143');
    expect(bodies[1].phone).toBeUndefined();
  });

  it('still upserts standard fields when custom field lookup fails', async () => {
    const { calls, fetchImpl } = mockGhl({ customFieldsStatus: 401 });
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await processHighLevelLead(SAMPLE, {
      env: ENV,
      fetchImpl,
      skipRateLimit: true,
    });
    expect(result.status).toBe(200);
    expect(upsertBodies(calls)[0].customFields).toBeUndefined();
    error.mockRestore();
  });

  it('accepts GHL_API_KEY as an alias and ignores a honeypot', async () => {
    const { calls, fetchImpl } = mockGhl();
    const skipped = await processHighLevelLead(
      { ...SAMPLE, companyWebsite: 'https://spam.example' },
      { env: { GHL_API_KEY: 'alias-token' }, fetchImpl, skipRateLimit: true },
    );
    expect(skipped).toEqual({ status: 200, body: { success: true, skipped: true } });
    expect(calls).toHaveLength(0);

    const invalid = await processHighLevelLead({ workEmail: 'not-an-email' }, {
      env: { GHL_API_KEY: 'alias-token' },
      fetchImpl,
      skipRateLimit: true,
    });
    expect(invalid.status).toBe(400);
    expect(calls).toHaveLength(0);
  });

  it('returns a safe error when upsert fails', async () => {
    const { fetchImpl } = mockGhl({ upsertStatus: 500 });
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = await processHighLevelLead(
      { ...SAMPLE, phone: '12' },
      { env: ENV, fetchImpl, skipRateLimit: true },
    );
    expect(result.status).toBe(502);
    expect(result.body).toEqual({ error: 'Could not save your request. Please try again.' });
    expect(JSON.stringify(result.body)).not.toContain('nope');
    error.mockRestore();
  });
});
