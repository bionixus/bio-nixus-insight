import type { PortableTextBlock } from '@portabletext/types'

export type PressReleaseSeo = {
  metaTitle?: string
  metaDescription?: string
  noIndex?: boolean
}

export type PressReleaseOpenGraph = {
  ogTitle?: string
  ogDescription?: string
  ogImageUrl?: string
}

export type PressRelease = {
  _id: string
  headline: string
  slug: string
  subheadline?: string
  dateline: string
  body: PortableTextBlock[]
  embargo?: string
  publishedAt?: string
  publishedAtIso?: string
  updatedAtIso?: string
  heroImage?: string
  heroImageAlt?: string
  heroCaption?: string
  relatedReportSlug?: string
  boilerplate?: string
  seo?: PressReleaseSeo
  openGraph?: PressReleaseOpenGraph
}

export type PressReleaseListItem = Pick<
  PressRelease,
  | '_id'
  | 'headline'
  | 'slug'
  | 'subheadline'
  | 'dateline'
  | 'publishedAtIso'
  | 'updatedAtIso'
  | 'heroImage'
  | 'heroImageAlt'
>
