import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@sanity/client';

const BASE = 'https://www.bionixus.com';

const LANGUAGES = ['', '/de', '/fr', '/es', '/zh', '/ar'];

const corePages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.9', changefreq: 'weekly' },
  { path: '/healthcare-market-research', priority: '0.9', changefreq: 'weekly' },
  { path: '/quantitative-research', priority: '0.8', changefreq: 'weekly' },
  { path: '/qualitative-research', priority: '0.8', changefreq: 'weekly' },
  { path: '/market-access', priority: '0.8', changefreq: 'weekly' },
  { path: '/clinical-trials', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.9', changefreq: 'weekly' },
  { path: '/methodology', priority: '0.8', changefreq: 'weekly' },
];

const standalonePages = [
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/case-studies', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/quantitative-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/qualitative-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/market-access', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/competitive-intelligence', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/clinical-trial-support', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/kol-stakeholder-mapping', priority: '0.8', changefreq: 'monthly' },
  { path: '/mena-pharma-market-data', priority: '0.9', changefreq: 'monthly' },
  { path: '/gcc-market-access-guide', priority: '0.9', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/resources', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string): string {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${escapeXml(changefreq)}</changefreq>
    <priority>${escapeXml(priority)}</priority>
  </url>`;
}

interface SlugRow {
  slug: string;
  lastmod: string | null;
}

async function fetchSlugs(
  projectId: string,
  dataset: string,
  types: string | string[]
): Promise<SlugRow[]> {
  try {
    const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true });
    const typeArray = Array.isArray(types) ? types : [types];
    const query = `*[_type in $types && defined(slug.current)]{ "slug": slug.current, "lastmod": coalesce(publishedAt, _updatedAt, _createdAt) }`;
    const list: SlugRow[] = await Promise.race([
      client.fetch(query, { types: typeArray }),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error('timeout')), 10000)),
    ]);
    // Deduplicate by slug, keep the most recent lastmod
    const map = new Map<string, string>();
    for (const row of list) {
      if (!row.slug) continue;
      const existing = map.get(row.slug);
      const date = row.lastmod ? row.lastmod.slice(0, 10) : '';
      if (!existing || date > existing) map.set(row.slug, date);
    }
    return Array.from(map.entries()).map(([slug, lastmod]) => ({ slug, lastmod }));
  } catch {
    return [];
  }
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const blogProjectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
  const blogDataset = process.env.VITE_SANITY_DATASET || 'production';
  const caseProjectId = process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f';
  const caseDataset = process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production';

  const [blogSlugs, caseSlugs] = await Promise.all([
    fetchSlugs(blogProjectId, blogDataset, ['post', 'blogPost']),
    fetchSlugs(caseProjectId, caseDataset, 'caseStudy'),
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const urls: string[] = [];

  // Static routes — core pages in every language
  for (const lang of LANGUAGES) {
    for (const page of corePages) {
      const path = lang === '' ? page.path : `${lang}${page.path}`;
      const priority =
        lang === ''
          ? page.priority
          : String(Math.round(Math.max(0.5, parseFloat(page.priority) - 0.1) * 10) / 10);
      urls.push(urlEntry(BASE + path, today, page.changefreq, priority));
    }
  }

  // Standalone pages (no language variants)
  for (const page of standalonePages) {
    urls.push(urlEntry(BASE + page.path, today, page.changefreq, page.priority));
  }

  // Blog posts
  for (const { slug, lastmod } of blogSlugs) {
    urls.push(
      urlEntry(`${BASE}/blog/${encodeURIComponent(slug)}`, lastmod || today, 'monthly', '0.7')
    );
  }

  // Case studies
  for (const { slug, lastmod } of caseSlugs) {
    urls.push(
      urlEntry(`${BASE}/case-studies/${encodeURIComponent(slug)}`, lastmod || today, 'monthly', '0.7')
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  // Cache for 1 hour on CDN, revalidate in background after that
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(xml);
}
