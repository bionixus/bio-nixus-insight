import { useEffect, useState } from 'react';
import { hasAnalyticsConsent, onConsentChange } from '@/lib/consent';

type EventParams = Record<string, string | number | boolean | undefined>;

function emitEvent(eventName: string, params: EventParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

export default function GA4EventTracker() {
  const [consentGranted, setConsentGranted] = useState(() => hasAnalyticsConsent());

  useEffect(() => onConsentChange(() => setConsentGranted(hasAnalyticsConsent())), []);

  useEffect(() => {
    if (!consentGranted) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href) return;

      const isMailto = href.startsWith('mailto:');
      const isTel = href.startsWith('tel:');
      const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);

      if (isMailto || isTel || isExternal) {
        emitEvent('contact_or_outbound_click', {
          link_url: href,
          link_type: isMailto ? 'email' : isTel ? 'phone' : 'external',
          page_path: window.location.pathname,
        });
      }
    };

    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form) return;
      const action = form.getAttribute('action') || window.location.pathname;
      emitEvent('form_submit_attempt', {
        form_action: action,
        form_id: form.id || undefined,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('submit', handleSubmit, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('submit', handleSubmit, true);
    };
  }, [consentGranted]);

  return null;
}

