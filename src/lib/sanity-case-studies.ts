/**
 * Fetch case studies from Sanity CMS (project gj6cv27f).
 * Set VITE_SANITY_CASE_STUDIES_* in .env or uses fallbacks.
 */

import { createClient, type SanityClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { CaseStudy } from '@/types/caseStudy';

const projectId = import.meta.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f';
const dataset = import.meta.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production';
const apiVersion = '2024-01-01';

function getCaseStudiesClient(): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
}

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

/** Options for responsive, fast-loading images (WebP, capped size). */
const COVER_OPTS = { w: 1200, q: 80, fm: 'webp' } as const;
const THUMB_OPTS = { w: 600, q: 75, fm: 'webp' } as const;

function getCoverImageUrl(
  mainImage: RawCaseStudy['mainImage'],
  options: 'cover' | 'thumb' = 'cover'
): string | undefined {
  if (!mainImage) return undefined;
  try {
    const opts = options === 'thumb' ? THUMB_OPTS : COVER_OPTS;
    return imageBuilder
      .image(mainImage)
      .width(opts.w)
      .quality(opts.q)
      .format(opts.fm as 'webp')
      .url();
  } catch {
    return undefined;
  }
}

const CASE_STUDIES_QUERY = `*[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  language,
  "date": coalesce(publishedAt, _createdAt),
  category,
  country,
  mainImage,
  "pdfUrl": pdfFile.asset->url
}[0...50]`;

const CASE_STUDY_BY_SLUG_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  language,
  "date": coalesce(publishedAt, _createdAt),
  category,
  country,
  mainImage,
  "pdfUrl": pdfFile.asset->url
}`;

interface RawCaseStudy {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: string;
  language?: string;
  date?: string;
  category?: string;
  country?: string;
  mainImage?: { _type?: string; asset?: { _ref: string } };
  pdfUrl?: string;
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

function mapToCaseStudy(r: RawCaseStudy, imageSize: 'cover' | 'thumb' = 'cover'): CaseStudy {
  return {
    id: r._id,
    slug: r.slug ?? r._id,
    title: r.title ?? 'Untitled',
    excerpt: r.excerpt ?? '',
    body: r.body,
    date: formatDate(r.date),
    category: r.category ?? '',
    country: r.country ?? '',
    coverImage: getCoverImageUrl(r.mainImage, imageSize),
    pdfUrl: r.pdfUrl ?? '',
    language: r.language,
  };
}

export function isCaseStudiesConfigured(): boolean {
  return true;
}

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  try {
    const client = getCaseStudiesClient();
    const raw = await client.fetch<RawCaseStudy[]>(CASE_STUDIES_QUERY);
    return raw.map((r) => mapToCaseStudy(r, 'thumb'));
  } catch (err) {
    console.error('Sanity case studies fetch error:', err);
    return [];
  }
}

export async function fetchCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const client = getCaseStudiesClient();
    const raw = await client.fetch<RawCaseStudy | null>(CASE_STUDY_BY_SLUG_QUERY, { slug });
    return raw ? mapToCaseStudy(raw) : null;
  } catch (err) {
    console.error('Sanity case study fetch error:', err);
    return null;
  }
}
