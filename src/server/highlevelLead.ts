/**
 * Server-only HighLevel (LeadConnector) contact upsert for website leads.
 * Tokens are read from the environment. Never import this module from client code.
 *
 * Custom fields are matched by fieldKey against the live location. IDs are not
 * hard-coded. On BioNixus Global (SjwWFl3GxGB1WQ1LbzLq) the keys that exist are
 * contact.message, contact.budget_range, contact.job_title, contact.service_type,
 * and contact.brief_description_of_your_situation (summary fallback).
 */

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';
const DEFAULT_LOCATION_ID = 'SjwWFl3GxGB1WQ1LbzLq';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CACHE_MS = 10 * 60 * 1000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 20;

const HONEYPOT_KEYS = ['companyWebsite', 'hp_company'] as const;

const DIRECT_CUSTOM_FIELDS: { fieldKey: string; keys: string[]; max: number }[] = [
  { fieldKey: 'contact.message', keys: ['message'], max: 4000 },
  { fieldKey: 'contact.budget_range', keys: ['budget'], max: 500 },
  { fieldKey: 'contact.job_title', keys: ['jobTitle', 'role'], max: 200 },
  { fieldKey: 'contact.service_type', keys: ['need', 'researchInterest', 'requestType'], max: 500 },
];

const SUMMARY_FIELD_KEYS = [
  'contact.brief_description_of_your_situation',
  'contact.conversation_summary',
];

const TEXTUAL_TYPES = new Set(['TEXT', 'LARGE_TEXT', 'PHONE', 'NUMERICAL']);

const NOTE_LABELS: [string, string][] = [
  ['requestType', 'Request type'],
  ['formVariant', 'Form'],
  ['sourcePage', 'Page'],
  ['sourceUrl', 'URL'],
  ['reportName', 'Report'],
  ['caseStudyTitle', 'Case study'],
  ['sourceContext', 'Context'],
  ['message', 'Message'],
  ['researchInterest', 'Research interest'],
  ['need', 'Need'],
  ['role', 'Role'],
  ['jobTitle', 'Job title'],
  ['markets', 'Markets'],
  ['country', 'Country'],
  ['timeline', 'Timeline'],
  ['budget', 'Budget'],
  ['referralSource', 'Referral source'],
  ['consent', 'Consent'],
  ['qualified', 'Qualified'],
  ['utmSource', 'UTM source'],
  ['utmMedium', 'UTM medium'],
  ['utmCampaign', 'UTM campaign'],
  ['utmContent', 'UTM content'],
  ['utmTerm', 'UTM term'],
];

const NOTE_SKIP = new Set<string>([
  ...HONEYPOT_KEYS,
  '_subject',
  'firstName',
  'lastName',
  'email',
  'workEmail',
  'phone',
  'company',
  'companyName',
]);

export type GhlCustomField = {
  id?: string;
  fieldKey?: string;
  dataType?: string;
};

export type LeadWritePlan = {
  email: string;
  upsert: Record<string, unknown>;
  upsertWithoutPhone?: Record<string, unknown>;
  tags: string[];
  note: string;
};

type LeadResult = {
  status: number;
  body: {
    success?: boolean;
    contactId?: string;
    new?: boolean;
    skipped?: boolean;
    error?: string;
  };
};

type ProcessOptions = {
  env?: Record<string, string | undefined>;
  fetchImpl?: typeof fetch;
  now?: number;
  ip?: string;
  skipRateLimit?: boolean;
};

let fieldCache: { at: number; locationId: string; fields: GhlCustomField[] } | null = null;
const rateHits = new Map<string, number[]>();

export function resetHighLevelLeadStateForTests() {
  fieldCache = null;
  rateHits.clear();
}

