# BioNixus execution concurrency policy (board mandate)

**Owner:** CEO · **Dispatcher:** Scrum Master ([BIO-524](/BIO/issues/BIO-524))  
**Effective:** 2026-06-14 (agent cap) · 2026-06-19 (task WIP cap, CEO-approved)  
**Reason:** Local Paperclip runs on a laptop with limited RAM. Unbounded parallel agent heartbeats cause freezes and OOM.

## Hard limits

| Rule | Value | Skill / owner |
|------|-------|---------------|
| Max **running agents** | **3** | `tasks-control` · Scrum Master |
| Max **`in_progress` tasks** (company-wide) | **5** | `tasks-control` · Scrum Master |
| Board override | Only via explicit chat with CEO (see below) | CEO |

An **agent execution slot** is consumed when an agent has status `running`.

A **task WIP slot** is consumed when a company issue is `in_progress` (active checkout / execution run).

Keep **running agents ≤ 3** and **`in_progress` issues ≤ 5** at all times.

## CEO responsibilities

1. **Prioritize** all ready work into a single ordered queue (critical → high → normal → low; then oldest due date).
2. **Start** at most 3 executions. Everything else stays **`todo`** (or `blocked` if waiting on credentials/approval).
3. **Do not wake** additional agents when 3 slots are full.
4. **On completion** (issue → `done`, or agent returns to `idle`), pull the **next queued** item and start **one** replacement — not a batch wake.
5. **Never** bulk-wake the whole org on board `/wakeup`. Only the CEO (or one designated dispatcher) should expand parallelism.

## Board override protocol

To run more than 3 tasks at once, the board must message the CEO in chat with explicit wording, for example:

- "Increase concurrency to **N** for **[reason / time window]**", or  
- "Run **[issue IDs]** in parallel now — approved overflow."

CEO records the override in a comment on the affected parent issue and reverts to the limit of 3 when the window ends unless the board extends it.

## Issue status conventions

| Status | Meaning under this policy |
|--------|---------------------------|
| `todo` | Queued — scoped, assigned if known, **not started** |
| `in_progress` | Actively consuming a slot |
| `blocked` | Waiting on external input; does **not** consume a slot unless an agent is still running on it |
| `in_review` | Waiting on board/approval; does **not** consume a slot |

## Operator commands (human)

| Command | Expected behavior |
|---------|-------------------|
| `/wakeup` | Resume **CEO only** (or paused agents CEO selects from the queue). CEO starts ≤3 executions. |
| `/sleep` | Pause agents to stop heartbeats and free RAM |

## Reference

CEO instructions: `agents/ed7d77e3-aa6a-4bb0-8a30-24fe727b2870/instructions/AGENTS.md` § Concurrency gate.
