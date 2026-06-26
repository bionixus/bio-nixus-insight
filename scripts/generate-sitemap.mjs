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
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {
  BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH,
  BLOG_LEGACY_FULL_PATH_REDIRECTS,
} from '../blog-legacy-redirects.mjs';
import { getIndustryMatrixSitemapPages } from './data/industry-matrix-sitemap.mjs';

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

/** Matches production / Ahrefs exports (lowercase hex) so sitemap URLs stay stable vs legacy exports. */
function percentEncodeLower(segment) {
  return encodeURIComponent(String(segment)).replace(/%[0-9A-F]{2}/g, (h) => h.toLowerCase());
}

/** Re-encode each path segment with lowercase `%hh` — live canonical resolution often returns uppercase hex. */
function normalizeSitemapAbsoluteUrl(absUrlStr) {
  try {
    const u = new URL(absUrlStr);
    const pathname = u.pathname
      .split('/')
      .map((segment) => {
        if (!segment) return '';
        try {
          return percentEncodeLower(decodeURIComponent(segment));
        } catch {
          return segment;
        }
      })
      .join('/');
    u.pathname = pathname || '/';
    return u.toString();
  } catch {
    return absUrlStr;
  }
}

/** Arabic post slugs mirrored under `/ar/blog/` and `/blog/` (must stay aligned with BlogPost.tsx). */
const GCC_MEAST_PHARMA_AR_BLOG_SLUG =
  'أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي';
const SAUDI_PHARMA_MARKET_2026_AR_SLUG = 'سوق-الدواء-السعودي-2026';

/**
 * Arabic-only blog slugs: skip Sanity `/blog/{slug}` row (301 → `/ar/blog/…`).
 * Canonical URL is listed under extraStaticSitemapPages as `/ar/blog/…` only.
 */
const BLOG_SLUG_SITEMAP_STATIC_ONLY = new Set(['gcc-pharmaceuticals-market-arabic-2026']);

/**
 * Paths that 301 elsewhere — never list in sitemap (Ahrefs: 3xx redirect in sitemap).
 * Synced with blog-legacy-redirects.mjs + server.js portfolio aliases.
 */
const SITEMAP_REDIRECT_SOURCE_PATHS = new Set([
  '/conf',
  '/ar/conf',
  '/healthcare-market-research/united-kingdom',
  '/blog/gcc-pharmaceuticals-market-arabic-2026',
  // Alias / duplicate insight URLs — canonical targets only in sitemap (avoid keyword cannibalization).
  '/insights/top-market-research-companies-ksa-2026',
  '/insights/top-market-research-companies-abudhabi-2026',
  '/insights/top-obesity-market-research-companies-2026',
  ...Object.keys(BLOG_LEGACY_FULL_PATH_REDIRECTS),
  ...Object.keys(BLOG_DUPLICATE_EN_BLOGPATH_TO_AR_PATH),
]);

/** Case study slugs (gj6cv27f) — fallback if Sanity fetch fails at build time. */
const CASE_STUDY_FALLBACK_SLUGS = [
  'biologics-market-analysis-uae',
  'gcc-oncology-market',
  'uae-influenza-vaccines-report-2025-2026',
  'cns-case-study',
];

function isSitemapRedirectSourcePath(pathname) {
  const path = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return SITEMAP_REDIRECT_SOURCE_PATHS.has(path);
}

/**
 * Canonical indexable URLs that Sanity / redirect resolution would otherwise omit
 * — mirrors production sitemap completeness (Arabic blog index, standalone pages, duplicated AR URLs).
 */
