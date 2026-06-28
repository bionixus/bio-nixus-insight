/**
 * Fetch blog posts from Sanity CMS.
 * Uses "blogPost" as the single source of truth.
 */

import type { SanityClient } from '@sanity/client';
import { getSanityClient } from './sanity';
import { resolveBlogSeoNoIndex } from '@/lib/blog-robots';
import type { BlogPost } from '@/types/blog';
import {
  type ContentSilo,
  filterPostsBySilo,
  HEALTHCARE_SILO_GROQ,
  INDUSTRIES_SILO_GROQ,
} from '@/lib/blog-content-silo';
import { hardcodedSeoPosts, getHardcodedPostBySlug } from '@/data/blog-posts-index';

function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Safety cap for blog index listing (Sanity + hardcoded). Raise if catalog grows. */
export const BLOG_INDEX_POST_LIMIT = 512;

function postSortTime(post: Pick<BlogPost, 'publishedAtIso' | 'date'>): number {
  const raw = post.publishedAtIso || post.date;
  if (!raw) return 0;
  const t = new Date(raw).getTime();
  return Number.isNaN(t) ? 0 : t;
}

function sortPostsNewestFirst(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => postSortTime(b) - postSortTime(a));
}

function siloFilterClause(silo: ContentSilo): string {
  return silo === 'industries' ? INDUSTRIES_SILO_GROQ : HEALTHCARE_SILO_GROQ;
}

const SILO_FIELDS = `
  contentSilo,
  industrySegment,
  industrySlug,
`;

function buildPostsQuery(silo: ContentSilo): string {
  const siloFilter = siloFilterClause(silo);
  return `*[_type == "blogPost" && defined(slug.current) && ${siloFilter}] | order(publishedAt desc, _createdAt desc) {
  _id,
  _type,
  title,
  "slug": slug.current,
  excerpt,
  language,
  "date": coalesce(publishedAt, _createdAt),
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  category,
  "categoryTitle": category->title,
  "categories": categories[]->title,
  country,
  "countryTitle": country->title,
  "coverImage": mainImage.asset->url,
  ${SILO_FIELDS}
}[0...$limit]`;
}

const LATEST_INSIGHTS_QUERY = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  (${HEALTHCARE_SILO_GROQ}) &&
  (!defined(language) || language == $language)
] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  _type,
  title,
  "slug": slug.current,
  excerpt,
  language,
  "date": coalesce(publishedAt, _createdAt),
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  category,
  "categoryTitle": category->title,
  "categories": categories[]->title,
  country,
  "countryTitle": country->title,
  "coverImage": mainImage.asset->url,
  "authorName": author->name,
  ${SILO_FIELDS}
}[0...$limit]`;

const INDUSTRIES_INSIGHTS_QUERY = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  ${INDUSTRIES_SILO_GROQ}
] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  _type,
  title,
  "slug": slug.current,
  excerpt,
  language,
  "date": coalesce(publishedAt, _createdAt),
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  category,
  "categoryTitle": category->title,
  "categories": categories[]->title,
  country,
  "countryTitle": country->title,
  "coverImage": mainImage.asset->url,
  "authorName": author->name,
  ${SILO_FIELDS}
}[0...$limit]`;

const POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  _type,
  title,
  "slug": slug.current,
  excerpt,
  body,
  bodyHtml,
  language,
  "date": coalesce(publishedAt, _createdAt),
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  category,
  "categoryTitle": category->title,
  "categories": categories[]->title,
  country,
  "countryTitle": country->title,
  "coverImage": mainImage.asset->url,
  readingTime,
  tags,
  tableOfContents,
  executiveSummary,
  faq,
  ctaSection,
  seo,
  openGraph,
  "ogImageUrl": openGraph.ogImage.asset->url,
  "authorName": author->name,
  "authorTitle": author->title,
  "authorImage": author->image.asset->url,
  "authorLinkedIn": author->linkedIn,
  ${SILO_FIELDS}
}`;

/**
 * Infer a category from post title/excerpt when the Sanity `category` field is empty.
 * Matches against common healthcare market research topics.
 */
function inferCategory(title?: string, excerpt?: string): string {
  const text = `${title ?? ''} ${excerpt ?? ''}`.toLowerCase();
  const rules: [string, string[]][] = [
    ['Market Access', ['market access', 'hta', 'pricing', 'reimbursement', 'pharmacoeconomics', 'vpag', 'jca']],
    ['Regulatory & Policy', ['regulatory', 'sfda', 'fda', 'ema', 'approval', 'regulation', 'orphan drug', 'rare disease', 'designation']],
    ['Quantitative Research', ['quantitative', 'physician survey', 'survey', 'sentiment index', 'data quality']],
    ['Qualitative Research', ['qualitative', 'kol', 'advisory board', 'interview', 'ethnograph']],
    ['Market Intelligence', ['market research', 'market entry', 'market trend', 'competitive intelligence', 'market size', 'market guide', 'definitive guide']],
    ['Digital Health', ['digital health', 'digital transformation', 'telemedicine', 'ai in health']],
    ['Clinical Development', ['clinical trial', 'clinical development', 'pipeline', 'glp-1', 'obesity']],
    ['Hospital & Provider', ['hospital', 'provider', 'strategic sourcing', 'procurement']],
  ];
  for (const [category, keywords] of rules) {
    if (keywords.some((kw) => text.includes(kw))) return category;
  }
  return 'Industry Insights';
}

function mapRawToPost(p: RawSanityPost | null, includeBody = false): BlogPost | null {
  if (!p) return null;
  const excerptRaw = p.excerpt ?? '';
  const excerptText = stripHtml(excerptRaw);
  const rawCategory =
    typeof p.category === 'string' && p.category.trim()
      ? p.category
      : (p as RawSanityPost & { categoryTitle?: string }).categoryTitle ??
      (Array.isArray((p as RawSanityPost & { categories?: string[] }).categories)
        ? (p as RawSanityPost & { categories: string[] }).categories[0]
        : '') ??
      '';
  // Use the Sanity category if present, otherwise infer from title/excerpt
  const categoryStr = rawCategory || inferCategory(p.title, p.excerpt);
  const countryStr =
    typeof p.country === 'string'
      ? p.country
      : (p as RawSanityPost & { countryTitle?: string }).countryTitle ?? '';
  const authorFromQuery =
    typeof (p as RawSanityPost & { authorName?: string }).authorName === 'string'
      ? (p as RawSanityPost & { authorName: string }).authorName.trim()
      : '';

  return {
    id: p._id,
    slug: p.slug ?? p._id,
    title: p.title ?? 'Untitled',
    // Always expose excerpt as clean text for cards/meta even if legacy data contains HTML.
    excerpt: excerptText.slice(0, 200),
    date: formatDate(p.date),
    category: categoryStr,
    country: countryStr,
    coverImage: p.coverImage ?? undefined,
    publishedAtIso: p.publishedAtIso,
    updatedAtIso: p.updatedAtIso,
    ...(p.contentSilo === 'industries' || p.contentSilo === 'healthcare'
      ? { contentSilo: p.contentSilo }
      : {}),
    ...(p.industrySegment === 'b2b' || p.industrySegment === 'b2c'
      ? { industrySegment: p.industrySegment }
      : {}),
    ...(p.industrySlug ? { industrySlug: p.industrySlug } : {}),
    ...(authorFromQuery ? { authorName: authorFromQuery } : {}),
    ...(includeBody && (() => {
      const raw = p as RawSanityPost & { bodyHtml?: string };
      const out: Record<string, unknown> = {};
      if (typeof raw.bodyHtml === 'string' && raw.bodyHtml.trim() !== '') {
        out.body = raw.bodyHtml;
      } else if (typeof p.body === 'string' || Array.isArray(p.body)) {
        out.body = p.body;
      }
      if (raw.readingTime != null) out.readingTime = raw.readingTime;
      if (Array.isArray(raw.tags)) out.tags = raw.tags;
      if (Array.isArray(raw.tableOfContents)) {
        // Normalise: Sanity schema uses title/slug, frontend expects heading/anchor
        out.tableOfContents = raw.tableOfContents.map((item) => ({
          heading: (item as Record<string, string>).heading ?? (item as Record<string, string>).title ?? '',
          anchor: (item as Record<string, string>).anchor ?? (item as Record<string, string>).slug ?? '',
        }));
      }
      if (Array.isArray(raw.executiveSummary)) out.executiveSummary = raw.executiveSummary;
      // Also support executiveSummary as a plain string (bodyHtml-style posts)
      if (typeof raw.executiveSummary === 'string' && (raw.executiveSummary as string).trim()) {
        out.executiveSummary = raw.executiveSummary;
      }
      if (Array.isArray(raw.faq)) out.faq = raw.faq;
      if (raw.ctaSection && typeof raw.ctaSection === 'object') out.ctaSection = raw.ctaSection;
      // SEO / OG / Author
      if (raw.seo) {
        out.seoMetaTitle = raw.seo.metaTitle;
        out.seoMetaDescription = raw.seo.metaDescription;
        out.seoCanonicalUrl = raw.seo.canonicalUrl;
        out.seoNoIndex = resolveBlogSeoNoIndex(p.slug ?? p._id, raw.seo.noIndex);
      }
      if (raw.openGraph) {
        out.ogTitle = raw.openGraph.ogTitle;
        out.ogDescription = raw.openGraph.ogDescription;
      }
      if (raw.ogImageUrl) out.ogImage = raw.ogImageUrl;
      if (raw.authorName) out.authorName = raw.authorName;
      if (raw.authorTitle) out.authorTitle = raw.authorTitle;
      if (raw.authorImage) out.authorImage = raw.authorImage;
      if (raw.authorLinkedIn) out.authorLinkedIn = raw.authorLinkedIn;
      return out;
    })()),
    language: p.language ?? undefined,
  };
}

/** Test Sanity connection. Returns { ok: true } or { ok: false, error: string }. */
export async function checkSanityConnection(): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const client = getSanityClient();
    await client.fetch<number>('count(*[_type == "blogPost"])');
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: message };
  }
}

export async function fetchSanityPostsWithClient(
  client: SanityClient,
  limit = BLOG_INDEX_POST_LIMIT,
  options: { silo?: ContentSilo } = {},
): Promise<BlogPost[]> {
  const silo = options.silo ?? 'healthcare';
  const effectiveLimit = limit ?? BLOG_INDEX_POST_LIMIT;
  try {
    const raw = await client.fetch<RawSanityPost[]>(buildPostsQuery(silo), {
      limit: Math.max(1, Math.min(effectiveLimit, BLOG_INDEX_POST_LIMIT)),
    });
    const sanityPosts = raw.map((p) => mapRawToPost(p)!).filter(Boolean);
    const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));
    const newHardcoded = hardcodedSeoPosts.filter(
      (p) => !sanitySlugs.has(p.slug) && (silo === 'healthcare' ? true : false),
    );
    return sortPostsNewestFirst([...sanityPosts, ...filterPostsBySilo(newHardcoded, silo)]);
  } catch (err) {
    console.error('Failed to fetch from Sanity CMS, fallback to hardcoded posts', err);
    return sortPostsNewestFirst(filterPostsBySilo([...hardcodedSeoPosts], silo));
  }
}

export async function fetchSanityPosts(options: { silo?: ContentSilo } = {}): Promise<BlogPost[]> {
  return fetchSanityPostsWithClient(getSanityClient(), BLOG_INDEX_POST_LIMIT, options);
}

export async function fetchIndustriesInsightsWithClient(
  client: SanityClient,
  limit = BLOG_INDEX_POST_LIMIT,
): Promise<BlogPost[]> {
  try {
    const raw = await client.fetch<RawSanityPost[]>(INDUSTRIES_INSIGHTS_QUERY, {
      limit: Math.max(1, Math.min(limit, BLOG_INDEX_POST_LIMIT)),
    });
    return sortPostsNewestFirst(raw.map((p) => mapRawToPost(p)!).filter(Boolean));
  } catch (err) {
    console.error('Failed to fetch industries insights from Sanity CMS', err);
    return [];
  }
}

export async function fetchIndustriesInsights(limit = BLOG_INDEX_POST_LIMIT): Promise<BlogPost[]> {
  return fetchIndustriesInsightsWithClient(getSanityClient(), limit);
}

export async function fetchSanityLatestInsightsWithClient(
  client: SanityClient,
  language: string,
  limit = 3,
): Promise<BlogPost[]> {
  try {
    const raw = await client.fetch<RawSanityPost[]>(LATEST_INSIGHTS_QUERY, {
      language,
      limit: Math.max(1, Math.min(limit, 6)),
    });
    const sanityPosts = raw.map((p) => mapRawToPost(p)!).filter(Boolean);

    const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));
    const newHardcoded = hardcodedSeoPosts.filter(
      (p) => !sanitySlugs.has(p.slug) && (!p.language || p.language === language),
    );

    const combined = filterPostsBySilo([...sanityPosts, ...newHardcoded], 'healthcare');
    combined.sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });
    return combined.slice(0, Math.max(1, Math.min(limit, 6)));
  } catch (err) {
    console.error('Failed to fetch latest insights from Sanity CMS, fallback to hardcoded posts', err);
    const hardcodedFiltered = filterPostsBySilo(
      hardcodedSeoPosts.filter((p) => !p.language || p.language === language),
      'healthcare',
    );
    hardcodedFiltered.sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });
    return hardcodedFiltered.slice(0, Math.max(1, Math.min(limit, 6)));
  }
}

export async function fetchSanityLatestInsights(language: string, limit = 3): Promise<BlogPost[]> {
  return fetchSanityLatestInsightsWithClient(getSanityClient(), language, limit);
}

export async function fetchSanityPostBySlugWithClient(
  slug: string,
  client: SanityClient,
): Promise<BlogPost | null> {
  const hardcodedFallback = getHardcodedPostBySlug(slug);

  try {
    const raw = await client.fetch<RawSanityPost | null>(POST_BY_SLUG_QUERY, { slug });
    const mapped = mapRawToPost(raw, true);
    if (mapped) return mapped;

    if (hardcodedFallback) return hardcodedFallback;
    return null;
  } catch (err) {
    console.error('Sanity fetch error for slug:', slug, err);
    if (hardcodedFallback) return hardcodedFallback;
    return null;
  }
}

export async function fetchSanityPostBySlug(slug: string): Promise<BlogPost | null> {
  return fetchSanityPostBySlugWithClient(slug, getSanityClient());
}

/**
 * Fetch related posts by same category, excluding the current post.
 * Also returns prev/next posts by date for navigation chain.
 */
/**
 * Related posts query: finds posts by same category OR same country (since category is often null).
 * Falls back to latest posts excluding the current one.
 */
function buildRelatedPostsQuery(silo: ContentSilo): string {
  const siloFilter = siloFilterClause(silo);
  const cardFields = `_id, _type, title, "slug": slug.current, excerpt, language, "date": coalesce(publishedAt, _createdAt), category, country, "coverImage": mainImage.asset->url, contentSilo, industrySegment, industrySlug`;
  return `{
  "byTags": *[
    _type == "blogPost" &&
    defined(slug.current) &&
    slug.current != $slug &&
    ${siloFilter} &&
    count((tags[])[@ in $tags]) > 0 &&
    count($tags) > 0
  ] | order(publishedAt desc, _createdAt desc)[0...8] { ${cardFields} },
  "byCategory": *[_type == "blogPost" && defined(slug.current) && slug.current != $slug && ${siloFilter} && category == $category && $category != ""] | order(publishedAt desc, _createdAt desc)[0...3] { ${cardFields} },
  "byCountry": *[_type == "blogPost" && defined(slug.current) && slug.current != $slug && ${siloFilter} && country == $country && $country != ""] | order(publishedAt desc, _createdAt desc)[0...6] { ${cardFields} },
  "latest": *[_type == "blogPost" && defined(slug.current) && slug.current != $slug && ${siloFilter}] | order(publishedAt desc, _createdAt desc)[0...6] { ${cardFields} },
  "prev": *[_type == "blogPost" && defined(slug.current) && ${siloFilter} && coalesce(publishedAt, _createdAt) < $date] | order(publishedAt desc, _createdAt desc)[0] {
    _id, title, "slug": slug.current, language
  },
  "next": *[_type == "blogPost" && defined(slug.current) && ${siloFilter} && coalesce(publishedAt, _createdAt) > $date] | order(publishedAt asc, _createdAt asc)[0] {
    _id, title, "slug": slug.current, language
  }
}`;
}

export interface RelatedPostsData {
  related: BlogPost[];
  prev: { slug: string; title: string; language?: string } | null;
  next: { slug: string; title: string; language?: string } | null;
}

export async function fetchRelatedPostsWithClient(
  slug: string,
  category: string,
  date: string,
  country: string | undefined,
  tags: string[],
  client: SanityClient,
  contentSilo: ContentSilo = 'healthcare',
): Promise<RelatedPostsData> {
  try {
    const raw = await client.fetch<{
      byTags: RawSanityPost[];
      byCategory: RawSanityPost[];
      byCountry: RawSanityPost[];
      latest: RawSanityPost[];
      prev: { _id: string; title: string; slug: string; language?: string } | null;
      next: { _id: string; title: string; slug: string; language?: string } | null;
    }>(buildRelatedPostsQuery(contentSilo), {
      slug,
      category: category || '',
      country: country || '',
      tags: Array.isArray(tags) ? tags : [],
      date: date || '',
    });

    const seen = new Set<string>();
    const merged: BlogPost[] = [];
    for (const pool of [raw.byTags, raw.byCategory, raw.byCountry, raw.latest]) {
      for (const p of pool || []) {
        if (seen.has(p._id) || merged.length >= 5) continue;
        const mapped = mapRawToPost(p);
        if (mapped) {
          seen.add(p._id);
          merged.push(mapped);
        }
      }
    }

    return {
      related: merged,
      prev: raw.prev
        ? { slug: raw.prev.slug, title: raw.prev.title, language: raw.prev.language }
        : null,
      next: raw.next
        ? { slug: raw.next.slug, title: raw.next.title, language: raw.next.language }
        : null,
    };
  } catch {
    return { related: [], prev: null, next: null };
  }
}

export async function fetchRelatedPosts(
  slug: string,
  category: string,
  date: string,
  country?: string,
  tags: string[] = [],
  contentSilo: ContentSilo = 'healthcare',
): Promise<RelatedPostsData> {
  return fetchRelatedPostsWithClient(slug, category, date, country, tags, getSanityClient(), contentSilo);
}

function formatDate(iso: string | undefined): string {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

interface RawSanityPost {
  _id: string;
  _type?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: string | unknown[];
  bodyHtml?: string;
  language?: string;
  date?: string;
  publishedAtIso?: string;
  updatedAtIso?: string;
  category?: string;
  categoryTitle?: string;
  categories?: string[];
  country?: string;
  countryTitle?: string;
  coverImage?: string;
  readingTime?: number;
  tags?: string[];
  tableOfContents?: { heading?: string; anchor?: string }[];
  executiveSummary?: string | unknown[];
  faq?: { question?: string; answer?: string }[];
  ctaSection?: { title?: string; description?: string; buttonText?: string; buttonUrl?: string };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
  };
  openGraph?: {
    ogTitle?: string;
    ogDescription?: string;
  };
  ogImageUrl?: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  authorLinkedIn?: string;
  contentSilo?: 'healthcare' | 'industries';
  industrySegment?: 'b2b' | 'b2c';
  industrySlug?: string;
}
