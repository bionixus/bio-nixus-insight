#!/usr/bin/env node
/**
 * Generates public/sitemap.xml with static routes + blog/case study slugs from Sanity.
 * Run before build: npm run generate-sitemap && npm run build
 * Or use prebuild so it runs automatically.
 */
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const outPath = join(publicDir, 'sitemap.xml');

const BASE = 'https://www.bionixus.com';

// Load .env into process.env for VITE_* (simple parse)
function loadEnv() {
  const envPath = join(root, '.env');
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  }
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(loc, lastmod = null, changefreq = 'weekly', priority = '0.8') {
  const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : '';
  return `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmodTag}
    <changefreq>${escapeXml(changefreq)}</changefreq>
    <priority>${escapeXml(priority)}</priority>
  </url>`;
}

const LANGUAGES = ['', '/de', '/fr', '/es', '/zh', '/ar'];

// Static routes — English + all language variants
const corePages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.9' },
  { path: '/healthcare-market-research', priority: '0.9' },
  { path: '/quantitative-research', priority: '0.8' },
  { path: '/qualitative-research', priority: '0.8' },
  { path: '/market-access', priority: '0.8' },
  { path: '/clinical-trials', priority: '0.8' },
  { path: '/contact', priority: '0.9' },
  { path: '/methodology', priority: '0.8' },
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

function buildStaticRoutes() {
  const routes = [];
  // Core pages in every language
  for (const lang of LANGUAGES) {
    for (const page of corePages) {
      const path = lang === '' ? page.path : `${lang}${page.path}`;
      const priority = lang === '' ? page.priority : String(Math.round(Math.max(0.5, parseFloat(page.priority) - 0.1) * 10) / 10);
      routes.push({ path, priority, changefreq: page.changefreq || 'weekly' });
    }
  }
  // Standalone pages (no language variants)
  for (const page of standalonePages) {
    routes.push(page);
  }
  return routes;
}

async function fetchSanitySlugs(projectId, dataset, types) {
  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    // Fetch multiple types at once
    const typeArray = Array.isArray(types) ? types : [types];
    const query = `*[_type in $types && defined(slug.current)]{ "slug": slug.current }`;
    const list = await Promise.race([
      client.fetch(query, { types: typeArray }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 15000)
      ),
    ]);
    // Deduplicate slugs (in case same slug exists in both post and blogPost)
    const slugs = [...new Set((list || []).map((o) => o.slug).filter(Boolean))];
    return slugs;
  } catch (err) {
    console.warn(`Sitemap: could not fetch slugs:`, err.message);
    return [];
  }
}

async function main() {
  loadEnv();

  const blogProjectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
  const blogDataset = process.env.VITE_SANITY_DATASET || 'production';
  const caseProjectId = process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f';
  const caseDataset = process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production';

  const [blogSlugs, caseSlugs] = await Promise.all([
    fetchSanitySlugs(blogProjectId, blogDataset, ['post', 'blogPost']),
    fetchSanitySlugs(caseProjectId, caseDataset, 'caseStudy'),
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const urls = [];

  const staticRoutes = buildStaticRoutes();
  for (const { path, priority, changefreq } of staticRoutes) {
    urls.push(urlEntry(BASE + path, today, changefreq || 'weekly', priority));
  }
  for (const slug of blogSlugs) {
    urls.push(urlEntry(`${BASE}/blog/${encodeURIComponent(slug)}`, today, 'monthly', '0.7'));
  }
  for (const slug of caseSlugs) {
    urls.push(urlEntry(`${BASE}/case-studies/${encodeURIComponent(slug)}`, today, 'monthly', '0.7'));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  writeFileSync(outPath, xml, 'utf8');
  console.log(`Sitemap written to public/sitemap.xml (${urls.length} URLs: ${staticRoutes.length} static, ${blogSlugs.length} blog, ${caseSlugs.length} case studies).`);
}

main().catch((err) => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
