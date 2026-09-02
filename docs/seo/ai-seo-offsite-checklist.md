# AI SEO off-site checklist (Sep 2026)

On-site extractability for the top-keyword plan is in `feat/ai-seo-top-keywords`. These items cannot be shipped in the repo. Do them this month. Do not publish another self-ranked country listicle.

## 1. Index the account-level page

URL: `https://www.bionixus.com/account-level-market-research`

- Search Console → URL Inspection → Request indexing
- Confirm `/account-level-market-research` is in `sitemap.xml` (it is; priority 0.9)
- Optional: ping IndexNow for that URL after deploy

## 2. Google Business Profile — Dubai, Cairo, Riyadh

Drafts already live in `bionixus-gbp-drafts/`:

- `dubai-profile-copy.md` — JLT Swiss Tower address
- `riyadh-profile-copy.md`
- Cairo: use the Greater Cairo MENA office on `nap-master.md`

Category: Market Research Company. Website: bionixus.com. Do not create a second brand name.

UAE “best market research company” AI Overviews already pull the local pack (Sapience, Research Konnection, Greenland). No GBP = no pack.

## 3. Clutch (UAE / Egypt / KSA directories)

Clutch country directories are already cited in Google AI Overviews and DuckDuckGo shortlists.

- Create or complete the BioNixus Clutch profile
- Offices: Dubai, Cairo, Riyadh (match NAP)
- Categories: Market Research, Healthcare & Pharma
- Ask 3–5 recent clients for verified Clutch reviews (same wording as `/client-reviews` is fine)
- Claim listing in [UAE](https://clutch.co/ae/agencies/market-research), [Egypt](https://clutch.co/eg/agencies/market-research), [Saudi Arabia](https://clutch.co/sa/agencies/market-research)

Also refresh Greenbook: add GCC offices and reviews. Skip G2/Capterra unless a reviewer already wants to post.

## 4. Wikipedia — fix the entity collision

`en.wikipedia.org/wiki/BioNixus` is 404. Web search for the name resolves to Bionix Radiation Therapy and Bionix IFVs.

- Wikidata item already exists (see `bionixus-gbp-drafts/wikidata-q139888256-properties.json` and Organization `sameAs`)
- Do **not** write the article from this repo. Wikipedia requires independent secondary sources
- Collect: trade-press mentions, Greenbook, Insight Platforms, company registry filings, client-named case studies in third-party outlets
- Draft a stub only after two independent reliable sources exist
- Disambiguate from Bionix (medical devices) and Bionix (SAF vehicles) in the first sentence

## 5. Freeze

No new `/insights/top-market-research-companies-{country}-2026` pages that rank BioNixus #1. Existing listicles stay; they now link to `/iqvia-alternative`, `/account-level-market-research`, and `/pricing`.
