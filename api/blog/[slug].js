import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
    dataset: process.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    token: process.env.VITE_SANITY_API_TOKEN, // Optional, only needed for private datasets
});

export default async function handler(req, res) {
    const { slug } = req.query;

    try {
        // Fetch post data from Sanity
        const post = await sanityClient.fetch(
            `*[_type == "post" && slug.current == $slug][0]{
        title,
        excerpt,
        "coverImage": mainImage.asset->url,
        publishedAt,
        "category": categories[0]->title
      }`,
            { slug }
        );

        if (!post) {
            return res.status(404).json({
                error: 'Post not found',
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
  <title>${post.title} | BioNixus</title>
  <meta name="description" content="${post.excerpt || post.title}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt || post.title}">
  <meta property="og:url" content="https://bionixus.com/blog/${slug}">
  ${post.coverImage ? `<meta property="og:image" content="${post.coverImage}">` : ''}
  ${post.coverImage ? `<meta property="og:image:width" content="1200">` : ''}
  ${post.coverImage ? `<meta property="og:image:height" content="630">` : ''}
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.excerpt || post.title}">
  ${post.coverImage ? `<meta name="twitter:image" content="${post.coverImage}">` : ''}
  
  <!-- Redirect to the actual page after crawlers are done -->
  <meta http-equiv="refresh" content="0;url=/blog/${slug}">
  <link rel="canonical" href="https://bionixus.com/blog/${slug}">
</head>
<body>
  <h1>${post.title}</h1>
  <p>${post.excerpt || ''}</p>
  <script>
    // Redirect immediately for human visitors
    window.location.href = '/blog/${slug}';
  </script>
</body>
</html>
    `;

        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).send('Error fetching post');
    }
}
