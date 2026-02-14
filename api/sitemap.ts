/**
 * Dynamic sitemap — Edge Function (doesn't count toward Hobby plan's 12 serverless fn limit).
 * Queries Sanity live so new articles/case-studies appear automatically.
 */

export const config = { runtime: 'edge' };

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

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function entry(loc: string, lastmod: string, changefreq: string, priority: string): string {
  return `  <url>\n    <loc>${esc(loc)}</loc>\n    <lastmod>${esc(lastmod)}</lastmod>\n    <changefreq>${esc(changefreq)}</changefreq>\n    <priority>${esc(priority)}</priority>\n  </url>`;
}

interface Row { slug: string; lastmod: string | null }

async function fetchSlugs(projectId: string, dataset: string, types: string[]): Promise<Row[]> {
  const query = encodeURIComponent(
    `*[_type in $types && defined(slug.current)]{ "slug": slug.current, "lastmod": coalesce(publishedAt, _updatedAt, _createdAt) }`
  );
  const params = encodeURIComponent(JSON.stringify({ types }));
  const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}&$types=${params}`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return [];
    const json = await res.json() as { result?: Row[] };
    // Deduplicate by slug
    const map = new Map<string, string>();
    for (const r of json.result ?? []) {
      if (!r.slug) continue;
      const d = r.lastmod ? r.lastmod.slice(0, 10) : '';
      const prev = map.get(r.slug);
      if (!prev || d > prev) map.set(r.slug, d);
    }
    return [...map.entries()].map(([slug, lastmod]) => ({ slug, lastmod }));
  } catch {
    return [];
  }
}

export default async function handler(req: Request): Promise<Response> {
  const blogProjectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
  const blogDataset = process.env.VITE_SANITY_DATASET || 'production';
  const caseProjectId = process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f';
  const caseDataset = process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production';

  const [blogSlugs, caseSlugs] = await Promise.all([
    fetchSlugs(blogProjectId, blogDataset, ['post', 'blogPost']),
    fetchSlugs(caseProjectId, caseDataset, ['caseStudy']),
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const urls: string[] = [];

  // Core pages in every language
  for (const lang of LANGUAGES) {
    for (const page of corePages) {
      const path = lang === '' ? page.path : `${lang}${page.path}`;
      const pri = lang === '' ? page.priority : String(Math.round(Math.max(0.5, parseFloat(page.priority) - 0.1) * 10) / 10);
      urls.push(entry(BASE + path, today, page.changefreq, pri));
    }
  }

  // Standalone pages
  for (const page of standalonePages) {
    urls.push(entry(BASE + page.path, today, page.changefreq, page.priority));
  }

  // Blog posts
  for (const { slug, lastmod } of blogSlugs) {
    urls.push(entry(`${BASE}/blog/${encodeURIComponent(slug)}`, lastmod || today, 'monthly', '0.7'));
  }

  // Case studies
  for (const { slug, lastmod } of caseSlugs) {
    urls.push(entry(`${BASE}/case-studies/${encodeURIComponent(slug)}`, lastmod || today, 'monthly', '0.7'));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
