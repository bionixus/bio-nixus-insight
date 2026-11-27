# Website audit — 2026-11-27 (cron)

## GSC snapshot (data/gsc/current-week)

| Metric | This week | Target | WoW |
|--------|-----------|--------|-----|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +19 |
| CTR | 1.13% | 3.0% | +0.38pp |
| Avg position | 19.5 | 5.0 | +6.3 (closer to #1) |

**Structural CTR notes**

- United States: 34.9% of impressions at **0.12% CTR** — primary desktop drag.
- Mobile CTR **2.63%** vs desktop **0.74%** — snippet/title alignment priority on desktop landing pages.
- Winning cluster: `/pharmaceutical-companies-*` at **2.21% CTR**.
- Page-1 underperformers: `fmcg`, `fmcg companies`, `pharmaceutical companies in dubai`, `companies like iqvia` — meta tests shipped this sprint (see below).

Report: `reports/weekly-report-2026-11-27.md`.

## Production crawl (scripts/audit-thin-pages-bio450.mjs)

| Check | Count |
|-------|------:|
| URLs audited | 678 |
| Thin (<2,000 words) | **305** |
| 404 | **0** |
| Errors | **0** |
| Thin `/healthcare-market-research/*` | 27 |

Down from 347 thin pages (2026-09-28 snapshot). No sitemap 404s in scope.

## Actions this run

1. **Near-threshold reports:** Turkey and Brazil healthcare reports — added substantive FAQs; `dateModified` → 2026-11-27.
2. **GCC BOFU:** `/market-research-gcc` — two LLM-oriented FAQs + methodology paragraph (~250 words).
3. **UAE pharma BOFU:** `/uae-pharmaceutical-market-research` — Dubai pharma + EDE 2026 FAQs (targets zero-CTR GSC queries).
4. **USA hub:** `/healthcare-market-research-usa` — IRA + US CTR diagnostic FAQs.
5. **RU services:** `/ru/services` — two Russian FAQs (~200 words).
6. **Therapy thin pages:** Expanded FAQs for neurology-CNS, digital health, dermatology.
7. **CTR overrides:** `/iqvia-alternative`, `/fmcg-companies-uae` titles/descriptions in `ctr-seo-overrides.js`.

## Next sprint (remaining ~305 thin)

1. Therapy hubs still 107–302 words below threshold — consider additional `therapyMarketReferenceContent` tails.
2. Locale insights (`/ar/insights/*`, `/pt/insights/*`) — batch 4.
3. `/ru/services` post-deploy word-count verify (target ≥2,000).
4. US desktop snippet tests on top 20 page-1 queries from weekly report.
5. Refresh GSC export in `data/gsc/current-week/` when new Search Console data is available.

## LLM / chat appearance

- FAQ + Article `dateModified` updated on expanded BOFU pages.
- GCC page adds explicit disambiguation FAQ (Gulf vs Global Capability Centres).
- IQVIA alternative title now matches “companies like IQVIA” query intent.