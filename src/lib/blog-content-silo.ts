import type { BlogPost } from '@/types/blog';

export type ContentSilo = 'healthcare' | 'industries';

export const HEALTHCARE_SILO_GROQ = '(contentSilo == "healthcare" || !defined(contentSilo))';
export const INDUSTRIES_SILO_GROQ = 'contentSilo == "industries"';

export const INDUSTRIES_HUB_PATH = '/bionixus-industries';
/** On-page insights section on the industries hub (canonical index for B2B/B2C articles). */
export const INDUSTRIES_INSIGHTS_SECTION_PATH = `${INDUSTRIES_HUB_PATH}#insights`;
/** Legacy index URL — redirects to {@link INDUSTRIES_INSIGHTS_SECTION_PATH}. */
export const INDUSTRIES_INSIGHTS_LEGACY_INDEX_PATH = '/bionixus-industries/insights';
/** @deprecated Use {@link INDUSTRIES_INSIGHTS_SECTION_PATH} for index links. */
export const INDUSTRIES_INSIGHTS_INDEX_PATH = INDUSTRIES_INSIGHTS_SECTION_PATH;
export const HEALTHCARE_BLOG_INDEX_PATH = '/blog';

export function resolveContentSilo(post: Pick<BlogPost, 'contentSilo'>): ContentSilo {
  return post.contentSilo === 'industries' ? 'industries' : 'healthcare';
}

export function isHealthcarePost(post: Pick<BlogPost, 'contentSilo'>): boolean {
  return resolveContentSilo(post) === 'healthcare';
}

export function isIndustriesPost(post: Pick<BlogPost, 'contentSilo'>): boolean {
  return resolveContentSilo(post) === 'industries';
}

export function filterPostsBySilo(posts: BlogPost[], silo: ContentSilo): BlogPost[] {
  return posts.filter((post) => resolveContentSilo(post) === silo);
}

export function getBlogIndexPathForPost(post: Pick<BlogPost, 'contentSilo'>): string {
  return isIndustriesPost(post) ? INDUSTRIES_INSIGHTS_INDEX_PATH : HEALTHCARE_BLOG_INDEX_PATH;
}

export function getBlogIndexLabelForPost(post: Pick<BlogPost, 'contentSilo'>): string {
  return isIndustriesPost(post) ? 'Industry Insights' : 'Blog';
}

/** Path prefix for individual industry insight articles (no trailing slash). */
export const INDUSTRIES_INSIGHT_POST_PATH_PREFIX = INDUSTRIES_INSIGHTS_LEGACY_INDEX_PATH;

export function getIndustriesInsightPostPath(slug: string): string {
  return `${INDUSTRIES_INSIGHT_POST_PATH_PREFIX}/${slug}`;
}

export function isIndustriesInsightPostPath(pathname: string): boolean {
  return /^\/bionixus-industries\/insights\/[^/]+/.test(pathname.split('?')[0] || '');
}

const LOCALIZED_BLOG_PREFIX: Record<string, string> = {
  ar: '/ar/blog',
  de: '/de/blog',
  fr: '/fr/blog',
  es: '/es/blog',
  pt: '/pt/blog',
  ru: '/ru/blog',
  zh: '/zh/blog',
};

export function getBlogPostPath(
  post: Pick<BlogPost, 'slug' | 'contentSilo' | 'language'>,
): string {
  const prefix = post.language ? LOCALIZED_BLOG_PREFIX[post.language] : undefined;
  if (prefix) return `${prefix}/${post.slug}`;
  if (isIndustriesPost(post)) return getIndustriesInsightPostPath(post.slug);
  return `/blog/${post.slug}`;
}

export function getBlogPostAbsoluteUrl(
  post: Pick<BlogPost, 'slug' | 'contentSilo' | 'language'>,
): string {
  return `https://www.bionixus.com${getBlogPostPath(post)}`;
}
