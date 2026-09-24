/** Formspree endpoint shared by website lead forms. HighLevel is posted server-side. */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';

const HIGHLEVEL_LEAD_ENDPOINT = '/api/highlevel-lead';
const HONEYPOT_KEYS = ['companyWebsite', 'hp_company'] as const;

export type DualLeadResult = {
  /** True when HighLevel or Formspree accepted the lead, or a honeypot short-circuit ran. */
  ok: boolean;
  /** Honeypot tripped: treat as success in the UI and skip downloads, subscribe, and analytics. */
  skipped?: boolean;
  formspreeOk: boolean;
  highLevelOk: boolean;
  /** Formspree HTTP error message, when the response included one. */
  formspreeError?: string;
  /** Formspree fetch threw before a response. */
  formspreeNetworkError?: string;
  highLevelError?: string;
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
 * POST the same lead to Formspree and to `/api/highlevel-lead` in parallel.
 * Success is either channel. Formspree failures are logged when HighLevel saved the lead.
 */
export async function submitLeadDual(data: FormData): Promise<DualLeadResult> {
  if (isLeadHoneypot(data)) {
    return { ok: true, skipped: true, formspreeOk: false, highLevelOk: false };
  }

  const payload = enrichLeadPayload(formDataToLeadPayload(data));
  const [formspreeSettled, highLevelSettled] = await Promise.allSettled([
    postFormspree(data),
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

  if (highLevel.ok && !formspree.ok) {
    console.warn(
      '[submitLeadDual] Formspree failed; HighLevel lead saved',
      formspree.error || formspree.networkError || 'unknown',
    );
  }

  return {
    ok: formspree.ok || highLevel.ok,
    formspreeOk: formspree.ok,
    highLevelOk: highLevel.ok,
    formspreeError: formspree.error,
    formspreeNetworkError: formspree.networkError,
    highLevelError: highLevel.error || highLevel.networkError,
  };
}
