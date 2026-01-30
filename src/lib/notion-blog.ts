/**
 * Notion → Blog mapping for topic (category) and country.
 *
 * HOW TO LINK ARTICLES FROM NOTION TO TOPIC AND COUNTRY
 * ------------------------------------------------------
 * 1. In Notion: create a database (e.g. "Blog" or "Articles") with these properties:
 *
 *    | Property name (Notion) | Type in Notion | Maps to BlogPost | Used for filter |
 *    |------------------------|----------------|------------------|-----------------|
 *    | Title                  | Title          | title            | -               |
 *    | Slug                   | URL or Formula | slug             | URL /blog/:slug |
 *    | Excerpt                | Text           | excerpt          | -               |
 *    | Date                   | Date           | date (formatted) | -               |
 *    | Topic                  | Select         | category         | Topic filter    |
 *    | Country                | Select         | country          | Country filter  |
 *    | Cover                  | Files & media  | coverImage       | Card image      |
 *
 * 2. Topic (Select): add options that match what you want in the filter, e.g.:
 *    - Market Access
 *    - Digital Health
 *    - Oncology
 *    (Same values as in i18n blog items = same filter options.)
 *
 * 3. Country (Select): add options, e.g.:
 *    - Europe, USA, UK, etc.
 *
 * 4. When you fetch pages from this database via the Notion API, map each page
 *    to BlogPost using the shape below. The Topic select → category, Country select → country.
 */

import type { BlogPost } from '@/types/blog';

/**
 * Shape of a Notion database page properties when using the suggested schema.
 * Adjust property names to match your actual Notion database.
 */
export interface NotionBlogPageProperties {
  Title: { title: { plain_text: string }[] };
  Slug: { url: string } | { rich_text: { plain_text: string }[] };
  Excerpt: { rich_text: { plain_text: string }[] };
  Date: { date: { start: string } | null };
  Topic: { select: { name: string } | null };
  Country: { select: { name: string } | null };
  Cover?: { files: { file?: { url: string }; external?: { url: string } }[] };
}

/**
 * Map one Notion page to BlogPost. Topic → category, Country → country.
 * Use this when iterating over Notion API query results.
 */
export function notionPageToBlogPost(
  pageId: string,
  props: NotionBlogPageProperties
): BlogPost {
  const getTitle = () => props.Title?.title?.[0]?.plain_text ?? '';
  const getSlug = () =>
    typeof props.Slug === 'object' && props.Slug !== null && 'url' in props.Slug
      ? props.Slug.url?.replace(/^.*\//, '') || pageId
      : (props.Slug as { rich_text: { plain_text: string }[] })?.rich_text?.[0]?.plain_text ?? pageId;
  const getExcerpt = () => props.Excerpt?.rich_text?.[0]?.plain_text ?? '';
  const getDate = () =>
    props.Date?.date?.start
      ? new Date(props.Date.date.start).toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '';
  const getTopic = () => props.Topic?.select?.name ?? '';
  const getCountry = () => props.Country?.select?.name ?? '';
  const getCover = () => {
    const file = props.Cover?.files?.[0];
    return file?.file?.url ?? file?.external?.url;
  };

  return {
    id: pageId,
    slug: getSlug(),
    title: getTitle(),
    excerpt: getExcerpt(),
    date: getDate(),
    category: getTopic(),
    country: getCountry(),
    coverImage: getCover(),
  };
}

/**
 * Map many Notion pages to BlogPost[]. Use after Notion API fetch.
 * Example:
 *
 *   const response = await fetch('https://api.notion.com/v1/databases/{id}/query', { ... });
 *   const data = await response.json();
 *   const posts: BlogPost[] = data.results.map((page: any) =>
 *     notionPageToBlogPost(page.id, page.properties)
 *   );
 *   <BlogSection posts={posts} />
 */
