# Website SEO Audit — 2026-09-01

**Branch:** `cursor/website-content-and-ranking-e365`  
**Production crawl:** 618 pages audited, **319 thin** (<2,000 words), **0** 404s, **0** fetch errors  
**GSC week ending 2026-09-01:** 4,448 impr/day, **0.75% CTR**, pos **25.8** (vs 4,785 impr/day, 0.77% CTR, pos 28.4 prior week)

## Executive summary

| Metric | This week | Target | Gap |
|--------|-----------|--------|-----|
| Impressions/day | 4,448 | 15,000 | −70% |
| Clicks/day | 33 | 450 | −93% |
| CTR | 0.75% | 3.0% | −2.25pp |
| Avg position | 25.8 | 5.0 | +20.8 |

**Structural CTR drag:** USA = 33% impressions @ **0.09% CTR**. Excl. US = **1.08% CTR**. Mobile = **2.23% CTR** vs desktop **0.50%**.

**Winning cluster:** `/pharmaceutical-companies-*` = **1.60% CTR** @ 8,756 impressions.

**Zero-click page-1 queries (priority CTR wave 8):** iqvia competitors, cairo hospitals healthcare, gcc biologics market, japan general surgical devices, pharmaceutical companies in kuwait, nupco tender, saudi arabia biosimilar market.

## Errors found

| Issue | Severity | Status |
|-------|----------|--------|
| 404 pages in sitemap | — | **0 found** |
| Fetch errors | — | **0 found** |
| `/de/` and `/es/` return 301 (seo:check) | Minor | Known locale redirect pattern — not blocking |
| Thin pages (<2,000 words) | Major | **319** on production (down from 349 on 2026-08-31) |

## High-impression thin pages (GSC × crawl)

| Impressions | Words | Gap | Path | Action this run |
|------------:|------:|----:|------|-----------------|
| 1,337 | 1,935 | 65 | `/gcc-market-access-guide` | +3 FAQs, HTA paragraph, CTR override |
| 1,070 | 1,925 | 75 | `/brazil-healthcare-market-report` | +3 FAQs, executive summary, CTR override |
| 882 | 1,911 | 89 | `/pharmaceutical-companies-iran` | +2 FAQs, dateModified |
| 869 | 1,884 | 116 | `/pharmaceutical-companies-iraq` | +2 FAQs, dateModified |
| 345 | 1,652 | 348 | `/india-medical-devices-market-report` | Next sprint |
| 297 | 1,176 | 824 | `/services/market-access` | Next sprint (service cluster) |

## Changes this run

### Content expansion (thin → ≥2,000 target)

- `src/pages/GccMarketAccessGuide.tsx` — HTA evidence paragraph + 2 FAQs (MOHAP timeline, SFDA vs MOHAP)
- `src/pages/IranPharmaCompanies.tsx` — 2 FAQs (therapy areas, GCC comparison)
- `src/pages/IraqPharmaCompanies.tsx` — 2 FAQs (therapy demand, KIMADIA tenders)
- `src/pages/BrazilHealthcareMarketReport.tsx` — executive summary + 2 FAQs (2026 regulation, devices comparison)
- `src/data/developedMarketMedtechPages.ts` — near-threshold medtech (Brazil, Spain, Switzerland, Denmark, Malaysia)
- `src/data/servicesHubContent.ts` — 2 services hub FAQs (LLM visibility, minimum project size)
- `src/data/seo/therapyExpandedPageContent.ts` — 2 biosimilars FAQs (Saudi outlook, GCC biologics vs injectables)
- `src/data/seo/therapyMarketReferenceContent.ts` — biosimilars GCC/EU erosion paragraph
- `public/conf/bionixus-vs-iqvia-mena.html` — 4 FAQ blocks for AI/search citation

### CTR wave 8 (`lib/ctr-seo-overrides.mjs`)

- `/gcc-market-access-guide` — SFDA/MOHAP/NUPCO-focused title
- `/brazil-healthcare-market-report` — ANVISA/SUS/CONITEC title
- `/japan-general-surgical-devices-market` — new override
- `/insights/top-healthcare-market-research-companies-dubai-2026` — Dubai pharma query match
- `/gcc-pharma-market-report-2026` — Saudi biosimilar / GCC biologics query match
- `/blog/healthcare-overview-brazil-market-2026` — Brazil pharma news query match

## LLM / AI search visibility

- FAQ schema blocks added/expanded on IQVIA comparison static page
- Services hub FAQ addresses AI citation readiness
- Biosimilars therapy page expanded for "gcc biologics market" and "saudi arabia biosimilar market" queries
- Structured `<details>/<summary>` FAQ pattern maintained for accessibility

## Next sprint priorities

1. **Deploy** — post-deploy thin audit (target <310 from 319)
2. **Service cluster** — `/services/market-access` (1,176w), `/services/competitive-intelligence` (966w) — ~210 URLs remain thin
3. **USA CTR** — title/meta iteration on high-impression US pages (0.09% CTR drag)
4. **India devices report** — 345 impressions @ thin (1,652w)
5. `npm run indexnow:priority` after deploy
6. Fresh GSC export week ending 2026-09-08

## DEPLOY CHECKLIST

- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `src/pages/GccMarketAccessGuide.tsx`
- [ ] `src/pages/IranPharmaCompanies.tsx`
- [ ] `src/pages/IraqPharmaCompanies.tsx`
- [ ] `src/pages/BrazilHealthcareMarketReport.tsx`
- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `src/data/servicesHubContent.ts`
- [ ] `src/data/seo/therapyExpandedPageContent.ts`
- [ ] `src/data/seo/therapyMarketReferenceContent.ts`
- [ ] `public/conf/bionixus-vs-iqvia-mena.html`
- [ ] `docs/seo/website-audit-2026-09-01.md`
- [ ] `reports/weekly-report-2026-09-01.md`
