# Market report content standards

BioNixus programmatic (`/market-reports/{slug}`) and standalone country reports must keep **one primary country per page**. Cross-region references belong in optional benchmarking links or a clearly labelled expansion FAQ—not in body copy as if the page were about another market.

## Rules

1. **Regulators and payers** named in visible copy must match the page `marketSlug` (e.g. Turkey → TİTCK and SGK; not NUPCO or Hamad on Turkey oncology pages).
2. **Statistics** in executive summaries come from `spec.stats` in [`healthcareReportData.ts`](../../src/data/healthcareReportData.ts) or curated standalone figures—not invented tender or institution names from other countries.
3. **FAQ and access bullets** are built via [`healthcareReportFaqs.ts`](../../src/data/healthcareReportFaqs.ts) and [`healthcareReportAccessBullets.ts`](../../src/data/healthcareReportAccessBullets.ts), which use [`marketReportGeography.ts`](../../src/data/marketReportGeography.ts) for market-scoped services and procurement language.
4. **Therapy dynamics** on non-GCC pages use [`getTherapyMarketDynamics`](../../src/data/marketTherapyOverlays.ts) (clinical/global context), not GCC-only `menaMarketDynamics` blocks.
5. **Standalone pages** wrap FAQs with [`finalizeStandaloneHealthcareFaqs`](../../src/data/standaloneCountryReportContent.ts) / `finalizeStandaloneMedDeviceFaqs`: local BioNixus capability first; GCC/MENA expansion only as a separate FAQ on export-hub countries.
6. **Pharma insight entries** are localized on export via [`pharmaInsightCopy.ts`](../../src/data/pharmaInsightCopy.ts).

## Verification

```bash
npm run verify:content-accuracy
npm run verify:market-reports:geography
npm run verify:market-reports
```

See also [content-accuracy-standards.md](./content-accuracy-standards.md) for site-wide sourcing and chart rules.

Geography checks fail if forbidden tokens for a `marketSlug` appear in SSR-visible programmatic copy (FAQs, access bullets, summaries, methodology).

## Spot-check URLs after deploy

- Turkey oncology: `/market-reports/turkey-oncology-market-report`
- UK oncology: `/market-reports/uk-oncology-market-report`
- Saudi oncology: `/market-reports/saudi-arabia-oncology-market-report` (NUPCO/SFDA allowed)
- Germany diabetes: `/market-reports/germany-diabetes-market-report`
