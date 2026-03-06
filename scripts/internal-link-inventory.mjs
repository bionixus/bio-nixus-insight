#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const csvPath = '/Users/selim/Downloads/Internal link report forwww.bionixus.com (1).csv';
const routesPath = path.join(root, 'src', 'routes.tsx');
const serverPath = path.join(root, 'server.js');
const apiPath = path.join(root, 'api', 'indexnow-key.ts');
const outputJsonPath = path.join(root, 'scripts', 'internal-link-inventory.json');
const outputMdPath = path.join(root, 'scripts', 'internal-link-inventory.md');

function parseCsvRows(csvText) {
  const lines = csvText.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map((h) => h.trim());
  const urlIdx = headers.findIndex((h) => h.toLowerCase() === 'url');
  const linksIdx = headers.findIndex((h) => h.toLowerCase() === 'internal links');
  if (urlIdx === -1) return [];

  return lines.slice(1).map((line) => {
    const cols = line.split(',');
    return {
      url: (cols[urlIdx] || '').trim(),
      internalLinks: Number(cols[linksIdx] || 0),
    };
  });
}

function normalizePath(url) {
  try {
    const parsed = new URL(url);
    const clean = parsed.pathname.replace(/\/+$/, '');
    return clean || '/';
  } catch {
    return '';
  }
}

function parseRoutePatterns(routesSource) {
  const patterns = [];
  const regex = /path:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  while ((match = regex.exec(routesSource))) {
    patterns.push(match[1]);
  }
  return [...new Set(patterns)];
}

function parseRedirectMap(source) {
  const redirects = {};
  const regex = /['"`]([^'"`]+)['"`]\s*:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  while ((match = regex.exec(source))) {
    const from = match[1];
    const to = match[2];
    if (from.startsWith('/')) redirects[from] = to;
  }
  return redirects;
}

function toRegexPattern(routePattern) {
  if (routePattern === '*') return /^.*$/;
  const escaped = routePattern
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\\:([A-Za-z0-9_]+)/g, '[^/]+');
  return new RegExp(`^${escaped}$`);
}

function matchesRoute(pathname, patterns) {
  return patterns.some((pattern) => {
    if (pattern === pathname) return true;
    if (!pattern.includes(':') && pattern !== '*') return false;
    return toRegexPattern(pattern).test(pathname);
  });
}

function suggestCanonical(pathname) {
  if (pathname.startsWith('/blog/')) return '/blog';
  if (pathname.startsWith('/case-studies/')) return '/case-studies';
  if (pathname.startsWith('/de/')) return '/de';
  if (pathname.startsWith('/fr/')) return '/fr';
  if (pathname.startsWith('/es/')) return '/es';
  if (pathname.startsWith('/ar/')) return '/ar';
  if (pathname.startsWith('/healthcare-market-research/')) return '/healthcare-market-research';
  return '/';
}

function main() {
  if (!fs.existsSync(csvPath)) {
    throw new Error(`CSV not found: ${csvPath}`);
  }

  const csvRows = parseCsvRows(fs.readFileSync(csvPath, 'utf8'));
  const allPaths = csvRows.map((r) => normalizePath(r.url)).filter(Boolean);
  const zeroLinkPaths = csvRows
    .filter((r) => Number.isFinite(r.internalLinks) && r.internalLinks === 0)
    .map((r) => normalizePath(r.url))
    .filter(Boolean);

  const routePatterns = parseRoutePatterns(fs.readFileSync(routesPath, 'utf8'));
  const redirects = {
    ...parseRedirectMap(fs.readFileSync(serverPath, 'utf8')),
    ...parseRedirectMap(fs.readFileSync(apiPath, 'utf8')),
  };

  const existing = [];
  const aliased = [];
  const missing = [];

  for (const pathname of zeroLinkPaths) {
    if (redirects[pathname]) {
      aliased.push({ path: pathname, redirectTo: redirects[pathname] });
      continue;
    }
    if (matchesRoute(pathname, routePatterns)) {
      existing.push(pathname);
      continue;
    }
    missing.push({ path: pathname, suggestedCanonical: suggestCanonical(pathname) });
  }

  const payload = {
    scannedAt: new Date().toISOString(),
    csvPath,
    counts: {
      allRows: csvRows.length,
      allPaths: allPaths.length,
      zeroLinkPaths: zeroLinkPaths.length,
      linkableExistingPaths: existing.length,
      aliasedPaths: aliased.length,
      missingPaths: missing.length,
    },
    linkableExistingPaths: existing.sort(),
    aliasedPaths: aliased.sort((a, b) => a.path.localeCompare(b.path)),
    missingPaths: missing.sort((a, b) => a.path.localeCompare(b.path)),
  };

  fs.writeFileSync(outputJsonPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

  const md = [
    '# Internal Link Inventory',
    '',
    `Generated: ${payload.scannedAt}`,
    '',
    `- All rows: ${payload.counts.allRows}`,
    `- Zero-link paths: ${payload.counts.zeroLinkPaths}`,
    `- Linkable existing paths: ${payload.counts.linkableExistingPaths}`,
    `- Aliased paths (redirect): ${payload.counts.aliasedPaths}`,
    `- Missing paths: ${payload.counts.missingPaths}`,
    '',
    '## Missing paths (top 50)',
    ...payload.missingPaths.slice(0, 50).map((item) => `- ${item.path} -> suggested ${item.suggestedCanonical}`),
    '',
  ].join('\n');
  fs.writeFileSync(outputMdPath, md, 'utf8');

  // eslint-disable-next-line no-console
  console.log(`Inventory written to ${outputJsonPath} and ${outputMdPath}`);
  // eslint-disable-next-line no-console
  console.log(
    `Counts: zero=${payload.counts.zeroLinkPaths} existing=${payload.counts.linkableExistingPaths} aliased=${payload.counts.aliasedPaths} missing=${payload.counts.missingPaths}`,
  );
}

main();
