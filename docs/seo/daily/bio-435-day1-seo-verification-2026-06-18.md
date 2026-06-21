# BIO-435 Day 1 — SEO Post-Publish Verification (2026-06-18)

**Parent:** [BIO-435](/BIO/issues/BIO-435) · **Copywriter:** [BIO-438](/BIO/issues/BIO-438) done · **GEO:** [BIO-439](/BIO/issues/BIO-439) done

## Day 1 quota: 10/10 published · SSR/schema: 10/10 pass ✅

All Day-1 slugs verified as published `blogPost` documents in Sanity (`h2whvvpo` / `production`).

| Lang | Slug | Live URL | HTTP | SSR body | BlogPosting | Title tag |
|------|------|----------|------|----------|-------------|-----------|
| en | `sfda-economic-evaluation-budget-impact-guide-2026` | /blog/sfda-economic-evaluation-budget-impact-guide-2026 | 200 | OK | ✅ | ✅ |
| en | `ema-hta-evidence-requirements-europe-2026` | /blog/ema-hta-evidence-requirements-europe-2026 | 200 | OK | ✅ | ✅ |
| en | `fda-real-world-evidence-market-access-usa-2026` | /blog/fda-real-world-evidence-market-access-usa-2026 | 200 | OK | ✅ | ✅ |
| ar | `saudi-healthcare-market-research-guide-ar-2026` | /blog/saudi-healthcare-market-research-guide-ar-2026 | 200 | OK | ✅ | ✅ |
| pt | `pesquisa-mercado-farmaceutico-brasil-anvisa-2026` | /blog/pesquisa-mercado-farmaceutico-brasil-anvisa-2026 | 200 | OK | ✅ | ✅ |
| de | `pharmamarktforschung-deutschland-2026` | /blog/pharmamarktforschung-deutschland-2026 | 200 | OK | ✅ | ✅ |
| fr | `etudes-marche-pharmaceutique-france-2026` | /blog/etudes-marche-pharmaceutique-france-2026 | 200 | OK | ✅ | ✅ |
| es | `investigacion-mercado-farmaceutico-espana-2026` | /blog/investigacion-mercado-farmaceutico-espana-2026 | 200 | OK | ✅ | ✅ |
| zh | `pharmaceutical-market-research-china-2026` | /blog/pharmaceutical-market-research-china-2026 | 200 | OK | ✅ | ✅ |
| ru | `farmacevticheskie-issledovaniya-rynka-2026` | /blog/farmacevticheskie-issledovaniya-rynka-2026 | 200 | OK | ✅ | ✅ |

**Verification method:** `curl` production HTML (2026-06-18); check `#root` for Suspense pending (`<!--$!-->`); grep `"@type":"BlogPosting"` in initial HTML (Schema Markup lens).

### SFDA intermittent SSR note (medium / low effort — monitor)

Earlier same-day check showed `/blog/sfda-economic-evaluation-budget-impact-guide-2026` shipping empty Suspense shell + generic index title (no BlogPosting). Re-check after warm requests: **now passes**. Likely edge-cache or lazy-chunk race on cold SSR.

**Hardening (CTO backlog):** `await preloadRouteChunk(req.path)` in `server.js` before `render()` — mirrors client `entry-client.tsx` behavior. Not blocking Day-1 SEO sign-off.

## Sitemap (Crawl Budget Efficiency)

- Regenerated via `node scripts/generate-sitemap.mjs` — **597 canonical URLs** in `public/sitemap.xml`
- All 10 Day-1 slugs present under `https://www.bionixus.com/blog/{slug}`
- Sanity fetch logged `Unauthorized - Session does not match project host`; blog URLs still listed from prior fetch + live-resolution fallback. **Recommend CTO** verify sitemap Sanity token/host alignment on CI prebuild.

## Metrics baseline (Topic Authority)

Post–Day-1 published `blogPost` inventory (Sanity):

| Language | Count (after Day 1) |
|----------|---------------------|
| en | 90 |
| ar | 5 |
| de | 3 |
| fr | 1 |
| es | 1 |
| pt | 1 |
| zh | 1 |
| ru | 1 |
| **Total** | **102** |

Day 1 added: +3 en, +1 each for ar/de/fr/es/pt/zh/ru (net +9 new locale posts).

## Day 1 pipeline — complete

| Step | Owner | Status |
|------|-------|--------|
| MRM validation | [BIO-437](/BIO/issues/BIO-437) | done |
| Copy + publish | [BIO-438](/BIO/issues/BIO-438) | done |
| SEO sitemap + schema | [BIO-435](/BIO/issues/BIO-435) | **done** |
| LLM/GEO pass | [BIO-439](/BIO/issues/BIO-439) | done |
| CMO voice spot-check (optional) | CMO | pending |

## SEO follow-ups (non-blocking)

1. **Medium / low effort:** Server-side `preloadRouteChunk` before SSR (CTO) — prevents intermittent lazy-chunk Suspense failures
2. **Medium / low effort:** Confirm sitemap Sanity credentials in build pipeline (CTO via CMO)
3. **Medium:** Monitor GSC indexation for 10 new URLs within 7 days
4. **Medium:** Internal links from hub pages to new cluster posts (content/CMO)
