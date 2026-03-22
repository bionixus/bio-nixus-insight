import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';

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

function titleCaseFromSlug(value) {
  return String(value || '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function buildFallbackTitle(pathname) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');
  const localeRoots = new Set(['/', '/de', '/fr', '/es', '/ar', '/zh']);
  if (path === '/') return 'Healthcare & Pharmaceutical Market Research | BioNixus';
  if (path === '/zh') return 'EMEA Healthcare Market Research (Chinese) | BioNixus';
  if (localeRoots.has(path)) return 'BioNixus | Healthcare & Pharmaceutical Market Research';

  if (
    path === '/contact'
    || path === '/de/contact'
    || path === '/fr/contacts'
    || path === '/es/contact'
    || path === '/zh/contact'
    || path === '/ar/contacts'
  ) {
    return 'Contact BioNixus Healthcare Research Team | BioNixus';
  }

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

  if (path === '/case-studies') return 'Healthcare & Pharmaceutical Case Studies | BioNixus';
  if (path.startsWith('/case-studies/')) {
    const slug = path.split('/').pop() || 'case-study';
    return `${titleCaseFromSlug(slug)} | BioNixus Case Study`;
  }

  if (path === '/blog') return 'Healthcare & Pharmaceutical Blog Insights | BioNixus';
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

function normalizeTitleLength(title, max = 60) {
  const clean = String(title || '').replace(/\s+/g, ' ').trim();
  if (!clean) return 'BioNixus';
  if (clean.length <= max) return clean;

  const suffix = '| BioNixus';
  if (clean.endsWith(suffix)) {
    const prefixMax = Math.max(12, max - suffix.length - 1);
    const prefix = clean.slice(0, prefixMax).trim().replace(/[|,;:\-–—\s]+$/, '');
    return `${prefix} ${suffix}`;
  }

  return clean.slice(0, Math.max(0, max - 1)).trim().replace(/[|,;:\-–—\s]+$/, '');
}

function buildFallbackDescription(pathname) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');

  if (path === '/' || path === '/de' || path === '/fr' || path === '/es' || path === '/ar' || path === '/zh') {
    return 'Healthcare and pharmaceutical market research across MENA, GCC, UK, and Europe with quantitative and qualitative insights by BioNixus.';
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

function ensureTitleTag(html, pathname) {
  const fallbackTitle = normalizeTitleLength(buildFallbackTitle(pathname));
  const matches = Array.from(html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/ig));
  const chosen = matches
    .map((m) => (m[1] || '').trim())
    .filter(Boolean)
    .at(-1);
  const normalized = normalizeTitleLength(chosen || fallbackTitle);
  const strengthened = normalized.length < 30 ? fallbackTitle : normalized;

  const withoutTitles = html.replace(/<title[^>]*>[\s\S]*?<\/title>/ig, '');
  return withoutTitles.replace(
    /<meta name="viewport"[^>]*>/i,
    `$&\n<title>${strengthened}</title>`,
  );
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
  const normalizedContent = normalizeDescriptionLength(chosen || fallbackDescription);

  const withoutDescriptions = html.replace(/<meta[^>]+name=(["'])description\1[^>]*>\s*/ig, '');
  return withoutDescriptions.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `$&\n<meta name="description" content="${normalizedContent}" />`,
  );
}

async function startServer() {
  const app = express();
  app.use(compression());
  const CANONICAL_HOST = 'www.bionixus.com';
  const LOCALE_ROOT_WITH_SLASH = new Set(['/de/', '/fr/', '/es/', '/zh/', '/ar/']);
  const REDIRECTS = {
    '/healthcare-market-research-saudi-arabia': '/healthcare-market-research/saudi-arabia',
    '/healthcare-market-research-uae': '/healthcare-market-research/uae',
    '/healthcare-market-research-in-uae': '/healthcare-market-research/uae',
    '/healthcare-market-research-kuwait': '/healthcare-market-research/kuwait',
    '/healthcare-market-research-uk': '/healthcare-market-research/uk',
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
    '/fr/success-in-startups': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    '/market-research-customer-insight': '/market-research',
    '/market-research-in-uae': '/market-research-uae',
    '/pharma-market-research-in-uae': '/uae-pharmaceutical-market-research',
    '/market-research-home': '/market-research',
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
  };

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

  app.use(async (req, res, next) => {
    try {
      if (req.path !== '/' && req.path.endsWith('/') && !LOCALE_ROOT_WITH_SLASH.has(req.path)) {
        const trimmedPath = req.path.slice(0, -1);
        const suffix = req.originalUrl.slice(req.path.length);
        res.redirect(301, `${trimmedPath}${suffix}`);
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

      let statusCode = 200;
      if (
        (headTags.includes('name="prerender-status"') && headTags.includes('content="404"'))
        || appHtml.includes('data-route-status="404"')
      ) {
        statusCode = 404;
      }

      const page = template
        .replace('<!--ssr-head-->', headTags)
        .replace('<!--ssr-outlet-->', appHtml)
        .replace(
          '<!--ssr-data-->',
          `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}</script>`,
        );
      const localizedPage = ensureMetaDescriptionTag(
        ensureTitleTag(applyHtmlLang(page, req.path), req.path),
        req.path,
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

