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

  app.get('/global-websites', (_req, res) => {
    res.redirect(301, '/healthcare-market-research');
  });

  app.use(async (req, res, next) => {
    try {
      if (req.path.startsWith('/global-websites/')) {
        const nextPath = req.path.replace('/global-websites', '/healthcare-market-research');
        res.redirect(301, nextPath);
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

