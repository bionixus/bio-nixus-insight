#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const pagesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/pages');

const FILE_TO_KEY = {
  UaePharmaCompanies: 'uae',
  EgyptPharmaCompanies: 'egypt',
  QatarPharmaCompanies: 'qatar',
  OmanPharmaCompanies: 'oman',
  BahrainPharmaCompanies: 'bahrain',
  IraqPharmaCompanies: 'iraq',
  IranPharmaCompanies: 'iran',
};

const IMPORTS = `import { getPharmaGuideConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
`;

const FINAL_CTA =
  /<section className="section-padding py-16 bg-primary text-primary-foreground">[\s\S]*?<\/section>\s*(?=\s*<\/main>)/;

for (const [base, countryKey] of Object.entries(FILE_TO_KEY)) {
  const fp = path.join(pagesDir, `${base}.tsx`);
  let c = fs.readFileSync(fp, 'utf8');
  if (c.includes('PHARMA_CONVERSION')) continue;

  const compName = base;
  if (!c.includes("import OpenGraphMeta")) continue;

  c = c.replace(
    "import OpenGraphMeta from '@/components/OpenGraphMeta';",
    `import OpenGraphMeta from '@/components/OpenGraphMeta';\n${IMPORTS}\nconst PHARMA_CONVERSION = getPharmaGuideConfig('${countryKey}');`,
  );

  c = c.replace(/<Navbar \/>\s*/, `<Navbar />\n      <ReportReadingProgress progressId="pharma-guide-rp-${countryKey}" />\n      `);

  c = c.replace(
    /(<div className="mt-8 p-5 bg-muted\/50[\s\S]*?<\/div><\/div><\/div>)\s*(<\/div><\/section>)/,
    `$1\n          <ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mt-8" />$2`,
  );

  c = c.replace(
    /(\n\s*)(<section className="section-padding py-12 bg-primary text-primary-foreground">)/,
    `$1<ReportContentWithAside config={PHARMA_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto">\n        $2`,
  );

  c = c.replace(
    /(<section className="section-padding py-16 bg-muted\/30" id="top-companies">[\s\S]*?<\/div><\/section>)/,
    `$1\n\n        <ReportMidPageCta config={PHARMA_CONVERSION} />`,
  );

  c = c.replace(
    /(<section className="section-padding py-12" id="methodology">[\s\S]*?<\/section>)\s*(?=\s*<section className="section-padding py-16 bg-primary)/,
    `$1\n        </ReportContentWithAside>\n\n        `,
  );

  c = c.replace(FINAL_CTA, '<ReportConsultationBand config={PHARMA_CONVERSION} />\n        ');

  fs.writeFileSync(fp, c);
  console.log('Updated', base);
}

// Kuwait: consultation band + early CTA only (keep custom layout)
const kuwaitFp = path.join(pagesDir, 'KuwaitPharmaCompanies.tsx');
let k = fs.readFileSync(kuwaitFp, 'utf8');
if (!k.includes('PHARMA_CONVERSION')) {
  k = k.replace(
    "import OpenGraphMeta from '@/components/OpenGraphMeta';",
    `import OpenGraphMeta from '@/components/OpenGraphMeta';\n${IMPORTS}\nconst PHARMA_CONVERSION = getPharmaGuideConfig('kuwait');`,
  );
  k = k.replace(
    '<div id="kuwait-pharma-guide-rp" className="blog-reading-progress" style={{ width: \'0%\' }} />',
    '<ReportReadingProgress progressId="kuwait-pharma-guide-rp" />',
  );
  k = k.replace(/\s*useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);\s*/, '\n');
  k = k.replace(
    `              <div className="mb-10 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold rounded-md transition-all hover:-translate-y-0.5 shadow-md"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                >
                  Schedule a Kuwait research briefing
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
                </Link>
                <a
                  href="mailto:admin@bionixus.com?subject=Kuwait%20pharma%20market%20research%20%E2%80%94%20BioNixus"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-md border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
                >
                  Email BioNixus market research
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  Explore services catalogue
                </Link>
              </div>`,
    '<ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mb-10" />',
  );
  k = k.replace(
    /        <section className="py-16 md:py-20 px-6 relative overflow-hidden" style=\{\{ background: 'linear-gradient\(135deg, hsl\(var\(--navy-deep\)\) 0%, hsl\(var\(--navy-medium\)\) 100%'\) \}\}>[\s\S]*?<\/section>\s*(?=\s*<\/main>)/,
    '        <ReportConsultationBand config={PHARMA_CONVERSION} />\n',
  );
  if (k.includes("import { useEffect } from 'react';") && !k.includes('useEffect(')) {
    k = k.replace("import { useEffect } from 'react';\n", '');
  }
  fs.writeFileSync(kuwaitFp, k);
  console.log('Updated KuwaitPharmaCompanies');
}
