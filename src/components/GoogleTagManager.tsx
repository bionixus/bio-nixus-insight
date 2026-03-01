import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export default function GoogleTagManager() {
  const location = useLocation();
  const gtmId = import.meta.env.VITE_GTM_ID;

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
      <Helmet>
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </script>
      </Helmet>
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
