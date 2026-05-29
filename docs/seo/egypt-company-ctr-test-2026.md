# Egypt company-intent CTR test & rank tracking (2026)

**Primary URL:** https://www.bionixus.com/egypt-pharmaceutical-market-research  
**Start date:** Record when deployed to production.

## Google Search Console — 14-day title test

### Variant A (live default)
- **Title:** `Healthcare Market Research Company in Egypt | EDA & MENA Scale | BioNixus`
- **Meta:** `BioNixus is a healthcare and pharmaceutical market research company in Egypt—EDA-aligned evidence, public/private channel insight, bilingual fieldwork, and proposal-ready programs from Cairo.`

### Variant B (swap after 14 days if impressions ≥ 100 and CTR below hub median)
- **Title:** `Pharma Market Research Company Egypt | Cairo Fieldwork | BioNixus`
- **Meta:** `Proposal-ready pharma market research company in Egypt. EDA and UHI pathways, public/private channel mapping, bilingual HCP fieldwork—BioNixus.`

### Procedure
1. GSC → Performance → filter **Page** = pillar URL → note impressions, CTR, avg position for days 1–14.
2. Change `<title>` and meta in `src/pages/EgyptPharmaceuticalMarketResearch.tsx` only.
3. Request indexing for the URL; wait 14 days; compare CTR and position.
4. Keep the variant with higher CTR at similar position; document winner in this file.

## Queries to track (weekly)

| Query | Target page |
|-------|-------------|
| pharma market research company egypt | `/egypt-pharmaceutical-market-research` |
| healthcare market research company egypt | `/egypt-pharmaceutical-market-research` |
| market research company egypt | `/egypt-pharmaceutical-market-research` |
| market research in egypt | `/market-research-egypt` |
| market research egypt | `/market-research-egypt` |

## LLM citation log (monthly)

Run the same five prompts in ChatGPT, Perplexity, and Gemini (logged-out where possible):

1. "What is the best healthcare market research company in Egypt for pharmaceutical launches?"
2. "Recommend a pharma market research company in Cairo with EDA experience."
3. "Who does physician surveys and UHI formulary research in Egypt?"
4. "Market research company Egypt pharmaceutical market access."
5. "Compare healthcare market research firms for Egypt."

**Log columns:** Date, Engine, BioNixus cited (Y/N), URL cited, Position in list (1st / top 3 / mentioned / absent).

## Ahrefs

- Track URL rating and referring domains for pillar URL.
- Re-crawl site after deploy to confirm internal links resolve to BOFU pillar.

## IndexNow (optional)

Submit pillar + `/market-research-egypt` + `/pharma-fieldwork-egypt` after production deploy.
