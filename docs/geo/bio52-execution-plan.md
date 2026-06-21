# BIO-52 — Execution plan
_Issue: https://paperclip/BIO/issues/BIO-52_

## 2026-06-12 refresh (blocked state)
Credential gates remain open, so the five acceptance criteria are still unmet. This plan now reflects the proven execution route and the exact blocker set, so BrowserAgent / geospecialists can resume immediately once credentials are delivered.

### Unblock order
1. `BIO-83` → LinkedIn publisher credentials for `BIO-63`
2. `BIO-84` + `BIO-85` → Clutch + GBP manager credentials + NAP confirmation for `BIO-60`
3. `BIO-107` → Wikidata bot credentials for `BIO-56`

### Execution routes
- LinkedIn: manual publish path is preserved in `docs/geo/bio52-linkedin-update.md` (fastest unblock; ~10 min, no tests).
- Clutch/GBP: `BIO-58` operator pack is current; `bionixus-gbp-drafts/dubai-profile-copy.md` and `bionixus-gbp-drafts/riyadh-profile-copy.md` are paste-ready.
- Wikidata: `scripts/geo/create-bionixus-wikidata.py` is ready; `docs/geo/bio52-wikidata-blocker.md` maps Priority 1 properties.

### Required updates on completion
5. Update `docs/geo/bio52-production-evidence-2026-06-12.md` with the new live URLs and completion evidence.

### Status
- Latest check: 2026-06-12 20:00 UTC
- State: `in_progress`, blocked by `BIO-107`, `BIO-84`, and `BIO-83`
