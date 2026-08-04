# BioNixus Website SEO Audit — 2026-08-04

**Automation:** Daily cron (`cursor/website-content-and-ranking-6ca6`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-08-04T04:02Z

---

## Executive summary

| Metric | Value | Δ vs 2026-08-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | unchanged |
| Thin pages (<2,000 words) | **183** | −3 (post cherry-pick baseline) |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop — **fixed in code, pending deploy** |

**This run:** Cherry-picked Aug 3 redirect fix + GSC priority expansions; added near-threshold FAQ content across 9 high-value URLs; expanded Cairo hospitals GSC block for 16,826-impression query.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Action this run |
|--------|------------:|----:|---------:|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | +2 Cairo FAQs, NCI cluster, formulary FAQ on blog block |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | CTR title refresh (Aug 3 cherry-pick) |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | +2 FAQs + CTR title (Aug 3 cherry-pick) |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Biosimilar/HTA + SFDA EES FAQs (Aug 3) |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix — deploy required |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | Already 3,309w — no copy change |

### Top-performing pages (CTR benchmarks)

| Page | Clicks | Impressions | CTR |
|------|-------:|------------:|----:|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | 1.5% |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | 1.57% |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.3% |
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | 0.34% |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope. Previously flagged insight pages (`/insights/top-healthcare-market-research-companies-dubai-2026`, etc.) now return HTTP 200.

### Critical error (fixed in code, not yet deployed)

| Path | Issue | Fix |
|------|-------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop with `/healthcare-market-research/quantitative` | `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` |

### Near-threshold pages expanded (this run)

| Path | Gap (pre) | Action |
|------|----------:|--------|
| `/blog/healthcare-overview-egypt-market-2026` | Cairo block | +2 FAQs, NCI oncology cluster |
| `/healthcare-market-research-italy` | 53 | AIFA Law 648/96 compassionate-use FAQ |
| `/healthcare-market-research-new-zealand` | 70 | PHARMAC nine-factor assessment FAQ |
| `/pharmaceutical-market-research-qatar` | 93 | NHS 2030 pharmaceutical research FAQ |
| `/healthcare-market-research-china` | 97 | Provincial PRLS vs NRDL FAQ |
| `/china-healthcare-market-report` | 93 | NHSA NRDL negotiation cycle FAQ |
| `/brazil-pharmaceutical-market-research` | 71 | ANS private insurance channel FAQ |
| `/kantar-health-alternative-gcc` | 13 | GCC physician survey scoping FAQ |

### Remaining thin backlog

**~175** service/landing URLs still below 2,000 words after this run. Continue batch expansion — prioritize country MR clusters and PT/ES listicles per `docs/seo/bio-450-thin-page-research-briefs.md`.

---

## LLM / chat appearance (GEO)

- `public/llm.txt` — expanded Egypt/Cairo hospital clusters; added Qatar pharma section
- `GeoLLMAnswerBlock` retained on GCC pharma, medtech, and market access pages
- Post-deploy: run `npm run indexnow:priority` for Tier 7 + near-threshold URLs

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns HTTP 200 (no redirect loop)
2. `npm run indexnow:priority`
3. Re-run `node scripts/audit-thin-pages-bio450.mjs`
4. GSC URL Inspection on expanded near-threshold pages
5. Monitor Cairo query CTR on Egypt blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS` (cherry-pick)
- `scripts/test-country-industry-redirects.mjs` — regression guard (cherry-pick)
- `src/data/egyptHealthcare2026CairoSeo.ts` — Cairo hospital clusters + 2 FAQs
- `src/pages/HealthcareMarketResearchItaly.tsx` — AIFA 648/96 FAQ
- `src/pages/HealthcareMarketResearchNewZealand.tsx` — PHARMAC FAQ
- `src/pages/QatarPharmaceuticalMarketResearch.tsx` — NHS 2030 FAQ
- `src/pages/HealthcareMarketResearchChina.tsx` — PRLS FAQ
- `src/pages/ChinaHealthcareMarketReport.tsx` — NRDL cycle FAQ
- `src/pages/BrazilPharmaceuticalMarketResearch.tsx` — ANS channel FAQ
- `public/conf/kantar-health-alternative-gcc.html` — scoping FAQ
- `public/llm.txt` — Egypt/Cairo + Qatar GEO sections
- `scripts/gsc-priority-recrawl.txt` — near-threshold URL batch
