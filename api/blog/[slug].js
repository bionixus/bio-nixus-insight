import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const QUERY = `*[_type in ["post", "blogPost"] && slug.current == $slug][0]{
  title,
  excerpt,
  "coverImage": mainImage.asset->url,
  publishedAt,
  category,
  "categoryTitle": category->title,
  "categories": categories[]->title,
  tags
}`;

/** Escape HTML entities to prevent XSS in meta content attributes */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  try {
    const post = await sanityClient.fetch(QUERY, { slug });

    if (!post) {
      // Return 200 with default BioNixus OG so crawlers don't flag a bad response
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(buildFallbackHtml(slug));
    }

    const title = esc(post.title || 'BioNixus Blog');
    const description = esc(
      post.excerpt || `${post.title} — Read the full article on BioNixus.`
    );
    const image = post.coverImage || 'https://bionixus.com/og-image.png';
    const url = `https://bionixus.com/blog/${esc(slug)}`;
    const category =
      typeof post.category === 'string'
        ? post.category
        : post.categoryTitle ||
          (Array.isArray(post.categories) ? post.categories[0] : '') ||
          '';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | BioNixus</title>
  <meta name="description" content="${description}">

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="BioNixus">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${esc(image)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${title}">
  ${post.publishedAt ? `<meta property="article:published_time" content="${esc(post.publishedAt)}">` : ''}
  ${category ? `<meta property="article:section" content="${esc(category)}">` : ''}
  ${Array.isArray(post.tags) ? post.tags.map((t) => `<meta property="article:tag" content="${esc(t)}">`).join('\n  ') : ''}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@BioNixus">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${esc(image)}">

  <link rel="canonical" href="${url}">
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
  <a href="${url}">Read on BioNixus</a>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).send(html);
  } catch (error) {
    console.error('OG handler error:', error);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(buildFallbackHtml(slug));
  }
}

function buildFallbackHtml(slug) {
  const url = `https://bionixus.com/blog/${esc(slug)}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BioNixus Blog</title>
  <meta property="og:title" content="BioNixus – EMEA Healthcare Market Research">
  <meta property="og:description" content="Leading UK healthcare market research firm delivering pharmaceutical insights across Europe and MENA.">
  <meta property="og:image" content="https://bionixus.com/og-image.png">
  <meta property="og:url" content="${url}">
  <link rel="canonical" href="${url}">
</head>
<body><p>BioNixus Blog</p></body>
</html>`;
}