function clip(value: string, max: number) {
  const trimmed = value.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, Math.max(0, max - 1))}…`;
}

export function readLeadFields(body: unknown): Record<string, string> | null {
  let source = body;
  if (typeof source === 'string') {
    try {
      source = JSON.parse(source);
    } catch {
      return null;
    }
  }
  if (!source || typeof source !== 'object' || Array.isArray(source)) return null;
  const out: Record<string, string> = {};
  let count = 0;
  for (const [key, value] of Object.entries(source as Record<string, unknown>)) {
    if (!/^[A-Za-z_][A-Za-z0-9_]{0,64}$/.test(key)) continue;
    count += 1;
    if (count > 60) break;
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (trimmed) out[key] = trimmed.slice(0, 4000);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      out[key] = String(value);
    }
  }
  return out;
}

export function leadEmail(fields: Record<string, string>): string {
  return (fields.workEmail || fields.email || '').trim().toLowerCase();
}

export function phoneForUpsert(raw: string | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15) return null;
  if (!/^[\d\s+().-]+$/.test(trimmed)) return null;
  return trimmed;
}

export function leadSource(formVariant: string | undefined): string {
  const variant = (formVariant || '').replace(/\s+/g, ' ').trim().slice(0, 80);
  return variant ? `website form / ${variant}` : 'website form';
}

export function leadTags(formVariant: string | undefined): string[] {
  const tags = ['website-lead'];
  const variant = (formVariant || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_:-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
  if (variant) tags.push(`form:${variant}`);
  return tags;
}

export function buildNote(fields: Record<string, string>): string {
  const name = [fields.firstName, fields.lastName].filter(Boolean).join(' ').trim();
  const email = leadEmail(fields);
  const header = ['Website lead', name, email ? `<${email}>` : ''].filter(Boolean).join(' ');
  const lines = [header];
  const used = new Set<string>(NOTE_SKIP);
  for (const [key, label] of NOTE_LABELS) {
    const value = fields[key];
    if (!value) continue;
    used.add(key);
    lines.push(`${label}: ${value}`);
  }
  if (fields.phone && !phoneForUpsert(fields.phone)) {
    lines.push(`Phone (not stored on the contact record): ${fields.phone}`);
    used.add('phone');
  }
  for (const [key, value] of Object.entries(fields)) {
    if (used.has(key) || !value) continue;
    lines.push(`${key}: ${value}`);
  }
  return clip(lines.join('\n'), 5000);
}

function textual(field: GhlCustomField) {
  if (!field.dataType) return true;
  return TEXTUAL_TYPES.has(field.dataType);
}

export function mapCustomFields(fields: Record<string, string>, defs: GhlCustomField[], note: string) {
  const byKey = new Map<string, GhlCustomField>();
  for (const def of defs) {
    if (def.id && def.fieldKey) byKey.set(def.fieldKey, def);
  }
  const customFields: { id: string; fieldValue: string; field_value: string }[] = [];
  const usedIds = new Set<string>();
  const pushField = (id: string, value: string) => {
    const clipped = value;
    // Version 2021-07-28 reads field_value. Newer payloads prefer fieldValue.
    customFields.push({ id, fieldValue: clipped, field_value: clipped });
    usedIds.add(id);
  };
  for (const map of DIRECT_CUSTOM_FIELDS) {
    const def = byKey.get(map.fieldKey);
    if (!def?.id || !textual(def) || usedIds.has(def.id)) continue;
    const value = map.keys.map((key) => fields[key]).find((item) => item && item.trim());
    if (!value) continue;
    pushField(def.id, clip(value, map.max));
  }
  if (note) {
    for (const key of SUMMARY_FIELD_KEYS) {
      const def = byKey.get(key);
      if (!def?.id || !textual(def) || usedIds.has(def.id)) continue;
      pushField(def.id, clip(note, 4000));
      break;
    }
  }
  return customFields;
}

export function buildUpsertBody(
  fields: Record<string, string>,
  locationId: string,
  customFields: { id: string; fieldValue: string; field_value: string }[],
  includePhone: boolean,
): Record<string, unknown> {
  const email = leadEmail(fields);
  const body: Record<string, unknown> = {
    locationId,
    email,
    source: leadSource(fields.formVariant),
  };
  const firstName = fields.firstName?.trim();
  const lastName = fields.lastName?.trim();
  if (firstName) body.firstName = clip(firstName, 100);
  if (lastName) body.lastName = clip(lastName, 100);
  const name = [firstName, lastName].filter(Boolean).join(' ').trim();
  if (name) body.name = clip(name, 200);
  const company = (fields.company || fields.companyName || '').trim();
  if (company) body.companyName = clip(company, 200);
  if (fields.country) body.country = clip(fields.country, 80);
  if (includePhone) {
    const phone = phoneForUpsert(fields.phone);
    if (phone) body.phone = phone;
  }
  if (customFields.length) body.customFields = customFields;
  return body;
}

export function planLeadWrite(
  fields: Record<string, string>,
  locationId: string,
  defs: GhlCustomField[],
): LeadWritePlan {
  const note = buildNote(fields);
  const customFields = mapCustomFields(fields, defs, note);
  const upsert = buildUpsertBody(fields, locationId, customFields, true);
  const plan: LeadWritePlan = {
    email: leadEmail(fields),
    upsert,
    tags: leadTags(fields.formVariant),
    note,
  };
  if (upsert.phone) plan.upsertWithoutPhone = buildUpsertBody(fields, locationId, customFields, false);
  return plan;
}

function resolveConfig(env: Record<string, string | undefined>) {
  const apiKey = (env.HIGHLEVEL_API_KEY || env.GHL_API_KEY || '').trim();
  const rawLocation = (env.HIGHLEVEL_LOCATION_ID || env.GHL_LOCATION_ID || '').trim();
  const locationId = /^[A-Za-z0-9]{10,40}$/.test(rawLocation) ? rawLocation : DEFAULT_LOCATION_ID;
  return { apiKey, locationId };
}

function rateLimited(ip: string, now: number) {
  const prev = (rateHits.get(ip) || []).filter((stamp) => now - stamp < RATE_WINDOW_MS);
  if (prev.length >= RATE_MAX) {
    rateHits.set(ip, prev);
    return true;
  }
  prev.push(now);
  rateHits.set(ip, prev);
  return false;
}

type GhlResponse = { ok: boolean; status: number; json: unknown; text: string };

async function ghlFetch(
  fetchImpl: typeof fetch,
  apiKey: string,
  path: string,
  method: string,
  body?: unknown,
): Promise<GhlResponse> {
  const res = await fetchImpl(`${GHL_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: GHL_VERSION,
      Accept: 'application/json',
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json: unknown = null;
  if (text) {
    try {
      json = JSON.parse(text);
    } catch {
      json = null;
    }
  }
  return { ok: res.ok, status: res.status, json, text };
}

