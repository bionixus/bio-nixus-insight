import { getSanityClient } from './sanity'
import type { PressRelease } from '@/types/press-release'

function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function formatDate(iso: string | undefined): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

const LIST_QUERY = `*[_type == "pressRelease" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  releaseType,
  excerpt,
  "date": coalesce(publishedAt, _createdAt),
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  "coverImage": coverImage.asset->url,
  readingTime,
  tags
}[0...50]`

const BY_SLUG_QUERY = `*[_type == "pressRelease" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  releaseType,
  excerpt,
  body,
  bodyHtml,
  "date": coalesce(publishedAt, _createdAt),
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  "coverImage": coverImage.asset->url,
  readingTime,
  tags,
  contact,
  seo,
  openGraph,
  "ogImageUrl": openGraph.ogImage.asset->url
}`

interface RawPressRelease {
  _id: string
  title?: string
  slug?: string
  releaseType?: string
  excerpt?: string
  body?: string | unknown[]
  bodyHtml?: string
  date?: string
  publishedAtIso?: string
  updatedAtIso?: string
  coverImage?: string
  readingTime?: number
  tags?: string[]
  contact?: { name?: string; jobTitle?: string; email?: string; phone?: string }
  seo?: { metaTitle?: string; metaDescription?: string; canonicalUrl?: string; noIndex?: boolean }
  openGraph?: { ogTitle?: string; ogDescription?: string }
  ogImageUrl?: string
}

function mapRaw(p: RawPressRelease | null, includeBody = false): PressRelease | null {
  if (!p) return null
  const result: PressRelease = {
    id: p._id,
    slug: p.slug ?? p._id,
    title: p.title ?? 'Untitled',
    releaseType: p.releaseType,
    excerpt: p.excerpt ? stripHtml(p.excerpt).slice(0, 280) : undefined,
    date: formatDate(p.date),
    publishedAtIso: p.publishedAtIso,
    updatedAtIso: p.updatedAtIso,
    coverImage: p.coverImage,
    readingTime: p.readingTime,
    tags: p.tags,
  }
  if (includeBody) {
    if (p.bodyHtml?.trim()) result.body = p.bodyHtml
    else if (p.body) result.body = p.body
    if (p.contact) result.contact = p.contact
    if (p.seo?.metaTitle) result.seoMetaTitle = p.seo.metaTitle
    if (p.seo?.metaDescription) result.seoMetaDescription = p.seo.metaDescription
    if (p.seo?.canonicalUrl) result.seoCanonicalUrl = p.seo.canonicalUrl
    if (p.seo?.noIndex) result.seoNoIndex = p.seo.noIndex
    if (p.openGraph?.ogTitle) result.ogTitle = p.openGraph.ogTitle
    if (p.openGraph?.ogDescription) result.ogDescription = p.openGraph.ogDescription
    if (p.ogImageUrl) result.ogImage = p.ogImageUrl
  }
  return result
}

export async function fetchPressReleases(): Promise<PressRelease[]> {
  try {
    const client = getSanityClient()
    const raw = await client.fetch<RawPressRelease[]>(LIST_QUERY)
    return raw.map((p) => mapRaw(p)!).filter(Boolean)
  } catch (err) {
    console.error('Failed to fetch press releases:', err)
    return []
  }
}

export async function fetchPressReleaseBySlug(slug: string): Promise<PressRelease | null> {
  try {
    const client = getSanityClient()
    const raw = await client.fetch<RawPressRelease | null>(BY_SLUG_QUERY, { slug })
    return mapRaw(raw, true)
  } catch (err) {
    console.error('Sanity fetch error for press release slug:', slug, err)
    return null
  }
}
