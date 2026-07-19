# Website SEO & Content Audit — 2026-07-19

**Branch:** `cursor/website-content-and-ranking-c432`  
**Production base:** https://www.bionixus.com  
**GSC export reference:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/`

## Executive summary

| Metric | Status |
|--------|--------|
| Sitemap URLs audited | 387 |
| Live pages | 386 |
| Thin pages (&lt;2000 words) | 187 |
| 404 in sitemap | 0 |
| Fetch errors | 1 (redirect loop — **fixed in code**) |

## Critical fix: redirect loop

`/quantitative-healthcare-market-research` was caught by the legacy BOFU regex (`quantitative-healthcare-market-research` → country `quantitative`, industry `healthcare`) and redirected to `/healthcare-market-research/quantitative`, which `vercel.json` redirected back — infinite 301 loop.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` excludes `/quantitative-healthcare-market-research` from legacy resolution.

## GSC impressions & CTR (priority pages)

| Page | Impressions | CTR | Position | Action this sprint |
|------|-------------|-----|----------|-------------------|
| cairo hospitals (query cluster) | 16,826 | 0% | — | Cairo hospitals section on Egypt report + FAQ |
| `/gcc-medical-devices-market-report` | 6,126 | 0.1% | 53 | Meta title/description CTR refresh |
| `/gcc-pharmaceutical-market-research` | 3,592 | 0% | — | NUPCO FAQ + meta refresh |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16 | SFDA EES section (existing) |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30 | Redirect loop fix |
| `/healthcare-market-research` | 4,045 | 0.27% | 32 | Hub — ongoing |
| `/healthcare-market-research/saudi-arabia` | 1,851 | 0.11% | 46 | Country hub thin — next sprint |

## Thin-page expansions (this sprint)

| Page | Before (words) | Gap | Changes |
|------|----------------|-----|---------|
| `/healthcare-market-research-italy` | 1,947 | 53 | Launch sequencing section + 2 FAQs |
| `/healthcare-market-research-new-zealand` | 1,930 | 70 | PHARMAC launch sequencing + 2 FAQs |
| `/healthcare-market-research-switzerland` | 1,759 | 241 | Therapeutic areas grid, launch sequencing, 2 FAQs, meta refresh |
| `/healthcare-market-research-argentina` | 1,719 | 281 | Multi-channel launch sequencing + 2 FAQs |
| `/healthcare-market-research-india` | 1,710 | 290 | PM-JAY/tier segmentation + 2 FAQs |
| `/egypt-healthcare-market-report` | thin | — | Cairo hospitals intelligence section + FAQ |

## LLM / GEO improvements

- **GeoLLMAnswerBlock** retained on all expanded country pages
- **Answer-first FAQ** blocks added with `<details>/<summary>` for accessibility
- **Launch sequencing** sections added for developed-market hubs (Italy, NZ, Switzerland, Argentina, India)
- **JSON-LD FAQPage** schemas updated via expanded `faqItems` arrays

## Coverage issues (GSC 2026-06-22)

| Issue | Count | Notes |
|-------|-------|-------|
| 404 | 15 | Legacy URLs — covered by `config/legacy-redirects.json` |
| Redirect error | 3 | Quantitative loop (fixed) |
| noindex | 7 | Blog cleanup script available |
| Crawled not indexed | 50 | Thin content + CTR — ongoing expansion |

## Next sprint

1. Deploy and verify `/quantitative-healthcare-market-research` returns 200
2. `npm run indexnow:priority`
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` post-deploy
4. Deep-expand remaining healthcare MR hubs: UK, Australia, Japan, Singapore
5. Brazil listicle pages (gap ~140w)
