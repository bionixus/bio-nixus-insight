import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  getHreflangLinks,
  getGeoMeta,
  defaultOgImageUrl,
  defaultOgImageWidth,
  defaultOgImageHeight,
  defaultOgImageAlt,
  marketReportOgImageUrl,
  marketReportOgImageWidth,
  marketReportOgImageHeight,
  getOgLocale,
  getOgLocaleAlternates,
} from '@/lib/seo';
import { buildSeoDescription, normalizeSeoTitle } from '@/lib/seo-meta';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { useLanguage } from '@/contexts/LanguageContext';

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
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAlt?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object[];
  /** When true, skip title/description length normalization (caller already finalized copy). */
  exactMeta?: boolean;
}

function isMarketReportPath(pathname: string): boolean {
  const path = (pathname || '/').split('?')[0].split('#')[0] || '/';
  if (path.startsWith('/market-reports')) return true;
  // Standalone market / therapy report URLs (e.g. …-market-report, …-vaccine-report)
  return /-(?:market|vaccine)-report(?:\/|$)/.test(path) || /market-report/.test(path);
}

export function SEOHead({
  title,
  description,
  canonical: _canonical,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogImageAlt,
  ogType = 'website',
  noindex = false,
  jsonLd = [],
  exactMeta = false,
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const ctr = getCtrSeo(pathname);
  const safeTitle = ctr?.title
    ?? (exactMeta ? String(title || '').trim() || 'BioNixus' : normalizeSeoTitle(title, 'BioNixus'));
  const safeDescription = ctr?.description
    ?? (exactMeta
      ? String(description || '').replace(/\s+/g, ' ').trim()
      : buildSeoDescription({
          preferred: description,
          fallback: 'BioNixus healthcare and pharmaceutical market research insights and services.',
        }));
  const canonicalPath = (() => {
    const clean = (pathname || '/').split('?')[0].split('#')[0] || '/';
    return clean === '/' ? '/' : clean.replace(/\/+$/, '');
  })();
  const canonicalUrl = `https://www.bionixus.com${canonicalPath}`;
  const reportShare = isMarketReportPath(canonicalPath);
  const resolvedOgImage =
    ogImage
    ?? (reportShare ? marketReportOgImageUrl : defaultOgImageUrl);
  const resolvedOgWidth =
    ogImageWidth
    ?? (resolvedOgImage === marketReportOgImageUrl || reportShare
      ? marketReportOgImageWidth
      : defaultOgImageWidth);
  const resolvedOgHeight =
    ogImageHeight
    ?? (resolvedOgImage === marketReportOgImageUrl || reportShare
      ? marketReportOgImageHeight
      : defaultOgImageHeight);
  const resolvedOgAlt = ogImageAlt ?? defaultOgImageAlt;
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
  const ogLocale = getOgLocale(language);
  const ogLocaleAlternates = getOgLocaleAlternates(language);

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
      <meta property="og:image:width" content={String(resolvedOgWidth)} />
      <meta property="og:image:height" content={String(resolvedOgHeight)} />
      <meta property="og:image:alt" content={resolvedOgAlt} />
      <meta property="og:site_name" content="BioNixus" />
      <meta property="og:locale" content={ogLocale} />
      {ogLocaleAlternates.map((alt) => (
        <meta key={alt} property="og:locale:alternate" content={alt} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BioNixus" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={resolvedOgAlt} />

      {normalizedJsonLd.map((schema, index) => (
        <script key={`json-ld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
