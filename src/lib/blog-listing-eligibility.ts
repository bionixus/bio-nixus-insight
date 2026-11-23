/**
 * Cards on /blog and /bionixus-industries/insights.
 * A card is listed only when its own URL is not a known redirect and the
 * Sanity document is published. Redirect sources are the same maps the
 * server and Vercel use: config/legacy-redirects.json,
 * blog-legacy-redirects.mjs (legacy slugs, Arabic duplicates, href rewrites),
 * and concrete vercel.json redirects. CTR title overrides do not redirect.
 */
import legacyRedirects from '../../config/legacy-redirects.json';
import vercelConfig from '../../vercel.json';
import { REDIRECT_HREF_REWRITES } from '../../blog-legacy-redirects.mjs';
import { INDUSTRIES_INSIGHTS_INDEX_PATH } from '@/lib/blog-content-silo';

export type BlogListingHub = 'healthcare' | 'industries';

type RedirectRow = { source?: string; destination?: string; statusCode?: number };

const EXPLICIT_MISSING_ARTICLE_REDIRECTS: Record<string, string> = {
  '/blog/avalon-pharma-onesource-saudi-obesity-glp1-market':
    '/blog/avalon-pharma-onesource-saudi-generic-tirzepatide-glp1-market',
};

function normalizeListingPath(value: string): string {
  let raw = String(value || '').trim();
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) {
    try {
      raw = new URL(raw).pathname;
    } catch {
      return '';
    }
  }
  raw = raw.split('?')[0]?.split('#')[0] ?? raw;
  if (raw.length > 1) raw = raw.replace(/\/+$/, '');
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function isConcretePath(path: string): boolean {
  return Boolean(path) && !path.includes(':') && !path.includes('*') && !path.includes('(');
}

function addRedirect(map: Map<string, string>, from: string, to: string) {
  const src = normalizeListingPath(from);
  const dest = normalizeListingPath(to);
  if (!isConcretePath(src) || !dest || src === dest) return;
  map.set(src, dest);
  try {
    const decoded = normalizeListingPath(decodeURIComponent(src));
    if (decoded && decoded !== src) map.set(decoded, dest);
  } catch {
    /* keep the raw key */
  }
}

function buildListingRedirects(): Map<string, string> {
  const map = new Map<string, string>();
  for (const [from, to] of Object.entries(legacyRedirects as Record<string, string>)) {
    addRedirect(map, from, to);
  }
  for (const [from, to] of Object.entries(REDIRECT_HREF_REWRITES as Record<string, string>)) {
    addRedirect(map, from, to);
  }
  for (const [from, to] of Object.entries(EXPLICIT_MISSING_ARTICLE_REDIRECTS)) {
    addRedirect(map, from, to);
  }
  const rows = (vercelConfig as { redirects?: RedirectRow[] }).redirects ?? [];
  for (const row of rows) {
    const status = row.statusCode ?? 301;
    if (status < 300 || status >= 400) continue;
    if (!row.source || !row.destination) continue;
    addRedirect(map, row.source, row.destination);
  }
  return map;
}

const LISTING_REDIRECTS = buildListingRedirects();

export function blogCardPath(slug: string, hub: BlogListingHub): string {
  const clean = String(slug || '').trim().replace(/^\/+/, '');
  if (!clean) return '';
  return hub === 'industries' ? `${INDUSTRIES_INSIGHTS_INDEX_PATH}/${clean}` : `/blog/${clean}`;
}

export function isSanityDraftId(id: string | undefined | null): boolean {
  return typeof id === 'string' && id.startsWith('drafts.');
}

/** Destination when this card URL 301s, otherwise null. */
export function listingRedirectTarget(path: string): string | null {
  const key = normalizeListingPath(path);
  if (!key) return null;
  const target = LISTING_REDIRECTS.get(key);
  if (!target || target === key) return null;
  return target;
}

export function isListableBlogPost(
  post: { id?: string | null; slug?: string | null },
  hub: BlogListingHub,
): boolean {
  const slug = post.slug?.trim() ?? '';
  if (!slug || slug.startsWith('fallback-')) return false;
  if (isSanityDraftId(post.id)) return false;
  const path = blogCardPath(slug, hub);
  return listingRedirectTarget(path) == null;
}

export function selectListablePosts<T extends { id?: string | null; slug?: string | null }>(
  posts: T[],
  hub: BlogListingHub,
): T[] {
  return posts.filter((post) => isListableBlogPost(post, hub));
}
