# Native LLM UI credential wiring — BIO-235

**Unblocks:** [BIO-235](/BIO/issues/BIO-235) · **Parent:** [BIO-222](/BIO/issues/BIO-222)

## Required secret keys

Provision in Paperclip **Company → Secrets** (exact key names):

| Key | Platform | Notes |
|-----|----------|-------|
| `CHATGPT_EMAIL` | ChatGPT | OpenAI account for https://chatgpt.com |
| `CHATGPT_PASSWORD` | ChatGPT | Password or app-specific password |
| `GOOGLE_GEMINI_EMAIL` | Gemini | Google account with Gemini access |
| `GOOGLE_GEMINI_PASSWORD` | Gemini | Can reuse GBP manager Google account if same mailbox |
| `CLAUDE_EMAIL` | Claude | Anthropic account for https://claude.ai |
| `CLAUDE_PASSWORD` | Claude | Password |

**Fallback aliases** (optional): `GEMINI_EMAIL` / `GEMINI_PASSWORD` bind if `GOOGLE_GEMINI_*` absent. `GOOGLE_GBP_EMAIL` / `GOOGLE_GBP_PASSWORD` can authenticate Gemini when dedicated Gemini keys are missing.

## Bind to BrowserAgent

```bash
node scripts/paperclip/wire-browseragent-secrets.mjs
```

## Runtime verification (no value leakage)

```bash
test -n "$CHATGPT_EMAIL" && test -n "$CHATGPT_PASSWORD"
test -n "$GOOGLE_GEMINI_EMAIL" && test -n "$GOOGLE_GEMINI_PASSWORD"
test -n "$CLAUDE_EMAIL" && test -n "$CLAUDE_PASSWORD"
```

## Capture command (after wiring)

```bash
node scripts/geo/native-llm-capture.mjs --date YYYY-MM-DD
```

Produces 30 markdown captures + PNG screenshots under `docs/geo/daily-prompt-monitoring/captures/YYYY-MM-DD/` and updates `daily/YYYY-MM-DD.csv`.

## Auth findings (2026-06-14 probe)

- **ChatGPT:** Guest UI loads but `modal-no-auth-login` blocks send without login.
- **Gemini:** Requires Google sign-in before prompt input.
- **Claude:** Redirects to login before chat input.
