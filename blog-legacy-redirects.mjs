/**
 * Legacy /blog/{slug} URLs still seen in crawlers (old internal links, bookmarks).
 * Keys: slug segment only. Values: current canonical blog slug in Sanity / sitemap.
 */
export const LEGACY_BLOG_SLUG_TO_CANONICAL = {
  'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait': 'gcc-pharmaceuticals-market-2026',
  'healthcare-market-research-europe': 'healthcare-market-research-europe-2026',
  'pharmaceutical-market-research-uk': 'pharmaceutical-market-research-uk-2026',
  'drug-registration-kuwait-pharma-guide': 'healthcare-overview-kuwait-market-2026',
};

/** Full-path redirects for Express + Vercel SSR (`/blog/old` → `/blog/new`). */
export const BLOG_LEGACY_FULL_PATH_REDIRECTS = Object.fromEntries(
  Object.entries(LEGACY_BLOG_SLUG_TO_CANONICAL).map(([from, to]) => [`/blog/${from}`, `/blog/${to}`]),
);
