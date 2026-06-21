# BIO-355 — token-optimization skill embed evidence (PRE)

**Date:** 2026-06-16  
**Run:** Platform Reliability Engineer heartbeat  
**Parent:** [BIO-355](/BIO/issues/BIO-355) · [BIO-356](/BIO/issues/BIO-356) CFO review

## Verdict

CFO §4 revised tier table is embedded in `.cursor/skills/token-optimization/SKILL.md` and ready for CEO mass sync ([BIO-357](/BIO/issues/BIO-357)).

## Skill embed checklist (CFO revisions)

| CFO requirement | Status |
|---|---|
| Triage/dispatch → **Fast only** | ✅ |
| Planning **$/hb** column | ✅ |
| **Escalation rule** (ambiguous → Medium) | ✅ |
| **Board gate** column | ✅ |
| BIO-317 proxy footnote ($3/M in · $15/M out) | ✅ |
| Tier 3 board-gated bullets | ✅ |
| Link to [bio-356-cfo-token-tier-review.md](./bio-356-cfo-token-tier-review.md) | ✅ |

## Company library

- Skill key: `local/8d1ebb7c24/token-optimization`
- Verified via `GET /api/companies/{id}/skills`

## Mass sync (CEO-owned)

PRE token lacks `agents:create`. Dry-run of `scripts/paperclip/sync-token-optimization-skills.mjs` enumerates 34 agents; `--execute` requires CEO token per [BIO-357](/BIO/issues/BIO-357).

## Next owner

**CEO** — run scan-projects + `--execute` sync, post agent table on [BIO-355](/BIO/issues/BIO-355), mark [BIO-357](/BIO/issues/BIO-357) done.
