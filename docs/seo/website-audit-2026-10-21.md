# Website SEO audit — 2026-10-21

**Automation:** daily ranking & content audit  
**Production crawl:** `scripts/audit-thin-pages-bio450.mjs` (BIO-450)  
**GSC window:** same export as `reports/weekly-report-2026-10-21.md`

## Executive summary

| Signal | This week | Target | Notes |
|--------|-----------|--------|-------|
| Impressions/day | 4,585 | 15,000 | +137 vs prior week |
| Clicks/day | 52 | 450 | +18 vs prior week |
| CTR | 1.13% | 3.0% | +0.37pp; still structural US desktop drag |
| Avg. position | 19.5 | 5.0 | Improved 6.3 positions vs prior week |

**Production health (674 URLs audited):** **0** HTTP errors, **0** 404 on sitemap + known extra paths, **306** thin pages (&lt;2,000 SSR words in `<main>`).

## CTR & ranking priorities

1. **United States (34.9% impressions, 0.12% CTR)** — Title/meta tests on page-1 queries with 0% CTR (`companies like iqvia` pos 3.1, `iqvia alternatives` pos 4.0, `looking for something better than iqvia` pos 4.3). Land on `/iqvia-alternative` and USA listicles.
2. **Desktop (0.74% CTR, ~80% impressions)** — CWV / LCP pass on top landing templates; continue `npm run audit:desktop`.
3. **Winning cluster** — `/pharmaceutical-companies-*` at **2.21% CTR**; protect URLs and expand internal links from thin spokes.
4. **LLM / AEO** — Ensure money pages keep `GeoLLMAnswerBlock`, FAQ `<details>`, and Article/Service JSON-LD; run `npm run aeo:track` post-deploy.

## Thin-page sprint (this run)

Expanded toward ≥2,000 words (deploy to validate on production crawl):

| URL | Pre-crawl words | Gap | Action |
|-----|-----------------|-----|--------|
| `/market-research-gcc` | 1,754 | 246 | GCC regulatory + methodology + IQVIA FAQ |
| `/healthcare-market-research-usa` | 1,800 | 200 | “Why BioNixus” section + schema dateModified |
| `/pharmaceutical-market-research-usa` | 1,796 | 204 | Syndicated vs primary section |
| `/healthcare-market-research-japan` | 1,813 | 187 | Hub link, syndicated vs primary, Article schema |

**Backlog:** ~302 thin URLs remain; next money URLs near threshold: Switzerland healthcare (1764w), Egypt devices report, Singapore healthcare landing.

## 404 inventory

None on production crawl (2026-10-21). Historical BIO-450 404 list (`/brand-tracking-pharma-gcc`, etc.) now routed in `src/routes.tsx`.

## Deploy checklist

- `src/data/marketResearchCountryContent.ts`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/UsaPharmaceuticalMarketResearch.tsx`
- `src/pages/HealthcareMarketResearchJapan.tsx`
- `scripts/generate-sitemap.mjs` → run `npm run generate-sitemap`
- Post-deploy: `npm run indexnow:priority`; re-run `node scripts/audit-thin-pages-bio450.mjs`
