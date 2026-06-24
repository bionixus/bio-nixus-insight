# Industry matrix — GSC tracking by wave

Per [industry-matrix-ctr-playbook-2026.md](./industry-matrix-ctr-playbook-2026.md).  
IndexNow: `npm run indexnow:matrix` or `node scripts/submit-indexnow-matrix-waves.mjs medtech`

## GSC filters (Performance → Page)

| Wave | Industry | BOFU URL pattern | Listicle URL pattern |
|------|----------|------------------|----------------------|
| 1 | medtech | `/saudi-arabia-medtech-market-research` | `/insights/top-medtech-market-research-companies-*-2026` |
| 2 | healthcare | `/saudi-arabia-healthcare-market-research` | `/insights/top-healthcare-market-research-companies-*-2026` |
| 3 | biotech | `/saudi-arabia-biotech-market-research` | `/insights/top-biotech-market-research-companies-*-2026` |
| … | (see matrix) | `/{country}-{industry}-market-research` | `/insights/top-{industry}-market-research-companies-{country}-2026` |

**Countries:** `saudi-arabia`, `uae`, `egypt`, `kuwait`, `qatar`, `oman`, `bahrain` (112 BOFU + 112 listicles)  
**Lead geo for GSC:** Egypt if highest impressions; else UAE or KSA; Kuwait for GCC expansion wave.

## Weekly metrics per industry (template)

| Week | Industry | BOFU impr | BOFU clicks | BOFU CTR | Listicle impr | Notes |
|------|----------|-----------|-------------|----------|---------------|-------|
| 2026-06-22 | medtech | | | | | IndexNow wave submitted |

## Cannibalization checks

- Do not change pharma BOFU URLs (`/uae-pharmaceutical-market-research`, etc.)
- Industry BOFU H1 must not duplicate pharmaceutical company pages
- Listicles = informational; BOFU = company-intent
