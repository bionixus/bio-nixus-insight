import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT || 5173);

async function startServer() {
  const app = express();
  app.use(compression());
  const REDIRECTS = {
    '/healthcare-market-research-saudi-arabia': '/healthcare-market-research/saudi-arabia',
    '/healthcare-market-research-uae': '/healthcare-market-research/uae',
    '/healthcare-market-research-kuwait': '/healthcare-market-research/kuwait',
    '/healthcare-market-research-uk': '/healthcare-market-research/uk',
    '/healthcare-market-research-europe': '/healthcare-market-research/europe',
    '/quantitative-market-research': '/services/quantitative-research',
    '/techniques-and-tools-in-quantitative-healthcare-market-research': '/services/quantitative-research',
    '/fr/contact': '/fr/contacts',
    '/ar/contact': '/ar/contacts',
    '/global-websites': '/healthcare-market-research',
    '/adobe-experience-cloud': '/services',
    '/ar/about': '/about',
    '/ar/healthcare-market-research-saudi-arabia-ksa': '/healthcare-market-research/saudi-arabia',
    '/ar/services': '/services',
    '/ar/sustainability-saudi-arabia-ksa': '/healthcare-market-research/saudi-arabia',
    '/best-market-research-company-saudi-arabia': '/market-research-saudi-arabia-pharmaceutical',
    '/bionixus-ai-crm-tools': '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    '/bionixus-market-research-customer-experience-blog': '/blog',
    '/careers': '/about',
    '/chatgpt-is-down': '/blog',
    '/contact-details-bionixus': '/contact',
    '/customer-experience': '/services/competitive-intelligence',
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

  app.use(async (req, res, next) => {
    try {
      if (req.path !== '/' && req.path.endsWith('/')) {
        const trimmedPath = req.path.slice(0, -1);
        const suffix = req.originalUrl.slice(req.path.length);
        res.redirect(301, `${trimmedPath}${suffix}`);
        return;
      }

      if (REDIRECTS[req.path]) {
        res.redirect(301, REDIRECTS[req.path]);
        return;
      }

      if (req.path.startsWith('/global-websites/')) {
        const redirectPath = req.path.replace('/global-websites', '/healthcare-market-research');
        const suffix = req.originalUrl.slice(req.path.length);
        res.redirect(301, `${redirectPath}${suffix}`);
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
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');

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
      if (headTags.includes('name="prerender-status"') && headTags.includes('content="404"')) {
        statusCode = 404;
      }

      const page = template
        .replace('<!--ssr-head-->', headTags)
        .replace('<!--ssr-outlet-->', appHtml)
        .replace(
          '<!--ssr-data-->',
          `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}</script>`,
        );

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(page);
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

