# BioNixus search growth plan — 10,000 impressions/day, 150 clicks/day, meeting-request leads

Written 2026-10-04 from the GSC export `29 Aug 2026 – 29 Sep 2026` (now in `data/gsc/current-week/`),
the production crawl (`docs/seo/bio-450-thin-page-inventory.csv`) and a live Googlebot fetch of the
money pages. Scope agreed: **SEO / website only**, 12–18 month horizon, long-term ceiling ~1,500
clicks/day. Companion artefacts: `reports/weekly-report-2026-10-04.md`,
`node scripts/directory-matrix-gates.mjs` (matcher fixed in this commit; it had reported 0% indexation
since launch because it looked for a `Page` column while GSC exports `Top pages`).

---

## 1. What actually happened (diagnosis)

### 1.1 The curve

| Window | Days | Clicks/day | Impr/day | CTR | Avg pos |
|---|---|---|---|---|---|
| Pre (Aug 29 – Sep 7) | 10 | 35.9 | 4,216 | 0.85% | 29.3 |
| **Peak (Sep 8 – 15)** | 8 | **67.1** | **6,575** | 1.02% | 17.7 |
| Slide (Sep 16 – 22) | 7 | 58.9 | 4,372 | 1.35% | 14.7 |
| **Trough (Sep 23 – 29)** | 7 | **49.1** | **3,050** | **1.61%** | **11.8** |

Single-day peaks: 7,928 impressions (Sep 14) and 90 / 80 clicks (Sep 9–10). Trough low: 2,442 (Sep 26).

Impressions fell 54% peak-to-trough; clicks fell 27%; **average position improved from 17.7 to 11.8
and CTR doubled**. That combination means the impressions that disappeared were mostly deep-SERP
impressions (positions 20–80) that almost never produced clicks. The site did not lose rankings on the
pages that earn clicks — it lost *exposure* on pages that did not.

### 1.2 Where the 7,000 came from, and why it was fragile

| Query intent (top 1,000 queries, 32 days) | Queries | Clicks | Impressions | CTR | Avg pos |
|---|---|---|---|---|---|
| Market-size / "X market" report intent | 495 | **1** | 14,167 (36%) | 0.01% | 45.8 |
| List / entity (companies, banks, FMCG, hospitals, jobs) | 200 | 142 | 13,155 (34%) | 1.08% | 7.8 |
| **Buyer intent** (market research companies/agencies, IQVIA competitors, HEOR, market access, CI) | 194 | **21** | 9,070 (23%) | 0.23% | 29.5 |
| Other / brand | 111 | 94 | 2,918 (7%) | 3.22% | 20.1 |

Page families, same window:

| Family | URLs in GSC | Clicks | Impressions | CTR | Avg pos |
|---|---|---|---|---|---|
| Company-directory spokes (non-pharma: banks, FMCG, F&B, construction, hotels…) | 69 | 414 | 26,009 | 1.59% | 8.9 |
| `/pharmaceutical-companies-*` | 12 | 566 | 24,902 | 2.27% | 7.0 |
| Market reports (`*-market-report`, `/market-reports/*`) | 218 | 107 | 22,507 | 0.48% | 34.1 |
| Blog | 90 | 45 | 15,059 | 0.30% | 16.8 |
| `/healthcare-market-research` hub + country + therapy | 77 | 23 | 12,684 | 0.18% | 35.0 |
| `/insights/top-*` listicles | 158 | 94 | 10,611 | 0.89% | 15.4 |
| Other market-research pages (`/market-research`, `/services/*`, `/heor-consulting`…) | 146 | 41 | 7,837 | 0.52% | 45.5 |
| Segment-market pages (`gcc-keytruda-market` etc.) | 29 | 17 | 6,190 | 0.27% | 26.9 |
| Competitor alternatives (`/iqvia-alternative`, `/nielsen-alternative`…) | 5 | 53 | 4,107 | 1.29% | **5.6** |
| Services | 7 | 3 | 2,319 | 0.13% | 58.1 |

Three structural facts follow:

1. **Half of all impressions were worthless.** The 495 market-size queries and the market-report,
   hub/country, segment and "other" families (~430 URLs) produced ~190 clicks from ~49,000 impressions.
   US alone is 35% of impressions at 0.12% CTR. When Google trimmed deep-SERP exposure of those
   pages in mid-September the headline number halved but clicks barely moved.
2. **Clicks come from list intent, not buyer intent.** 73% of clicks are directory pages. The
   top click queries are `pharmaceutical companies in egypt`, `fmcg companies in kenya`, `german
   banks`, `fmcg`. These visitors are job-seekers, suppliers, students and BD people — which is
   exactly why the forms produce "generic list filling" rather than meeting requests.
