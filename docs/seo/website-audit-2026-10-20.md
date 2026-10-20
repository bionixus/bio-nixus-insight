# Website SEO audit — 2026-10-20

## Google Search Console (7-day window in `data/gsc/current-week/`)

| Metric | This week | Target | vs prior week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137/day |
| Clicks/day | 52 | 450 | +18/day |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | improved vs 25.8 |

**Structural CTR notes**

- United States: 34.9% of impressions at **0.12% CTR** — largest country-level drag.
- Mobile CTR **2.63%** vs desktop **0.74%** — desktop CWV and snippet work remain priority.
- Winning cluster: `/pharmaceutical-companies-*` at **2.21% CTR** (27,999 impr).
- Device-report drag: Japan + GCC medical-devices reports still dilute mix when included.

Full narrative: `reports/weekly-report-2026-10-20.md`.

## Production crawl (BIO-450, 2026-10-20)

| Check | Result |
|---|---|
| URLs audited | 674 |
| HTTP errors | 0 |
| 404 | 0 |
| Thin (&lt;2,000 SSR words) | 306 |
| Healthcare hub thin spokes | 27 |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`, `scripts/data/bio-450-thin-page-audit.json`.

## Shipped this run (branch `cursor/website-content-and-ranking-06db`)

| URL | GSC signal | Action | Local SSR words (post-fix) |
|---|---|---|---|
| `/singapore-ivd-market-access` | 145 impr, 0% CTR, pos 12.7 | Expanded to full specialty template depth (signals, calendar, FAQs); `dateModified` 2026-10-20 | **2,012** |
| `/healthcare-market-research-singapore` | 110 impr, thin | IVD/access section + internal links | **2,000** |
| `/healthcare-market-research-usa` | US CTR drag | MENA bridge section for US→GCC briefs; schema `dateModified` | **2,028** |
| `/turkey-healthcare-market-report` | 190 impr, thin | Related-intelligence links to Turkey MR hub + listicle | **2,002** |
| `/brazil-healthcare-market-report` | 1,554 impr, thin | Related-intelligence links to Brazil MR hub + listicle | **2,011** |

## LLM / chat visibility

- Expanded answer-ready copy on Singapore IVD (exact-query H1 retained) with `<details>` FAQ schema.
- US page clarifies when US teams need Middle East primary evidence (feeds AI citation for cross-border briefs).
- No URL changes; sitemap `lastmod` updated for `/singapore-ivd-market-access`.

## Next sprint

1. Deploy; `npm run indexnow:priority` for URLs above.
2. Re-crawl production BIO-450; target next thin money pages: `/pharmaceutical-market-research-usa`, `/healthcare-market-research-japan`, `/market-research-gcc`.
3. US snippet tests on page-1 zero-CTR queries (`looking for something better than iqvia`, `pharmaceutical companies in dubai`).
4. Refresh GSC CSV exports (current files still cover the Aug–Sep export batch).

## Deploy checklist

- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/HealthcareMarketResearchSingapore.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/TopMarketResearchCompaniesSingapore2026.tsx`
- `src/pages/SingaporeHealthcareMarketReport.tsx`
- `src/pages/SingaporeMedicalDevicesMarketReport.tsx`
- `src/pages/SingaporePharmaCompanies.tsx`
- `src/lib/seo/__tests__/singapore-ivd-market-access.test.ts`
- `scripts/data/specialty-market-demand-sitemap.mjs`
- `public/sitemap.xml`
- `reports/weekly-report-2026-10-20.md` (+ `.data.json`)
- `docs/seo/bio-450-thin-page-inventory.csv` (+ audit JSON)
- `docs/seo/website-audit-2026-10-20.md`
