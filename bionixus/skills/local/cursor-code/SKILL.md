---
name: "cursor-code"
description: "Delegate a coding task to a Cursor cloud (background) agent. Use when a task needs code written, a bug fixed, tests added, a refactor done, or docs updated in a GitHub repo. The Cursor agent clones the repo in an isolated VM, makes changes on a branch, and opens a PR for human review — it never merges."
slug: "cursor-code"
metadata:
  paperclip:
    slug: "cursor-code"
    skillKey: "local/d5ad71d4-38e1-4c76-9fe6-035bf40b13a1/cursor-code"
  paperclipSkillKey: "local/d5ad71d4-38e1-4c76-9fe6-035bf40b13a1/cursor-code"
  skillKey: "local/d5ad71d4-38e1-4c76-9fe6-035bf40b13a1/cursor-code"
key: "local/d5ad71d4-38e1-4c76-9fe6-035bf40b13a1/cursor-code"
---

# Cursor Code Handoff (BioNixus)

Delegate a well-scoped coding task to a Cursor cloud agent. The agent works in its
own VM and opens a pull request — it does NOT merge. A human (CTO or named reviewer)
reviews the PR. Primary user: HermesEngineer.

## When to use

- Repo-level work: features, bug fixes, tests, refactors, documentation.
- Do NOT use for throwaway snippets, or for the Paperclip codebase itself
  (route that to BackEndEngineer / FrontEndEngineer).

## Inputs

- **TASK** — a clear instruction: goal, files/areas involved, constraints
  (e.g. "don't change the public API", "keep tests green"), and the verification
  commands the agent must run (test / typecheck).
- **REPO** — the GitHub repo URL. Defaults to `$DEFAULT_REPO` if set.
- **REF** — base branch. Defaults to `main`.

## Environment

- `CURSOR_API_KEY` — from Cursor Dashboard → API Keys (set on the agent, not in repo).
- `jq` must be installed (used to build the request body safely).

## Steps

1. Scope the task (Fast posture per `token-optimization`). Write the TASK prompt.
2. Hand off (Medium posture): `scripts/launch.sh "<REPO>" "<REF>" "<TASK>"`.
3. Capture the returned agent `id` and PR `url`; post both in an evidence comment.
4. Track with `scripts/status.sh <id>`. Do NOT close the task until a human merges.

## Guardrails

- One task = one Cursor agent = one PR. Never bundle unrelated changes.
- The script sets `autoCreatePr`. Never instruct the agent to merge — the PR is the gate.
- Respect the 3-slot concurrency gate; queue overflow as `todo`.

## Final disposition

End the heartbeat `in_review` with a named reviewer once the PR is open. Evidence
comment = status line + what changed + what remains (human review) + who owns next step.

> On import, Paperclip assigns the real skillKey (form `local/<id>/cursor-code`).
> Replace every `REPLACE_ME` above with that id, and update HermesEngineer's
> `skills:` list to match.
