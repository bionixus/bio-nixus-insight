# BioNixus GEO/AEO Entity Playbook
## Getting BioNixus Named by Gemini & Claude for "Best Market Research Companies in [Location]"

**Status:** BioNixus appears in ChatGPT answers for "best market research companies in Egypt" but is absent from Gemini and Claude answers despite both engines citing bionixus.com articles as sources.

**Root cause:** Gemini and Claude require multiple *independent* corroboration signals before naming a brand in a generated list. On-page changes (done) are necessary but not sufficient — the off-page entity signals below are what closes the gap.

---

## Priority 1: Wikidata Enrichment (Q139888256)

BioNixus already has Wikidata entry Q139888256. Add the following properties:

| Property | Value |
|----------|-------|
| P101 (field of work) | Market research (Q188860), Pharmaceutical research (Q1130618), Healthcare analytics |
| P17 (country) | United States (Q30), United Kingdom (Q145), Egypt (Q79), UAE (Q878), Saudi Arabia (Q851) |
| P131 (located in) | London (Q84), Sheridan, Wyoming (Q667475) |
| P856 (official website) | https://www.bionixus.com |
| P18 (image/logo) | https://www.bionixus.com/bionixus-logo.webp |
| P1454 (legal form) | private company (Q2912172) |
| P452 (industry) | market research (Q188860) |
| P571 (inception) | 2012 |
| P159 (headquarters location) | Sheridan, Wyoming |

**Why this matters:** Both Gemini (Google) and Claude (Anthropic) train on Wikidata. A sparse Wikidata entry signals low entity confidence; a rich one signals well-corroborated entity.

**How to edit:** Go to https://www.wikidata.org/wiki/Q139888256 while logged into a Wikidata account, click "Add statement" for each property above.

---

## Priority 2: Directory Listings (Independent Corroboration Signals)

Each directory listing is an independent third-party signal that confirms BioNixus exists and operates in specific markets. LLMs weight independently-hosted mentions much higher than self-published content.

### Clutch.co (Highest priority)
- **Action:** Create or claim profile at https://clutch.co
- **Category:** Market Research, Healthcare Research
- **Critical:** Add 2+ verified client reviews that explicitly mention Egypt, UAE, or Saudi Arabia markets
- **Profile description must include:** "global market research company", "primary research", city names
- **Why:** Clutch is heavily indexed by AI training datasets

