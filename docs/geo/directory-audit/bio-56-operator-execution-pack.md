# BIO-56 — Operator Execution Pack: Create BioNixus Wikidata Item
_Date: 2026-06-12 (verified)_  
_Parent: [BIO-52](/BIO/issues/BIO-52)_  
_Owner: SEO Specialist_

## Status (verified 2026-06-13)

**Live entity:** [Q140188264](https://www.wikidata.org/wiki/Q140188264) — all Priority 1 groups + P18 present.  
**Stale QID:** Q139888256 does NOT exist (API `missing`, HTTP 404). Do not use.

| Check | Result |
|-------|--------|
| `wbgetentities` Q139888256 | missing |
| `wbsearchentities` "BioNixus" | **Q140188264** |
| Priority 1 audit on Q140188264 | **12/12 pass** |

Full evidence: `docs/geo/bio-108-wikidata-prep-verification-2026-06-13.md`

## Option A — Automated script (preferred)

**Requires Paperclip secrets:** `WIKIDATA_USERNAME`, `WIKIDATA_PASSWORD` (bot password from [Special:BotPasswords](https://www.wikidata.org/wiki/Special:BotPasswords)).

```bash
WIKIDATA_USERNAME=... WIKIDATA_PASSWORD=... python3 scripts/geo/create-bionixus-wikidata.py
```

Script creates a new item with all Priority 1 statements and prints the live URL.

## Option B — QuickStatements (manual OAuth)

1. Log into https://quickstatements.toolforge.org/
2. Import batch: `docs/geo/directory-audit/bio-56-wikidata-quickstatements.qs`
3. Run batch; note the new QID from the result page.

## Priority 1 properties

| Property | Value / Target | QID |
|----------|----------------|-----|
| P31 | business | Q4830453 |
| P101 | Market research | Q188860 |
| P101 | Pharmaceutical research | Q1130618 |
| P101 | Health informatics (healthcare analytics proxy) | Q870895 |
| P17 | United States | Q30 |
| P17 | United Kingdom | Q145 |
| P17 | Egypt | Q79 |
| P17 | UAE | Q878 |
| P17 | Saudi Arabia | Q851 |
| P131 | London | Q84 |
| P131 | Sheridan, Wyoming | Q667475 |
| P856 | https://www.bionixus.com | — |
| P18 | https://www.bionixus.com/bionixus-logo.webp | — |
| P1454 | Private company | Q2912172 |
| P452 | Market research | Q188860 |
| P571 | 2012 | precision 9 |
| P159 | Sheridan, Wyoming | Q667475 |

## Completion evidence

- [x] Live Wikidata URL: https://www.wikidata.org/wiki/Q140188264
- [x] All Priority 1 property groups present on Q140188264
- [ ] CMO updates playbook/docs to replace stale Q139888256 references

## Blocker

**Cleared** — entity live; [BIO-107](/BIO/issues/BIO-107) done. Optional: board may add Paperclip secrets for future automated edits (see wiring runbook).
