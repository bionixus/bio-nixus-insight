import { Helmet } from 'react-helmet-async';

/** Bump with lib/faviconHead.js FAVICON_CACHE_BUST when icon binaries change. */
const V = '3';

/** Sitewide favicon / apple-touch links for Google SERP brand icons. */
export function FaviconLinks() {
  return (
    <Helmet>
      <link rel="icon" href={`/favicon.ico?v=${V}`} sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png?v=${V}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png?v=${V}`} />
      <link rel="icon" type="image/png" sizes="48x48" href={`/favicon-48x48.png?v=${V}`} />
      <link rel="apple-touch-icon" href={`/apple-touch-icon.png?v=${V}`} />
    </Helmet>
  );
}

export default FaviconLinks;
