/**
 * Shared press-release RSS builder for api/news-feed and local server.js.
 */

const BASE = 'https://www.bionixus.com';

function escXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(iso) {
  if (!iso) return new Date().toUTCString();
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return new Date().toUTCString();
  return d.toUTCString();
}

/**
 * @param {import('@sanity/client').SanityClient} client
 */
export async function fetchPublicPressReleasesForRss(client, limit = 50) {
  const now = new Date().toISOString();
  const query = `*[
    _type == "pressRelease" &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= $now &&
    (!defined(embargo) || embargo <= $now) &&
    !(seo.noIndex == true)
  ] | order(publishedAt desc) [0...$limit] {
    headline,
    "slug": slug.current,
    subheadline,
    dateline,
    "publishedAtIso": coalesce(publishedAt, _createdAt),
    "heroImage": heroImage.asset->url
  }`;
  return client.fetch(query, { now, limit });
}

/**
 * @param {Array<{ headline: string; slug: string; subheadline?: string; dateline?: string; publishedAtIso?: string; heroImage?: string }>} items
 */
export function buildPressRssXml(items) {
  const channelItems = (items || [])
    .map((item) => {
      const link = `${BASE}/news/${encodeURIComponent(item.slug)}`;
      const description = escXml(item.subheadline?.trim() || item.dateline || item.headline);
      const enclosure = item.heroImage
        ? `<enclosure url="${escXml(item.heroImage)}" type="image/jpeg" />`
        : '';
      return `<item>
  <title>${escXml(item.headline)}</title>
  <link>${escXml(link)}</link>
  <guid isPermaLink="true">${escXml(link)}</guid>
  <pubDate>${toRfc822(item.publishedAtIso)}</pubDate>
  <description>${description}</description>
  ${enclosure}
</item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BioNixus News</title>
    <link>${BASE}/news</link>
    <description>Official BioNixus press releases on healthcare and pharmaceutical market research.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/news/feed.xml" rel="self" type="application/rss+xml" />
    ${channelItems}
  </channel>
</rss>`;
}
