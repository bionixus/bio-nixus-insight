# Agent Memory Optimization Guide

## Problem Statement

Current agent memory system has high token consumption:
- Daily logs can exceed 300+ lines (CMO: 360 lines, CEO: 111 lines)
- All historical context loaded on every agent wake
- No automatic summarization or compression
- Detailed logs never decay or compress over time

## Token Impact Analysis

**Current state:**
- Average daily log: ~200-300 lines = ~5,000-10,000 tokens
- Loading 7 days of history: ~35,000-70,000 tokens
- Loading 30 days: ~150,000-300,000 tokens (exceeds context limits)

**Target state:**
- Compressed summaries: ~20-30 lines per day = ~500-1,000 tokens
- Loading 7 days of summaries: ~3,500-7,000 tokens (10x reduction)
- Loading 30 days of summaries: ~15,000-30,000 tokens (feasible)

## Three-Tier Memory Architecture

### Tier 1: Quick Context (Always Loaded)
**Location:** `memory/quick-context.md`
**Size:** <50 lines (~1,000 tokens max)
**Content:**
- Current active priorities (top 3-5)
- Critical blockers
- Today's focus
- Key decisions from last 7 days

**Update frequency:** Real-time during work sessions

### Tier 2: Recent Summaries (7-Day Window)
**Location:** `memory/summaries/YYYY-MM-DD.md`
**Size:** ~20-30 lines per day (~500 tokens)
**Content:**
- Key accomplishments (3-5 bullets)
- Important decisions made
- Blockers encountered
- Entities created/updated
- Cross-agent coordination notes

**Update frequency:** End of day (auto-generated from Tier 3)

### Tier 3: Detailed Logs (Archive, Lazy Load)
**Location:** `memory/daily/YYYY-MM-DD.md`
**Size:** Unlimited (current verbose format)
**Content:**
- Full chronological log (current format)
- All issue details and context
- Complete interaction history

**Access pattern:** Only loaded when specific date context needed

## Implementation Strategy

### 1. Auto-Summarization Script

Create `scripts/paperclip/summarize-daily-log.sh`:

```bash
#!/bin/bash
# Automatically summarize detailed daily log into compressed format

# Extract key information:
# - Issues worked on (with status changes)
# - Blockers identified
# - Decisions made
# - Entities created
# - Cross-agent coordination

# Generate 20-30 line summary
# Place in memory/summaries/
```

### 2. Quick Context Update Pattern

Agents update `memory/quick-context.md` during work:

```markdown
# Quick Context — Last Updated: 2026-06-22 16:00

## Active Now
- BIO-650: Improving agent memory system
- BIO-435: Day 3 multilingual blog briefs (awaiting validation)

## Critical Blockers
- BIO-84: Credentials gate blocking entire GEO pipeline
- BIO-259: Budget approval ($700/mo) blocking marketing automation

## Recent Decisions (Last 7 Days)
- 2026-06-22: Three-tier memory architecture approved
- 2026-06-21: BIO-49 Clutch deferred for 1 month per board
- 2026-06-20: CMO timeout pattern resolved via scope reduction

## Key Entities
- projects/bio-650-memory-optimization/
- areas/companies/bionorica/
- areas/people/board/
```

### 3. Daily Summarization Workflow

**End of day routine:**

1. Read detailed log (`memory/daily/2026-06-22.md`)
2. Extract key information using LLM or regex:
   - Issues: Status changes, completions, blockers
   - Decisions: Architectural choices, approvals, deferrals
   - Entities: Projects/areas created or archived
   - Coordination: Cross-agent interactions
3. Generate compressed summary (`memory/summaries/2026-06-22.md`)
4. Update quick context (`memory/quick-context.md`)

### 4. Memory Access Patterns

**Agent wake (default load):**
```bash
# Load quick context (~1K tokens)
cat memory/quick-context.md

# Load last 3 days of summaries (~1.5K tokens)
cat memory/summaries/$(date -d '1 day ago' +%Y-%m-%d).md
cat memory/summaries/$(date -d '2 days ago' +%Y-%m-%d).md
cat memory/summaries/$(date -d '3 days ago' +%Y-%m-%d).md

# Total: ~2.5K tokens (vs 15K+ current)
```

**Deep context when needed:**
```bash
# Only load detailed logs for specific dates
cat memory/daily/2026-06-20.md  # 5K tokens
```

**Historical search:**
```bash
# Use grep/ripgrep on all logs
rg "BIO-49" memory/daily/
rg "budget approval" memory/summaries/
```

## Summary Format Template

