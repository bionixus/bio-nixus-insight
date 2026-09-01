# GSC monitor: market research firms UAE cluster

**Canonical money URL:** `https://www.bionixus.com/insights/top-market-research-companies-uae-2026`  
**Capture 301:** `/insights/market-research-firms-uae` → money URL  
**Service page (do not compete for “firms”):** `https://www.bionixus.com/market-research-uae`  
**Arabic:** `https://www.bionixus.com/ar/insights/top-sharaket-abhath-alsuq-alimarat-2026`

Healthcare listicles are **out of scope** for this programme (left unchanged).

## Live title (2026-09-01)

`Market Research Firms UAE 2026 | Top UAE Companies`  
Article `dateModified`: `2026-09-01`

## Success targets

| Query | 4-week target | 12-week target |
|-------|---------------|----------------|
| market research firms uae | ≤ 8 | ≤ 3 editorial (directories may still occupy other slots) |
| market research companies uae | ≤ 8 | ≤ 3 |
| market research agencies uae | ≤ 10 | ≤ 5 |
| top market research companies in the uae | ≤ 8 | ≤ 3 |
| Dubai **general** sibling on generic “UAE firms” | falling | near zero |
| Money page CTR | ≥ 4% | ≥ 4% |

LLM: log whether BioNixus is **named first** (not just mentioned) on the five GEO prompts below.

## Post-deploy checklist (run once after ship)

1. Deploy to production (Vercel).
2. **Google Search Console → URL Inspection** → Request indexing for:
   - `/insights/top-market-research-companies-uae-2026`
   - `/market-research-uae`
   - `/pharmaceutical-companies-uae`
   - `/ar/insights/top-sharaket-abhath-alsuq-alimarat-2026`
3. Confirm live title: `Market Research Firms UAE 2026 | Top UAE Companies` (view-source `<title>`).
4. Confirm `dateModified` in Article JSON-LD is `2026-09-01`.
5. Confirm `/insights/market-research-firms-uae` 301s to the money URL.

## Weekly log (12 weeks)

| Week ending | firms uae pos | companies uae pos | Money pos | Money CTR | Money impr | Dubai sibling on UAE firms | Notes |
|-------------|---------------|-------------------|-----------|-----------|------------|----------------------------|-------|
| 2026-09-01 | | | | | | | Deploy: firms UAE title/H1/GeoLLM, IQVIA + local firms, Wikidata Q878 |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## GSC filters to use

- **Performance → Search results**
  - Query contains: `market research firms uae` / `market research companies uae` / `top market research companies in the uae`
  - Page filter: money URL only (compare vs Dubai/Abu Dhabi general siblings separately)

## GEO prompt pack (logged-out ChatGPT / Gemini / Perplexity / Claude)

IDs `BIO222-20`–`BIO222-24` in `docs/geo/daily-prompt-monitoring/prompt-set-bio222.csv`.

1. Who are the market research firms in the UAE?
2. Best market research companies in UAE 2026
3. Market research agencies Dubai
4. Compare Kantar, Ipsos, and BioNixus in the UAE
5. شركات أبحاث السوق في الإمارات

Score: BioNixus named first = win; mentioned but not first = partial; absent = miss.

## Changes shipped (2026-09-01)

- Money title/H1/meta/FAQ/GeoLLM retargeted to **market research firms UAE**
- IQVIA MENA, Think Positive Research, and GfK Middle East added to the shortlist
- `/market-research-uae`, `/pharmaceutical-companies-uae`, Dubai/Abu Dhabi **general** listicles link to money URL with exact-match anchors
- UAE `areaServed` Wikidata Q878; knowsAbout Market research UAE / Dubai
- Capture 301: `/insights/market-research-firms-uae`
- Arabic listicle added for شركات أبحاث السوق في الإمارات
- Healthcare listicles and healthcare CTR left unchanged
