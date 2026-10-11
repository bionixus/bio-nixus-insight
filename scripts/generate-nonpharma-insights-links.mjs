/**
 * Slim index of non-pharma directory and country-ranking URLs.
 * The insights hub imports the generated TypeScript module so the page chunk
 * does not pull directory prose or listicle bodies.
 *
 * Run: node scripts/generate-nonpharma-insights-links.mjs
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const HEALTHCARE_ENTITIES = new Set([
  'pharmaceutical-companies',
  'medical-device-companies',
  'pharmaceutical-distributors',
  'pharmacy-chains',
  'hospital-groups',
  'biotech-companies',
  'cro-companies',
  'health-insurers',
]);

const ENTITY_INDUSTRY = {
  'fmcg-companies': 'fmcg',
  'retail-companies': 'retail',
  'real-estate-companies': 'real-estate',
  banks: 'financial-services',
  'automotive-distributors': 'automotive',
  'food-beverage-companies': 'food-beverage',
  'construction-companies': 'construction',
  'cosmetics-companies': 'cosmetics',
  'hotel-groups': 'hospitality',
  'logistics-companies': 'logistics',
  'manufacturing-companies': 'manufacturing',
};

const LEGACY_INDUSTRY_ENTITY = {
  fmcg: 'fmcg-companies',
  retail: 'retail-companies',
  'real-estate': 'real-estate-companies',
};

const CITY_GEOS = new Set(['dubai', 'abu-dhabi', 'riyadh', 'jeddah']);

/** Hand-written English ranking pages that are not data-driven general.en configs. */
const HANDWRITTEN_RANKINGS = [
  ['gcc', 'the GCC'],
  ['egypt', 'Egypt'],
  ['saudi-arabia', 'Saudi Arabia'],
  ['uae', 'the UAE'],
  ['dubai', 'Dubai'],
  ['abu-dhabi', 'Abu Dhabi'],
  ['riyadh', 'Riyadh'],
  ['brazil', 'Brazil'],
  ['argentina', 'Argentina'],
  ['australia', 'Australia'],
  ['canada', 'Canada'],
  ['india', 'India'],
  ['china', 'China'],
  ['denmark', 'Denmark'],
  ['france', 'France'],
  ['germany', 'Germany'],
  ['italy', 'Italy'],
  ['new-zealand', 'New Zealand'],
  ['south-korea', 'South Korea'],
  ['spain', 'Spain'],
  ['switzerland', 'Switzerland'],
  ['usa', 'the United States'],
  ['singapore', 'Singapore'],
  ['poland', 'Poland'],
  ['turkey', 'Turkey'],
  ['netherlands', 'the Netherlands'],
  ['sweden', 'Sweden'],
  ['ireland', 'Ireland'],
  ['malaysia', 'Malaysia'],
  ['japan', 'Japan'],
  ['uk', 'the United Kingdom'],
];

function read(rel) {
  return readFileSync(join(root, rel), 'utf8');
}

function parseBlocks(src) {
  const map = new Map();
  const re = /(?:^|\n)  '?([a-z0-9-]+)'?: \{([\s\S]*?)\n  \},/g;
  let match;
  while ((match = re.exec(src))) {
    map.set(match[1], match[2]);
  }
  return map;
}

function parseCountries() {
  const blocks = parseBlocks(read('src/data/companyDirectories/countries.ts'));
  const countries = new Map();
  for (const [slug, body] of blocks) {
    const name = body.match(/name: '([^']+)'/)?.[1];
    const display = body.match(/display: '([^']+)'/)?.[1];
    const region = body.match(/region: '([^']+)'/)?.[1];
    if (name && region) countries.set(slug, { name, display: display ?? name, region });
  }
  return countries;
}

function parseEntityLabels() {
  const blocks = parseBlocks(read('src/data/companyDirectories/entities.ts'));
  const labels = new Map();
  const hubs = [];
  for (const [slug, body] of blocks) {
    const labelPlural = body.match(/labelPlural: '([^']+)'/)?.[1];
    const hubPath = body.match(/hubPath: '([^']+)'/)?.[1];
    if (labelPlural) labels.set(slug, labelPlural);
    if (hubPath && !HEALTHCARE_ENTITIES.has(slug)) {
      hubs.push({
        href: hubPath,
        label: `${labelPlural} directory`,
        geo: '',
        directoryRegion: null,
        industrySlug: ENTITY_INDUSTRY[slug] ?? slug,
        kind: 'entity-hub',
      });
    }
  }
  return { labels, hubs };
}

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (entry.endsWith('.ts')) acc.push(full);
  }
  return acc;
}

function titlePlace(name) {
  return `in ${name}`;
}

/**
 * @returns {{
 *   directories: object[],
 *   rankings: object[],
 *   entityHubs: object[],
 * }}
 */
