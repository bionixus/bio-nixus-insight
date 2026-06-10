#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const pagesDir = path.join(root, 'src/pages');

const FILE_TO_SLUG = {
  SaudiArabia: 'saudi-arabia',
  Uae: 'uae',
  Kuwait: 'kuwait',
  Qatar: 'qatar',
  Bahrain: 'bahrain',
  Oman: 'oman',
  Egypt: 'egypt',
  Uk: 'uk',
  Germany: 'germany',
  France: 'france',
  Italy: 'italy',
  Spain: 'spain',
  Usa: 'usa',
  Brazil: 'brazil',
  Canada: 'canada',
  India: 'india',
  China: 'china',
  Japan: 'japan',
  SouthKorea: 'south-korea',
  Australia: 'australia',
  Singapore: 'singapore',
  Turkey: 'turkey',
  Gcc: 'gcc',
};

const COUNTRY_DISPLAY = {
  'saudi-arabia': 'Saudi Arabia',
  uae: 'United Arab Emirates',
  kuwait: 'Kuwait',
  qatar: 'Qatar',
  bahrain: 'Bahrain',
  oman: 'Oman',
  egypt: 'Egypt',
  uk: 'United Kingdom',
  germany: 'Germany',
  france: 'France',
  italy: 'Italy',
  spain: 'Spain',
  usa: 'United States',
  brazil: 'Brazil',
  canada: 'Canada',
  india: 'India',
  china: 'China',
  japan: 'Japan',
  'south-korea': 'South Korea',
  australia: 'Australia',
  singapore: 'Singapore',
  turkey: 'Turkey',
  gcc: 'GCC',
};

function resolveSlug(filename) {
  for (const [prefix, slug] of Object.entries(FILE_TO_SLUG)) {
    if (filename.startsWith(prefix)) return slug;
  }
  return null;
}

function ensureImport(content) {
  const imports = [];
  if (!content.includes("from '@/components/market-intelligence'")) {
    imports.push(
      "import { MarketIntelligenceSections } from '@/components/market-intelligence';",
    );
  }
  if (!content.includes("from '@/lib/reportEnrichmentSchemas'")) {
    imports.push(
      "import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';",
    );
  }
  if (imports.length === 0) return content;
  const lines = content.split('\n');
  let lastImport = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImport = i;
  }
  lines.splice(lastImport + 1, 0, ...imports);
  return lines.join('\n');
}

function injectSections(content, slug, countryName, variant) {
  const marker = `<MarketIntelligenceSections marketSlug="${slug}"`;
  if (content.includes(marker)) return content;

  const block = `
        <MarketIntelligenceSections marketSlug="${slug}" countryName="${countryName}" variant="${variant}" />
`;

  const patterns = [
    /(\s*<\/section>\s*\n\s*<section className="[^"]*" id="therapy-areas")/,
    /(\s*<\/section>\s*\n\s*<section className="[^"]*" id="market-segments")/,
    /(\s*<\/section>\s*\n\s*<section className="[^"]*" id="device-segments")/,
    /(\s*<\/section>\s*\n\s*<section className="section-padding" id="therapy-areas")/,
    /(\s*<ReportMidPageCta[^/]*\/>\s*\n\s*<\/div>\s*\n\s*<\/section>\s*\n)(\s*<section)/,
  ];

  for (const pattern of patterns) {
    if (pattern.test(content)) {
      return content.replace(pattern, `$1${block}$2`);
    }
  }

  const execClose =
    /(\s*<\/section>\s*\n)(\s*<section className="[^"]*" id="(?!executive-summary)[^"]*")/;
  if (execClose.test(content)) {
    return content.replace(execClose, `$1${block}$2`);
  }

  return content;
}

function injectJsonLd(content, slug, countryName) {
  if (content.includes('buildReportEnrichmentSchemas')) {
    if (content.includes('...buildReportEnrichmentSchemas')) return content;
  }

  const titleMatch = content.match(/title="([^"]+)"/);
  const descMatch = content.match(/description="([^"]+)"/);
  const publishedMatch = content.match(/datePublished:\s*'([^']+)'/);
  const modifiedMatch = content.match(/dateModified:\s*'([^']+)'/);

  const pageTitle = titleMatch?.[1] ?? `${countryName} market report`;
  const pageMetaDescription = descMatch?.[1] ?? `${countryName} healthcare market report`;
  const publishedDate = publishedMatch?.[1] ?? '2026-05-27';
  const modifiedDate = modifiedMatch?.[1] ?? publishedDate;

  const enrichmentCall = `...buildReportEnrichmentSchemas({
    pageTitle: ${JSON.stringify(pageTitle)},
    pageMetaDescription: ${JSON.stringify(pageMetaDescription)},
    countryName: ${JSON.stringify(countryName)},
    marketSlug: ${JSON.stringify(slug)},
    publishedDate: ${JSON.stringify(publishedDate)},
    modifiedDate: ${JSON.stringify(modifiedDate)},
  })`;

  if (content.includes('const jsonLd = [')) {
    return content.replace(
      /jsonLd=\{jsonLd\}/,
      `jsonLd={[...jsonLd, ${enrichmentCall}]}`,
    ).replace(
      /const jsonLd = \[/,
      `const jsonLd = [`,
    ).replace(
      /(const jsonLd = \[[\s\S]*?)(\n\];)/,
      (full, head, tail) => {
        if (head.includes('buildReportEnrichmentSchemas')) return full;
        return `${head},\n  ${enrichmentCall}${tail}`;
      },
    );
  }

  return content.replace(
    /(const jsonLd = \[[\s\S]*?)(\n\];)/,
    `$1,\n  ${enrichmentCall}$2`,
  );
}

function processFile(filePath) {
  const base = path.basename(filePath);
  if (!base.includes('MarketReport') && !base.includes('Gcc')) return false;
  if (!base.endsWith('.tsx')) return false;

  const slug = resolveSlug(base.replace(/\.tsx$/, ''));
  if (!slug) return false;

  const countryName = COUNTRY_DISPLAY[slug];
  if (!countryName) return false;

  const variant = base.includes('MedicalDevices') ? 'medical-devices' : 'healthcare';
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = ensureImport(content);
  content = injectSections(content, slug, countryName, variant);
  content = injectJsonLd(content, slug, countryName);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

const targets = fs
  .readdirSync(pagesDir)
  .filter(
    (f) =>
      (f.endsWith('HealthcareMarketReport.tsx') ||
        f.endsWith('MedicalDevicesMarketReport.tsx') ||
        f === 'GccPharmaMarketReport2026.tsx' ||
        f === 'GccMedicalDevicesMarketReport.tsx' ||
        f === 'GccAnesthesiaSurgicalMarket.tsx') &&
      !f.startsWith('.'),
  )
  .map((f) => path.join(pagesDir, f));

let updated = 0;
for (const file of targets) {
  if (processFile(file)) {
    updated += 1;
    console.log('Updated', path.basename(file));
  }
}

console.log(`Done. ${updated} files updated.`);
