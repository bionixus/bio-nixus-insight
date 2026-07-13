import { Helmet } from 'react-helmet-async';

/** Sitewide favicon / apple-touch links for Google SERP brand icons. */
export function FaviconLinks() {
  return (
    <Helmet>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
}

export default FaviconLinks;
