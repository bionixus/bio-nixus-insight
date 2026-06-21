# Paperclip — BrowserAgent secret wiring (Clutch, GBP, LinkedIn)

_Issues: [BIO-97](/BIO/issues/BIO-97) (Clutch/GBP) · [BIO-151](/BIO/issues/BIO-151) (LinkedIn) · Unblocks: [BIO-60](/BIO/issues/BIO-60), [BIO-63](/BIO/issues/BIO-63)_

## Overview

Paperclip injects company secrets into agent heartbeats via `adapterConfig.env` bindings. Each env var maps to a `secret_ref` that resolves at runtime — values never appear in agent config JSON, issue comments, or git.

**BrowserAgent ID:** `e6e2cf27-9956-4ee4-b8fa-5bbf7da5e9d3` (`browseragent`)

## Required secret keys

Create these in Paperclip **before** running the binding script. Use the exact `key` string (not display name).

| Key | Env var at runtime | Notes |
|-----|-------------------|-------|
| `CLUTCH_EMAIL` | `CLUTCH_EMAIL` | e.g. `admin@bionixus.com` |
| `CLUTCH_PASSWORD` | `CLUTCH_PASSWORD` | Clutch vendor portal password |
| `GOOGLE_GBP_EMAIL` | `GOOGLE_GBP_EMAIL` | GBP manager Google account |
| `GOOGLE_GBP_PASSWORD` | `GOOGLE_GBP_PASSWORD` | Skip only if board confirms SSO-only (document on [BIO-85](/BIO/issues/BIO-85)) |
| `LINKEDIN_EMAIL` | `LINKEDIN_EMAIL` | LinkedIn company-page admin login (optional group — bound when both keys exist) |
| `LINKEDIN_PASSWORD` | `LINKEDIN_PASSWORD` | LinkedIn password or app password ([BIO-83](/BIO/issues/BIO-83)) |
| `linkedin` (legacy) | `LINKEDIN_COMBINED` | Single combined credential until split via `split-linkedin-secret.mjs` |

The binding script binds Clutch/GBP keys when present. For LinkedIn it prefers **both** `LINKEDIN_EMAIL` and `LINKEDIN_PASSWORD`; if those are missing but legacy vault key `linkedin` exists, it binds `LINKEDIN_COMBINED` instead. Vault keys are matched case-insensitively.

## Board workflow

### 1. Provision secret values

Paperclip UI → **Company** → **Secrets** → **Add secret** for each key above.

- Set **Key** exactly as listed (e.g. `CLUTCH_EMAIL`).
- Paste the live credential in **Value**.
- Do not share values in Slack, issues, or email to agents.

### 2. Bind secrets to BrowserAgent

From the BioNixus repo root (board-authenticated CLI or curl):

```bash
# Requires board session — see script header for auth options
node scripts/paperclip/wire-browseragent-secrets.mjs
```

The script:

1. Lists company secrets (metadata only).
2. Finds IDs for all present keys (Clutch/GBP + optional LinkedIn pair).
3. PATCHes BrowserAgent `adapterConfig.env` with `secret_ref` bindings.
4. Paperclip syncs `company_secret_bindings` for audit.

**Manual alternative (Paperclip UI):** Agents → BrowserAgent → Configuration → Environment → add each var as a secret reference (not plain text).

### 3. Verify wiring (no credential exposure)

| Check | Pass criteria |
|-------|---------------|
| Bindings exist | Paperclip → Secrets → each key → Usage shows BrowserAgent / `env.<KEY>` |
| Runtime injection | Trigger BrowserAgent heartbeat on [BIO-60](/BIO/issues/BIO-60); agent comment reports env vars **present** (not values) |
| Access audit | Secret access events show `outcome: success` for the run |

BrowserAgent verifies with shell tests only:

```bash
test -n "$CLUTCH_EMAIL" && test -n "$CLUTCH_PASSWORD"
test -n "$GOOGLE_GBP_EMAIL" && test -n "$GOOGLE_GBP_PASSWORD"
test -n "$LINKEDIN_EMAIL" && test -n "$LINKEDIN_PASSWORD"
# or legacy combined secret:
test -n "$LINKEDIN_COMBINED"
```

### 4. Execute directory work

Reassign or wake [BIO-60](/BIO/issues/BIO-60) → BrowserAgent follows `docs/geo/directory-audit/bio-58-operator-execution-pack.md`.

## Agent-side documentation

- BrowserAgent instructions: `agents/browseragent/instructions/AGENTS.md` (managed bundle) — credential consumption rules.
- Operator copy: `docs/geo/directory-audit/bio-58-operator-execution-pack.md`.

## Permissions note

CTO agents cannot call secrets APIs or PATCH agent `adapterConfig` (requires board / `agents:create`). Engineering delivers the runbook, script, and BrowserAgent instructions; **board** runs steps 1–2.

## Rollback

To remove bindings without deleting secrets:

```bash
node scripts/paperclip/wire-browseragent-secrets.mjs --clear
```

This clears `adapterConfig.env` secret refs on BrowserAgent. Secret values remain in Paperclip vault.

## Related issues

- [BIO-85](/BIO/issues/BIO-85) — GBP phones, Riyadh listing type, Google account email (NAP)
- [BIO-92](/BIO/issues/BIO-92) — board credential handoff interaction
- [BIO-100](/BIO/issues/BIO-100) — duplicate of BIO-97 (close when BIO-97 done)
- [BIO-83](/BIO/issues/BIO-83) / [BIO-151](/BIO/issues/BIO-151) — LinkedIn publisher credentials for [BIO-63](/BIO/issues/BIO-63)
