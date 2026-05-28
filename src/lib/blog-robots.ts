/**
 * Blog posts that must stay indexable (in sitemap + live content) even if CMS has seo.noIndex.
 * Keeps SSR/client robots meta aligned with Search Console expectations.
 */
export const BLOG_FORCE_INDEX_SLUGS = new Set([
  'healthcare-overview-china-market-2026',
  'pharmacoeconomics-gcc-practical-guide',
  'uae-healthcare-market-trends-2025',
]);

function cmsRequestsNoIndex(value: unknown): boolean {
  return value === true || value === 'true' || value === 1;
}

/** True when the page should emit noindex,nofollow. */
export function resolveBlogSeoNoIndex(slug: string, cmsNoIndex?: unknown): boolean {
  const normalized = slug.trim().toLowerCase();
  if (BLOG_FORCE_INDEX_SLUGS.has(normalized)) return false;
  return cmsRequestsNoIndex(cmsNoIndex);
}

export const BLOG_INDEX_ROBOTS =
  'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1';

export const BLOG_NOINDEX_ROBOTS = 'noindex,nofollow';
