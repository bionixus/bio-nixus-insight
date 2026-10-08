/**
 * Server-only HighLevel (LeadConnector) contact write for website leads.
 * Tokens are read from the environment. Never import this module from client code.
 *
 * Lookup order: email (GET /contacts/search/duplicate), then phone (E.164, then
 * the visitor's raw number). An email match is updated in place. Every other
 * lead is created with POST /contacts/. Upsert is never used: it matches on
 * phone and can overwrite another contact's email when the lookup misses.
 *
 * Custom fields are matched by fieldKey against the live location. IDs are not
 * hard-coded. On BioNixus Global (SjwWFl3GxGB1WQ1LbzLq) the keys that exist are
 * contact.message, contact.budget_range, contact.job_title, contact.service_type,
 * and contact.brief_description_of_your_situation (summary fallback).
 */

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';
const DEFAULT_LOCATION_ID = 'SjwWFl3GxGB1WQ1LbzLq';
const EMAIL_RE =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;
const EMAIL_CHECK_ERROR = 'Please check your email address and try again.';
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
    duplicatePhone?: boolean;
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

/**
 * E.164 form used only for duplicate lookup. The contact record keeps phoneForUpsert.
 * National numbers that start with 0 are not guessed into a country code.
 */
export function phoneToE164(raw: string | undefined): string | null {
  const usable = phoneForUpsert(raw);
  if (!usable) return null;
  const digits = usable.replace(/\D/g, '');
  if (usable.startsWith('+')) return `+${digits}`;
  if (digits.startsWith('0')) return null;
  return `+${digits}`;
}

/**
 * Phone values to try with the duplicate lookup, in order.
 * The first is E.164 when we can form one. The extras are digits with a
 * leading + and the visitor's original string. At most two extras.
 */
export function phoneLookupNumbers(raw: string | undefined): string[] {
  const usable = phoneForUpsert(raw);
  if (!usable) return [];
  const digits = usable.replace(/\D/g, '');
  const ordered = [phoneToE164(usable), digits ? `+${digits}` : null, usable];
  const out: string[] = [];
  for (const value of ordered) {
    if (!value || out.includes(value)) continue;
    out.push(value);
    if (out.length === 3) break;
  }
  return out;
}

/** Names HighLevel rejects on contact upsert. The original value still goes in the note. */
const COUNTRY_ALIASES: Record<string, string> = {
  türkiye: 'Turkey',
};

export function countryForUpsert(raw: string | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  return COUNTRY_ALIASES[trimmed.toLowerCase()] || clip(trimmed, 80);
}

export function leadSource(formVariant: string | undefined): string {
  const variant = (formVariant || '').replace(/\s+/g, ' ').trim().slice(0, 80);
  return variant ? `website form / ${variant}` : 'website form';
}

