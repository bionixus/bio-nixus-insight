#!/usr/bin/env node
/**
 * One-off: wrap standalone report FAQ arrays with finalizeStandalone* helpers.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = path.join(root, 'src', 'pages');

const SLUG_FROM_FILE = {
  TurkeyHealthcareMarketReport: 'turkey',
  TurkeyMedicalDevicesMarketReport: 'turkey',
  UsaHealthcareMarketReport: 'usa',
  UsaMedicalDevicesMarketReport: 'usa',
  // ... map all
};

function slugFromFilename(name) {
  const base = name.replace(/(Healthcare|MedicalDevices)MarketReport\.tsx$/, '');
  const known = {
    SaudiArabia: 'saudi-arabia',
    SouthKorea: 'south-korea',
    Uae: 'uae',
    Uk: 'uk',
    Usa: 'usa',
    Gcc: 'gcc',
  };
  if (known[base]) return known[base];
  return base.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function patchFile(filePath, kind) {
  let src = fs.readFileSync(filePath, 'utf8');
  if (src.includes('finalizeStandaloneHealthcareFaqs') || src.includes('finalizeStandaloneMedDeviceFaqs')) {
    return false;
  }
  const fn = kind === 'healthcare' ? 'finalizeStandaloneHealthcareFaqs' : 'finalizeStandaloneMedDeviceFaqs';
  const slug = slugFromFilename(path.basename(filePath));

  if (!src.includes('const REPORT_FAQ_ITEMS = [')) return false;

  if (!src.includes("from '@/data/standaloneCountryReportContent'")) {
    src = src.replace(
      /from '@\/components\/report-premium';/,
      `from '@/components/report-premium';\nimport { ${fn} } from '@/data/standaloneCountryReportContent';`,
    );
  }

  src = src.replace(
    /const REPORT_FAQ_ITEMS = (\[[\s\S]*?\n\]);/,
    `const REPORT_FAQ_ITEMS = ${fn}($1, '${slug}');`,
  );

  fs.writeFileSync(filePath, src);
  return true;
}

let n = 0;
for (const name of fs.readdirSync(pagesDir)) {
  if (name.endsWith('HealthcareMarketReport.tsx')) {
    if (patchFile(path.join(pagesDir, name), 'healthcare')) n += 1;
  }
  if (name.endsWith('MedicalDevicesMarketReport.tsx')) {
    if (patchFile(path.join(pagesDir, name), 'meddevice')) n += 1;
  }
}
console.log(`Patched ${n} standalone report files`);
