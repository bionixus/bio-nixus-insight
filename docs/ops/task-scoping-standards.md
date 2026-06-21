# BioNixus task scoping standards

**Owner:** CEO  
**Effective:** 2026-06-19  
**Parent initiative:** [BIO-470](/BIO/issues/BIO-470) (80% success rate)  
**Issue:** [BIO-484](/BIO/issues/BIO-484)

## Why this exists

Run success rate fluctuates 33–90% (66% average). Hypothesis: **Category A — scoping failures** account for 30–40% of failed runs (130–170 runs). Poorly scoped tasks share these traits:

- No explicit acceptance criteria
- Ambiguous “done” definition
- Missing scope boundaries (in/out)
- No verification steps
- Multi-outcome tasks that should be split

This document standardizes how every BioNixus issue is written before assignment.

---

## Task description template (required sections)

Copy this skeleton into every new issue description. Delete sections marked *(optional)* when not applicable.

```markdown
## Objective
One sentence: what outcome this heartbeat must produce.

## Context
- Why now (parent issue, blocker, metric)
- Links to related issues/docs
- Known constraints (budget, credentials, concurrency)

## Scope

### In scope
- Bullet list of deliverables (files, API changes, comments, documents)

### Out of scope
- Explicit exclusions to prevent scope creep

## Acceptance criteria
Numbered, testable checks. Each must be verifiable in one heartbeat or have a named follow-up issue.

1. …
2. …
3. …

## Verification steps
How the assignee (or reviewer) proves done:
- Command, URL, API call, or artifact path
- Minimum evidence (comment + status, not “will do later”)

## Dependencies & blockers
- Blocked by: [BIO-XXX](/BIO/issues/BIO-XXX) (or “none”)
- Unblocks: …

## Owner & routing
- Primary: [Agent role]
- Escalation: CEO / board if …

## Priority rationale
critical | high | medium | low — one line why
```

---

## Acceptance criteria checklist

Before assigning or waking an agent, the creator (or CEO dispatcher) confirms:

| # | Check | Pass? |
|---|--------|-------|
| 1 | **Objective** is a single outcome, not a workstream | ☐ |
| 2 | **In scope** lists concrete deliverables (paths, endpoints, documents) | ☐ |
| 3 | **Out of scope** names at least one likely creep vector | ☐ |
| 4 | **Acceptance criteria** are numbered and independently verifiable | ☐ |
| 5 | **Verification steps** name how to prove done (not “looks good”) | ☐ |
| 6 | **Owner** matches routing rules (CTO=code, CMO=content, UX=design) | ☐ |
| 7 | **Dependencies** use `blockedByIssueIds` when blocked | ☐ |
| 8 | Task fits **one heartbeat** or has explicit child issues for overflow | ☐ |
| 9 | No duplicate issue exists (search `q=` before create) | ☐ |
| 10 | Priority matches urgency (don’t mark nice-to-have as critical) | ☐ |

**Gate:** If checks 1–5 fail, do not set `in_progress` or wake an assignee. Fix description first.

---

## When to split into subtasks

Split when any of these are true:

| Signal | Action |
|--------|--------|
| More than **3 acceptance criteria** across different domains | One child per domain |
| Needs **both** code and content | CTO + CMO children under parent |
| **Blocked** on credentials/approval | `blocked` status + interaction card, not “try anyway” |
| Estimated **>1 heartbeat** of work | Parent = coordination; children = execution |
| **Research + implementation** | Research child → review → implementation child |
| Duplicate titles found in search | Cancel duplicate; link canonical issue |

Parent issue stays `in_progress` for coordination; children consume execution slots.

---

## Scoping anti-patterns (Category A)

| Anti-pattern | Example | Fix |
|--------------|---------|-----|
| Vague objective | “Improve SEO” | “Expand 5 P0 thin pages to ≥800 words each” |
| Missing verification | “API works” | “`curl` returns 200; sample JSON matches schema in doc” |
| Scope soup | “Fix bugs and add feature X” | Split into separate issues |
| Implicit done | “Handle inbox” | List threads + reply criteria + BLUF format |
| No out-of-scope | Agent refactors entire repo | “Do not change unrelated routes” |
| Duplicate issues | Two identical API tasks | Cancel one; `blockedBy` / comment link |
| Planning as execution | “Think about architecture” | `in_review` + plan document + confirmation |
| Wake without gate | 5 agents started at once | CEO queue; max 3 slots ([policy](/docs/ops/concurrency-policy.md)) |

---

## Complexity sizing (for dispatch)

| Size | Heartbeats | Criteria count | Example |
|------|------------|----------------|---------|
| **S** | 1 | 2–3 | Fix typo, post comment, single PATCH |
| **M** | 1–2 | 3–5 | New doc + 3 sample refactors |
| **L** | 3+ | 5+ | Feature with tests — must use child issues |
| **XL** | Multi-day | — | Epic parent only; never assign XL to one agent |

---

## Handling ambiguity

1. **Default:** Create `ask_user_questions` or `request_confirmation` interaction; set issue `in_review`.
2. **Time-boxed assumption:** Document assumption in comment; proceed only if reversible.
3. **Never:** Leave ambiguity for the assignee to “figure out” without escalation path.

---

## Process integration

### Task creation workflow

1. Search existing issues (`GET …/issues?q=…`).
2. Paste template sections into description.
3. Run acceptance criteria checklist (above).
4. Set `parentId` / `goalId` / `blockedByIssueIds`.
5. Assign owner; status **`todo`** (CEO fills execution slots).
6. CEO wakes assignee only when slot available (≤3 concurrent).

### Scoping review (CEO heartbeat)

On every `/wakeup` or delegation:

- Reject underscoped tasks back to creator with checklist failures cited.
- Refactor description before first `checkout`.

### Template adoption measurement

| Metric | Source | Target (8 weeks) |
|--------|--------|------------------|
| % new issues with all template sections | Manual audit sample / future label | ≥80% |
| Duplicate issues per week | Issue search | <2 |
| Category A failure rate | Run logging ([BIO-482](/BIO/issues/BIO-482)) | −15% vs baseline |
| Success rate (template-scoped tasks) | Dashboard ([BIO-470](/BIO/issues/BIO-470)) | ≥75% → 80% |

**Label (when available):** `scoping:v1` on issues created with full template.

Follow-up implementation: [BIO-488](/BIO/issues/BIO-488) (adoption metrics).

---

## References

- [Concurrency policy](/docs/ops/concurrency-policy.md)
- [Paperclip skill — issue lifecycle](skills/paperclip/SKILL.md)
- [BIO-470 failure categories](parent initiative)
