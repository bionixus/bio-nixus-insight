#!/usr/bin/env node
/**
 * Adds Kuwait-parity conversion components to standalone report pages.
 * Skips HealthcareReportPage, pharma guides, Methodology, and already-integrated files.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../src/pages');

const SKIP = new Set([
  'HealthcareReportPage.tsx',
  'HealthcareReportsHub.tsx',
  'HealthcareReportsByTherapy.tsx',
  'HealthcareReportsByCountry.tsx',
  'KuwaitPharmaCompanies.tsx',
  'Methodology.tsx',
]);

const CONVERSION_IMPORT = `import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
`;

const OLD_CTA_REGEX =
  /<section className="section-padding bg-primary\/5" id="contact-cta">[\s\S]*?<\/section>\s*/g;

function extractCanonical(content) {
  const m = content.match(/canonical="https:\/\/www\.bionixus\.com([^"]+)"/);
  return m ? m[1] : null;
}

function slugFromPath(canonicalPath) {
  return canonicalPath.replace(/^\//, '').replace(/[^a-z0-9]+/g, '-');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('id="contact-cta"')) return false;
  if (content.includes('ReportConsultationBand')) return false;

  const canonicalPath = extractCanonical(content);
  if (!canonicalPath) {
    console.warn('No canonical:', filePath);
    return false;
  }

  const progressId = `report-rp-${slugFromPath(canonicalPath)}`;

  if (!content.includes("from '@/data/reportConversionConfig'")) {
    const lucideIdx = content.indexOf("from 'lucide-react'");
    if (lucideIdx !== -1) {
      const lineEnd = content.indexOf('\n', lucideIdx);
      content = content.slice(0, lineEnd + 1) + CONVERSION_IMPORT + content.slice(lineEnd + 1);
    } else {
      const seoIdx = content.indexOf("from '@/components/seo/SEOHead'");
      const lineEnd = content.indexOf('\n', seoIdx);
      content = content.slice(0, lineEnd + 1) + CONVERSION_IMPORT + content.slice(lineEnd + 1);
    }
  }

  const configLine = `const REPORT_CONVERSION = getStandaloneReportConfig('${canonicalPath}');\n`;

  if (!content.includes('REPORT_CONVERSION')) {
    const faqMatch = content.match(/const FAQ_SECTION_ID = /);
    const jsonLdMatch = content.match(/const jsonLd = /);
    const insertAfter = faqMatch ?? jsonLdMatch;
    if (insertAfter) {
      const idx = content.indexOf(insertAfter[0]);
      const lineStart = content.lastIndexOf('\n', idx) + 1;
      content = content.slice(0, lineStart) + configLine + content.slice(lineStart);
    } else {
      const compMatch = content.match(/const \w+ = \(\) => \(/);
      if (compMatch) {
        const idx = content.indexOf(compMatch[0]);
        content = content.slice(0, idx) + configLine + content.slice(idx);
      }
    }
  }

  if (!content.includes('ReportReadingProgress')) {
    content = content.replace(/<Navbar \/>\s*/, `<Navbar />\n      <ReportReadingProgress progressId="${progressId}" />\n      `);
  }

  if (!content.includes('ReportEarlyCtaBar')) {
    content = content.replace(
      /(<section className="section-padding pb-10">[\s\S]*?<\/p>\s*)(\n\s*<\/div>\s*\n\s*<\/section>)/,
      `$1\n            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />$2`,
    );
  }

  if (!content.includes('ReportContentWithAside')) {
    content = content.replace(
      /(\n\s*)(<section className="section-padding bg-cream-dark" id="executive-summary">)/,
      `$1<ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto">\n        $2`,
    );
    content = content.replace(
      /(<FAQSection[\s\S]*?\/>)\s*(\n\s*<section className="section-padding bg-primary)/,
      `$1\n        </ReportContentWithAside>\n$2`,
    );
    if (!content.includes('</ReportContentWithAside>')) {
      content = content.replace(
        /(<FAQSection[\s\S]*?\/>)\s*(\n\s*<section className="section-padding bg-primary\/5" id="contact-cta">)/,
        `$1\n        </ReportContentWithAside>\n$2`,
      );
    }
  }

  if (!content.includes('ReportMidPageCta')) {
    content = content.replace(
      /(id="executive-summary">[\s\S]*?)(<\/div>\s*\n\s*<\/section>\s*\n\s*(?:<section|<\/ReportContentWithAside>))/,
      (match, head, tail) => {
        if (head.includes('ReportMidPageCta')) return match;
        return `${head}<ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />\n          </div>\n        </section>\n        ${tail.replace(/^\s*<\/div>\s*\n\s*<\/section>\s*\n\s*/, '')}`;
      },
    );
  }

  content = content.replace(OLD_CTA_REGEX, '<ReportConsultationBand config={REPORT_CONVERSION} />\n        ');

  if (content.includes('ArrowRight') && !content.match(/ArrowRight[^}]*contact/)) {
    // keep ArrowRight if still used
  }

  fs.writeFileSync(filePath, content);
  return true;
}

const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx') && !SKIP.has(f));
let updated = 0;
for (const f of files) {
  const fp = path.join(pagesDir, f);
  const c = fs.readFileSync(fp, 'utf8');
  if (!c.includes('id="contact-cta"') && !c.includes('MarketReport')) continue;
  if (!c.includes('HealthcareMarketReport') && !c.includes('MedicalDevicesMarketReport') && !c.includes('GccPharmaMarketReport') && !c.includes('GccAnesthesia')) continue;
  if (processFile(fp)) {
    console.log('Updated', f);
    updated++;
  }
}
console.log('Done. Updated', updated, 'files');
