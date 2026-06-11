#!/usr/bin/env node
/**
 * Fails if programmatic report visible copy contains wrong-region tokens.
 * Run: npm run verify:market-reports:geography
 */
import { loadModuleBundle, loadReportDataBundle } from './loadReportDataBundle.mjs';

let exitCode = 0;

try {
  const { REPORT_ENTRIES } = await loadReportDataBundle();
  const { getAccessBullets } = await loadModuleBundle('src/data/healthcareReportAccessBullets.ts');
  const { findForbiddenGeographyTokens } = await loadModuleBundle(
    'src/data/marketReportGeography.ts',
  );

  const violations = [];

  for (const report of REPORT_ENTRIES) {
    const chunks = [
      report.summaryPara1,
      report.summaryPara2,
      report.marketAccessNotes,
      report.fieldIntelligenceParagraph,
      report.commercialOutlookParagraph,
      report.methodologyParagraph,
      ...report.faqs.flatMap((f) => [f.question, f.answer]),
      ...getAccessBullets(report),
    ].join('\n');

    const found = findForbiddenGeographyTokens(report.marketSlug, chunks);
    if (found.length) {
      violations.push({ slug: report.slug, marketSlug: report.marketSlug, tokens: found });
    }
  }

  console.log(`Geography check: ${REPORT_ENTRIES.length} reports`);

  if (violations.length) {
    exitCode = 1;
    console.error(`\nForbidden geography tokens (${violations.length}):`);
    for (const v of violations.slice(0, 15)) {
      console.error(`  ${v.slug} (${v.marketSlug}): ${v.tokens.join(', ')}`);
    }
  } else {
    console.log('Geography verification passed.');
  }
} catch (err) {
  console.error(err);
  exitCode = 1;
}

process.exit(exitCode);
