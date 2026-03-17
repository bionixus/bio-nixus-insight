const COOKIE_CONSENT_KEY = 'bionixus-cookie-consent';
const CONSENT_EVENT = 'bionixus-consent-changed';

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
}

export function onConsentChange(handler: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const wrapped = () => handler();
  window.addEventListener(CONSENT_EVENT, wrapped);
  window.addEventListener('storage', wrapped);
  return () => {
    window.removeEventListener(CONSENT_EVENT, wrapped);
    window.removeEventListener('storage', wrapped);
  };
}

