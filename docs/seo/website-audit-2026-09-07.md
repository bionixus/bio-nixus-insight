# BioNixus Website Audit — 2026-09-07

## Executive summary

| Metric | This week | Target | vs last audit (2026-09-06) |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 vs prior week |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg position | **25.8** | 5.0 | **+2.6 improved** |
| Production thin pages (<2,000w) | **378** | <500 post-deploy | **−143** (was 521) |
| 404 errors | **0** | 0 | unchanged |
| Server errors (5xx) | **0** | 0 | unchanged |

**Headline:** Position improved week-on-week but CTR and USA drag remain the binding constraints. No 404s. Thin-page count down 27% on production crawl; six GSC-priority specialty pages expanded locally to ≥2,000 SSR words with GeoLLM answer blocks.

---

## GSC / CTR diagnostics

- **USA:** 33% of impressions @ **0.09% CTR** — largest single-country drag.
- **Excl. USA:** 1.08% CTR on 20,757 impressions.
- **Mobile:** 2.23% CTR vs desktop 0.50%.
- **Winning cluster:** `/pharmaceutical-companies-*` @ **1.60% CTR** (140 clicks / 8,756 impr).
- **Deep-SERP drag:** `/japan-medical-devices-market-report` — 2,511 impr @ pos 44.3, 0.08% CTR.
- **Page-1 / 0% CTR flags:** `iqvia competitors` (pos 6.3), `japan general surgical devices market` (pos 4.6), `febrile neutropenia market` (pos 8.5), `gcc functional service providers market` (pos 4.6), `gcc biologics market` (pos 6.0).

Full weekly report: `reports/weekly-report-2026-09-07.md`

---

## Errors & crawl health

| Check | Result |
|---|---|
| HTTP 404 (sitemap URLs) | 0 |
| HTTP 5xx | 0 |
| Sitemap 404 entries | 0 |
| Thin service/landing pages | 378 / 698 audited |
| Thin all-scope (BIO-452) | 520 / 948 |

Artifacts:
- `docs/seo/bio-449-thin-page-inventory.csv`
- `docs/seo/bio-452-verify-report.json`

---

## Changes shipped this run

### 1. Specialty page template — LLM + depth

- `SpecialtyMarketDemandPage` now renders **GeoLLMAnswerBlock** (WebPage/Question JSON-LD) and **SpecialtyMarketReferenceGuide** (~1,200w reference framework).
- New helpers: `src/data/seo/specialtyMarketReferenceContent.ts`, `src/components/seo/SpecialtyMarketReferenceGuide.tsx`.

### 2. Priority thin-page expansions (≥2,000 SSR words verified locally)

| URL | Prod before | Local SSR after |
|---|---|---|
| `/japan-general-surgical-devices-market` | 900 | **2,182** |
| `/singapore-pharmaceutical-market` | 982 | **2,248** |
| `/febrile-neutropenia-market` | 549 | **2,012** |
| `/gcc-functional-service-providers-market` | thin | **2,041** |
| `/gcc-medication-management-market` | 655 | **2,014** |
| `/italy-portable-diagnostic-devices-market` | thin | **2,004** |

### 3. CTR wave 14 overrides

Added to `lib/ctr-seo-overrides.mjs` + `src/server/ctr-seo-overrides.js`:
- `/japan-general-surgical-devices-market`
- `/singapore-pharmaceutical-market`
- `/gcc-medication-management-market`
- `/italy-portable-diagnostic-devices-market`

---

## Next sprint (post-deploy)

1. Re-crawl production — target **<300** thin service/landing pages.
2. Expand remaining Italy GCC query cluster pages (device connectivity, clinical trials) — several dropped >20 positions this week.
3. USA CTR: expand `/pharmaceutical-companies-usa` body + test title with “Top N + 2026 List” formula.
4. IndexNow ping expanded priority URLs (`npm run indexnow:priority`).
5. `/japan-medical-devices-market-report` — position 44 @ 2,511 impr: needs report-level depth or redirect consolidation review.

---

## DEPLOY CHECKLIST

- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/data/seo/specialtyMarketReferenceContent.ts`
- [ ] `src/components/seo/SpecialtyMarketReferenceGuide.tsx`
- [ ] `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `docs/seo/website-audit-2026-09-07.md`
- [ ] Post-deploy: `node scripts/bio-449-thin-page-audit.mjs`
- [ ] Post-deploy: `npm run indexnow:priority`
