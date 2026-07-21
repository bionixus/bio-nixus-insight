# BioNixus website audit — 2026-07-21

**Branch:** `cursor/website-content-and-ranking-97a9`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-21T04:03Z  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/`

## Executive summary

| Metric | Value | Status |
|--------|-------|--------|
| URLs audited (sitemap + extras) | 387 | — |
| Live pages | 386 | OK |
| **404 errors** | **0** | OK |
| **Fetch/redirect errors** | **1** (`/quantitative-healthcare-market-research`) | **Fixed in this sprint** |
| Thin pages (<2,000 SSR words) | 186 | In progress |
| Healthcare hub thin pages | 29 | Targeted FAQ/section upgrades |

## GSC impressions & CTR (Jun 2026 export)

### High-impression, low-CTR pages (priority)

| Page / query cluster | Impressions | CTR | Position | Action this sprint |
|----------------------|-------------|-----|----------|-------------------|
| cairo hospitals healthcare (Egypt blog/report) | 16,826 | 0% | — | Cairo hospital block + FAQ on Egypt report |
| `/gcc-medical-devices-market-report` | 6,126 | 0.1% | 53.2 | Meta title/description CTR refresh (page already 2,334w) |
| `/gcc-pharmaceutical-market-research` | 3,592 | 0% | — | NUPCO FAQ + meta refresh |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | SFDA EES FAQ + meta refresh |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix |

### Top-performing pages (maintain)

| Page | Clicks | Impressions | CTR |
|------|--------|-------------|-----|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | 1.5% |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | 1.57% |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.3% |
| `/pharmaceutical-companies-saudi-arabia` | 48 | 3,657 | 1.31% |

## Errors fixed

### P0: Redirect loop on `/quantitative-healthcare-market-research`

**Symptom:** Audit `fetch failed`; curl showed infinite 301 between `/quantitative-healthcare-market-research` and `/healthcare-market-research/quantitative`.

**Root cause:** `resolveLegacyCountryIndustryMarketResearchRedirect()` matched `quantitative-healthcare-market-research` as `{country}-healthcare-market-research` and redirected to `/healthcare-market-research/quantitative`, while `vercel.json` redirects that path back to the standalone guide.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

## Thin-page work (this sprint)

Near-threshold and high-GSC pages expanded:

| Page | Words (before) | Gap | Change |
|------|----------------|-----|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals block + 4 Cairo FAQs |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO tender FAQ + CTR meta |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES + access-timing FAQs |
| `/healthcare-market-research-italy` | 1,947 | 53 | EU5 launch sequencing FAQ |
| `/healthcare-market-research-new-zealand` | 1,930 | 70 | APAC launch sequencing FAQ |
| `/brazil-pharmaceutical-market-research` | 1,929 | 71 | ANVISA/CONITEC timing FAQ |
| PT Brazil listicles (2 URLs) | ~1,956–1,958 | 42–44 | Launch sequencing FAQs |

## LLM / GEO (chat appearance)

Patterns applied across priority pages:

- **GeoLLMAnswerBlock** — already on GCC pharma, GCC med devices, country hubs
- **Answer-first FAQ** — `<details>/<summary>` on Egypt Cairo, GCC access, country pages
- **Query-matched H2** — "Cairo hospitals healthcare 2023–2026" block on Egypt report
- **JSON-LD** — FAQPage + BreadcrumbList maintained on expanded pages

## 404 inventory

**0 sitemap URLs return 404** on production crawl (2026-07-21).

Historical 404s (`/specialist-physician-panel-uae`, `/msl-insight-research-middle-east`) are live and indexed in sitemap.

## Remaining backlog (next sprint)

1. Deploy this branch — verify `/quantitative-healthcare-market-research` returns **200**
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` post-deploy
3. `npm run indexnow:priority` for updated URLs
4. ~180 thin pages remain — batch by cluster (developed-market hubs, medtech reports, listicles)
5. Monitor GCC medical devices CTR after meta A/B (position 53 — content depth OK, snippet mismatch likely)

## Measurement

- GSC: weekly Pages + Queries export → `docs/seo/gsc-weekly-measurement.md`
- Thin pages: re-audit after each deploy
- CTR tests: `docs/seo/gcc-primary-ctr-iteration.md`, `docs/seo/industry-matrix-ctr-playbook-2026.md`
