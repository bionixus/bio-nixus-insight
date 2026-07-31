import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getHreflangLinks, getGeoMeta } from '@/lib/seo';
import { buildSeoDescription, normalizeSeoTitle } from '@/lib/seo-meta';

const ARTICLE_TYPES = new Set(['Article', 'BlogPosting', 'NewsArticle']);

/**
 * Backfills required Article/BlogPosting/NewsArticle properties (image,
 * description, url, mainEntityOfPage) from page-level SEO data when a caller
 * hand-rolls a JSON-LD node without them — e.g. the market-report pages that
 * pass a bare `{ '@type': 'Article', headline, author, publisher, ... }`
 * literal into `jsonLd`. Non-Article nodes and already-complete fields pass
 * through untouched.
 */
export function normalizeJsonLdNode(
  schema: object,
  ctx: { title: string; description: string; canonicalUrl: string; ogImage: string },
): object {
  const node = schema as Record<string, unknown>;
  if (!ARTICLE_TYPES.has(String(node['@type']))) return schema;

  const url = typeof node.url === 'string' && node.url.trim() ? node.url : ctx.canonicalUrl;
  const mainEntityOfPage =
    node.mainEntityOfPage &&
    typeof node.mainEntityOfPage === 'object' &&
    (node.mainEntityOfPage as Record<string, unknown>)['@type'] === 'WebPage'
      ? node.mainEntityOfPage
      : { '@type': 'WebPage', '@id': `${url}#webpage`, url };

  return {
    ...node,
    headline: node.headline ?? ctx.title,
    description: typeof node.description === 'string' && node.description.trim() ? node.description : ctx.description,
    image: node.image ?? { '@type': 'ImageObject', url: ctx.ogImage },
    url,
    mainEntityOfPage,
  };
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object[];
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
  const hreflangLinks = getHreflangLinks(pathname);
  const geoMeta = getGeoMeta(pathname);
  const normalizedJsonLd = jsonLd.map((schema) =>
    normalizeJsonLdNode(schema, {
      title: safeTitle,
      description: safeDescription,
      canonicalUrl,
      ogImage: resolvedOgImage,
    }),
  );

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