function errorMessage(response: GhlResponse) {
  const json = response.json;
  if (json && typeof json === 'object') {
    const record = json as { message?: unknown; error?: unknown };
    if (typeof record.message === 'string' && record.message.trim()) return record.message.trim();
    if (typeof record.error === 'string' && record.error.trim()) return record.error.trim();
  }
  return response.text.slice(0, 180);
}

async function loadCustomFields(
  fetchImpl: typeof fetch,
  apiKey: string,
  locationId: string,
  now: number,
): Promise<GhlCustomField[]> {
  if (fieldCache && fieldCache.locationId === locationId && now - fieldCache.at < CACHE_MS) {
    return fieldCache.fields;
  }
  try {
    const response = await ghlFetch(
      fetchImpl,
      apiKey,
      `/locations/${encodeURIComponent(locationId)}/customFields?model=contact`,
      'GET',
    );
    if (!response.ok) {
      console.error('[highlevel-lead] custom field lookup failed', response.status);
      return [];
    }
    const json = response.json as { customFields?: GhlCustomField[] } | null;
    const fields = Array.isArray(json?.customFields) ? json.customFields : [];
    fieldCache = { at: now, locationId, fields };
    return fields;
  } catch (error) {
    console.error('[highlevel-lead] custom field lookup error', error instanceof Error ? error.message : 'unknown');
    return [];
  }
}

function contactIdFrom(json: unknown): string | undefined {
  if (!json || typeof json !== 'object') return undefined;
  const record = json as { contact?: { id?: unknown }; contactId?: unknown; id?: unknown };
  const id = record.contact?.id || record.contactId;
  return typeof id === 'string' && /^[A-Za-z0-9]+$/.test(id) ? id : undefined;
}

