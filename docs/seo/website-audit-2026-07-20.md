# BioNixus Website SEO Audit — 2026-07-20

**Automation:** cron `0 4 * * *`  
**Branch:** `cursor/website-content-and-ranking-547e`  
**Production base:** https://www.bionixus.com

---

## Executive summary

| Metric | Result | vs prior (2026-07-19) |
|--------|--------|------------------------|
| URLs audited (sitemap + extras) | 387 | +0 |
| Live pages (200) | 386 | +0 |
| Thin pages (&lt;2000 SSR words) | 186 | −1 |
| Sitemap 404s | 0 | — |
| Fetch errors | 1 → **fixed in code** | redirect loop on `/quantitative-healthcare-market-research` |

**Actions this sprint:** fixed quantitative redirect loop; deep-expanded UK, Australia, Japan, Singapore country hubs; Cairo hospitals block on Egypt report; NUPCO FAQ + meta CTR refresh on GCC pharma; SFDA EES copy on GCC market access guide.

---

## GSC impressions / CTR (prior export — Jun 2026)

| Query / page | Impressions | CTR | Action taken |
|--------------|-------------|-----|--------------|
| cairo hospitals healthcare | ~16,826 | ~0% | Cairo hospitals section + FAQ on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | ~6,126 | ~0.1% | Meta already segment-rich; monitor post-deploy |
| `/gcc-pharmaceutical-market-research` | ~3,592 | ~0% | NUPCO FAQ + title/meta refresh (NUPCO, SFDA) |
| `/gcc-market-access-guide` | ~3,058 | ~0.46% | SFDA EES evidence paragraph expansion |
| `/quantitative-healthcare-market-research` | ~1,665 | n/a | Redirect loop fix — restores crawl + SSR |

---

## Technical errors

### `/quantitative-healthcare-market-research` — redirect loop (FIXED)

- **Symptom:** `fetch failed` in thin-page audit; curl showed 301 ↔ `/healthcare-market-research/quantitative`.
- **Cause:** `lib/country-industry-redirects.mjs` matched `quantitative-healthcare` as legacy `{country}-{industry}-market-research`; `vercel.json` redirects hub slug back to canonical BOFU URL.
- **Fix:** `STANDALONE_LEGACY_EXCLUSIONS` excludes `/quantitative-healthcare-market-research` from legacy resolver.
- **Post-deploy:** Re-run `node scripts/audit-thin-pages-bio450.mjs` and `npm run indexnow:priority`.

---

## Thin-page inventory (top gaps)

Near-threshold pages addressed this sprint:

| Path | Words (prod) | Gap | Status |
|------|--------------|-----|--------|
| `/egypt-healthcare-market-report` | 1995 | 5 | Cairo hospitals section added |
| `/gcc-pharmaceutical-market-research` | 1970 | 30 | NUPCO FAQ + meta |
| `/gcc-market-access-guide` | 1908 | 92 | SFDA EES copy |
| `/healthcare-market-research-uk` | 1661 | 339 | Launch sequencing + FAQs |
| `/healthcare-market-research-australia` | 1656 | 344 | Launch sequencing + FAQs |
| `/healthcare-market-research-japan` | 1798 | 202 | Launch sequencing + FAQs |
| `/healthcare-market-research-singapore` | 1686 | 314 | Launch sequencing + FAQs |

**Remaining thin pages:** 186 (pre-deploy count). Expect ~6–8 to clear 2000-word threshold after deploy SSR re-crawl.

---

## LLM / GEO ranking

- **GeoLLMAnswerBlock** retained on country hubs; new launch-sequencing sections use answer-first structure for NHS/PBAC/NHI/ACE decision layers.
- **FAQ schema:** +2 FAQs each on UK, Australia, Japan, Singapore; +1 NUPCO FAQ on GCC pharma; Cairo FAQ on Egypt report.
- **Internal links:** Each expanded hub links to pharma BOFU, market reports, and quantitative methodology.

---

## Next sprint

1. Deploy and verify `/quantitative-healthcare-market-research` returns 200.
2. `npm run indexnow:priority` on changed URLs.
3. Re-run thin-page audit; target Italy, NZ, Brazil listicles (&lt;100w gap).
4. GCC medical devices meta A/B if CTR flat after 4 weeks.
5. Deep-expand Switzerland, India, Argentina hubs (200–300w gaps).
