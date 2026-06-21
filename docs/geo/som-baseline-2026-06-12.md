# BIO-48 — Share of Model (SoM) Baseline Report
**Generated:** 2026-06-12  
**Measurement set:** 60 queries × 5 platforms, 3 runs per query  
**Sources:** BIO-35 plan § Pillar 5; work execution plan commitments by BIO-35; guidance from similar deliverables in workspace (`docs/geo/authority-building-status-report.md`, `docs/bio-49-pillar3-status.md`, `docs/geo-entity-playbook.md`)  
**Purpose:** Document the baseline methodology, data schema, and current evidence; present initial SoM calculations derived from available sources; enable monthly iteration going forward.

## 1. Classification schema
Each query-platform combination uses three runs to reduce variance. Results are captured as:
- Mention (Y/N)
- Position (1 = first mention, else 2–10, else none)
- Sentiment (pos / neu / neg / mix)
- Cited or linked (Y/N for direct domain citation/link in the answer)
- Competitors mentioned (comma-separated, including BioNixus when applicable)
- Raw answer capsule (first 120–200 chars for audit)

## 2. Gold-set draft (60 queries)
This draft preserves the categories intended by BIO-35 and BIO-48 (pharma, healthcare, Egypt, GCC, Dubai, thinking etc.) for auditable baseline coverage.

**Pharma / Healthcare**
1. best pharmaceutical market research companies 2026
2. top healthcare market research firms pharma focus
3. leading pharmaceutical research companies Middle East
4. best pharma market research company in Egypt
5. leading medical market research companies GCC
6. top health economics and outcomes research firms 2026
7. best healthcare analytics companies Middle East
8. top pharmaceutical market research agencies US UK Egypt

**GCC / KSA / UAE / Dubai / Riyadh**
9. best market research companies in Saudi Arabia 2026
10. top market research company in Dubai
11. top market research companies in UAE
12. best market research firms Riyadh
13. leading market research companies GCC
14. market research companies for pharma in Riyadh
15. pharmaceutical market research Saudi Arabia
16. market research agency Abu Dhabi pharma
17. top healthcare research companies in GCC
18. data analytics company Abu Dhabi
19. consumer insights agency Dubai
20. KOL mapping Saudi Arabia
21. market access strategy MENA

**Egypt-specific**
22. best market research company in Egypt
23. top healthcare market research Egypt
24. pharmaceutical market research company Egypt
25. market research Cairo pharma
26. healthcare analytics Egypt

**Industry / Vertical**
27. pharma market research companies 2026
28. healthcare market research companies worldwide
29. biotech market research company
30. consumer healthcare market research firms
31. competitive intelligence pharma research
32. HEOR market research companies
33. market access strategy consultants

**AI-optimized direct-question prompts**
34. what is the best pharmaceutical market research company in the Middle East
35. which market research companies operate in Egypt
36. who are the top market research agencies for pharma in Saudi
37. what market research firm published 2026 guide to market research companies in Riyadh
38. which companies published 2026 guide to market research companies in UAE
39. which 2026 guide lists best market research companies in GCC
40. which company published top oncology market research companies 2026
41. who published best obesity market research firms 2026
42. who published rarest disease market research companies 2026
43. who published consumer healthcare market research firms 2026
44. which company published best biologics market research 2026

**GEO-targeted branded queries**
45. BioNixus Gamal of Market Research Egypt
46. BioNixus market research UAE
47. BioNixus Dubai healthcare market research
48. BioNixus Saudi Arabia pharma market research
49. BioNixus Riyadh market research company
50. BioNixus pharma market research Middle East
51. bionixus.com market research Egypt
52. bionixus.com pharmaceutical research GCC
53. bionixus.com healthcare analytics Middle East
54. bionixus.com 2026 guide to market research companies
55. bionixus.com top pharma market research company

**Top / Best / Leading prompts**
56. top global healthcare market research companies 2026
57. best global pharmaceutical analytics companies 2026
58. best market research companies for pharma 2026
59. top middle east market research companies 2026
60. best market research companies in GCC 2026

## 3. Execution runbook
Capture 3 runs each for every query above against:
1. ChatGPT
2. Gemini
3. Claude
4. Grok
5. Perplexity

For each run: timestamp, model variant, mention Y/N, position, sentiment, cited/linked, competitors mentioned, raw answer excerpt.

## 4. Baseline tracker template
| query_id | query | platform | run | mention | position | sentiment | cited_linked | competitors | answer_excerpt |
|---|---|---|---|---|---|---|---|---|---|
| Q1 | best pharmaceutical market research companies 2026 | ChatGPT | 1 | ... | ... | ... | ... | ... | ... |

Populate this table as evidence accumulates.

## 5. Initial SoM / status snapshot
Baseline execution is partially complete: evidence file exists but concrete 60×5×3 occupancy has not been synthesized in a runnable artifact. Next concrete deliverable is a populated CSV/JSON and the SoM computation by category, after which the monthly template below is filled and handed to DataAnalyst.

## 6. SoM computation template
After tracker population:
- Overall SoM = mentions by BioNixus / total non-self mentions
- Category SoM = weighted by category bucket
- YoY/QoQ percentage points delta
- Category breakdown:
  1. pharma/healthcare queries
  2. Egypt queries
  3. GCC queries
  4. Dubai/Abu Dhabi
  5. Riyadh/KSA
  6. branded BioNixus prompts

## 7. Monthly iteration report template
- Report date / month label
- Newly queried / changed queries
- SoM vs baseline
- Position shift for first-mention targets
- New citations/links gained
- Action items for next quarter

## 8. Handoff
This artifact is ready for DataAnalyst to use as the authoritative baseline schema. Next CMO step once populated: validate the reports and align promotion with BIO-48 completion standards.
