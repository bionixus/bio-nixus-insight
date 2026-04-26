import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';
import { canonicalRedirectTarget, isSsrNotFoundPage } from './seo-noise-query.mjs';
import { BLOG_LEGACY_FULL_PATH_REDIRECTS } from './blog-legacy-redirects.mjs';
import { normalizeOgCardPath, renderOgCardSvg } from './lib/og-card-svg.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT || 5173);

function inferHtmlLang(pathname) {
  if (pathname.startsWith('/de')) return { lang: 'de', dir: 'ltr' };
  if (pathname.startsWith('/fr')) return { lang: 'fr', dir: 'ltr' };
  if (pathname.startsWith('/es')) return { lang: 'es', dir: 'ltr' };
  if (pathname.startsWith('/ar')) return { lang: 'ar', dir: 'rtl' };
  if (pathname.startsWith('/zh')) return { lang: 'zh-CN', dir: 'ltr' };
  return { lang: 'en', dir: 'ltr' };
}

function applyHtmlLang(template, pathname) {
  const { lang, dir } = inferHtmlLang(pathname || '/');
  return template.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${dir}">`);
}

const TITLE_UPPERCASE_TOKENS = new Set([
  'uae', 'ksa', 'gcc', 'mena', 'emea', 'heor', 'rwe', 'kol', 'hta', 'nice',
  'ai', 'amnog', 'sfda', 'hcv', 'moh', 'mohap', 'kfda', 'fda', 'cns', 'usa',
  'uk', 'eu', 'us', 'nhs', 'rwd', 'pico', 'icer', 'qaly',
]);

function titleCaseFromSlug(value) {
  return String(value || '')
    .split('-')
    .filter(Boolean)
    .map((part) =>
      TITLE_UPPERCASE_TOKENS.has(part.toLowerCase())
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join(' ');
}

const ARABIC_BLOG_TITLE_OVERRIDES = {
  'quantitative-market-research-and-market-access':
    'أبحاث السوق الكمية وأثر الوصول إلى السوق | BioNixus',
};

const GENERIC_DEFAULT_TITLES = new Set([
  'BioNixus | Healthcare & Pharmaceutical Market Research',
  'BioNixus',
  'Healthcare & Pharmaceutical Market Research | BioNixus',
]);

function buildFallbackTitle(pathname) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');
  const localeRoots = new Set(['/', '/de', '/fr', '/es', '/ar', '/zh']);
  if (path === '/') return 'Healthcare & Pharmaceutical Market Research | BioNixus';
  if (path === '/zh') return 'EMEA Healthcare Market Research (Chinese) | BioNixus';
  if (localeRoots.has(path)) return 'BioNixus | Healthcare & Pharmaceutical Market Research';

  if (path === '/market-research-home') return 'Market research data insights | BioNixus Consultancy';

  if (path === '/contact') return 'Contact BioNixus Healthcare Research Team | BioNixus';
  if (path === '/de/contact') return 'Kontakt BioNixus | Gesundheits- & Pharma-Marktforschung';
  if (path === '/fr/contacts') return 'Contacter BioNixus | Études de marché santé & pharma';
  if (path === '/es/contact') return 'Contacto BioNixus | Investigación de Mercado Sanitaria';
  if (path === '/zh/contact') return '联系 BioNixus | 医疗与制药市场研究咨询';
  if (path === '/ar/contacts') return 'تواصل مع BioNixus | أبحاث السوق الصحي والدوائي';

  if (
    path === '/methodology'
    || path === '/de/methodology'
    || path === '/fr/methodology'
    || path === '/es/methodology'
    || path === '/zh/methodology'
    || path === '/ar/methodology'
  ) {
    return 'Healthcare Research Methodology & Process | BioNixus';
  }

  if (path === '/sitemap') return 'Sitemap & Content Directory | BioNixus';
  if (path === '/privacy') return 'Privacy Policy & Terms for BioNixus Services';
  if (path === '/conf') return 'Top Market Research Companies in Egypt | BioNixus';
  if (path === '/ar/conf') return 'أفضل شركات أبحاث السوق في مصر | BioNixus';
  if (path === '/insights/top-market-research-companies-egypt-2026') return 'Top Market Research Companies in Egypt (2026) | BioNixus';
  if (path === '/ar/insights/top-market-research-companies-egypt-2026') return 'أفضل شركات أبحاث السوق في مصر (دليل 2026) | BioNixus';

  if (path === '/healthcare-market-research') return 'Healthcare & Pharmaceutical Market Research in Dubai, UAE & MENA | BioNixus';
  if (path === '/global-websites/united-arab-emirates') return 'Pharmaceutical & Healthcare Market Research in Dubai, UAE | BioNixus';
  if (path === '/case-studies') return 'Healthcare & Pharmaceutical Case Studies | BioNixus';
  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/').pop() || 'case-study';
    return `${titleCaseFromSlug(slug)} | BioNixus Case Study`;
  }

  if (path === '/blog') return 'Healthcare & Pharmaceutical Blog Insights | BioNixus';
  if (path === '/ar/blog') return 'المدونة العربية: أبحاث السوق الصحي والدوائي | BioNixus';
  if (path.startsWith('/ar/blog/')) {
    const slug = path.split('/').pop() || 'insight';
    if (ARABIC_BLOG_TITLE_OVERRIDES[slug]) return ARABIC_BLOG_TITLE_OVERRIDES[slug];
    return `${titleCaseFromSlug(slug)} | مدونة BioNixus`;
  }
  if (path.startsWith('/blog/')) {
    const slug = path.split('/').pop() || 'insight';
    return `${titleCaseFromSlug(slug)} | BioNixus Blog`;
  }

  if (path.startsWith('/healthcare-market-research/')) {
    const slug = path.split('/').pop() || 'market';
    return `Healthcare Market Research in ${titleCaseFromSlug(slug)} | BioNixus`;
  }

  if (path === '/real-world-evidence') {
    return 'Real World Evidence (RWE) for Pharma | BioNixus EMEA & MENA';
  }

  const segment = path.split('/').filter(Boolean).pop() || 'home';
  return `${titleCaseFromSlug(segment)} | BioNixus`;
}

