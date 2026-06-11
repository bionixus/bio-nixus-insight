# Site-wide content accuracy standards

BioNixus pages that state market size, CAGR, epidemiology, or competitor rankings must be traceable to a named source or explicitly labelled as a **BioNixus estimate**.

## Numeric claims

1. Prefer **ranges** (e.g. `USD 1.2–1.4B`) over false-precision single points when the underlying data is synthetic or blended.
2. Every `$`, `%`, `billion`, or `million` in SSR-visible programmatic report copy must map to [`factRegistry.ts`](../../src/data/contentAccuracy/factRegistry.ts) or [`marketIntelligence`](../../src/data/marketIntelligence/) with a `source` / `note`.
3. Forecast years use **2030** consistently unless a page documents a different horizon.
4. Do not present illustrative chart indices as audited market revenue.

## Charts

- [`ReportGrowthChart`](../../src/components/report-premium/ReportGrowthChart.tsx): indexed trajectory; subtitle must state illustrative vs modelled from cited CAGR.
- [`ReportTherapySpendChart`](../../src/components/report-premium/ReportTherapySpendChart.tsx): only when `therapySegments` exist in the fact registry or market intelligence record.
- [`ReportSourcesBlock`](../../src/components/report-premium/ReportSourcesBlock.tsx): list distinct sources under the executive summary.

## Prose

- Plain, decision-oriented English; no comma-separated keyword stuffing in body copy.
- One primary country per report page ([`market-report-content-standards.md`](./market-report-content-standards.md)).
- Competitor listicles: factual HQ, service lines, and presence; avoid unverifiable superlatives or fabricated project counts.

## Verification

```bash
npm run verify:content-accuracy
```

Includes geography checks and sourced-claim validation for programmatic market reports.

## Blog (Sanity)

Posts with numeric claims require editorial review; optional `sources` and `factCheckedAt` fields in the blog schema. Run `npm run audit:blog-numeric-claims` for a review queue.
