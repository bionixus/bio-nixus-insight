#!/usr/bin/env node
/**
 * Prebuild gate: every internal link target hard-coded in src/ must resolve to
 * a registered route, a generated route, or a legacy-redirect source. Fails
 * (exit 1) listing any target that would land on the NotFound catch-all.
 *
 * Scanned link forms: to="/..." | to={'/...'} | to={`/...`} | href="/..."
 * (including escaped href=\"/...\" inside HTML-string blog/data bodies).
 * Targets containing template expressions (${...}) are skipped — they cannot
 * be validated statically.
 *
 * Run: npm run verify:links
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectRegisteredRoutes, isRoutablePath } from './lib/registered-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'src');

/** Functional/non-page URL prefixes that are not react-router routes. */
const IGNORED_PREFIXES = ['/api/', '/cdn-cgi/', '/assets/', '/fonts/', '/images/', '/img/', '/lovable-uploads/'];

/** File-like targets (sitemap.xml, rss.xml, .pdf, images) served statically, not routed. */
function looksLikeStaticFile(pathname) {
  const last = pathname.split('/').pop() ?? '';
  return last.includes('.');
}

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(tsx?|jsx?|mjs)$/.test(entry.name) && !/\.(test|spec)\./.test(entry.name)) yield full;
  }
}

const LINK_PATTERNS = [
  // JSX prop string literals: to="/x" to='/x' href="/x" href='/x'
  /\b(?:to|href)=(?:"(\/[^"\s]*)"|'(\/[^'\s]*)')/g,
  // JSX prop expressions: to={'/x'} to={"/x"} to={`/x`}
  /\b(?:to|href)=\{(?:'(\/[^']*)'|"(\/[^"]*)"|`(\/[^`]*)`)\}/g,
  // Escaped hrefs inside TS/JS string HTML bodies: href=\"/x\"
  /href=\\"(\/[^\\"]*)\\"/g,
  // Object/JSON link data: to: '/x' | "to":"/x" | href: '/x' | path: "/x"
  /["']?(?:to|href)["']?\s*:\s*(?:"(\/[^"\s]*)"|'(\/[^'\s]*)')/g,
];

function extractTargets(content) {
  const targets = new Set();
  for (const re of LINK_PATTERNS) {
    re.lastIndex = 0;
    for (const m of content.matchAll(re)) {
      const raw = m.slice(1).find((g) => typeof g === 'string');
      if (raw != null) targets.add(raw);
    }
  }
  return targets;
}

function normalizeTarget(raw) {
  if (raw.includes('${')) return null; // dynamic template — not statically checkable
  let p = raw.split('#')[0].split('?')[0];
  if (!p.startsWith('/') || p.startsWith('//')) return null;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  if (p === '' || p === '/') return null;
  if (IGNORED_PREFIXES.some((prefix) => p.startsWith(prefix))) return null;
  if (looksLikeStaticFile(p)) return null;
  try {
    p = p
      .split('/')
      .map((seg) => {
        if (!seg) return '';
        try {
          return decodeURIComponent(seg);
        } catch {
          return seg;
        }
      })
      .join('/');
  } catch {
    /* keep as-is */
  }
  return p;
}

async function main() {
  const routeSet = await collectRegisteredRoutes();
  /** @type {Map<string, Set<string>>} target -> files */
  const unknown = new Map();
  let scannedFiles = 0;
  let checkedTargets = 0;

  for (const file of walk(srcDir)) {
    const content = fs.readFileSync(file, 'utf8');
    scannedFiles += 1;
    for (const raw of extractTargets(content)) {
      const target = normalizeTarget(raw);
      if (!target) continue;
      checkedTargets += 1;
      if (!isRoutablePath(target, routeSet)) {
        if (!unknown.has(target)) unknown.set(target, new Set());
        unknown.get(target).add(path.relative(root, file));
      }
    }
  }

  console.log(
    `[audit-internal-links] scanned ${scannedFiles} files, checked ${checkedTargets} link targets against ${routeSet.staticPaths.size} static routes + ${routeSet.dynamicPatterns.length} dynamic patterns + ${Object.keys(routeSet.legacyRedirects).length} legacy redirects.`,
  );

  if (unknown.size > 0) {
    console.error(`\n[audit-internal-links] FAIL — ${unknown.size} link target(s) resolve to no route:\n`);
    const sorted = [...unknown.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    for (const [target, files] of sorted) {
      console.error(`  ${target}`);
      for (const f of [...files].sort()) console.error(`      ← ${f}`);
    }
    console.error('\nFix the link target, register the route, or add a legacy redirect.');
    process.exit(1);
  }

  console.log('[audit-internal-links] OK — every internal link target resolves to a route.');
}

await main();
