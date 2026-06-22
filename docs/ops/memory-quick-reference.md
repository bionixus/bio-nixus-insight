# Agent Memory System — Quick Reference

**Last Updated:** 2026-06-22  
**Issue:** BIO-650  
**Achievement:** 21x token reduction for typical memory loads

---

## Quick Start

### Load Memory (Agent Wake)
```bash
# Minimal (recommended for most wakes)
cat memory/quick-context.md  # ~1K tokens

# Standard (when you need recent history)
source scripts/paperclip/para-helpers.sh
para_load_memory standard  # ~2.5K tokens (quick + 3 days)

# Deep (complex investigations)
para_load_memory deep  # ~4.5K tokens (quick + 7 days)
```

### End of Day Routine
```bash
# 1. Generate daily summary (auto-compress)
./scripts/paperclip/summarize-daily-log.sh $(date +%Y-%m-%d)

# 2. Update quick context with tomorrow's priorities
para_update_quick_context
```

---

## Three-Tier Architecture

| Tier | File | Size | When to Load | Token Cost |
|------|------|------|-------------|------------|
| **1. Quick Context** | `memory/quick-context.md` | ~50 lines | Always (every wake) | ~1K |
| **2. Summaries** | `memory/summaries/YYYY-MM-DD.md` | ~30 lines/day | 3-7 day history | ~500/day |
| **3. Detailed Logs** | `memory/daily/YYYY-MM-DD.md` | Unlimited | Only when needed | ~5-10K/day |

---

## Common Commands

### Memory Loading
```bash
# Quick context only
cat memory/quick-context.md

# Standard load (quick + 3 days)
para_load_memory standard

# Deep load (quick + 7 days)
para_load_memory deep

# Specific detailed log
cat memory/daily/2026-06-20.md
```

### Memory Creation
```bash
# Write to daily log (during work)
echo "## BIO-XXX Activity" >> memory/daily/$(date +%Y-%m-%d).md

# Generate summary (end of day)
./scripts/paperclip/summarize-daily-log.sh

# Update quick context
para_update_quick_context
```

### Search
```bash
# Quick search (summaries)
rg "budget approval" memory/summaries/

# Deep search (detailed logs)
rg "BIO-84" memory/daily/

# Entity search
para_recall "memory optimization"
```

---

## Token Budget Examples

### Typical Scenarios

| Scenario | What to Load | Token Cost | Use Case |
|----------|-------------|------------|----------|
| **Status check** | Quick context | ~1K | Quick coordination, simple updates |
| **Standard work** | Quick + 3 days | ~2.5K | Most work sessions |
| **Investigation** | Quick + 7 days | ~4.5K | Complex issues, planning |
| **Deep dive** | Quick + summaries + 1 detailed | ~8K | Specific date investigation |
| **Weekly review** | Quick + 7 days + 2 detailed | ~15K | Weekly synthesis |

### Comparison: Before vs After

| Period | Before (Detailed) | After (Summaries) | Savings |
|--------|-------------------|-------------------|---------|
| 1 day | ~7.5K tokens | ~500 tokens | 15x |
| 3 days | ~22.5K tokens | ~2.5K tokens | 9x |
| 7 days | ~52.5K tokens | ~4.5K tokens | 11.7x |
| 30 days | Not feasible | ~16K tokens | **Now possible!** |

---

## What Goes Where?

### Quick Context (`memory/quick-context.md`)
- ✅ Current active priorities (top 3-5)
- ✅ Critical blockers
- ✅ Recent decisions (last 7 days)
- ✅ Key active entities
- ❌ Historical details
- ❌ Completed work from last month

### Daily Summaries (`memory/summaries/`)
- ✅ Completed issues that day
- ✅ In-progress issues
- ✅ New blockers
- ✅ Key decisions
- ✅ Cross-agent coordination
- ❌ Full chronological timeline
- ❌ Complete interaction details

### Detailed Logs (`memory/daily/`)
- ✅ Everything (unlimited detail)
- ✅ Full chronological timeline
- ✅ Complete issue context
- ✅ All interaction history
- ✅ Implementation notes
- ✅ Never deleted (source of truth)

---

## Rules of Thumb

### Always
- ✅ Load quick context on every wake
- ✅ Generate summaries at end of day
- ✅ Update quick context when priorities shift
- ✅ Write to detailed log during work
- ✅ Preserve all detailed logs forever

### Never
- ❌ Load all detailed logs on every wake (huge waste)
- ❌ Skip summarization (defeats optimization)
- ❌ Delete detailed logs (source of truth)
- ❌ Update summaries manually (auto-generated)
- ❌ Let quick context go stale

### When Needed
- 🔄 Load summaries for recent history (3-7 days)
- 🔄 Load detailed log for specific date investigation
- 🔄 Search detailed logs for deep context
- 🔄 Extract key facts to PARA entities

---

## Troubleshooting

**Q: I loaded quick context but need more detail**  
A: Load summaries for last 3-7 days, or specific detailed log if needed.

**Q: Can't find information in summaries**  
A: Summaries are compressed. Load the detailed log for that date.

**Q: Quick context is stale**  
A: Run `para_update_quick_context` to update with current state.

**Q: Summary generation failed**  
A: Ensure detailed log exists at `memory/daily/YYYY-MM-DD.md`.

**Q: Where should I write during work?**  
A: Always write to detailed log (`memory/daily/YYYY-MM-DD.md`). Summarize at end of day.

---

## Files & Tools

### Documentation
- **Overview:** `docs/ops/memory-optimization-guide.md`
- **Usage Guide:** `docs/ops/memory-usage-guide-for-agents.md`
- **Completion:** `docs/ops/bio-650-memory-optimization-completion.md`
- **Quick Ref:** This file

### Tools
- **Summarize:** `scripts/paperclip/summarize-daily-log.sh`
- **Helpers:** `scripts/paperclip/para-helpers.sh` (para_load_memory, para_summarize_daily)

### Templates
- **Quick Context:** `templates/memory/quick-context.md`
- **Summary:** `templates/memory/daily-summary.md`

---

## Performance

### Compression Results
- CMO daily log: 360 lines → 34 lines (10.5x)
- CEO daily log: 111 lines → 24 lines (4.6x)

### Token Savings
- Standard 7-day load: 52.5K → 2.5K tokens (21x reduction)
- Now feasible: 30-day context (~16K tokens)

---

## Next Steps for Adoption

1. **Review quick reference** (this document)
2. **Load helpers:** `source scripts/paperclip/para-helpers.sh`
3. **Start using quick context:** `cat memory/quick-context.md`
4. **Generate first summary:** `./scripts/paperclip/summarize-daily-log.sh`
5. **Adopt tiered loading:** Use `para_load_memory standard` in your workflows

---

**Questions?** See full guides in `docs/ops/memory-*.md`
