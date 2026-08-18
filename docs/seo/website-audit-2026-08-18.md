# BioNixus Website SEO Audit — 2026-08-18

## Executive summary

| Metric | Production (pre-deploy) | Target |
|--------|-------------------------|--------|
| URLs audited | 502 | — |
| HTTP errors | **0** | 0 |
| 404 pages | **0** | 0 |
| Thin pages (<2,000 SSR words) | **249** | <230 post-deploy |
| Impressions/day (GSC week) | **4,785** | 15,000 |
| CTR | **0.77%** | 3.0% |
| Avg position | **28.4** | 5.0 |
| Clicks/day | **37** | 450 |

## GSC highlights (current-week export)

- **Winning cluster:** `/pharmaceutical-companies-*` — Egypt 2,707 impr @ pos 5.8, UAE 1,296 @ 8.6, Oman 681 @ 9.0
- **High-impression underperformers:**
  - `/japan-medical-devices-market-report` — 3,376 impr, **0.03% CTR**, pos 46.9 (content OK at ~3,942 words; CTR title test deployed)
  - `/brazil-healthcare-market-report` — 826 impr, 0.24% CTR, pos 34.8
  - `/gcc-market-access-guide` — 598 impr, 0.67% CTR, pos 41.5
  - `/iqvia-alternative` — 402 impr, 0.25% CTR, pos 8.5
- **Money queries (page-1, <1.5% CTR):** `iqvia competitors`, `companies like iqvia`, `pharmaceutical companies in uae`, `nupco tender`

## Changes in this sprint

### Near-threshold medtech (now PASS locally)
- `/spain-medtech-market-research`, `/denmark-medtech-market-research`, `/malaysia-medtech-market-research`, `/poland-medtech-market-research` — `NEAR_THRESHOLD_MEDTECH_EXTRA_FAQS`

### CTR / meta (LLM + Google snippets)
- `/japan-medical-devices-market-report` — title leads with market size + PMDA
- `/gcc-market-access-guide` — MedTech + NUPCO/SFDA in description
- `/bionixus-vs-iqvia-mena` — new CTR override + static HTML FAQ block

### Content depth (2,000+ words, local SSR verify)
- `/gcc-market-access-guide` — MedTech section + 3 FAQs
- `/bionixus-vs-iqvia-mena` — FAQ section (static HTML)
- `/brazil-healthcare-market-report` — 2 ANVISA/CONITEC FAQs
- `/pharmaceutical-companies-iran`, `/pharmaceutical-companies-iraq` — expanded FAQs
- `/healthcare-market-research/therapy/neurology-cns`, `digital-health` — expanded FAQ sets

### High-impression specialty pages (partial — next sprint)
- `/italy-portable-diagnostic-devices-market`, `/italy-medical-device-connectivity-market` — expanded intros, FAQs, signal grids (~1,200 words; need second pass to 2,000+)
- `/gcc-generic-pharmaceuticals-market`, `/gcc-medication-management-market` — expanded structure + FAQs (~1,200 words)

## Remaining thin-page backlog (~240 URLs)

Priority queue for next cron run:
1. GCC segment markets (`/gcc-*-market`) — 500–900 words, high impressions
2. Japan/Italy specialty tails (`/japan-*-market`, `/italy-*-market`)
3. `/services/*` landing pages (market-access, competitive-intelligence, KOL)
4. Therapy hubs still under 2,000 words after FAQ merge

## LLM / AEO recommendations

- Japan + GCC MedTech reports: strong FAQ JSON-LD; keep `GeoLLMAnswerBlock` on hub pages
- IQVIA comparison cluster: cross-link `/iqvia-alternative`, `/bionixus-vs-iqvia-mena`, `/healthcare-market-research-companies`
- Post-deploy: run `npm run indexnow:priority` for changed URLs

## DEPLOY CHECKLIST

- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `src/data/seo/therapyExpandedPageContent.ts`
- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/data/gccSegmentMarketContent.ts`
- [ ] `src/pages/GccMarketAccessGuide.tsx`
- [ ] `src/pages/BrazilHealthcareMarketReport.tsx`
- [ ] `src/pages/IranPharmaCompanies.tsx`
- [ ] `src/pages/IraqPharmaCompanies.tsx`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `public/conf/bionixus-vs-iqvia-mena.html`
- [ ] `reports/weekly-report-2026-08-18.md`
- [ ] `docs/seo/website-audit-2026-08-18.md`
