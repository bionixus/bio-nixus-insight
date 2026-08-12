import { hasAnalyticsConsent } from '@/lib/consent';

type EventParams = Record<string, string | number | boolean | undefined>;

/** Fires a GA4 event via gtag, gated on cookie consent. Shared by GA4EventTracker and CTA/lead instrumentation. */
export function trackGaEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (!hasAnalyticsConsent()) return;
  window.gtag('event', eventName, params);
}

/** Fires when a visitor clicks a primary/secondary call-to-action (e.g. "Book a briefing call"). */
export function trackCtaClick(params: { ctaId: string; ctaLocation: string; targetUrl: string }) {
  trackGaEvent('cta_click', {
    cta_id: params.ctaId,
    cta_location: params.ctaLocation,
    target_url: params.targetUrl,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}

/** Fires once a lead-capture form actually succeeds (not on every submit attempt). */
export function trackLeadSubmitted(params: { formId?: string }) {
  trackGaEvent('lead_submitted', {
    form_id: params.formId,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}

/** Fires when a lead-capture form becomes visible/opens (dialog opened, section scrolled into view). */
export function trackFormView(params: { formId: string }) {
  trackGaEvent('form_view', { form_id: params.formId });
}

/** Fires on the first field interaction within a lead-capture form (once per open). */
export function trackFormStart(params: { formId: string }) {
  trackGaEvent('form_start', { form_id: params.formId });
}
