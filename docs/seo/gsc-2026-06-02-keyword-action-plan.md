# GSC Top-4 Keyword Action Plan (2026-06-02)

**Export:** Google Search Console — Web, **Last 7 days** (2026-05-25 → 2026-05-31)  
**Site totals (directional):** ~65 clicks · ~12k impressions · average position drifting ~22–32 as impressions rise.

> **Data caveat:** A 7-day window is noisy and not statistically stable. Most query rows show **0 clicks** because GSC anonymizes long-tail clicks. Use **impressions + average position** for prioritization; re-pull a **3-month** GSC window ~4 weeks after each implementation wave before declaring winners.

---

## Executive summary

| Tier | Pattern | Action |
|------|---------|--------|
| **Quick wins** | Country pharma BOFU pages at **pos 5–10** (~80% of clicks) | Exact-match title/H1/first 100 words, GCC cross-link cluster, FAQ + ItemList schema |
| **CTR fixes** | Blog overviews at **pos 6–7** with **~0% CTR** | Rewrite title/meta to match query intent (Cairo hospitals, Kuwait healthcare snapshot) |
| **Big pool** | Flagship reports at **pos 30–70** with **300–850+ impr** | Segment-rich titles/meta, hub internal links, curated `reportCopyOverrides` for segment demand |
| **IQVIA** | `iqvia competitors` at **pos ~10** | Canonical `/iqvia-alternative`; competitors section; deep link to `/bionixus-vs-iqvia-mena` |

**Device split (context):** Mobile CTR ~2.67% / pos ~11.3 vs Desktop ~0.31% / pos ~25 — desktop impressions skew toward report queries the site has not yet earned relevance for; expect desktop CTR to improve as report pages gain topical depth.

---

## Keyword-by-keyword target table

| Keyword (GSC query) | ~Pos | Target URL | Exact on-page action | Top-4 lever |
|---------------------|------|------------|----------------------|-------------|
| pharmaceutical companies in kuwait | 6.3 | `/pharmaceutical-companies-kuwait` | Title/H1/first 100w exact phrase; hub link in hero; GCC + report cluster | Relevance + internal equity |
| pharmaceutical companies oman | 6–9 | `/pharmaceutical-companies-oman` | Same template + `PharmaCompaniesGccHubLinks` | Cross-link cluster |
| pharmaceutical companies qatar | 6–9 | `/pharmaceutical-companies-qatar` | Same | Cross-link cluster |
| pharmaceutical companies bahrain | 6–9 | `/pharmaceutical-companies-bahrain` | Same | Cross-link cluster |
| pharmaceutical companies uae | 6–9 | `/pharmaceutical-companies-uae` | Same | Cross-link cluster |
| pharmaceutical companies saudi arabia | 6–9 | `/pharmaceutical-companies-saudi-arabia` | Same | Cross-link cluster |
| pharmaceutical companies egypt | 6–9 | `/pharmaceutical-companies-egypt` | Same | Cross-link cluster |
| pharmaceutical companies iran | 6–9 | `/pharmaceutical-companies-iran` | Same (hub link; no KSA-style country MR slug) | Cross-link cluster |
| iqvia competitors | ~10 | `/iqvia-alternative` | Title/H1 “competitors”; FAQ; canonical; vs-MENA as secondary | Intent match + CTR |
| cairo hospitals healthcare 2023-2026 | 6.6 | `/blog/healthcare-overview-egypt-market-2026` | Dated Cairo hospitals title/meta/OG | Snippet CTR |
| april healthcare kuwait | 6–9 | `/blog/healthcare-overview-kuwait-market-2026` | Kuwait healthcare snapshot title/meta | Snippet CTR |
| gcc medical devices market (cluster) | ~60 | `/gcc-medical-devices-market-report` | Title with 2026 + size; IVD/prefilled mention in meta | Relevance + links in |
| gcc pharma market report (cluster) | ~57 | `/gcc-pharma-market-report-2026` | Segment keywords in title/meta; segment FAQ block | Relevance + links in |
| gcc pharmaceutical market research | ~63 | `/gcc-pharmaceutical-market-research` | Biologics / injectables / precision in title | Relevance + links in |
| healthcare market research saudi arabia | ~47 | `/healthcare-market-research/saudi-arabia` | Segment report links in deep-dive | Internal equity |
| healthcare market research (hub) | ~39 | `/healthcare-market-research` | GCC report hub section | Hub PageRank |
| healthcare market research companies | ~73 | `/healthcare-market-research-agency-gcc` | “Companies” in title/H1 | Intent match |
| gcc biologics market | 30–70 | `/gcc-pharmaceutical-market-research`, `/market-reports/gcc-immunology-biologics-market-report` | Flagship + immunology override meta | Dedicated + hub |
| gcc generic injectables market | 30–70 | `/gcc-pharmaceutical-market-research`, `/market-reports/gcc-biosimilars-market-report` | FAQ + biosimilars override (injectables framing) | Dedicated entry |
| gcc generic drug market | 30–70 | `/gcc-pharma-market-report-2026` | Segment section + meta | Flagship breadth |
| saudi arabia precision medicine market | 30–70 | `/healthcare-market-research/saudi-arabia`, `/market-reports/saudi-arabia-rare-diseases-market-report` | Rare-diseases meta + country deep-dive links | Segment entry |
| middle east biologics market | 30–70 | `/market-reports/gcc-immunology-biologics-market-report` | Meta “Middle East biologics” | Segment entry |
| mena generic drug market | 30–70 | `/gcc-pharma-market-report-2026` | Generic segment copy | Flagship breadth |
| gcc in vitro diagnostic market | 30–70 | `/gcc-medical-devices-market-report` | IVD in meta/description | Flagship breadth |
| gcc nutraceuticals / e-pharmacy / tablet / prefilled syringes | 30–70 | `/gcc-pharma-market-report-2026` (anchor sections) | H2 segment anchors where thin; else hub only | (a) flagship unless standalone demand clear |

