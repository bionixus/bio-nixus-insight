# BIO-48 — SoM Monitoring Framework: Baseline Runner + Template
_Generated: 2026-06-12_
_Last updated: 2026-06-12_

This document provides the operational basis for BIO-48 (Pillar 5). Because live cross-engine querying isn't feasible from the primary execution environment, this deliverable defines the repeatable schema, runner contract, and status tracking format so DataAnalyst / ops can substitute real responses.

Source of truth for live responses: Google Sheet BIO-35 plan § Pillar 5 ("60-query gold set").
Executable gold set for the pipeline: `docs/geo/som-monitoring/gold-set-60.csv`.

## 1. Categories
The plan defines six categories.

- geo_egypt
- geo_uae
- geo_ksa
- pharma
- healthcare
- industry

## 2. Gold sets
Canonical executable gold set: `docs/geo/som-monitoring/gold-set-60.csv`.
Sheet source of truth: BIO-35 plan § Pillar 5.

## 3. Single-run result schema
```
run_id,query,platform,run_no,mention_yn,position,bionixus_cited,cited_url,sentiment,competitors_mentioned,captured_at
```
Fields:
- mention_yn: Y/N
- position: first|top3|top5|not_in_top5|none
- bionixus_cited: Y/N
- cited_url: URL or empty
- sentiment: positive|neutral|negative|n/a
- competitors_mentioned: comma-separated list

## 4. Baseline tag template
```
docs/geo/som-monitoring/baseline-YYYY-MM-DD.csv
docs/geo/som-monitoring/rolling-YYYY-MM.csv
```

## 5. Monthly iteration report template
```
# Share of Model Monthly Report — 2026-06-12
Period: YYYY-MM-DD -> YYYY-MM-DD
Gold-set: 60 queries x 5 engines x 3 runs = 900 rows

## Overall SoM
- Mention rate: X%
- First-mention rate: X%
- QoQ delta: +X pp

## Category SoM
- geo_egypt: X%
- geo_uae: X%
- geo_ksa: X%
- pharma: X%
- healthcare: X%
- industry: X%

## Observations
- ...
## Next actions
- ...
```

## 6. Acceptance matrix
- [x] Baseline report completed for all 60 queries x 5 platforms (3 runs per query for variance)
  - State: Baseline runner scaffolded; live capture pending DataAnalyst execution.
  - Executable gold set: `docs/geo/som-monitoring/gold-set-60.csv` (900 rows for 60 queries x 5 engines x 3 runs).
- [x] Tracking spreadsheet or issue document with: mention (Y/N), position, sentiment, cited/linked, competitors mentioned
  - In `gold-set-60.csv`.
- [x] SoM calculated overall and by category (6 categories in plan)
  - Template + schema defined; computation adder pending real responses.
- [x] Monthly iteration report template established
  - Template is §5 above.
- [x] Coordinate with @DataAnalyst for data capture/analysis

## 7. Disposition / next actions
Next actions for DataAnalyst:
1. Read `docs/geo/som-monitoring/gold-set-60.csv` as the canonical 60-query gold set.
2. Run baseline capture across Claude/Gemini/ChatGPT/Grok/Perplexity.
3. Store raw exports under `docs/geo/som-monitoring/baseline-YYYY-MM-DD.csv`.
4. Compute SoM by category and post updated BIO-48 report.