function createdFlag(json: unknown): boolean | undefined {
  if (!json || typeof json !== 'object') return undefined;
  const value = (json as { new?: unknown }).new;
  return typeof value === 'boolean' ? value : undefined;
}

export async function processHighLevelLead(rawBody: unknown, options: ProcessOptions = {}): Promise<LeadResult> {
  const env = options.env || process.env;
  const fetchImpl = options.fetchImpl || fetch;
  const now = options.now ?? Date.now();
  const { apiKey, locationId } = resolveConfig(env);
  if (!apiKey) {
    return { status: 503, body: { error: 'Lead capture is not configured' } };
  }
  if (!options.skipRateLimit && options.ip && rateLimited(options.ip, now)) {
    return { status: 429, body: { error: 'Too many requests' } };
  }

  const fields = readLeadFields(rawBody);
  if (!fields) return { status: 400, body: { error: 'Invalid request' } };
  if (HONEYPOT_KEYS.some((key) => fields[key])) {
    return { status: 200, body: { success: true, skipped: true } };
  }

  const email = leadEmail(fields);
  if (!email || !EMAIL_RE.test(email)) {
    return { status: 400, body: { error: 'A valid email is required' } };
  }

  const defs = await loadCustomFields(fetchImpl, apiKey, locationId, now);
  const plan = planLeadWrite(fields, locationId, defs);

  let upserted: GhlResponse;
  try {
    upserted = await ghlFetch(fetchImpl, apiKey, '/contacts/upsert', 'POST', plan.upsert);
    const retryableStatus = upserted.status === 400 || upserted.status === 409 || upserted.status === 422;
    if (!upserted.ok && plan.upsertWithoutPhone && retryableStatus) {
      console.warn('[highlevel-lead] retrying upsert without phone', upserted.status);
      upserted = await ghlFetch(fetchImpl, apiKey, '/contacts/upsert', 'POST', plan.upsertWithoutPhone);
    }
  } catch (error) {
    console.error('[highlevel-lead] upsert error', error instanceof Error ? error.message : 'unknown');
    return { status: 502, body: { error: 'Could not save your request. Please try again.' } };
  }

  if (!upserted.ok) {
    console.error('[highlevel-lead] upsert failed', upserted.status, errorMessage(upserted));
    return { status: 502, body: { error: 'Could not save your request. Please try again.' } };
  }

  const contactId = contactIdFrom(upserted.json);
  const created = createdFlag(upserted.json);
  if (contactId) {
    const followUps: Promise<unknown>[] = [
      ghlFetch(fetchImpl, apiKey, `/contacts/${contactId}/tags`, 'POST', { tags: plan.tags }).catch((error) => {
        console.error('[highlevel-lead] tag update failed', error instanceof Error ? error.message : 'unknown');
      }),
    ];
    if (plan.note) {
      followUps.push(
        ghlFetch(fetchImpl, apiKey, `/contacts/${contactId}/notes`, 'POST', { body: plan.note }).catch((error) => {
          console.error('[highlevel-lead] note create failed', error instanceof Error ? error.message : 'unknown');
        }),
      );
    }
    const settled = await Promise.allSettled(followUps);
    for (const item of settled) {
      if (item.status === 'fulfilled' && item.value && typeof item.value === 'object' && 'ok' in item.value) {
        const response = item.value as GhlResponse;
        if (!response.ok) console.error('[highlevel-lead] follow-up failed', response.status);
      }
    }
  } else {
    console.error('[highlevel-lead] upsert succeeded without a contact id');
  }

  return {
    status: 200,
    body: {
      success: true,
      ...(contactId ? { contactId } : {}),
      ...(typeof created === 'boolean' ? { new: created } : {}),
    },
  };
}

export function clientIpFromHeaders(headers: Record<string, string | string[] | undefined> | undefined) {
  const forwarded = headers?.['x-forwarded-for'] || headers?.['X-Forwarded-For'];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  const ip = (raw || '').split(',')[0]?.trim();
  return ip || 'unknown';
}
