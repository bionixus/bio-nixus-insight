import { trackGaEvent } from '@/lib/analytics';
import { leadEmailProblem } from '@/lib/leadEmailValidation';

/** Formspree form that emails every website lead to the team. */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';

export const HIGHLEVEL_LEAD_ENDPOINT = '/api/highlevel-lead';
const HONEYPOT_KEYS = ['companyWebsite', 'hp_company'] as const;

export type DualLeadResult = {
  /** True when at least one destination accepted the lead, or a honeypot short-circuit ran. */
  ok: boolean;
  /** Honeypot tripped: treat as success in the UI and skip downloads, subscribe, and analytics. */
  skipped?: boolean;
  formspreeOk: boolean;
  highLevelOk: boolean;
  /** Formspree HTTP error message, when the response included one. */
  formspreeError?: string;
  /** Formspree fetch threw before a response. */
  formspreeNetworkError?: string;
  /** HTTP status from Formspree when the response arrived. */
  formspreeStatus?: number;
  highLevelError?: string;
  /** HTTP status from `/api/highlevel-lead` when the response arrived. */
  highLevelStatus?: number;
  /** HighLevel rejected the input (400 or 422), so the lead was not sent to Formspree. */
  formspreeSkipped?: boolean;
  /** The email failed the shared rule in the browser or HighLevel rejected the input (400/422); `error` says what to fix. */
  invalidEmail?: boolean;
  /** User-facing error. Unset when `ok`. */
  error?: string;
  /** Set when the submission failed and both destinations failed at the network level. */
  networkError?: string;
};

type ChannelResult = {
  ok: boolean;
  error?: string;
  networkError?: string;
  status?: number;
};

export function isLeadHoneypot(data: FormData): boolean {
  return HONEYPOT_KEYS.some((key) => {
    const value = data.get(key);
    return typeof value === 'string' && value.trim().length > 0;
  });
}

export function formDataToLeadPayload(data: FormData): Record<string, string> {
  const payload: Record<string, string> = {};
  for (const [key, value] of data.entries()) {
    if (typeof value !== 'string') continue;
    if ((HONEYPOT_KEYS as readonly string[]).includes(key)) continue;
    const trimmed = value.trim();
    if (!trimmed) continue;
    payload[key] = payload[key] ? `${payload[key]}, ${trimmed}` : trimmed;
  }
  return payload;
}

function enrichLeadPayload(payload: Record<string, string>): Record<string, string> {
  if (typeof window === 'undefined') return payload;
  try {
    const url = window.location.href;
    if (url && !payload.sourceUrl) payload.sourceUrl = url;
    if (window.location.pathname && !payload.sourcePage) payload.sourcePage = window.location.pathname;
    const params = new URL(url).searchParams;
    const map: Record<string, string> = {
      utm_source: 'utmSource',
      utm_medium: 'utmMedium',
      utm_campaign: 'utmCampaign',
      utm_content: 'utmContent',
      utm_term: 'utmTerm',
    };
    for (const [param, key] of Object.entries(map)) {
      if (payload[key]) continue;
      const value = params.get(param);
      if (value) payload[key] = value;
    }
  } catch {
    /* Location can be unreadable in non-browser tests. */
  }
  return payload;
}

/**
 * Formspree email body. Every submitted field is kept; `form`, `pageUrl` and `email`
 * are added so the notification says which form fired, where, and who to reply to.
 */
export function buildFormspreePayload(payload: Record<string, string>): Record<string, string> {
  const form = payload.formVariant || 'website_form';
  const email = payload.workEmail || payload.email || '';
  const name = [payload.firstName, payload.lastName].filter(Boolean).join(' ');
  const who = payload.company || name || email;
  return {
    _subject: payload._subject || `Website lead (${form})${who ? ` — ${who}` : ''}`,
    form,
    pageUrl: payload.sourceUrl || '',
    ...(email ? { email } : {}),
    ...payload,
  };
}