const KNOWN_TITLE_SUFFIXES = [
  '| BioNixus Case Studies',
  '| BioNixus Case Study',
  '| BioNixus Blog',
  '| مدونة BioNixus',
  '| BioNixus Consultancy',
  '| BioNixus',
];

function normalizeTitleLength(title, max = 60) {
  const clean = String(title || '').replace(/\s+/g, ' ').trim();
  if (!clean) return 'BioNixus';
  if (clean.length <= max) return clean;

  for (const suffix of KNOWN_TITLE_SUFFIXES) {
    if (!clean.endsWith(suffix)) continue;
    const prefix = clean.slice(0, clean.length - suffix.length).trim();
    const prefixMax = Math.max(12, max - suffix.length - 1);
    const truncated = prefix
      .slice(0, prefixMax)
      .trim()
      .replace(/[|,;:\-–—\s]+$/, '');
    return `${truncated} ${suffix}`;
  }

  return clean
    .slice(0, Math.max(0, max - 1))
    .trim()
    .replace(/[|,;:\-–—\s]+$/, '');
}

function buildFallbackDescription(pathname) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');

  if (path === '/' || path === '/de' || path === '/fr' || path === '/es' || path === '/ar' || path === '/zh') {
    return 'Healthcare and pharmaceutical market research across MENA, GCC, UK, and Europe with quantitative and qualitative insights by BioNixus.';
  }
  if (path === '/market-research-home') {
    return 'Stay updated with the latest data insights and market research trends in the Middle East, focusing on Saudi Arabia and UAE, with proven expertise.';
  }
  if (path === '/contact') {
    return 'Request a BioNixus healthcare and pharmaceutical market research proposal: Saudi Arabia, GCC, UK, and Europe coverage with quantitative, qualitative, and market access programs.';
  }
  if (path === '/de/contact') {
    return 'Kontakt zu BioNixus: Markt- und Gesundheitsforschung für Pharma in DACH, UK und MENA—Angebote, Feldforschung und evidenzbasierte Strategieberatung.';
  }
  if (path === '/fr/contacts') {
    return 'Contactez BioNixus pour études de marché santé et pharma: couverture Europe, UK et MENA, méthodes quantitatives et qualitatives, et intelligence accès marché.';
  }
  if (path === '/ar/contacts') {
    return 'تواصل مع BioNixus لطلبات أبحاث السوق الصحي والدوائي في السعودية والخليج والمملكة المتحدة وأوروبا—برامج كمية ونوعية ودعم استراتيجي للوصول إلى السوق.';
  }
  if (path === '/es/contact') {
    return 'Contacto BioNixus: investigación de mercado farmacéutico y sanitario en España, Europa y MENA—propuestas, campo cualitativo y cuantitativo, y acceso al mercado.';
  }
  if (path === '/zh/contact') {
    return '联系 BioNixus：面向中国团队的医疗与制药市场研究咨询，覆盖欧洲、中东与海湾地区，提供定量定性研究与市场准入情报支持。';
  }
  if (path === '/conf') {
    return 'BioNixus — Egypt\'s leading market research firm. Healthcare, pharma, and consumer research across MENA. 127 projects, 48 global clients.';
  }
  if (path === '/ar/conf') {
    return 'بيونيكسس — الشركة الرائدة في أبحاث السوق في مصر. أبحاث الرعاية الصحية والأدوية والمستهلكين عبر الشرق الأوسط. ١٢٧ مشروعًا، ٤٨ عميلًا عالميًا.';
  }
  if (path === '/healthcare-market-research') {
    return 'BioNixus — leading healthcare and pharmaceutical market research company serving Dubai, UAE, and MENA. DHA, MOHAP, and DOH-aligned physician surveys, KOL mapping, and market access.';
  }
  if (path === '/global-websites/united-arab-emirates') {
    return 'BioNixus — pharmaceutical and healthcare market research in Dubai and UAE. DHA, MOHAP, DOH-aligned physician surveys, KOL mapping, market access, and launch intelligence.';
  }
  if (path === '/case-studies') {
    return 'Explore BioNixus healthcare and pharmaceutical case studies across Europe, the Middle East, and Africa.';
  }
  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/').pop() || 'case-study';
    return `${titleCaseFromSlug(slug)} case study from BioNixus with actionable healthcare and pharmaceutical market research outcomes.`;
  }
  if (path === '/blog') {
    return 'Read BioNixus healthcare and pharmaceutical market insights on market access, physician behavior, and regional growth strategy.';
  }
  if (path.startsWith('/blog/')) {
    const slug = path.split('/').pop() || 'insight';
    return `${titleCaseFromSlug(slug)} insight article from BioNixus covering healthcare and pharmaceutical market strategy.`;
  }
  if (path.startsWith('/ar/blog/')) {
    const slug = path.split('/').pop() || 'insight';
    if (slug === 'quantitative-market-research-and-market-access') {
      return 'ملخص عربي: أبحاث السوق الكمية وتأثيرها على الوصول إلى السوق للدواء—رؤى للشركات في الشرق الأوسط ودول الخليج من BioNixus.';
    }
    return `مقال عربي من BioNixus حول ${titleCaseFromSlug(slug)}: أبحاث السوق الصحي والدوائي وتوجيهات استراتيجية.`;
  }
  if (path.startsWith('/healthcare-market-research/')) {
    const slug = path.split('/').pop() || 'market';
    return `Pharmaceutical market research in ${titleCaseFromSlug(slug)} with localized stakeholder insight and execution-focused strategy support from BioNixus.`;
  }
  if (path === '/real-world-evidence') {
    return 'BioNixus delivers real world evidence (RWE) for pharma: principal-led design, EMEA and MENA field execution, HTA-ready narratives, and GCC programs—decision-ready outputs for medical, access, and commercial teams.';
  }

  const segment = path.split('/').filter(Boolean).pop() || 'home';
  return `${titleCaseFromSlug(segment)} page from BioNixus with healthcare and pharmaceutical market research insights and services context.`;
}

