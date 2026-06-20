/**
 * Legacy /blog/{slug} URLs still seen in crawlers (old internal links, bookmarks).
 * Keys: slug segment only. Values: current canonical blog slug in Sanity / sitemap.
 */
export const LEGACY_BLOG_SLUG_TO_CANONICAL = {
  'healthcare-market-research-europe': 'healthcare-market-research-europe-2026',
  'pharmaceutical-market-research-uk': 'pharmaceutical-market-research-uk-2026',
  'drug-registration-kuwait-pharma-guide': 'healthcare-overview-kuwait-market-2026',
  'middle-east-healthcare-market-statistics-2025': 'middle-east-healthcare-market-statistics-2026',
};

/** Full-path redirects for Express + Vercel SSR (`/blog/old` → `/blog/new`). */
export const BLOG_LEGACY_FULL_PATH_REDIRECTS = Object.fromEntries(
  Object.entries(LEGACY_BLOG_SLUG_TO_CANONICAL).map(([from, to]) => [`/blog/${from}`, `/blog/${to}`]),
);

/**
 * Arabic-authored posts mistakenly exposed under /blog/{slug} — consolidate on /ar/blog/{slug}.
 * Fixes canonical/hreflang and crawler 307 noise vs www apex.
 */
export const BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH = {
  '/blog/saudi-healthcare-market-research-firms-ar': '/ar/blog/saudi-healthcare-market-research-firms-ar',
  '/blog/gcc-pharmaceuticals-market-arabic-2026': '/ar/blog/gcc-pharmaceuticals-market-arabic-2026',
  '/blog/أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي':
    '/ar/blog/أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي',
  '/blog/سوق-الدواء-السعودي-2026': '/ar/blog/سوق-الدواء-السعودي-2026',
};

/**
 * Internal href rewrites for URLs that 301 elsewhere (Ahrefs page-has-links-to-redirect).
 * Applied at render time and by scripts/fix-redirect-internal-links.mjs.
 */
export const REDIRECT_HREF_REWRITES = {
  '/conf': '/strategic-portfolio',
  '/ar/conf': '/ar/strategic-portfolio',
  '/healthcare-market-research/united-kingdom': '/healthcare-market-research/uk',
  '/ar/': '/ar',
  ...BLOG_LEGACY_FULL_PATH_REDIRECTS,
  ...BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH,
};

/**
 * Blog URL slug → Sanity `blogPost.slug.current` when the visible URL should differ from CMS slug
 * but reuse the same document (images, dates, structured fields).
 */
export const BLOG_SANITY_FETCH_SLUG_BY_URL_SLUG = {
  'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait': 'gcc-pharmaceuticals-market-2026',
  /**
   * Public URLs use Arabic slugs under `/ar/blog/…` while Sanity `slug.current`
   * stays ASCII (matches Express redirects from legacy `/blog/{ar}` aliases).
   */
  'أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي':
    'pharmaceutical-market-research-middle-east-gcc',
  'سوق-الدواء-السعودي-2026': 'saudi-pharma-market-2026',
};

export function resolveSanityBlogSlug(urlSlug) {
  const key = typeof urlSlug === 'string' ? urlSlug : '';
  return BLOG_SANITY_FETCH_SLUG_BY_URL_SLUG[key] ?? key;
}