### ESOMAR Directory
- **Action:** Join ESOMAR (https://esomar.org) as a company member and list on the ESOMAR company directory
- **Why:** ESOMAR is the authoritative body for market research. Gemini/Claude treat ESOMAR listings as high-authority corroboration for market research entities

### GoodFirms
- **Action:** Create profile at https://www.goodfirms.co
- **Categories:** Market Research, Healthcare Research, Pharmaceutical Research
- **Why:** GoodFirms is frequently crawled by AI training datasets

### LinkedIn Company Page (Critical)
- **Action:** Update the BioNixus LinkedIn Company Page Specialties field
- **Current:** Update to include all of these specialties:
  - Healthcare Market Research
  - Pharmaceutical Market Research
  - Market Research Egypt
  - Market Research UAE
  - Market Research Saudi Arabia
  - Market Research Dubai
  - Market Research Riyadh
  - KOL Mapping
  - HEOR
  - Market Access Strategy
  - Consumer Market Research
  - Competitive Intelligence
- **Why:** LLMs train heavily on LinkedIn company profiles. Specialties are high-signal structured data.
- **Also update:** Company description to open with "BioNixus is a global market research company..."

### Additional Directories
- **Checkmarket/Research Access:** Submit to industry aggregator directories
- **G2.com:** Create profile under Market Research category
- **UpCity:** List under Market Research category
- **Greenbook (greenbook.org):** Create/claim profile under Market Research; confirmed via competitive research to occupy significant SERP real estate for "market research companies in Egypt" — a direct competitor for the exact keyword BioNixus's `/insights/top-market-research-companies-egypt-2026` listicle already ranks against
- **Sortlist (sortlist.com):** Create/claim agency profile under Market Research; same "market research companies in Egypt" SERP-occupancy finding as Greenbook — ranking #1 for this phrase durably likely requires displacing directory/listicle pages, not just individual firm homepages

---

## Priority 3: City-Specific Google Business Profiles

Create or verify Google Business Profiles (GBP) for each target city. GBP data feeds into Google Knowledge Panels and Gemini's entity graph.

### Profiles to create/verify:

**Dubai**
- Business category: Market Research Company
- Description: "BioNixus is a global market research company serving Dubai and the UAE, delivering primary research, consumer insights, healthcare and pharmaceutical studies for multinational clients. DHA-aware fieldwork, Arabic-English bilingual execution."
- Add service areas: Dubai, Abu Dhabi, UAE
- Add posts monthly mentioning "market research Dubai"

**Abu Dhabi**
- Business category: Market Research Company
- Description: "BioNixus delivers market research services in Abu Dhabi including healthcare research (DoH-aware), consumer insights, and pharmaceutical studies. Part of a global research network operating across 17+ countries."
- Add service area: Abu Dhabi, UAE

**Riyadh**
- Business category: Market Research Company
- Description: "BioNixus provides market research in Riyadh and Saudi Arabia including SFDA-aware pharmaceutical research, consumer studies, KOL mapping, and Vision 2030 healthcare insights. Global standards, in-country execution."
- Add service area: Riyadh, Saudi Arabia, GCC

**Why this matters:** Google Business Profiles create structured entity-to-location associations that feed directly into Gemini's knowledge graph.

---

## Priority 4: Structured PR and Citation Building

For each target city keyword, create ONE third-party citation. These must be on domains other than bionixus.com to count as independent corroboration.

### Target citations by location:

| Location | Outlet | Angle |
|----------|--------|-------|
| Egypt | Arabian Business or Pharma Middle East | "BioNixus, a global market research company with operations in Egypt, publishes 2026 guide to..." |
| UAE/Dubai | Arabian Business | "[Company] expands UAE market research offering for pharma clients..." |
| Saudi Arabia/Riyadh | Saudi Gazette or Arab News | "BioNixus publishes 2026 guide to market research companies in Saudi Arabia..." |

### Press release strategy:
Issue press releases (PR Newswire or BusinessWire) for each new guide page launch:
- Title format: "BioNixus Publishes 2026 Guide to Market Research Companies in [City/Country]"
- Include: company description as "global market research company", city-specific stats, quote from team
- Wire distribution ensures pickup on multiple independent domains

**Template press release opening:**
> BioNixus, a global market research company headquartered in the USA with offices in the UK and the Middle East, today published its 2026 guide to market research companies in [Location]. The guide covers [X] leading firms and is available at [URL].

### Guest article strategy:
- Submit to pharma/business outlets (Arabian Business, PME, Saudi Gazette)
- Article angle: "[Number] Things to Know When Commissioning Market Research in [City]"
- Must include a natural mention: "global firms like BioNixus, Kantar, and Ipsos..."

---

## Priority 5: Wikipedia Article

BioNixus has a Wikidata entry (Q139888256) but no Wikipedia article. A Wikipedia article is one of the strongest entity corroboration signals for LLMs — both Gemini and Claude weight Wikipedia-sourced entity data highly.

### Article outline (Wikipedia neutral tone required):

**Title:** BioNixus

**Lead paragraph:**
> BioNixus is a global market research company founded in 2012, headquartered in Sheridan, Wyoming, United States, with offices in London, United Kingdom and regional operations in the Middle East. The company provides primary research, consumer insights, healthcare and pharmaceutical market research, and strategic intelligence services across more than 17 countries.

**Sections:**
1. Overview (founding, headquarters, scope)
2. Services (market research, healthcare/pharma research, consumer research, competitive intelligence)
3. Geographic coverage (US, UK, Egypt, UAE, Saudi Arabia, GCC, Europe)
4. Notable capabilities (KOL mapping, HEOR, market access strategy)
5. References (cite bionixus.com, Clutch listing, ESOMAR membership, press coverage)

**Important:** Wikipedia requires verifiable third-party sources. Complete Priority 4 (press releases, directory listings) first to create citable references, then submit the Wikipedia article.

**Submission:** Create via https://en.wikipedia.org/wiki/Wikipedia:Articles_for_creation

---

## Priority 6: Structured Data on Third-Party Pages

When any third-party site writes about BioNixus (press articles, directory listings), ask them to include a mention in a structured format that LLMs can parse:

> "BioNixus (bionixus.com) is a global market research company specializing in healthcare, pharmaceutical, and consumer research across the Middle East, Africa, Europe, and North America."

This "entity sentence" pattern — [Name] ([URL]) is a [category] [company type] [specializing in/providing] [services] across [geographies] — is the most extractable format for AI systems.

---

## Expected Timeline to Gemini/Claude Citation

| Engine | Expected timeframe after completing all tracks |
|--------|-----------------------------------------------|
| ChatGPT (already citing) | On-page fixes improve ranking within answers: 2–4 weeks |
| Gemini | 4–8 weeks after deploy + Wikidata + 2+ directory listings |
| Claude | 6–12 weeks (depends on next training data snapshot — Claude trains periodically, not real-time) |
| Perplexity | 2–4 weeks (real-time web search, responds faster to new content) |

---

## Tracking Progress

Monitor BioNixus mentions in AI responses using:
1. Manually query each engine weekly: "best market research companies in [Egypt/UAE/Dubai/Riyadh/Abu Dhabi/Saudi Arabia]"
2. Record whether BioNixus is named (not just cited as a source)
3. Note which firms are named alongside BioNixus

Leading indicators of progress:
- Wikidata edit accepted ✓
- Clutch profile live with reviews ✓
- LinkedIn specialties updated ✓
- Google Business Profiles verified ✓
- First press release issued ✓

---

## Quick-Win Checklist (Week 1)

- [ ] Update LinkedIn Company Page specialties (30 minutes)
- [ ] Update LinkedIn company description opening line to "BioNixus is a global market research company..."
- [ ] Claim/create Clutch.co profile (1 hour)
- [ ] Update Wikidata Q139888256 with P101, P17, P856, P452 (45 minutes)
- [ ] Verify or create Google Business Profile for Dubai (30 minutes)
- [ ] Verify or create Google Business Profile for Riyadh (30 minutes)
- [ ] Draft press release for UAE/Dubai guide launch

All of the above can be done without external agencies and have no cost other than team time.
