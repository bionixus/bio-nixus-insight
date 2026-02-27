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

let templateCache = '';
let serverEntryCache: ServerEntryModule | null = null;

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

export default async function handler(
  req: { url?: string },
  res: {
    setHeader: (name: string, value: string) => void;
    redirect: (statusCode: number, url: string) => void;
    status: (statusCode: number) => { send: (body: string) => void };
  },
) {
  try {
    const url = req.url || '/';
    const pathname = url.split('?')[0] || '/';

    if (pathname === '/global-websites') {
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.redirect(301, '/healthcare-market-research');
      return;
    }

    if (pathname.startsWith('/global-websites/')) {
      const redirectedPath = pathname.replace('/global-websites', '/healthcare-market-research');
      const suffix = url.slice(pathname.length);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.redirect(301, `${redirectedPath}${suffix}`);
      return;
    }

    const template = getTemplate();
    const serverEntry = await getServerEntry();

    const initialData = await serverEntry.fetchRouteData(url);
    const { html: appHtml, helmetData } = serverEntry.render(url, initialData);
    const page = injectHtml(template, appHtml, helmetData, initialData);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=300');
    res.status(200).send(page);
  } catch (error) {
    console.error('Vercel SSR handler failed:', error);
    res.status(500).send('Internal Server Error');
  }
}
