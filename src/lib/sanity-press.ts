/**
 * Fetch press releases from Sanity CMS (server-side only).
 */

import type { SanityClient } from '@sanity/client'
import { getSanityClient } from './sanity'
import {
  assertPublicPressRelease,
  filterPublicPressReleases,
  isPressReleasePublic,
} from '@/lib/pressReleaseVisibility'
import type { PressRelease, PressReleaseListItem } from '@/types/pressRelease'
import type { PortableTextBlock } from '@portabletext/types'

type RawPressRelease = {
  _id: string
  headline?: string
  slug?: string
  subheadline?: string
  dateline?: string
  body?: PortableTextBlock[]
  embargo?: string
  publishedAt?: string
  publishedAtIso?: string
  updatedAtIso?: string
  heroImage?: string
  heroImageAlt?: string
  heroCaption?: string
  relatedReportSlug?: string
  boilerplate?: string
  seo?: PressRelease['seo']
  openGraph?: {
    ogTitle?: string
    ogDescription?: string
    ogImageUrl?: string
  }
}

const LIST_QUERY = `*[_type == "pressRelease" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  headline,
  "slug": slug.current,
  subheadline,
  dateline,
  embargo,
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  "seo": seo
}`

const BY_SLUG_QUERY = `*[_type == "pressRelease" && slug.current == $slug][0] {
  _id,
  headline,
  "slug": slug.current,
  subheadline,
  dateline,
  body,
  embargo,
  publishedAt,
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  "heroCaption": heroImage.caption,
  relatedReportSlug,
  boilerplate,
  seo,
  openGraph,
  "ogImageUrl": openGraph.ogImage.asset->url
}`

function mapRawToPressRelease(raw: RawPressRelease | null): PressRelease | null {
  if (!raw?.slug || !raw.headline || !raw.dateline) return null
  return {
    _id: raw._id,
    headline: raw.headline,
    slug: raw.slug,
    subheadline: raw.subheadline,
    dateline: raw.dateline,
    body: Array.isArray(raw.body) ? raw.body : [],
    embargo: raw.embargo,
    publishedAt: raw.publishedAt,
    publishedAtIso: raw.publishedAtIso,
    updatedAtIso: raw.updatedAtIso,
    heroImage: raw.heroImage,
    heroImageAlt: raw.heroImageAlt,
    heroCaption: raw.heroCaption,
    relatedReportSlug: raw.relatedReportSlug,
    boilerplate: raw.boilerplate,
    seo: raw.seo,
    openGraph: raw.openGraph,
  }
}

function mapRawToListItem(raw: RawPressRelease): PressReleaseListItem | null {
  if (!raw.slug || !raw.headline || !raw.dateline) return null
  return {
    _id: raw._id,
    headline: raw.headline,
    slug: raw.slug,
    subheadline: raw.subheadline,
    dateline: raw.dateline,
    publishedAtIso: raw.publishedAtIso,
    updatedAtIso: raw.updatedAtIso,
    heroImage: raw.heroImage,
    heroImageAlt: raw.heroImageAlt,
  }
}

export async function fetchSanityPressReleasesWithClient(
  client: SanityClient,
): Promise<PressReleaseListItem[]> {
  const rows = await client.fetch<RawPressRelease[]>(LIST_QUERY)
  return filterPublicPressReleases(
    (rows || []).map((r) => mapRawToListItem(r)).filter((r): r is PressReleaseListItem => r !== null),
  )
}

export async function fetchSanityPressReleaseBySlugWithClient(
  slug: string,
  client: SanityClient,
): Promise<PressRelease | null> {
  const raw = await client.fetch<RawPressRelease | null>(BY_SLUG_QUERY, { slug })
  const mapped = mapRawToPressRelease(raw)
  return assertPublicPressRelease(mapped)
}

export async function fetchSanityPressReleases(): Promise<PressReleaseListItem[]> {
  const client = getSanityClient()
  if (!client) return []
  return fetchSanityPressReleasesWithClient(client)
}

export async function fetchSanityPressReleaseBySlug(slug: string): Promise<PressRelease | null> {
  const client = getSanityClient()
  if (!client) return null
  return fetchSanityPressReleaseBySlugWithClient(slug, client)
}

export { isPressReleasePublic, filterPublicPressReleases }