**Track B default (implemented):** Dedicated `reportCopyOverrides` for **biosimilars** (generic injectables/generic drug intent), **immunology/biologics** (GCC + Middle East biologics), **Saudi rare diseases** (precision medicine adjacency). Thin/overlapping segment queries remain on flagship pages.

---

## Priority order

### Quick wins (Phase 1)
1. Kuwait, Oman, Qatar, Bahrain, UAE, Saudi Arabia, Egypt, Iran pharma company pages  
2. `/iqvia-alternative` (static HTML)  
3. Egypt + Kuwait healthcare overview blogs  

### Big pool (Phase 2)
1. `/gcc-pharma-market-report-2026`  
2. `/gcc-pharmaceutical-market-research`  
3. `/gcc-medical-devices-market-report`  
4. `/healthcare-market-research/saudi-arabia`  
5. Programmatic overrides: `gcc-biosimilars-market-report`, `gcc-immunology-biologics-market-report`, `saudi-arabia-rare-diseases-market-report`  

### CTR + technical (Phase 3)
1. Hub `/healthcare-market-research` — GCC report cluster links  
2. Country pharma pages → flagship reports (inbound)  
3. Schema pass: FAQ + Breadcrumb + Article/Report on edited URLs  

---

## CTR / title rewrite recommendations

| Page type | Pattern | Example |
|-----------|---------|---------|
| Country BOFU | `{exact query} \| {proof} 2026 \| BioNixus` | Pharmaceutical Companies in Kuwait \| Top Distributors 2026 |
| Blog snapshot | `{query intent} \| {year} \| BioNixus` | Cairo Hospitals & Egypt Healthcare 2023–2026 Overview |
| Report flagship | `{segment} + {year} + {size hook}` | GCC Pharma Market Report 2026 \| Biologics & Generic Injectables |
| IQVIA | Lead with **competitors** | IQVIA Competitors & Alternatives \| BioNixus |

Use numerals, **2026**, and a concrete value hook (market size, distributor count, data type) in meta descriptions under ~155 characters where possible.

---

## Re-measurement checklist (3-month GSC window)

- [ ] Date range: **Last 3 months**, Search type: **Web**, no query filter unless comparing a URL prefix  
- [ ] Export **Queries** + **Pages** + **Devices**  
- [ ] For each target URL above: record clicks, impressions, CTR, position (before = 7-day snapshot in this doc’s table)  
- [ ] Flag URLs with position ≤10 but CTR &lt;1% → second title/meta iteration  
- [ ] Flag URLs with impressions ↑ and position ↓ → check cannibalization (duplicate titles across `/iqvia-alternative` vs `/bionixus-vs-iqvia-mena`)  
- [ ] Run `npm run verify:content-accuracy` and `npm run verify:market-reports` after any copy change  
- [ ] Confirm ≥5 internal `Link` targets per edited React page  

**Success heuristic for “top 4”:** average position **≤4.0** on the primary query with stable impressions (or rising clicks) for two consecutive weekly samples in the 3-month view.

---

## Implementation log (2026-06-02)

| Item | Status |
|------|--------|
| This document | Created |
| `PharmaCompaniesGccHubLinks` + 8 country pages | See repo |
| `iqvia-alternative.html` competitors intent | See `public/conf/` |
| Blog Kuwait/Egypt CTR overrides | `BlogPost.tsx` |
| Flagship report titles/meta + hub links | Gcc* pages, `HubPage.tsx` |
| `gccBiosimilarsMarketReport` override | `reportCopyOverrides/` |
| Immunology + Saudi rare diseases meta | Existing overrides updated |
| Verification | `npm run build`, `verify:content-accuracy`, `verify:market-reports` |
| Wave 2 quick-win deepen (2026-06-02) | `PharmaCompaniesQuickAnswer` + ItemList on 8 BOFU pages; Kuwait H1 exact match; vs-MENA canonical → `/iqvia-alternative`; GCC pharma `#gcc-market-segments`; IQVIA competitors FAQ |

---

*Source export: `bionixus.com-Performance-on-Search-2026-06-02.xlsx`. Do not edit the Cursor plan file; this doc is the operational reference.*
