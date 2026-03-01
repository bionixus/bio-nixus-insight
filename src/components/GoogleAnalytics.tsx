import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Google Analytics (GA4) Tracker Component.
 * Recommended to be used in DeferredAnalytics for performance.
 */
export default function GoogleAnalytics() {
    const location = useLocation();
    const gaId = import.meta.env.VITE_GA_ID || import.meta.env.VITE_GA_MEASUREMENT_ID;
    const gtmId = import.meta.env.VITE_GTM_ID;

    useEffect(() => {
        if (gaId && window.gtag) {
            window.gtag('config', gaId, {
                page_path: location.pathname,
            });
        }
    }, [location, gaId]);

    // Avoid duplicate page tracking when GTM is active.
    if (!gaId || gtmId) return null;

    return (
        <Helmet>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
            </script>
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
