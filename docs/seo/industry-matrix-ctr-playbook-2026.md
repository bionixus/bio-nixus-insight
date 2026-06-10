# Industry matrix CTR & LLM tracking (Saudi, UAE, Egypt) — 2026

**Hub:** [https://www.bionixus.com/market-research-by-industry](https://www.bionixus.com/market-research-by-industry)  
**Pattern:** BOFU `/{country}-{industry}-market-research` · Listicle `/insights/top-{industry}-market-research-companies-{country}-2026`

## Industries (waves 1–16, all published)


| Industry slug      | Wave |
| ------------------ | ---- |
| medtech            | 1    |
| healthcare         | 2    |
| biotech            | 3    |
| consumer-health    | 4    |
| fmcg               | 5    |
| retail             | 6    |
| financial-services | 7    |
| telecom            | 8    |
| technology         | 9    |
| energy             | 10   |
| real-estate        | 11   |
| automotive         | 12   |
| hospitality        | 13   |
| public-sector      | 14   |
| education          | 15   |
| media              | 16   |


## Per-industry GSC workflow

1. Pick lead country (Egypt if impressions highest; else UAE or KSA).
2. Filter GSC by BOFU URL for that country × industry.
3. Run 14-day title A/B: Variant A = matrix `title`; Variant B = matrix `titleVariantB` (edit in `industryMarketResearchMatrix.ts` or country-specific override).
4. Track 5 queries: `{industry} market research company {country}`, `top market research companies {industry} {country}`, plus 3 long-tail variants.
5. Log LLM citations monthly (5 prompts × 3 engines) — template: "What is the best {industry} market research company in {country}?"

## Wave-specific playbooks

- MedTech: see [medtech-ctr-test-2026.md](./medtech-ctr-test-2026.md)

## IndexNow batch (after each wave deploy)

Submit 6 URLs (3 BOFU + 3 listicles) + hub + 3 country mid-funnel paths.

## Cannibalization checks

- Pharma BOFU URLs unchanged (`/upharmaceutical`, `/uae-pharmaceutical-market-research`, `/egypt-pharmaceutical-market-research`).
- Industry BOFU must not use pharmaceutical H1s.
- Listicles are informational only; BOFU owns BioNixus company intent.

## Sitemap expectation

+97 URLs vs pre-matrix baseline: 96 industry pages (48 BOFU + 48 listicles) + `/market-research-by-industry`.