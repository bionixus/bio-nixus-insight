/**
 * Fetch blog posts from Sanity CMS.
 * Maps Sanity post documents to BlogPost format.
 *
 * Required Sanity schema (post type):
 *   - title (string)
 *   - slug.current (string)
 *   - excerpt (text) or description
 *   - publishedAt (datetime) or _createdAt
 *   - category (string) or category->title
 *   - country (string)
 *   - mainImage (image) - for cover image
 */

import { getSanityClient } from './sanity';
import type { BlogPost } from '@/types/blog';

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  language,
  "date": coalesce(publishedAt, _createdAt),
  category,
  "categoryTitle": category->title,
  country,
  "countryTitle": country->title,
  "coverImage": mainImage.asset->url
}[0...50]`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  language,
  "date": coalesce(publishedAt, _createdAt),
  category,
  "categoryTitle": category->title,
  country,
  "countryTitle": country->title,
  "coverImage": mainImage.asset->url
}`;

function mapRawToPost(p: RawSanityPost | null, includeBody = false): BlogPost | null {
  if (!p) return null;
  return {
    id: p._id,
    slug: p.slug ?? p._id,
    title: p.title ?? 'Untitled',
    excerpt: (p.excerpt ?? '').slice(0, 200),
    date: formatDate(p.date),
    category: typeof p.category === 'string' ? p.category : p.category?.title ?? '',
    country: typeof p.country === 'string' ? p.country : p.country?.title ?? '',
    coverImage: p.coverImage ?? undefined,
    ...(includeBody && { body: p.body ?? undefined }),
    language: p.language ?? undefined,
  };
}

export async function fetchSanityPosts(): Promise<BlogPost[]> {
  try {
    const client = getSanityClient();
    const raw = await client.fetch<RawSanityPost[]>(POSTS_QUERY);
    return raw.map((p) => mapRawToPost(p)!);
  } catch (err) {
    console.error('Sanity fetch error:', err);
    return [];
  }
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
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: string;
  language?: string;
  date?: string;
  category?: string;
  categoryTitle?: string;
  country?: string;
  countryTitle?: string;
  coverImage?: string;
}
