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

export interface BlogPostItemListEntry {
  name: string;
  description: string;
  url?: string;
  /** Entity @id for the entry's Organization item (e.g. the sitewide BioNixus node). */
  id?: string;
}

/** Opt-in JSON-LD additions for hardcoded posts; Sanity posts never set these. */
export interface BlogPostSchemaExtras {
  /** WebPage node linked by @id to the article, cover ImageObject and BreadcrumbList. */
  emitWebPage?: boolean;
  /** Page-level Organization node (keeps the sitewide @id). */
  organization?: Record<string, unknown>;
  /** Author node; omit to keep the template's default author. */
  author?: Record<string, unknown>;
  /** Replaces the default `about` Thing built from the category. */
  about?: ReadonlyArray<Record<string, unknown>>;
  itemList?: { name: string; description?: string; items: BlogPostItemListEntry[] };
  /** In-article figures, emitted after the primary cover ImageObject. */
  contentImages?: ReadonlyArray<{ url: string; width: number; height: number; caption: string }>;
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
  /** Words in the visible article text; emitted as `wordCount` in JSON-LD. */
  wordCount?: number;
  /**
   * Last-crumb label. When set, the hero shows a visible Home / Blog / label trail
   * and the BreadcrumbList JSON-LD uses the same label.
   */
  breadcrumbLabel?: string;
  /** Dek rendered inside the hero <h1>, under the title. */
  displaySubtitle?: string;
  schemaExtras?: BlogPostSchemaExtras;
  tags?: string[];
  tableOfContents?: { heading?: string; anchor?: string }[];
  executiveSummary?: string | unknown[];
  faq?: BlogPostFaqItem[];
  /**
   * The article HTML already contains the FAQ prose. Schema still uses `faq`,
   * and the template accordion is skipped so the questions are not repeated.
   */
  faqInBody?: boolean;
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
