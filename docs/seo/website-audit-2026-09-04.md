# BioNixus Website SEO Audit — 2026-09-04

**Branch:** `cursor/website-content-and-ranking-f206`  
**Production crawl:** 658 URLs audited · **356 thin** (<2,000 words) · **0** 404 · **0** HTTP errors  
**GSC week:** 4,448 impr/day · **0.75% CTR** · avg pos **25.8** (vs 4,785 impr / 0.77% / 28.4 prior week)

## Executive summary

| Check | Result | Action taken |
|---|---|---|
| 404 pages | **0** | None required |
| HTTP errors | **0** | None required |
| Thin pages (<2,000w) | **356** | P0 expansions shipped for 6 high-impression URLs (see below) |
| CTR vs 3% target | **0.75%** | CTR wave 11 title tests on IQVIA, GCC biologics, Japan general surgical |
| LLM discoverability | `llms.txt` current | Refreshed buyer links for biologics, Japan surgical, India devices |

## GSC performance vs targets

| Metric | This week | Target | Gap |
|---|---:|---:|---|
| Impressions/day | 4,448 | 15,000 | −10,552 |
| Clicks/day | 33 | 450 | −417 |
| CTR | 0.75% | 3.0% | −2.25 pp |
| Avg. position | 25.8 | 5.0 | +20.8 |

### CTR structural diagnostics

| Slice | CTR | Notes |
|---|---:|---|
| Site headline | 0.75% | Chart.csv average |
| Excl. United States | 1.08% | US = 33% impr @ **0.09% CTR** — largest drag |
| Mobile | 2.23% | 14% of device impressions |
| Desktop | 0.50% | 86% of device impressions |
| Pages pos >40 (≥200 impr) | 0.10% | Deep-SERP dilution |
| `/japan-medical-devices-market-report` | 0.08% @ pos 44 | 2,511 impr — content OK (4,089w); ranking problem |
| `/pharmaceutical-companies-*` cluster | 1.60% | Winning directory pattern |

## Page-1 queries with 0% CTR (priority snippet tests)

| Query | Pos | Impr | Landing page | CTR test (wave 11) |
|---|---:|---:|---|---|
| iqvia competitors | 6.3 | 36 | `/iqvia-alternative` | Title → "IQVIA **Competitors** & Alternatives: Top 10 Ranked (2026)" |
| gcc biologics market | 6.0 | 20 | `/gcc-pharmaceutical-market-research` | Title → "GCC Biologics Market 2026: Size, SFDA & NUPCO Access" |
| japan general surgical devices market | 4.6 | 25 | `/japan-general-surgical-devices-market` | Title + **+1,150w content expansion** |
| saudi arabia biosimilar market | 4.3 | 15 | `/biosimilar-market-entry-saudi-arabia` | Monitor — already ≥2,000w |
| pharmaceutical companies in kuwait | 5.4 | 14 | `/pharmaceutical-companies-kuwait` | Existing CTR override — monitor |

## Thin-page P0 expansions (this sprint)

| URL | Prod wc (pre) | GSC impr/wk | Change |
|---|---:|---:|---|
| `/japan-general-surgical-devices-market` | 850 | 94 (+ pos 4.6 query) | +calendar, market structure, 5 FAQs, CTR override |
| `/india-medical-devices-market-report` | 1,653 | 345 | +CDSCO device steps, hospitals, key companies, breadcrumb hub link |
| `/brazil-healthcare-market-report` | 1,926 | 1,070 | +3 FAQs (devices, CONITEC/CMED, private cities) |
| `/saudi-arabia-biologics-market` | 1,987 | query-led | +2 FAQs (GCC biologics sizing, NUPCO GCC pricing) |
| `/pharmaceutical-companies-iran` | 1,951 | 882 | +2 FAQs (biosimilar leaders, MENA compare) |
| `/gcc-pharmaceutical-market-research` | 2,025 | gcc biologics query | CTR title iterate only |

## Content already above threshold (no expansion needed)

- `/japan-medical-devices-market-report` — **4,089w** (ranking pos 44, not thin)
- `/gcc-market-access-guide` — **2,608w**
- `/iqvia-alternative` — **4,098w**
- `/healthcare-market-research` — **5,819w**

## LLM / AI citation checklist

- [x] `public/llms.txt` refreshed 2026-09-04 with Japan surgical + India devices links
- [x] GeoLLMAnswerBlock present on expanded segment pages via `SpecialtyMarketDemandPage`
- [x] FAQ schema on all expanded report pages
- [ ] Re-ping IndexNow for expanded URLs post-deploy

## Next sprint queue

1. **Deploy** and re-run `node scripts/audit-thin-pages-bio450.mjs` (target thin count <350 from 356)
2. **USA CTR** — `/insights/top-healthcare-market-research-companies-usa-2026` at 527 impr / 0.57% CTR / pos 28
3. **Batch services/** thin URLs (~210 remaining in `/services/*` cluster)
4. **Fresh GSC export** week ending 2026-09-11 — measure wave 11 CTR tests
5. **Deep-SERP pages** — japan devices (pos 44), gcc access guide (pos 42): internal links + backlinks, not more on-page words

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/marketIntelligence/asiaPacific.ts`
- `src/data/segmentMarkets/saudiBiotech.ts`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `public/llms.txt`
- `docs/seo/website-audit-2026-09-04.md`
- `reports/weekly-report-2026-09-04.md`
