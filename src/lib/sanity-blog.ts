/**
 * Fetch blog posts from Sanity CMS.
 * Supports both "post" (legacy) and "blogPost" (SEO, OG, portable text body) schema types.
 */

import { getSanityClient } from './sanity';
import type { BlogPost } from '@/types/blog';

const POSTS_QUERY = `*[_type in ["post", "blogPost"] && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
  _id,
  _type,
  title,
  "slug": slug.current,
  excerpt,
  language,
  "date": coalesce(publishedAt, _createdAt),
  category,
  "categoryTitle": category->title,
  "categories": categories[]->title,
  country,
  "countryTitle": country->title,
  "coverImage": mainImage.asset->url
}[0...50]`;

const POST_BY_SLUG_QUERY = `*[_type in ["post", "blogPost"] && slug.current == $slug][0] {
  _id,
  _type,
  title,
  "slug": slug.current,
  excerpt,
  body,
  bodyHtml,
  language,
  "date": coalesce(publishedAt, _createdAt),
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
  "authorImage": author->image.asset->url
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
  return {
    id: p._id,
    slug: p.slug ?? p._id,
    title: p.title ?? 'Untitled',
    excerpt: (p.excerpt ?? '').slice(0, 200),
    date: formatDate(p.date),
    category: categoryStr,
    country: countryStr,
    coverImage: p.coverImage ?? undefined,
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
      if (Array.isArray(raw.tableOfContents)) out.tableOfContents = raw.tableOfContents;
      if (Array.isArray(raw.executiveSummary)) out.executiveSummary = raw.executiveSummary;
      if (Array.isArray(raw.faq)) out.faq = raw.faq;
      if (raw.ctaSection && typeof raw.ctaSection === 'object') out.ctaSection = raw.ctaSection;
      // SEO / OG / Author
      if (raw.seo) {
        out.seoMetaTitle = raw.seo.metaTitle;
        out.seoMetaDescription = raw.seo.metaDescription;
        out.seoCanonicalUrl = raw.seo.canonicalUrl;
        out.seoNoIndex = raw.seo.noIndex;
      }
      if (raw.openGraph) {
        out.ogTitle = raw.openGraph.ogTitle;
        out.ogDescription = raw.openGraph.ogDescription;
      }
      if (raw.ogImageUrl) out.ogImage = raw.ogImageUrl;
      if (raw.authorName) out.authorName = raw.authorName;
      if (raw.authorImage) out.authorImage = raw.authorImage;
      return out;
    })()),
    language: p.language ?? undefined,
  };
}

/** Test Sanity connection. Returns { ok: true } or { ok: false, error: string }. */
export async function checkSanityConnection(): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const client = getSanityClient();
    await client.fetch<number>('count(*[_type in ["post", "blogPost"]])');
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: message };
  }
}

export async function fetchSanityPosts(): Promise<BlogPost[]> {
  const client = getSanityClient();
  const raw = await client.fetch<RawSanityPost[]>(POSTS_QUERY);
  return raw.map((p) => mapRawToPost(p)!);
}

export async function fetchSanityPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const client = getSanityClient();
    const raw = await client.fetch<RawSanityPost | null>(POST_BY_SLUG_QUERY, { slug });
    return mapRawToPost(raw, true);
  } catch (err) {
    console.error('Sanity fetch error:', err);
    return null;
  }
}

/**
 * Fetch related posts by same category, excluding the current post.
 * Also returns prev/next posts by date for navigation chain.
 */
/**
 * Related posts query: finds posts by same category OR same country (since category is often null).
 * Falls back to latest posts excluding the current one.
 */
const RELATED_POSTS_QUERY = `{
  "byCategory": *[_type in ["post", "blogPost"] && defined(slug.current) && slug.current != $slug && category == $category && $category != ""] | order(publishedAt desc, _createdAt desc)[0...3] {
    _id, _type, title, "slug": slug.current, excerpt, "date": coalesce(publishedAt, _createdAt), category, country, "coverImage": mainImage.asset->url
  },
  "byCountry": *[_type in ["post", "blogPost"] && defined(slug.current) && slug.current != $slug && country == $country && $country != ""] | order(publishedAt desc, _createdAt desc)[0...6] {
    _id, _type, title, "slug": slug.current, excerpt, "date": coalesce(publishedAt, _createdAt), category, country, "coverImage": mainImage.asset->url
  },
  "latest": *[_type in ["post", "blogPost"] && defined(slug.current) && slug.current != $slug] | order(publishedAt desc, _createdAt desc)[0...6] {
    _id, _type, title, "slug": slug.current, excerpt, "date": coalesce(publishedAt, _createdAt), category, country, "coverImage": mainImage.asset->url
  },
  "prev": *[_type in ["post", "blogPost"] && defined(slug.current) && coalesce(publishedAt, _createdAt) < $date] | order(publishedAt desc, _createdAt desc)[0] {
    _id, title, "slug": slug.current
  },
  "next": *[_type in ["post", "blogPost"] && defined(slug.current) && coalesce(publishedAt, _createdAt) > $date] | order(publishedAt asc, _createdAt asc)[0] {
    _id, title, "slug": slug.current
  }
}`;

export interface RelatedPostsData {
  related: BlogPost[];
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export async function fetchRelatedPosts(
  slug: string,
  category: string,
  date: string,
  country?: string
): Promise<RelatedPostsData> {
  try {
    const client = getSanityClient();
    const raw = await client.fetch<{
      byCategory: RawSanityPost[];
      byCountry: RawSanityPost[];
      latest: RawSanityPost[];
      prev: { _id: string; title: string; slug: string } | null;
      next: { _id: string; title: string; slug: string } | null;
    }>(RELATED_POSTS_QUERY, {
      slug,
      category: category || '',
      country: country || '',
      date: date || '',
    });

    // Priority: same category > same country > latest posts. Deduplicate & limit to 3.
    const seen = new Set<string>();
    const merged: BlogPost[] = [];
    for (const pool of [raw.byCategory, raw.byCountry, raw.latest]) {
      for (const p of pool || []) {
        if (seen.has(p._id) || merged.length >= 3) continue;
        const mapped = mapRawToPost(p);
        if (mapped) {
          seen.add(p._id);
          merged.push(mapped);
        }
      }
    }

    return {
      related: merged,
      prev: raw.prev ? { slug: raw.prev.slug, title: raw.prev.title } : null,
      next: raw.next ? { slug: raw.next.slug, title: raw.next.title } : null,
    };
  } catch {
    return { related: [], prev: null, next: null };
  }
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
  category?: string;
  categoryTitle?: string;
  categories?: string[];
  country?: string;
  countryTitle?: string;
  coverImage?: string;
  readingTime?: number;
  tags?: string[];
  tableOfContents?: { heading?: string; anchor?: string }[];
  executiveSummary?: unknown[];
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
  authorImage?: string;
}
