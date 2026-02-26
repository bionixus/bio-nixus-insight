import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';
import { buildSeoDescription, normalizeSeoTitle } from '../seo-meta.js';
import { sendCompressedHtml } from '../compression.js';

const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const BASE = 'https://www.bionixus.com';

// Fetch full post including body content for Googlebot
const QUERY = `*[_type in ["post", "blogPost"] && slug.current == $slug][0]{
  title,
  excerpt,
  "body": coalesce(body, content),
  htmlContent,
  "coverImage": mainImage.asset->url,
  publishedAt,
  "author": author->name,
  category,
  "categoryTitle": category->title,
  "categories": categories[]->title,
  tags,
  executiveSummary,
  faq
}`;

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escJson(str) {
  if (!str) return '';
  return String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

// Convert Portable Text to plain text (for structured data)
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
        types: {
          image: ({ value }) =>
            `<img src="${esc(value?.url || value?.asset?.url || '')}" alt="${esc(value?.alt || '')}" loading="lazy" decoding="async" style="max-width:100%;height:auto;margin:20px 0;" />`,
          // Handle any unknown block types gracefully
          _fallback: ({ value }) => {
            if (value?._type === 'block' && value?.children) {
              const text = value.children.map((c) => c.text || '').join('');
              return text ? `<p>${esc(text)}</p>` : '';
            }
            return '';
          },
        },
        marks: {
          link: ({ value, children }) =>
            `<a href="${esc(value?.href || '')}">${children}</a>`,
          strong: ({ children }) => `<strong>${children}</strong>`,
          em: ({ children }) => `<em>${children}</em>`,
          underline: ({ children }) => `<u>${children}</u>`,
          code: ({ children }) => `<code>${children}</code>`,
          // Handle unknown marks gracefully
          _fallback: ({ children }) => `${children}`,
        },
        block: {
          h1: ({ children }) => `<h1>${children}</h1>`,
          h2: ({ children }) => `<h2>${children}</h2>`,
          h3: ({ children }) => `<h3>${children}</h3>`,
          h4: ({ children }) => `<h4>${children}</h4>`,
          normal: ({ children }) => `<p>${children}</p>`,
          blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
          // Handle unknown block styles
          _fallback: ({ children }) => `<p>${children}</p>`,
        },
        list: {
          bullet: ({ children }) => `<ul>${children}</ul>`,
          number: ({ children }) => `<ol>${children}</ol>`,
        },
        listItem: {
          bullet: ({ children }) => `<li>${children}</li>`,
          number: ({ children }) => `<li>${children}</li>`,
        },
        // Catch-all for completely unknown types
        unknownType: ({ value }) => {
          if (value?.children) {
            const text = value.children.map((c) => c.text || '').join('');
            return text ? `<p>${esc(text)}</p>` : '';
          }
          return '';
        },
      },
    });
  } catch (e) {
    // Fallback to plain text if toHTML fails
    return `<p>${esc(portableTextToPlain(content))}</p>`;
  }
}

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  try {
    const post = await sanityClient.fetch(QUERY, { slug });

    if (!post) {
      return sendCompressedHtml(req, res, buildFallbackHtml(slug));
    }

    const normalizedTitle = normalizeSeoTitle(post.title || 'BioNixus Blog', 'BioNixus Blog');
    const title = esc(normalizedTitle);
    const rawBodyText =
      typeof post?.body === 'string' ? post.body : portableTextToPlain(Array.isArray(post?.body) ? post.body : []);
    const description = esc(
      buildSeoDescription({
        preferred: post.excerpt,
        bodySource: rawBodyText,
        fallback: `${post?.title || 'BioNixus'} — Read the full article on BioNixus.`,
      })
    );
    const image = post.coverImage || `${BASE}/og-image.png`;
    const url = `${BASE}/blog/${esc(slug)}`;
    const author = post.author || 'BioNixus Research Team';
    const category =
      typeof post.category === 'string'
        ? post.category
        : post.categoryTitle ||
          (Array.isArray(post.categories) ? post.categories[0] : '') ||
          '';

    // Render full article body as HTML
    let articleBodyHtml = '';
    if (post.htmlContent) {
      // If stored as raw HTML (locale object or string)
      const htmlContent = typeof post.htmlContent === 'object'
        ? (post.htmlContent.en || Object.values(post.htmlContent)[0] || '')
        : post.htmlContent;
      articleBodyHtml = htmlContent;
    } else if (post.body) {
      // Portable Text — could be a flat array or a locale object { en: [...], ar: [...] }
      let bodyBlocks = post.body;
      if (bodyBlocks && !Array.isArray(bodyBlocks) && typeof bodyBlocks === 'object') {
        // Locale-aware: pick English first, then any available
        bodyBlocks = bodyBlocks.en || Object.values(bodyBlocks).find(v => Array.isArray(v)) || [];
      }
      if (Array.isArray(bodyBlocks) && bodyBlocks.length > 0) {
        articleBodyHtml = portableTextToHTML(bodyBlocks);
      }
    }

    // Executive summary
    let summaryHtml = '';
    if (post.executiveSummary) {
      const summaryText = typeof post.executiveSummary === 'string'
        ? post.executiveSummary
        : portableTextToPlain(post.executiveSummary);
      if (summaryText) {
        summaryHtml = `<section><h2>Executive Summary</h2><p>${esc(summaryText)}</p></section>`;
      }
    }

    // FAQ structured data
    let faqJsonLd = '';
    let faqHtml = '';
    if (post.faq && Array.isArray(post.faq) && post.faq.length > 0) {
      const faqItems = post.faq
        .filter((f) => f.question && f.answer)
        .map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        }));

      if (faqItems.length > 0) {
        faqJsonLd = `<script type="application/ld+json">${JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems,
        })}</script>`;

        faqHtml = `<section><h2>Frequently Asked Questions</h2>${post.faq
          .filter((f) => f.question && f.answer)
          .map((f) => `<details><summary>${esc(f.question)}</summary><p>${esc(f.answer)}</p></details>`)
          .join('\n')}</section>`;
      }
    }

    // Article JSON-LD structured data
    const articleJsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title || '',
      description: post.excerpt || '',
      image: image,
      url: url,
      datePublished: post.publishedAt || '',
      dateModified: post.publishedAt || '',
      author: {
        '@type': 'Organization',
        name: author,
        url: BASE,
      },
      publisher: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: BASE,
        logo: { '@type': 'ImageObject', url: `${BASE}/og-image.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(category ? { articleSection: category } : {}),
      ...(Array.isArray(post.tags) && post.tags.length > 0 ? { keywords: post.tags.join(', ') } : {}),
    });

    // BreadcrumbList JSON-LD
    const breadcrumbJsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title || slug },
      ],
    });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(normalizeSeoTitle(`${normalizedTitle} | BioNixus`, 'BioNixus'))}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="article">
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="ar_SA">
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

  <!-- Structured Data -->
  <script type="application/ld+json">${articleJsonLd}</script>
  <script type="application/ld+json">${breadcrumbJsonLd}</script>
  ${faqJsonLd}
</head>
<body>
  <nav aria-label="Breadcrumb">
    <a href="${BASE}">Home</a> &gt; <a href="${BASE}/blog">Blog</a> &gt; <span>${title}</span>
  </nav>
  <article>
    <header>
      <h1>${title}</h1>
      ${post.publishedAt ? `<time datetime="${esc(post.publishedAt)}">${new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>` : ''}
      ${author ? `<p>By ${esc(author)}</p>` : ''}
      ${category ? `<p>Category: ${esc(category)}</p>` : ''}
    </header>
    ${summaryHtml}
    <div class="article-body">
      ${articleBodyHtml || `<p>${description}</p>`}
    </div>
    ${faqHtml}
  </article>
</body>
</html>`;

    return sendCompressedHtml(req, res, html);
  } catch (error) {
    console.error('OG handler error:', error);
    return sendCompressedHtml(req, res, buildFallbackHtml(slug));
  }
}

function buildFallbackHtml(slug) {
  const url = `${BASE}/blog/${esc(slug)}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BioNixus Blog</title>
  <meta name="description" content="Leading UK healthcare market research firm delivering pharmaceutical insights across Europe and MENA.">
  <meta property="og:title" content="BioNixus – EMEA Healthcare Market Research">
  <meta property="og:description" content="Leading UK healthcare market research firm delivering pharmaceutical insights across Europe and MENA.">
  <meta property="og:image" content="${BASE}/og-image.png">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="ar_SA">
  <link rel="canonical" href="${url}">
</head>
<body><p>BioNixus Blog</p></body>
</html>`;
}
