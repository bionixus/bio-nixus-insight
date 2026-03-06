import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __gtmLoaded?: boolean;
  }
}

export default function GoogleTagManager() {
  const location = useLocation();
  const gtmId = import.meta.env.VITE_GTM_ID;

  useEffect(() => {
    if (!gtmId) return;
    if (window.__gtmLoaded) return;

    const loadGtm = () => {
      if (window.__gtmLoaded) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);
      window.__gtmLoaded = true;
    };

    const schedule = () => {
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: IdleRequestCallback, options?: IdleRequestOptions) => number })
          .requestIdleCallback(() => loadGtm(), { timeout: 3000 });
        return;
      }
      window.setTimeout(loadGtm, 1200);
    };

    if (document.readyState === 'complete') {
      schedule();
      return;
    }

    const onLoad = () => schedule();
    window.addEventListener('load', onLoad, { once: true });
    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, [gtmId]);

  useEffect(() => {
    if (!gtmId || !window.dataLayer) return;
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [gtmId, location.pathname, location.search]);

  if (!gtmId) return null;

  return (
    <>
      <Helmet />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="gtm"
        />
      </noscript>
    </>
  );
}
