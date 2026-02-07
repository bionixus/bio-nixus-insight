// Vercel middleware to detect social media bots and serve pre-rendered HTML from Sanity
export const config = {
    matcher: ['/blog/:slug*', '/case-studies/:slug*'],
};

export default function middleware(request) {
    const userAgent = request.headers.get('user-agent') || '';

    // Detect social media crawlers
    const isCrawler = /bot|crawler|spider|crawling|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegram|slack|discord/i.test(userAgent);

    if (isCrawler) {
        const url = new URL(request.url);
        // Remove trailing slash if present for cleaner splitting but be safe
        const pathParts = url.pathname.split('/').filter(Boolean);
        const slug = pathParts[pathParts.length - 1];

        // Determine if it's a blog post or case study
        const isBlog = url.pathname.startsWith('/blog/');
        const apiPath = isBlog ? 'blog' : 'case-studies';

        // Redirect to our serverless function that fetches from Sanity
        return Response.redirect(
            `${url.origin}/api/${apiPath}/${slug}`,
            307
        );
    }

    // Normal users - let the SPA handle it (react-helmet-async works here)
    return null;
}
