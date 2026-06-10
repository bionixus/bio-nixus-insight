# Market Reports Batch 01 Audit (First 20 URLs)

Audit mode only. No rewrite content included in this file.

## Batch Scope

First 20 URLs from the `/market-reports` cluster:

1. `https://www.bionixus.com/market-reports`
2. `https://www.bionixus.com/market-reports/therapy/oncology`
3. `https://www.bionixus.com/market-reports/therapy/diabetes-metabolic`
4. `https://www.bionixus.com/market-reports/therapy/cardiovascular`
5. `https://www.bionixus.com/market-reports/therapy/immunology-biologics`
6. `https://www.bionixus.com/market-reports/therapy/respiratory`
7. `https://www.bionixus.com/market-reports/therapy/rare-diseases`
8. `https://www.bionixus.com/market-reports/therapy/neurology-cns`
9. `https://www.bionixus.com/market-reports/therapy/biosimilars`
10. `https://www.bionixus.com/market-reports/therapy/digital-health`
11. `https://www.bionixus.com/market-reports/therapy/vaccines`
12. `https://www.bionixus.com/market-reports/therapy/dermatology`
13. `https://www.bionixus.com/market-reports/country/gcc`
14. `https://www.bionixus.com/market-reports/country/saudi-arabia`
15. `https://www.bionixus.com/market-reports/country/uae`
16. `https://www.bionixus.com/market-reports/country/kuwait`
17. `https://www.bionixus.com/market-reports/country/qatar`
18. `https://www.bionixus.com/market-reports/country/bahrain`
19. `https://www.bionixus.com/market-reports/country/oman`
20. `https://www.bionixus.com/market-reports/country/egypt`

## Template Coverage

- URL #1 uses `src/pages/HealthcareReportsHub.tsx`
- URLs #2-#12 use `src/pages/HealthcareReportsByTherapy.tsx`
- URLs #13-#20 use `src/pages/HealthcareReportsByCountry.tsx`

## Shared Findings (Batch-Level)

### 1) Schema type mismatch on hub/category pages (MAJOR)

- Hub and category pages currently emit `Article` JSON-LD.
- These pages function as navigational collections, not articles.
- Recommendation: use `CollectionPage` (or `WebPage`) plus `ItemList`.

Affected: #1-#20.

### 2) Therapy meta description overgeneralization (MAJOR)

- Therapy template description hardcodes "GCC, Egypt, and Turkey".
- Some therapies in this batch do not have all those market combinations.
- Risk: intent mismatch and factual overreach in SERP snippets.

Affected: #2-#12.

### 3) Country hub metadata may over-compress regulatory context (MINOR)

- Country template truncates `regulatoryBody` using split behavior.
- In some markets this may produce awkward or incomplete metadata phrasing.

Affected: #13-#20.

### 4) Hub intro readability density (MINOR)

- Hub hero/introduction uses very dense, jargon-heavy sentence construction.
- Good authority tone, but readability can improve for scanning behavior.

Affected: #1.

### 5) Internal linking: strong but uneven contextuality (MINOR)

- Link volume is high through grids and chips.
- Some links are list-driven rather than contextual in explanatory copy.
- Recommendation: add 1-2 in-paragraph contextual links in hub/category intros.

Affected: #1-#20.

## URL-Level Audit Verdict

- #1: MAJOR (schema type) + MINOR (readability/contextual linking)
- #2-#12: MAJOR (schema type + therapy meta overgeneralization)
- #13-#20: MAJOR (schema type) + MINOR (metadata phrasing refinement)

## Priority Rewrite Queue

1. `HealthcareReportsByTherapy.tsx` (impacts 11 URLs in this batch)
2. `HealthcareReportsByCountry.tsx` (impacts 8 URLs in this batch)
3. `HealthcareReportsHub.tsx` (single URL, high-visibility hub)

## Planned Fixes For Batch 01

1. Replace category `Article` schema with `CollectionPage` + `ItemList`.
2. Generate therapy meta descriptions dynamically from actual report coverage.
3. Refine country meta description assembly to avoid truncated phrasing.
4. Simplify hub intro paragraph density while preserving expert positioning.
5. Add contextual internal links in explanatory intro copy on hub/category pages.

## Phase 2 Implementation Status

Phase 2 rewrite has been implemented at template level.

### Updated templates

1. `src/pages/HealthcareReportsHub.tsx`
2. `src/pages/HealthcareReportsByTherapy.tsx`
3. `src/pages/HealthcareReportsByCountry.tsx`

### Implemented fixes

1. Replaced collection-page schema from `Article` to `CollectionPage` + `ItemList` for hub and category templates.
2. Replaced overgeneralized therapy metadata with dynamic coverage-driven descriptions based on actual report markets.
3. Refined country metadata phrasing using normalized regulatory summaries.
4. Rewrote hub intro copy for scan readability and clarity.
5. Added contextual in-paragraph internal links in hub, therapy, and country intro sections.

### Validation results

- Type/lint diagnostics: pass for updated files.
- Build status: pass (`npm run build`).

## Post-Phase-2 Verdict (Batch 01)

- #1: PASS (previous MAJOR/MINOR resolved)
- #2-#12: PASS (previous MAJOR resolved; metadata and schema corrected)
- #13-#20: PASS (previous MAJOR/MINOR resolved)

## Remaining recommendations (non-blocking)

1. Add localized intro variants per therapy/country template for deeper intent personalization.
2. Add analytics checkpoints for CTR and dwell-time impact by template.
3. Extend same rewrite pattern to report-detail template batch next.
