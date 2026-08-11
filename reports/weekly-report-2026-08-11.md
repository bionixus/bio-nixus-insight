# BioNixus Weekly Search & Leads Report — 2026-08-11

## Traffic vs targets and last week

| Metric | This week | Target | vs Target | Last week | vs Last Week |
|---|---|---|---|---|---|
| Impressions/day | 4,785 | 15,000 | -10215 | n/a | n/a |
| Clicks/day | 37 | 450 | -413 | n/a | n/a |
| CTR | 0.77% | 3.0% | -2.23pp | n/a | n/a |
| Avg. position | 28.4 | 5.0 | +23.4 | n/a | n/a |

_Position deltas shown as "vs target/last week": positive = closer to #1 (improved)._

**No previous-week export was provided**, so there is no real week-over-week comparison this run (the last saved `previous-week/` data is from 2026-07-16–22, three weeks stale — using it would produce a misleading delta, so it was not used). Drop the prior comparable week's export (2026-07-27–08-02) into `data/gsc/previous-week/` for the next run to restore this.

## Key finding: ~39% of this week's page-level impressions come from pages ranking beyond position 40

Summing `Pages.csv` (38,172 total impressions across all pages — a higher-resolution count than the day-level Chart.csv total of 33,494, since GSC aggregates the two dimensions slightly differently), 19 pages with position worse than 40 and ≥200 impressions account for **14,898 impressions (39%) but only 6 clicks combined**:

| Page | Impressions | Clicks | Position |
|---|---|---|---|
| /japan-medical-devices-market-report | 3,376 | 1 | 46.9 |
| /gcc-medical-devices-market-report | 3,241 | 0 | 54.1 |
| /insights/top-market-research-companies-italy-2026 | 977 | 0 | 40.7 |
| /italy-portable-diagnostic-devices-market | 971 | 0 | 51.9 |
| /healthcare-market-research (hub) | 762 | 0 | 48.1 |
| /gcc-generic-pharmaceuticals-market | 718 | 0 | 60.6 |
| /italy-medical-device-connectivity-market | 647 | 0 | 54.2 |
| /gcc-market-access-guide | 598 | 4 | 41.5 |
| /healthcare-market-research/saudi-arabia | 508 | 0 | 54.9 |
| /market-research | 495 | 0 | 72.4 |
| /gcc-medication-management-market | 434 | 0 | 59.7 |
| + 8 more (Japan/GCC/UK/Italy/South Korea spokes, services pages) | ~1,830 | 1 | 52–65 |

