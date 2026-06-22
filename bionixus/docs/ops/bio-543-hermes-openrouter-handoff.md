# BIO-543: Hermes + OpenRouter Wiring — Handoff Ready ✅

**Status**: Complete  
**Verification**: All checks passed  
**Date**: 2026-06-22

## What Was Delivered

### 1. HermesEngineer Agent Configuration
**Path**: `bionixus/agents/hermesengineer/AGENTS.md`

- Configured as memory-and-delegation engineer reporting to CTO
- Scopes plans into Cursor-ready tasks
- Manages Cursor handoff lifecycle (launch → PR → review)
- Token tier discipline: Fast for triage, Medium for standard, Thinking-high for architecture

**Skills wired**:
- `local/8d1ebb7c24/token-optimization` (CFO-approved tier matrix)
- `local/d5ad71d438/cursor-code` (Cursor cloud agent launcher)
- Core Paperclip skills (paperclip, converting-plans-to-tasks, create-agent, dev, para-memory-files)

### 2. cursor-code Skill
**Path**: `bionixus/skills/local/cursor-code/`

Enables HermesEngineer to delegate implementation to Cursor cloud agents.

**Components**:
- `SKILL.md` — usage guide and handoff procedure
- `scripts/launch.sh` — launches Cursor agent with PR auto-create
- `scripts/status.sh` — tracks PR status

**Key features**:
- One task = one agent = one PR
- Auto-creates PR for human review gate
- Never auto-merges (CTO/reviewer approval required)

### 3. OpenRouter Adapter Binding
**Path**: `bionixus/docs/ops/openrouter-adapter-binding.md`

Maps token-optimization postures to OpenRouter model refs.

**Tier bindings** (placeholders — verify on [openrouter.ai/models](https://openrouter.ai/models)):

| Posture | Use Case | Model Ref | Fallback |
|---------|----------|-----------|----------|
| **Fast** | Triage, dispatch, bulk mechanical | `openrouter/google/gemini-2.5-flash` | `openrouter/deepseek/deepseek-chat-v3-0324:free` |
| **Medium** | Standard IC, review/approval | `openrouter/anthropic/claude-sonnet-4-5` | `openrouter/openai/gpt-4.1` |
| **Thinking-high** | Deep architecture, one-way-door | `openrouter/anthropic/claude-opus-4-6` | `openrouter/anthropic/claude-sonnet-4-5` |

**Base URL fix**: Must use `https://openrouter.ai/api/v1` (with `/api/`) to avoid silent empty replies.

### 4. Token Optimization Tier Matrix (Authoritative)
**Path**: `bionixus/skills/local/token-optimization/SKILL.md`

CFO-approved task-class postures. This is the **source of truth** — openrouter-adapter-binding.md only binds these postures to concrete model refs.

**No new tier schemes allowed** — all agents follow this matrix.

### 5. Verification Script
**Path**: `bionixus/scripts/verify-wiring.sh`

Automated checks for:
- Required files exist
- No secrets committed (checks for placeholder patterns)
- OpenRouter base URL correctness

**Run from repo root**:
```bash
./bionixus/scripts/verify-wiring.sh
# Output: "All checks passed."
```

## Verification Results

✅ **All export files committed to main**  
✅ **verify-wiring.sh passes**  
✅ **No secrets in repo**  
✅ **Skill references use correct format** (`local/<hash>/<name>`)

## Handoff Readiness

### For CTO
1. **HermesEngineer is hired and paused** (agent ID: `8058d23d-12f9-4e8b-9149-f47e82edcede`)
2. **Wiring is production-ready** — unpause when ready to delegate Cursor tasks
3. **OpenRouter API key required** — set `OPENROUTER_API_KEY` env var or use onboarding flow
4. **Base URL fix documented** — verify after OpenClaw gateway updates

### For Board
- **No new costs introduced** — tier bindings follow existing CFO-approved matrix
- **No org-wide defaults changed** — Thinking-high requires board approval per token-optimization
- **Security**: No secrets committed; placeholders only

### For HermesEngineer (when unpaused)
1. Read the Paperclip skill first on every wake
2. Use `cursor-code` skill to launch implementation tasks
3. Follow tier discipline: Fast/Medium/Thinking-high per task class
4. Always end heartbeat with clear disposition

## Next Steps

1. **Unpause HermesEngineer** when ready to start delegating Cursor tasks
2. **Set OPENROUTER_API_KEY** in deployment environment
3. **Verify OpenRouter base URL** after any OpenClaw gateway updates
4. **Assign first task** to HermesEngineer to test the full handoff cycle

## References

- Token optimization skill: `bionixus/skills/local/token-optimization/SKILL.md`
- OpenRouter models: [openrouter.ai/models](https://openrouter.ai/models)
- Cursor cloud agents: [cursor.com/cloud-agents](https://cursor.com/cloud-agents)

---

**Handoff complete.** All technical deliverables verified and ready for production use.
