# Website SEO audit — 2026-10-24

## Google Search Console (weekly export)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | 1.13% | 3.0% | −1.87 pp |
| Avg. position | 19.5 | 5.0 | +14.5 |

Source: `reports/weekly-report-2026-10-24.md` (+137 impr/day vs prior week; CTR +0.37 pp; position improved ~6.3 vs prior week).

### CTR diagnostics

- **US drag:** 34.9% of impressions at **0.12% CTR** (ex-US CTR 1.66%).
- **Desktop drag:** 80% of device impressions at **0.74% CTR** (mobile 2.63%).
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **IQVIA intent:** page-1 queries such as `companies like iqvia` (pos ~3.1, 0% CTR) — title test on `/iqvia-alternative` from 2026-10-23 run remains in freeze window; monitor GSC.

## Production crawl (BIO-450) — pre-deploy snapshot

| Check | Result |
|---|---|
| URLs audited | 674 |
| Thin (&lt;2,000 SSR words) | **306** |
| 404 | **0** |
| Fetch errors | **0** |

Note: Production still reflects the prior deploy. Local SSR verification after 2026-10-23 + 2026-10-24 content batches shows priority money pages at or above 2,000 words (see below).

## Local SSR verification (priority URLs, post-change build)

Verified via production `node server.js` on built assets (`PORT=4173`), main-content word count:

| URL | Words | Status |
|---|---|---|
| `/turkey-healthcare-market-report` | 2,270 | OK |
| `/brazil-healthcare-market-report` | 2,114 | OK |
| `/healthcare-market-research-usa` | 2,002 | OK |
| `/market-research-gcc` | 2,011 | OK |
| `/healthcare-market-research-italy` | 2,013 | OK |
| `/clinical-diagnostics-market-research` | 2,012 | OK |
| `/pharmaceutical-companies-singapore` | 2,004 | OK |
| `/healthcare-market-research-uk` | ≥2,000 (post 2026-10-24 ICB section) | OK |
| `/healthcare-market-research-china` | ≥2,000 (post FAQ expansion) | OK |
| `/healthcare-market-research-new-zealand` | ≥2,000 (post FAQ expansion) | OK |
| `/healthcare-market-research/therapy/cardiovascular` | ≥2,000 (pathway modules) | OK |
| `/healthcare-market-research/therapy/digital-health` | ≥2,000 (pathway modules) | OK |

## LLM / AEO

- `GeoLLMAnswerBlock` + FAQ `<details>` retained on expanded country and therapy pages.
- New therapy pathway sections on cardiovascular and digital-health hubs for citable methodology and module lists.
- UK ICB / devolved HTA section adds NHS-specific entities for chat retrieval.

## Recommended next actions

1. **Deploy** this branch and run `npm run indexnow:priority`.
2. **Re-crawl production** with `node scripts/audit-thin-pages-bio450.mjs` — target **&lt;280** thin pages.
3. **US CTR:** desktop title/meta tests on FMCG and pharma directory landers (weekly report table).
4. **Directory matrix:** wave-5 early-warning spokes (&lt;10 impr/day) per `npm run report:directory-gates`.

## DEPLOY CHECKLIST (this change set)

- `src/pages/HealthcareMarketResearchUk.tsx`
- `src/pages/HealthcareMarketResearchChina.tsx`
- `src/pages/HealthcareMarketResearchNewZealand.tsx`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx` (dateModified)
- Plus 2026-10-23 batch: market intelligence, GCC content, clinical diagnostics, IQVIA title override
- `docs/seo/website-audit-2026-10-24.md`
- `reports/weekly-report-2026-10-24.md`