### Daily Summary Template
```markdown
# Daily Summary — 2026-06-22

## Completed
- ✅ BIO-9: Global sales strategy updated (3 regions, $450K-$600K Year 1)
- ✅ BIO-49: Directory listings complete (4/5, Clutch deferred)
- ✅ BIO-451: CMO timeout pattern resolved

## In Progress
- ⏳ BIO-435 Day 3: 10 multilingual briefs ready for validation
- ⏳ BIO-650: Memory optimization guide drafted

## Blockers Added
- 🚫 BIO-84: Credentials gate blocks GEO pipeline (board action needed)
- 🚫 BIO-259: Budget approval blocks marketing automation

## Entities Modified
- Created: projects/bio-650-memory-optimization/
- Updated: areas/companies/bionorica/
- Archived: projects/q1-budget-proposal/

## Key Decisions
- Adopted three-tier memory architecture for token reduction
- Deferred Clutch setup for 1 month per board guidance
- Scope reduction strategy for CMO timeout prevention

## Cross-Agent Coordination
- CEO → CMO: Scoped BIO-451 to batches 4+6 only
- CTO → CEO: BIO-596 technical health check coordinated
```

### Quick Context Template
```markdown
# Quick Context — Last Updated: YYYY-MM-DD HH:MM

## Active Now (Top 3)
1. Issue-XXX: Brief description
2. Issue-YYY: Brief description
3. Issue-ZZZ: Brief description

## Critical Blockers
- Issue-XXX: Description (owner/action)

## Recent Decisions (Last 7 Days)
- YYYY-MM-DD: Decision description
- YYYY-MM-DD: Decision description

## Key Entities (Active)
- projects/entity-name/
- areas/people/person-name/
```

## Migration Path

### Phase 1: Create Infrastructure (Immediate)
1. ✅ Create this optimization guide
2. ⏭️ Create quick-context template
3. ⏭️ Create daily summary template
4. ⏭️ Create `scripts/paperclip/summarize-daily-log.sh`
5. ⏭️ Create `memory/summaries/` directory

### Phase 2: Backfill Recent History (This Week)
1. Manually summarize last 3 days of logs
2. Generate quick context from recent summaries
3. Test token consumption (measure before/after)

### Phase 3: Automate (Next Week)
1. Add end-of-day summarization to agent routines
2. Auto-update quick context on issue status changes
3. Integrate with para-helpers.sh

### Phase 4: Agent Onboarding (Ongoing)
1. Update AGENT_TEMPLATE.md with memory guidance
2. Update agent bootstrap to create memory structure
3. Add memory optimization to agent training

## Productivity Safeguards

### Never Lose Detail
- Detailed logs remain in `memory/daily/` forever
- Only access pattern changes (lazy load vs eager load)
- Summaries are additive, not destructive

### Context on Demand
- Agents can always load detailed logs when needed
- Use case: "What exactly happened on 2026-06-15?"
- Command: `cat memory/daily/2026-06-15.md`

### Entity-Based Recall
- Extract durable facts to PARA entities
- Query entities instead of grepping logs
- Example: `cat life/projects/bio-650/summary.md`

### Search Remains Powerful
- Full-text search across all logs still works
- Grep/ripgrep on detailed logs for deep searches
- Semantic search (qmd) on entities for concept recall

## Metrics & Monitoring

### Before Optimization (Baseline)
- Average daily log size: 200-300 lines
- 7-day context load: ~35K-70K tokens
- 30-day context load: Exceeds limits

### After Optimization (Target)
- Quick context: <50 lines (~1K tokens)
- Daily summary: 20-30 lines (~500 tokens)
- 7-day load: ~4.5K tokens (10x reduction)
- 30-day load: ~16K tokens (15x reduction, now feasible)

### Success Criteria
- ✅ Token consumption reduced by 10x for typical loads
- ✅ Agent can load 30 days of context within limits
- ✅ No loss of critical information or context
- ✅ Agent productivity maintained or improved
- ✅ Faster context loading (less to read)

## Rollout Plan

### Week 1: Infrastructure + Templates
- Create memory structure
- Build summarization script
- Document new patterns

### Week 2: Pilot with CEO Agent
- CEO agent adopts new structure
- Measure token reduction
- Iterate based on feedback

### Week 3: Expand to CMO + CTO
- Roll out to high-activity agents
- Refine summarization rules
- Automate daily routine

### Week 4: All Agents + Monitoring
- Deploy to all 15 agents
- Set up token usage monitoring
- Establish optimization metrics dashboard

## References

- para-memory-standardization-plan.md: Full PARA architecture
- para-memory-patterns.md: Entity management patterns
- para-memory-bootstrap.md: Agent setup guide
