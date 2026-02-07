import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f',
    dataset: process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    token: process.env.VITE_SANITY_API_TOKEN, // Optional, only needed for private datasets
});

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
        "category": category
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

        // Generate HTML with proper meta tags
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${caseStudy.title} | BioNixus Case Studies</title>
  <meta name="description" content="${caseStudy.excerpt || caseStudy.title}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${caseStudy.title}">
  <meta property="og:description" content="${caseStudy.excerpt || caseStudy.title}">
  <meta property="og:url" content="https://bionixus.com/case-studies/${slug}">
  ${caseStudy.coverImage ? `<meta property="og:image" content="${caseStudy.coverImage}">` : ''}
  ${caseStudy.coverImage ? `<meta property="og:image:width" content="1200">` : ''}
  ${caseStudy.coverImage ? `<meta property="og:image:height" content="630">` : ''}
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${caseStudy.title}">
  <meta name="twitter:description" content="${caseStudy.excerpt || caseStudy.title}">
  ${caseStudy.coverImage ? `<meta name="twitter:image" content="${caseStudy.coverImage}">` : ''}
  
  <!-- Redirect to the actual page after crawlers are done -->
  <meta http-equiv="refresh" content="0;url=/case-studies/${slug}">
  <link rel="canonical" href="https://bionixus.com/case-studies/${slug}">
</head>
<body>
  <h1>${caseStudy.title}</h1>
  <p>${caseStudy.excerpt || ''}</p>
  <script>
    // Redirect immediately for human visitors
    window.location.href = '/case-studies/${slug}';
  </script>
</body>
</html>
    `;

        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
    } catch (error) {
        console.error('Error fetching case study:', error);
        res.status(500).send('Error fetching case study');
    }
}
