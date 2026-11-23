/**
 * Blog slugs that have a staged import and are not live yet.
 * A missing lookup must stay a normal 404. Publishing the Sanity document
 * (lookup "found") renders the post. Do not fuzzy-redirect these slugs.
 *
 * health-data-residency-gcc-mena-research-2026 is staged under
 * scripts/sanity-staged-posts/health-data-residency-gcc-mena-research-2026/.
 */
export const RESERVED_UNPUBLISHED_BLOG_SLUGS = new Set<string>([
  'health-data-residency-gcc-mena-research-2026',
]);

export function isReservedUnpublishedBlogSlug(slug: string | undefined): boolean {
  return Boolean(slug && RESERVED_UNPUBLISHED_BLOG_SLUGS.has(slug));
}
