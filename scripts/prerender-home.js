import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const clientIndexPath = path.join(projectRoot, 'dist', 'client', 'index.html');
const serverEntryPath = path.join(projectRoot, 'dist', 'server', 'server-entry.js');

if (!fs.existsSync(clientIndexPath) || !fs.existsSync(serverEntryPath)) {
  throw new Error('Missing build artifacts for prerender-home step.');
}

const template = fs.readFileSync(clientIndexPath, 'utf8');
const serverEntryModule = await import(pathToFileURL(serverEntryPath).href);

if (!serverEntryModule.render || !serverEntryModule.fetchRouteData) {
  throw new Error('server-entry module is missing render() or fetchRouteData().');
}

const initialData = await serverEntryModule.fetchRouteData('/');
const { html: appHtml, helmetData } = serverEntryModule.render('/', initialData);

const headTags = [
  helmetData?.title?.toString() || '',
  helmetData?.meta?.toString() || '',
  helmetData?.link?.toString() || '',
  helmetData?.script?.toString() || '',
].join('\n');

const prerendered = template
  .replace('<!--ssr-head-->', headTags)
  .replace('<!--ssr-outlet-->', appHtml)
  .replace(
    '<!--ssr-data-->',
    `<script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')}</script>`,
  );

fs.writeFileSync(clientIndexPath, prerendered, 'utf8');
// eslint-disable-next-line no-console
console.log('Prerendered homepage into dist/client/index.html');
