---
name: tasks-control
description: >-
  BioNixus execution dispatcher for the Scrum Master — enforce WIP limits (max 5
  in_progress tasks, max 3 running agents), prioritize the queue, pause/resume
  agents, and queue overflow as todo. Load on every Scrum Master wake and on
  tasks-control routine runs. Authority BIO-524 (CEO-approved).
---

# Tasks control (BioNixus)

**Authority:** [BIO-524](/BIO/issues/BIO-524) (CEO-approved) · **Policy:** `docs/ops/concurrency-policy.md` · **Companion:** `token-optimization` skill

The Scrum Master is the **execution dispatcher** for BioNixus. This skill governs how you keep company-wide parallelism within safe limits on a local Paperclip runtime.

## Hard limits (CEO-approved via BIO-524)

| Gate | Limit | Counts as |
|------|-------|-----------|
| **Task WIP** | **≤ 5** | Company issues in `in_progress` |
| **Agent slots** | **≤ 3** | Agents with status `running` |

Board override: CEO explicit chat only (record on issue thread). See policy doc.

## When to load this skill

- Every Scrum Master heartbeat (after `paperclip` skill Steps 1–4 or scoped-wake fast path)
- Routine: **Tasks control dispatch** (every 2h)
- When dashboard shows `inProgress > 5` or `running > 3`
- When COO/CEO asks for queue health, WIP cleanup, or dispatch order

## Dispatch heartbeat (required sequence)

Run this **before** starting net-new execution work, unless you are on a scoped wake for a specific assigned issue and that issue *is* the dispatch run.

### 1. Snapshot

```bash
node scripts/paperclip/tasks-control-dispatch.mjs
```

Record in your issue comment:
- `in_progress` count vs 5
- `running` agents vs 3
- Top 5 queued candidates (priority → age)
- Violations and recommended actions

API shortcuts:
- `GET /api/companies/{companyId}/dashboard`
- `GET /api/companies/{companyId}/issues?status=in_progress`
- `GET /api/companies/{companyId}/agents` → filter `status === "running"`

### 2. Prioritize queue (WIP limits lens)

Order ready work:

1. `critical` → `high` → `medium` → `low`
2. Same priority: oldest `updatedAt` / explicit sprint dispatch order ([BIO-502](/BIO/issues/BIO-502) dispatch doc when present)
3. De-duplicate: cancel or merge duplicate `in_progress` children (route cleanup to CEO via [BIO-523](/BIO/issues/BIO-523) when run-ownership blocks you)

**Definition of Ready** before starting: owner, acceptance criteria, priority, dependencies named.

### 3. Enforce task WIP (≤ 5)

If `in_progress > 5`:

1. Keep the **top 5** by priority/age executing.
2. Move overflow to `todo` with comment: `Queued — WIP cap 5/5; resumes when slot opens.`
3. Do **not** bulk-wake assignees for queued items.
4. Prefer demoting duplicate sprint copies (e.g. BIO-500/503 vs BIO-451) before demoting unique deliverables.

If you lack PATCH permission on an issue (`authorization boundary`), escalate to CEO child [BIO-525](/BIO/issues/BIO-525) or comment on [BIO-523](/BIO/issues/BIO-523).

### 4. Enforce agent slots (≤ 3)

If `running > 3`:

1. **Never pause** the current heartbeat agent (yourself).
2. **Protect** CEO if actively dispatching ([BIO-523](/BIO/issues/BIO-523), daily coordination).
3. Pause lowest-priority non-critical runners until `running ≤ 3`:

```bash
curl -sS -X POST "$PAPERCLIP_API_URL/api/agents/{agentId}/pause" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
  -H "X-Paperclip-Run-Id: $PAPERCLIP_RUN_ID"
```

4. When a slot opens, **resume one** assignee for the next queued `todo` only:

```bash
curl -sS -X POST "$PAPERCLIP_API_URL/api/agents/{agentId}/resume" ...
curl -sS -X POST "$PAPERCLIP_API_URL/api/agents/{agentId}/heartbeat/invoke" ...
```

**Requires board/CEO permission** for pause/resume if API returns `Board access required` — document violation and assign [BIO-525](/BIO/issues/BIO-525).

### 5. One-in-one-out discipline

On `done` / agent `idle`:
- Start **exactly one** replacement from the queue.
- No batch wakes after `/wakeup` or blocker resolution.

### 6. Comment + disposition

Every dispatch heartbeat comment must include:

```md
## Tasks control dispatch

**Status:** [within limits | task WIP breach | agent slot breach | both]

- Task WIP: {n}/5
- Agent slots: {n}/3
- Actions taken: …
- Blocked: … (owner + action)
- Next: … (owner)
```

Final disposition:
- `done` — limits verified, queue documented, no violations
- `in_progress` — live routine continues; violations escalated with owner
- `blocked` — cannot pause/patch; CEO action required ([BIO-525](/BIO/issues/BIO-525))

## Permissions matrix

| Action | Scrum Master | CEO / Board |
|--------|--------------|-------------|
| Read dashboard / queue | ✓ | ✓ |
| PATCH issues → `todo` | boundary-limited | ✓ |
| Pause/resume agents | usually ✗ | ✓ |
| Register company skill | ✗ | ✓ |
| Create dispatch routine | ✓ (self) | ✓ |

When blocked, **do not pretend enforcement happened**. Escalate with evidence snapshot.

## Routine spec

Parent: [BIO-524](/BIO/issues/BIO-524)

| Field | Value |
|-------|-------|
| Title | Tasks control dispatch |
| Schedule | `0 */2 * * *` (every 2h, UTC) |
| Assignee | ScrumMaster |
| Concurrency | `coalesce_if_active` |
| Output | Dispatch comment + child issues if cleanup needed |

## Install (CEO one-time)

```bash
# After skill files exist under .cursor/skills/tasks-control/
paperclipai skills scan-projects --company-id $PAPERCLIP_COMPANY_ID
node scripts/paperclip/sync-tasks-control-skills.mjs --execute
```

## Out of scope

- Implementing deliverables on queued tasks (route to owners)
- Hiring agents (escalate CEO)
- Raising limits without board override
- Polling agents for completion (use wakes + child issues)
