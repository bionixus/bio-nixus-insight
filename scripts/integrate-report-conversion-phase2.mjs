#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const pagesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages');

function slugFromPath(canonicalPath) {
  return canonicalPath.replace(/^\//, '').replace(/[^a-z0-9]+/g, '-');
}

function extractCanonical(content) {
  const m = content.match(/canonical="https:\/\/www\.bionixus\.com([^"]+)"/);
  return m ? m[1] : null;
}

function process(content, canonicalPath) {
  const progressId = `report-rp-${slugFromPath(canonicalPath)}`;
  let c = content;

  if (!c.includes('<ReportReadingProgress')) {
    if (/<SEOHead[\s\S]*?\/>/.test(c)) {
      c = c.replace(/(<SEOHead[\s\S]*?\/>)\s*/, `$1\n      <ReportReadingProgress progressId="${progressId}" />\n      `);
    } else {
      c = c.replace(/<Navbar \/>\s*/, `<Navbar />\n      <ReportReadingProgress progressId="${progressId}" />\n      `);
    }
  }

  if (!c.includes('<ReportEarlyCtaBar config')) {
    c = c.replace(
      /(<section className="section-padding pb-10">[\s\S]*?<\/p>)\s*(\n\s*<\/div>\s*\n\s*<\/section>)/,
      `$1\n            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />$2`,
    );
  }

  if (!c.includes('</ReportContentWithAside>')) {
    c = c.replace(
      /(\n\s*)(<section className="section-padding bg-cream-dark" id="executive-summary">)/,
      `$1<ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">\n        $2`,
    );
    c = c.replace(
      /(<FAQSection[\s\S]*?\/>\s*)(\n\s*<ReportConsultationBand)/,
      `$1        </ReportContentWithAside>$2`,
    );
  }

  if (!c.includes('<ReportMidPageCta')) {
    c = c.replace(
      /(id="executive-summary">)([\s\S]*?)(\n\s*<\/div>\s*\n\s*<\/section>)(\s*\n\s*(?:<section|FAQSection))/,
      (_, open, body, closeSec, after) => {
        if (body.includes('ReportMidPageCta')) return open + body + closeSec + after;
        return `${open}${body}\n            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />${closeSec}${after}`;
      },
    );
  }

  return c;
}

const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx'));
let n = 0;
for (const f of files) {
  const fp = path.join(pagesDir, f);
  let c = fs.readFileSync(fp, 'utf8');
  if (!c.includes('REPORT_CONVERSION')) continue;
  const pathCanon = extractCanonical(c);
  if (!pathCanon) continue;
  const next = process(c, pathCanon);
  if (next !== c) {
    fs.writeFileSync(fp, next);
    console.log('Phase2', f);
    n++;
  }
}
console.log('Updated', n);
