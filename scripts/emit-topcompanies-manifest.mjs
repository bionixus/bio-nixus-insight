/**
 * Bundles src/data/topCompanies/registry.ts with esbuild and emits
 * scripts/data/topcompanies-manifest.json for generate-sitemap.mjs.
 *
 * Run before build:sitemap (wired into the npm build pipeline).
 */
import { build } from 'esbuild';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const outfile = join(tmpdir(), `topcompanies-registry-${Date.now()}.mjs`);

await build({
  entryPoints: [join(root, 'src/data/topCompanies/registry.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  alias: { '@': join(root, 'src') },
  logLevel: 'silent',
});

const { allListicleConfigs } = await import(pathToFileURL(outfile).href);

const manifest = allListicleConfigs.map((c) => ({
  path: c.slug,
  lang: c.lang,
  variant: c.variant,
  region: c.region,
  country: c.country,
  priority: c.lang === 'en' ? '0.88' : '0.85',
  changefreq: 'monthly',
  hreflang: c.hreflang,
  lastmod: c.dateModified,
}));

const outDir = join(__dirname, 'data');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'topcompanies-manifest.json');
writeFileSync(outPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log(`Top-companies manifest written: ${manifest.length} pages → ${outPath}`);
