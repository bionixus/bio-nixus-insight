# BioNixus Website SEO Audit — 2026-07-15

**Automation:** Daily cron (`cursor/website-content-and-ranking-6359`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-15T04:04Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | +16 |
| Thin pages (<2,000 words) | **184** | −29 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop (fixed in code) |
| Healthcare MR thin cluster | **29** | unchanged |

**Critical error:** `/quantitative-healthcare-market-research` loops between legacy BOFU redirect (`/healthcare-market-research/quantitative`) and `vercel.json` alias. **Fixed** via `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` — deploy required.

**SSR note:** `/gcc-medical-devices-market-report` now serves **2,334 words** in production (prior SSR shell regression resolved).

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Cairo clusters on Egypt report + blog block |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Position + meta | CTR meta refresh; disposables/wearable segments |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,970w) | +NUPCO biosimilar tender FAQ |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | +SFDA EES + biosimilar FAQ |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | STANDALONE_LEGACY_EXCLUSIONS fix |
| `/healthcare-market-research` | 4,045 | 0.27% | 31.6 | Head-term position | Prior title-collision fix retained |
| `/pharmaceutical-market-research-qatar` | — | — | — | Thin (1,907w) | HMC formulary section + FAQ; meta fix |

### MENA money geos (3-month)

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope.

### Fetch error (fixed — deploy pending)

| Path | Status | Cause |
|------|--------|-------|
| `/quantitative-healthcare-market-research` | fetch failed (301 loop) | Legacy BOFU resolver + vercel.json alias |

### Near-threshold pages expanded this run

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals 2023–2026 cluster section |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO biosimilar tender FAQ |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES + biosimilar interchangeability FAQ |
| `/brazil-pharmaceutical-market-research` | 1,929 | 71 | Local manufacturing section |
| `/china-healthcare-market-report` | 1,907 | 93 | NHSA/NRDL/VBP structure section |
| `/bionixus-vs-iqvia-mena` | 1,914 | 86 | GeoLLM block + FAQ (static HTML) |
| `/healthcare-market-research-italy` | 1,947 | 53 | EU5 launch sequencing section |
| `/pharmaceutical-market-research-qatar` | 1,907 | 93 | HMC formulary section + FAQ |
| `/gcc-medical-devices-market-report` | 2,334 | — | Meta CTR refresh; disposables/wearables segments |

### Remaining thin backlog

**184** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR hubs and gaps <100 words.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` retained on GCC pharma, medtech, market access, and country BOFU pages
- Cairo hospital clusters on Egypt report for 16.8k-impression zero-CTR query
- `/bionixus-vs-iqvia-mena` static HTML: answer-first block + accessible FAQ
- FAQ sections use `<details>`/`<summary>` per accessibility standard

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns **200** (no redirect loop)
2. `npm run indexnow:priority`
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
4. GSC URL Inspection on quantitative, GCC, and Egypt expanded pages
5. Monitor Cairo query CTR on Egypt report + blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — STANDALONE_LEGACY_EXCLUSIONS
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals section
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO biosimilar FAQ
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES + biosimilar FAQ
- `src/pages/BrazilPharmaceuticalMarketResearch.tsx` — local manufacturing section
- `src/pages/ChinaHealthcareMarketReport.tsx` — market structure section
- `src/pages/HealthcareMarketResearchItaly.tsx` — EU5 sequencing section
- `src/pages/QatarPharmaceuticalMarketResearch.tsx` — HMC section, FAQ, meta fix
- `src/pages/GccMedicalDevicesMarketReport.tsx` — CTR meta + segment expansion
- `public/conf/bionixus-vs-iqvia-mena.html` — GeoLLM block + FAQ
- `scripts/gsc-priority-recrawl.txt` — quantitative URL priority
