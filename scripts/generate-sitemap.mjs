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

const BASE = 'https://bionixus.com';

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

// Static routes (from App.tsx + seo)
const staticRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/de', priority: '0.9' },
  { path: '/fr', priority: '0.9' },
  { path: '/es', priority: '0.9' },
  { path: '/zh', priority: '0.9' },
  { path: '/zh/about', priority: '0.8' },
  { path: '/zh/healthcare-market-research', priority: '0.8' },
  { path: '/zh/quantitative-research', priority: '0.8' },
  { path: '/zh/qualitative-research', priority: '0.8' },
  { path: '/zh/market-access', priority: '0.8' },
  { path: '/zh/clinical-trials', priority: '0.8' },
  { path: '/zh/contact', priority: '0.8' },
  { path: '/ar', priority: '0.9' },
  { path: '/blog', priority: '0.9' },
  { path: '/case-studies', priority: '0.9' },
  { path: '/contact', priority: '0.9' },
  { path: '/de/contact', priority: '0.8' },
  { path: '/fr/contact', priority: '0.8' },
  { path: '/es/contact', priority: '0.8' },
  { path: '/zh/contact', priority: '0.8' },
  { path: '/ar/contact', priority: '0.8' },
  { path: '/methodology', priority: '0.9' },
  { path: '/de/methodology', priority: '0.8' },
  { path: '/fr/methodology', priority: '0.8' },
  { path: '/es/methodology', priority: '0.8' },
  { path: '/zh/methodology', priority: '0.8' },
  { path: '/ar/methodology', priority: '0.8' },
  { path: '/privacy', priority: '0.5' },
];

async function fetchSanitySlugs(projectId, dataset, type) {
  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    const query = `*[_type == "${type}" && defined(slug.current)]{ "slug": slug.current }`;
    const list = await Promise.race([
      client.fetch(query),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 15000)
      ),
    ]);
    return (list || []).map((o) => o.slug).filter(Boolean);
  } catch (err) {
    console.warn(`Sitemap: could not fetch ${type} slugs:`, err.message);
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
    fetchSanitySlugs(blogProjectId, blogDataset, 'post'),
    fetchSanitySlugs(caseProjectId, caseDataset, 'caseStudy'),
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const urls = [];

  for (const { path, priority } of staticRoutes) {
    urls.push(urlEntry(BASE + path, today, 'weekly', priority));
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
