export interface PressRelease {
  id: string
  slug: string
  title: string
  releaseType?: string
  excerpt?: string
  body?: string | unknown[]
  date: string
  publishedAtIso?: string
  updatedAtIso?: string
  coverImage?: string
  readingTime?: number
  tags?: string[]
  contact?: {
    name?: string
    jobTitle?: string
    email?: string
    phone?: string
  }
  seoMetaTitle?: string
  seoMetaDescription?: string
  seoCanonicalUrl?: string
  seoNoIndex?: boolean
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}
