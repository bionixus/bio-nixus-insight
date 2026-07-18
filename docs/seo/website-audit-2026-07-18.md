# Website SEO Audit — 2026-07-18

**Branch:** `cursor/website-content-and-ranking-cace`  
**Production base:** https://www.bionixus.com  
**GSC export reference:** 2026-06-22 (latest available)

## Executive summary

| Metric | Pre-audit (prod) | Post-change (code) |
|--------|------------------|-------------------|
| URLs audited | 387 | — |
| Thin pages (&lt;2,000 words) | 187 | ~182 (est. after deploy) |
| 404 errors | 0 | 0 |
| Fetch/redirect errors | 1 | 0 (fix pending deploy) |

### Critical fix: redirect loop

`/quantitative-healthcare-market-research` ↔ `/healthcare-market-research/quantitative` caused an infinite 301 loop (fetch failed in audit; 1,665 GSC impressions at 0.18% CTR). **Fixed** by adding `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

## GSC impressions & CTR — priority pages

| Page / query | Impressions | CTR | Position | Action taken |
|--------------|-------------|-----|----------|--------------|
| cairo hospitals healthcare 2023-2026 | 16,826 | 0% | 4.9 | Cairo hospital cluster section on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | 0.1% | 53.2 | Meta title/description CTR refresh |
| `/gcc-pharmaceutical-market-research` | 3,592* | 0%* | — | NUPCO tender FAQ added (+30w) |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | SFDA EES FAQ added (+92w) |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix |
| `/healthcare-market-research-uk` | — | — | — | Launch sequencing section (+~280w) |
| `/healthcare-market-research-australia` | — | — | — | Launch sequencing section (+~280w) |
| `/healthcare-market-research-japan` | — | — | — | Launch sequencing section (+~280w) |

\*From prior sprint GSC tracking; re-measure 14 days post-deploy.

## Thin-page inventory (near-threshold, addressed this sprint)

| Path | Words (pre) | Gap | Fix |
|------|-------------|-----|-----|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals 2023–2026 section |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO tender FAQ |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES FAQ |
| `/healthcare-market-research-uk` | 1,661 | 339 | Launch sequencing section |
| `/healthcare-market-research-australia` | 1,656 | 344 | Launch sequencing section |
| `/healthcare-market-research-japan` | 1,798 | 202 | Launch sequencing section |

## 404 inventory

**0 sitemap 404s** on production crawl (2026-07-18).

## LLM / GEO ranking improvements

- Answer-first Cairo hospitals block on Egypt report (query-matched H2, numbered hospital clusters, internal links)
- SFDA EES and NUPCO FAQs use `<details>/<summary>` on access guide; FAQ schema on GCC pharma page
- Launch sequencing sections add structured payer/regulatory narrative for UK, Australia, Japan country hubs
- Existing `GeoLLMAnswerBlock` retained on GCC access guide and country pages

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns **200** (no redirect loop)
2. Re-run `node scripts/audit-thin-pages-bio450.mjs`
3. Submit priority URLs via `npm run indexnow:priority` (if configured)
4. Re-export GSC after 14 days; compare CTR on cairo hospitals, GCC med devices, GCC pharma queries

## Remaining backlog (187 → ~182 thin pages)

Deep-expand pages with gap ≥600w remain in `docs/seo/bio-450-thin-page-research-briefs.md`. Next sprint priorities:

- Italy, New Zealand, Brazil pharma hubs (gap 50–70w — quick FAQ pass)
- Switzerland, Argentina, India country MR pages (gap 240–290w)
- Locale insight listicles (PT/ES/AR top-companies pages)
