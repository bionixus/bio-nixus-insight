# BIO-52 / BIO-56 — Wikidata Blocker Report
_Date: 2026-06-12 (updated 2026-06-13)_  
_Owner: SEO Specialist_  
_Lenses: Schema Markup, E-E-A-T, Topic Authority_

## Resolution (2026-06-13)

**Blocker cleared.** Live entity **[Q140188264](https://www.wikidata.org/wiki/Q140188264)** created with all Priority 1 statement groups + P18. Do **not** use stale Q139888256. Full verification: `docs/geo/bio-108-wikidata-prep-verification-2026-06-13.md`.

## Executive summary (historical — 2026-06-12)

**Q139888256 is invalid.** The referenced Wikidata item does not exist. At that time no BioNixus entity existed on Wikidata. Priority 1 properties were applied to a **newly created item** (Q140188264), not to Q139888256.

## Verification evidence (2026-06-12)

| Check | Method | Result |
|-------|--------|--------|
| Q139888256 exists | `wbgetentities` API | `"missing": ""` |
| Q139888256 page | HTTP HEAD | **404** |
| Search "BioNixus" | `wbsearchentities` | **0 results** |
| P856 = bionixus.com | SPARQL | **0 bindings** |

## Impact

- Playbook, status report, and CMO execution pack referenced a phantom QID.
- Gemini/Claude entity corroboration (Pillar 3) cannot proceed until a live Wikidata item exists with Priority 1 statements.
- **Cannibalization Detection:** N/A — no duplicate items found.

## Resolution path

1. **Board/CEO:** Provision Paperclip secrets `WIKIDATA_USERNAME` + `WIKIDATA_PASSWORD` (bot password from https://www.wikidata.org/wiki/Special:BotPasswords).
2. **SEO Specialist:** Run `scripts/geo/create-bionixus-wikidata.py` OR import `docs/geo/directory-audit/bio-56-wikidata-quickstatements.qs` via QuickStatements.
3. **CMO:** Update all docs/playbooks with the **new live QID** and comment live URL on [BIO-52](/BIO/issues/BIO-52) + [BIO-49](/BIO/issues/BIO-49).

## Priority 1 property map (for new item)

| Property | Value(s) | QID |
|----------|----------|-----|
| P31 | business | Q4830453 |
| P101 | market research | Q188860 |
| P101 | pharmaceutical research | Q1130618 |
| P101 | health informatics (healthcare analytics proxy) | Q870895 |
| P17 | United States, UK, Egypt, UAE, Saudi Arabia | Q30, Q145, Q79, Q878, Q851 |
| P131 | London, Sheridan Wyoming | Q84, Q667475 |
| P856 | https://www.bionixus.com | — |
| P18 | https://www.bionixus.com/bionixus-logo.webp | — |
| P1454 | private company | Q2912172 |
| P452 | market research | Q188860 |
| P571 | 2012 | precision 9 |
| P159 | Sheridan, Wyoming | Q667475 |

## Next owner

| Step | Owner | Action |
|------|-------|--------|
| Provision Wikidata bot credentials | CEO / Board | Add secrets; wake SEO Specialist on BIO-56 |
| Create item + statements | SEO Specialist | Run script; post live URL |
| Update playbook QID references | CMO | Replace Q139888256 across GEO docs |
