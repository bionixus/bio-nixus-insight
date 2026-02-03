/**
 * Blog post type – structured for easy Notion integration later.
 * Notion API can map: id, slug, title, excerpt, date, category (topic), country, coverImage.
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string; // topic
  country: string;
  coverImage?: string;
  /** Full article body (HTML supported when rendered on post page) */
  body?: string;
  /** Language code (en, de, fr, es, zh, ar). Empty = show in all languages. */
  language?: string;
}
