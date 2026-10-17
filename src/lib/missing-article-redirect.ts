import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import {
  getIndustriesInsightPostPath,
  HEALTHCARE_BLOG_INDEX_PATH,
  INDUSTRIES_INSIGHTS_INDEX_PATH,
  resolveContentSilo,
} from '@/lib/blog-content-silo';
import type { BlogPost } from '@/types/blog';

export type ArticleLookup = 'found' | 'missing' | 'error';

export type ArticleRedirect = {
  pageType: 'redirect';
  statusCode: 301;
  redirectTo: string;
};

type RedirectPost = Pick<BlogPost, 'slug' | 'contentSilo' | 'seoCanonicalUrl'>;

const GENERIC_TOKENS = new Set([
  'and',
  'the',
  'for',
  'of',
  'to',
  'in',
  'on',
  'with',
  'from',
  'after',
  'before',
  'how',
  'what',
  'when',
  'who',
  'vs',
  'via',
  'market',
  'research',
  'company',
  'companies',
  'healthcare',
  'blog',
  'insights',
  'insight',
  'study',
  'studies',
  'saudi',
  'arabia',
  'uae',
  'gcc',
  'mena',
  'dubai',
  '2024',
  '2025',
  '2026',
  '2027',
  'primary',
  'custom',
  'guide',
  'playbook',
  'survey',
  'surveys',
]);

export function normalizeArticlePath(pathname: string): string {
  const noQuery = (pathname.split('?')[0] || '/').trim();
  if (noQuery === '/') return '/';
  return noQuery.replace(/\/+$/, '') || '/';
}

function distinctiveTokens(value: string): string[] {
  const seen = new Set<string>();
  const tokens: string[] = [];
  for (const token of value.toLowerCase().split(/[^a-z0-9]+/)) {
    if (token.length < 3 || GENERIC_TOKENS.has(token) || seen.has(token)) continue;
    seen.add(token);
    tokens.push(token);
  }
  return tokens;
}

export function canonicalPathForPost(post: RedirectPost): string {
  const raw = post.seoCanonicalUrl?.trim() ?? '';
  if (raw) {
    let pathname = '';
    if (raw.startsWith('/')) {
      pathname = raw.split('?')[0] || '';
    } else if (/^https?:\/\//i.test(raw)) {
      try {
        pathname = new URL(raw).pathname;
      } catch {
        pathname = '';
      }
    }
    pathname = normalizeArticlePath(pathname);
    if (
      pathname.startsWith('/blog/') ||
      pathname.startsWith('/bionixus-industries/insights/')
    ) {
      return pathname;
    }
  }
  if (resolveContentSilo(post) === 'industries') return getIndustriesInsightPostPath(post.slug);
  return `/blog/${post.slug}`;
}

function hubForRequest(pathname: string): string | null {
  if (pathname.startsWith('/bionixus-industries/insights/')) return INDUSTRIES_INSIGHTS_INDEX_PATH;
  if (pathname.startsWith('/blog/')) return HEALTHCARE_BLOG_INDEX_PATH;
  return null;
}

type RankedMatch = {
  path: string;
  score: number;
  ratio: number;
  count: number;
};

function isBetterMatch(candidate: RankedMatch, current: RankedMatch): boolean {
  if (candidate.score !== current.score) return candidate.score > current.score;
  if (candidate.ratio !== current.ratio) return candidate.ratio > current.ratio;
  if (candidate.count !== current.count) return candidate.count > current.count;
  return candidate.path.localeCompare(current.path) < 0;
}

/** Closest known article path, or null when no keyword overlap is reasonable. */
export function closestKnownPostPath(slug: string, requestPath: string): string | null {
  const request = normalizeArticlePath(requestPath);
  const exact = hardcodedSeoPosts.find((post) => post.slug === slug);
  if (exact) {
    const exactPath = canonicalPathForPost(exact);
    if (exactPath !== request) return exactPath;
  }

  const unknownTokens = distinctiveTokens(slug);
  if (unknownTokens.length === 0) return null;

  let best: RankedMatch | null = null;
  for (const post of hardcodedSeoPosts) {
    const path = canonicalPathForPost(post);
    if (path === request) continue;
    const shared = unknownTokens.filter((token) => distinctiveTokens(post.slug).includes(token));
    const reasonable = shared.some((token) => token.length >= 5) || shared.length >= 2;
    if (!reasonable) continue;
    const candidate: RankedMatch = {
      path,
      score: shared.reduce((sum, token) => sum + token.length, 0),
      ratio: shared.length / unknownTokens.length,
      count: shared.length,
    };
    if (!best || isBetterMatch(candidate, best)) best = candidate;
  }
  return best?.path ?? null;
}

function redirectTo(redirectToPath: string): ArticleRedirect {
  return { pageType: 'redirect', statusCode: 301, redirectTo: redirectToPath };
}

/**
 * 301 target for a missing English article address.
 * A Sanity lookup error stays a soft miss (null). Other locales are unchanged.
 */
export function missingArticleRedirect(args: {
  pathname: string;
  slug: string;
  lookup: ArticleLookup | string | undefined;
  post: RedirectPost | null;
}): ArticleRedirect | null {
  const pathname = normalizeArticlePath(args.pathname);
  const hub = hubForRequest(pathname);
  if (!hub) return null;
  if (args.lookup === 'error') return null;

  const isIndustries = pathname.startsWith('/bionixus-industries/insights/');
  if (args.lookup === 'found' && args.post) {
    const silo = resolveContentSilo(args.post);
    if (isIndustries && silo === 'industries') return null;
    if (!isIndustries && silo === 'healthcare') return null;
    const target = isIndustries
      ? canonicalPathForPost(args.post)
      : getIndustriesInsightPostPath(args.slug);
    if (target === pathname) return null;
    return redirectTo(target);
  }

  if (args.lookup !== 'missing' && args.lookup !== 'found') return null;

  const closest = closestKnownPostPath(args.slug, pathname);
  const target = closest && closest !== pathname ? closest : hub;
  if (target === pathname) return null;
  return redirectTo(target);
}
