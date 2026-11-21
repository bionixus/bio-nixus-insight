# Website SEO audit — 2026-11-17

**Branch:** `cursor/website-seo-content-audit-ab52`  
**Production crawl:** `SITE_AUDIT_BASE_URL=https://www.bionixus.com node scripts/audit-thin-pages-bio450.mjs`  
**GSC report:** `node scripts/gsc-weekly-report.mjs` → `reports/weekly-report-2026-11-17.md`

## Impressions & CTR (GSC, 7-day)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +6.3 (improved) |

**Structural CTR notes**

- US traffic: 34.9% of impressions at **0.12% CTR** — desktop-heavy mix (80% impr @ 0.74% CTR).
- Winning cluster: `/pharmaceutical-companies-*` at **2.21% CTR** (pos 6–12).
- Deep-SERP pages (pos >40, ≥200 impr): **0.16% CTR** — content depth + title/meta iteration still required.
- Page-1 underperformers: `fmcg` / `fmcg companies` (pos 4–6, CTR &lt;1.5%); IQVIA-comparison queries (`companies like iqvia`, `iqvia alternatives`) at pos 3–4 with **0% CTR** on current snippets.

## Crawl health

| Check | Count (678 URLs audited) |
|---|---|
| HTTP 200 | 678 |
| 404 | **0** |
| Fetch errors | **0** |
| Thin (&lt;2,000 SSR words) | **305** |

No new 404 routes. Remaining work is **thin-page backlog** on service, report, and hub URLs.

## High-impression thin pages (GSC × crawl)

| Path | GSC impr (week) | SSR words | Gap |
|---|---|---|---|
| `/brazil-healthcare-market-report` | 1,554 | 1,970 | 30 |
| `/india-medical-devices-market-report` | 1,143 | 1,696 | 304 |
| `/healthcare-market-statistics` | 956 | 1,652 | 348 |
| `/singapore-medical-devices-market-report` | 614 | 1,702 | 298 |

Additional strategic gaps (impressions moderate but strategic): `/healthcare-market-research-usa` (~1,800w), `/pharmaceutical-market-research-usa` (~1,796w), `/market-research-gcc` (~1,754w).

## Shipped this run (code)

1. **LLM / answer-first blocks:** `GeoLLMAnswerBlock` + decision prose on Brazil healthcare report, India medical devices report, healthcare market statistics.
2. **USA hubs:** Extra citable sections on `/healthcare-market-research-usa` and `/pharmaceutical-market-research-usa`; `dateModified` → 2026-11-17.
3. **GCC hub:** Two paragraphs clarifying healthcare GCC vs “global capability centre” and primary-research intent (`marketResearchCountryContent.ts`).
4. **CTR test:** `/iqvia-alternative` title/meta aligned to “companies like IQVIA” / global alternative intent (`ctr-seo-overrides.js`).
5. **Fix:** Broken `SEOHead` `canonical` attribute on Brazil healthcare report template.

## LLM / chat appearance checklist

- Answer-first blocks with FAQ + Service/Article JSON-LD on expanded pages.
- Explicit disambiguation on GCC hub (healthcare GCC ≠ offshore GCC capability centres).
- Statistics page: Dataset schema + “how to use” section for AI citation hygiene.
- IQVIA alternative snippet matches global competitor-intent queries.

## Next sprint (recommended)

1. **Deploy** this branch; IndexNow for touched URLs.
2. Continue thin backlog: Singapore/UK/Germany device reports, therapy hubs under `/healthcare-market-research/therapy/*`.
3. **FMCG CTR:** title/meta iteration on high-impression FMCG directory spokes (Kenya entered top-10 by clicks).
4. Upload fresh GSC export to `data/gsc/current-week/` when new week closes.
5. Re-crawl production after deploy; target **&lt;280** thin pages.

## DEPLOY CHECKLIST

- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/pages/HealthcareMarketStatistics.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/UsaPharmaceuticalMarketResearch.tsx`
- `src/data/marketResearchCountryContent.ts`
- `src/server/ctr-seo-overrides.js`
- `reports/weekly-report-2026-11-17.md`
- `reports/weekly-report-2026-11-17.data.json`
- `scripts/data/bio-450-thin-page-audit.json`
- `docs/seo/website-audit-2026-11-17.md`