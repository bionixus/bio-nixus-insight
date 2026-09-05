/**
 * Builds public/site-search-index.json from published sitemaps.
 * Used by the navbar site search. Also called at the end of generate-sitemap.mjs.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const SITEMAP_FILES = ['sitemap.xml', 'sitemap-directories.xml', 'sitemap-healthcare-markets.xml'];

function extractPathsFromSitemapXml(xml) {
  const paths = [];
  const locRe = /<loc>\s*([^<]+)\s*<\/loc>/gi;
  let match;
  while ((match = locRe.exec(xml))) {
    try {
      const pathname = new URL(match[1].trim()).pathname.replace(/\/$/, '') || '/';
      paths.push(decodeURIComponent(pathname));
    } catch {
      // skip malformed loc
    }
  }
  return paths;
}

export function writeSiteSearchIndex(targetDir = publicDir) {
  const seen = new Set();
  const paths = [];
  for (const file of SITEMAP_FILES) {
    const full = join(targetDir, file);
    if (!existsSync(full)) continue;
    for (const path of extractPathsFromSitemapXml(readFileSync(full, 'utf8'))) {
      if (seen.has(path)) continue;
      seen.add(path);
      paths.push(path);
    }
  }
  paths.sort((a, b) => a.localeCompare(b));
  const payload = {
    generatedAt: new Date().toISOString().slice(0, 10),
    count: paths.length,
    paths,
  };
  writeFileSync(join(targetDir, 'site-search-index.json'), JSON.stringify(payload), 'utf8');
  return payload.count;
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isDirectRun) {
  const count = writeSiteSearchIndex();
  console.log(`Site search index written (${count} paths).`);
}
