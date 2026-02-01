/**
 * WordPress → Blog mapping for topic (category) and country.
 *
 * HOW TO FETCH ARTICLES FROM WORDPRESS
 * -------------------------------------
 * 1. WordPress REST API endpoint: https://yoursite.com/wp-json/wp/v2/posts
 *
 * 2. Required custom fields or taxonomies in WordPress:
 *    - Categories (built-in) → maps to category (topic filter)
 *    - Custom taxonomy "Country" or custom field → maps to country filter
 *
 * 3. Recommended plugins for enhanced REST API:
 *    - ACF to REST API (if using Advanced Custom Fields)
 *    - Custom Post Type UI (for custom taxonomies)
 */

import type { BlogPost } from '@/types/blog';

/**
 * Shape of a WordPress REST API post response.
 * Adjust field names based on your WordPress setup.
 */
export interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  /** Featured image URL (requires _embed parameter) */
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string }[];
    'wp:term'?: { name: string; taxonomy: string }[][];
  };
  /** If using ACF or custom fields */
  acf?: {
    country?: string;
  };
  /** Category IDs (you'll need to resolve names separately or use _embed) */
  categories?: number[];
}

/**
 * Options for fetching WordPress posts
 */
export interface WordPressFetchOptions {
  /** WordPress site URL (e.g., https://blog.example.com) */
  siteUrl: string;
  /** Number of posts per page (default: 10) */
  perPage?: number;
  /** Page number (default: 1) */
  page?: number;
  /** Category slug to filter by */
  category?: string;
  /** Custom taxonomy for country (if configured) */
  countryTaxonomy?: string;
}

/**
 * Fetch posts from WordPress REST API.
 * Add ?_embed to get featured images and terms in a single request.
 */
export async function fetchWordPressPosts(
  options: WordPressFetchOptions
): Promise<WordPressPost[]> {
  const { siteUrl, perPage = 10, page = 1, category } = options;

  const params = new URLSearchParams({
    per_page: String(perPage),
    page: String(page),
    _embed: 'true', // Include featured images and terms
  });

  if (category) {
    params.set('categories', category);
  }

  const response = await fetch(
    `${siteUrl}/wp-json/wp/v2/posts?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Strip HTML tags from WordPress rendered content.
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Map one WordPress post to BlogPost.
 * Categories → category (topic), ACF/custom field → country.
 */
export function wordPressPostToBlogPost(post: WordPressPost): BlogPost {
  // Get title (strip HTML)
  const title = stripHtml(post.title.rendered);

  // Get excerpt (strip HTML and limit length)
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 200);

  // Format date
  const date = new Date(post.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Get category from embedded terms (first category found)
  const terms = post._embedded?.['wp:term']?.flat() ?? [];
  const categoryTerm = terms.find((t) => t.taxonomy === 'category');
  const category = categoryTerm?.name ?? '';

  // Get country from ACF field or custom taxonomy
  // Adjust based on your WordPress setup
  const countryTerm = terms.find((t) => t.taxonomy === 'country');
  const country = countryTerm?.name ?? post.acf?.country ?? '';

  // Get featured image
  const coverImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return {
    id: String(post.id),
    slug: post.slug,
    title,
    excerpt,
    date,
    category,
    country,
    coverImage,
  };
}

/**
 * Fetch and map WordPress posts to BlogPost[].
 * Use this to get posts ready for <BlogSection posts={posts} />.
 *
 * Example:
 *   const posts = await getWordPressBlogPosts({
 *     siteUrl: 'https://blog.bionixus.com',
 *     perPage: 6,
 *   });
 *   <BlogSection posts={posts} />
 */
export async function getWordPressBlogPosts(
  options: WordPressFetchOptions
): Promise<BlogPost[]> {
  const wpPosts = await fetchWordPressPosts(options);
  return wpPosts.map(wordPressPostToBlogPost);
}
