# GSC monitor: market research firms KSA cluster

**Canonical money URL:** `https://www.bionixus.com/insights/top-market-research-companies-saudi-arabia-2026`  
**Capture 301:** `/insights/market-research-firms-ksa` and `/insights/top-market-research-companies-ksa-2026` → money URL  
**Saudi hub:** `https://www.bionixus.com/healthcare-market-research/saudi-arabia`  
**Service page (do not compete for “firms”):** `https://www.bionixus.com/market-research-ksa`  
**Healthcare sibling (watch for cannibalization):** `https://www.bionixus.com/insights/top-healthcare-market-research-companies-saudi-arabia-2026`  
**Arabic:** `https://www.bionixus.com/ar/insights/top-sharaket-abhath-alsuq-alsaudia-2026`

## Live title (2026-08-30)

`Market Research Firms KSA 2026 | Top Saudi Companies`  
Article `dateModified`: `2026-08-30`

## Baseline (week of 2026-08-15)

Close query *top market research companies in saudi arabia*:

| Metric | Query | Money page | Healthcare sibling |
|--------|-------|------------|-------------------|
| Position | 10.45 (~page 3) | 8.8 | 12.63 |
| CTR | — | 2.82% | — |
| Impressions | — | 71 | 63 |

**Prior week (reference):** query pos 4.56; money page pos 6.94, CTR 5.88%, 68 impr.

Head term *market research firms ksa*: record first GSC row after 2026-08-30 deploy (likely sparse until indexed).

## Success targets

| Query | 4-week target | 12-week target |
|-------|---------------|----------------|
| market research firms ksa | ≤ 8 | ≤ 3 (editorial #1; directories may still occupy other slots) |
| market research companies ksa | ≤ 8 | ≤ 3 |
| market research firms saudi arabia | ≤ 8 | ≤ 5 |
| top market research companies in saudi arabia | ≤ 5 | ≤ 3 |
| Healthcare sibling impressions on head term | falling | near zero |
| Money page CTR | ≥ 4% | ≥ 4% |

LLM: log whether BioNixus is **named first** (not just mentioned) on the five GEO prompts below.

## Post-deploy checklist (run once after ship)

1. Deploy to production (Vercel).
2. **Google Search Console → URL Inspection** → Request indexing for:
   - `/insights/top-market-research-companies-saudi-arabia-2026`
   - `/market-research-ksa`
   - `/pharmaceutical-companies-saudi-arabia`
   - `/ar/insights/top-sharaket-abhath-alsuq-alsaudia-2026`
3. Confirm live title: `Market Research Firms KSA 2026 | Top Saudi Companies` (view-source `<title>`).
4. Confirm `dateModified` in Article JSON-LD is `2026-08-30`.
5. Confirm `/insights/market-research-firms-ksa` 301s to the money URL.
6. Confirm Saudi hub hero links to money listicle within first 200 words.

## Weekly log (12 weeks)

| Week ending | firms ksa pos | companies ksa pos | Money pos | Money CTR | Money impr | Healthcare pos | Healthcare impr | Notes |
|-------------|---------------|-------------------|-----------|-----------|------------|----------------|-----------------|-------|
| 2026-08-22 | | | | | | | | Prior: CTR title/meta, hub links, cluster demotion |
| 2026-08-30 | | | | | | | | Deploy: firms KSA title/H1/GeoLLM, local firms, healthcare title demotion, Wikidata sameAs |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## GSC filters to use

- **Performance → Search results**
  - Query contains: `market research firms ksa` / `market research companies ksa` / `top market research companies in saudi arabia`
  - Page filter: money URL only (compare vs healthcare sibling separately)
- Watch for impression share shifting from healthcare sibling back to money URL.

## GEO prompt pack (logged-out ChatGPT / Gemini / Perplexity / Claude)

IDs `BIO222-15`–`BIO222-19` in `docs/geo/daily-prompt-monitoring/prompt-set-bio222.csv`.

1. Who are the market research firms in KSA?
2. Best market research companies in Saudi Arabia 2026
3. Market research agencies Riyadh
4. Compare Kantar, Ipsos, and BioNixus in Saudi Arabia
5. شركات أبحاث السوق في السعودية

Score: BioNixus named first = win; mentioned but not first = partial; absent = miss.

## Changes shipped (2026-08-30)

- Money title/H1/meta/FAQ/GeoLLM retargeted to **market research firms ksa**
- Local/regional firms added (MII, YouGov, C&O, GfK Middle East)
- Healthcare CTR title dropped generic “Firms”; generic keywords stripped
- `/market-research-ksa` and `/pharmaceutical-companies-saudi-arabia` link to money URL with exact-match anchors
- Wikidata Q140188264 in Organization `sameAs`; Saudi `areaServed` Wikidata Q851
- Capture 301: `/insights/market-research-firms-ksa`
- Arabic listicle mirrored for شركات أبحاث السوق في السعودية / KSA

## Changes shipped (2026-08-22)

- Exact-query SERP title/meta via CTR overrides
- `dateModified` bump on money listicle
- Saudi hub body link + `HealthcareNavCard` to money listicle
- Healthcare / Riyadh / GCC / industry-matrix siblings link up to general Saudi listicle above the fold
- Removed stale `ksaGeneralEn` registry entry (301 + dedicated page own canonical URL)
