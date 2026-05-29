/**
 * Ensures programmatic report entries expose sourced executive stats.
 * Run: npm run verify:sourced-claims
 */
import { loadModuleBundle, loadReportDataBundle } from './loadReportDataBundle.mjs';

let exitCode = 0;

try {
  const { REPORT_ENTRIES } = await loadReportDataBundle();
  const { allTherapyMarketFacts } = await loadModuleBundle('src/data/contentAccuracy/factRegistry.ts');

  const facts = allTherapyMarketFacts();
  const missingFacts = [];
  for (const fact of facts) {
    if (!fact.marketSize2026.source || !fact.forecast2030.source || !fact.cagr.source) {
      missingFacts.push(`${fact.marketSlug}:${fact.therapySlug}`);
    }
  }

  const entryIssues = [];
  for (const report of REPORT_ENTRIES) {
    if (!report.stat1Source || !report.stat2Source || !report.stat3Source) {
      entryIssues.push({ slug: report.slug, issue: 'missing stat source fields' });
    }
    if (!report.sourceNotes?.length) {
      entryIssues.push({ slug: report.slug, issue: 'empty sourceNotes' });
    }
  }

  console.log(`Registry facts: ${facts.length}`);
  console.log(`Report entries: ${REPORT_ENTRIES.length}`);

  if (missingFacts.length) {
    exitCode = 1;
    console.error(`\nFacts missing source (${missingFacts.length}):`);
    missingFacts.slice(0, 10).forEach((k) => console.error(`  ${k}`));
  }

  if (entryIssues.length) {
    exitCode = 1;
    console.error(`\nEntry source issues (${entryIssues.length}):`);
    entryIssues.slice(0, 10).forEach((r) => console.error(`  ${r.slug}: ${r.issue}`));
  }

  if (exitCode === 0) {
    console.log('\nSourced-claims verification passed.');
  }
} catch (err) {
  console.error(err);
  exitCode = 1;
}

process.exit(exitCode);