export function buildNonPharmaIndexedLinks() {
  const countries = parseCountries();
  const { labels, hubs } = parseEntityLabels();
  const directories = new Map();

  const pagesDir = join(root, 'src/data/companyDirectories/pages');
  for (const file of walk(pagesDir)) {
    const rel = file.slice(pagesDir.length + 1).replace(/\\/g, '/');
    const [entity, filename] = rel.split('/');
    if (!entity || !filename || filename === 'index.ts') continue;
    if (HEALTHCARE_ENTITIES.has(entity)) continue;
    if (!ENTITY_INDUSTRY[entity]) continue;
    const geo = filename.replace(/\.ts$/, '');
    const country = countries.get(geo);
    const labelPlural = labels.get(entity) ?? entity;
    const href = `/${entity}-${geo}`;
    directories.set(href, {
      href,
      label: `${labelPlural} ${titlePlace(country?.display ?? geo)}`,
      geo,
      directoryRegion: country?.region ?? null,
      industrySlug: ENTITY_INDUSTRY[entity],
      kind: 'directory',
    });
  }

  const legacySrc = read('src/data/industryCompanyDirectories.ts');
  const legacyRe = /finish\('([^']+)', '([^']+)'/g;
  let legacy;
  while ((legacy = legacyRe.exec(legacySrc))) {
    const industry = legacy[1];
    const geo = legacy[2];
    const entity = LEGACY_INDUSTRY_ENTITY[industry];
    if (!entity) continue;
    const country = countries.get(geo);
    const href = `/${industry}-companies-${geo}`;
    if (directories.has(href)) continue;
    directories.set(href, {
      href,
      label: `${labels.get(entity) ?? industry} ${titlePlace(country?.display ?? geo)}`,
      geo,
      directoryRegion: country?.region ?? null,
      industrySlug: ENTITY_INDUSTRY[entity],
      kind: 'directory',
    });
  }

  const rankings = new Map();
  const listicleDir = join(root, 'src/data/topCompanies');
  for (const file of walk(listicleDir)) {
    if (!file.endsWith('.general.en.ts')) continue;
    const src = readFileSync(file, 'utf8');
    const href = src.match(/slug:\s*'([^']+)'/)?.[1];
    const countryName = src.match(/\n  country:\s*'([^']+)'/)?.[1];
    const region = src.match(/\n  region:\s*'([^']+)'/)?.[1];
    const variant = src.match(/variant:\s*'([^']+)'/)?.[1];
    const lang = src.match(/\n  lang:\s*'([^']+)'/)?.[1];
    if (!href || variant !== 'general' || lang !== 'en') continue;
    if (/healthcare|pharma/i.test(href)) continue;
    const geo = href.match(/top-market-research-companies-(.+)-2026$/)?.[1] ?? '';
    const kind = CITY_GEOS.has(geo) ? 'city-list' : 'country-list';
    rankings.set(href, {
      href,
      label: `Market research companies in ${countryName ?? geo}`,
      geo,
      directoryRegion: region ?? null,
      kind,
    });
  }

  const routes = read('src/routes.tsx');
  for (const [geo, place] of HANDWRITTEN_RANKINGS) {
    const href = `/insights/top-market-research-companies-${geo}-2026`;
    if (rankings.has(href)) continue;
    const line = routes.split('\n').find((row) => row.includes(`path: '${href}'`));
    if (!line || line.includes('Navigate')) continue;
    const country = countries.get(geo);
    rankings.set(href, {
      href,
      label: `Market research companies in ${place}`,
      geo,
      directoryRegion: country?.region ?? null,
      kind: CITY_GEOS.has(geo) ? 'city-list' : 'country-list',
    });
  }

  const consumerHref = '/insights/top-consumer-insights-companies-ksa-2026';
  if (routes.includes(`path: '${consumerHref}'`)) {
    rankings.set(consumerHref, {
      href: consumerHref,
      label: 'Consumer insights companies in Saudi Arabia',
      geo: 'saudi-arabia',
      directoryRegion: 'gcc',
      industrySlug: 'fmcg',
      kind: 'country-list',
    });
  }

  const byHref = (a, b) => a.href.localeCompare(b.href);
  return {
    directories: [...directories.values()].sort(byHref),
    rankings: [...rankings.values()].sort(byHref),
    entityHubs: hubs.sort(byHref),
  };
}

function emitArray(name, rows) {
  const body = rows
    .map((row) => `  ${JSON.stringify(row)},`)
    .join('\n');
  return `export const ${name} = [\n${body}\n] as const;\n`;
}

function writeGenerated() {
  const data = buildNonPharmaIndexedLinks();
  const out = `/* eslint-disable */
/**
 * Generated by scripts/generate-nonpharma-insights-links.mjs
 * Do not edit by hand. Re-run the script after adding a non-pharma directory or ranking page.
 */
export type NonPharmaIndexedLink = {
  href: string;
  label: string;
  geo: string;
  directoryRegion: 'gcc' | 'mena' | 'africa' | 'europe' | 'northamerica' | 'latam' | 'apac' | null;
  industrySlug?: string;
  kind: 'directory' | 'entity-hub' | 'country-list' | 'city-list';
};

${emitArray('NON_PHARMA_DIRECTORY_LINKS', data.directories)}
${emitArray('NON_PHARMA_RANKING_LINKS', data.rankings)}
${emitArray('NON_PHARMA_ENTITY_HUBS', data.entityHubs)}
`;
  const target = join(root, 'src/data/nonPharmaInsightsLinks.generated.ts');
  writeFileSync(target, out);
  return {
    directories: data.directories.length,
    rankings: data.rankings.length,
    entityHubs: data.entityHubs.length,
    target,
  };
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isDirectRun) {
  const result = writeGenerated();
  console.log(
    `[nonpharma-insights-links] ${result.directories} directories, ${result.rankings} rankings, ${result.entityHubs} entity hubs → ${result.target}`,
  );
}
