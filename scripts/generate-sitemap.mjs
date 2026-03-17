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
import { execSync } from 'child_process';
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

function urlEntry(loc, lastmod = null, changefreq = 'weekly', priority = '0.8', alternates = []) {
  const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : '';
  const alternatesTags = alternates
    .map((alt) => `\n    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.lang)}" href="${escapeXml(alt.href)}" />`)
    .join('');
  return `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmodTag}${alternatesTags}
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
  { path: '/de/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/es/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/zh/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/methodology', priority: '0.8' },
  { path: '/global-websites', priority: '0.9', changefreq: 'weekly' },
  { path: '/healthcare-market-research', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/insights', priority: '0.8', changefreq: 'weekly' },
  { path: '/de/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/fr/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/de/success-in-startups', priority: '0.7', changefreq: 'monthly' },
  { path: '/ar/arabic-blog-alsawdyh', priority: '0.7', changefreq: 'monthly' },
  { path: '/case-studies', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/quantitative-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/qualitative-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/market-access', priority: '0.8', changefreq: 'monthly' },
  { path: '/es/market-access', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/competitive-intelligence', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/clinical-trial-support', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/kol-stakeholder-mapping', priority: '0.8', changefreq: 'monthly' },
  { path: '/mena-pharma-market-data', priority: '0.9', changefreq: 'monthly' },
  { path: '/gcc-market-access-guide', priority: '0.9', changefreq: 'monthly' },
  { path: '/market-research', priority: '0.9', changefreq: 'monthly' },
  { path: '/market-research-saudi-arabia-pharmaceutical', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-healthcare', priority: '0.9', changefreq: 'weekly' },
  { path: '/qualitative-market-research', priority: '0.9', changefreq: 'weekly' },
  { path: '/pharmacies-saudi-arabia-marketing', priority: '0.8', changefreq: 'monthly' },
  { path: '/bionixus-ai-chatbots-increase-sales-and-lead-generation', priority: '0.7', changefreq: 'monthly' },
  { path: '/bionixus-market-research-middle-east', priority: '0.9', changefreq: 'monthly' },
  { path: '/gcc-pharmaceutical-market-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-pharmaceutical-market-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/saudi-payer-market-access-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/gcc-hcp-recruitment-market-research', priority: '0.8', changefreq: 'monthly' },
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
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/resources', priority: '0.7', changefreq: 'monthly' },
  { path: '/fr/contacts', priority: '0.7', changefreq: 'monthly' },
  { path: '/ar/contacts', priority: '0.7', changefreq: 'monthly' },
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

const hreflangGroups = [
  { en: '/', de: '/de', fr: '/fr', es: '/es', ar: '/ar', 'zh-CN': '/zh', 'x-default': '/' },
  { en: '/contact', de: '/de/contact', fr: '/fr/contacts', es: '/es/contact', ar: '/ar/contacts', 'zh-CN': '/zh/contact', 'x-default': '/contact' },
  // Only list languages that actually have distinct localized URLs.
  { en: '/blog', de: '/de/blog', fr: '/fr/blog', 'x-default': '/blog' },
  { en: '/services/market-access', es: '/es/market-access', 'x-default': '/services/market-access' },
  {
    en: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    de: '/de/success-in-startups',
    ar: '/ar/arabic-blog-alsawdyh',
    'x-default': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
  },
];

function pathFromAbsoluteUrl(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return '';
  }
}

function alternatesForUrl(url) {
  const path = pathFromAbsoluteUrl(url);
  if (!path) return [];
  const group = hreflangGroups.find((item) => Object.values(item).includes(path));
  if (!group) return [];
  return Object.entries(group).map(([lang, p]) => ({ lang, href: `${BASE}${p}` }));
}

/**
 * Returns git last-modified date for a file as YYYY-MM-DD.
 * Falls back to today if git has no log for the file.
 */
function getGitLastModified(filePath) {
  try {
    const result = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { cwd: root, encoding: 'utf8' }
    ).trim();
    if (!result) return null;
    // W3C datetime format YYYY-MM-DD
    return result.slice(0, 10);
  } catch {
    return null;
  }
}

/**
 * Fetch slugs AND their _updatedAt timestamps from Sanity.
 * Returns array of { slug, lastmod } objects.
 */
async function fetchSanityContent(projectId, dataset, types) {
  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    const typeArray = Array.isArray(types) ? types : [types];
    const query = `*[_type in $types && defined(slug.current)]{ "slug": slug.current, _updatedAt }`;
    const list = await Promise.race([
      client.fetch(query, { types: typeArray }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 15000)
      ),
    ]);
    // Deduplicate: keep freshest _updatedAt for each slug
    const map = new Map();
    for (const item of (list || [])) {
      if (!item.slug) continue;
      const existing = map.get(item.slug);
      const updatedAt = item._updatedAt ? item._updatedAt.slice(0, 10) : null;
      if (!existing || (updatedAt && updatedAt > existing.lastmod)) {
        map.set(item.slug, { slug: item.slug, lastmod: updatedAt });
      }
    }
    return [...map.values()];
  } catch (err) {
    console.warn(`Sitemap: could not fetch Sanity content:`, err.message);
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

/**
 * Maps static sitemap paths to their primary source file(s) for git date lookup.
 * The first file found wins; falls back to today if none are tracked.
 */
const STATIC_PAGE_FILES = {
  '/': ['src/pages/Index.tsx'],
  '/about': ['src/pages/About.tsx'],
  '/services': ['src/pages/Services.tsx'],
  '/services/quantitative-research': ['src/pages/ServiceDetail.tsx'],
  '/services/qualitative-research': ['src/pages/ServiceDetail.tsx'],
  '/services/market-access': ['src/pages/ServiceDetail.tsx'],
  '/services/competitive-intelligence': ['src/pages/ServiceDetail.tsx'],
  '/services/clinical-trial-support': ['src/pages/ServiceDetail.tsx'],
  '/services/kol-stakeholder-mapping': ['src/pages/ServiceDetail.tsx'],
  '/blog': ['src/pages/Blog.tsx'],
  '/case-studies': ['src/pages/CaseStudies.tsx'],
  '/contact': ['src/pages/Contact.tsx'],
  '/methodology': ['src/pages/Methodology.tsx'],
  '/faq': ['src/pages/FAQ.tsx'],
  '/resources': ['src/pages/Resources.tsx'],
  '/privacy': ['src/pages/Privacy.tsx'],
  '/market-research': ['src/pages/MarketResearch.tsx'],
  '/healthcare-market-research': ['src/pages/healthcare-research/HubPage.tsx'],
  '/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/market-research-saudi-arabia-pharmaceutical': ['src/pages/MarketResearchSaudiArabiaPharmaceutical.tsx'],
  '/qualitative-market-research': ['src/pages/QualitativeMarketResearch.tsx'],
  '/quantitative-healthcare-market-research': ['src/pages/QuantitativeHealthcareMarketResearchGuide.tsx'],
  '/mena-pharma-market-data': ['src/pages/MenaMarketData.tsx'],
  '/gcc-market-access-guide': ['src/pages/GccMarketAccessGuide.tsx'],
  '/bionixus-market-research-middle-east': ['src/pages/BionixusMarketResearchMiddleEast.tsx'],
  '/gcc-pharmaceutical-market-research': ['src/pages/GccPharmaceuticalMarketResearch.tsx'],
  '/uae-pharmaceutical-market-research': ['src/pages/UaePharmaceuticalMarketResearch.tsx'],
  '/saudi-payer-market-access-research': ['src/pages/SaudiPayerMarketAccessResearch.tsx'],
  '/gcc-hcp-recruitment-market-research': ['src/pages/GccHcpRecruitmentMarketResearch.tsx'],
  '/bionixus-ai-chatbots-increase-sales-and-lead-generation': ['src/pages/AiChatbotsLeadGeneration.tsx'],
  '/pharmacies-saudi-arabia-marketing': ['src/pages/PharmaciesSaudiArabiaMarketing.tsx'],
  '/pharmaceutical-companies-kuwait': ['src/pages/KuwaitPharmaCompanies.tsx'],
  '/pharmaceutical-companies-saudi-arabia': ['src/pages/SaudiPharmaCompanies.tsx'],
  '/pharmaceutical-companies-uae': ['src/pages/UaePharmaCompanies.tsx'],
  '/pharmaceutical-companies-egypt': ['src/pages/EgyptPharmaCompanies.tsx'],
  '/pharmaceutical-companies-qatar': ['src/pages/QatarPharmaCompanies.tsx'],
  '/pharmaceutical-companies-oman': ['src/pages/OmanPharmaCompanies.tsx'],
  '/pharmaceutical-companies-bahrain': ['src/pages/BahrainPharmaCompanies.tsx'],
  '/pharmaceutical-companies-iraq': ['src/pages/IraqPharmaCompanies.tsx'],
  '/pharmaceutical-companies-iran': ['src/pages/IranPharmaCompanies.tsx'],
  '/global-websites': ['src/pages/GlobalWebsites.tsx'],
};

async function main() {
  loadEnv();

  const blogProjectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
  const blogDataset = process.env.VITE_SANITY_DATASET || 'production';
  const caseProjectId = process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f';
  const caseDataset = process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production';

  const [blogContent, caseContent] = await Promise.all([
    fetchSanityContent(blogProjectId, blogDataset, ['post', 'blogPost']),
    fetchSanityContent(caseProjectId, caseDataset, 'caseStudy'),
  ]);

  const today = new Date().toISOString().slice(0, 10);
  /** @type {Map<string, {priority: string, changefreq: string, lastmod: string, enforceCanonical: boolean}>} */
  const candidates = new Map();

  const staticRoutes = buildStaticRoutes();
  for (const { path, priority, changefreq } of staticRoutes) {
    const url = BASE + path;
    // Try to get the real last-modified date from git for the source file
    const sourceFiles = STATIC_PAGE_FILES[path] || [];
    let lastmod = null;
    for (const relFile of sourceFiles) {
      lastmod = getGitLastModified(join(root, relFile));
      if (lastmod) break;
    }
    candidates.set(url, {
      priority: priority || '0.8',
      changefreq: changefreq || 'weekly',
      lastmod: lastmod || today,
      enforceCanonical: false,
    });
  }
  for (const { slug, lastmod } of blogContent) {
    const url = `${BASE}/blog/${encodeURIComponent(slug)}`;
    candidates.set(url, {
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: lastmod || today,
      enforceCanonical: true,
    });
  }
  for (const { slug, lastmod } of caseContent) {
    const url = `${BASE}/case-studies/${encodeURIComponent(slug)}`;
    candidates.set(url, {
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: lastmod || today,
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
      urlEntry(
        loc,
        meta.lastmod || today,
        meta.changefreq || 'weekly',
        meta.priority || '0.8',
        alternatesForUrl(loc)
      )
    );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
