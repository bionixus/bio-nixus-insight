# BioNixus website audit — 2026-10-19

## GSC performance (week ending 2026-10-19)

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +6.3 (improved) |

Source: `data/gsc/current-week/*.csv` via `node scripts/gsc-weekly-report.mjs` → `reports/weekly-report-2026-10-19.md`.

### CTR diagnostics

- **US drag:** 34.9% of impressions, **0.12% CTR** (ex-US CTR 1.66%).
- **Desktop drag:** 80% of device impressions at **0.74% CTR** (mobile 2.63%).
- **Winning cluster:** `/pharmaceutical-companies-*` — 2.21% CTR, ~28k impressions/week.
- **Buyer-intent gap:** Page-1 queries `companies like iqvia` (pos ~3.1), `iqvia alternatives` (pos ~4.0) still **0% CTR** — `/iqvia-alternative` meta + LLM answer block + ItemList shipped 2026-10-18 (pending deploy).
- **Deep SERP dilution:** Pages pos >40 with ≥200 impr — 0.16% CTR (27.7k impr).

## Production crawl (BIO-450) — pre-deploy baseline

| Check | Result |
|-------|--------|
| URLs audited | 674 |
| HTTP 404 | **0** |
| Fetch errors | **0** |
| Thin (<2,000 SSR words) | **306** |

Artifact: `scripts/data/bio-450-thin-page-audit.json`, `docs/seo/bio-450-thin-page-inventory.csv`.

Near-threshold (gap &lt;50w): `/turkey-healthcare-market-report`, `/brazil-healthcare-market-report`, `/healthcare-market-research-italy`, `/pharmaceutical-companies-singapore` — content from 2026-10-18/19 branch; **re-crawl after deploy** to confirm PASS.

## Shipped this run (2026-10-19)

| URL / area | Action |
|------------|--------|
| Cherry-pick `ff3ac586` | Turkey/Brazil hospitals, Italy/Singapore/USA expansions, IQVIA LLM/CTR (from 2026-10-18 audit) |
| `/healthcare-market-research-usa` | +FAQ (GLP-1/biosimilar/IRA); `dateModified` 2026-10-19 |
| `/pharmaceutical-market-research-usa` | +specialty pharmacy / biosimilar section; `dateModified` 2026-10-19 |
| `/turkey-healthcare-market-report` | +COPD epidemiology row; `dateModified` 2026-10-19 |

## LLM / chat visibility

- Service and report pages: `GeoLLMAnswerBlock` + FAQ (`<details>`) + JSON-LD FAQPage/Service.
- `/iqvia-alternative`: explicit short answer for “companies like IQVIA”; ItemList competitors in JSON-LD (static `public/conf/iqvia-alternative.html` + SSR template).

## Errors

- **404:** none on sitemap crawl.
- **Fetch errors:** none.
- **SSR:** No indexable money page flagged as client-only in spot checks; continue BIO-450 post-deploy.

## Next sprint (priority order)

1. **Deploy** + `npm run indexnow:priority` for touched URLs.
2. **Re-crawl BIO-450** on production; confirm near-threshold URLs ≥2,000w.
3. **US CTR:** Title/meta experiments on high-impression US directory pages; desktop CWV (`npm run audit:desktop`).
4. **Thin backlog:** 300+ URLs — therapy spokes 1,800–1,900w and device reports with GSC impressions.

## DEPLOY CHECKLIST

- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/UsaPharmaceuticalMarketResearch.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/data/marketIntelligence/mena.ts`
- `src/data/marketIntelligence/americas.ts` (from 2026-10-18)
- `src/pages/BrazilHealthcareMarketReport.tsx` (from 2026-10-18)
- `src/pages/HealthcareMarketResearchItaly.tsx` (from 2026-10-18)
- `src/pages/SingaporePharmaCompanies.tsx` (from 2026-10-18)
- `public/conf/iqvia-alternative.html`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-10-19.md`
- `reports/weekly-report-2026-10-19.md` (generated)
