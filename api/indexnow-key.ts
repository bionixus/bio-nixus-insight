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

  return template
    .replace('<!--ssr-head-->', headTags)
    .replace('<!--ssr-outlet-->', appHtml)
    .replace(
      '<!--ssr-data-->',
      `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}</script>`,
    );
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
  const page = injectHtml(template, appHtml, helmetData, initialData);

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

