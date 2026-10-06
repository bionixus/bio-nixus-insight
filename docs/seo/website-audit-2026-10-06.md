# BioNixus website SEO audit — 2026-10-06

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | vs prior week (2026-10-04) |
|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | +137/day |
| Clicks/day | **52** | 450 | −398 | +19/day |
| CTR | **1.13%** | 3.0% | −1.87 pp | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | ▲ ~6.3 positions |

Full narrative: `reports/weekly-report-2026-10-06.md`.

### CTR diagnostics (structural)

| Slice | CTR | Notes |
|---|---|---|
| United States | **0.12%** | ~35% of impressions — largest CTR drag |
| Excl. US | **1.66%** | Rest-of-world mix healthy |
| Desktop | **0.74%** | ~80% of device impressions |
| Mobile | **2.63%** | Stronger SERP engagement |
| `/pharmaceutical-companies-*` | **2.21%** | Winning directory cluster |
| Insights listicles | **0.84%** | IQVIA/competitor URLs — meta + body tests ongoing |
| Page-1 queries &lt;1.5% CTR | **50+** | IQVIA alternatives @ pos 3–4 with **0% CTR** — priority |

### LLM / AI citation

- Expand **answer-first** blocks (`GeoLLMAnswerBlock`) and structured FAQs on service and country spokes so ChatGPT/Perplexity/Google AI Overviews can cite primary-research positioning (not syndicated averages).
- Money queries with AI overlap: “companies like iqvia”, “which firms specialize in healthcare technology market research”, “iqvia alternatives”.

## Production crawl (BIO-448, 2026-10-06)

| Check | Result |
|---|---|
| URLs audited | **937** |
| Thin pages (&lt;2,000 visible words) | **489** |
| HTTP **404** | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`.

**Near-threshold (1,800–1,999w):** 39 URLs — fastest bulk wins after deploy.

**P0 thin (production, not yet reflecting repo static HTML):** `/physician-survey-saudi-arabia` (~964w live; `public/conf/physician-survey-saudi-arabia.html` ~2.3k in repo), `/sfda-market-access-strategy-saudi-arabia` similar pattern — **deploy** restores full static guides.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-2c85`)

1. **`/pharma-insights-*` and `/real-world-evidence-*` spokes** — programme methodology sections, GeoLLM answer block, extra topics/FAQs (~2,000+ words each after deploy).
2. **`/market-research-healthcare` (EN)** — GeoLLM block, therapeutic-area grid, syndicated-vs-primary narrative, IQVIA hub link, expanded FAQs.
3. **`/healthcare-market-research-japan`** — DPC procurement / committee section (+~200 words).
4. **Therapy pages** — additional digital-health FAQs for `/healthcare-market-research/therapy/digital-health` word-count pass.
5. Regenerated **weekly report** and **BIO-448** inventory for 2026-10-06.

## Recommended next actions

1. **Deploy** and run `npm run indexnow:priority` on expanded URLs.
2. Thin backlog **~485** — `/ar/blog` stubs, localized `/market-research-healthcare` locales, service scope pages &lt;1,000w.
3. **US CTR:** body copy tests on USA listicle + FMCG directory titles (pos 5–7, &lt;1.5% CTR).
4. Re-crawl post-deploy: `node scripts/audit-thin-pages-bio448.mjs`.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/countryKeywordPages.ts`
- `src/pages/templates/CountryKeywordPage.tsx`
- `src/pages/MarketResearchHealthcare.tsx`
- `src/pages/HealthcareMarketResearchJapan.tsx`
- `src/data/seo/therapyExpandedPageContent.ts`
- `docs/seo/website-audit-2026-10-06.md`
- `docs/seo/bio-448-thin-page-inventory.json`
- `docs/seo/bio-448-thin-page-inventory.csv`
- `reports/weekly-report-2026-10-06.md`
- `reports/weekly-report-2026-10-06.data.json`
