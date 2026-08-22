# Website SEO audit — 2026-08-22

**Branch:** `cursor/website-content-and-ranking-003d`  
**Production crawl (pre-deploy):** `node scripts/audit-thin-pages-bio450.mjs` against https://www.bionixus.com  
**Recorded:** 2026-08-22 (cron automation)

## Executive summary

| Metric | Value | vs 2026-08-21 |
|--------|-------|----------------|
| URLs audited | 502 | −1 |
| Live pages | 502 | — |
| Thin pages (<2,000 words) | **250** | −1 |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |
| HMR therapy/country thin | 27 | — |

**SSR health:** No 404s or fetch failures. High-impression money pages (`/gcc-medical-devices-market-report`, `/japan-medical-devices-market-report`, `/iqvia-alternative`) remain above 2,000 words on production.

## GSC baseline (Jun 22 export — refresh overdue)

| Signal | Value | Target |
|--------|-------|--------|
| Site impressions (7d) | ~20,684 | 105,000/week (15k/day) |
| Site CTR | ~0.82% | 3% |
| Avg position | ~30 | 5 |
| `cairo hospitals healthcare` | 16,826 impr, 0% CTR, pos 4.9 | Title/meta fixed — monitor |
| `gcc-medical-devices-market-report` | high impr, low CTR | CTR override exists |
| `iqvia-alternative` / competitors cluster | pos 7–9 | BOFU pages OK on word count |
| USA impressions | 55,520 (3mo), 0.06% CTR | Largest untapped geo |

**Action:** Export GSC week ending 2026-08-22 → update `docs/seo/gsc-weekly-measurement.md`.

## Issues found & fixes applied (this run)

### P1 — Near-threshold MedTech BOFU (production gap ≤35 words)

Added `NEAR_THRESHOLD_MEDTECH_EXTRA_FAQS` in `developedMarketMedtechPages.ts` for Brazil, Switzerland, Spain, Denmark, Malaysia, Poland.

| URL | Prod words | Local SSR verify |
|-----|------------|------------------|
| `/brazil-medtech-market-research` | 1999 | **2068** PASS |
| `/switzerland-medtech-market-research` | 1998 | **2061** PASS |
| `/spain-medtech-market-research` | 1996 | **2058** PASS |
| `/denmark-medtech-market-research` | 1994 | **2055** PASS |
| `/malaysia-medtech-market-research` | 1985 | **2052** PASS |
| `/poland-medtech-market-research` | 1967 | **2027** PASS |

### P1 — High-impression thin BOFU / guide pages

| URL | Prod gap | Fix | Local SSR |
|-----|----------|-----|-----------|
| `/gcc-market-access-guide` | 65 | MedTech registration section | **2112** PASS |
| `/healthcare-market-research-italy` | 53 | +2 AIFA/SSR/MedTech FAQs | **2052** PASS |
| `/brazil-pharmaceutical-market-research` | 29 | Deliverables FAQ | **2048** PASS |
| `/de/healthcare-market-research/germany` | 32 | GKV/PKV segmentation FAQ | **2020** PASS |
| `/bionixus-vs-iqvia-mena` | 86 | FAQ block + `dateModified` | **2195** PASS |

### P2 — Therapy hubs still thin on production

Expanded visible FAQs in `TherapyPage.tsx` (not only JSON-LD duplicates):

| URL | Prod gap | Local SSR |
|-----|----------|-----------|
| `/healthcare-market-research/therapy/cardiovascular` | 154 | **2008** PASS |
| `/healthcare-market-research/therapy/biosimilars` | 104 | **2050** PASS |
| `/healthcare-market-research/therapy/neurology-cns` | 234 | **2017** PASS |
| `/healthcare-market-research/therapy/digital-health` | 180 | **2031** PASS |
| `/healthcare-market-research/therapy/dermatology` | 349 | **2021** PASS |

### P2 — Services hub + CTR / LLM

| Change | Detail |
|--------|--------|
| `/services` | +3 FAQs (quality governance, global programmes, proposal scope) → **2004** words local SSR |
| CTR overrides | `/healthcare-market-research-italy`, `/bionixus-vs-iqvia-mena`, `/services`, `/brazil-pharmaceutical-market-research` |
| IQVIA conf page | Structured `<details>` FAQ for LLM/chat citation |

## Remaining backlog (next cron)

1. **~238** thin service/landing URLs still below threshold on production (see `docs/seo/bio-450-thin-page-inventory.csv`)
2. Post-deploy thin-page audit — target **<240** thin (from 250) after this sprint
3. Fresh GSC export week ending 2026-08-22
4. `npm run indexnow:priority` after deploy for changed URLs below

## Post-deploy checklist

- [ ] Deploy branch to production
- [ ] Re-run `node scripts/audit-thin-pages-bio450.mjs`
- [ ] URL Inspection → Request indexing (priority list)
- [ ] `npm run indexnow:priority`
- [ ] GSC export → update `gsc-weekly-measurement.md`

### Priority re-index URLs

1. `/brazil-medtech-market-research`
2. `/gcc-market-access-guide`
3. `/bionixus-vs-iqvia-mena`
4. `/healthcare-market-research-italy`
5. `/services`
6. `/healthcare-market-research/therapy/dermatology`
7. `/healthcare-market-research/therapy/neurology-cns`
8. `/brazil-pharmaceutical-market-research`
9. `/de/healthcare-market-research/germany`
10. `/healthcare-market-research/therapy/cardiovascular`

## DEPLOY CHECKLIST (files changed)

- `src/data/developedMarketMedtechPages.ts`
- `src/data/seo/therapyExpandedPageContent.ts`
- `src/data/servicesHubContent.ts`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `src/pages/BrazilPharmaceuticalMarketResearch.tsx`
- `src/pages/DeHealthcareMarketResearchGermany.tsx`
- `public/conf/bionixus-vs-iqvia-mena.html`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-08-22.md`
- `public/sitemap.xml` (after `npm run generate-sitemap`)
