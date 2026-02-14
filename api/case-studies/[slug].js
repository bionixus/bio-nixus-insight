import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';

const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f',
  dataset: process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.VITE_SANITY_API_TOKEN,
});

const BASE = 'https://www.bionixus.com';

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function portableTextToPlain(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .filter((b) => b._type === 'block' && b.children)
    .map((b) => b.children.map((c) => c.text || '').join(''))
    .join('\n\n');
}

function portableTextToHTML(content) {
  if (!content) return '';
  try {
    return toHTML(content, {
      components: {
        marks: {
          link: ({ value, children }) => `<a href="${esc(value?.href || '')}">${children}</a>`,
          strong: ({ children }) => `<strong>${children}</strong>`,
          em: ({ children }) => `<em>${children}</em>`,
        },
        block: {
          h1: ({ children }) => `<h1>${children}</h1>`,
          h2: ({ children }) => `<h2>${children}</h2>`,
          h3: ({ children }) => `<h3>${children}</h3>`,
          h4: ({ children }) => `<h4>${children}</h4>`,
          normal: ({ children }) => `<p>${children}</p>`,
          blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
        },
        list: {
          bullet: ({ children }) => `<ul>${children}</ul>`,
          number: ({ children }) => `<ol>${children}</ol>`,
        },
        listItem: {
          bullet: ({ children }) => `<li>${children}</li>`,
          number: ({ children }) => `<li>${children}</li>`,
        },
      },
    });
  } catch (e) {
    return `<p>${esc(portableTextToPlain(content))}</p>`;
  }
}

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  try {
    const cs = await sanityClient.fetch(
      `*[_type == "caseStudy" && slug.current == $slug][0]{
        title,
        excerpt,
        body,
        "coverImage": mainImage.asset->url,
        publishedAt,
        "category": category,
        seo,
        openGraph,
        "ogImageUrl": openGraph.ogImage.asset->url,
        tags,
        methodology,
        keyFindings,
        conclusions
      }`,
      { slug }
    );

    if (!cs) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(buildFallbackHtml(slug));
    }

    const title = esc(cs.seo?.metaTitle || cs.title || 'BioNixus Case Study');
    const description = esc(cs.seo?.metaDescription || cs.excerpt || cs.title);
    const ogTitle = esc(cs.openGraph?.ogTitle || cs.title || title);
    const ogDescription = esc(cs.openGraph?.ogDescription || description);
    const image = cs.ogImageUrl || cs.coverImage || `${BASE}/og-image.png`;
    const url = `${BASE}/case-studies/${esc(slug)}`;
    const canonical = cs.seo?.canonicalUrl || url;

    // Render body
    let bodyHtml = '';
    if (cs.body) {
      bodyHtml = Array.isArray(cs.body) ? portableTextToHTML(cs.body) : `<p>${esc(String(cs.body))}</p>`;
    }

    // Render sections
    let sectionsHtml = '';
    if (cs.methodology) {
      const mHtml = Array.isArray(cs.methodology) ? portableTextToHTML(cs.methodology) : `<p>${esc(String(cs.methodology))}</p>`;
      sectionsHtml += `<section><h2>Methodology</h2>${mHtml}</section>`;
    }
    if (cs.keyFindings) {
      const kHtml = Array.isArray(cs.keyFindings) ? portableTextToHTML(cs.keyFindings) : `<p>${esc(String(cs.keyFindings))}</p>`;
      sectionsHtml += `<section><h2>Key Findings</h2>${kHtml}</section>`;
    }
    if (cs.conclusions) {
      const cHtml = Array.isArray(cs.conclusions) ? portableTextToHTML(cs.conclusions) : `<p>${esc(String(cs.conclusions))}</p>`;
      sectionsHtml += `<section><h2>Conclusions</h2>${cHtml}</section>`;
    }

    // Article JSON-LD
    const articleJsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: cs.title || '',
      description: cs.excerpt || '',
      image: image,
      url: url,
      datePublished: cs.publishedAt || '',
      author: { '@type': 'Organization', name: 'BioNixus', url: BASE },
      publisher: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: BASE,
        logo: { '@type': 'ImageObject', url: `${BASE}/og-image.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(cs.category ? { articleSection: cs.category } : {}),
      ...(Array.isArray(cs.tags) && cs.tags.length > 0 ? { keywords: cs.tags.join(', ') } : {}),
    });

    const breadcrumbJsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${BASE}/case-studies` },
        { '@type': 'ListItem', position: 3, name: cs.title || slug },
      ],
    });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | BioNixus Case Studies</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">

  <meta property="og:type" content="article">
  <meta property="og:site_name" content="BioNixus">
  <meta property="og:title" content="${ogTitle}">
  <meta property="og:description" content="${ogDescription}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${esc(image)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  ${cs.publishedAt ? `<meta property="article:published_time" content="${esc(cs.publishedAt)}">` : ''}
  ${cs.category ? `<meta property="article:section" content="${esc(cs.category)}">` : ''}
  ${Array.isArray(cs.tags) ? cs.tags.map((t) => `<meta property="article:tag" content="${esc(t)}">`).join('\n  ') : ''}

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@BioNixus">
  <meta name="twitter:title" content="${ogTitle}">
  <meta name="twitter:description" content="${ogDescription}">
  <meta name="twitter:image" content="${esc(image)}">

  <link rel="canonical" href="${esc(canonical)}">

  <script type="application/ld+json">${articleJsonLd}</script>
  <script type="application/ld+json">${breadcrumbJsonLd}</script>
</head>
<body>
  <nav aria-label="Breadcrumb">
    <a href="${BASE}">Home</a> &gt; <a href="${BASE}/case-studies">Case Studies</a> &gt; <span>${title}</span>
  </nav>
  <article>
    <header>
      <h1>${title}</h1>
      ${cs.publishedAt ? `<time datetime="${esc(cs.publishedAt)}">${new Date(cs.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>` : ''}
      ${cs.category ? `<p>Category: ${esc(cs.category)}</p>` : ''}
    </header>
    ${cs.excerpt ? `<p><strong>${esc(cs.excerpt)}</strong></p>` : ''}
    <div class="article-body">
      ${bodyHtml || `<p>${description}</p>`}
    </div>
    ${sectionsHtml}
  </article>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).send(html);
  } catch (error) {
    console.error('Case study OG handler error:', error);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(buildFallbackHtml(slug));
  }
}

function buildFallbackHtml(slug) {
  const url = `${BASE}/case-studies/${esc(slug)}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BioNixus Case Studies</title>
  <meta name="description" content="Healthcare market research case studies by BioNixus.">
  <meta property="og:title" content="BioNixus – EMEA Healthcare Market Research">
  <meta property="og:description" content="Leading UK healthcare market research firm.">
  <meta property="og:image" content="${BASE}/og-image.png">
  <meta property="og:url" content="${url}">
  <link rel="canonical" href="${url}">
</head>
<body><p>BioNixus Case Studies</p></body>
</html>`;
}
