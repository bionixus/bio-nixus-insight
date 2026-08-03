/**
 * Industry-matrix sitemap entries, derived from src/data/industryMarketResearchMatrix.ts.
 *
 * This file previously hand-duplicated the country and industry lists and drifted:
 * it emitted only saudi-arabia/uae/egypt while the matrix served seven countries,
 * so 128 live, indexable pages never reached the sitemap. Bundling the real module
 * keeps the two in sync by construction.
 */
import { build } from 'esbuild';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..', '..');

const outfile = join(tmpdir(), `industry-matrix-${Date.now()}.mjs`);

await build({
  entryPoints: [join(root, 'src/data/industryMarketResearchMatrix.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  alias: { '@': join(root, 'src') },
  logLevel: 'silent',
});

const { getMatrixSitemapEntries } = await import(pathToFileURL(outfile).href);

/** @returns {{ path: string, priority: string, changefreq: string }[]} */
export function getIndustryMatrixSitemapPages() {
  return getMatrixSitemapEntries();
}
