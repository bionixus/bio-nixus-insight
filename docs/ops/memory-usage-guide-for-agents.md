# Memory Usage Guide for Agents

## Token-Optimized Memory System

This guide explains how to use the three-tier memory system to minimize token consumption while maintaining full context access.

## The Three Tiers

### Tier 1: Quick Context (Always Load)
**File:** `memory/quick-context.md`  
**Size:** ~50 lines (~1,000 tokens)  
**When:** Every agent wake

**What it contains:**
- Current active priorities (top 3-5)
- Critical blockers requiring attention
- Recent decisions from last 7 days
- Key active entities

**How to use:**
```bash
# Always load this first
cat memory/quick-context.md

# Or for agent-specific:
cat .paperclip/agents/CEO/memory/quick-context.md
```

### Tier 2: Recent Summaries (Load on Demand)
**Files:** `memory/summaries/YYYY-MM-DD.md`  
**Size:** ~30 lines per day (~500 tokens)  
**When:** Need context from last 3-7 days

**What it contains:**
- Completed issues
- In-progress issues
- New blockers
- Key decisions
- Cross-agent coordination

**How to use:**
```bash
# Load last 3 days of summaries (~1.5K tokens)
cat memory/summaries/$(date -d '1 day ago' +%Y-%m-%d).md
cat memory/summaries/$(date -d '2 days ago' +%Y-%m-%d).md
cat memory/summaries/$(date -d '3 days ago' +%Y-%m-%d).md

# Or load specific date
cat memory/summaries/2026-06-22.md
```

### Tier 3: Detailed Logs (Load Only When Needed)
**Files:** `memory/daily/YYYY-MM-DD.md`  
**Size:** Unlimited (200-400 lines typical, ~5-10K tokens)  
**When:** Need full chronological detail for specific date

**What it contains:**
- Complete chronological timeline
- Full issue context and discussions
- Detailed interaction history
- Implementation notes

**How to use:**
```bash
# Only load when you need complete detail
cat memory/daily/2026-06-20.md

# Search across all detailed logs
rg "BIO-49" memory/daily/
rg "budget approval" memory/daily/
```

## Token Budget Examples

### Minimal Load (Agent Wake)
```bash
# Load: Quick context only
cat memory/quick-context.md
# Token cost: ~1,000 tokens
# Use case: Status check, quick coordination
```

### Standard Load (Most Work Sessions)
```bash
# Load: Quick context + last 3 days summaries
cat memory/quick-context.md
cat memory/summaries/{yesterday,2-days-ago,3-days-ago}.md
# Token cost: ~2,500 tokens
# Use case: Typical agent work session
```

### Deep Context Load (Complex Issues)
```bash
# Load: Quick context + summaries + specific detailed logs
cat memory/quick-context.md
cat memory/summaries/2026-06-{20..22}.md
cat memory/daily/2026-06-15.md  # Specific date with important context
# Token cost: ~8,000 tokens
# Use case: Complex investigation, historical review
```

### Full Week Load (Weekly Planning)
```bash
# Load: Quick context + all 7-day summaries
cat memory/quick-context.md
cat memory/summaries/2026-06-{16..22}.md
# Token cost: ~4,500 tokens
# Use case: Weekly synthesis, planning
```

## Workflow: Creating Memory

### During Work (Real-time)
1. **Write to detailed log continuously:**
   ```bash
   echo "## BIO-650 Memory Optimization (16:00 UTC+3)" >> memory/daily/$(date +%Y-%m-%d).md
   echo "" >> memory/daily/$(date +%Y-%m-%d).md
   echo "Created three-tier memory architecture guide..." >> memory/daily/$(date +%Y-%m-%d).md
   ```

2. **Update quick context on major events:**
   ```bash
   # Update "Active Now" when priorities shift
   # Update "Critical Blockers" when blockers added/resolved
   # Update "Recent Decisions" when key decisions made
   vim memory/quick-context.md
   ```

### End of Day (Summarization)
1. **Generate compressed summary:**
   ```bash
   ./scripts/paperclip/summarize-daily-log.sh $(date +%Y-%m-%d)
   
   # Or for agent-specific:
   ./scripts/paperclip/summarize-daily-log.sh $(date +%Y-%m-%d) CEO
   ```

2. **Extract facts to PARA entities:**
   ```bash
   # Extract durable facts from daily log to entity files
   source scripts/paperclip/para-helpers.sh
   para_add_fact projects/bio-650 "Three-tier memory achieves 10x token reduction" "BIO-650 implementation" "memory,optimization"
   ```