function normalizeDescriptionLength(description, max = 155) {
  const clean = String(description || '').replace(/\s+/g, ' ').trim();
  if (!clean) return 'BioNixus healthcare and pharmaceutical market research insights.';
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 90 ? cut.slice(0, lastSpace) : cut).trim().replace(/[|,;:\-–—\s]+$/, '')}.`;
}

function shouldForceLocaleFallback(pathname, chosen) {
  if (!chosen) return false;
  // For Arabic-prefixed pages, if the rendered title contains no Arabic
  // characters at all, the React component is showing English content and we
  // must force the Arabic fallback so the AR URL doesn't emit the same title
  // as its EN counterpart (a duplicate-title audit hit).
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    const hasArabic = /[\u0590-\u08FF]/.test(chosen);
    if (!hasArabic) return true;
  }
  return false;
}

function ensureTitleTag(html, pathname) {
  const fallbackTitle = normalizeTitleLength(buildFallbackTitle(pathname));
  const matches = Array.from(html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/ig));
  const chosen = matches
    .map((m) => (m[1] || '').trim())
    .filter(Boolean)
    .at(-1);
  const normalized = normalizeTitleLength(chosen || fallbackTitle);
  // If the rendered title is a generic site default (the index.html fallback
  // that React-Helmet didn't override at SSR time, typically because page
  // data is fetched async from Sanity), replace it with the path-specific
  // fallback so each URL ships a unique <title>.
  const isGeneric = chosen ? GENERIC_DEFAULT_TITLES.has(chosen) : false;
  const forceLocale = shouldForceLocaleFallback(pathname, chosen);
  const strengthened =
    isGeneric || forceLocale || normalized.length < 30 ? fallbackTitle : normalized;

  const withoutTitles = html.replace(/<title[^>]*>[\s\S]*?<\/title>/ig, '');
  return withoutTitles.replace(
    /<meta name="viewport"[^>]*>/i,
    `$&\n<title>${strengthened}</title>`,
  );
}

function ensureMainContentImage(html, pathname) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) return html;
  const mainInner = mainMatch[1];
  if (/<img\b/i.test(mainInner)) return html;
  if (/data-page-share/i.test(mainInner)) return html;

  const cleanPath = (pathname || '/').split('?')[0].split('#')[0] || '/';
  const normalizedPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');
  const encodedPath = encodeURIComponent(normalizedPath);
  const fullUrl = `https://www.bionixus.com${normalizedPath === '/' ? '' : normalizedPath}`;
  const altText = `BioNixus share card for ${fullUrl}`;
  const figureHtml = `<aside data-page-share class="my-12">
  <figure class="mx-auto max-w-2xl rounded-xl overflow-hidden border border-border bg-card shadow-sm">
    <a href="/api/og-card?path=${encodedPath}" target="_blank" rel="noopener" class="block" aria-label="Open the share card for this page in a new tab">
      <img src="/api/og-card?path=${encodedPath}" alt="${altText}" title="${altText}" width="1200" height="630" loading="lazy" decoding="async" class="block w-full h-auto" />
    </a>
    <figcaption class="px-4 py-3 text-sm text-muted-foreground border-t border-border">Share this page — <strong class="text-foreground">BioNixus</strong></figcaption>
  </figure>
</aside>`;

  const insertionPoint = html.lastIndexOf('</main>');
  if (insertionPoint === -1) return html;
  return `${html.slice(0, insertionPoint)}${figureHtml}${html.slice(insertionPoint)}`;
}

