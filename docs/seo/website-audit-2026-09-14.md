# Website SEO audit — 2026-09-14

## GSC performance (week ending 2026-09-14)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | 0.75% | 3.0% | −0.02pp |
| Avg. position | 25.8 | 5.0 | +2.6 (improved) |

**Structural CTR drag:** United States 33% of impressions @ 0.09% CTR; desktop 0.50% CTR vs mobile 2.23%. Deep-SERP pages (pos >40, ≥200 impr) dilute headline CTR.

**Winning cluster:** `/pharmaceutical-companies-*` @ 1.60% CTR (140 clicks / 8,756 impr).

**Deep-SERP drag:** `/japan-medical-devices-market-report` — 2,511 impr @ 0.08%, pos 44.3.

Full report: `reports/weekly-report-2026-09-14.md`.

## Production crawl (thin pages, 2000-word threshold)

| Check | Result |
|---|---|
| URLs audited | 657 |
| Thin pages | 347 |
| 404 | 0 |
| Fetch errors | 0 |
| Healthcare hub thin | 29 |

Near-threshold fixes shipped this run (medtech BOFU + content depth): Brazil, Spain, Switzerland, Denmark, Poland, Malaysia medtech pages; GCC FSP; GCC generics; febrile neutropenia; `/services` deep-dive section.

## CTR wave 20 (snippet tests)

- `/iqvia-alternative` — IQVIA competitors / companies like IQVIA
- `/heor-consulting` — HEOR consulting
- `/gcc-functional-service-providers-market` — GCC FSP market query
- `/febrile-neutropenia-market` — consolidated meta (deduped)

## LLM / AEO

- Expanded decision-oriented prose on thin specialty and services hub pages (FAQ + structure sections).
- Existing `geo-llm-answer` blocks on key landings unchanged; prioritize next on zero-click page-1 queries from weekly report.

## Next sprint

1. Continue batch uplift for ~300+ thin standalone landings (priority: `/services` locales, pharma country directories 50–150 word gap).
2. Japan / GCC device reports — title/meta iteration without URL changes.
3. Post-deploy production re-crawl and IndexNow for URLs touched this run.
4. Refresh GSC CSVs in `data/gsc/current-week/` before next cron.

## DEPLOY CHECKLIST

- `src/data/developedMarketMedtechPages.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/data/gccSegmentMarketContent.ts`
- `src/data/servicesHubContent.ts`
- `src/pages/Services.tsx`
- `lib/ctr-seo-overrides.mjs`
- `docs/seo/website-audit-2026-09-14.md`
- `reports/weekly-report-2026-09-14.md`
- `reports/weekly-report-2026-09-14.data.json`
