/**
 * Ensures programmatic report entries expose sourced executive stats
 * and contain no verbatim duplicate sentences in SSR-visible copy.
 * Run: npm run verify:sourced-claims
 */
import { loadModuleBundle, loadReportDataBundle } from './loadReportDataBundle.mjs';

let exitCode = 0;

try {
  const { REPORT_ENTRIES } = await loadReportDataBundle();
  const { allTherapyMarketFacts } = await loadModuleBundle('src/data/contentAccuracy/factRegistry.ts');
  const { findDuplicateSentences } = await loadModuleBundle('src/data/contentAccuracy/expandProse.ts');

  const facts = allTherapyMarketFacts();
  const missingFacts = [];
  for (const fact of facts) {
    if (!fact.marketSize2026.source || !fact.forecast2030.source || !fact.cagr.source) {
      missingFacts.push(`${fact.marketSlug}:${fact.therapySlug}`);
    }
  }

  const entryIssues = [];
  const duplicationIssues = [];

  const programmatic = REPORT_ENTRIES.filter((r) => r.slug.endsWith('-market-report'));

  for (const report of REPORT_ENTRIES) {
    if (!report.stat1Source || !report.stat2Source || !report.stat3Source) {
      entryIssues.push({ slug: report.slug, issue: 'missing stat source fields' });
    }
    if (!report.sourceNotes?.length) {
      entryIssues.push({ slug: report.slug, issue: 'empty sourceNotes' });
    }
  }

  for (const report of programmatic) {
    const fields = [
      ['summaryPara1', report.summaryPara1],
      ['summaryPara2', report.summaryPara2],
      ['fieldIntelligenceParagraph', report.fieldIntelligenceParagraph],
      ['commercialOutlookParagraph', report.commercialOutlookParagraph],
      ['methodologyParagraph', report.methodologyParagraph],
      ['marketAccessNotes', report.marketAccessNotes],
      ...report.faqs.map((f, i) => [`faq${i + 1}`, f.answer]),
    ];
    for (const [field, text] of fields) {
      const dupes = findDuplicateSentences(text ?? '');
      if (dupes.length) {
        duplicationIssues.push({
          slug: report.slug,
          field,
          sample: dupes[0]?.slice(0, 72),
        });
      }
    }
  }

  console.log(`Registry facts: ${facts.length}`);
  console.log(`Report entries: ${REPORT_ENTRIES.length}`);
  console.log(`Programmatic duplication scan: ${programmatic.length} reports`);

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

  if (duplicationIssues.length) {
    exitCode = 1;
    console.error(`\nVerbatim duplicate sentences (${duplicationIssues.length}):`);
    duplicationIssues.slice(0, 15).forEach((r) => {
      console.error(`  ${r.slug} [${r.field}]: "${r.sample}…"`);
    });
  }

  if (exitCode === 0) {
    console.log('\nSourced-claims verification passed.');
  }
} catch (err) {
  console.error(err);
  exitCode = 1;
}

process.exit(exitCode);
