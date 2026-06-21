---
name: token-optimization
description: BioNixus company-wide token discipline for Paperclip heartbeats — wake payload first, incremental context, model tier selection, concurrency gate, no polling. Load on every agent wake; applies to all IC and manager heartbeats.
slug: token-optimization
metadata:
  paperclip:
    skillKey: local/8d1ebb7c24/token-optimization
    key: local/8d1ebb7c24/token-optimization
---

# Token optimization (BioNixus)

**Authority:** [BIO-353](/BIO/issues/BIO-353) · [BIO-356](/BIO/issues/BIO-356) CFO tier review · **Policy:** `docs/ops/concurrency-policy.md` · **Roster:** [BIO-317](/BIO/issues/BIO-317)

Every agent MUST follow these rules to keep heartbeats cheap, fast, and recoverable on a 3-slot local runtime.

## Hard rules (all agents)

1. **Wake payload first** — Read `PAPERCLIP_WAKE_PAYLOAD_JSON` / scoped wake section before `heartbeat-context` or full comment thread replay.
2. **Incremental context** — Use `comments?after=` cursor; never cold-load the full thread unless required.
3. **Search before read** — Grep/Glob to locate files; batch parallel reads; no sequential file-by-file exploration.
4. **No polling** — Child issues + Paperclip wakes; never spin waiting on agents/processes in a loop.
5. **Concurrency gate** — Max **3** executions; queue overflow as `todo`; one replacement per completion.
6. **Minimal diffs** — Smallest correct change; skip full typecheck/build unless scope warrants.
7. **Delegate depth** — Managers route IC work; do not implement downstream tasks in the same heartbeat as triage.
8. **Skills on wake** — Load domain skill when task matches; do not load unrelated skills.

## Model tier matrix (CFO-approved)

Planning $/heartbeat uses API proxy rates **$3/M input · $15/M output** (Sonnet-class per [BIO-317](/BIO/issues/BIO-317)). Full analysis: [bio-356-cfo-token-tier-review.md](../../docs/ops/bio-356-cfo-token-tier-review.md).

| Task class | When | Model posture | Planning $/hb | Anti-pattern | Board gate |
|---|---|---|---|---|---|
| **Triage / dispatch** | Queue sort, status checks, comment ack | **Fast only** | ~$0.17 | Thinking on inbox scan | No |
| **Standard IC** | Feature fix, content draft, routine API | Medium (default) | ~$0.42 | Opus/thinking for trivial edits | No |
| **Deep architecture** | Security, migrations, multi-system design | Thinking-high | ~$1.26 | Medium on one-way-door changes | **Yes** if org-wide default binding |
| **Bulk mechanical** | Mass rename, template fill, scripted sync | Fast + narrow prompt | ~$0.10 | Re-explaining entire codebase | No |
| **Review / approval** | Plan sign-off, diff review | Medium | ~$0.42 | Re-implementing instead of reviewing | No |

**Escalation rule:** When task class is ambiguous, default to **Medium**. Escalate to Thinking-high only with explicit one-way-door rationale in the issue comment.

**Board-gated (Tier 3):** org-wide thinking-high default binding; API-metered cloud migration; concurrency >3 with premium models ([BIO-317](/BIO/issues/BIO-317) §5).

## Paperclip heartbeat habits

- **Scoped wake fast path** — If wake names an issue, skip inbox scan; checkout that issue and work.
- **Checkout once** — Do not re-checkout unless switching tasks; harness may already claim the issue.
- **Child issues over polling** — Delegate parallel tracks; rely on `issue_blockers_resolved` / `issue_children_completed` wakes.
- **Blocked dedup** — If your last comment was a blocked update with no reply, do not re-comment.
- **Final disposition** — End every heartbeat with `done`, `in_review` (real reviewer), `blocked` (named owner), or `in_progress` (live continuation only).
- **Evidence comments** — Status line + what changed + what remains + who owns next step.

## New agent hire default

When hiring or creating agents via Paperclip, include **`token-optimization`** in `desiredSkills` alongside role-specific skills. Mass sync: `node scripts/paperclip/sync-token-optimization-skills.mjs --execute`.

## Out of scope

- Changing adapter model bindings (board/CTO config) — this skill guides behavior only.
- Reducing concurrency below 3 without board approval.
- Pausing agents (separate BIO-317 roster decision).
