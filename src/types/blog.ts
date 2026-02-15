import type { PortableTextBlock } from '@portabletext/types'

/**
 * Blog post type – structured for easy Notion integration later.
 * Notion API can map: id, slug, title, excerpt, date, category (topic), country, coverImage.
 */
export interface BlogPostFaqItem {
  question?: string;
  answer?: string;
}

export interface BlogPostCtaSection {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  country: string;
  coverImage?: string;
  body?: string | PortableTextBlock[];
  language?: string;
  readingTime?: number;
  tags?: string[];
  tableOfContents?: { heading?: string; anchor?: string }[];
  executiveSummary?: string | unknown[];
  faq?: BlogPostFaqItem[];
  ctaSection?: BlogPostCtaSection;
  // SEO / OG / Author
  seoMetaTitle?: string;
  seoMetaDescription?: string;
  seoCanonicalUrl?: string;
  seoNoIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  authorName?: string;
  authorImage?: string;
}
