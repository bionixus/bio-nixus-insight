# Website SEO audit — 2026-10-22

**Automation:** daily ranking & content audit  
**Production crawl:** `scripts/audit-thin-pages-bio450.mjs` (BIO-450)  
**GSC window:** `reports/weekly-report-2026-10-22.md` (`data/gsc/current-week/`)

## Executive summary

| Signal | This week | Target | Notes |
|--------|-----------|--------|-------|
| Impressions/day | 4,585 | 15,000 | +137 vs prior week |
| Clicks/day | 52 | 450 | +18 vs prior week |
| CTR | 1.13% | 3.0% | +0.37pp; US desktop still structural drag |
| Avg. position | 19.5 | 5.0 | Improved 6.3 positions vs prior week |

**Production health (674 URLs audited):** **0** HTTP errors, **0** 404 on sitemap + known extra paths, **306** thin pages (&lt;2,000 SSR words in `<main>`).

## CTR & ranking priorities

1. **United States (34.9% impressions, 0.12% CTR)** — Page-1 queries with near-zero CTR: `companies like iqvia` (pos 3.1), `iqvia alternatives` (4.0), `looking for something better than iqvia` (4.3). Land on `/iqvia-alternative` and USA healthcare listicles; ensure `GeoLLMAnswerBlock` first sentences are citation-ready.
2. **Desktop (0.74% CTR, ~80% impressions)** — Continue `npm run audit:desktop` on top templates.
3. **Winning cluster** — `/pharmaceutical-companies-*` at **2.21% CTR**; protect URLs and internal-link from thin spokes.
4. **Directory matrix** — Waves 1–5 fail 14-day indexation gate (&lt;80% URLs in GSC); keep internal links from hubs and winning clusters.
5. **LLM / AEO** — Money pages need FAQ `<details>`, Service/Article JSON-LD, and explicit “syndicated vs primary” blocks; run `npm run aeo:track` post-deploy.

## Thin-page sprint (this run)

Cherry-picked 2026-10-21 GCC/USA/Japan batch (not yet on production crawl) plus new expansions:

| URL | Pre-crawl words | Action |
|-----|-----------------|--------|
| `/market-research-gcc` | 1,754 | IQVIA FAQ + regulatory/methodology (2026-10-21) |
| `/healthcare-market-research-usa` | 1,800 | Why BioNixus section (2026-10-21) |
| `/pharmaceutical-market-research-usa` | 1,796 | Syndicated vs primary (2026-10-21) |
| `/healthcare-market-research-japan` | 1,813 | Syndicated vs primary (2026-10-21) |
| `/healthcare-market-research-switzerland` | 1,764 | Syndicated vs primary + FAQs |
| `/healthcare-market-research-singapore` | 1,691 | Syndicated vs primary + FAQs |
| `/healthcare-market-research-italy` | 1,952 | Syndicated vs primary section |
| `/clinical-diagnostics-market-research` | 1,703 | LLM context + FAQs |
| `/turkey-healthcare-market-report` | 1,973 | FX/SGK FAQ |
| `/brazil-healthcare-market-report` | 1,970 | SUS vs ANS FAQ |

**Backlog:** ~296 thin URLs after deploy validation; batch near-threshold MedTech landings (1990–1999w) next.

## 404 inventory

None on production crawl (2026-10-22).

## Deploy checklist

- `src/data/marketResearchCountryContent.ts`
- `src/pages/HealthcareMarketResearch{Usa,Japan,Switzerland,Singapore,Italy}.tsx`
- `src/pages/UsaPharmaceuticalMarketResearch.tsx`
- `src/pages/{Turkey,Brazil}HealthcareMarketReport.tsx`
- `src/data/clinicalDiagnosticsOffering.ts`
- `src/pages/ClinicalDiagnosticsMarketResearch.tsx`
- `reports/weekly-report-2026-10-22.md`
- Run `npm run generate-sitemap`
- Post-deploy: `npm run indexnow:priority`; re-run `node scripts/audit-thin-pages-bio450.mjs`
