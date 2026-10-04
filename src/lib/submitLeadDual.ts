/**
 * Formspree endpoint. Reserved for the "Book a 30-minute scoping call" form only —
 * every other website form posts to HighLevel alone (see `submitLeadDual` channels).
 */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';

const HIGHLEVEL_LEAD_ENDPOINT = '/api/highlevel-lead';
const HONEYPOT_KEYS = ['companyWebsite', 'hp_company'] as const;

/**
 * Lead routing policy (2026-10):
 * - `highlevel-only` (default): gated downloads, contact page, WhatsApp widget, email capture,
 *   case-study gates and proposal registrations go to HighLevel only.
 * - `scoping-call`: the "Book a 30-minute scoping call" qualification form goes to Formspree + HighLevel
 *   so the team gets the email alert for meeting requests and nothing else.
 */
export type LeadChannels = 'highlevel-only' | 'scoping-call';

export type SubmitLeadOptions = {
  channels?: LeadChannels;
};

export type DualLeadResult = {
  /** True when an attempted channel accepted the lead, or a honeypot short-circuit ran. */
  ok: boolean;
  /** Honeypot tripped: treat as success in the UI and skip downloads, subscribe, and analytics. */
  skipped?: boolean;
  /** Which channels were attempted for this submission. */
  channels: LeadChannels;
  formspreeOk: boolean;
  highLevelOk: boolean;
  /** Formspree HTTP error message, when the response included one (scoping-call channel only). */
  formspreeError?: string;
  /** Formspree fetch threw before a response (scoping-call channel only). */
  formspreeNetworkError?: string;
  highLevelError?: string;
  /** User-facing error from whichever attempted channel reported one. Unset when `ok`. */
  error?: string;
  /** Set when the submission failed and every attempted channel failed at the network level. */
  networkError?: string;
};

type ChannelResult = {
  ok: boolean;
  error?: string;
  networkError?: string;
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

async function postFormspree(data: FormData): Promise<ChannelResult> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) return { ok: true };
    let error: string | undefined;
    try {
      const json = (await res.json()) as { error?: unknown };
      if (typeof json?.error === 'string' && json.error.trim()) error = json.error.trim();
    } catch {
      /* Formspree sometimes returns a non-JSON error page. */
    }
    return { ok: false, error };
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
    if (res.ok && json?.success === true) return { ok: true };
    const error = typeof json?.error === 'string' && json.error.trim() ? json.error.trim() : undefined;
    return { ok: false, error };
  } catch (err) {
    return { ok: false, networkError: err instanceof Error ? err.message : 'network error' };
  }
}

/**
 * POST a website lead. By default only `/api/highlevel-lead` is called. With
 * `{ channels: 'scoping-call' }` the lead is also posted to Formspree in parallel,
 * and success is either channel. Formspree failures are logged when HighLevel saved the lead.
 */
export async function submitLeadDual(data: FormData, options: SubmitLeadOptions = {}): Promise<DualLeadResult> {
  const channels: LeadChannels = options.channels ?? 'highlevel-only';
  if (isLeadHoneypot(data)) {
    return { ok: true, skipped: true, channels, formspreeOk: false, highLevelOk: false };
  }

  const useFormspree = channels === 'scoping-call';
  const payload = enrichLeadPayload(formDataToLeadPayload(data));
  const [formspreeSettled, highLevelSettled] = await Promise.allSettled([
    useFormspree ? postFormspree(data) : Promise.resolve<ChannelResult>({ ok: false }),
    postHighLevel(payload),
  ]);

  const formspree: ChannelResult =
    formspreeSettled.status === 'fulfilled'
      ? formspreeSettled.value
      : { ok: false, networkError: 'Formspree request failed' };
  const highLevel: ChannelResult =
    highLevelSettled.status === 'fulfilled'
      ? highLevelSettled.value
      : { ok: false, networkError: 'HighLevel request failed' };

  if (useFormspree && highLevel.ok && !formspree.ok) {
    console.warn(
      '[submitLeadDual] Formspree failed; HighLevel lead saved',
      formspree.error || formspree.networkError || 'unknown',
    );
  }

  const ok = (useFormspree && formspree.ok) || highLevel.ok;
  const attempted = useFormspree ? [formspree, highLevel] : [highLevel];
  const error = ok ? undefined : attempted.map((c) => c.error).find(Boolean);
  const networkError =
    !ok && attempted.every((c) => c.networkError) ? attempted.map((c) => c.networkError).find(Boolean) : undefined;

  return {
    ok,
    channels,
    formspreeOk: useFormspree && formspree.ok,
    highLevelOk: highLevel.ok,
    formspreeError: useFormspree ? formspree.error : undefined,
    formspreeNetworkError: useFormspree ? formspree.networkError : undefined,
    highLevelError: highLevel.error || highLevel.networkError,
    error,
    networkError,
  };
}

/** The only form that reaches Formspree: "Book a 30-minute scoping call" (also saved to HighLevel). */
export function submitScopingCallLead(data: FormData): Promise<DualLeadResult> {
  return submitLeadDual(data, { channels: 'scoping-call' });
}
