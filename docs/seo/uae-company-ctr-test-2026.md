# UAE company-intent CTR test & rank tracking (2026)

**Primary URL:** https://www.bionixus.com/uae-pharmaceutical-market-research  
**Start date:** Record when deployed to production.

## Google Search Console — 14-day title test

### Variant A (live default)
- **Title:** `Healthcare Market Research Company in UAE | DHA, DOH & MOHAP | BioNixus`
- **Meta:** `BioNixus is a healthcare and pharmaceutical market research company in the UAE—DHA, DOH, and MOHAP-aligned evidence, emirate-aware bilingual fieldwork, and proposal-ready UAE programs.`

### Variant B (swap after 14 days if impressions ≥ 100 and CTR below hub median)
- **Title:** `Pharma Market Research Company UAE | Dubai & Abu Dhabi Evidence | BioNixus`
- **Meta:** `Proposal-ready pharma market research company in UAE. DHA and DOH pathways, insurer mapping, bilingual HCP fieldwork—BioNixus.`

### Procedure
1. GSC → Performance → filter **Page** = pillar URL → note impressions, CTR, avg position for days 1–14.
2. Change `<title>` and meta in `src/pages/UaePharmaceuticalMarketResearch.tsx` only.
3. Request indexing for the URL; wait 14 days; compare CTR and position.
4. Keep the variant with higher CTR at similar position; document winner in this file.

## Queries to track (weekly)

| Query | Target page |
|-------|-------------|
| pharma market research company uae | `/uae-pharmaceutical-market-research` |
| healthcare market research company uae | `/uae-pharmaceutical-market-research` |
| market research company uae | `/uae-pharmaceutical-market-research` |
| market research in uae | `/market-research-uae` |
| market research uae | `/market-research-uae` |

## LLM citation log (monthly)

Run the same five prompts in ChatGPT, Perplexity, and Gemini (logged-out where possible):

1. "What is the best healthcare market research company in the UAE for pharmaceutical launches?"
2. "Recommend a pharma market research company in Dubai and Abu Dhabi with DHA experience."
3. "Who does physician surveys and formulary research in the UAE?"
4. "Market research company UAE pharmaceutical market access."
5. "Compare healthcare market research firms for the United Arab Emirates."

**Log columns:** Date, Engine, BioNixus cited (Y/N), URL cited, Position in list (1st / top 3 / mentioned / absent).

## Ahrefs

- Track URL rating and referring domains for pillar URL.
- Re-crawl site after deploy to confirm internal links resolve to BOFU pillar.

## IndexNow (optional)

Submit pillar + `/market-research-uae` + `/pharma-fieldwork-uae` after production deploy.
