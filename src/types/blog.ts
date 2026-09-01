import type { PortableTextBlock } from '@portabletext/types'

/**
 * Blog post type – structured for easy Notion integration later.
 * Notion API can map: id, slug, title, excerpt, date, category (topic), country, coverImage.
 */
/**
 * Which editorial silo a post belongs to. Declared here rather than in
 * blog-content-silo.ts, which imports BlogPost and would otherwise cycle.
 */
export type ContentSilo = 'healthcare' | 'industries';

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
  coverImageAlt?: string;
  body?: string | PortableTextBlock[];
  bodyHtml?: string;
  language?: string;
  // Set by the Sanity mapper, which drops values outside these unions.
  contentSilo?: ContentSilo;
  industrySegment?: 'b2b' | 'b2c';
  industrySlug?: string;
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
  ogImageAlt?: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  authorLinkedIn?: string;
  publishedAtIso?: string;
  updatedAtIso?: string;
}
