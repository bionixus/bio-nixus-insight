import { createClient } from '@sanity/client';
import { buildPressRssXml, fetchPublicPressReleasesForRss } from '../lib/news-rss.mjs';

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

export default async function handler(req: { method?: string }, res: {
  status: (code: number) => { setHeader: (k: string, v: string) => void; send: (body: string) => void };
}) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return res.status(405).setHeader('Allow', 'GET, HEAD').send('Method not allowed');
  }

  try {
    const items = await fetchPublicPressReleasesForRss(client, 50);
    const xml = buildPressRssXml(items);
    return res
      .status(200)
      .setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
      .setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600')
      .send(xml);
  } catch (err) {
    console.error('news-feed error', err);
    return res.status(500).send('Unable to generate feed');
  }
}
