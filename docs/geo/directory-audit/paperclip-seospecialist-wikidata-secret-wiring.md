# Paperclip — SEOSpecialist Wikidata secret wiring

_Issue: [BIO-110](/BIO/issues/BIO-110) · Parent: [BIO-107](/BIO/issues/BIO-107) · Unblocks: [BIO-56](/BIO/issues/BIO-56) → [BIO-52](/BIO/issues/BIO-52)_

## Overview

Paperclip injects company secrets into agent heartbeats via `adapterConfig.env` bindings. Each env var maps to a `secret_ref` that resolves at runtime — values never appear in agent config JSON, issue comments, or git.

**SEOSpecialist ID:** `290f615c-674c-4fdc-856f-e1d4bc7c3539` (`seospecialist`)

## Required secret keys

Create these in Paperclip **before** running the binding script. Use the exact `key` string (not display name).

| Key | Env var at runtime | Notes |
|-----|-------------------|-------|
| `WIKIDATA_USERNAME` | `WIKIDATA_USERNAME` | Wikidata bot username |
| `WIKIDATA_PASSWORD` | `WIKIDATA_PASSWORD` | Bot password from Special:BotPasswords (not account password) |

Credential provisioning is tracked on [BIO-107](/BIO/issues/BIO-107) / [BIO-56](/BIO/issues/BIO-56).

## Board workflow

### 1. Provision secret values

Paperclip UI → **Company** → **Secrets** → **Add secret** for each key above.

- Set **Key** exactly as listed (e.g. `WIKIDATA_USERNAME`).
- Paste the live credential in **Value**.
- Do not share values in Slack, issues, or email to agents.

### 2. Bind secrets to SEOSpecialist

From the BioNixus repo root (board-authenticated CLI or curl):

```bash
# Requires board session — see script header for auth options
node scripts/paperclip/wire-seospecialist-wikidata-secrets.mjs
```

The script:

1. Lists company secrets (metadata only).
2. Validates both `WIKIDATA_*` keys exist (exits with error if either is missing).
3. PATCHes SEOSpecialist `adapterConfig.env` with `secret_ref` bindings.
4. Paperclip syncs `company_secret_bindings` for audit.

**Manual alternative (Paperclip UI):** Agents → SEOSpecialist → Configuration → Environment → add each var as a secret reference (not plain text).

### 3. Verify wiring (no credential exposure)

| Check | Pass criteria |
|-------|---------------|
| Bindings exist | Paperclip → Secrets → each key → Usage shows SEOSpecialist / `env.<KEY>` |
| Runtime injection | Trigger SEOSpecialist heartbeat on [BIO-56](/BIO/issues/BIO-56); agent comment reports env vars **present** (not values) |
| Access audit | Secret access events show `outcome: success` for the run |

SEOSpecialist verifies with shell tests only:

```bash
test -n "$WIKIDATA_USERNAME" && test -n "$WIKIDATA_PASSWORD"
```

### 4. Execute Wikidata work

Wake or assign [BIO-56](/BIO/issues/BIO-56) → SEOSpecialist runs:

```bash
python3 scripts/geo/create-bionixus-wikidata.py
```

## Agent-side documentation

- SEOSpecialist instructions: `agents/seospecialist/instructions/AGENTS.md` (managed bundle) — credential consumption rules.
- Create script: `scripts/geo/create-bionixus-wikidata.py`.

## Permissions note

CTO agents cannot call secrets APIs or PATCH agent `adapterConfig` (requires board / `agents:create`). Engineering delivers the runbook, script, and SEOSpecialist instructions; **board** runs steps 1–2.

## Rollback

To remove bindings without deleting secrets:

```bash
node scripts/paperclip/wire-seospecialist-wikidata-secrets.mjs --clear
```

This clears `adapterConfig.env` secret refs on SEOSpecialist. Secret values remain in Paperclip vault.

## Related issues

- [BIO-107](/BIO/issues/BIO-107) — provision Wikidata bot credentials (parent blocker)
- [BIO-97](/BIO/issues/BIO-97) — BrowserAgent secret wiring pattern reference
- [BIO-52](/BIO/issues/BIO-52) — GEO directory + Wikidata enrichment hub