const extraStaticSitemapPages = [
  { path: '/ar/blog', priority: '0.85', changefreq: 'weekly' },
  {
    path: '/ar/blog/gcc-pharmaceuticals-market-arabic-2026',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/ar/blog/quantitative-market-research-and-market-access',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: `/ar/blog/${percentEncodeLower(GCC_MEAST_PHARMA_AR_BLOG_SLUG)}`,
    priority: '0.75',
    changefreq: 'monthly',
  },
  {
    path: `/ar/blog/${percentEncodeLower(SAUDI_PHARMA_MARKET_2026_AR_SLUG)}`,
    priority: '0.75',
    changefreq: 'monthly',
  },
];

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
  { path: '/pt', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.9' },
  { path: '/contact', priority: '0.9' },
  { path: '/de/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/es/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/zh/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/methodology', priority: '0.8' },
  { path: '/global-websites', priority: '0.9', changefreq: 'weekly' },
  { path: '/healthcare-market-research', priority: '0.9', changefreq: 'weekly' },
  { path: '/fr/healthcare-market-research', priority: '0.9', changefreq: 'weekly' },
  { path: '/fr/healthcare-market-research/france', priority: '0.88', changefreq: 'weekly' },
  {
    path: '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
    priority: '0.85',
    changefreq: 'monthly',
  },
  { path: '/premium-home-page', priority: '0.85', changefreq: 'weekly' },
  { path: '/home-staging', priority: '0.5', changefreq: 'weekly' },
  { path: '/premium-home-preview', priority: '0.5', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/news', priority: '0.85', changefreq: 'weekly' },
  { path: '/media', priority: '0.6', changefreq: 'monthly' },
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
  { path: '/market-research-home', priority: '0.88', changefreq: 'weekly' },
  { path: '/market-research', priority: '0.9', changefreq: 'monthly' },
  { path: '/market-research-by-industry', priority: '0.85', changefreq: 'weekly' },
  { path: '/market-research-uae', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-ksa', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-saudi', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-kuwait', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-qatar', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-oman', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-bahrain', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-egypt', priority: '0.9', changefreq: 'weekly' },
  { path: '/ar/market-research-uae', priority: '0.8', changefreq: 'weekly' },
  { path: '/ar/market-research-ksa', priority: '0.8', changefreq: 'weekly' },
  { path: '/ar/market-research-saudi', priority: '0.8', changefreq: 'weekly' },
  { path: '/ar/market-research-kuwait', priority: '0.8', changefreq: 'weekly' },
  { path: '/ar/market-research-egypt', priority: '0.8', changefreq: 'weekly' },
  { path: '/market-research-saudi-arabia-pharmaceutical', priority: '0.9', changefreq: 'weekly' },
  { path: '/market-research-healthcare', priority: '0.9', changefreq: 'weekly' },
  { path: '/de/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/fr/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/es/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/zh/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/ar/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/pt/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/qualitative-market-research', priority: '0.9', changefreq: 'weekly' },
  { path: '/pharmacies-saudi-arabia-marketing', priority: '0.9', changefreq: 'weekly' },
  { path: '/bionixus-ai-chatbots-increase-sales-and-lead-generation', priority: '0.7', changefreq: 'monthly' },
  { path: '/bionixus-market-research-middle-east', priority: '0.9', changefreq: 'monthly' },
  { path: '/gcc-pharmaceutical-market-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-pharmaceutical-market-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/egypt-pharmaceutical-market-research', priority: '0.9', changefreq: 'weekly' },
  { path: '/saudi-payer-market-access-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/gcc-hcp-recruitment-market-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/healthcare-market-research-agency-gcc', priority: '0.8', changefreq: 'monthly' },
  { path: '/pharmaceutical-therapy-areas', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-market-access-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/kuwait-market-access-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/qatar-market-access-research', priority: '0.8', changefreq: 'monthly' },
  { path: '/healthcare-fieldwork-middle-east', priority: '0.8', changefreq: 'monthly' },
  { path: '/healthcare-fieldwork-gcc', priority: '0.8', changefreq: 'monthly' },
  { path: '/pharma-fieldwork-saudi-arabia', priority: '0.8', changefreq: 'monthly' },
  { path: '/pharma-fieldwork-uae', priority: '0.8', changefreq: 'monthly' },
  { path: '/real-world-evidence', priority: '0.9', changefreq: 'weekly' },
  { path: '/real-world-evidence-gcc', priority: '0.8', changefreq: 'monthly' },
  { path: '/heor-consulting-saudi-arabia', priority: '0.8', changefreq: 'monthly' },
  { path: '/pharma-fieldwork-saudi-arabia', priority: '0.85', changefreq: 'monthly' },
  { path: '/pharma-fieldwork-uae', priority: '0.85', changefreq: 'monthly' },
  { path: '/pharma-fieldwork-egypt', priority: '0.85', changefreq: 'monthly' },
  { path: '/patient-support-program-research-gcc', priority: '0.8', changefreq: 'monthly' },
  { path: '/patient-journey-research-gcc', priority: '0.8', changefreq: 'monthly' },
  { path: '/patient-adherence-research-middle-east', priority: '0.8', changefreq: 'monthly' },
  { path: '/budget-impact-model-saudi-arabia', priority: '0.8', changefreq: 'monthly' },
  { path: '/uae-pricing-reimbursement-strategy', priority: '0.8', changefreq: 'monthly' },
  { path: '/specialist-physician-panel-uae', priority: '0.8', changefreq: 'monthly' },
  { path: '/brand-tracking-pharma-gcc', priority: '0.8', changefreq: 'monthly' },
  { path: '/commercial-effectiveness-pharma-middle-east', priority: '0.8', changefreq: 'monthly' },
  { path: '/diabetes-market-research-uae', priority: '0.8', changefreq: 'monthly' },
  { path: '/respiratory-market-access-gcc', priority: '0.8', changefreq: 'monthly' },
  { path: '/quantitative-healthcare-market-research', priority: '0.9', changefreq: 'monthly' },
  { path: '/clinical-diagnostics-market-research', priority: '0.92', changefreq: 'weekly' },
  { path: '/clinical-diagnostics-proposal-request', priority: '0.88', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-kuwait', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-saudi-arabia', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-uae', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-egypt', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-qatar', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-oman', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-bahrain', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-iraq', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-companies-iran', priority: '0.9', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-dubai', priority: '0.9', changefreq: 'monthly' },
  { path: '/bionixus-vs-iqvia-mena', priority: '0.9', changefreq: 'monthly' },
  { path: '/gcc-pharma-market-report-2026', priority: '0.9', changefreq: 'monthly' },
  { path: '/kol-mapping-saudi-arabia-oncology', priority: '0.9', changefreq: 'monthly' },
  { path: '/physician-survey-saudi-arabia', priority: '0.9', changefreq: 'monthly' },
  { path: '/sfda-market-access-strategy-saudi-arabia', priority: '0.9', changefreq: 'monthly' },
  { path: '/biosimilar-market-entry-saudi-arabia', priority: '0.9', changefreq: 'monthly' },
  { path: '/iqvia-alternative', priority: '0.9', changefreq: 'monthly' },
  { path: '/kantar-health-alternative-gcc', priority: '0.9', changefreq: 'monthly' },
  { path: '/gfk-alternative-egypt', priority: '0.87', changefreq: 'monthly' },
  { path: '/ar/insights/top-market-research-companies-egypt-2026', priority: '0.80', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-egypt-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-saudi-arabia-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-uae-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-dubai-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-abu-dhabi-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-riyadh-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-dubai-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-abu-dhabi-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-kuwait-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-riyadh-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-brazil-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-brazil-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-argentina-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-argentina-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-oncology-market-research-companies-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/best-obesity-weight-management-market-research-firms-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/leading-biologics-biosimilars-market-research-companies-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/best-rare-disease-market-research-companies-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-consumer-healthcare-market-research-firms-2026', priority: '0.90', changefreq: 'monthly' },
  // Global / regional GEO listicles (distinct intent — no overlap with industry-matrix country pages).
  { path: '/insights/top-global-healthcare-market-research-companies-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-pharmaceutical-analytics-companies-worldwide-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/best-global-market-research-companies-pharma-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-gcc-2026', priority: '0.87', changefreq: 'monthly' },
  { path: '/insights/top-pharma-market-research-companies-middle-east-2026', priority: '0.87', changefreq: 'monthly' },
  { path: '/pt', priority: '0.9', changefreq: 'weekly' },
  { path: '/pt/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/pt/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/pt/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/pt/methodology', priority: '0.6', changefreq: 'monthly' },
  { path: '/ru', priority: '0.9', changefreq: 'weekly' },
  { path: '/ru/market-research-healthcare', priority: '0.85', changefreq: 'weekly' },
  { path: '/ru/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/ru/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/ru/methodology', priority: '0.6', changefreq: 'monthly' },
  { path: '/pt/insights/top-market-research-companies-brasil-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/es/insights/top-empresas-investigacion-mercado-argentina-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/uae-healthcare-market-overview-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/gcc-pharmacy-market-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/saudi-arabia-healthcare-market-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/blog/pharmaceutical-market-research-methods-mena', priority: '0.83', changefreq: 'monthly' },
  { path: '/blog/gcc-clinical-trials-market-2026', priority: '0.83', changefreq: 'monthly' },
  { path: '/blog/pharmacoeconomics-gcc-practical-guide', priority: '0.87', changefreq: 'monthly' },
  { path: '/blog/gcc-pharmacoeconomics', priority: '0.88', changefreq: 'monthly' },
  { path: '/blog/neurofibromatosis', priority: '0.85', changefreq: 'monthly' },
  { path: '/blog/nf1-koselugo-selumetinib-pharma-market-research', priority: '0.86', changefreq: 'monthly' },
  { path: '/blog/top-healthcare-market-research-companies-kuwait', priority: '0.87', changefreq: 'monthly' },
  { path: '/blog/desmoid-tumors-nirogacestat-pharma-market-access', priority: '0.85', changefreq: 'monthly' },
  // Rare-tumour service pillars (hub) — blogs above are editorial spokes; distinct titles/schema.
  { path: '/nf1-pharma-market-research', priority: '0.88', changefreq: 'monthly' },
  { path: '/desmoid-tumor-pharma-market-research', priority: '0.88', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/resources', priority: '0.7', changefreq: 'monthly' },
  { path: '/fr/contacts', priority: '0.7', changefreq: 'monthly' },
  { path: '/ar/contacts', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/sitemap', priority: '0.6', changefreq: 'weekly' },
  { path: '/de/methodology', priority: '0.6', changefreq: 'monthly' },
  { path: '/fr/methodology', priority: '0.6', changefreq: 'monthly' },
  { path: '/es/methodology', priority: '0.6', changefreq: 'monthly' },
  { path: '/zh/methodology', priority: '0.6', changefreq: 'monthly' },
  { path: '/ar/methodology', priority: '0.6', changefreq: 'monthly' },
  { path: '/strategic-portfolio', priority: '0.72', changefreq: 'monthly' },
  { path: '/ar/strategic-portfolio', priority: '0.7', changefreq: 'monthly' },
  { path: '/terms', priority: '0.35', changefreq: 'yearly' },
  // --- ported SEO country pages: service + listicle + GCC segments ---
  { path: '/ar/abhath-suq-adwiyah-saudi-arabia', priority: '0.88', changefreq: 'monthly' },
  { path: '/ar/insights/top-market-research-companies-kuwait-2026', priority: '0.80', changefreq: 'monthly' },
  { path: '/ar/insights/top-market-research-companies-qatar-2026', priority: '0.80', changefreq: 'monthly' },
  { path: '/ar/insights/top-sharaket-abhath-alsuq-alsaudia-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/ar/insights/top-sharaket-abhath-sihha-alsaudia-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/australia-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/australia-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/bahrain-healthcare-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/bahrain-medical-devices-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/bionixus-industries', priority: '0.80', changefreq: 'monthly' },
  { path: '/brazil-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/brazil-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/brazil-pharmaceutical-market-research', priority: '0.88', changefreq: 'monthly' },
  { path: '/canada-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/canada-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/china-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/china-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/consumer-market-research', priority: '0.85', changefreq: 'monthly' },
  { path: '/egypt-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/egypt-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/france-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/france-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/gcc-anesthesia-surgical-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/gcc-biopharmaceuticals-market', priority: '0.86', changefreq: 'monthly' },
  { path: '/gcc-clinical-trials-market', priority: '0.86', changefreq: 'monthly' },
  { path: '/gcc-generic-injectables-market', priority: '0.86', changefreq: 'monthly' },
  { path: '/gcc-medical-devices-market-report', priority: '0.87', changefreq: 'monthly' },
  { path: '/gcc-personalized-medicine-market', priority: '0.86', changefreq: 'monthly' },
  { path: '/gcc-pharmacy-market', priority: '0.86', changefreq: 'monthly' },
  { path: '/germany-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/germany-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/healthcare-market-research-australia', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-canada', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-china', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-denmark', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-france', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-germany', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-in-saudi-arabia', priority: '0.92', changefreq: 'monthly' },
  { path: '/healthcare-market-research-in-uae', priority: '0.92', changefreq: 'monthly' },
  { path: '/healthcare-market-research-italy', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-new-zealand', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-south-korea', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-spain', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-switzerland', priority: '0.90', changefreq: 'monthly' },
  { path: '/healthcare-market-research-usa', priority: '0.90', changefreq: 'monthly' },
  { path: '/india-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/india-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-australia-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-bahrain-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-belgium-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-canada-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-chile-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-china-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-colombia-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-denmark-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-egypt-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-france-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-germany-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-italy-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-jordan-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-lebanon-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-mexico-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-netherlands-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-new-zealand-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-oman-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-peru-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-poland-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-qatar-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-south-korea-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-spain-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-switzerland-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-turkey-2026', priority: '0.88', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-uae-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-uk-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-healthcare-market-research-companies-usa-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-algeria-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-angola-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-australia-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-bahrain-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-canada-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-china-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-cote-divoire-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-denmark-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-ethiopia-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-france-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-germany-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-ghana-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-iraq-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-italy-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-jordan-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-kenya-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-ksa-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-kuwait-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-lebanon-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-morocco-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-new-zealand-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-nigeria-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-oman-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-qatar-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-senegal-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-south-africa-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-south-korea-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-spain-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-switzerland-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-tanzania-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-tunisia-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-uganda-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/insights/top-market-research-companies-usa-2026', priority: '0.90', changefreq: 'monthly' },
  { path: '/italy-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/italy-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/japan-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/japan-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/kuwait-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/kuwait-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/market-research-in-egypt', priority: '0.90', changefreq: 'monthly' },
  { path: '/market-research-in-saudi-arabia', priority: '0.88', changefreq: 'monthly' },
  { path: '/market-research-in-uae', priority: '0.88', changefreq: 'monthly' },
  { path: '/oman-healthcare-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/oman-medical-devices-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-australia', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-canada', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-china', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-denmark', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-france', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-germany', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-italy', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-new-zealand', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-south-korea', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-spain', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-switzerland', priority: '0.90', changefreq: 'monthly' },
  { path: '/pharmaceutical-market-research-usa', priority: '0.90', changefreq: 'monthly' },
  { path: '/pt/insights/top-empresas-pesquisa-mercado-brasil-2026', priority: '0.85', changefreq: 'monthly' },
  { path: '/pt/pesquisa-mercado-farmaceutico-brasil', priority: '0.88', changefreq: 'monthly' },
  { path: '/pt/pesquisa-mercado-saude-brasil', priority: '0.88', changefreq: 'monthly' },
  { path: '/qatar-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/qatar-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/saudi-arabia-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/saudi-arabia-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/singapore-healthcare-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/singapore-medical-devices-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/south-korea-healthcare-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/south-korea-medical-devices-market-report', priority: '0.85', changefreq: 'monthly' },
  { path: '/spain-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/spain-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/turkey-healthcare-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/turkey-medical-devices-market-report', priority: '0.83', changefreq: 'monthly' },
  { path: '/uae-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/uae-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/uk-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/uk-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/usa-healthcare-market-report', priority: '0.88', changefreq: 'monthly' },
  { path: '/usa-medical-devices-market-report', priority: '0.88', changefreq: 'monthly' },
];

const healthcareTherapySlugs = [
  'aesthetic-medicine',
  'biologics',
  'cardiology',
  'diabetes',
  'immunology',
  'oncology',
  'rare-diseases',
  'respiratory',
  'vaccines',
];

const healthcareServiceSlugs = [
  'market-access',
  'physician-insights',
  'kol-mapping',
  'quantitative-research',
  'qualitative-research',
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

/**
 * /healthcare-market-research/{slug} — Global Websites slugs plus hub aliases (uae, uk, europe, GCC cities).
 *
 * Note: `united-kingdom` is intentionally excluded — it 301-redirects to the
 * shorter canonical slug `/healthcare-market-research/uk` (see vercel.json
 * and api/indexnow-key.ts) to resolve a duplicate-title pair.
 */
const healthcareMarketResearchCountrySlugs = [
  ...new Set([
    ...globalWebsiteCountrySlugs.filter((slug) => slug !== 'united-kingdom'),
    'saudi-arabia',
    'uae',
    'kuwait',
    'uk',
    'europe',
    'riyadh',
    'jeddah',
    'dubai',
    'abu-dhabi',
  ]),
].sort((a, b) => a.localeCompare(b));

const MARKET_REPORT_THERAPY_HUB_SLUGS = [
  'oncology',
  'diabetes-metabolic',
  'cardiovascular',
  'immunology-biologics',
  'respiratory',
  'rare-diseases',
  'neurology-cns',
  'biosimilars',
  'digital-health',
  'vaccines',
  'dermatology',
];

const MARKET_REPORT_COUNTRY_HUB_SLUGS = [
  'gcc',
  'saudi-arabia',
  'uae',
  'kuwait',
  'qatar',
  'bahrain',
  'oman',
  'egypt',
  'turkey',
];

function extractProgrammaticHealthcareReportSlugs() {
  try {
    const fp = join(root, 'src/data/healthcareReportData.ts');
    const txt = readFileSync(fp, 'utf8');
    /** @type {string[]} */
    const slugs = [];
    const re = /\brow\(\s*'([^']+)'\s*,/g;
    let m;
    while ((m = re.exec(txt))) slugs.push(m[1]);
    return slugs;
  } catch {
    return [];
  }
}

// Data-driven country listicle pages (src/data/topCompanies), emitted by
// scripts/emit-topcompanies-manifest.mjs which runs earlier in the build.
let topCompaniesManifest = [];
try {
  topCompaniesManifest = JSON.parse(
    readFileSync(join(__dirname, 'data', 'topcompanies-manifest.json'), 'utf8'),
  );
} catch {
  console.warn('Sitemap: topcompanies-manifest.json missing — run scripts/emit-topcompanies-manifest.mjs first.');
}

function buildStaticRoutes() {
  const routes = [];
  for (const page of staticPages) {
    if (!isSitemapRedirectSourcePath(page.path)) routes.push(page);
  }
  for (const page of topCompaniesManifest) {
    routes.push({ path: page.path, priority: page.priority, changefreq: page.changefreq });
  }
  for (const page of extraStaticSitemapPages) {
    if (!isSitemapRedirectSourcePath(page.path)) routes.push(page);
  }
  for (const page of getIndustryMatrixSitemapPages()) {
    if (!isSitemapRedirectSourcePath(page.path)) routes.push(page);
  }
  // Country detail pages under Global Websites
  for (const slug of globalWebsiteCountrySlugs) {
    routes.push({
      path: `/global-websites/${slug}`,
      priority: '0.6',
      changefreq: 'monthly',
    });
  }
  for (const slug of healthcareMarketResearchCountrySlugs) {
    routes.push({
      path: `/healthcare-market-research/${slug}`,
      priority: '0.85',
      changefreq: 'weekly',
    });
  }
  for (const area of healthcareTherapySlugs) {
    routes.push({
      path: `/healthcare-market-research/therapy/${area}`,
      priority: '0.75',
      changefreq: 'monthly',
    });
  }
  for (const service of healthcareServiceSlugs) {
    routes.push({
      path: `/healthcare-market-research/services/${service}`,
      priority: '0.75',
      changefreq: 'monthly',
    });
  }
  routes.push({ path: '/market-reports', priority: '0.9', changefreq: 'weekly' });
  for (const slug of MARKET_REPORT_THERAPY_HUB_SLUGS) {
    routes.push({
      path: `/market-reports/therapy/${slug}`,
      priority: '0.88',
      changefreq: 'weekly',
    });
  }
  for (const slug of MARKET_REPORT_COUNTRY_HUB_SLUGS) {
    routes.push({
      path: `/market-reports/country/${slug}`,
      priority: '0.88',
      changefreq: 'weekly',
    });
  }
  for (const slug of extractProgrammaticHealthcareReportSlugs()) {
    routes.push({
      path: `/market-reports/${slug}`,
      priority: '0.87',
      changefreq: 'weekly',
    });
  }
  return routes;
}

const hreflangGroups = [
  { en: '/', pt: '/pt', de: '/de', fr: '/fr', es: '/es', ar: '/ar', 'zh-CN': '/zh', ru: '/ru', 'x-default': '/' },
  {
    en: '/market-research-healthcare',
    pt: '/pt/market-research-healthcare',
    de: '/de/market-research-healthcare',
    fr: '/fr/market-research-healthcare',
    es: '/es/market-research-healthcare',
    ar: '/ar/market-research-healthcare',
    'zh-CN': '/zh/market-research-healthcare',
    ru: '/ru/market-research-healthcare',
    'x-default': '/market-research-healthcare',
  },
  {
    en: '/healthcare-market-research',
    fr: '/fr/healthcare-market-research',
    'x-default': '/healthcare-market-research',
  },
  { en: '/contact', pt: '/pt/contact', de: '/de/contact', fr: '/fr/contacts', es: '/es/contact', ar: '/ar/contacts', 'zh-CN': '/zh/contact', ru: '/ru/contact', 'x-default': '/contact' },
  // Only list languages that actually have distinct localized URLs.
  { en: '/blog', pt: '/pt/blog', de: '/de/blog', fr: '/fr/blog', ar: '/ar/blog', ru: '/ru/blog', 'x-default': '/blog' },
  { en: '/services/market-access', es: '/es/market-access', 'x-default': '/services/market-access' },
  { en: '/market-research-uae', ar: '/ar/market-research-uae', 'x-default': '/market-research-uae' },
  { en: '/market-research-ksa', ar: '/ar/market-research-ksa', 'x-default': '/market-research-ksa' },
  { en: '/market-research-saudi', ar: '/ar/market-research-saudi', 'x-default': '/market-research-saudi' },
  { en: '/market-research-kuwait', ar: '/ar/market-research-kuwait', 'x-default': '/market-research-kuwait' },
  { en: '/market-research-egypt', ar: '/ar/market-research-egypt', 'x-default': '/market-research-egypt' },
  {
    en: '/insights/top-market-research-companies-egypt-2026',
    ar: '/ar/insights/top-market-research-companies-egypt-2026',
    'x-default': '/insights/top-market-research-companies-egypt-2026',
  },
  {
    en: '/insights/top-market-research-companies-brazil-2026',
    pt: '/pt/insights/top-market-research-companies-brasil-2026',
    'x-default': '/insights/top-market-research-companies-brazil-2026',
  },
  {
    en: '/insights/top-healthcare-market-research-companies-brazil-2026',
    pt: '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026',
    'x-default': '/insights/top-healthcare-market-research-companies-brazil-2026',
  },
  {
    en: '/insights/top-market-research-companies-argentina-2026',
    es: '/es/insights/top-empresas-investigacion-mercado-argentina-2026',
    'x-default': '/insights/top-market-research-companies-argentina-2026',
  },
  {
    en: '/insights/top-healthcare-market-research-companies-argentina-2026',
    es: '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026',
    'x-default': '/insights/top-healthcare-market-research-companies-argentina-2026',
  },
  {
    en: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    de: '/de/success-in-startups',
    ar: '/ar/arabic-blog-alsawdyh',
    'x-default': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
  },
  {
    en: '/insights/top-market-research-companies-brazil-2026',
    pt: '/pt/insights/top-market-research-companies-brasil-2026',
    'x-default': '/insights/top-market-research-companies-brazil-2026',
  },
  {
    en: '/insights/top-healthcare-market-research-companies-brazil-2026',
    pt: '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026',
    'x-default': '/insights/top-healthcare-market-research-companies-brazil-2026',
  },
  {
    en: '/insights/top-market-research-companies-argentina-2026',
    es: '/es/insights/top-empresas-investigacion-mercado-argentina-2026',
    'x-default': '/insights/top-market-research-companies-argentina-2026',
  },
  {
    en: '/insights/top-healthcare-market-research-companies-argentina-2026',
    es: '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026',
    'x-default': '/insights/top-healthcare-market-research-companies-argentina-2026',
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
 * Falls back to null if not in a git checkout (e.g. Vercel build) or file has no history.
 * Stderr is silenced so CI logs are not flooded with "fatal: not a git repository".
 */
function getGitLastModified(filePath) {
  if (!existsSync(join(root, '.git'))) {
    return null;
  }
  try {
    const result = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (!result) return null;
    return result.slice(0, 10);
  } catch {
    return null;
  }
}

/**
 * Fetch slugs AND their _updatedAt timestamps from Sanity.
 * Returns array of { slug, lastmod } objects.
 */
/**
 * Public press releases only (respects embargo and noIndex).
 */
async function writePressRssFeed(projectId, dataset) {
  try {
    const { createClient } = await import('@sanity/client');
    const { buildPressRssXml, fetchPublicPressReleasesForRss } = await import('../lib/news-rss.mjs');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    const items = await fetchPublicPressReleasesForRss(client, 50);
    const feedXml = buildPressRssXml(items);
    const feedDir = join(publicDir, 'news');
    mkdirSync(feedDir, { recursive: true });
    writeFileSync(join(feedDir, 'feed.xml'), feedXml, 'utf8');
    console.log(`RSS written to public/news/feed.xml (${items.length} items).`);
  } catch (err) {
    console.warn('RSS: could not write press feed:', err.message);
  }
}

async function fetchPressReleaseContent(projectId, dataset) {
  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    const now = new Date().toISOString();
    const query = `*[
      _type == "pressRelease" &&
      defined(slug.current) &&
      defined(publishedAt) &&
      publishedAt <= $now &&
      (!defined(embargo) || embargo <= $now) &&
      !(seo.noIndex == true)
    ]{ "slug": slug.current, "lastmod": coalesce(updatedAt, publishedAt, _updatedAt) }`;
    const list = await Promise.race([
      client.fetch(query, { now }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 15000)),
    ]);
    const map = new Map();
    for (const item of list || []) {
      if (!item.slug) continue;
      const updatedAt = item.lastmod ? String(item.lastmod).slice(0, 10) : null;
      const existing = map.get(item.slug);
      if (!existing || (updatedAt && updatedAt > existing.lastmod)) {
        map.set(item.slug, { slug: item.slug, lastmod: updatedAt });
      }
    }
    return [...map.values()];
  } catch (err) {
    console.warn('Sitemap: could not fetch press releases:', err.message);
    return [];
  }
}

async function fetchSanityContent(
  projectId,
  dataset,
  types,
  token = null,
  label = 'Sanity',
  { useCdn = false } = {},
) {
  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn,
      ...(token ? { token } : {}),
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
    console.warn(`Sitemap: could not fetch ${label} content:`, err.message);
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
  '/news': ['src/pages/NewsHub.tsx', 'src/lib/sanity-press.ts'],
  '/media': ['src/pages/Media.tsx'],
  '/case-studies': ['src/pages/CaseStudies.tsx'],
  '/contact': ['src/pages/Contact.tsx'],
  '/methodology': ['src/pages/Methodology.tsx'],
  '/faq': ['src/pages/FAQ.tsx'],
  '/resources': ['src/pages/Resources.tsx'],
  '/privacy': ['src/pages/Privacy.tsx'],
  '/market-research-home': ['src/pages/MarketResearchHome.tsx'],
  '/market-research': ['src/pages/MarketResearch.tsx'],
  '/market-research-uae': ['src/pages/MarketResearchUae.tsx'],
  '/market-research-ksa': ['src/pages/MarketResearchKsa.tsx'],
  '/market-research-saudi': ['src/pages/MarketResearchSaudi.tsx'],
  '/market-research-kuwait': ['src/pages/MarketResearchKuwait.tsx'],
  '/market-research-qatar': ['src/pages/MarketResearchQatar.tsx'],
  '/market-research-oman': ['src/pages/MarketResearchOman.tsx'],
  '/market-research-bahrain': ['src/pages/MarketResearchBahrain.tsx'],
  '/market-research-egypt': ['src/pages/MarketResearchEgypt.tsx'],
  '/ar/market-research-uae': ['src/pages/ArMarketResearchUae.tsx'],
  '/ar/market-research-ksa': ['src/pages/ArMarketResearchKsa.tsx'],
  '/ar/market-research-saudi': ['src/pages/ArMarketResearchSaudi.tsx'],
  '/ar/market-research-kuwait': ['src/pages/ArMarketResearchKuwait.tsx'],
  '/ar/market-research-egypt': ['src/pages/ArMarketResearchEgypt.tsx'],
  '/healthcare-market-research': ['src/pages/healthcare-research/HubPage.tsx'],
  '/fr/healthcare-market-research': [
    'src/pages/healthcare-research/FrHubPage.tsx',
    'src/data/frHealthcareMarketResearchContent.ts',
  ],
  '/fr/healthcare-market-research/france': [
    'src/pages/healthcare-research/FrFranceCountryPage.tsx',
    'src/data/frHealthcareMarketResearchContent.ts',
  ],
  '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement': [
    'src/data/blog-skyrizi-omnichannel.ts',
    'scripts/data/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement.json',
  ],
  '/premium-home-page': ['public/premium-home-page.html'],
  '/home-staging': ['public/home-staging.html'],
  '/premium-home-preview': ['public/premium-home-preview.html', 'src/pages/PremiumHomePreview.tsx'],
  '/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/de/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/fr/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/es/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/zh/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/ar/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/market-research-saudi-arabia-pharmaceutical': ['src/pages/MarketResearchSaudiArabiaPharmaceutical.tsx'],
  '/qualitative-market-research': ['src/pages/QualitativeMarketResearch.tsx'],
  '/quantitative-healthcare-market-research': ['src/pages/QuantitativeHealthcareMarketResearchGuide.tsx'],
  '/clinical-diagnostics-market-research': ['src/pages/ClinicalDiagnosticsMarketResearch.tsx'],
  '/clinical-diagnostics-proposal-request': ['src/pages/ClinicalDiagnosticsProposalRequest.tsx'],
  '/mena-pharma-market-data': ['src/pages/MenaMarketData.tsx'],
  '/gcc-market-access-guide': ['src/pages/GccMarketAccessGuide.tsx'],
  '/bionixus-market-research-middle-east': ['src/pages/BionixusMarketResearchMiddleEast.tsx'],
  '/gcc-pharmaceutical-market-research': ['src/pages/GccPharmaceuticalMarketResearch.tsx'],
  '/uae-pharmaceutical-market-research': ['src/pages/UaePharmaceuticalMarketResearch.tsx'],
  '/egypt-pharmaceutical-market-research': ['src/pages/EgyptPharmaceuticalMarketResearch.tsx'],
  '/saudi-payer-market-access-research': ['src/pages/SaudiPayerMarketAccessResearch.tsx'],
  '/gcc-hcp-recruitment-market-research': ['src/pages/GccHcpRecruitmentMarketResearch.tsx'],
  '/healthcare-market-research-agency-gcc': ['src/pages/HealthcareMarketResearchAgencyGcc.tsx'],
  '/pharmaceutical-therapy-areas': ['src/pages/PharmaceuticalTherapyAreas.tsx'],
  '/uae-market-access-research': ['src/pages/UaeMarketAccessResearch.tsx'],
  '/kuwait-market-access-research': ['src/pages/KuwaitMarketAccessResearch.tsx'],
  '/qatar-market-access-research': ['src/pages/QatarMarketAccessResearch.tsx'],
  '/healthcare-fieldwork-middle-east': ['src/pages/HealthcareFieldworkMiddleEast.tsx'],
  '/healthcare-fieldwork-gcc': ['src/pages/HealthcareFieldworkGcc.tsx'],
  '/pharma-fieldwork-saudi-arabia': ['src/pages/PharmaFieldworkSaudiArabia.tsx'],
  '/pharma-fieldwork-uae': ['src/pages/PharmaFieldworkUae.tsx'],
  '/real-world-evidence': ['src/pages/RealWorldEvidence.tsx'],
  '/real-world-evidence-gcc': ['src/pages/RealWorldEvidenceGcc.tsx'],
  '/heor-consulting-saudi-arabia': ['src/pages/HeorConsultingSaudiArabia.tsx'],
  '/pharma-fieldwork-saudi-arabia': ['src/pages/PharmaFieldworkSaudiArabia.tsx'],
  '/pharma-fieldwork-uae': ['src/pages/PharmaFieldworkUae.tsx'],
  '/pharma-fieldwork-egypt': ['src/pages/PharmaFieldworkEgypt.tsx'],
  '/patient-support-program-research-gcc': ['src/pages/PatientSupportProgramResearchGcc.tsx'],
  '/patient-journey-research-gcc': ['src/pages/PatientJourneyResearchGcc.tsx'],
  '/patient-adherence-research-middle-east': ['src/pages/PatientAdherenceResearchMiddleEast.tsx'],
  '/budget-impact-model-saudi-arabia': ['src/pages/BudgetImpactModelSaudiArabia.tsx'],
  '/uae-pricing-reimbursement-strategy': ['src/pages/UaePricingReimbursementStrategy.tsx'],
  '/specialist-physician-panel-uae': ['src/pages/SpecialistPhysicianPanelUae.tsx'],
  '/brand-tracking-pharma-gcc': ['src/pages/BrandTrackingPharmaGcc.tsx'],
  '/commercial-effectiveness-pharma-middle-east': ['src/pages/CommercialEffectivenessPharmaMiddleEast.tsx'],
  '/diabetes-market-research-uae': ['src/pages/DiabetesMarketResearchUae.tsx'],
  '/respiratory-market-access-gcc': ['src/pages/RespiratoryMarketAccessGcc.tsx'],
  '/bionixus-ai-chatbots-increase-sales-and-lead-generation': ['src/pages/AiChatbotsLeadGeneration.tsx'],
  '/pharmacies-saudi-arabia-marketing': ['src/pages/PharmaciesSaudiArabiaMarketing.tsx'],
  '/insights/top-market-research-companies-egypt-2026': ['src/pages/TopMarketResearchCompaniesEgypt2026.tsx'],
  '/ar/insights/top-market-research-companies-egypt-2026': ['src/pages/ArTopMarketResearchCompaniesEgypt2026.tsx'],
  '/insights/top-market-research-companies-uae-2026': ['src/pages/TopMarketResearchCompaniesUae2026.tsx'],
  '/insights/top-market-research-companies-ksa-2026': ['src/pages/TopMarketResearchCompaniesSaudiArabia2026.tsx'],
  '/insights/top-market-research-companies-dubai-2026': ['src/pages/TopMarketResearchCompaniesDubai2026.tsx'],
  '/insights/top-market-research-companies-abu-dhabi-2026': ['src/pages/TopMarketResearchCompaniesAbuDhabi2026.tsx'],
  '/insights/top-market-research-companies-riyadh-2026': ['src/pages/TopMarketResearchCompaniesRiyadh2026.tsx'],
  '/insights/top-healthcare-market-research-companies-saudi-arabia-2026': ['src/pages/TopHealthcareMarketResearchCompaniesSaudiArabia2026.tsx'],
  '/insights/top-healthcare-market-research-companies-dubai-2026': ['src/pages/TopHealthcareMarketResearchCompaniesDubai2026.tsx'],
  '/insights/top-healthcare-market-research-companies-abu-dhabi-2026': ['src/pages/TopHealthcareMarketResearchCompaniesAbuDhabi2026.tsx'],
  '/insights/top-healthcare-market-research-companies-kuwait-2026': ['src/pages/TopHealthcareMarketResearchCompaniesKuwait2026.tsx'],
  '/insights/top-healthcare-market-research-companies-riyadh-2026': ['src/pages/TopHealthcareMarketResearchCompaniesRiyadh2026.tsx'],
  '/insights/top-market-research-companies-brazil-2026': ['src/pages/TopMarketResearchCompaniesBrazil2026.tsx'],
  '/insights/top-healthcare-market-research-companies-brazil-2026': ['src/pages/TopHealthcareMarketResearchCompaniesBrazil2026.tsx'],
  '/insights/top-market-research-companies-argentina-2026': ['src/pages/TopMarketResearchCompaniesArgentina2026.tsx'],
  '/insights/top-healthcare-market-research-companies-argentina-2026': ['src/pages/TopHealthcareMarketResearchCompaniesArgentina2026.tsx'],
  '/insights/top-oncology-market-research-companies-2026': ['src/pages/TopOncologyMarketResearchCompanies2026.tsx'],
  '/insights/best-obesity-weight-management-market-research-firms-2026': ['src/pages/BestObesityWeightManagementMarketResearchFirms2026.tsx'],
  '/insights/leading-biologics-biosimilars-market-research-companies-2026': ['src/pages/LeadingBiologicsBiosimilarsMarketResearchCompanies2026.tsx'],
  '/insights/best-rare-disease-market-research-companies-2026': ['src/pages/BestRareDiseaseMarketResearchCompanies2026.tsx'],
  '/insights/top-consumer-healthcare-market-research-firms-2026': ['src/pages/TopConsumerHealthcareMarketResearchFirms2026.tsx'],
  '/insights/top-global-healthcare-market-research-companies-2026': [
    'src/pages/TopGlobalHealthcareMarketResearchCompanies2026.tsx',
  ],
  '/insights/top-pharmaceutical-analytics-companies-worldwide-2026': [
    'src/pages/TopPharmaceuticalAnalyticsCompaniesWorldwide2026.tsx',
  ],
  '/insights/best-global-market-research-companies-pharma-2026': [
    'src/pages/BestGlobalMarketResearchCompaniesPharma2026.tsx',
  ],
  '/insights/top-market-research-companies-gcc-2026': ['src/pages/TopMarketResearchCompaniesGcc2026.tsx'],
  '/insights/top-pharma-market-research-companies-middle-east-2026': [
    'src/pages/TopPharmaMarketResearchCompaniesMiddleEast2026.tsx',
  ],
  '/pt/insights/top-market-research-companies-brasil-2026': ['src/pages/PtTopMarketResearchCompaniesBrazil2026.tsx'],
  '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026': ['src/pages/PtTopHealthcareMarketResearchCompaniesBrazil2026.tsx'],
  '/es/insights/top-empresas-investigacion-mercado-argentina-2026': ['src/pages/EsTopMarketResearchCompaniesArgentina2026.tsx'],
  '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026': ['src/pages/EsTopHealthcareMarketResearchCompaniesArgentina2026.tsx'],
  '/pt': ['src/pages/Index.tsx'],
  '/pt/market-research-healthcare': ['src/pages/MarketResearchHealthcare.tsx'],
  '/pt/blog': ['src/pages/Blog.tsx'],
  '/pt/contact': ['src/pages/Contact.tsx'],
  '/pt/methodology': ['src/pages/Methodology.tsx'],
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
  '/sitemap': ['src/pages/SiteMapPage.tsx'],
  '/de/methodology': ['src/pages/Methodology.tsx'],
  '/fr/methodology': ['src/pages/Methodology.tsx'],
  '/es/methodology': ['src/pages/Methodology.tsx'],
  '/zh/methodology': ['src/pages/Methodology.tsx'],
  '/ar/methodology': ['src/pages/Methodology.tsx'],
  '/fr/contacts': ['src/pages/Contact.tsx'],
  '/ar/contacts': ['src/pages/Contact.tsx'],
  '/ar/blog': ['src/pages/Blog.tsx'],
  '/ar/blog/gcc-pharmaceuticals-market-arabic-2026': ['src/pages/BlogPost.tsx'],
  '/insights/top-market-research-companies-egypt-2026': ['src/pages/TopMarketResearchCompaniesEgypt2026.tsx'],
  '/ar/insights/top-market-research-companies-egypt-2026': ['src/pages/ArTopMarketResearchCompaniesEgypt2026.tsx'],
  '/insights/top-market-research-companies-saudi-arabia-2026': ['src/pages/TopMarketResearchCompaniesSaudiArabia2026.tsx'],
  '/insights/top-market-research-companies-uae-2026': ['src/pages/TopMarketResearchCompaniesUae2026.tsx'],
  '/insights/top-market-research-companies-dubai-2026': ['src/pages/TopMarketResearchCompaniesDubai2026.tsx'],
  '/insights/top-market-research-companies-abu-dhabi-2026': ['src/pages/TopMarketResearchCompaniesAbuDhabi2026.tsx'],
  '/insights/top-market-research-companies-riyadh-2026': ['src/pages/TopMarketResearchCompaniesRiyadh2026.tsx'],
  '/insights/top-healthcare-market-research-companies-riyadh-2026': ['src/pages/TopHealthcareMarketResearchCompaniesRiyadh2026.tsx'],
  '/strategic-portfolio': ['public/conf/strategic-portfolio.html', 'server.js', 'src/pages/ConfPortfolio.tsx'],
  '/ar/strategic-portfolio': ['public/conf/strategic-portfolio-ar.html', 'server.js', 'src/pages/ConfPortfolio.tsx'],
  '/terms': ['src/pages/Terms.tsx'],
  '/ar/blog/quantitative-market-research-and-market-access': ['src/pages/BlogPost.tsx'],
  [`/ar/blog/${percentEncodeLower(GCC_MEAST_PHARMA_AR_BLOG_SLUG)}`]: ['src/pages/BlogPost.tsx'],
  [`/ar/blog/${percentEncodeLower(SAUDI_PHARMA_MARKET_2026_AR_SLUG)}`]: ['src/pages/BlogPost.tsx'],
  '/blog/gcc-pharmaceutical-market-comparison-uae-saudi-kuwait': ['src/pages/BlogPost.tsx'],
  '/blog/neurofibromatosis': ['src/data/blog-nf1-koselugo-market-research.ts', 'src/pages/BlogPost.tsx'],
  '/blog/nf1-koselugo-selumetinib-pharma-market-research': [
    'src/data/blog-nf1-koselugo-market-research.ts',
    'src/pages/BlogPost.tsx',
  ],
  '/blog/desmoid-tumors-nirogacestat-pharma-market-access': [
    'src/data/blog-desmoid-ogsiveo-market-research.ts',
    'src/pages/BlogPost.tsx',
  ],
  '/nf1-pharma-market-research': ['src/pages/Nf1PharmaMarketResearch.tsx', 'src/data/rare-tumor-seo-cluster.ts'],
  '/desmoid-tumor-pharma-market-research': [
    'src/pages/DesmoidTumorPharmaMarketResearch.tsx',
    'src/data/rare-tumor-seo-cluster.ts',
  ],
};

const MARKET_REPORTS_GIT_FILES = [
  'src/pages/HealthcareReportPage.tsx',
  'src/pages/HealthcareReportsHub.tsx',
  'src/pages/HealthcareReportsByTherapy.tsx',
  'src/pages/HealthcareReportsByCountry.tsx',
  'src/data/healthcareReportData.ts',
  'src/data/healthcareReportFaqs.ts',
];

/** Git lastmod for dynamic healthcare paths (shared source files). */
const HEALTHCARE_HUB_GIT_FILES = [
  'src/pages/healthcare-research/HubPage.tsx',
  'src/pages/healthcare-research/CountryPage.tsx',
  'src/pages/healthcare-research/TherapyPage.tsx',
  'src/pages/healthcare-research/ServicePage.tsx',
];

const CASE_STUDY_GIT_FILES = ['src/pages/CaseStudy.tsx', 'src/pages/CaseStudies.tsx'];

async function main() {
  loadEnv();

  const blogProjectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
  const blogDataset = process.env.VITE_SANITY_DATASET || 'production';
  const caseProjectId = process.env.VITE_SANITY_CASE_STUDIES_PROJECT_ID || 'gj6cv27f';
  const caseDataset = process.env.VITE_SANITY_CASE_STUDIES_DATASET || 'production';
  const blogToken =
    process.env.SANITY_API_TOKEN ||
    process.env.SANITY_TOKEN ||
    process.env.VITE_SANITY_API_TOKEN ||
    null;
  // Case studies (gj6cv27f) are public-read via CDN — never pass the blog project token (wrong host).
  const caseToken = process.env.VITE_SANITY_CASE_STUDIES_API_TOKEN || null;

  const [blogContent, caseContentRaw, pressContent] = await Promise.all([
    fetchSanityContent(blogProjectId, blogDataset, ['post', 'blogPost'], blogToken, 'blog'),
    fetchSanityContent(caseProjectId, caseDataset, 'caseStudy', caseToken, 'case study', {
      useCdn: !caseToken,
    }),
    fetchPressReleaseContent(blogProjectId, blogDataset),
  ]);

  const caseSlugSet = new Set(caseContentRaw.map((item) => item.slug));
  const caseContent = [
    ...caseContentRaw,
    ...CASE_STUDY_FALLBACK_SLUGS.filter((slug) => !caseSlugSet.has(slug)).map((slug) => ({
      slug,
      lastmod: null,
    })),
  ];

  const today = new Date().toISOString().slice(0, 10);
  /** @type {Map<string, {priority: string, changefreq: string, lastmod: string, enforceCanonical: boolean}>} */
  const candidates = new Map();

  const staticRoutes = buildStaticRoutes();
  for (const { path, priority, changefreq } of staticRoutes) {
    const url = BASE + path;
    // Try to get the real last-modified date from git for the source file
    let sourceFiles = STATIC_PAGE_FILES[path] || [];
    if (sourceFiles.length === 0 && path.startsWith('/healthcare-market-research/')) {
      sourceFiles = HEALTHCARE_HUB_GIT_FILES;
    }
    if (sourceFiles.length === 0 && path.startsWith('/market-reports')) {
      sourceFiles = MARKET_REPORTS_GIT_FILES;
    }
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
      /** Do not drop URLs when live fetch fails (CI/Vercel/build without reachable origin). */
      skipLiveResolution: true,
    });
  }
  for (const { slug, lastmod } of blogContent) {
    if (BLOG_SLUG_SITEMAP_STATIC_ONLY.has(slug)) continue;
    const url = `${BASE}/blog/${percentEncodeLower(slug)}`;
    candidates.set(url, {
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: lastmod || today,
      enforceCanonical: true,
      skipLiveResolution: false,
      fallbackOnFetchFailure: true,
    });
  }
  for (const { slug, lastmod } of caseContent) {
    const url = `${BASE}/case-studies/${percentEncodeLower(slug)}`;
    let caseLastmod = lastmod;
    if (!caseLastmod) {
      for (const relFile of CASE_STUDY_GIT_FILES) {
        caseLastmod = getGitLastModified(join(root, relFile));
        if (caseLastmod) break;
      }
    }
    candidates.set(url, {
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: caseLastmod || today,
      enforceCanonical: true,
      skipLiveResolution: false,
      fallbackOnFetchFailure: true,
    });
  }
  for (const { slug, lastmod } of pressContent) {
    const url = `${BASE}/news/${percentEncodeLower(slug)}`;
    candidates.set(url, {
      priority: '0.75',
      changefreq: 'monthly',
      lastmod: lastmod || today,
      enforceCanonical: true,
      skipLiveResolution: false,
      fallbackOnFetchFailure: true,
    });
  }

  const redirectedOrResolved = [];
  const excluded = [];
  /** @type {Map<string, {priority: string, changefreq: string, lastmod: string}>} */
  const finalUrls = new Map();

  for (const [candidateUrl, meta] of candidates) {
    if (meta.skipLiveResolution) {
      const { skipLiveResolution: _s, fallbackOnFetchFailure: _f, ...rest } = meta;
      const existing = finalUrls.get(candidateUrl);
      if (existing) {
        finalUrls.set(candidateUrl, mergeMeta(existing, rest));
      } else {
        finalUrls.set(candidateUrl, rest);
      }
      continue;
    }

    const result = await resolveCanonicalIndexableUrl(
      candidateUrl,
      Boolean(meta.enforceCanonical)
    );

    const fetchFailed =
      !result.include &&
      meta.fallbackOnFetchFailure &&
      typeof result.reason === 'string' &&
      (result.reason.startsWith('fetch-error') ||
        result.reason.startsWith('status-5') ||
        result.reason === 'max-hops');

    if (!result.include && fetchFailed) {
      redirectedOrResolved.push({
        from: candidateUrl,
        to: candidateUrl,
        reason: `${result.reason} (listed-without-live-check)`,
      });
      const { skipLiveResolution: _s, fallbackOnFetchFailure: _f, ...rest } = meta;
      const existing = finalUrls.get(candidateUrl);
      if (existing) {
        finalUrls.set(candidateUrl, mergeMeta(existing, rest));
      } else {
        finalUrls.set(candidateUrl, rest);
      }
      continue;
    }

    if (!result.include) {
      excluded.push({ url: candidateUrl, reason: result.reason });
      continue;
    }

    const normalizedFinal = normalizeSitemapAbsoluteUrl(result.include);

    if (normalizedFinal !== candidateUrl) {
      redirectedOrResolved.push({ from: candidateUrl, to: normalizedFinal, reason: result.reason });
    }

    const { skipLiveResolution: _s, fallbackOnFetchFailure: _f, ...rest } = meta;
    const existing = finalUrls.get(normalizedFinal);
    if (existing) {
      finalUrls.set(normalizedFinal, mergeMeta(existing, rest));
    } else {
      finalUrls.set(normalizedFinal, rest);
    }
  }

  for (const loc of [...finalUrls.keys()]) {
    const path = pathFromAbsoluteUrl(loc);
    if (isSitemapRedirectSourcePath(path)) {
      excluded.push({ url: loc, reason: 'redirect-source' });
      finalUrls.delete(loc);
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
  await writePressRssFeed(blogProjectId, blogDataset);
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
