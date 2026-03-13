import fs from 'node:fs';
import path from 'node:path';

type HelmetLike = {
  title?: { toString: () => string };
  meta?: { toString: () => string };
  link?: { toString: () => string };
  script?: { toString: () => string };
};

type RenderResult = {
  html: string;
  helmetData?: HelmetLike;
};

type ServerEntryModule = {
  render: (url: string, initialData?: Record<string, unknown>) => RenderResult;
  fetchRouteData: (url: string) => Promise<Record<string, unknown>>;
};

type RequestLike = {
  url?: string;
  query?: Record<string, string | string[] | undefined>;
};

let templateCache = '';
let serverEntryCache: ServerEntryModule | null = null;
const LOCALE_ROOT_WITH_SLASH = new Set(['/de/', '/fr/', '/es/', '/zh/', '/ar/']);
const REDIRECTS: Record<string, string> = {
  '/healthcare-market-research-saudi-arabia': '/healthcare-market-research/saudi-arabia',
  '/healthcare-market-research-uae': '/healthcare-market-research/uae',
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

function inferHtmlLang(pathname: string): { lang: string; dir: 'ltr' | 'rtl' } {
  if (pathname.startsWith('/de')) return { lang: 'de', dir: 'ltr' };
  if (pathname.startsWith('/fr')) return { lang: 'fr', dir: 'ltr' };
  if (pathname.startsWith('/es')) return { lang: 'es', dir: 'ltr' };
  if (pathname.startsWith('/ar')) return { lang: 'ar', dir: 'rtl' };
  if (pathname.startsWith('/zh')) return { lang: 'zh-CN', dir: 'ltr' };
  return { lang: 'en', dir: 'ltr' };
}

function applyHtmlLang(template: string, pathname: string): string {
  const { lang, dir } = inferHtmlLang(pathname);
  return template.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${dir}">`);
}

function titleCaseFromSlug(value: string): string {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function buildFallbackTitle(pathname: string): string {
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

  const segment = path.split('/').filter(Boolean).pop() || 'home';
  return `${titleCaseFromSlug(segment)} | BioNixus`;
}

function normalizeTitleLength(title: string, max = 60): string {
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

function buildFallbackDescription(pathname: string): string {
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

  const segment = path.split('/').filter(Boolean).pop() || 'home';
  return `${titleCaseFromSlug(segment)} page from BioNixus with healthcare and pharmaceutical market research insights and services context.`;
}

function normalizeDescriptionLength(description: string, max = 155): string {
  const clean = String(description || '').replace(/\s+/g, ' ').trim();
  if (!clean) return 'BioNixus healthcare and pharmaceutical market research insights.';
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 90 ? cut.slice(0, lastSpace) : cut).trim().replace(/[|,;:\-–—\s]+$/, '')}.`;
}

function ensureTitleTag(html: string, pathname: string): string {
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

function ensureMetaDescriptionTag(html: string, pathname: string): string {
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

function getTemplate(): string {
  if (templateCache) return templateCache;
  const templatePath = path.join(process.cwd(), 'dist', 'client', 'index.html');
  templateCache = fs.readFileSync(templatePath, 'utf-8');
  return templateCache;
}

async function getServerEntry(): Promise<ServerEntryModule> {
  if (serverEntryCache) return serverEntryCache;
  const modulePath = path.join(process.cwd(), 'dist', 'server', 'server-entry.js');
  const loaded = (await import(modulePath)) as unknown as ServerEntryModule;
  serverEntryCache = loaded;
  return loaded;
}

function injectHtml(
  template: string,
  pathname: string,
  appHtml: string,
  helmetData: HelmetLike | undefined,
  initialData: Record<string, unknown>,
): string {
  const headTags = [
    helmetData?.title?.toString() || '',
    helmetData?.meta?.toString() || '',
    helmetData?.link?.toString() || '',
    helmetData?.script?.toString() || '',
  ].join('\n');

  const page = template
    .replace('<!--ssr-head-->', headTags)
    .replace('<!--ssr-outlet-->', appHtml)
    .replace(
      '<!--ssr-data-->',
      `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}</script>`,
    );
  return ensureMetaDescriptionTag(ensureTitleTag(applyHtmlLang(page, pathname), pathname), pathname);
}

function getParamFromUrl(url: string | undefined, key: string): string | undefined {
  if (!url) return undefined;
  const queryPart = url.includes('?') ? url.slice(url.indexOf('?') + 1) : '';
  if (!queryPart) return undefined;
  const params = new URLSearchParams(queryPart);
  return params.get(key) ?? undefined;
}

function getRequestParam(req: RequestLike, key: string): string | undefined {
  const queryValue = req.query?.[key];
  if (typeof queryValue === 'string' && queryValue.length > 0) return queryValue;
  if (Array.isArray(queryValue) && queryValue.length > 0) return queryValue[0];
  return getParamFromUrl(req.url, key);
}

async function handleSsrRequest(
  req: RequestLike,
  res: {
    setHeader: (name: string, value: string) => void;
    redirect: (statusCode: number, url: string) => void;
    status: (statusCode: number) => { send: (body: string) => void };
  },
) {
  const rawQueryUrl = getRequestParam(req, 'url');
  const rewrittenPath = typeof rawQueryUrl === 'string' ? decodeURIComponent(rawQueryUrl) : '';
  const normalizedRewrittenPath = rewrittenPath
    ? (rewrittenPath.startsWith('/') ? rewrittenPath : `/${rewrittenPath}`)
    : '';
  const fallbackUrl = req.url || '/';
  const url = normalizedRewrittenPath || fallbackUrl;
  const pathname = url.split('?')[0] || '/';
  const query = url.includes('?') ? `?${url.split('?').slice(1).join('?')}` : '';

  if (pathname !== '/' && pathname.endsWith('/') && !LOCALE_ROOT_WITH_SLASH.has(pathname)) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.redirect(301, `${pathname.slice(0, -1)}${query}`);
    return;
  }

  if (REDIRECTS[pathname]) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.redirect(301, REDIRECTS[pathname]);
    return;
  }

  const template = getTemplate();
  const serverEntry = await getServerEntry();
  const initialData = await serverEntry.fetchRouteData(url);
  const { html: appHtml, helmetData } = serverEntry.render(url, initialData);
  const headTags = [
    helmetData?.title?.toString() || '',
    helmetData?.meta?.toString() || '',
    helmetData?.link?.toString() || '',
    helmetData?.script?.toString() || '',
  ].join('\n');
  const isNotFoundPage =
    (headTags.includes('name="prerender-status"') && headTags.includes('content="404"'))
    || appHtml.includes('data-route-status="404"');
  const page = injectHtml(template, pathname, appHtml, helmetData, initialData);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=300');
  res.status(isNotFoundPage ? 404 : 200).send(page);
}

export default async function handler(
  req: RequestLike,
  res: {
    setHeader: (name: string, value: string) => void;
    redirect: (statusCode: number, url: string) => void;
    status: (statusCode: number) => { send: (body: string) => void };
  },
) {
  try {
    if (getRequestParam(req, '__ssr') === '1') {
      await handleSsrRequest(req, res);
      return;
    }

    const key = process.env.INDEXNOW_KEY;
    if (!key) {
      res.status(500).send('INDEXNOW_KEY not configured');
      return;
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(String(key));
  } catch (error) {
    console.error('IndexNow/SSR handler failed:', error);
    res.status(500).send('Internal Server Error');
  }
}

