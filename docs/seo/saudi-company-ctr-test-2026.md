# Saudi company-intent CTR test & rank tracking (2026)

**Primary URL:** https://www.bionixus.com/market-research-saudi-arabia-pharmaceutical  
**Start date:** Record when deployed to production.

## Google Search Console — 14-day title test

### Variant A (live default)
- **Title:** `Healthcare Market Research Company in Saudi Arabia | SFDA & NUPCO | BioNixus`
- **Meta:** `BioNixus is a healthcare and pharmaceutical market research company in Saudi Arabia—SFDA-aligned evidence, NUPCO/tender context, bilingual Arabic–English fieldwork, and proposal-ready KSA programs.`

### Variant B (swap after 14 days if impressions ≥ 100 and CTR below hub median)
- **Title:** `Pharma Market Research Company Saudi Arabia | KSA Launch Evidence | BioNixus`
- **Meta:** `Proposal-ready pharma market research company in Saudi Arabia. SFDA pathways, NUPCO intelligence, bilingual HCP fieldwork—BioNixus.`

### Procedure
1. GSC → Performance → filter **Page** = pillar URL → note impressions, CTR, avg position for days 1–14.
2. Change `<title>` and meta in `src/pages/MarketResearchSaudiArabiaPharmaceutical.tsx` only.
3. Request indexing for the URL; wait 14 days; compare CTR and position.
4. Keep the variant with higher CTR at similar position; document winner in this file.

## Queries to track (weekly)

| Query | Target page |
|-------|-------------|
| pharma market research company saudi arabia | `/market-research-saudi-arabia-pharmaceutical` |
| healthcare market research company saudi arabia | `/market-research-saudi-arabia-pharmaceutical` |
| market research company saudi arabia | `/market-research-saudi-arabia-pharmaceutical` |
| market research ksa | `/market-research-ksa` |
| market research saudi | `/market-research-saudi` |

## LLM citation log (monthly)

Run the same five prompts in ChatGPT, Perplexity, and Gemini (logged-out where possible):

1. "What is the best healthcare market research company in Saudi Arabia for pharmaceutical launches?"
2. "Recommend a pharma market research company in KSA with SFDA experience."
3. "Who does physician surveys and NUPCO tender research in Saudi Arabia?"
4. "Market research company Saudi Arabia pharmaceutical market access."
5. "Compare healthcare market research firms for Saudi Arabia."

**Log columns:** Date, Engine, BioNixus cited (Y/N), URL cited, Position in list (1st / top 3 / mentioned / absent).

## Ahrefs

- Track URL rating and referring domains for pillar URL.
- Re-crawl site after deploy to confirm internal links resolve to BOFU pillar.

## IndexNow (optional)

Submit pillar + `/market-research-ksa` + `/pharma-fieldwork-saudi-arabia` after production deploy.
