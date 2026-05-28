/**
 * Verifies word counts for programmatic /market-reports pages (SSR-visible copy).
 * Run: npm run verify:market-reports
 */
import { createServer } from 'vite';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const MIN_WORDS = 2000;

function wc(s) {
  return String(s)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function stripMd(s) {
  return String(s).replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

function inRange(n, min, max) {
  return n >= min && n <= max;
}

/** Hero, breadcrumbs, hub links, executive-summary bridge (not stored on ReportEntry). */
const TEMPLATE_CHROME_WC = 175;

const server = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true },
});

let exitCode = 0;

try {
  const { REPORT_ENTRIES } = await server.ssrLoadModule('/src/data/healthcareReportData.ts');
  const { getAccessBullets } = await server.ssrLoadModule(
    '/src/data/healthcareReportAccessBullets.ts',
  );
  const { THERAPY_AREA_CONTENT, MARKET_CONTENT } = await server.ssrLoadModule(
    '/src/data/healthcareReportContent.ts',
  );

  let minTotal = Infinity;
  let maxTotal = 0;
  const under = [];
  const summaryViolations = [];
  const faqViolations = [];

  for (const report of REPORT_ENTRIES) {
    const therapy = THERAPY_AREA_CONTENT[report.therapyAreaSlug];
    const market = MARKET_CONTENT[report.marketSlug];
    if (!therapy || !market) {
      console.error(`Missing content for ${report.slug}`);
      exitCode = 1;
      continue;
    }

    if (!inRange(wc(report.summaryPara1), 80, 120)) {
      summaryViolations.push({ slug: report.slug, field: 'summaryPara1', words: wc(report.summaryPara1) });
    }
    if (!inRange(wc(stripMd(report.summaryPara2)), 60, 90)) {
      summaryViolations.push({ slug: report.slug, field: 'summaryPara2', words: wc(stripMd(report.summaryPara2)) });
    }

    for (const faq of report.faqs) {
      const words = wc(faq.answer);
      if (!inRange(words, 100, 160)) {
        faqViolations.push({ slug: report.slug, question: faq.question.slice(0, 48), words });
      }
    }

    const visibleParts = [
      report.summaryPara1,
      stripMd(report.summaryPara2),
      report.fieldIntelligenceParagraph,
      report.commercialOutlookParagraph,
      report.methodologyParagraph,
      therapy.overviewParagraph,
      therapy.clinicalLandscape,
      therapy.menaMarketDynamics,
      market.regulatoryOverview,
      market.payerLandscape,
      market.marketContext,
      ...getAccessBullets(report),
      ...report.faqs.flatMap((f) => [f.question, f.answer]),
    ];

    const total = visibleParts.reduce((n, p) => n + wc(stripMd(p)), 0) + TEMPLATE_CHROME_WC;

    minTotal = Math.min(minTotal, total);
    maxTotal = Math.max(maxTotal, total);
    if (total < MIN_WORDS) under.push({ slug: report.slug, total });
  }

  console.log(`Reports checked: ${REPORT_ENTRIES.length}`);
  console.log(`Visible word range (incl. ~${TEMPLATE_CHROME_WC}w template chrome): ${minTotal}–${maxTotal}`);
  console.log(`Below ${MIN_WORDS} words: ${under.length}`);

  if (under.length) {
    exitCode = 1;
    console.log('\nUnder 2000 (sample):');
    for (const row of under.slice(0, 10)) {
      console.log(`  ${row.slug}: ~${row.total}`);
    }
  }

  if (summaryViolations.length) {
    exitCode = 1;
    console.log(`\nSummary range violations: ${summaryViolations.length}`);
    for (const v of summaryViolations.slice(0, 8)) {
      console.log(`  ${v.slug} ${v.field}: ${v.words} words`);
    }
  }

  if (faqViolations.length) {
    exitCode = 1;
    console.log(`\nFAQ answer range violations: ${faqViolations.length}`);
    for (const v of faqViolations.slice(0, 8)) {
      console.log(`  ${v.slug} (${v.words}w): ${v.question}…`);
    }
  }

  if (exitCode === 0) {
    console.log('\nVerification passed.');
  } else {
    console.error('\nVerification failed — adjust copy or ranges.');
  }
} catch (err) {
  console.error(err);
  exitCode = 1;
} finally {
  await server.close();
}

process.exit(exitCode);
