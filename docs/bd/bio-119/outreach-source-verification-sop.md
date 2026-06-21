# Outreach Source-Verification SOP

**Issue:** [BIO-119](/BIO/issues/BIO-119)  
**Applies to:** GCC Sequences A, B, C (`docs/bd/gcc-outreach-sequence-templates.md`)  
**Tokens covered:** `{{insight_snippet}}`, `{{peer_outcome}}`, `{{intel_highlight_*}}`  
**Effective:** 12 June 2026

---

## Purpose

Prevent unverified statistics, fabricated case outcomes, or drafting placeholders from reaching live outreach sends. Every data-bearing token must trace to an approved source before the Sales Specialist queues a touch.

---

## Roles

| Role | Responsibility |
|------|----------------|
| **Sales Specialist** | Runs pre-send validator; never sends with empty or unverified tokens |
| **BD Manager** | Approves account-specific snippets; signs off peer-outcome anonymisation |
| **Data Analyst** | Validates quantitative claims against internal data or published BioNixus content |
| **COO** | Approves anonymised `{{peer_outcome}}` before first use per account vertical |
| **CMO** | Approves `{{intel_highlight_*}}` tied to published intel assets ([BIO-118](/BIO/issues/BIO-118)) |

---

## Token verification rules

### `{{insight_snippet}}`

One sentence. Therapy- or country-specific. Must be **true, current, and attributable**.

**Allowed sources (priority order):**

1. **Verified snippet bank** — `docs/bd/bio-119/verified-snippet-bank.md` (pre-cleared)
2. **Published BioNixus page or blog** — URL recorded in verification log
3. **Internal project deliverable** — anonymised; Data Analyst confirms accuracy
4. **Third-party public data** — regulator publication, MOH yearbook, peer-reviewed citation; link stored

**Not allowed:**

- Unsourced statistics invented for personalization
- `[SOURCE NEEDED]` or equivalent drafting text in send queue
- Competitor-named outcomes unless legal cleared

**Verification steps:**

1. Select snippet from bank OR draft new sentence with source URL.
2. Data Analyst confirms accuracy (async comment on account brief or BIO-119 log).
3. BD Manager marks snippet **VERIFIED** in account brief with `source_url` and `verified_date`.
4. Sales Specialist copies verified text into CRM token field only after VERIFIED flag.

### `{{peer_outcome}}`

Anonymised past-client result pattern. No client name, product name, or identifiable tender detail.

**Required pattern:** `[Action BioNixus delivered] → [observable business outcome for prospect persona]`

**Example (approved pattern, not a verified case until COO signs):**

> structured NUPCO-facing payer evidence ahead of tender planning, reducing last-minute dossier gaps at submission stage

**Verification steps:**

1. BD drafts outcome from real engagement (internal CRM/project code only — never in send copy).
2. COO confirms anonymisation: no re-identification risk.
3. Record in account brief: `peer_outcome_verified: yes`, `coo_approval_date`, `internal_ref` (internal only).
4. Re-use same approved outcome for same therapy/country vertical without re-approval; new vertical requires COO re-sign.

### `{{intel_highlight_*}}` (Sequence C)

Must match bullets on the live intel asset at `{{intelligence_link}}`. CMO owns asset accuracy ([BIO-118](/BIO/issues/BIO-118)).

---

## Pre-send workflow (every touch)

```
Account brief complete
        ↓
Tokens populated in CRM (not in template master)
        ↓
Run: node scripts/bd/validate-outreach-send-queue.mjs --file <draft>
        ↓
   PASS → Sales Specialist queues send
   FAIL → Return to BD/Data; do not send
        ↓
Log send + utm_campaign in CRM
```

---

## Forbidden patterns (validator blocks)

The pre-send script rejects drafts containing:

- `[SOURCE NEEDED` (any variant)
- `[[` optional bracket drafting syntax
- `[INSERT ` placeholders
- `[BULLET ` placeholders
- `[pricing:` without CFO approval flag in metadata
- Empty `{{insight_snippet}}` or `{{peer_outcome}}` when touch requires them (see touch matrix below)

---

## Touch matrix — required verified tokens

| Sequence | Touch | Channel | `insight_snippet` | `peer_outcome` |
|----------|-------|---------|-------------------|----------------|
| A | 2 | LinkedIn | Required | — |
| A | 3 | Email | — | Required |
| B | 2 | LinkedIn | Required | — |
| B | 4 | Email | Required | Required |
| B | 5 | Email | — | Required |
| C | 2 | Email | Required (via intel highlights) | Optional |

Sequence B Touch 1 account brief must be **complete before Touch 2** (existing template rule).

---

## Send queue hygiene

**Master templates** (`docs/bd/gcc-outreach-sequence-templates.md`) intentionally contain tokens only — no `[SOURCE NEEDED]` in sendable bodies (Copywriter v1.1).

**Live send queue** = CRM-rendered draft per contact. That is what the validator scans.

Sales Specialist stores rendered drafts under:

`docs/bd/outreach-send-queue/` (filename: `{sequence}-{touch}-{company_slug}-{date}.md`)

Only files in this folder marked `status: ready_to_send` in frontmatter may be sent externally.

---

## Escalation

| Situation | Action | Owner |
|-----------|--------|-------|
| No bank snippet fits account | Data Analyst sources + BD approves within 24h | BD + Data |
| Peer outcome needs new vertical | COO anonymisation review | COO |
| Validator false positive | BD documents exception in issue comment | BD Manager |
| Stat disputed after send | Pause sequence; COO notified | BD Manager |

---

## Handoff to Sales Specialist

1. Use calendar URLs from [calendar-link-registry.md](./calendar-link-registry.md).
2. Pull snippets from [verified-snippet-bank.md](./verified-snippet-bank.md) or get VERIFIED flag on custom snippet.
3. Run validator before every send.
4. Log outcomes per operational checklist in outreach templates.

---

*COO external-send gate: source verification pipeline is **green** when this SOP is published, snippet bank is populated, and validator is in repo.*
