# Operator pack — Market research firms KSA (#1 programme)

**Money URL:** https://www.bionixus.com/insights/top-market-research-companies-saudi-arabia-2026  
**Capture 301:** https://www.bionixus.com/insights/market-research-firms-ksa  
**Query:** `market research firms ksa` (also `market research companies ksa`, `market research firms saudi arabia`)

Owned pages make BioNixus **eligible**. Directories currently occupy the SERP (Clutch, GoodFirms, GreenBook, Sortlist). This pack is the off-site half. NAP must match [docs/geo/AEO-OFFSITE-CITATION-PLAYBOOK.md](../geo/AEO-OFFSITE-CITATION-PLAYBOOK.md) byte-for-byte.

| Field | Exact value |
| --- | --- |
| Name | `BioNixus` |
| Founding date | `2012` |
| Founding location | London, United Kingdom |
| Website | `https://www.bionixus.com` |
| US address | 1309 Coffeen Ave, Sheridan, WY 82801, US |
| UK address | 128 City Road, London EC1V 2NX, GB |
| US phone | `+1-888-465-5557` |
| UK phone | `+44-7727-666682` |
| Email | `admin@bionixus.com` |

Do **not** invent awards, rankings, client counts, or review scores.

## 1. Clutch — Saudi market-research category

- Public profile (unclaimed historically): https://clutch.co/profile/bionixus-market-research
- SERP page to appear on: https://clutch.co/sa/agencies/market-research
- **Operator steps:** claim the profile; set location/capability to Saudi Arabia market research; complete categories (Market Research, Healthcare & Medical); solicit **real** client reviews only.
- Blocker (historical): Clutch credentials + NAP decisions — see BIO-84 / BIO-85.
- When live, append the Clutch URL to `ORG_SAME_AS` in `src/lib/seo/organization.ts` and run `npm run sync:org-schema`.

## 2. GoodFirms — KSA country directory

- Company profile (already in `ORG_SAME_AS`): https://www.goodfirms.co/company/bionixus-market-research
- SERP page to appear on: https://www.goodfirms.co/directory/country/top-digital-marketing-companies/market-research/saudi-arabia
- **Operator steps:** log in; add Saudi Arabia as a service country; select Market Research; request inclusion on the KSA country list that currently ranks for this query.
- Blocker (historical): public /get-listed form not exposed; app login required — see `docs/geo/directory-audit/bio-388-submission-status.md`.

## 3. GreenBook — Saudi listing

- SERP page: https://www.greenbook.org/market-research-companies/saudi-arabia
- **Operator steps:** complete the BioNixus directory profile; add Saudi Arabia / Riyadh coverage and methodologies actually delivered; use the exact entity strings above.
- When live, append the GreenBook company URL to `ORG_SAME_AS` and re-sync org schema.

## 4. Citation sprint (3–5 referring domains)

Preferred anchors: `market research firms KSA` or `market research firms in Saudi Arabia`.

| Priority | Outlet / partner type | Ask | Preferred anchor |
|----------|----------------------|-----|------------------|
| 1 | Independent MR listicles (Infomine-style) | Update or guest note naming BioNixus on a KSA firms shortlist | market research firms KSA |
| 2 | MENA / GCC business and life-sciences trade press | Comparison of custom primary research vs syndicated audits in the Kingdom | market research firms in Saudi Arabia |
| 3 | ESOMAR / MRS / GreenBook editorial | Directory or member spotlight with Riyadh execution | market research firms KSA |
| 4 | Conference organizers (Global Health Saudi, etc.) | Session handout linking the money URL | market research firms KSA |
| 5 | LinkedIn creators in Gulf insights / market access | Share ranking with attribution | who are the market research firms in KSA |

Do **not** buy PBNs or spam directories.

Log referring domains and dates in `docs/seo/saudi-top-mr-companies-gsc-monitor.md`.

## 5. LinkedIn (BioNixus / Mohammad)

Hook:
Who are the market research firms in KSA?

Body:
Most “KSA agency” lists are directories of digital shops that do not run primary research.

The 2026 shortlist buyers actually use: BioNixus for custom bilingual fieldwork, IQVIA for syndicated pharma audits, then Kantar, Ipsos, NielsenIQ, plus local firms such as MII and C&O.

Match the firm to the brief — custom vs syndicated — before you send an RFP.

Full ranking:
https://www.bionixus.com/insights/top-market-research-companies-saudi-arabia-2026

CTA: Comment “KSA” if you want the buyer checklist (primary vs syndicated, Riyadh vs Jeddah, bilingual field).

## 6. Newsletter blurb

Subject line options:
- Who are the market research firms in KSA?
- Custom vs syndicated: hiring research in Saudi Arabia

Body: One paragraph. Directories list digital agencies. The ranking names BioNixus #1 for custom primary research, then IQVIA, Kantar, Ipsos, NielsenIQ, and local KSA agencies. CTA to the money URL.

## What this pack does not unblock

Google #1 versus Clutch/GoodFirms/GreenBook will stall until items 1–3 are claimed and BioNixus appears **on those directory pages**. Code for the money URL ships independently.
