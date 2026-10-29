# BioNixus website audit — 2026-10-29

## Google Search Console (7-day export in repo)

| Metric | This week | Target | vs target |
|--------|-----------|--------|-----------|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | 1.13% | 3.0% | −1.87 pp |
| Avg. position | 19.5 | 5.0 | +14.5 vs #1 |

**Week-on-week:** impressions +137/day, clicks +19/day, CTR +0.37 pp, position improved ~6.3 points vs last week.

**Structural CTR diagnostics**

- United States: 34.9% of impressions at **0.12% CTR** — largest single-country drag.
- Desktop: 80% of device impressions at **0.74% CTR**; mobile **2.63%** CTR.
- Pages with position >40 (≥200 impr): **0.16% CTR** on 27.7k impressions.
- Winning cluster: `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks / 28k impr).
- IQVIA-intent queries (`companies like iqvia`, `looking for something better than iqvia`, `iqvia alternatives`) rank page 1–4 with **0% CTR** — title/meta freeze until 2026-12-12; expand body + LLM blocks only.

Full tables: `reports/weekly-report-2026-10-29.md`.

## Production crawl (thin pages, 2,000-word threshold)

| Check | Result |
|-------|--------|
| URLs audited | 711 |
| Thin (<2,000 words) | **330** (was 332 on 2026-10-28) |
| 404 | **0** |
| Thin by cluster | standalone 280, healthcare-MR 27, ar-localized 23 |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`.

## Actions shipped this run

1. **Healthcare MR country depth** — supplemental SSR sections for Netherlands, Spain, Canada, Sweden, Poland, Turkey, USA (`healthcareMrCountryDepthContent.ts` + `HealthcareMrCountryDepthSections`).
2. **Therapy hub depth** — expanded FAQs/content for thin `/healthcare-market-research/therapy/*` spokes (dermatology, neurology-CNS, digital-health, cardiovascular).
3. **GSC-demand specialty pages** — expanded copy + FAQs + `dateModified` for febrile neutropenia, Japan medical disposables, GCC medication management, Italy portable diagnostics.
4. **Brazil healthcare MR** — programme-design section + hub cross-links (near-threshold page).
5. **Turkey healthcare report** — `dateModified` refresh for schema/sitemap alignment.
6. **Weekly report** — `reports/weekly-report-2026-10-29.md`.

## LLM / chat visibility

- Country and specialty pages retain **GeoLLMAnswerBlock** or **FAQ JSON-LD** with direct answers (best provider, scope, timelines).
- IQVIA cluster: body expansion on Saudi complement page data; global `/iqvia-alternative` already >4k words — no title change per freeze.

## Post-deploy checklist

- [ ] `npm run build` + deploy
- [ ] `npm run indexnow:priority` (IQVIA body, country MR, specialty expansions)
- [ ] Re-run `node scripts/bio-449-thin-page-audit.mjs` — target **<300** thin after deploy
- [ ] Monitor US CTR slice and page-1 zero-CTR IQVIA queries in GSC

## Local SSR word-count verification (2026-10-29)

| URL | Main-body words |
|-----|-----------------|
| `/febrile-neutropenia-market` | 2003 ✓ |
| `/healthcare-market-research-poland` | 2002 ✓ |
| `/healthcare-market-research-spain` | 2028 ✓ |
| `/healthcare-market-research-usa` | 2039 ✓ |
| `/brazil-healthcare-market-research` | 2035 ✓ |
| `/japan-medical-disposables-market` | 1538 (expanded; next sprint) |
| `/gcc-medication-management-market` | ~1441 (expanded; next sprint) |
| `/italy-portable-diagnostic-devices-market` | ~1324 (expanded; next sprint) |

Artifact: `/opt/cursor/artifacts/ssr-wordcount-verification-2026-10-29.txt`

## DEPLOY CHECKLIST (files touched)

- `src/data/seo/healthcareMrCountryDepthContent.ts`
- `src/components/seo/HealthcareMrCountryDepthSections.tsx`
- `src/pages/HealthcareMarketResearch{Canada,Netherlands,Poland,Spain,Sweden,Turkey,Usa}.tsx`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketResearch.tsx`
- `src/data/specialtyMarketDemandContent.ts`
- `reports/weekly-report-2026-10-29.md`
- `docs/seo/website-audit-2026-10-29.md`
- `docs/seo/bio-449-thin-page-inventory.csv` (baseline crawl)
- `scripts/data/bio-449-thin-page-audit.json`
