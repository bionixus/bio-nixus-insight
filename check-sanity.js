import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'h2whvvpo',
    dataset: 'production',
    useCdn: false, // We want fresh data
    apiVersion: '2024-01-01',
});

async function listPosts() {
    console.log('Fetching posts...');
    const posts = await client.fetch(`*[_type == "post"]{title, "slug": slug.current, _id}`);
    console.log('Found posts:', posts);
}

listPosts().catch(console.error);
