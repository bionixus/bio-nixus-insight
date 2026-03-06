import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'h2whvvpo',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'skCrWA5fcpR5eXSbZKJn4hMfKMXAT9HccNrCtqwzTuNxIFPG3HxxuDy5kWExIyM7Lynoi2gtuz8MfZsfwjCxKSCEI1bwhkzXHmJiva5f2OmGoXJ6hKFKq1aS3WcykgBeRDYD7DB8r1XIhrNSeCBOVs4RBKhfd3Fj6AyAi6x3YuAAdFd9wa3O'
});

async function main() {
  const query = `*[_type == "post" && slug.current == "gcc-pharmaceuticals-market-2026"][0]`;
  const post = await client.fetch(query);
  console.log(JSON.stringify(post, null, 2));
}

main().catch(console.error);
