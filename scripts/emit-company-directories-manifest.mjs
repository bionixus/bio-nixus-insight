/**
 * Bundles src/data/companyDirectories with esbuild and emits
 * scripts/data/company-directories-manifest.json for generate-sitemap.mjs
 * (which writes public/sitemap-directories.xml) and for
 * scripts/verify-company-directories.mjs.
 *
 * Run before build:sitemap (wired into the `generate-sitemap` npm script).
 */
import { build } from 'esbuild';
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const outfile = join(tmpdir(), `company-directories-registry-${Date.now()}.mjs`);

await build({
  entryPoints: [join(root, 'src/data/companyDirectories/index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  alias: { '@': join(root, 'src') },
  logLevel: 'silent',
});

const { COMPANY_DIRECTORIES, ADAPTED_INDUSTRY_DIRECTORIES, COMPANY_DIRECTORY_HUBS, LEGACY_DIRECTORIES } =
  await import(pathToFileURL(outfile).href);
rmSync(outfile, { force: true });

const PRIORITY_HUB = { master: '0.9', country: '0.88', entity: '0.86' };

const manifest = {
  generatedAt: new Date().toISOString(),
  /** Registry spokes — go into sitemap-directories.xml. */
  directories: COMPANY_DIRECTORIES.map((d) => ({
    path: d.path,
    entity: d.entity,
    country: d.countrySlug,
    title: d.title,
    metaDescription: d.metaDescription,
    h1: d.h1,
    companies: d.companies.length,
    regulatorSource: d.regulatorSource ?? null,
    lastmod: d.modifiedDate,
    priority: '0.86',
    changefreq: 'monthly',
  })),
  /** Hubs — go into sitemap-directories.xml. */
  hubs: COMPANY_DIRECTORY_HUBS.map((h) => ({
    path: h.path,
    kind: h.kind,
    title: h.title,
    metaDescription: h.metaDescription,
    lastmod: h.modifiedDate,
    priority: PRIORITY_HUB[h.kind],
    changefreq: 'weekly',
  })),
  /** Pre-matrix industry pages — already in sitemap.xml; listed for the gate script only. */
  industry: ADAPTED_INDUSTRY_DIRECTORIES.map((d) => ({
    path: d.path,
    entity: d.entity,
    country: d.countrySlug,
    title: d.title,
    metaDescription: d.metaDescription,
    h1: d.h1,
    companies: d.companies.length,
    lastmod: d.modifiedDate,
  })),
  /** Hand-written TSX directories — listed for uniqueness checks only. */
  legacy: LEGACY_DIRECTORIES.map((d) => ({ path: d.path, entity: d.entity, country: d.countrySlug })),
};

const outDir = join(__dirname, 'data');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'company-directories-manifest.json');
writeFileSync(outPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log(
  `Company-directories manifest written: ${manifest.directories.length} spokes, ${manifest.hubs.length} hubs, ${manifest.industry.length} industry pages → ${outPath}`,
);
