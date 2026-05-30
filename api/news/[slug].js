import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';
import { buildSeoDescription, seoTitleWithBrandOnce } from '../../src/server/seo-meta.js';
import { sendCompressedHtml } from '../../src/server/compression.js';

const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const BASE = 'https://www.bionixus.com';

const QUERY = `*[_type == "pressRelease" && slug.current == $slug][0]{
  headline,
  subheadline,
  dateline,
  body,
  embargo,
  publishedAt,
  "publishedAtIso": coalesce(publishedAt, _createdAt),
  "updatedAtIso": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  relatedReportSlug,
  boilerplate,
  "seoMetaTitle": seo.metaTitle,
  "seoMetaDescription": seo.metaDescription,
  "seoNoIndex": seo.noIndex,
  "ogTitle": openGraph.ogTitle,
  "ogDescription": openGraph.ogDescription,
  "ogImage": openGraph.ogImage.asset->url
}`;

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isPublic(post) {
  if (!post || post.seoNoIndex === true) return false;
  if (!post.publishedAtIso && !post.publishedAt) return false;
  const published = new Date(post.publishedAtIso || post.publishedAt);
  if (Number.isNaN(published.getTime()) || published > new Date()) return false;
  if (post.embargo) {
    const embargo = new Date(post.embargo);
    if (!Number.isNaN(embargo.getTime()) && embargo > new Date()) return false;
  }
  return true;
}

function portableTextToPlain(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .filter((b) => b._type === 'block' && b.children)
    .map((b) => b.children.map((c) => c.text || '').join(''))
    .join('\n\n');
}

function portableTextToHTML(content) {
  if (!content || !Array.isArray(content)) return '';
  try {
    return toHTML(content, {
      block: {
        h2: ({ children }) => `<h2>${children}</h2>`,
        h3: ({ children }) => `<h3>${children}</h3>`,
        normal: ({ children }) => `<p>${children}</p>`,
        blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
      },
      marks: {
        link: ({ value, children }) => `<a href="${esc(value?.href || '')}">${children}</a>`,
        strong: ({ children }) => `<strong>${children}</strong>`,
        em: ({ children }) => `<em>${children}</em>`,
      },
    });
  } catch {
    return `<p>${esc(portableTextToPlain(content))}</p>`;
  }
}

function buildHtml(slug, post) {
  const url = `${BASE}/news/${encodeURIComponent(slug)}`;
  const titleCore = post.seoMetaTitle || post.ogTitle || post.headline || 'BioNixus News';
  const documentTitle = seoTitleWithBrandOnce(titleCore);
  const description = esc(
    buildSeoDescription({
      preferred: post.seoMetaDescription || post.ogDescription || post.subheadline,
      bodySource: portableTextToPlain(post.body),
      fallback: `${post.headline} — BioNixus press release.`,
    }),
  );
  const image = post.ogImage || post.heroImage || `${BASE}/og-image.png`;
  const bodyHtml = portableTextToHTML(post.body);

  const newsJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.headline,
    description: post.subheadline || post.dateline,
    image,
    url,
    datePublished: post.publishedAtIso || post.publishedAt,
    dateModified: post.updatedAtIso || post.publishedAtIso,
    author: { '@type': 'Organization', name: 'BioNixus', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: `${BASE}/bionixus-logo.webp` },
    },
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(documentTitle)}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${esc(url)}" />
  <meta property="og:title" content="${esc(post.headline)}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${esc(url)}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${esc(image)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">${newsJsonLd}</script>
</head>
<body>
  <article>
    <p><a href="${BASE}/news">News</a> · <a href="${BASE}/healthcare-market-research">Healthcare market research</a></p>
    <p><em>${esc(post.dateline)}</em></p>
    <h1>${esc(post.headline)}</h1>
    ${post.subheadline ? `<p class="dek">${esc(post.subheadline)}</p>` : ''}
    ${post.heroImage ? `<img src="${esc(post.heroImage)}" alt="${esc(post.heroImageAlt || post.headline)}" width="1200" height="630" />` : ''}
    ${bodyHtml}
    <p><a href="${BASE}/media">Media kit</a> · <a href="${BASE}/contact">Contact</a></p>
  </article>
</body>
</html>`;
}

export default async function handler(req, res) {
  const rawSlug = req.query.slug;
  const slug = decodeURIComponent(Array.isArray(rawSlug) ? rawSlug[0] : rawSlug || '');

  if (!slug || slug === 'feed.xml') {
    return res.status(404).send('Not found');
  }

  try {
    const post = await sanityClient.fetch(QUERY, { slug });
    if (!post || !isPublic(post)) {
      return res.status(404).send('Press release not found');
    }
    return sendCompressedHtml(req, res, buildHtml(slug, post));
  } catch (err) {
    console.error('news slug handler error', err);
    return res.status(500).send('Error');
  }
}
