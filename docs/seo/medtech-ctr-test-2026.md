# MedTech industry-intent CTR test & rank tracking (2026)

**Markets:** Saudi Arabia, UAE, Egypt  
**BOFU URLs:**
- https://www.bionixus.com/saudi-arabia-medtech-market-research
- https://www.bionixus.com/uae-medtech-market-research
- https://www.bionixus.com/egypt-medtech-market-research

**Listicle URLs:**
- https://www.bionixus.com/insights/top-medtech-market-research-companies-saudi-arabia-2026
- https://www.bionixus.com/insights/top-medtech-market-research-companies-uae-2026
- https://www.bionixus.com/insights/top-medtech-market-research-companies-egypt-2026

## Google Search Console — 14-day title test (lead: Egypt BOFU)

### Variant A (live default)
- **Title:** `MedTech Market Research Company in Egypt | EDA Context | BioNixus`
- **Meta:** From `IndustryCountryBofuPage` / matrix config for Egypt medtech.

### Variant B
- **Title:** `Medical Device Market Research Egypt | Hospital & Procurement | BioNixus`
- **Meta:** Proposal-ready MedTech market research company in Egypt with bilingual fieldwork and device procurement context.

### Procedure
1. GSC → Performance → filter Page = Egypt BOFU → note impressions, CTR, position (days 1–14).
2. Edit title/meta in `src/data/industryMarketResearchMatrix.ts` via `buildIndustryCountryPageConfig` overrides if needed, or template only for Egypt.
3. Request indexing; wait 14 days; keep higher-CTR variant.

## Queries to track (weekly, per country)

| Query | Target BOFU |
|-------|-------------|
| medtech market research company {country} | `/{country}-medtech-market-research` |
| medical device market research {country} | same |
| top market research companies medtech {country} | listicle URL |

## LLM citation log (monthly)

1. "Best MedTech market research company in Egypt for hospital procurement?"
2. "Medical device market research firm in Saudi Arabia with SFDA context."
3. "Who does UAE medical device physician and payer research?"
4. "Top market research companies for MedTech in the Middle East."
5. "Compare MedTech market research agencies in Cairo and Riyadh."

**Log:** Date, Engine, BioNixus cited (Y/N), URL cited, Position (1st / top 3 / mentioned / absent).

## IndexNow (after deploy)

Submit all 6 MedTech URLs + `/market-research-by-industry` + country mid-funnel pages.
