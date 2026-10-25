# Website SEO audit — 2026-10-25

**GSC week:** `reports/weekly-report-2026-10-25.md`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` (674 URLs, 0 errors, 0×404)

## Headline metrics vs targets

| Metric | This week | Target | Gap |
|---|---:|---:|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | 1.13% | 3.0% | −1.87 pp |
| Avg. position | 19.5 | 5.0 | +14.5 |

**Week-on-week:** Impressions +137/day, clicks +19/day, CTR +0.38 pp, position improved ~6.3 points vs prior GSC export.

## CTR diagnostics (actions)

| Slice | CTR | Priority action |
|---|---:|---|
| United States only | 0.12% | Strengthen BOFU titles/meta on US money pages; answer-first blocks + FAQ schema (see `/healthcare-market-research-usa` update). Do **not** change live IQVIA comparison titles until GSC freeze ends (2026-12-12). |
| Excl. US | 1.66% | Continue GCC/EU content depth; directory cluster at 2.21% CTR is the model. |
| Desktop | 0.74% | Desktop LCP/INP budget; title tests on page-1 FMCG/directory queries. |
| Mobile | 2.63% | Protect mobile snippets; avoid truncating meta on long directory titles. |
| Insights listicles | 0.84% | Expand thin `/insights/*` listicles; ensure BioNixus ranks first in body copy. |
| Pages pos >40 (≥200 impr) | 0.16% | Rewrite or consolidate deep-SERP device-report URLs; refresh internal links from winning pharma-directory cluster. |

## Technical health

- **404:** 0 on audited service/landing set (674/674 live).
- **Crawl errors:** 0.
- **Thin pages (<2,000 SSR words):** 306 (target backlog <280 after deploy).
- **Healthcare-market-research thin:** 27 therapy/service subpages.

## LLM / chat appearance

- Therapy hubs missing long-form modules (`cardiovascular`, `neurology-cns`, `digital-health`, `dermatology`) expanded in this sprint with pathway sections + extra FAQs.
- GCC hub (`/market-research-gcc`) gained methodology + FAQ text aimed at answer engines.
- US money page documents syndicated-vs-primary split for AI citations.

## This sprint (code)

| URL / area | Change |
|---|---|
| `/healthcare-market-research/therapy/cardiovascular` | Pathway + modules + LLM section |
| `/healthcare-market-research/therapy/neurology-cns` | Pathway + modules |
| `/healthcare-market-research/therapy/digital-health` | Pathway + modules + FAQs |
| `/healthcare-market-research/therapy/dermatology` | Pathway + modules |
| `/turkey-healthcare-market-report`, `/brazil-healthcare-market-report` | Executive depth + `dateModified` |
| `/healthcare-market-research-usa` | US search/AI section + `dateModified` |
| `/healthcare-market-research-italy` | Syndicated vs primary section |
| `/market-research-gcc` | Methodology + FAQ |
| `/ru/services` | Extra FAQ |

## Next sprint

1. Deploy; `npm run indexnow:priority` on changed URLs.
2. Re-run `audit-thin-pages-bio450.mjs` — target **<280** thin pages.
3. Batch-expand remaining near-threshold reports (gap <100 words) and HMR country landings with largest GSC impressions.
4. Directory matrix: waves 1–5 still fail 14-day indexation gate — strengthen hub→spoke links before publishing wave 6.

## DEPLOY CHECKLIST

- `src/pages/healthcare-research/TherapyPage.tsx`
- `src/data/seo/therapyExpandedPageContent.ts`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `src/data/marketResearchCountryContent.ts`
- `src/data/servicesHubContent.ru.ts`
- `reports/weekly-report-2026-10-25.md`
- `docs/seo/website-audit-2026-10-25.md`