3. **Buyer-intent terms are on page 3.** `healthcare market research` (584 impr, pos 33.6),
   `healthcare market research companies` (411, pos 31), `agencies` (212, pos 28.7), `pharma market
   research companies` (137, pos 32), `heor consulting` (104, pos 41), `pharma competitive
   intelligence` (109, pos 69), `market access services` (92, pos 16.5). Total buyer-intent clicks in
   32 days: **21**. The only buyer cluster that works is IQVIA: `iqvia competitors` pos 3.4,
   `companies like iqvia` pos 2.9, `looking for something better than iqvia` pos 4.0 — and even there
   CTR is 2% where position 3 should return 8–12%.

### 1.3 Why the September reassessment happened

- Between Sep 3 and Sep 6, 245 directory URLs (5 IndexNow waves) shipped on top of a 45-URL segment
  cluster, a 224-URL industry matrix and 7 locale copies. A month later **only 80 of the 245 are in
  GSC at all** (Wave 1 31%, Wave 2 19%, Wave 3 52%, Wave 4 26%, Wave 5 38%); 165 spokes have zero
  impressions. That is the classic "crawled, currently not indexed" footprint and it is a site-level
  quality signal.
- 27 separate URLs carry a `<title>` targeting "Healthcare Market Research Companies …"
  (`lib/ctr-seo-overrides.mjs` lines 63–520): the hub, `/healthcare-market-research-companies`,
  country hubs, 22 `/insights/top-healthcare-market-research-companies-*` pages, `/market-research`,
  `/bionixus-market-research-middle-east`, blog posts. Google cannot pick a winner, so none ranks.
- 38 commits changed titles/metas on the top pages since Aug 1 (155 overrides). Title churn on
  ranking URLs produces exactly the volatility seen in the Aug 19 report (−20 to −45 position swings
  on segment queries).
- 347 of 657 crawled URLs are under 2,000 visible words; the 29 segment-market pages (`italy
  daptomycin market`, `gcc keytruda market`) and ~146 "other market research" URLs are programmatic
  thin pages Google is now ignoring (avg pos 27–45, 0.3–0.5% CTR).
- One non-human query — `cairo hospitals healthcare 2023-2026`, **6,042 impressions, 0 clicks, pos
  1.9** on `/blog/healthcare-overview-egypt-market-2026` — inflates the baseline by ~190/day (~6% of
  impressions). Treat it as noise; exclude it from targets.

Not the cause (verified): SSR is healthy — every money page returns full text to Googlebot with
`index,follow` and a self-canonical; robots.txt allows all search and AI crawlers; only 8 URLs were
removed from `sitemap.xml` after Sep 20; the Sep 29 / Oct 3 locale and `/markets` 301s are small and
post-date the drop.

---

## 2. Targets, and the honest math

| KPI | Trough now | 6 months | 12 months | 18 months |
|---|---|---|---|---|
| Impressions/day (excluding the bot query) | 2,850 | **10,000** | 25,000 | 40–50,000 |
| Clicks/day | 49 | **150** | 500 | **1,200–1,500** |
| Site CTR | 1.6% | 1.5% | 2.0% | 3.0% |
| Buyer-intent share of clicks | ~8% | 30% | 40% | 45% |
| Meeting requests/day | ~0 | **3–6** | 15–25 | **30–50** |

Meeting math: 50 meetings/day from 1,500 clicks is a 3.3% click-to-meeting rate across *all* traffic.
B2B consulting sites convert 3–8% of *buyer-intent* visitors to a booked call when the CTA is a
calendar, not a form. So 50/day requires ≈700 buyer-intent clicks/day × 7%. That is the 18-month
case and only if Phase 1 (buyer-intent rankings) succeeds. Directory traffic will not produce
meetings no matter how the form is worded; it must be routed, not optimised.

Impression target composition at month 6 (10,000/day):

| Engine | Impr/day | Clicks/day | Mechanism |
|---|---|---|---|
| Healthcare directories at positions 1–3 in priority markets | 4,500 | 70 | Rank gains + 40 new healthcare spokes |
| Buyer-intent head terms on page 1 | 1,800 | 40 | Consolidation + rebuilt hub/service pages |
| `/insights/top-*` country listicles pos ≤5 in 15 priority markets | 1,500 | 20 | Depth + internal links |
| 40 flagship market reports (consolidated from 218) | 1,500 | 12 | Original primary data |
| Blog (commercial pharma topics) | 700 | 8 | 30 new posts, 30 rewrites |
| Total | 10,000 | 150 | |

---

## 3. Phase 0 — Stabilise and instrument (weeks 1–2)

Goal: stop self-inflicted volatility and make every later decision measurable.