function ensureImageTitleAttributes(html) {
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    if (/\stitle\s*=/i.test(tag)) return tag;
    const altMatch = tag.match(/\salt\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
    const altValue = altMatch ? (altMatch[1] ?? altMatch[2] ?? '') : '';
    if (!altValue.trim()) return tag;
    const safe = altValue.replace(/"/g, '&quot;');
    return tag.replace(/(\salt\s*=\s*(?:"[^"]*"|'[^']*'))/i, `$1 title="${safe}"`);
  });
}

function shouldForceArabicMetaDescription(pathname, chosen) {
  if (!chosen) return false;
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    return !/[\u0590-\u08FF]/.test(chosen);
  }
  return false;
}

function escapeHtmlAttribute(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function ensureMetaDescriptionTag(html, pathname) {
  const fallbackDescription = normalizeDescriptionLength(buildFallbackDescription(pathname));
  const matches = Array.from(html.matchAll(/<meta[^>]+name=(["'])description\1[^>]*>/ig));
  const chosen = matches
    .map((m) => {
      const tag = m[0];
      const contentMatch = tag.match(/content=(["'])([\s\S]*?)\1/i);
      return (contentMatch?.[2] || '').trim();
    })
    .filter(Boolean)
    .at(-1);
  const forceArDescription = shouldForceArabicMetaDescription(pathname, chosen);
  const base = forceArDescription ? fallbackDescription : (chosen || fallbackDescription);
  const normalizedContent = normalizeDescriptionLength(base);
  const safeContent = escapeHtmlAttribute(normalizedContent);

  const withoutDescriptions = html.replace(/<meta[^>]+name=(["'])description\1[^>]*>\s*/ig, '');
  return withoutDescriptions.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `$&\n<meta name="description" content="${safeContent}" />`,
  );
}

async function startServer() {
  const app = express();
  app.use(compression());
  const CANONICAL_HOST = 'www.bionixus.com';
  const REDIRECTS = {
    '/healthcare-market-research-saudi-arabia': '/healthcare-market-research/saudi-arabia',
    '/healthcare-market-research-uae': '/healthcare-market-research/uae',
    '/healthcare-market-research-in-uae': '/healthcare-market-research/uae',
    '/healthcare-market-research-kuwait': '/healthcare-market-research/kuwait',
    '/healthcare-market-research-uk': '/healthcare-market-research/uk',
    '/healthcare-market-research/united-kingdom': '/healthcare-market-research/uk',
    '/healthcare-market-research-europe': '/healthcare-market-research/europe',
    '/quantitative-market-research': '/services/quantitative-research',
    '/techniques-and-tools-in-quantitative-healthcare-market-research': '/services/quantitative-research',
    '/fr/contact': '/fr/contacts',
    '/ar/contact': '/ar/contacts',
    '/adobe-experience-cloud': '/services',
    '/ar/about': '/about',
    '/ar/healthcare-market-research-saudi-arabia-ksa': '/healthcare-market-research/saudi-arabia',
    '/ar/services': '/services',
    '/ar/sustainability-saudi-arabia-ksa': '/healthcare-market-research/saudi-arabia',
    '/best-market-research-company-saudi-arabia': '/market-research-saudi-arabia-pharmaceutical',
    '/bionixus-ai-crm-tools': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    '/bionixus-market-research-customer-experience-blog': '/blog',
    '/career-portal': '/about',
    '/careers': '/about',
    '/chatgpt-is-down': '/blog',
    '/contact-details-bionixus': '/contact',
    '/customer-experience': '/services/competitive-intelligence',
    '/cx-ai-services': '/services/competitive-intelligence',
    '/de/about': '/about',
    '/de/contacts': '/de/contact',
    '/de/services': '/services',
    '/digital-transformation': '/services',
    '/fr/about': '/about',
    '/fr/services': '/services',
    '/fr/quantitative-research': '/services/quantitative-research',
    '/fr/qualitative-research': '/services/qualitative-research',
    '/fr/success-in-startups': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    '/market-research-customer-insight': '/market-research',
    '/market-research-in-uae': '/market-research-uae',
    '/pharma-market-research-in-uae': '/uae-pharmaceutical-market-research',
    '/market-research-methods-simplified-how-to-understand-your-customers-like-marvel': '/methodology',
    '/page': '/',
    '/privacy-policy': '/privacy',
    '/quantitative-market-research-healthcare': '/quantitative-healthcare-market-research',
    '/recruitment-services': '/services',
    '/sales-growth': '/services',
    '/startup-digital-marketing-package': '/services',
    '/terms-and-conditions': '/privacy',
    '/de/page-z6rdBM': '/de',
    '/de/page-z6rdbm': '/de',
    '/de/page-zJiHuV': '/de',
    '/de/page-zV_yZf': '/de',
    '/de/page-zZ8hGv': '/de',
    '/de/page-zjihuv': '/de',
    '/de/page-zv_yzf': '/de',
    '/de/page-zz8hgv': '/de',
    '/de/page-zzW-Z8': '/de',
    '/de/page-zzw-z8': '/de',
    '/fr/page-z6rdBM': '/fr',
    '/fr/page-z6rdbm': '/fr',
    '/fr/page-zJiHuV': '/fr',
    '/fr/page-zV_yZf': '/fr',
    '/fr/page-zZ8hGv': '/fr',
    '/fr/page-zjihuv': '/fr',
    '/fr/page-zv_yzf': '/fr',
    '/fr/page-zz8hgv': '/fr',
    '/fr/page-zzW-Z8': '/fr',
    '/fr/page-zzw-z8': '/fr',
    ...BLOG_LEGACY_FULL_PATH_REDIRECTS,
  };

  const strategicPortfolioAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/strategic-portfolio.html') : path.join('public', 'conf/strategic-portfolio.html'),
  );
  const strategicPortfolioArAbsolutePath = path.resolve(
    __dirname,
    isProduction ? path.join('dist/client', 'conf/strategic-portfolio-ar.html') : path.join('public', 'conf/strategic-portfolio-ar.html'),
  );

  /** Full-page static deck (authoritative HTML, not the SPA shell). */
  app.get('/conf/', (_req, res) => {
    res.redirect(301, '/conf');
  });
  app.get('/conf/strategic-portfolio.html', (_req, res) => {
    res.redirect(301, '/conf');
  });
  app.get('/conf', (_req, res) => {
    res.type('html').sendFile(strategicPortfolioAbsolutePath);
  });
  app.get('/ar/conf/', (_req, res) => {
    res.redirect(301, '/ar/conf');
  });
  app.get('/ar/conf', (_req, res) => {
    res.type('html').sendFile(strategicPortfolioArAbsolutePath);
  });

  let vite;
  if (!isProduction) {
    const { createServer } = await import('vite');
    vite = await createServer({
      root: __dirname,
      appType: 'custom',
      server: { middlewareMode: true },
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  app.get('/robots.txt', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/robots.txt'));
  });

  app.get('/llms.txt', (_req, res) => {
    res.type('text/plain').sendFile(path.resolve(__dirname, 'public/llms.txt'));
  });

  // Fallback canonicalization for non-edge environments.
  app.use((req, res, next) => {
    const forwardedHost = String(req.headers['x-forwarded-host'] || req.headers.host || '')
      .split(',')[0]
      .trim()
      .toLowerCase();
    const host = forwardedHost.replace(/:\d+$/, '');
    const forwardedProto = String(req.headers['x-forwarded-proto'] || req.protocol || 'http')
      .split(',')[0]
      .trim()
      .toLowerCase();
    const isLocal = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');

    if (!isLocal && (host === 'bionixus.com' || host === CANONICAL_HOST)) {
      if (host !== CANONICAL_HOST || forwardedProto !== 'https') {
        const target = `https://${CANONICAL_HOST}${req.originalUrl || req.url || '/'}`;
        res.redirect(301, target);
        return;
      }
    }

    next();
  });

  app.get('/api/og-card', (req, res) => {
    const raw = typeof req.query.path === 'string' ? req.query.path : '';
    const svg = renderOgCardSvg(normalizeOgCardPath(raw || undefined));
    res
      .status(200)
      .set({
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      })
      .send(svg);
  });

  app.use(async (req, res, next) => {
    try {
      const rawPathAndQuery = (req.originalUrl || req.url || '/').split('#')[0];
      const canonical = canonicalRedirectTarget(rawPathAndQuery);
      if (canonical.changed && canonical.full !== canonical.original) {
        res.redirect(301, canonical.full);
        return;
      }

      if (REDIRECTS[req.path]) {
        res.redirect(301, REDIRECTS[req.path]);
        return;
      }

      const url = req.originalUrl;

      let template;
      let render;
      let fetchRouteData;

      if (!isProduction) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        const serverMod = await vite.ssrLoadModule('/src/server-entry.ts');
        render = serverMod.render;
        fetchRouteData = serverMod.fetchRouteData;
      } else {
        const distClient = path.resolve(__dirname, 'dist/client');
        const ssrTemplate = path.join(distClient, '_ssr-template.html');
        const indexHtml = path.join(distClient, 'index.html');
        const templateFile = fs.existsSync(ssrTemplate) ? ssrTemplate : indexHtml;
        template = fs.readFileSync(templateFile, 'utf-8');

        const serverMod = await import('./dist/server/server-entry.js');
        render = serverMod.render;
        fetchRouteData = serverMod.fetchRouteData;
      }

      const initialData = await fetchRouteData(url);
      const { html: appHtml, helmetData } = render(url, initialData);

      const headTags = [
        helmetData?.title?.toString() || '',
        helmetData?.meta?.toString() || '',
        helmetData?.link?.toString() || '',
        helmetData?.script?.toString() || '',
      ].join('\n');

      const statusCode = isSsrNotFoundPage(headTags, appHtml) ? 404 : 200;

      const page = template
        .replace('<!--ssr-head-->', headTags)
        .replace('<!--ssr-outlet-->', appHtml)
        .replace(
          '<!--ssr-data-->',
          `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}</script>`,
        );
      const localizedPage = ensureImageTitleAttributes(
        ensureMainContentImage(
          ensureMetaDescriptionTag(
            ensureTitleTag(applyHtmlLang(page, req.path), req.path),
            req.path,
          ),
          req.path,
        ),
      );

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(localizedPage);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('SSR request failed:', error);
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(error);
      }
      next(error);
    }
  });

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`SSR server running at http://localhost:${port}`);
  });
}

startServer();