This is the same pattern flagged in the ad-hoc 24-hour check on 2026-07-27 (`/gcc-medical-devices-market-report` and `/japan-medical-devices-market-report` alone were 22% of that day's impressions at position ~50) — it has now persisted across multiple data pulls, so it's a real trend, not noise. These pages are earning real query volume but ranking too deep (page 4–6) to capture clicks. Most read as newer or thinner pages (several specialty/GCC market pages, several country hub spokes) still working through Google's normal ranking ramp — this is not necessarily a bug, but it's worth a deliberate on-page content-depth pass on the top 3–4 (`/japan-medical-devices-market-report`, `/gcc-medical-devices-market-report`, the two Italy pages) given the volume concentrated there, rather than assuming time alone will fix it.

## Biggest query position changes (top 10 by magnitude)

_Need both weeks' Queries.csv to compute this — missing one or both._

## Pages that entered/left the top 10 (by clicks)

_Need both weeks' Pages.csv to compute this — missing one or both._

## CTR check — page-1 queries under 1.5% CTR

**43 queries flagged. Priority read — 6 worth acting on now, the rest is mostly small-sample noise on already-healthy pages (see note below).**

| Query | Position | Impressions | Likely landing page | Finding & suggested action |
|---|---|---|---|---|
| cairo hospitals healthcare 2023-2026 | 1.8 | 165 | `/blog/healthcare-overview-egypt-market-2026` (369 impr, 0 clicks, avg pos 9.5 — inferred from topical match; GSC doesn't give a query→page cross-tab, so confirm before editing) | **Escalating — 3rd consecutive data pull with this exact query at #1–3 and 0 clicks.** A #1.8 average position should convert at well over 20% CTR; 0/165 is a real anomaly, not noise. Rewrite the title tag/meta description for whatever page actually ranks here — current snippet likely reads as generic or mismatched to "Cairo hospitals" intent specifically. |
| latest pharmaceutical market news brazil regulation science health | 6.4 | 119 | No dedicated page — best partial matches are `/brazil-healthcare-market-report` (826 impr, 2 clicks, pos 34.8) or `/insights/top-market-research-companies-brazil-2026` (235 impr, 0 clicks, pos 18.2) | Informational/news-style intent BioNixus has no page built for. Combined with the next row (95 impr), this is a real, evidenced content gap — a "Brazil pharma & health regulatory news 2026" roundup could capture both. |
| health medicine news brazil 2026 | 6.3 | 95 | Same as above | See above — same content-gap opportunity. |
| "prk pharmaceutical" egypt | 7.9 | 107 | `/pharmaceutical-companies-egypt` (2,707 impr, 55 clicks, pos 5.8 overall — page performs well; this is a single company-name lookup within it) | Someone searching for a specific competitor listed on the Egypt directory page. Low priority — the page itself converts fine; this is one company-name variant, not a systemic issue. |
| pharmaceutical companies in uae | 7.0 | 58 | `/pharmaceutical-companies-uae` (1,296 impr, 23 clicks, pos 8.6 overall, 1.77% CTR) | **Not a real problem.** The page's overall CTR is healthy (1.77%); 0/58 on this one phrasing variant is normal sampling noise at position 6–9. Same applies to the "pharmaceutical companies in {country}" rows below (dubai/kuwait/oman/egypt/qatar variants) — their pages all show 1.6–2.5% CTR in aggregate. No action needed on this cluster specifically. |
| iqvia competitors / companies like iqvia / best services for pharmaceutical market access besides iqvia | 6.1 / 9.8 / 7.1 | 40 / 25 / 15 | `/iqvia-alternative` | Same IQVIA-comparison cluster flagged in the 2026-07-24 report — still unresolved. Combined ~80 impressions with 0 clicks across 3 phrasings is a real, repeated signal that `/iqvia-alternative`'s title/snippet isn't capturing comparison-intent searches. Worth a title/meta test this week given it's now a 2nd-report repeat. |
| pharmaceutical companies (generic, no country) | 9.0 | 40 | Likely `/pharmaceutical-companies-saudi-arabia` or the directory hub, ambiguous without a cross-tab | Very competitive generic term at the bottom of page 1 — expected low CTR at this position for a broad head term; lower priority than the items above. |
**Remaining 36 flagged queries** below (≤29 impressions each) — below the volume where a title/meta change is likely to move the needle this week. Mostly the same "pharmaceutical companies in {country}" phrasing-variant noise (their pages already convert at healthy 1.6–2.5% CTR overall — see note above), the GCC/Japan/Italy specialty-market long-tail already linked up in the last Ahrefs-fix pass, and single company-name lookups. Kept as raw data for reference / to catch a repeat pattern next week, not individually actioned.

One genuinely novel finding buried in this list despite the low volume: **two Dutch-language queries rank at #2.9 and #1.1** ("welke bureaus zijn het meest betrouwbaar voor een medisch marktonderzoek?" and "welk bureau kies ik voor een kwalitatief onderzoek in de gezondheidszorg...") — both near-#1 with 0 clicks (25 impressions combined). BioNixus has no `/nl` locale at all (only de/fr/es/zh/ar/pt/ru exist), so Google is surfacing an English page for near-top-of-page-one Dutch queries and Dutch searchers are bouncing off an English snippet. Not urgent at this volume, but real and specific — if Dutch/Benelux impressions keep recurring, a dedicated `/nl` locale would be a data-backed future ask.

| Query | Position | Impressions | CTR |
|---|---|---|---|
| gcc generic injectables market | 7.3 | 29 | 0.00% |
| kantar egypt market research | 7.6 | 29 | 0.00% |
| pharmaceutical companies in egypt | 5.3 | 25 | 0.00% |
| companies like iqvia | 9.8 | 25 | 0.00% |
| oman pharma | 8.3 | 24 | 0.00% |
| japan general surgical devices market | 7.9 | 23 | 0.00% |
| italy microservices healthcare market | 2.0 | 22 | 0.00% |
| japan medical disposables market | 9.5 | 22 | 0.00% |
| leading company in health sector colombia | 9.6 | 22 | 0.00% |
| oman pharmaceutical company | 8.7 | 21 | 0.00% |
| pharma packaging companies in uae | 9.6 | 21 | 0.00% |
| oman pharma company | 7.0 | 20 | 0.00% |
| nupco tender | 7.9 | 20 | 0.00% |
| "mhlw-2026-7714" | 1.0 | 19 | 0.00% |
| pharmaceutical companies in oman | 2.9 | 19 | 0.00% |
| pharmaceutical companies dubai | 7.0 | 19 | 0.00% |
| gcc respiratory drugs market | 2.8 | 18 | 0.00% |
| bahrain consumer behavior and unmet needs 2026 | 8.2 | 18 | 0.00% |
| prk pharma egypt company | 6.5 | 17 | 0.00% |
| awiqli insulin uae | 7.9 | 17 | 0.00% |
| oman pharmaceutical products | 8.9 | 17 | 0.00% |
| qatar pharmaceutical industries | 9.4 | 16 | 0.00% |
| italy medical device connectivity market | 6.9 | 15 | 0.00% |
| best services for pharmaceutical market access besides iqvia | 7.1 | 15 | 0.00% |
| gcc biologics market | 7.8 | 15 | 0.00% |
| pharmaceutical analytics companies | 8.5 | 15 | 0.00% |
| nupco tenders | 9.2 | 15 | 0.00% |
| gcc medical device devices market | 3.4 | 14 | 0.00% |
| pharma companies in dubai | 6.8 | 14 | 0.00% |
| biomedical companies in uae | 7.6 | 14 | 0.00% |
| wuhan banbiantian medical technology market trends | 9.5 | 14 | 0.00% |
| welke bureaus zijn het meest betrouwbaar voor een medisch marktonderzoek? | 2.9 | 13 | 0.00% |
| gcc precision medical devices market | 6.5 | 13 | 0.00% |
| shenzhen lihe medical market trends | 7.3 | 13 | 0.00% |
| medical companies in uae | 7.7 | 13 | 0.00% |
| welk bureau kies ik voor een kwalitatief onderzoek in de gezondheidszorg om het patiëntentraject beter te begrijpen? | 1.1 | 12 | 0.00% |
| kantar§egypt§market§research | 7.1 | 12 | 0.00% |
| pharmaceutical industry | 9.3 | 12 | 0.00% |
| pharma companies dubai | 6.2 | 11 | 0.00% |
| school market research uae | 8.6 | 11 | 0.00% |
| gcc emergency medical device services market | 8.7 | 11 | 0.00% |
| kuwait pharmaceutical company | 9.7 | 11 | 0.00% |
| awiqli insulin in ksa | 5.9 | 10 | 0.00% |
| pharma companies in kuwait | 6.1 | 10 | 0.00% |
| leading company in health sector peru | 6.3 | 10 | 0.00% |
| pharmaceutical manufacturing companies in dubai | 6.8 | 10 | 0.00% |
| saudi arabia diabetes market | 9.4 | 10 | 0.00% |

## Leads

_No lead data available. BioNixus's qualification/gated-asset forms post directly to Formspree from the browser with no server-side logging, so there is no local record of submissions to read. Provide data/leads/leads.csv (columns: date, source_page, budget, timeline) or connect a real data source before this section can report real numbers — see the chat reply for options._

## Next-week priority recommendation

**Recommend: "Brazil" from the priority queue — specifically a pharmaceutical & healthcare regulatory news/market-update angle, not another static market-report page.**

Evidence: "latest pharmaceutical market news brazil regulation science health" (119 impr) and "health medicine news brazil 2026" (95 impr) — 214 impressions combined this week, both at decent position (pos 6.3–6.4, meaning Google already considers a BioNixus page topically close) but 0 clicks and no page on the site actually built for informational/news-style Brazil intent. The existing Brazil pages (`/brazil-healthcare-market-report`, `/insights/top-market-research-companies-brazil-2026`) serve a different intent (static market sizing / vendor directory) and aren't capturing this. This is a real, two-query, two-data-point signal — not a guess.

Second choice, smaller but real: the IQVIA-comparison cluster (`iqvia competitors` / `companies like iqvia` / `best services for pharmaceutical market access besides iqvia`, ~80 impressions combined, 0 clicks) has now shown up in two consecutive reports. This isn't new-content work — it's a title/meta test on the existing `/iqvia-alternative` page — but it's overdue given the repeat.

Not recommended this week despite being on the original queue: GCC Biologics and Cairo/Egypt Hospitals. Cairo/Egypt already has a page ranking #1.8 for the exact "cairo hospitals" query — the leverage there is fixing that page's title/snippet (see CTR section above), not building new content. GCC Biologics shows only 15 impressions this week, weaker evidence than Brazil.
