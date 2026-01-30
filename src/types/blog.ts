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
}
