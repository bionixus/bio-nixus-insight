#!/usr/bin/env node
/**
 * Upgrades standalone healthcare / medical-devices report heroes to ReportPremiumHero.
 * Run: node scripts/integrate-report-premium-hero.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(
  (f) =>
    (f.endsWith('HealthcareMarketReport.tsx') || f.endsWith('MedicalDevicesMarketReport.tsx')) &&
    f !== 'HealthcareReportPage.tsx',
);

const MARKET_SLUG_FROM_FILE = {
  SaudiArabia: 'saudi-arabia',
  Uae: 'uae',
  Kuwait: 'kuwait',
  Qatar: 'qatar',
  Bahrain: 'bahrain',
  Oman: 'oman',
  Egypt: 'egypt',
  Turkey: 'turkey',
  Germany: 'germany',
  France: 'france',
  Uk: 'uk',
  Italy: 'italy',
  Spain: 'spain',
  Usa: 'usa',
  Canada: 'canada',
  Brazil: 'brazil',
  China: 'china',
  India: 'india',
  Japan: 'japan',
  SouthKorea: 'south-korea',
  Australia: 'australia',
  Singapore: 'singapore',
  Gcc: 'gcc',
};

function inferMarketSlug(filename) {
  const base = filename.replace(/(Healthcare|MedicalDevices)MarketReport\.tsx$/, '');
  if (MARKET_SLUG_FROM_FILE[base]) return MARKET_SLUG_FROM_FILE[base];
  return base.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function inferCountryName(content, marketSlug) {
  const h1 = content.match(/<h1[^>]*>\s*([\s\S]*?)<\/h1>/);
  if (h1) {
    const text = h1[1].replace(/<[^>]+>/g, '').trim();
    const m = text.match(/^([A-Za-z][A-Za-z\s&]+?)\s+(Healthcare|Medical Devices|GCC)/);
    if (m) return m[1].trim();
  }
  if (marketSlug === 'gcc') return 'GCC';
  if (marketSlug === 'uae') return 'UAE';
  if (marketSlug === 'usa') return 'USA';
  if (marketSlug === 'uk') return 'UK';
  return marketSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function findHeroSection(content) {
  const marker = '<section className="section-padding pb-10">';
  let idx = content.indexOf(marker);
  while (idx !== -1) {
    const end = content.indexOf('</section>', idx);
    if (end === -1) return null;
    const block = content.slice(idx, end + '</section>'.length);
    if (block.includes('<h1') && block.includes('max-w-4xl')) {
      return { start: idx, end: end + '</section>'.length, block };
    }
    idx = content.indexOf(marker, idx + 1);
  }
  return null;
}

function extractTitle(block) {
  const m = block.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return m[1].replace(/\s+/g, ' ').trim();
}

function extractDescription(block) {
  const afterH1 = block.split(/<\/h1>/)[1] ?? '';
  const pMatch = afterH1.match(/<p className="text-muted-foreground[^"]*">([\s\S]*?)<\/p>/);
  if (!pMatch) return null;
  return pMatch[1].replace(/\s+/g, ' ').trim();
}

function extractStats(content) {
  const stats = [];
  const statCardRe = /<StatCard\s+value="([^"]+)"\s+label="([^"]+)"\s*\/>/g;
  let m;
  while ((m = statCardRe.exec(content))) {
    stats.push({ value: m[1], label: m[2] });
    if (stats.length >= 3) break;
  }
  if (stats.length >= 3) return stats.slice(0, 3);

  const gridRe =
    /<div>\s*<p className="text-3xl[^"]*">([^<]+)<\/p>\s*<p className="text-xs[^"]*">([^<]+)<\/p>\s*<\/div>/g;
  while ((m = gridRe.exec(content))) {
    stats.push({ value: m[1].trim(), label: m[2].trim() });
    if (stats.length >= 3) break;
  }
  return stats.slice(0, 3);
}

function ensureImport(content) {
  if (content.includes('ReportPremiumHero')) return content;
  const convImport = content.match(/from '@\/components\/report-conversion';/);
  if (convImport) {
    return content.replace(
      /from '@\/components\/report-conversion';/,
      `from '@/components/report-conversion';\nimport { ReportPremiumHero } from '@/components/report-premium';`,
    );
  }
  return `import { ReportPremiumHero } from '@/components/report-premium';\n${content}`;
}

function buildHeroReplacement({ title, description, marketSlug, countryName, stats, configName }) {
  const escapedTitle = title.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const escapedDesc = description.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const statsBlock =
    stats.length > 0
      ? `\n          stats={[\n${stats
          .map(
            (s) =>
              `            { value: '${s.value.replace(/'/g, "\\'")}', label: '${s.label.replace(/'/g, "\\'")}' },`,
          )
          .join('\n')}\n          ]}`
      : '';

  return `        <ReportPremiumHero
          title="${escapedTitle}"
          description="${escapedDesc}"
          config={${configName}}
          marketSlug="${marketSlug}"
          countryName="${countryName}"${statsBlock}
        />`;
}

function cleanupImports(content) {
  if (content.includes('ReportEarlyCtaBar')) return content;
  return content.replace(/,\s*\n?\s*ReportEarlyCtaBar/g, '');
}

let updated = 0;
for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('ReportPremiumHero')) continue;

  content = ensureImport(content);

  const hero = findHeroSection(content);
  if (!hero) {
    console.log(`skip (no hero): ${file}`);
    continue;
  }

  const title = extractTitle(hero.block);
  const description = extractDescription(hero.block);
  if (!title || !description) {
    console.log(`skip (parse): ${file}`);
    continue;
  }

  const configMatch = content.match(/const\s+(\w+)\s*=\s*getStandaloneReportConfig/);
  const configName = configMatch?.[1] ?? 'REPORT_CONVERSION';
  const marketSlug = inferMarketSlug(file);
  const countryName = inferCountryName(content, marketSlug);
  const stats = extractStats(content);

  const replacement = buildHeroReplacement({
    title,
    description,
    marketSlug,
    countryName,
    stats,
    configName,
  });

  content = content.slice(0, hero.start) + replacement + content.slice(hero.end);
  content = cleanupImports(content);

  fs.writeFileSync(filePath, content);
  updated += 1;
  console.log(`updated: ${file}`);
}

console.log(`Done. Updated ${updated} files.`);
