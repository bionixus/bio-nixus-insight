# BioNixus Website SEO Audit — 2026-09-22

**Automation:** Daily cron (`cursor/website-content-and-ranking-147d`)  
**GSC week:** `reports/weekly-report-2026-09-22.md` (7-day export)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-09-22

---

## Executive summary

| Metric | This week | Target | vs last week |
|--------|----------:|-------:|-------------:|
| Impressions/day | **4,448** | 15,000 | −337 |
| Clicks/day | **33** | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | **+2.6** (improved) |

| Crawl | Count |
|-------|------:|
| Live pages audited | 657 |
| Thin (<2,000 words) | **347** |
| Sitemap 404s | **0** |
| Fetch errors | **0** |

**Structural CTR drag:** United States = 33% impressions @ **0.09% CTR**; desktop = 86% impressions @ **0.50% CTR**. Non-US slice CTR **1.08%**. Winning cluster: `/pharmaceutical-companies-*` @ **1.60% CTR**.

---

## Actions shipped (this run)

### CTR / SERP snippets

| Path | Query signal | Action |
|------|--------------|--------|
| `/iqvia-alternative` | `iqvia competitors` ~pos 6, 0% CTR | Title leads **Competitors**; meta mentions “companies like IQVIA” (`ctr-seo-overrides` + static HTML) |
| `/gcc-functional-service-providers-market` | `gcc functional service providers market` ~pos 4.6, 0% CTR | Title/meta FSP guide test |
| `/febrile-neutropenia-market` | `febrile neutropenia market` ~pos 8.5, 0% CTR | Protocol-oriented title/meta |

### Thin-page expansion (GSC / money queries)

| Path | Pre (prod) | Action |
|------|----------:|--------|
| `/gcc-functional-service-providers-market` | 719w | Major copy expansion in `specialtyMarketDemandContent.ts` |
| `/febrile-neutropenia-market` | 549w | Major copy expansion + signal grid + FAQs |
| `/services` | 1,885w | Hub depth sections + 2 FAQs |
| `/healthcare-market-research-bahrain` | 1,898w | Biosimilars / HTA paragraph + internal link |
| `/healthcare-market-research/therapy/biosimilars` | 1,899w | Extended `BIOSIMILARS_TAIL` reference sections |
| `*-medtech-market-research` (near threshold) | 1,991–1,996w | Completed truncated service blurbs + country market paragraphs |

### LLM / chat (GEO)

- Answer-first specialty expansions (FSP, febrile neutropenia) with FAQ schema via existing template
- Services hub depth blocks cite scope, geography, and competitor-alternative positioning for retrieval

---

## Remaining backlog

- **~340** service/landing URLs still below 2,000 words — continue pharma directory spokes (~1,900w), localized `/ar/services`, `/ru/services`, and healthcare-MR country cluster
- **US CTR** — needs dedicated title tests on high-impression US URLs (separate sprint)
- **Video watch pages** (~159w) — transcript expansion (per automation memory)
- Re-run production crawl **after deploy**; local SSR verify on priority URLs

---

## Post-deploy checklist

1. `npm run indexnow:priority`
2. `node scripts/audit-thin-pages-bio450.mjs` — confirm FSP, febrile, services, biosimilars, medtech crosses
3. GSC URL Inspection: `/iqvia-alternative`, `/gcc-functional-service-providers-market`, `/services`
4. Monitor `iqvia competitors` and `gcc functional service providers market` CTR (14-day window)

---

## Files changed

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/developedMarketMedtechPages.ts`
- `src/data/servicesHubContent.ts`
- `src/pages/Services.tsx`
- `src/data/seo/therapyMarketReferenceContent.ts`
- `src/pages/HealthcareMarketResearchInBahrain.tsx`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `public/conf/iqvia-alternative.html`
- `docs/seo/website-audit-2026-09-22.md`
- `reports/weekly-report-2026-09-22.md` (generated)
