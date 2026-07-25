# BioNixus Website SEO Audit — 2026-07-25

**Automation:** Daily cron (`cursor/website-content-and-ranking-3e49`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months; refresh recommended)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-25T04:02Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | +16 |
| Thin pages (<2,000 words) | **188** | −25 |
| 404 errors (sitemap scope) | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop — **fixed in code** (deploy pending) |

**Critical fix:** Legacy BOFU resolver treated `/quantitative-healthcare-market-research` as `quantitative` + `healthcare` → `/healthcare-market-research/quantitative`, while Vercel 301s that path back to the canonical URL — infinite loop and zero crawlable HTML. Excluded path in `lib/country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action 2026-07-25 |
|--------|------------:|----:|---------:|-------|-------------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet / title | SSR title override live; Egypt report + Cairo hospital FAQ added |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Position depth | Monitor; page above word threshold |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,970w) | +NUPCO tender + entity FAQ → cross 2k post-deploy |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | +SFDA EES + end-to-end access FAQs |
| `/quantitative-healthcare-market-research` | 1,665 | — | — | **Fetch loop** | Redirect exclusion + IndexNow priority |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | — | Already >3k words — CTR title tests |

### MENA money geos (3-month)

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

---

## LLM / GEO visibility

- **Answer-first blocks:** `GeoLLMAnswerBlock` on GCC pharma, GCC access guide, and country MR hubs.
- **Entity sentences:** FAQ additions name BioNixus + bionixus.com on high-impression BOFU URLs.
- **Structured data:** FAQPage JSON-LD maintained on expanded pages (`<details>`/`<summary>` in UI).
- **Post-deploy:** Run `npm run indexnow:priority` and re-check native LLM capture scripts under `scripts/geo/`.

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope.

### Fetch errors

| Path | Error | Fix |
|------|-------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop (fetch failed) | `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` |

### Near-threshold expansions (this run)

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/egypt-healthcare-market-report` | 1,995 | Cairo hospitals healthcare 2023–2026 FAQ |
| `/gcc-pharmaceutical-market-research` | 1,970 | NUPCO + GCC pharma research FAQs |
| `/gcc-market-access-guide` | 1,908 | SFDA EES + access timeline FAQs |
| `/healthcare-market-research-italy` | 1,947 | AIFA CPR + hospital network FAQs |

### Remaining thin backlog

**188** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-inventory.csv` — prioritize global country MR pages and gaps >200 words.

---

## Recommended next steps

1. **Deploy** this branch and verify `curl -I https://www.bionixus.com/quantitative-healthcare-market-research` returns **200** (no redirect chain).
2. **IndexNow:** `npm run indexnow:priority`
3. **Re-crawl audit:** `node scripts/audit-thin-pages-bio450.mjs`
4. **GSC:** Export fresh 7-day performance; validate Cairo query CTR > 0%
5. **Thin-page sprint:** Next batch — `healthcare-market-research-japan`, `clinical-diagnostics-market-research`, MENA country reports with 300+ word gaps