| # | Action | Files | Done when |
|---|---|---|---|
| 0.1 | **Title/meta freeze** on every URL with ≥100 impressions in the current export. Only Phase 1 consolidation changes titles, once, then frozen 8 weeks. **Done 2026-10-04:** `data/seo/title-freeze.json` snapshots 204 URLs (71 with CTR overrides); `npm run verify:title-freeze` runs in `prebuild` and fails if a frozen title/description changes or if `lib/ctr-seo-overrides.mjs` and `src/server/ctr-seo-overrides.js` drift (they had: PR #187 changed the USA listicle title only in the Vite mirror, so SSR and hydrated titles disagreed — resynced to the canonical `lib/` copy). One-time changes: `node scripts/seo/verify-title-freeze.mjs --allow-title-change=/path`; refresh after each weekly export: `npm run title-freeze:refresh`. | `scripts/seo/verify-title-freeze.mjs`, `data/seo/title-freeze.json`, `lib/ctr-seo-overrides.mjs`, `src/server/ctr-seo-overrides.js`, `package.json` | Check passes; freeze list committed |
| 0.2 | Weekly GSC loop: every Monday drop the previous 7-day export into `data/gsc/current-week/` (move the old one to `previous-week/`) and run `npm run report:weekly`. **Done 2026-10-04:** `scripts/gsc-weekly-report.mjs` excludes `cairo hospitals healthcare 2023-2026` by default (`--exclude-query` adds more), prints an "Excl. bot/irrelevant queries" line (current window: 4,377 impr/day, 51.6 clicks/day, CTR 1.18% after removing 6,645 bot impressions) and drops excluded queries from the position/CTR tables. README documents the Monday loop. | `scripts/gsc-weekly-report.mjs`, `data/gsc/README.md` | Report shows "excl. bot query" line |
| 0.3 | Request indexing status for the 165 zero-impression directory spokes: run URL Inspection on a 20-URL sample per wave and record the reason (`Crawled – not indexed` vs `Discovered`). This decides Phase 3 scope. | manual, log in `docs/seo/directory-indexation-sample-2026-10.md` | Sample logged |
| 0.4 | Lead logging: HighLevel already receives every dual-posted lead (`src/server/highlevelLead.ts`). Export HighLevel contacts weekly to `data/leads/leads.csv` (columns `date, source_page, budget, timeline, request_type`) so the weekly report's Leads section stops saying "no data". | `data/leads/leads.csv`, `scripts/gsc-weekly-report.mjs` (add `request_type` column, count `Meeting request` separately) | Leads table populated |
| 0.5 | GA4: confirm `cta_click`, `lead_submitted`, `form_start` fire (they are consent-gated in `src/lib/analytics.ts`); add `meeting_booked` event (Phase 2). | `src/lib/analytics.ts` | Events visible in GA4 DebugView |

---

## 4. Phase 1 — Win the buyer-intent head terms (weeks 2–10)

This is the revenue phase. Everything else only feeds it.

### 4.1 One URL per head term (consolidation)

| Head term cluster (impr/32d, pos today) | Canonical target | What to do with the 26 cannibals |
|---|---|---|
| `healthcare market research` / `companies` / `agencies` / `firms` / `company` (≈1,750, pos 27–34) | `/healthcare-market-research` (`src/pages/healthcare-research/HubPage.tsx`) | 301 `/healthcare-market-research-companies`, `/market-research`, `/blog/top-healthcare-market-research-firms-mena-europe`, `/blog/top-healthcare-market-research-companies-2026`, `/insights/top-global-healthcare-market-research-companies-2026` into the hub. Retitle every country listicle to the *country-first* form ("Healthcare Market Research Companies in Poland (2026)") so they stop competing on the bare head term. Country hubs (`/healthcare-market-research/{country}`) get titles about *research in that market*, not *companies*. |
| `pharma market research companies` / `pharmaceutical market research` / `firms` (≈600, pos 21–32) | New page `/pharmaceutical-market-research` (static-HTML pattern like `public/conf/iqvia-alternative.html`) | Link from hub, services, every `/pharmaceutical-companies-*` footer. |
| `medical market research` / `quantitative medical market research` (≈250, pos 43) | `/medical-device-market-research` (new, or repurpose `/services/quantitative-research`) | — |
| `heor consulting` / `heor services` (≈165, pos 41–51) | `/heor-consulting` (exists, pos 48, 620 impr, 0 clicks — thin) | Rebuild to 2,500+ words: HTA dossier work in KSA/UAE, budget-impact models, 3 anonymised case studies, pricing band, FAQ schema. 301 `/healthcare-market-research/services/*` duplicates if any. **Done 2026-10-04 (4,474 words SSR):** answer block "What is HEOR consulting", eight named HEOR services (incl. embedded/retained HEOR — a query with 20 impr), three engagement blueprints (structure, inputs, outputs — no invented results; real anonymised case studies still needed from the team, none exist in Sanity), pricing band, regional-vs-global positioning, 5 new FAQs (13 total in FAQPage), WebPage `dateModified`. No duplicate URL exists to 301; `/heor-consulting-saudi-arabia` stays as the spoke (pos 11.9). Title/H1 unchanged (frozen). |
| `market access services` / `consulting` / `companies` / `solutions` (≈360, pos 16–64) | `/services/market-access` (exists, pos 69) | Same rebuild; merge `/healthcare-market-research/services/market-access` (898 impr, pos 34.6) into it with a 301; keep `/gcc-market-access-guide` (3,533 impr, pos 22) as the GCC spoke linking up. |
| `pharma competitive intelligence` / `healthcare competitive intelligence` (≈250, pos 50–69) | `/services/competitive-intelligence` (942 impr, pos 60) | Rebuild; 301 `/blog/competitive-intelligence-pharma-gcc` into it. |
| `iqvia competitors` / `companies like iqvia` / `better than iqvia` (≈420, pos 2.9–4) | `/iqvia-alternative` (already wins) | CTR work only (4.3). |
| `market research companies in {qatar, egypt, saudi…}` (≈400, pos 15–27) | `/insights/top-market-research-companies-{country}-2026` | Depth + internal links (Phase 4.2). |

**4.1 status 2026-10-04 — consolidation shipped, with two deviations from the table above (GSC 29 Aug–29 Sep):**

| URL | GSC | Decision |
|---|---|---|
| `/healthcare-market-research-companies` | not in top-1,000 pages | **301 → hub**; route removed |
| `/blog/top-healthcare-market-research-firms-mena-europe` | 745 impr, 0 clicks, pos 29 | **301 → hub** |
| `/healthcare-market-research/services/market-access` | 1,087 impr, 0 clicks, pos 35 (thin template) | **301 → `/services/market-access`** (2,861-word rebuild) |
| `/blog/competitive-intelligence-pharma-gcc` | 75 impr, 0 clicks, pos 27 | **301 → `/services/competitive-intelligence`** |
| `/insights/top-global-healthcare-market-research-companies-2026` | 144 impr, **3 clicks, pos 9.9** | **Kept** — outranks the hub (21.5); redirecting would forfeit a page-1 URL. Revisit after the hub rewrite. |
| `/market-research` | 3,349 impr, 4 clicks, pos 66 | **Kept** — it is the cross-industry hub; 301-ing it into the pharma hub would break the non-healthcare isolation (3.1a). Not a head-term cannibal. |
| `/healthcare-market-research/services/kol-mapping` | 152 impr, pos 15 | **Kept** — outranks its `/services/` twin. |

Internal links to the four retired URLs rewritten across 26 `src/` files (duplicate "related" cards removed where a page already linked the hub); Sanity blog bodies rewritten at render via `REDIRECT_HREF_REWRITES` in `blog-legacy-redirects.mjs`; article generators point to `/services/competitive-intelligence`; sitemap regenerated (exactly the four sources dropped); targets added to Tier 0 of `scripts/gsc-priority-recrawl.txt`. Still to do in 4.1: the country-first retitle of listicles (blocked by the title freeze until a deliberate `--allow-title-change` pass).

**4.1 status 2026-10-04 — `/pharmaceutical-market-research` shipped.** New 3,600-word SSR page on `StrategicServicePage` (answer block, lifecycle / methods / vs-syndicated / 34-country markets / how-to-choose / pricing sections, 10 FAQs, WebPage `dateModified`). The thin `/pharmaceutical-market-research-provider` (≈0 impressions, same head terms) now 301s to it instead of competing with it; its CTR override was removed. Linked from `/healthcare-market-research`, `/services`, the pharma study-type pages and the HTML sitemap; added to Tier 0 recrawl. The orphaned `HealthcareMarketResearchCompanies2026.tsx` was deleted. Template change: the hub-link sentence now renders directly under the hero on all `StrategicServicePage` pages.

Rules: every 301 goes in `config/legacy-redirects.json` **and** `vercel.json`; sitemap regenerated
(`npm run build:sitemap`); `dateModified` bumped on the target; IndexNow priority list updated
(`scripts/gsc-priority-recrawl.txt`, `npm run indexnow:priority`).

### 4.2 Rebuild the hub as the category page Google expects

`/healthcare-market-research` has 6,513 words and still sits at position 19–34 because it is written
as "who to brief" — a listicle — rather than as the definitive category page. Rewrite to:

1. H1 `Healthcare Market Research Company for Pharma & MedTech` (one exact head term, brand second).
2. 150-word answer block (what BioNixus does, 48 countries, primary research, minimum engagement)
   — this is the LLM-citable block.
3. Services grid linking the six rebuilt service pages. **Status 2026-10-04: done** — all six
   `/services/*` pages now render 2,048–2,904 words server-side via `ServiceDeepDive`
   (`src/data/seo/serviceDeepContent.ts`): answer block, market context, five-step approach, use
   cases, primary-vs-syndicated table, scope and published pricing band, scoping-call CTA, related
   links, `<details>` FAQ; FAQPage + WebPage `dateModified` schema on every slug. `/services` hub
   already measures 2,203 words in production.
4. Markets grid linking the 10 priority country hubs.
5. Evidence: 3 case studies with numbers, 4 logos, 2 named analysts (Western roster per
   `src/data/editorialAuthors.ts`).
6. "How we compare to IQVIA / Kantar / Ipsos" table linking the alternative pages.
7. Pricing bands (from `/pricing`) — buyers search with budget in mind.
8. FAQ (`<details>/<summary>`, FAQPage schema) answering the agency/company/firm variants.
9. **Primary CTA above the fold = Book a 30-minute scoping call** (Phase 2).

Schema: `Organization` + `Service` + `FAQPage` + `BreadcrumbList`; drop the `ItemList` currently
implying a ranking.

### 4.3 CTR on the pages that already rank

| URL | Query / pos | CTR now | Fix |
|---|---|---|---|
| `/iqvia-alternative` | `iqvia competitors` 3.4 | 2.1% | Title test (single change, then freeze): "IQVIA Competitors: 10 Alternatives Compared for Pharma (2026)". Add `ItemList` with 10 entries so Google can show a carousel; add `FAQPage` for `companies like iqvia`, `better than iqvia`. Meta: lead with the comparison table promise and "primary research from $10k". |
| `/nielsen-alternative` | `nielsen competitors` 7.5 | 1.3% | Same pattern. |
| `/blog/nupco-saudi-arabia-tendering-guide` | pos 8, 913 impr | 0.4% | Title: "NUPCO Tenders in Saudi Arabia: 2026 Guide for Pharma Suppliers". It is a buyer-adjacent page — add the scoping-call CTA. |
| `/saudi-payer-market-access-research` | pos 6, 183 impr | 0% | Title/meta with "SFDA, CHI, NUPCO" named; Phase 2 CTA. |
| `/pharmaceutical-companies-egypt` | pos 5.4, 10,754 impr | 2.5% | Already strong; do **not** touch title. Add `ItemList` + `dateModified` freshness line in the first 100 words ("Updated October 2026"). |

### 4.4 Internal-link engine

The directory cluster (`/pharmaceutical-companies-*`, `/medical-device-companies-*`) is where
authority is. Add a "Research in {country}" block to `src/pages/templates/CompanyDirectoryPage.tsx`
and the legacy `EgyptPharmaCompanies.tsx`-style pages that links, with descriptive anchors, to: the
hub, `/pharmaceutical-market-research`, the matching `/insights/top-market-research-companies-
{country}-2026`, `/iqvia-alternative`, and the relevant service page. Rebuild `scripts/audit-internal-
links.mjs` output into a weekly "inbound links to the 8 money pages" count; target ≥150 internal
inbound links to the hub within 4 weeks.

**4.4 status 2026-10-04 — pharma directories shipped.** New `src/components/seo/PharmaCompaniesResearchLinks.tsx` ("Commissioning research in {country}") renders after the "How BioNixus supports" section on all 25 `/pharmaceutical-companies-*` pages (15 standalone pages + the 10 on `CountryCompaniesGuide`). Each block links the country pharma research page, the country healthcare research page, `/pharmaceutical-market-research`, `/iqvia-alternative`, `/services/market-access`, `/services/kol-stakeholder-mapping` and `/services/quantitative-research` (Iraq, Iran and Morocco have no country research page, so they get the five global links). The hub and country listicles were already linked by `PharmaCompaniesGccHubLinks` / `PharmaCompaniesGlobalHubLinks`, so they were not duplicated. Still to do: the same block on `/medical-device-companies-*`, and the weekly inbound-link count.

---

## 5. Phase 2 — Meeting-first conversion layer (weeks 2–6, parallel with Phase 1)

Decisions taken 2026-10-04: **no embedded scheduler** (spam risk at this stage). The existing flow
stays — qualification form first, then the `schedule.bionixus.com` link on the thank-you state. Lead
routing changes so that only scoping-call requests generate a Formspree email alert; everything else
is saved to HighLevel only.

### 5.1 Lead routing (shipped in this commit)

| Form | Request type | Formspree | HighLevel | Visitor outcome |
|---|---|---|---|---|
| `QualificationForm` — "Book a 30-minute scoping call" (budget ≥ $20K or unspecified) | `Scoping Call Request` | **Yes** | Yes | Thank-you + "Pick a time for your call" link to `schedule.bionixus.com` |
| `QualificationForm` — budget "Under $20K" | `Research Enquiry (below minimum)` | No | Yes (`qualified: no`) | Thank-you "we'll reply by email"; no booking link |
| Contact page form (`ContactSection`) | `Contact Request` | No | Yes (+ `/api/subscribe`) | Thank-you |
| Gated sample downloads (`GatedAssetForm`) | `Gated Asset Download` | No | Yes | PDF download |
| Case-study gate, email capture, WhatsApp widget, clinical-diagnostics registration | as before | No | Yes | as before |

Implementation: `src/lib/submitLeadDual.ts` now defaults to `channels: 'highlevel-only'`;
`submitScopingCallLead()` is the single opt-in to Formspree. The no-JS `action={FORMSPREE_ENDPOINT}`
fallbacks were removed from the HighLevel-only forms. Tests:
`src/lib/__tests__/submitLeadDual.test.ts`, `src/components/conversion/__tests__/dualLeadForms.test.tsx`
(one asserts no surface other than `QualificationForm` references Formspree).

### 5.2 Two visitor paths, decided by page type

| Page type | Primary CTA | Secondary | Why |
|---|---|---|---|
| Buyer-intent (hub, services, alternatives, pricing, country hubs, `/insights/top-*market-research*`, commercial blog posts) | **"Book a 30-minute scoping call"** → `QualificationForm` dialog (`ConversionCTA` variant `talk-to-research`, relabelled in this commit) | "Email a brief" (mailto) | Buyers want a conversation; the form qualifies before the calendar link appears |
| Directory / list pages (`/pharmaceutical-companies-*`, matrix spokes) | Intent switch: "I need research on this market" → scoping-call form · "I want to be listed / update a company entry" → lightweight HighLevel-only form · "Job seeker?" → one line pointing to LinkedIn | — | Routes list-intent away from the sales pipeline; stops "generic" fills |
| Market reports | "Download sample" (gated, HighLevel-only) **then** scoping-call CTA on the thank-you state | — | Keep asset capture, add the meeting step |

### 5.3 Copy and placement changes (next)

- `src/lib/homePageHardcoded.ts` / `src/lib/homePageUiStrings.ts` `ctaVariants`: headline "Talk to a
  research lead about {country/therapy} this week", button "Book a 30-minute scoping call".
- `src/components/StickyCTA.tsx` (mobile bar): "Book a call" on buyer pages, hidden on directory pages.
- Mount `ExitIntentDialog` in `src/App.tsx` **only** for buyer-intent routes, offering the scoping
  call (not newsletter). Never on directory routes.
- `/contact`: scoping-call CTA above the form; form remains for RFPs (HighLevel-only).
- `/pricing`: replace the mailto cover CTA with the scoping-call dialog.
- Add a small "What happens on the call" strip (3 bullets) next to every scoping-call CTA.
- Analytics: add `meeting_requested` (form success with `Scoping Call Request`) and
  `meeting_link_clicked` (click on the schedule link) in `src/lib/analytics.ts` so the weekly report
  can count both.

### 5.4 Qualification without friction

Keep the form to 6 fields. Budget band and role tag `qualified` in HighLevel; the weekly report
counts `Scoping Call Request` + `qualified: yes` as the KPI. Target by month 6: 3–6/day.

---

## 6. Phase 3 — Remove the dead weight (weeks 4–12)

Sequenced *after* Phase 1 consolidation so link equity flows to rebuilt pages. Never remove a URL
with ≥5 clicks in the last 90 days without a 301 to an equivalent page.

| # | Set | Size | Action |
|---|---|---|---|
| 3.1 | Directory spokes with 0 impressions at day 45 (recheck after Phase 0.3 sample) | ~165 | Rewrite every zero-impression spoke that stays live to the Wave-1 Egypt standard (≥2,200 words, sourced table, 2026 update line) — healthcare first, then non-healthcare. **Decision 2026-10-04: non-healthcare directories (banks, FMCG, F&B, construction, hotels, real estate…) keep expanding**, but on an isolated graph so they cannot dilute the pharma signal — see 3.1a. Spokes still at 0 impressions at day 90 after the rewrite follow the kill rule. |
| 3.1a | Non-healthcare directory isolation | — | (1) Own hub `/company-directories` and own `sitemap-directories.xml` (already separate); (2) **no links from healthcare money pages** (hub, services, alternatives, pharma/medtech directories, reports) into non-healthcare spokes — `RelatedPages`/footer link only within the same industry family; (3) non-healthcare spokes link *up* to `/cross-industry-market-research` and the country hub, never to the pharma hub; (4) Western/MENA author by geography, directory CTA switch (5.2) so list-intent fills do not enter the pharma pipeline; (5) publish in 20-URL pilots with the 28-day gate before scaling, max 40 new non-healthcare URLs/month; (6) extend `scripts/directory-matrix-gates.mjs` to report healthcare and non-healthcare waves separately and `scripts/audit-internal-links.mjs` to fail if a healthcare money page links into a non-healthcare spoke. |
| 3.2 | Segment-market pages (`src/data/segmentMarkets/*`) | 45 | Keep the 8 with ≥50 impressions and real primary data (GCC IVD, Saudi vaccine, Saudi biosimilars, Saudi cancer diagnostics, GCC generic injectables, Saudi obesity/GLP-1, Egypt obesity, GCC biologics). 301 the remaining 37 into their parent country report. |
| 3.3 | Market reports | 218 → **80, staged** | **Recommendation adopted: 80, not 40.** Keep-set = every report with ≥1 click in 90 days, or position ≤20 with ≥20 impressions, or ≥100 impressions at any position (≈80 URLs; the 48 reports at positions 21–40 hold 11,243 impressions — half the family's exposure — and are the upside). Stage A (weeks 4–6): `noindex,follow` the ~138 non-keep reports and drop them from the sitemap — reversible, no redirects yet. Stage B (week 10, after one GSC cycle): 301 the noindexed reports to the nearest keep report; re-index any that lost a click in the window. Of the 80, designate 40 flagships for original primary data (one chart from BioNixus fieldwork each), methodology box, named analyst, quarterly `dateModified`; the other 40 get the thin-page rebuild (≥2,000 words) and a yearly refresh. Why 80 over 40: the 40-only cut forfeits ~6,000 impressions/28d of position-21–40 exposure that content depth can lift to page 1; the 80 cut removes only reports with no measurable demand. |
| 3.4 | Industry matrix (`scripts/data/industry-matrix-sitemap.mjs`, 224 URLs) | 224 | Healthcare/pharma industries: rebuild thin ones. Non-healthcare industries: same isolation rules as 3.1a; noindex only URLs still at 0 impressions after a 90-day click check following rebuild. |
| 3.5 | Thin service scopes (`/services/*` < 1,000 words, `/ru/services`) and 62 locale copies with < 10 clicks/90d | ~70 | Expand the 7 EN service pages (Phase 1); 301 untranslated locale copies to EN (the existing `lib/untranslated-locale-redirects.mjs` pattern). Keep AR: `/ar/pharmaceutical-companies-egypt` earns 5.7% CTR. |
| 3.6 | Quality gate | — | Extend `scripts/directory-matrix-gates.mjs` `--strict` to fail the build when a wave's 90-day kill list is non-empty, and wire it into `prebuild`. No new programmatic family ships without a gate file. |

Expected impression effect of Phase 3: −800 to −1,200/day of near-zero-CTR impressions, offset within
6–8 weeks by better crawl allocation to the pages that matter. Do not judge the plan on headline
impressions during weeks 4–10.

---

## 7. Phase 4 — Scale the click engines (months 3–12)

### 7.1 Healthcare directories: from position 5–12 to 1–3

Economics: `/pharmaceutical-companies-egypt` earns 263 clicks/32d at position 5.4 (2.5% CTR). At
position 1–2 the same page earns 8–15% CTR on more queries — 1,500–2,500 clicks/32d. The 12 pharma
spokes alone can carry ~150 clicks/day; the full healthcare set (pharma, devices, distributors,
hospital groups, insurers, pharmacy chains, biotech, CRO × 15 priority countries ≈ 120 pages) can
carry 300–500/day at maturity.

Per spoke, in priority order (Egypt, UAE, Saudi, Kuwait, Iraq, Qatar, Oman, Bahrain, Turkey,
Pakistan, Indonesia, India, Nigeria, Morocco, Jordan):

- Depth: ≥40 companies with HQ city, ownership, therapy focus, 2025 revenue band, regulator licence,
  source link; sortable table; downloadable CSV behind the directory CTA switch.
- Freshness: visible "Updated {month} 2026" in the first 100 words, `dateModified`, quarterly diff.
- Entity schema: `ItemList` of `Organization` items; `Dataset` schema on the downloadable list.
- Internal links: hub → country hub → directory → sibling directories (`RelatedPages`), ≥3 inbound
  links from blog posts about that market.
- Arabic twin for GCC/Egypt (the AR Egypt page converts at 5.7%).

### 7.2 Country "market research companies" listicles

158 `/insights/top-*` pages average position 15.4. For the 15 priority markets: rewrite to 2,500+
words with a comparison table (specialism, languages, fieldwork capability, typical budget, HQ),
BioNixus positioned honestly, FAQ schema, Western or MENA authors per the editorial rules (never
Alsaadany on comparison pages). Target position ≤5 in 12 markets by month 9. Noindex the long tail of
listicles for countries BioNixus will never sell into (keep ≤60 live).

### 7.3 Flagship market reports (from 6.3)

40 reports × one original data chart from BioNixus primary research each (this is the moat IQVIA
competitors cannot copy). Gate the full PDF; keep 60% of the content open and extractable for AI
answers. Year-tag titles once per year, not monthly.

### 7.4 Commercial blog programme

30 new posts and 30 rewrites over 9 months, exclusively on pharma commercial topics with buyer
intent: NUPCO/SFDA/CHI processes, HTA dossiers (UAE, KSA, Egypt), launch readiness, GLP-1 market
access, KOL mapping, ATU design, payer research, pricing & reimbursement per country. Each post
links to one service page and one country hub and carries the scoping-call CTA. Authors per
`src/data/editorialAuthors.ts`.

### 7.5 Brand demand

`bionixus` is the top click query (46 clicks, 59% CTR). Brand search is the cheapest click there
is: every LinkedIn post, newsletter and conference talk should name the site. Target 50–100 brand
clicks/day by month 12 (tracked separately in the weekly report).

---

## 8. Phase 5 — Authority: links the head terms need (months 2–18)

Head terms like `healthcare market research companies` are held by firms with thousands of
referring domains. Content alone will not get the hub to page 1; links will.

1. **Quarterly primary-data study** ("GCC Physician Digital Behaviour 2026", "Saudi Payer
   Priorities", "Egypt Pharmacy Channel Index"): 1 open-access report + 1 press release + 10
   journalist pitches per quarter. Host on `/insights/` with `Dataset` schema.
2. **Data citations in the directory pages** already attract natural links from local press and
   Wikipedia-style sources; add a "Cite this list" block with the canonical URL.
3. **Industry directories and associations** (ESOMAR, EphMRA, BHBIA, Insights Association, Gulf
   health-tech bodies): complete profiles linking to the hub, not the homepage.
4. **Guest analysis** in pharma trade press (Pharmaceutical Executive MEA, Arab Health, Omnia
   Health) — 1/month, authored by the roster.
5. Track referring domains to the 8 money pages monthly (`docs/seo/ai-seo-offsite-checklist.md` can
   hold the log). Target +40 referring domains to the hub cluster by month 6, +120 by month 12.

---

## 9. Governance (ongoing)

- **Freeze rule:** titles on ranking URLs change at most once per quarter, with a before/after log in
  `reports/title-iteration-*.md`.
- **Publish rule:** no new URL without ≥1,800 visible words, ≥3 inbound internal links, an owner, and
  a gate file. Programmatic families need a 20-URL pilot with 28-day data before scaling.
- **Prune rule:** any URL at 0 clicks and < 10 impressions/day at day 90 is rewritten, merged or
  noindexed — never left thin.
- **Weekly loop (Monday):** export → `npm run report:weekly` → fill the "Next-week priority" section
  from the data → one Linear ticket per action → ship by Friday → IndexNow.
- **Monthly:** indexation sample (URL Inspection, 30 URLs), referring-domain count, meeting-request
  count vs target.

---

## 10. Milestones

| Month | Expected state | Leading indicators |
|---|---|---|
| 1 | Volatility stopped; data loop live; Phase 1 consolidation shipped; scheduler live on hub, services, alternatives, pricing, contact | Hub inbound internal links ≥150; `meeting_booked` events firing |
| 2 | Hub and 5 service pages rebuilt; IQVIA CTR ≥6%; first 10 directory rewrites | Buyer-intent clicks ≥8/day |
| 3 | Phase 3 prune complete; 40 flagship reports defined | Impressions dip then recover; position ≤10 |
| 4–6 | Hub top-10 for `healthcare market research companies`; 12 pharma directories pos ≤3; 15 listicles rewritten | **10,000 impr/day, 150 clicks/day, 3–6 meetings/day** |
| 7–12 | Hub top-5; 120 healthcare directories; 40 flagship reports with primary data; 30 blog posts | 25,000 impr/day, 500 clicks/day, 15–25 meetings/day |
| 13–18 | Authority programme compounding; brand demand 50–100 clicks/day | 40–50,000 impr/day, 1,200–1,500 clicks/day, 30–50 meetings/day |

---

## 11. Decisions log (2026-10-04)

1. **Non-healthcare directories**: expand them too, but isolated from the healthcare graph (3.1a).
2. **Scheduler**: no embedded calendar; keep form-then-link flow. Only the scoping-call form reaches
   Formspree; all other forms are HighLevel-only (5.1).
3. **Market reports**: 218 → 80, staged noindex-then-301 (3.3).
4. **Budget floor**: "Under $20K" is saved to HighLevel only, answered by email, no booking link (5.1).
5. **Thin pages**: rebuild rather than remove wherever the page has a buyer-intent target — starting
   with the seven `/services/*` pages (all under 2,000 words), then the 194 "other" thin URLs by
   90-day click order.

---

## DEPLOY CHECKLIST (this commit)

- `scripts/directory-matrix-gates.mjs` — fixed `Top pages` column matching; impressions/day now uses
  the export's real day count
- `data/gsc/current-week/*.csv` — 29 Aug–29 Sep 2026 export; previous Aug 13–19 export moved to
  `data/gsc/previous-week/`
- `reports/weekly-report-2026-10-04.md`, `reports/weekly-report-2026-10-04.data.json` — regenerated
- `src/lib/submitLeadDual.ts` — default HighLevel-only; `submitScopingCallLead()` is the only
  Formspree path; `error` / `networkError` result fields
- `src/components/conversion/QualificationForm.tsx` — "Book a 30-minute scoping call"; `Scoping Call
  Request` request type; under-$20K branch (HighLevel-only, email thank-you)
- `src/data/qualificationFormOptions.ts` — `QUALIFICATION_FORM_BELOW_MINIMUM_BUDGET`
- `src/components/conversion/ConversionCTA.tsx` — dialog/button copy aligned to the scoping call
- `src/components/ContactSection.tsx`, `src/components/CaseStudyContactGate.tsx`,
  `src/components/conversion/EmailCaptureForm.tsx`, `src/components/WhatsAppProposalWidget.tsx`,
  `src/components/conversion/GatedAssetForm.tsx` — HighLevel-only; Formspree `action` fallbacks removed
- `src/lib/__tests__/submitLeadDual.test.ts`, `src/components/conversion/__tests__/dualLeadForms.test.tsx`
- `docs/seo/growth-plan-2026-10-impressions-clicks-meetings.md` — this plan
