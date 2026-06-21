# OpenRouter adapter binding (BioNixus)

Binds the **existing** CFO-approved task-class postures in
`bionixus/skills/local/token-optimization/SKILL.md` to concrete OpenRouter model
refs at the adapter layer. This is CTO/board configuration — it does **not** change
agent behavior or introduce a new tier scheme.

**Never commit real API keys.** Use `${OPENROUTER_API_KEY}` or store the key in your
shell / secrets manager. Placeholder example: `sk-or-...`

> **Model slugs are placeholders.** Confirm current model names and pricing at
> [openrouter.ai/models](https://openrouter.ai/models) before production use.

## Onboarding

```bash
export OPENROUTER_API_KEY="sk-or-..."   # placeholder — use your real key locally only
openclaw onboard --auth-choice apiKey --token-provider openrouter --token "$OPENROUTER_API_KEY"
```

## Base URL fix (required)

**The OpenRouter API base URL must be `https://openrouter.ai/api/v1`** (with `/api/`).

The bare host path (`…/v1` without the `/api/` segment on the OpenRouter host) returns
website HTML with HTTP 200 and causes **silent empty replies**. Always use
**`https://openrouter.ai/api/v1`**.

OpenClaw may generate `~/.openclaw/agents/main/agent/models.json` with the wrong
URL. After onboarding or gateway upgrades, verify and fix:

```bash
grep -E 'openrouter\.ai/v1' ~/.openclaw/agents/main/agent/models.json \
  && sed -i 's|https://openrouter.ai/v1|https://openrouter.ai/api/v1|g' \
       ~/.openclaw/agents/main/agent/models.json

systemctl --user restart openclaw-gateway
```

This file is **regenerated on gateway start** — reapply the fix after OpenClaw upgrades
if the wrong URL reappears.

## Tier binding table

Maps `token-optimization` postures to OpenRouter model refs (placeholders — verify on
[openrouter.ai/models](https://openrouter.ai/models)):

| token-optimization posture | Use for | OpenRouter model ref | Fallback |
|---|---|---|---|
| **Fast** | Triage, dispatch, bulk mechanical | `openrouter/google/gemini-2.5-flash` | `openrouter/deepseek/deepseek-chat-v3-0324:free` |
| **Medium** (default) | Standard IC, review/approval | `openrouter/anthropic/claude-sonnet-4-5` | `openrouter/openai/gpt-4.1` |
| **Thinking-high** | Deep architecture, one-way-door | `openrouter/anthropic/claude-opus-4-6` (reasoning high) | `openrouter/anthropic/claude-sonnet-4-5` |

## Notes

- Model refs use the form `openrouter/<provider>/<model>`.
- Set `agents.defaults.models` as an **allowlist** — only listed models can be
  selected, which helps prevent model drift.
- Keep **Medium** aligned with the CFO Sonnet-class baseline from [BIO-317](/BIO/issues/BIO-317):
  **$3/M input · $15/M out** (planning rates per `token-optimization`).
- **Thinking-high** bindings that become org-wide defaults require board approval
  per `token-optimization` § Board-gated (Tier 3).

## Verify locally

From the repo root:

```bash
./bionixus/scripts/verify-wiring.sh
```