3. **Update quick context:**
   ```bash
   # Review completed work, update "Active Now"
   # Archive completed priorities
   # Add new priorities for tomorrow
   vim memory/quick-context.md
   ```

## Search & Recall

### Quick Search (Summaries)
```bash
# Fast search across compressed summaries
rg "budget approval" memory/summaries/
rg "BIO-49" memory/summaries/

# Find when something was completed
rg "✅.*BIO-650" memory/summaries/
```

### Deep Search (Detailed Logs)
```bash
# Full-text search across all detailed logs
rg "credentials gate" memory/daily/
rg "timeout pattern" memory/daily/

# Find context for specific date range
rg "BIO-84" memory/daily/2026-06-{20..22}.md
```

### Entity-Based Search (PARA)
```bash
# Search entities for durable facts
source scripts/paperclip/para-helpers.sh
para_recall "memory optimization"
para_recall "budget"

# Direct entity access
cat life/projects/bio-650/summary.md
cat life/areas/companies/bionorica/summary.md
```

## Best Practices

### ✅ Do This
- Always load quick context on agent wake
- Generate summaries at end of day
- Extract key facts to PARA entities
- Update quick context on major events
- Use summaries for recent history (last 7 days)
- Use detailed logs only when you need specific chronology

### ❌ Don't Do This
- Don't load all detailed logs on every wake (huge token waste)
- Don't skip summarization (defeats the optimization)
- Don't delete detailed logs (they're the source of truth)
- Don't update summaries directly (they're auto-generated)
- Don't ignore quick context updates (stale quick context defeats the purpose)

## Token Savings Calculator

### Before Optimization
```
Daily log size: 300 lines = ~7,500 tokens
Loading 7 days: 7 × 7,500 = 52,500 tokens
Loading 30 days: Exceeds context limits
```

### After Optimization (Standard Load)
```
Quick context: 50 lines = ~1,000 tokens
3 days of summaries: 3 × 30 lines = ~1,500 tokens
Total: ~2,500 tokens (21x reduction!)
```

### After Optimization (Deep Load)
```
Quick context: ~1,000 tokens
7 days of summaries: ~3,500 tokens
2 specific detailed logs: ~15,000 tokens
Total: ~19,500 tokens (still fits comfortably)
```

## Migration from Old System

If you have existing daily logs without summaries:

```bash
# Generate summaries for last 7 days
for i in {0..6}; do
    DATE=$(date -d "$i days ago" +%Y-%m-%d)
    if [ -f "memory/daily/$DATE.md" ]; then
        ./scripts/paperclip/summarize-daily-log.sh $DATE
    fi
done

# Create initial quick context (manual, one-time)
cp templates/memory/quick-context.md memory/quick-context.md
vim memory/quick-context.md  # Fill in current state
```

## Monitoring Token Usage

Track your token savings:

```bash
# Before: Count tokens in detailed logs
wc -l memory/daily/2026-06-*.md | tail -1

# After: Count tokens in summaries + quick context
wc -l memory/quick-context.md memory/summaries/2026-06-*.md | tail -1

# Calculate savings
echo "Savings: $(( (7 * 300) - (50 + (7 * 30)) )) lines = ~$((  (7 * 300 * 25) - (50 * 25 + 7 * 30 * 25) )) tokens"
```

## Questions & Troubleshooting

**Q: What if I need context from 2 weeks ago?**  
A: Load that specific day's summary (500 tokens) or detailed log (5K tokens) only if needed.

**Q: What if the summary misses important details?**  
A: Summaries are optimized for common cases. For edge cases, load the detailed log. It's always preserved.

**Q: How do I know what to put in quick context vs summaries?**  
A: Quick context = "What do I need to know RIGHT NOW?"  
Summaries = "What did I do that day?" (historical record)

**Q: Should I update summaries manually?**  
A: No. Summaries are auto-generated. If you need to correct something, update the detailed log and regenerate.

**Q: What about agent-specific vs project-level memory?**  
A: Same structure in both locations:
- Agent: `.paperclip/agents/{agent}/memory/`
- Project: `./memory/`

## References

- [Memory Optimization Guide](./memory-optimization-guide.md): Full architecture
- [PARA Memory Patterns](./para-memory-patterns.md): Entity-based memory patterns
- [PARA Standardization Plan](./para-memory-standardization-plan.md): Overall PARA system
