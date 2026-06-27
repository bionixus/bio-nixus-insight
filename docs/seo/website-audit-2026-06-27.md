# Website SEO & Content Audit — 2026-06-27

**Site:** https://www.bionixus.com  
**GSC export baseline:** 2026-06-22 (3-month window)  
**Thin-page crawl:** `node scripts/audit-thin-pages-bio450.mjs` (2026-06-27)

---

## Executive summary

| Metric | Value | Trend / action |
|--------|-------|----------------|
| GSC impressions (top pages export) | ~12k+ weekly directional | Rising on pharma company BOFU pages |
| Site CTR (directional) | Mobile ~2.67% / Desktop ~0.31% | Desktop report pages need title/meta iteration |
| Live pages audited | 346 | +117 vs June 18 baseline |
| Thin pages (&lt;2,000 words) | 228 | Down from 154 on narrower June 18 scope |
| 404 errors | **0** | Previously 9 GCC service landers — now resolved in production |
| Server errors | **2** | `/pt/methodology`, `/ru/methodology` — fixed in this PR |

---

## GSC impressions & CTR — priority pages

| Page | Impressions | CTR | Pos | Issue | Action taken |
|------|-------------|-----|-----|-------|--------------|
| `/blog/healthcare-overview-egypt-market-2026` | 25,073 | 0.34% | 5.5 | Cairo hospitals query (16.8k impr @ 0% CTR) | Existing CTR overrides retained; Cairo FAQ block live |
| `/pharmaceutical-companies-kuwait` | 6,190 | 1.5% | 7.1 | Quick win — performing | Monitor |
| `/gcc-medical-devices-market-report` | 6,126 | 0.1% | 53.2 | Low CTR + thin (1,648w) | GeoLLM block + IVD sizing answer added |
| `/healthcare-market-research` | 4,045 | 0.27% | 31.6 | Title intent mismatch | Title/meta rewritten for "healthcare market research companies" |
| `/healthcare-market-research/saudi-arabia` | 1,851 | 0.11% | 45.6 | Low CTR at depth | metaTitle/metaDescription refreshed for 2026 + NUPCO |
| `/bionixus-market-research-middle-east` | 2,269 | 0.18% | 34.4 | Thin (1,740w) | GeoLLM block + syndicated-data differentiation section |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,466w) | Payer evidence pathways section added |
| `/kantar-health-alternative-gcc` | — | — | — | Thin (1,987w) | GEO direct-answer HTML block added |
| `/bionixus-vs-iqvia-mena` | — | — | — | Thin (1,914w) | GEO direct-answer HTML block added |

---

## Errors fixed

### 500 — methodology locale routes
- **Cause:** `METHODOLOGY_SEO_AND_HERO` missing `pt` and `ru` keys; `copy.seoTitle` threw on render.
- **Fix:** Portuguese and Russian SEO/hero/CTA copy added to `methodologySeoHero.ts`.

### 404 — GCC service landers (previously)
All nine paths now return 200 in production (verified 2026-06-27 crawl):
- `/brand-tracking-pharma-gcc`
- `/commercial-effectiveness-pharma-middle-east`
- `/healthcare-fieldwork-gcc`
- `/patient-adherence-research-middle-east`
- `/patient-journey-research-gcc`
- `/respiratory-market-access-gcc`
- `/specialist-physician-panel-uae`
- `/uae-pricing-reimbursement-strategy`
- `/msl-insight-research-middle-east`

---

## Thin pages — near-threshold quick wins (gap ≤100 words)

| Path | Words | Gap | Fix |
|------|------:|----:|-----|
| `/market-research-in-saudi-arabia` | 1,994 | 6 | GeoLLM block on `GeneralMarketResearchCountryPage` template |
| `/kantar-health-alternative-gcc` | 1,987 | 13 | GEO HTML section |
| `/bionixus-vs-iqvia-mena` | 1,914 | 86 | GEO HTML section |
| `/healthcare-market-research-italy` | 1,944 | 56 | Existing GeoLLM on page — monitor post-deploy |
| `/healthcare-market-research-china` | 1,900 | 100 | Existing GeoLLM on page — monitor post-deploy |

**Template improvement:** `GeneralMarketResearchCountryPage` now includes a `GeoLLMAnswerBlock` for all country MR pages — lifts word count and LLM citation readiness across the cluster.

---

## LLM / chat appearance (GEO)

Improvements applied:
1. **GeoLLMAnswerBlock** added to high-impression thin pages: `BionixusMarketResearchMiddleEast`, `GccMedicalDevicesMarketReport`.
2. **Static HTML GEO blocks** (`data-geo-answer="true"`) on Kantar and IQVIA comparison pages for crawler-parseable Q→A format.
3. **Hub title** now leads with "Healthcare Market Research Companies" — matches zero-click query cluster from GSC.

Existing GEO coverage (unchanged): 80+ country/listicle pages already ship `GeoLLMAnswerBlock`.

---

## Remaining backlog (next cron)

| Priority | Count | Notes |
|----------|------:|-------|
| Thin pages (gap ≥200w) | ~180 | Programmatic expansion via `serviceLandingContent` and country templates |
| `/ar/methodology` | 1,047w | Needs localized long-form body (not just hero) |
| Healthcare country cluster thin | 15 | `/healthcare-market-research/*` sub-routes |
| CTR iteration | 5+ URLs | Re-pull 3-month GSC after 4 weeks |

---

## Verification commands

```bash
node scripts/audit-thin-pages-bio450.mjs
npm run audit:sitewide:phase2
npm run verify:content-accuracy
npm run build
```

---

## Re-measurement checklist

- [ ] GSC: Last 3 months, Web, no filter — export Queries + Pages + Devices
- [ ] Compare Cairo hospitals query CTR (target: &gt;0.5% at pos ≤6)
- [ ] Compare healthcare hub CTR (target: &gt;0.5% at pos ≤25)
- [ ] Confirm `/pt/methodology` and `/ru/methodology` return 200 post-deploy
- [ ] IndexNow batch for changed URLs: `npm run indexnow:priority`
