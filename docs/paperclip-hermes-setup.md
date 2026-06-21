# Paperclip + Hermes AI — BioNixus setup

## Overview

Hermes Agent runs as a **second adapter** in Paperclip (`hermes_local`), alongside Cursor agents. It uses the local `hermes` CLI, Nous Portal OAuth (already configured in `~/.hermes`), and Hermes native tools/skills.

## Agents using Hermes

| Agent | Role | Model | Reports to |
|-------|------|-------|------------|
| **CMO** | Marketing leadership | `stepfun/step-3.7-flash:free` (Nous) | CEO |
| **HermesEngineer** | Research, automation, scripting | `stepfun/step-3.7-flash:free` (Nous) | CTO |

Both use:

- **Adapter:** `hermes_local`
- **CLI:** `/Users/selim/.local/bin/hermes`
- **Working directory:** BioNixus repo root (this folder)
- **Toolsets:** terminal, file, web, browser (+ code_execution for HermesEngineer)

## Verify setup

From repo root:

```bash
node scripts/paperclip/setup-hermes.mjs
node scripts/paperclip/setup-hermes.mjs --wakeup HermesEngineer
```

Paperclip UI: http://127.0.0.1:3100 → Agents → filter by adapter **Hermes**.

## When to use Hermes vs Cursor

| Use Hermes | Use Cursor |
|------------|------------|
| Quota-sensitive or high-volume tasks | Deep IDE-integrated coding |
| Web research, scripts, cron-style automation | Agents already tuned on Cursor |
| Nous free/cheap models | Opus-class coding sessions |
| VPS deployment (no Cursor login) | BrowserAgent with Cursor MCP (until migrated) |

## Optional: add API keys to Hermes

Hermes can use direct provider keys (in addition to Nous OAuth):

```bash
hermes auth add anthropic --type api-key --api-key "$ANTHROPIC_API_KEY"
hermes auth add openrouter --api-key "$OPENROUTER_API_KEY"
# Gemini
# Add GOOGLE_API_KEY to ~/.hermes/.env then: hermes auth add google --type api-key
```

Then set a stronger model on an agent in Paperclip UI (e.g. `anthropic/claude-sonnet-4`).

## Hire another Hermes agent

Paperclip UI → **Hire agent** → Adapter: **Hermes local**

Or API/CLI with `adapterType: "hermes_local"` and:

```json
{
  "cwd": "/path/to/this/repo",
  "hermesCommand": "/Users/selim/.local/bin/hermes",
  "model": "stepfun/step-3.7-flash:free",
  "provider": "nous",
  "persistSession": true,
  "timeoutSec": 600,
  "toolsets": "terminal,file,web,browser"
}
```

## Related scripts

- `scripts/paperclip/setup-hermes.mjs` — health check
- `scripts/paperclip/sync-html-deliverable-skills.mjs` — attach `bionixus-proposal-generator` to content agents (CEO permission)
- `scripts/paperclip/wire-browseragent-secrets.mjs` — BrowserAgent credentials (Cursor)
- `scripts/paperclip/wire-ghl-secrets.mjs` — GHL API credentials for CMO/HermesEngineer ([BIO-374](/BIO/issues/BIO-374))
- `scripts/paperclip/wire-hermes-cursor-secrets.mjs` — Cursor API key + OpenRouter (optional) for HermesEngineer ([BIO-549](/BIO/issues/BIO-549))
- `scripts/paperclip/split-linkedin-secret.mjs` — split legacy LinkedIn secret
- `scripts/bd/ghl-pipeline-export.mjs` — weekly weighted pipeline JSON/markdown export (`npm run ghl:pipeline-export`)
