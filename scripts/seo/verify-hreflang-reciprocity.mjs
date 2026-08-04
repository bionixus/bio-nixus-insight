/**
 * Fails when hreflang annotations are not reciprocal.
 *
 * Every URL listed as an alternate must list the referring URL back. The Aug 2026
 * crawl found /market-research and /market-research-healthcare both claiming the
 * same seven localized URLs, which left both groups non-reciprocal.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { tmpdir } from 'os';
import { build } from 'esbuild';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const outfile = join(tmpdir(), `seo-hreflang-${Date.now()}.mjs`);
await build({
  entryPoints: [join(root, 'src/lib/seo.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  alias: { '@': join(root, 'src') },
  logLevel: 'silent',
});
const { getHreflangLinks } = await import(pathToFileURL(outfile).href);

const stripHost = (href) => href.replace(/^https?:\/\/[^/]+/, '') || '/';

const routePaths = [
  ...new Set(
    [...readFileSync(join(root, 'src/routes.tsx'), 'utf8').matchAll(/path:\s*'([^']+)'/g)]
      .map((m) => m[1])
      .filter((p) => p.startsWith('/') && !p.includes(':') && !p.includes('*')),
  ),
];

const alternatesOf = (path) =>
  getHreflangLinks(path)
    .filter((link) => link.lang !== 'x-default')
    .map((link) => stripHost(link.href));

const errors = [];
for (const path of routePaths) {
  const alternates = alternatesOf(path);
  if (alternates.length <= 1) continue;
  for (const alternate of alternates) {
    if (alternate === path) continue;
    if (!alternatesOf(alternate).includes(path)) {
      errors.push(`${path} lists ${alternate}, but ${alternate} does not list it back.`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Hreflang reciprocity failed (${errors.length}):`);
  for (const error of errors.slice(0, 40)) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`Hreflang reciprocity OK across ${routePaths.length} routes.`);
