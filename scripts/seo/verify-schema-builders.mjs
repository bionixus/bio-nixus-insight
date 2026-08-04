/**
 * Offline guard: validates the sitewide JSON-LD builders against the schema.org
 * vocabulary, so a property can never be attached to a type that does not accept it.
 *
 * This is the regression guard for the Aug 2026 crawl finding where a
 * ProfessionalService node carried Service-only properties (serviceType, provider)
 * and an Organization node carried the CreativeWork-only property inLanguage.
 *
 * Companion to verify-schema-properties.mjs, which checks live URLs post-deploy.
 */
import { build } from 'esbuild';
import { readFileSync } from 'fs';
import { collectSourceFiles } from './source-files.mjs';
import { tmpdir } from 'os';
import { join, dirname, relative } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { walk, checkNode } from './verify-schema-properties.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

/** Start index of the object literal enclosing `index`, or -1. */
function objectStart(source, index) {
  let depth = 0;
  for (let i = index; i >= 0; i -= 1) {
    const char = source[i];
    if (char === '}') depth += 1;
    else if (char === '{') {
      if (depth === 0) return i;
      depth -= 1;
    }
  }
  return -1;
}

/** End index of the object literal opened at `start`, or -1. */
function objectEnd(source, start) {
  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/** Keys declared directly on the object body, ignoring nested objects and arrays. */
function topLevelKeys(body) {
  const keys = [];
  let depth = 0;
  let buffer = '';
  for (const char of body) {
    if (char === '{' || char === '[') depth += 1;
    else if (char === '}' || char === ']') depth -= 1;
    else if (depth === 0 && char === ':') {
      const match = buffer.match(/(?:'([^']+)'|([A-Za-z@][A-Za-z0-9@_-]*))\s*$/);
      if (match) keys.push(match[1] ?? match[2]);
    }
    buffer = depth === 0 && char !== ',' ? buffer + char : '';
  }
  return keys;
}

/**
 * Scans inline JSON-LD object literals in source. The builders cover sitewide
 * nodes, but most pages declare their own literals, which is where the
 * inLanguage-on-Service and priceRange-on-Offer errors lived.
 */
function scanSourceLiterals() {
  const files = [...collectSourceFiles(join(root, 'src'))];

  const failures = [];
  let scanned = 0;

  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    if (!source.includes("'@type'")) continue;
    for (const match of source.matchAll(/'@type':\s*'([A-Za-z]+)'/g)) {
      const start = objectStart(source, match.index);
      if (start < 0) continue;
      const end = objectEnd(source, start);
      if (end < 0) continue;

      const node = { '@type': match[1] };
      for (const key of topLevelKeys(source.slice(start + 1, end))) {
        if (key !== '@type') node[key] = 1;
      }

      const issues = [];
      checkNode(node, '$', issues);
      // Source literals may hold spread expressions and computed keys, so an
      // unrecognised key is not reliable evidence of a bug here.
      const real = issues.filter((issue) => !issue.startsWith('unknown property'));
      scanned += 1;
      if (real.length > 0) {
        const line = source.slice(0, match.index).split('\n').length;
        failures.push(`${relative(root, file)}:${line} [${match[1]}] ${real.join('; ')}`);
      }
    }
  }
  return { scanned, failures };
}

async function load(entry) {
  const outfile = join(tmpdir(), `schema-guard-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`);
  await build({
    entryPoints: [join(root, entry)],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile,
    alias: { '@': join(root, 'src') },
    logLevel: 'silent',
  });
  return import(pathToFileURL(outfile).href);
}

const [schemas, homeJsonLd] = await Promise.all([
  load('src/lib/seo/schemas.ts'),
  load('src/lib/homePageJsonLd.ts'),
]);

const cases = [
  ['buildProfessionalServiceSchema', schemas.buildProfessionalServiceSchema()],
  ['buildOrganizationSchema', schemas.buildOrganizationSchema()],
  ['buildHomeServiceJsonLdNodes', homeJsonLd.buildHomeServiceJsonLdNodes('en')],
];

let failed = 0;
for (const [name, value] of cases) {
  const issues = [];
  for (const [node, path] of walk(value)) checkNode(node, path, issues);
  const unique = [...new Set(issues)];
  if (unique.length === 0) {
    console.log(`OK    ${name}`);
    continue;
  }
  failed += 1;
  console.log(`FAIL  ${name}`);
  for (const issue of unique) console.log(`        - ${issue}`);
}

const { scanned, failures } = scanSourceLiterals();
for (const failure of failures) console.log(`FAIL  ${failure}`);

if (failed > 0 || failures.length > 0) {
  console.error(
    `\n${failed} builder(s) and ${failures.length} inline literal(s) emit properties invalid for their @type.`,
  );
  process.exit(1);
}
console.log(`\nSchema properties OK: ${cases.length} builders, ${scanned} inline nodes.`);
