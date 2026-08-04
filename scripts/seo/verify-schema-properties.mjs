/**
 * Checks JSON-LD nodes for properties that are not valid on their @type.
 *
 * The Aug 2026 crawl flagged 148 pages with schema.org validation errors; 127 of
 * them carried a ProfessionalService node that mixed Service-only properties
 * (serviceType, provider) with LocalBusiness-only ones (priceRange). A node can
 * only carry properties whose domain includes its type or one of its ancestors.
 *
 * Usage: node scripts/seo/verify-schema-properties.mjs <url> [url...]
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const vocabulary = JSON.parse(
  readFileSync(join(root, 'scripts/data/schemaorg-vocabulary.json'), 'utf8'),
);

/** Every ancestor of a type, including itself. */
function ancestorsOf(type, seen = new Set()) {
  if (seen.has(type)) return seen;
  seen.add(type);
  for (const parent of vocabulary.parents[type] ?? []) ancestorsOf(parent, seen);
  return seen;
}

/**
 * JSON-LD keywords, plus `query-input`, which Google requires on SearchAction for
 * the sitelinks searchbox even though schema.org does not define it.
 */
const IGNORED = new Set([
  '@context',
  '@type',
  '@id',
  '@graph',
  '@value',
  '@language',
  'query-input',
]);

export function* walk(node, path = '$') {
  if (Array.isArray(node)) {
    for (const [i, entry] of node.entries()) yield* walk(entry, `${path}[${i}]`);
    return;
  }
  if (!node || typeof node !== 'object') return;
  if (node['@type']) yield [node, path];
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('@')) continue;
    yield* walk(value, `${path}.${key}`);
  }
}

export function checkNode(node, path, issues) {
  const types = [node['@type']].flat().filter((t) => typeof t === 'string');
  if (types.length === 0) return;

  const allowed = new Set();
  for (const type of types) for (const ancestor of ancestorsOf(type)) allowed.add(ancestor);

  // An unknown type means a typo or a non-schema.org vocabulary; flag it once.
  for (const type of types) {
    if (!vocabulary.parents[type]) issues.push(`unknown @type "${type}" at ${path}`);
  }

  for (const key of Object.keys(node)) {
    if (IGNORED.has(key)) continue;
    const domains = vocabulary.properties[key];
    if (!domains) {
      issues.push(`unknown property "${key}" on ${types.join('/')} at ${path}`);
      continue;
    }
    if (!domains.some((domain) => allowed.has(domain))) {
      issues.push(
        `"${key}" is not valid on ${types.join('/')} at ${path} — valid on: ${domains.join(', ')}`,
      );
    }
  }
}

async function validateUrl(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'Googlebot' } });
  const html = await response.text();
  const blocks = [
    ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ];
  const issues = [];

  if (!response.ok) issues.push(`HTTP ${response.status}`);

  // A page with no JSON-LD must fail rather than report clean. Otherwise an auth
  // wall or an error page silently passes, which is worse than no check at all.
  if (blocks.length === 0) {
    const blocked = /vercel\.com\/login|sso-api|Authentication Required/i.test(html);
    issues.push(
      blocked
        ? 'no JSON-LD found — response is a deployment-protection login page, not the site'
        : 'no JSON-LD found on the page',
    );
    return { url, issues };
  }
  for (const [, raw] of blocks) {
    let doc;
    try {
      doc = JSON.parse(raw);
    } catch (error) {
      issues.push(`invalid JSON: ${error.message}`);
      continue;
    }
    for (const [node, path] of walk(doc)) checkNode(node, path, issues);
  }
  return { url, issues: [...new Set(issues)] };
}

const isCli = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
const urls = isCli ? process.argv.slice(2) : [];
let failed = 0;
for (const url of urls) {
  const { issues } = await validateUrl(url);
  const label = url.replace(/^https?:\/\/[^/]+/, '') || '/';
  if (issues.length === 0) {
    console.log(`OK    ${label}`);
  } else {
    failed += 1;
    console.log(`FAIL  ${label}`);
    for (const issue of issues) console.log(`        - ${issue}`);
  }
}
if (isCli) {
  console.log(`\n${urls.length - failed}/${urls.length} pages clean.`);
  if (failed > 0) process.exit(1);
}