async function postFormspree(payload: Record<string, string>): Promise<ChannelResult> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(buildFormspreePayload(payload)),
    });
    if (res.ok) return { ok: true, status: res.status };
    let error: string | undefined;
    try {
      const json = (await res.json()) as { error?: unknown };
      if (typeof json?.error === 'string' && json.error.trim()) error = json.error.trim();
    } catch {
      /* Formspree sometimes returns a non-JSON error page. */
    }
    return { ok: false, error, status: res.status };
  } catch (err) {
    return { ok: false, networkError: err instanceof Error ? err.message : 'network error' };
  }
}

async function postHighLevel(payload: Record<string, string>): Promise<ChannelResult> {
  try {
    const res = await fetch(HIGHLEVEL_LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: unknown; error?: unknown };
    if (res.ok && json?.success === true) return { ok: true, status: res.status };
    const error = typeof json?.error === 'string' && json.error.trim() ? json.error.trim() : undefined;
    return { ok: false, error, status: res.status };
  } catch (err) {
    return { ok: false, networkError: err instanceof Error ? err.message : 'network error' };
  }
}

function reportChannelFailure(channel: 'formspree' | 'highlevel', form: string, result: ChannelResult) {
  const detail = result.error || result.networkError || 'unknown';
  console.warn(`[submitLeadDual] ${channel} failed for ${form}`, result.status ?? '', detail);
  trackGaEvent('lead_channel_failed', {
    channel,
    form_id: form,
    status: result.status ?? 0,
    error: detail.slice(0, 100),
  });
}

/** Statuses where `/api/highlevel-lead` rejected the visitor's input itself, so there is no lead to keep. */
const HIGHLEVEL_INPUT_REJECTED = new Set([400, 422]);

/**
 * Formspree is skipped only when HighLevel rejected the input. Rate limits (429), auth or
 * config problems (401/403), a missing route (404), 5xx and network errors are outages on
 * our side, so Formspree still receives the lead.
 */
function highLevelRejectedInput(highLevel: ChannelResult): boolean {
  return !highLevel.ok && highLevel.status !== undefined && HIGHLEVEL_INPUT_REJECTED.has(highLevel.status);
}

/**
 * POST a website lead to HighLevel (`/api/highlevel-lead`), then to Formspree.
 * The email is checked first with the server's rule, so an address HighLevel would
 * reject never reaches either destination. A HighLevel 400 or 422 is a rejected lead and
 * Formspree is skipped; after any other HighLevel result Formspree is posted and the
 * submission succeeds when either destination accepts it. Failures are
 * logged and sent to GA4 as `lead_channel_failed` so a silent outage shows up.
 */
export async function submitLeadDual(data: FormData): Promise<DualLeadResult> {
  if (isLeadHoneypot(data)) {
    return { ok: true, skipped: true, formspreeOk: false, highLevelOk: false };
  }

  const payload = enrichLeadPayload(formDataToLeadPayload(data));
  const emailProblem = leadEmailProblem(payload.workEmail || payload.email || '');
  if (emailProblem) {
    return { ok: false, invalidEmail: true, formspreeOk: false, highLevelOk: false, error: emailProblem };
  }

  const form = payload.formVariant || 'website_form';
  const highLevel = await postHighLevel(payload);
  if (!highLevel.ok) reportChannelFailure('highlevel', form, highLevel);

  if (highLevelRejectedInput(highLevel)) {
    return {
      ok: false,
      invalidEmail: true,
      formspreeOk: false,
      formspreeSkipped: true,
      highLevelOk: false,
      highLevelError: highLevel.error,
      highLevelStatus: highLevel.status,
      error: highLevel.error,
    };
  }

  const formspree = await postFormspree(payload);
  if (!formspree.ok) reportChannelFailure('formspree', form, formspree);

  const ok = formspree.ok || highLevel.ok;
  return {
    ok,
    formspreeOk: formspree.ok,
    highLevelOk: highLevel.ok,
    formspreeError: formspree.error,
    formspreeNetworkError: formspree.networkError,
    formspreeStatus: formspree.status,
    highLevelError: highLevel.error || highLevel.networkError,
    highLevelStatus: highLevel.status,
    error: ok ? undefined : highLevel.error || formspree.error,
    networkError: !ok && formspree.networkError && highLevel.networkError ? highLevel.networkError : undefined,
  };
}
