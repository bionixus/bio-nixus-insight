# Website SEO Audit — 2026-08-23

**Branch:** `cursor/website-content-and-ranking-ab40`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-08-23T04:06Z  
**GSC week:** `data/gsc/current-week/` (report: `reports/weekly-report-2026-08-23.md`)

## Executive summary

| Check | Result |
|-------|--------|
| HTTP errors (502 URLs) | **0** |
| 404 pages | **0** |
| Thin service/landing pages (&lt;2,000 words) | **250** (unchanged pre-deploy) |
| SSR bundle critical routes | **PASS** (`verify:ssr-bundle`) |

### GSC vs targets (7-day)

| Metric | This week | Target | Gap |
|--------|-----------|--------|-----|
| Impressions/day | 4,448 | 15,000 | −70% |
| Clicks/day | 33 | 450 | −93% |
| CTR | 0.75% | 3.0% | −2.25pp |
| Avg position | 25.8 | 5.0 | +20.8 |

**CTR diagnostics:** US = 33% of impressions @ 0.09% CTR (largest drag). Excl. US CTR = 1.08%. Mobile CTR 2.23% vs desktop 0.50%. Winning cluster: `/pharmaceutical-companies-*` @ 1.60% CTR. Deep-SERP device reports (Japan, GCC access) dilute headline CTR.

## This sprint — content & CTR fixes

### Thin-page expansions (local SSR verified ≥2,000 words)

| URL | Pre-crawl gap | Action |
|-----|---------------|--------|
| `/brazil-medtech-market-research` | 1 | +ANVISA device FAQ |
| `/switzerland-medtech-market-research` | 2 | +Swissmedic/EU MDR FAQ |
| `/spain-medtech-market-research` | 4 | +AEMPS procurement FAQ |
| `/denmark-medtech-market-research` | 6 | +Medicinrådet FAQ |
| `/malaysia-medtech-market-research` | 15 | +MDA/ASEAN FAQ |
| `/gcc-market-access-guide` | 65 | +MedTech/IVD section + 3 FAQs |
| `/services` | 153 | +3 SERVICE_FAQ items |
| `/brazil-healthcare-market-report` | 75 | +devices market FAQ |
| `/pharmaceutical-companies-iran` | 95 | +2 IFDA/export FAQs |
| `/pharmaceutical-companies-iraq` | 122 | +2 KIMADIA/channel FAQs |
| `/healthcare-market-research/therapy/digital-health` | 180 | +3 expanded FAQs |
| `/healthcare-market-research/therapy/neurology-cns` | 234 | +FAQs + research priority bullet |

### CTR / LLM visibility

- **CTR overrides** added/updated in `lib/ctr-seo-overrides.mjs`: `/bionixus-vs-iqvia-mena`, `/services`, `/bionixus-market-research-middle-east`, `/healthcare-market-research-italy`, `/brazil-pharmaceutical-market-research`
- **Static comparison page** `/bionixus-vs-iqvia-mena`: +4 visible `<details>` FAQs, `dateModified` 2026-08-23
- **Services hub:** FAQ copy addressing IQVIA comparison + AI/LLM citation readiness

## High-impression pages still thin (next batch)

Prioritise by GSC impressions × gap:

1. `/services/competitive-intelligence` (303 impr, gap ~1,054)
2. `/services/market-access` (297 impr, gap ~833)
3. `/gcc-medication-management-market` (278 impr)
4. `/italy-portable-diagnostic-devices-market` (268 impr)
5. Segment market cluster (`/gcc-*-market`, `/japan-*-market`) — 238 remaining thin URLs in `docs/seo/bio-450-thin-page-inventory.csv`

## Page-1 queries with 0% CTR (title/meta tests pending)

Top opportunities from GSC: `iqvia competitors`, `cairo hospitals healthcare 2023-2026`, `pharmaceutical companies in dubai`, `gcc biologics market`, `nupco tender`, `kuwait pharmaceutical companies`. Several already have CTR overrides on landing URLs — monitor 14-day CTR after deploy.

## Post-deploy checklist

1. Merge & deploy PR
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` (target thin count &lt;240)
3. `npm run indexnow:priority`
4. Upload fresh GSC export to `data/gsc/current-week/` (week ending 2026-08-30)
5. Request recrawl in GSC for expanded URLs

## DEPLOY CHECKLIST — files changed

- `src/data/developedMarketMedtechPages.ts`
- `src/data/seo/therapyExpandedPageContent.ts`
- `src/data/servicesHubContent.ts`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `public/conf/bionixus-vs-iqvia-mena.html`
- `docs/seo/website-audit-2026-08-23.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated)
- `docs/seo/bio-450-thin-page-inventory.csv` (regenerated)
- `reports/weekly-report-2026-08-23.md` (regenerated)
