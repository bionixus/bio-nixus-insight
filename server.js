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

      const page = template
        .replace('<!--ssr-head-->', headTags)
        .replace('<!--ssr-outlet-->', appHtml)
        .replace(
          '<!--ssr-data-->',
          `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}</script>`,
        );

      res.status(200).set({ 'Content-Type': 'text/html' }).end(page);
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

