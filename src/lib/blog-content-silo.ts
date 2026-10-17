import type { BlogPost, ContentSilo } from '@/types/blog';

export type { ContentSilo };

export const HEALTHCARE_SILO_GROQ = '(contentSilo == "healthcare" || !defined(contentSilo))';
export const INDUSTRIES_SILO_GROQ = 'contentSilo == "industries"';

export const INDUSTRIES_HUB_PATH = '/bionixus-industries';
/** On-page insights teaser section on the industries hub. */
export const INDUSTRIES_INSIGHTS_SECTION_PATH = `${INDUSTRIES_HUB_PATH}#insights`;
/** Dedicated B2B/B2C industry insights blog index (mirrors `/blog` for healthcare). */
export const INDUSTRIES_INSIGHTS_INDEX_PATH = '/bionixus-industries/insights';
/** @deprecated Alias — use {@link INDUSTRIES_INSIGHTS_INDEX_PATH}. */
export const INDUSTRIES_INSIGHTS_LEGACY_INDEX_PATH = INDUSTRIES_INSIGHTS_INDEX_PATH;
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

/** Industry insight articles that were sitemap-only (zero href inlinks). */
export const INDUSTRIES_INSIGHT_EDITORIAL_LINKS = [
  {
    to: getIndustriesInsightPostPath('online-market-research-social-listening-brand-growth-2026'),
    label: 'Online market research and social listening for brand growth (2026)',
  },
  {
    to: getIndustriesInsightPostPath('mdf-wood-manufacturing-market-research-trackers-mea'),
    label: 'Wood boards market research trackers — MEA',
  },
  {
    to: getIndustriesInsightPostPath('financial-services-market-research-egypt-2026'),
    label: 'Financial services market research in Egypt 2026',
  },
  {
    to: getIndustriesInsightPostPath('feasibility-study-company-saudi-arabia'),
    label: 'Feasibility studies in Saudi Arabia: what the market section must prove',
  },
  {
    to: getIndustriesInsightPostPath('customer-satisfaction-surveys-uae-csat-nps-ces'),
    label: 'Customer satisfaction surveys in the UAE: CSAT, NPS and CES',
  },
  {
    to: getIndustriesInsightPostPath('brand-tracking-research-agency-dubai'),
    label: 'Brand tracking in Dubai and the UAE: a tracker that moves budgets',
  },
  {
    to: getIndustriesInsightPostPath('market-entry-research-saudi-arabia'),
    label: 'Market entry research for Saudi Arabia: a non-pharma playbook',
  },
  {
    to: getIndustriesInsightPostPath('consumer-survey-company-saudi-arabia'),
    label: 'Consumer survey research in Saudi Arabia: sampling, language and mode',
  },
  {
    to: getIndustriesInsightPostPath('b2b-market-research-uae'),
    label: 'B2B market research in the UAE: reaching hard-to-reach decision-makers',
  },
  {
    to: getIndustriesInsightPostPath('europe-to-gcc-market-entry-research'),
    label: 'Europe-to-GCC market entry research: what European brands need to know',
  },
  {
    to: getIndustriesInsightPostPath('new-zealand-exporters-gcc-market-research'),
    label: 'New Zealand exporters GCC market research: dairy, meat and food proof',
  },
  {
    to: getIndustriesInsightPostPath('chinese-companies-entering-saudi-arabia-and-the-uae'),
    label: 'Chinese companies entering Saudi Arabia and the UAE: market research playbook',
  },
  {
    to: getIndustriesInsightPostPath('nielsen-alternative-saudi-arabia'),
    label: 'Syndicated vs custom research in Saudi Arabia: when each fits',
  },
  {
    to: getIndustriesInsightPostPath('government-customer-satisfaction-research-saudi-arabia'),
    label: 'Government customer satisfaction research in Saudi Arabia: Vision 2030 service quality',
  },
  {
    to: getIndustriesInsightPostPath('kantar-alternative-middle-east'),
    label: 'Kantar alternative Middle East: what buyers should compare',
  },
] as const;

/** Canonical root URL for the Skyrizi omnichannel article (not /blog/…). */
export const SKYRIZI_CANONICAL_PATH =
  '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement';

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

const ARABIC_SCRIPT = /[\u0600-\u06FF]/;

export function getBlogPostPath(
  post: Pick<BlogPost, 'slug' | 'contentSilo' | 'language'>,
): string {
  const prefix = post.language ? LOCALIZED_BLOG_PREFIX[post.language] : undefined;
  if (prefix) return `${prefix}/${post.slug}`;
  if (isIndustriesPost(post)) return getIndustriesInsightPostPath(post.slug);
  // Arabic-slug posts canonicalise to /ar/blog/. Some CMS records omit `language`,
  // and linking them under /blog/ sends every reference through a 301.
  if (ARABIC_SCRIPT.test(post.slug)) return `${LOCALIZED_BLOG_PREFIX.ar}/${post.slug}`;
  if (post.slug === SKYRIZI_CANONICAL_PATH.slice(1)) return SKYRIZI_CANONICAL_PATH;
  return `/blog/${post.slug}`;
}

export function getBlogPostAbsoluteUrl(
  post: Pick<BlogPost, 'slug' | 'contentSilo' | 'language'>,
): string {
  return `https://www.bionixus.com${getBlogPostPath(post)}`;
}
