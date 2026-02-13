import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f',
    dataset: process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    token: process.env.VITE_SANITY_API_TOKEN, // Optional, only needed for private datasets
});

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

    try {
        // Fetch case study data from Sanity
        const caseStudy = await sanityClient.fetch(
            `*[_type == "caseStudy" && slug.current == $slug][0]{
        title,
        excerpt,
        "coverImage": mainImage.asset->url,
        publishedAt,
        "category": category,
        seo,
        openGraph,
        "ogImageUrl": openGraph.ogImage.asset->url,
        tags
      }`,
            { slug }
        );

        if (!caseStudy) {
            return res.status(404).json({
                error: 'Case study not found',
                requestedSlug: slug,
                config: {
                    projectId: sanityClient.config().projectId,
                    dataset: sanityClient.config().dataset,
                    apiVersion: sanityClient.config().apiVersion,
                }
            });
        }

        // Use SEO/OG fields when available, fall back to defaults
        const title = esc(caseStudy.seo?.metaTitle || caseStudy.title || 'BioNixus Case Study');
        const description = esc(
          caseStudy.seo?.metaDescription || caseStudy.excerpt || caseStudy.title
        );
        const ogTitle = esc(caseStudy.openGraph?.ogTitle || title);
        const ogDescription = esc(caseStudy.openGraph?.ogDescription || description);
        const image = caseStudy.ogImageUrl || caseStudy.coverImage || 'https://bionixus.com/og-image.png';
        const url = `https://bionixus.com/case-studies/${esc(slug)}`;
        const canonical = caseStudy.seo?.canonicalUrl || url;

        // Generate HTML with proper meta tags
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | BioNixus Case Studies</title>
  <meta name="description" content="${description}">

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="BioNixus">
  <meta property="og:title" content="${ogTitle}">
  <meta property="og:description" content="${ogDescription}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${esc(image)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${ogTitle}">
  ${caseStudy.publishedAt ? `<meta property="article:published_time" content="${esc(caseStudy.publishedAt)}">` : ''}
  ${caseStudy.category ? `<meta property="article:section" content="${esc(caseStudy.category)}">` : ''}
  ${Array.isArray(caseStudy.tags) ? caseStudy.tags.map((t) => `<meta property="article:tag" content="${esc(t)}">`).join('\n  ') : ''}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@BioNixus">
  <meta name="twitter:title" content="${ogTitle}">
  <meta name="twitter:description" content="${ogDescription}">
  <meta name="twitter:image" content="${esc(image)}">

  <link rel="canonical" href="${esc(canonical)}">
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
  <a href="${url}">Read on BioNixus</a>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
    } catch (error) {
        console.error('Error fetching case study:', error);
        res.status(500).send('Error fetching case study');
    }
}
