#!/usr/bin/env node
/**
 * Generates public/sitemap.xml with static routes + blog/case study slugs from Sanity.
 * Filters out:
 * - Non-canonical URLs
 * - Redirecting URLs (3XX)
 * - Non-indexable URLs (meta robots noindex / x-robots-tag noindex)
 * - Non-200 URLs
 *
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
const REQUEST_TIMEOUT_MS = 15000;

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

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/de', priority: '0.9', changefreq: 'weekly' },
  { path: '/fr', priority: '0.9', changefreq: 'weekly' },
  { path: '/es', priority: '0.9', changefreq: 'weekly' },
  { path: '/zh', priority: '0.9', changefreq: 'weekly' },
  { path: '/ar', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.9' },
  { path: '/contact', priority: '0.9' },
  { path: '/methodology', priority: '0.8' },
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
  { path: '/bionixus-market-research-middle-east', priority: '0.9', changefreq: 'monthly' },
  { path: '/quantitative-healthcare-market-research', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-kuwait', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-saudi-arabia', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-uae', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-egypt', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-qatar', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-oman', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-bahrain', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-iraq', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-iran', priority: '0.9', changefreq: 'monthly' },
  { path: '/global-websites', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/resources', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
];

const globalWebsiteCountrySlugs = [
  'united-states',
  'canada',
  'mexico',
  'united-kingdom',
  'germany',
  'france',
  'spain',
  'turkey',
  'switzerland',
  'denmark',
  'sweden',
  'italy',
  'china',
  'japan',
  'singapore',
  'saudi-arabia',
  'united-arab-emirates',
  'egypt',
  'qatar',
  'kuwait',
  'oman',
  'bahrain',
  'iraq',
  'libya',
  'lebanon',
  'jordan',
  'tunisia',
  'algeria',
  'morocco',
  'kenya',
  'nigeria',
  'south-africa',
];

function buildStaticRoutes() {
  const routes = [];
  for (const page of staticPages) {
    routes.push(page);
  }
  // Country detail pages under Global Websites
  for (const slug of globalWebsiteCountrySlugs) {
    routes.push({
      path: `/global-websites/${slug}`,
      priority: '0.6',
      changefreq: 'monthly',
    });
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

function toAbsoluteUrl(url, base) {
  try {
    return new URL(url, base).toString();
  } catch {
    return null;
  }
}

function sameHost(url) {
  try {
    return new URL(url).hostname === new URL(BASE).hostname;
  } catch {
    return false;
  }
}

function extractCanonicalHref(html) {
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  return m?.[1] || null;
}

function hasNoindex(html, xRobotsTag = '') {
  if (/\bnoindex\b/i.test(xRobotsTag || '')) return true;
  const robotsMeta = html.match(
    /<meta[^>]*(?:name|property)=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i
  )?.[1];
  return /\bnoindex\b/i.test(robotsMeta || '');
}

async function fetchWithTimeout(url, useCrawlerUa = false) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': useCrawlerUa
          ? 'AhrefsBot/7.0 (+http://ahrefs.com/robot/)'
          : 'Mozilla/5.0 (compatible; BioNixusSitemapBot/1.0)',
        accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      },
    });
    const html = await res.text();
    return { res, html };
  } finally {
    clearTimeout(id);
  }
}

/**
 * Resolve URL to its final canonical, indexable, 200 URL.
 * Returns null when URL should not be in sitemap.
 */
