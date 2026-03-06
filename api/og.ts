/**
 * Vercel Edge Function – serves HTML with correct Open Graph meta tags
 * for social-media crawlers so that blog (and case-study) links render
 * unique titles, descriptions and images in link previews.
 *
 * Normal browser traffic never reaches this function (see vercel.json
 * "has" condition that limits the rewrite to bot user-agents).
 */

export const config = { runtime: 'edge' };

/* ------------------------------------------------------------------ */
/*  Sanity project settings                                           */
/* ------------------------------------------------------------------ */

const BLOG_PROJECT = 'h2whvvpo';
const BLOG_DATASET = 'production';
const CASE_PROJECT = 'gj6cv27f';
const CASE_DATASET = 'production';
const SANITY_API = '2024-01-01';

const SITE_URL = 'https://bionixus.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_NAME = 'BioNixus';

/* ------------------------------------------------------------------ */
/*  GROQ queries                                                      */
/* ------------------------------------------------------------------ */

const BLOG_OG_QUERY = `*[_type in ["post","blogPost"] && slug.current == $slug][0]{
  title,
  excerpt,
  "coverImage": mainImage.asset->url,
  "ogTitle": openGraph.ogTitle,
  "ogDescription": openGraph.ogDescription,
  "ogImage": openGraph.ogImage.asset->url,
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription
}`;

const CASE_OG_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0]{
  title,
  excerpt,
  "coverImage": mainImage.asset->url
}`;

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function ogImageUrl(raw: string): string {
  if (raw.includes('cdn.sanity.io')) {
    const sep = raw.includes('?') ? '&' : '?';
    return `${raw}${sep}w=1200&h=630&fit=crop&auto=format`;
  }
  return raw;
}

interface PostMeta {
  title?: string;
  excerpt?: string;
  coverImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  metaTitle?: string;
  metaDescription?: string;
}

async function fetchMeta(
  projectId: string,
  dataset: string,
  query: string,
  slug: string,
): Promise<PostMeta | null> {
  const url =
    `https://${projectId}.apicdn.sanity.io/v${SANITY_API}/data/query/${dataset}` +
    `?query=${encodeURIComponent(query)}&$slug="${encodeURIComponent(slug)}"`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) return null;
    const json = await res.json();
    return (json as { result?: PostMeta }).result ?? null;
  } catch {
    return null;
  }
}

function buildHtml(
  title: string,
  description: string,
  image: string,
  pageUrl: string,
): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}"/>
  <link rel="canonical" href="${esc(pageUrl)}"/>
  <meta property="og:type" content="article"/>
  <meta property="og:site_name" content="${SITE_NAME}"/>
  <meta property="og:title" content="${esc(title)}"/>
  <meta property="og:description" content="${esc(description)}"/>
  <meta property="og:image" content="${esc(image)}"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:url" content="${esc(pageUrl)}"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:site" content="@BioNixus"/>
  <meta name="twitter:title" content="${esc(title)}"/>
  <meta name="twitter:description" content="${esc(description)}"/>
  <meta name="twitter:image" content="${esc(image)}"/>
</head>
<body>
  <h1>${esc(title)}</h1>
  <p>${esc(description)}</p>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/*  Handler                                                           */
/* ------------------------------------------------------------------ */

export default async function handler(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const type = searchParams.get('type') || 'blog';

  if (!slug) {
    return new Response('Missing slug', { status: 400 });
  }

  // Pick the right Sanity project + query
  const isCaseStudy = type === 'case-studies';
  const post = await fetchMeta(
    isCaseStudy ? CASE_PROJECT : BLOG_PROJECT,
    isCaseStudy ? CASE_DATASET : BLOG_DATASET,
    isCaseStudy ? CASE_OG_QUERY : BLOG_OG_QUERY,
    slug,
  );

  const title =
    post?.ogTitle || post?.metaTitle || post?.title || `${SITE_NAME} Blog`;
  const description =
    post?.ogDescription ||
    post?.metaDescription ||
    post?.excerpt ||
    '';
  const rawImage = post?.ogImage || post?.coverImage;
  const image = rawImage ? ogImageUrl(rawImage) : DEFAULT_OG_IMAGE;
  const pageUrl = `${SITE_URL}/${type}/${slug}`;

  return new Response(buildHtml(title, description, image, pageUrl), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
