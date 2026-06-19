import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getHreflangLinks, getGeoMeta } from '@/lib/seo';
import { buildSeoDescription, normalizeSeoTitle } from '@/lib/seo-meta';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object[];
}

function normalizeArticleSchema(
  schema: Record<string, unknown>,
  fallbackImage: string,
): Record<string, unknown> {
  if (schema['@type'] !== 'Article' && schema['@type'] !== 'BlogPosting') return schema;
  const out = { ...schema };
  if (!out.image) {
    out.image = { '@type': 'ImageObject', url: fallbackImage, width: 1200, height: 630 };
  }
  if (typeof out.mainEntityOfPage === 'string') {
    out.mainEntityOfPage = { '@type': 'WebPage', '@id': out.mainEntityOfPage };
  }
  return out;
}

export function SEOHead({
  title,
  description,
  canonical: _canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd = [],
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const safeTitle = normalizeSeoTitle(title, 'BioNixus');
  const safeDescription = buildSeoDescription({
    preferred: description,
    fallback: 'BioNixus healthcare and pharmaceutical market research insights and services.',
  });
  const canonicalPath = (() => {
    const clean = (pathname || '/').split('?')[0].split('#')[0] || '/';
    return clean === '/' ? '/' : clean.replace(/\/+$/, '');
  })();
  const canonicalUrl = `https://www.bionixus.com${canonicalPath}`;
  const resolvedOgImage =
    ogImage ?? `https://www.bionixus.com/api/og-card?path=${encodeURIComponent(canonicalPath)}`;
  const normalizedJsonLd = jsonLd.map((s) =>
    normalizeArticleSchema(s as Record<string, unknown>, resolvedOgImage),
  );
  const hreflangLinks = getHreflangLinks(pathname);
  const geoMeta = getGeoMeta(pathname);

  return (
    <Helmet>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      {geoMeta ? <meta name="geo.region" content={geoMeta.region} /> : null}
      {geoMeta ? <meta name="geo.placename" content={geoMeta.placename} /> : null}
      <link rel="canonical" href={canonicalUrl} />
      {hreflangLinks.map(({ lang, href }) => (
        <link key={`${lang}-${href}`} rel="alternate" hrefLang={lang} href={href} />
      ))}
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />}

      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:site_name" content="BioNixus" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {normalizedJsonLd.map((schema, index) => (
        <script key={`json-ld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