async function resolveCanonicalIndexableUrl(startUrl, enforceCanonical = false) {
  const seen = new Set();
  let current = startUrl;
  let hops = 0;
  let sawRedirect = false;

  while (hops < 5) {
    hops++;
    if (seen.has(current)) return { include: null, reason: 'loop' };
    seen.add(current);

    let payload;
    try {
      payload = await fetchWithTimeout(current, enforceCanonical);
    } catch (err) {
      return { include: null, reason: `fetch-error:${err?.name || 'unknown'}` };
    }

    const { res, html } = payload;
    const finalUrl = res.url;
    const finalPath = (() => {
      try {
        return new URL(finalUrl).pathname;
      } catch {
        return '';
      }
    })();

    // Never include API endpoints in sitemap.
    if (finalPath.startsWith('/api/')) {
      return { include: null, reason: 'api-endpoint' };
    }

    if (finalUrl !== current) {
      sawRedirect = true;
      current = finalUrl;
      continue;
    }

    if (res.status !== 200) {
      return { include: null, reason: `status-${res.status}` };
    }

    const xRobotsTag = res.headers.get('x-robots-tag') || '';
    if (hasNoindex(html, xRobotsTag)) {
      return { include: null, reason: 'noindex' };
    }

    if (enforceCanonical) {
      const canonicalRaw = extractCanonicalHref(html);
      if (canonicalRaw) {
        const canonicalAbs = toAbsoluteUrl(canonicalRaw, finalUrl);
        if (!canonicalAbs) return { include: null, reason: 'bad-canonical' };
        if (!sameHost(canonicalAbs)) return { include: null, reason: 'external-canonical' };
        if (canonicalAbs !== finalUrl) {
          current = canonicalAbs;
          continue;
        }
      }
    }

    // Only include stable canonical 200 URL.
    return {
      include: finalUrl,
      reason: sawRedirect ? 'resolved-redirect' : 'ok',
    };
  }

  return { include: null, reason: 'max-hops' };
}

function mergeMeta(a, b) {
  // Keep freshest lastmod and strongest priority/changefreq.
  const priority = String(
    Math.max(parseFloat(a.priority || '0.5'), parseFloat(b.priority || '0.5'))
  );

  const order = ['yearly', 'monthly', 'weekly', 'daily', 'hourly', 'always'];
  const ai = Math.max(0, order.indexOf(a.changefreq || 'weekly'));
  const bi = Math.max(0, order.indexOf(b.changefreq || 'weekly'));
  const changefreq = order[Math.max(ai, bi)] || 'weekly';

  const lastmod = (a.lastmod || '') > (b.lastmod || '') ? a.lastmod : b.lastmod;
  return { priority, changefreq, lastmod };
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
  /** @type {Map<string, {priority: string, changefreq: string, lastmod: string, enforceCanonical: boolean}>} */
  const candidates = new Map();

  const staticRoutes = buildStaticRoutes();
  for (const { path, priority, changefreq } of staticRoutes) {
    const url = BASE + path;
    candidates.set(url, {
      priority: priority || '0.8',
      changefreq: changefreq || 'weekly',
      lastmod: today,
      enforceCanonical: false,
    });
  }
  for (const slug of blogSlugs) {
    const url = `${BASE}/blog/${encodeURIComponent(slug)}`;
    candidates.set(url, {
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: today,
      enforceCanonical: true,
    });
  }
  for (const slug of caseSlugs) {
    const url = `${BASE}/case-studies/${encodeURIComponent(slug)}`;
    candidates.set(url, {
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: today,
      enforceCanonical: true,
    });
  }

  const redirectedOrResolved = [];
  const excluded = [];
  /** @type {Map<string, {priority: string, changefreq: string, lastmod: string}>} */
  const finalUrls = new Map();

  for (const [candidateUrl, meta] of candidates) {
    const result = await resolveCanonicalIndexableUrl(
      candidateUrl,
      Boolean(meta.enforceCanonical)
    );
    if (!result.include) {
      excluded.push({ url: candidateUrl, reason: result.reason });
      continue;
    }

    if (result.include !== candidateUrl) {
      redirectedOrResolved.push({ from: candidateUrl, to: result.include, reason: result.reason });
    }

    const existing = finalUrls.get(result.include);
    if (existing) {
      finalUrls.set(result.include, mergeMeta(existing, meta));
    } else {
      finalUrls.set(result.include, meta);
    }
  }

  const urls = [...finalUrls.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([loc, meta]) =>
      urlEntry(loc, meta.lastmod || today, meta.changefreq || 'weekly', meta.priority || '0.8')
    );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  writeFileSync(outPath, xml, 'utf8');
  console.log(
    `Sitemap written to public/sitemap.xml (${urls.length} canonical URLs from ${candidates.size} candidates).`
  );
  console.log(
    `Resolved/redirected to canonical: ${redirectedOrResolved.length}. Excluded: ${excluded.length}.`
  );
}

main().catch((err) => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