function tagSlug(value: string | undefined) {
  return (value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_:-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

export function leadTags(formVariant: string | undefined, requestType?: string): string[] {
  const tags = ['website-lead'];
  const variant = tagSlug(formVariant);
  if (variant) tags.push(`form:${variant}`);
  const request = tagSlug(requestType);
  if (request) tags.push(`request:${request}`);
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
  const country = countryForUpsert(fields.country);
  if (country) body.country = country;
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
    tags: leadTags(fields.formVariant, fields.requestType),
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
    if (Array.isArray(record.message)) {
      const parts = record.message.filter((item): item is string => typeof item === 'string' && Boolean(item.trim()));
      if (parts.length) return parts.join('; ');
    }
    if (typeof record.error === 'string' && record.error.trim()) return record.error.trim();
  }
  return response.text.slice(0, 180);
}

function countryRejected(response: GhlResponse) {
  if (response.status !== 400 && response.status !== 422) return false;
  return /country/i.test(errorMessage(response));
}

function highLevelErrorText(response: GhlResponse): string {
  const chunks: string[] = [errorMessage(response)];
  const json = response.json;
  if (json && typeof json === 'object') {
    const record = json as Record<string, unknown>;
    if (typeof record.error === 'string') chunks.push(record.error);
    const errors = record.errors;
    if (Array.isArray(errors)) {
      for (const item of errors) {
        if (typeof item === 'string') chunks.push(item);
        else if (item && typeof item === 'object') {
          const row = item as Record<string, unknown>;
          for (const key of ['message', 'field', 'property', 'param']) {
            if (typeof row[key] === 'string') chunks.push(row[key]);
          }
        }
      }
    } else if (errors && typeof errors === 'object') {
      for (const [key, value] of Object.entries(errors as Record<string, unknown>)) {
        chunks.push(key);
        if (typeof value === 'string') chunks.push(value);
        else if (Array.isArray(value)) {
          for (const item of value) {
            if (typeof item === 'string') chunks.push(item);
          }
        }
      }
    }
  }
  return chunks.join(' ');
}

function emailRejected(response: GhlResponse) {
  if (response.status !== 400 && response.status !== 422) return false;
  return /\bemail\b/i.test(highLevelErrorText(response));
}

function emailProblem(email: string): string | null {
  if (!email) return 'A valid email is required';
  const at = email.lastIndexOf('@');
  const local = at === -1 ? email : email.slice(0, at);
  if (local.length > 64 || email.length > 254 || !EMAIL_RE.test(email)) {
    return EMAIL_CHECK_ERROR;
  }
  return null;
}

function rejectedEmailResult(response: GhlResponse): LeadResult | null {
  if (!emailRejected(response)) return null;
  console.error('[highlevel-lead] upsert rejected the email', response.status);
  return { status: 400, body: { error: EMAIL_CHECK_ERROR } };
}

function omitCountry(body: Record<string, unknown>) {
  if (!('country' in body)) return null;
  const next = { ...body };
  delete next.country;
  return next;
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

const PHONE_FIELD_KEY = /(^|\.)(phone|mobile|phone_number)$/i;
const DUPLICATES_DISALLOWED = /does not allow duplicated contacts/i;
const SAVE_ERROR = 'Could not save your request. Please try again.';

type DuplicateContact = { id: string; email: string };

function duplicateContactFrom(json: unknown): DuplicateContact | null {
  if (!json || typeof json !== 'object') return null;
  const contact = (json as { contact?: unknown }).contact;
  if (!contact || typeof contact !== 'object') return null;
  const record = contact as { id?: unknown; email?: unknown };
  const id = typeof record.id === 'string' && /^[A-Za-z0-9]+$/.test(record.id) ? record.id : undefined;
  if (!id) return null;
  const email = typeof record.email === 'string' ? record.email.trim().toLowerCase() : '';
  return { id, email };
}

function duplicatesDisallowed(response: GhlResponse) {
  if (response.status !== 400 && response.status !== 422) return false;
  return DUPLICATES_DISALLOWED.test(highLevelErrorText(response));
}

/** Present on the duplicate-blocked error. Never used as a write target for a phone match. */
function blockedDuplicateId(response: GhlResponse): string | undefined {
  const json = response.json;
  if (!json || typeof json !== 'object') return undefined;
  const meta = (json as { meta?: { contactId?: unknown } }).meta;
  const id = meta?.contactId;
  return typeof id === 'string' && /^[A-Za-z0-9]+$/.test(id) ? id : undefined;
}

function matchingField(response: GhlResponse): string {
  const json = response.json;
  if (!json || typeof json !== 'object') return '';
  const meta = (json as { meta?: { matchingField?: unknown; matching_field?: unknown } }).meta;
  const raw = meta?.matchingField ?? meta?.matching_field;
  return typeof raw === 'string' ? raw.trim().toLowerCase() : '';
}

/** True only when HighLevel says the duplicate collision was the email, not the phone. */
function duplicateMatchedOnEmail(response: GhlResponse): boolean {
  const field = matchingField(response);
  if (field && /\bemail\b/i.test(field)) return true;
  return /\b(?:matched|matching|duplicate)\b[^.]{0,40}\bemail\b/i.test(highLevelErrorText(response));
}

function saveFailure(): LeadResult {
  return { status: 502, body: { error: SAVE_ERROR } };
}

function leadSaved(contactId: string | undefined, created: boolean | undefined, duplicatePhone = false): LeadResult {
  return {
    status: 200,
    body: {
      success: true,
      ...(contactId ? { contactId } : {}),
      ...(typeof created === 'boolean' ? { new: created } : {}),
      ...(duplicatePhone ? { duplicatePhone: true } : {}),
    },
  };
}

function bodyForUpdate(body: Record<string, unknown>) {
  const next = { ...body };
  delete next.locationId;
  return next;
}

function duplicatePhoneNote(other: DuplicateContact, storedPhone: string | null, original: string) {
  const shown = other.email.trim() || 'no email';
  const lines = [`Phone also used by contact ${other.id} (${shown}) — duplicate-phone check pending`];
  if (storedPhone) lines.push(`Phone (not stored on the contact record): ${storedPhone}`);
  if (original) lines.push(original);
  return clip(lines.join('\n'), 5000);
}

function phoneStorageField(defs: GhlCustomField[], existing: unknown, phone: string) {
  const used = new Set<string>();
  if (Array.isArray(existing)) {
    for (const item of existing) {
      if (item && typeof item === 'object' && typeof (item as { id?: unknown }).id === 'string') {
        used.add((item as { id: string }).id);
      }
    }
  }
  for (const def of defs) {
    if (!def.id || used.has(def.id)) continue;
    const phoneType = def.dataType === 'PHONE';
    const keyMatch = Boolean(def.fieldKey && PHONE_FIELD_KEY.test(def.fieldKey));
    if (!phoneType && !keyMatch) continue;
    if (!textual(def)) continue;
    return { id: def.id, fieldValue: phone, field_value: phone };
  }
  return null;
}

function withoutPhoneBody(plan: LeadWritePlan, defs: GhlCustomField[], phone: string) {
  const base: Record<string, unknown> = { ...(plan.upsertWithoutPhone ?? plan.upsert) };
  delete base.phone;
  if (!phone) return base;
  const extra = phoneStorageField(defs, base.customFields, phone);
  if (extra) {
    const fields = Array.isArray(base.customFields) ? [...base.customFields] : [];
    fields.push(extra);
    base.customFields = fields;
  }
  return base;
}

async function findDuplicateContact(
  fetchImpl: typeof fetch,
  apiKey: string,
  locationId: string,
  query: { email?: string; number?: string },
): Promise<{ contact: DuplicateContact | null } | { failure: LeadResult }> {
  const params = new URLSearchParams({ locationId });
  if (query.email) params.set('email', query.email);
  if (query.number) params.set('number', query.number);
  let response: GhlResponse;
  try {
    response = await ghlFetch(fetchImpl, apiKey, `/contacts/search/duplicate?${params.toString()}`, 'GET');
  } catch (error) {
    console.error('[highlevel-lead] duplicate lookup failed', error instanceof Error ? error.message : 'unknown');
    return { failure: saveFailure() };
  }
  if (response.ok) return { contact: duplicateContactFrom(response.json) };
  if (response.status === 404 || response.status === 400 || response.status === 422) return { contact: null };
  console.error('[highlevel-lead] duplicate lookup failed', response.status);
  return { failure: saveFailure() };
}

async function attachTagsAndNote(
  fetchImpl: typeof fetch,
  apiKey: string,
  contactId: string | undefined,
  tags: string[],
  note: string,
) {
  if (!contactId) {
    console.error('[highlevel-lead] upsert succeeded without a contact id');
    return;
  }
  const followUps: Promise<unknown>[] = [
    ghlFetch(fetchImpl, apiKey, `/contacts/${contactId}/tags`, 'POST', { tags }).catch((error) => {
      console.error('[highlevel-lead] tag update failed', error instanceof Error ? error.message : 'unknown');
    }),
  ];
  if (note) {
    followUps.push(
      ghlFetch(fetchImpl, apiKey, `/contacts/${contactId}/notes`, 'POST', { body: note }).catch((error) => {
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
}

async function resolveDuplicateCreate(
  fetchImpl: typeof fetch,
  apiKey: string,
  defs: GhlCustomField[],
  plan: LeadWritePlan,
  response: GhlResponse,
  storedPhone: string,
  knownOther: DuplicateContact | null,
): Promise<LeadResult> {
  if (duplicateMatchedOnEmail(response)) {
    const id = blockedDuplicateId(response);
    if (!id) {
      console.error('[highlevel-lead] duplicate email match missing contact id');
      return saveFailure();
    }
    return updateMatchedContact(fetchImpl, apiKey, id, plan);
  }
  const blockedId = blockedDuplicateId(response);
  const other = knownOther ?? { id: blockedId || 'unknown', email: '' };
  return createWithoutSharedPhone(fetchImpl, apiKey, defs, plan, other, storedPhone, blockedId);
}

async function createContact(
  fetchImpl: typeof fetch,
  apiKey: string,
  defs: GhlCustomField[],
  plan: LeadWritePlan,
  options: {
    allowPhoneRetry: boolean;
    tags: string[];
    note: string;
    duplicatePhone: boolean;
    storedPhone: string;
    knownOther: DuplicateContact | null;
  },
): Promise<LeadResult> {
  let payload = plan.upsert;
  let created = await ghlFetch(fetchImpl, apiKey, '/contacts/', 'POST', payload);
  const rejected = rejectedEmailResult(created);
  if (rejected) return rejected;
  if (duplicatesDisallowed(created)) {
    return resolveDuplicateCreate(
      fetchImpl,
      apiKey,
      defs,
      plan,
      created,
      options.storedPhone,
      options.knownOther,
    );
  }
  const retryableStatus = created.status === 400 || created.status === 409 || created.status === 422;
  if (options.allowPhoneRetry && !created.ok && plan.upsertWithoutPhone && retryableStatus) {
    console.warn('[highlevel-lead] retrying create without phone', created.status);
    payload = plan.upsertWithoutPhone;
    created = await ghlFetch(fetchImpl, apiKey, '/contacts/', 'POST', payload);
    const rejectedAfterPhone = rejectedEmailResult(created);
    if (rejectedAfterPhone) return rejectedAfterPhone;
    if (duplicatesDisallowed(created)) {
      return resolveDuplicateCreate(
        fetchImpl,
        apiKey,
        defs,
        plan,
        created,
        options.storedPhone,
        options.knownOther,
      );
    }
  }
  if (!created.ok && countryRejected(created)) {
    const stripped = omitCountry(payload);
    if (stripped) {
      console.warn('[highlevel-lead] retrying create without country', created.status);
      payload = stripped;
      created = await ghlFetch(fetchImpl, apiKey, '/contacts/', 'POST', payload);
      const rejectedAfterCountry = rejectedEmailResult(created);
      if (rejectedAfterCountry) return rejectedAfterCountry;
      if (duplicatesDisallowed(created)) {
        return resolveDuplicateCreate(
          fetchImpl,
          apiKey,
          defs,
          plan,
          created,
          options.storedPhone,
          options.knownOther,
        );
      }
    }
  }
  if (!created.ok) {
    console.error('[highlevel-lead] create failed', created.status, errorMessage(created));
    return saveFailure();
  }
  const id = contactIdFrom(created.json);
  await attachTagsAndNote(fetchImpl, apiKey, id, options.tags, options.note);
  return leadSaved(id, true, options.duplicatePhone);
}

async function updateMatchedContact(
  fetchImpl: typeof fetch,
  apiKey: string,
  contactId: string,
  plan: LeadWritePlan,
): Promise<LeadResult> {
  let payload = bodyForUpdate(plan.upsert);
  const withoutPhone = plan.upsertWithoutPhone ? bodyForUpdate(plan.upsertWithoutPhone) : undefined;
  let updated = await ghlFetch(fetchImpl, apiKey, `/contacts/${contactId}`, 'PUT', payload);
  const rejected = rejectedEmailResult(updated);
  if (rejected) return rejected;
  const retryableStatus = updated.status === 400 || updated.status === 409 || updated.status === 422;
  if (!updated.ok && withoutPhone && retryableStatus) {
    console.warn('[highlevel-lead] retrying update without phone', updated.status);
    payload = withoutPhone;
    updated = await ghlFetch(fetchImpl, apiKey, `/contacts/${contactId}`, 'PUT', payload);
    const rejectedAfterPhone = rejectedEmailResult(updated);
    if (rejectedAfterPhone) return rejectedAfterPhone;
  }
  if (!updated.ok && countryRejected(updated)) {
    const stripped = omitCountry(payload);
    if (stripped) {
      console.warn('[highlevel-lead] retrying update without country', updated.status);
      payload = stripped;
      updated = await ghlFetch(fetchImpl, apiKey, `/contacts/${contactId}`, 'PUT', payload);
    }
  }
  const rejectedAfterRetry = rejectedEmailResult(updated);
  if (rejectedAfterRetry) return rejectedAfterRetry;
  if (!updated.ok) {
    console.error('[highlevel-lead] update failed', updated.status, errorMessage(updated));
    return saveFailure();
  }
  const id = contactIdFrom(updated.json) || contactId;
  await attachTagsAndNote(fetchImpl, apiKey, id, plan.tags, plan.note);
  return leadSaved(id, false);
}

async function createWithoutSharedPhone(
  fetchImpl: typeof fetch,
  apiKey: string,
  defs: GhlCustomField[],
  plan: LeadWritePlan,
  other: DuplicateContact,
  storedPhone: string,
  blockedId?: string,
): Promise<LeadResult> {
  console.warn(
    `[highlevel-lead] HighLevel refused a duplicate contact${blockedId ? ` (${blockedId} left unchanged)` : ''}. The location's Allow Duplicate Contact setting must be enabled.`,
  );
  let payload = withoutPhoneBody(plan, defs, storedPhone);
  let created = await ghlFetch(fetchImpl, apiKey, '/contacts/', 'POST', payload);
  const rejected = rejectedEmailResult(created);
  if (rejected) return rejected;
  if (!created.ok && countryRejected(created)) {
    const stripped = omitCountry(payload);
    if (stripped) {
      console.warn('[highlevel-lead] retrying create without country', created.status);
      payload = stripped;
      created = await ghlFetch(fetchImpl, apiKey, '/contacts/', 'POST', payload);
    }
  }
  const rejectedAfterRetry = rejectedEmailResult(created);
  if (rejectedAfterRetry) return rejectedAfterRetry;
  if (!created.ok) {
    console.error('[highlevel-lead] create failed', created.status, errorMessage(created));
    return saveFailure();
  }
  const id = contactIdFrom(created.json);
  const note = duplicatePhoneNote(other, storedPhone, plan.note);
  await attachTagsAndNote(fetchImpl, apiKey, id, [...plan.tags, 'phone-duplicate', 'phone-not-saved'], note);
  return leadSaved(id, true, true);
}

async function createPhoneDuplicate(
  fetchImpl: typeof fetch,
  apiKey: string,
  defs: GhlCustomField[],
  plan: LeadWritePlan,
  other: DuplicateContact,
  storedPhone: string,
): Promise<LeadResult> {
  return createContact(fetchImpl, apiKey, defs, plan, {
    allowPhoneRetry: false,
    tags: [...plan.tags, 'phone-duplicate'],
    note: duplicatePhoneNote(other, null, plan.note),
    duplicatePhone: true,
    storedPhone,
    knownOther: other,
  });
}

export async function processHighLevelLead(rawBody: unknown, options: ProcessOptions = {}): Promise<LeadResult> {
  const env = options.env || process.env;
  const fetchImpl = options.fetchImpl || fetch;
  const now = options.now ?? Date.now();
  const { apiKey, locationId } = resolveConfig(env);
  if (!apiKey) {
    return { status: 503, body: { error: 'Lead capture is not configured' } };
  }
  // A location id in HIGHLEVEL_API_KEY is non-empty, so it used to pass the
  // check above and then fail every upsert with a generic 502.
  if (apiKey === locationId || apiKey === DEFAULT_LOCATION_ID) {
    console.error(
      '[highlevel-lead] HIGHLEVEL_API_KEY is the location id, not a Private Integration token. Set a contacts-write token in Vercel Production.',
    );
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
  const emailError = emailProblem(email);
  if (emailError) {
    return { status: 400, body: { error: emailError } };
  }

  const defs = await loadCustomFields(fetchImpl, apiKey, locationId, now);
  const plan = planLeadWrite(fields, locationId, defs);

  try {
    const byEmail = await findDuplicateContact(fetchImpl, apiKey, locationId, { email: plan.email });
    if ('failure' in byEmail) return byEmail.failure;
    if (byEmail.contact?.email === plan.email) {
      return await updateMatchedContact(fetchImpl, apiKey, byEmail.contact.id, plan);
    }

    const storedPhone = phoneForUpsert(fields.phone) || phoneToE164(fields.phone) || '';
    for (const number of phoneLookupNumbers(fields.phone)) {
      const byPhone = await findDuplicateContact(fetchImpl, apiKey, locationId, { number });
      if ('failure' in byPhone) return byPhone.failure;
      if (!byPhone.contact) continue;
      if (byPhone.contact.email === plan.email) {
        return await updateMatchedContact(fetchImpl, apiKey, byPhone.contact.id, plan);
      }
      return await createPhoneDuplicate(fetchImpl, apiKey, defs, plan, byPhone.contact, storedPhone || number);
    }

    return await createContact(fetchImpl, apiKey, defs, plan, {
      allowPhoneRetry: true,
      tags: plan.tags,
      note: plan.note,
      duplicatePhone: false,
      storedPhone,
      knownOther: null,
    });
  } catch (error) {
    console.error('[highlevel-lead] lead write error', error instanceof Error ? error.message : 'unknown');
    return saveFailure();
  }
}

export function clientIpFromHeaders(headers: Record<string, string | string[] | undefined> | undefined) {
  const forwarded = headers?.['x-forwarded-for'] || headers?.['X-Forwarded-For'];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  const ip = (raw || '').split(',')[0]?.trim();
  return ip || 'unknown';
}
