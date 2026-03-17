import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { hasAnalyticsConsent, onConsentChange } from '@/lib/consent';

/**
 * Google Analytics (GA4) Tracker Component.
 * Recommended to be used in DeferredAnalytics for performance.
 */
export default function GoogleAnalytics() {
    const location = useLocation();
    const gaId = import.meta.env.VITE_GA_ID || import.meta.env.VITE_GA_MEASUREMENT_ID;
    const gtmId = import.meta.env.VITE_GTM_ID;
    const [consentGranted, setConsentGranted] = useState(() => hasAnalyticsConsent());

    useEffect(() => onConsentChange(() => setConsentGranted(hasAnalyticsConsent())), []);

    useEffect(() => {
        if (!gaId || gtmId || !consentGranted) return;

        if (!window.gtag) {
            const loadGtag = () => {
                if (document.querySelector(`script[data-ga-id="${gaId}"]`)) return;
                const script = document.createElement('script');
                script.async = true;
                script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
                script.setAttribute('data-ga-id', gaId);
                document.head.appendChild(script);
                window.dataLayer = window.dataLayer || [];
                window.gtag = (...args: unknown[]) => {
                    window.dataLayer?.push(args as unknown as any[]);
                };
                window.gtag('js', new Date());
                window.gtag('config', gaId, { page_path: window.location.pathname });
            };

            if (document.readyState === 'complete') {
                window.setTimeout(loadGtag, 1200);
            } else {
                const onLoad = () => window.setTimeout(loadGtag, 1200);
                window.addEventListener('load', onLoad, { once: true });
                return () => window.removeEventListener('load', onLoad);
            }
        } else {
            window.gtag('config', gaId, {
                page_path: location.pathname,
            });
        }
    }, [location.pathname, gaId, gtmId, consentGranted]);

    if (!gaId || gtmId || !consentGranted) return null;

    return (
        <Helmet>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
        </Helmet>
    );
}

// Add gtag to window type
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}
