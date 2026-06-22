# PARA Memory Patterns

This document provides guidelines and patterns for using PARA (Projects, Areas, Resources, Archives) memory effectively across agents.

## PARA Philosophy

PARA is Tiago Forte's method for organizing **actionable** information by:
- **Outcome** (Projects) vs **Responsibility** (Areas)
- **Timeliness** (active vs archived)
- **Actionability** (can I use this to make progress now?)

## The Four Categories

### Projects
**Definition:** Active work with a clear goal or deadline.

**Characteristics:**
- Has a defined end state ("launch new feature", "complete report")
- Has a deadline or target date
- Can be marked "done"
- Moves to Archives when complete

**When to create:**
- Assigned a Paperclip issue with deliverables
- Start a multi-session effort
- Need to track progress toward a specific outcome

**Examples:**
- `projects/bio-610-para-standardization/`
- `projects/q2-budget-proposal/`
- `projects/clutch-gbp-credentials-setup/`

**Lifecycle:**
```
Created → Active work → Complete → Move to archives/
```

### Areas
**Definition:** Ongoing responsibilities with no end date.

**Characteristics:**
- No finish line (e.g., "maintain security", "support customers")
- Represents a sphere of responsibility or relationship
- Stays active indefinitely
- Two subcategories: people, companies

**When to create:**
- Track a key relationship (board member, partner, client)
- Maintain ongoing responsibility (security, compliance)
- Need recurring context about a person/org

**Examples:**
- `areas/people/cto/`
- `areas/people/board-member-john/`
- `areas/companies/bionorica/`
- `areas/companies/clutch/`

**Lifecycle:**
```
Created → Active indefinitely → (only archive if relationship/responsibility ends)
```

### Resources
**Definition:** Reference material and topics of interest.

**Characteristics:**
- No action required, just information
- Can be referenced by projects/areas
- Grows as you learn
- Rarely archived (knowledge doesn't expire)

**When to create:**
- Build reusable knowledge base
- Document patterns/techniques
- Collect research on a topic

**Examples:**
- `resources/sanity-cms-patterns/`
- `resources/seo-best-practices/`
- `resources/pharma-regulatory-frameworks/`

**Lifecycle:**
```
Created → Accumulate knowledge → (stays active)
```

### Archives
**Definition:** Inactive items from any category.

**Characteristics:**
- No longer active but preserved for history
- Searchable for context/lessons
- Never deleted (supersede instead)

**When to archive:**
- Project completes (success or cancellation)
- Relationship/responsibility ends
- Reference material becomes obsolete

**Examples:**
- `archives/q1-budget-proposal/` (project completed)
- `archives/former-contractor-alice/` (relationship ended)

## Entity vs Daily Note Decision Tree

```
Is it mentioned 3+ times?
├─ Yes → Create entity
└─ No
   └─ Is it a direct relationship (coworker, client, family)?
      ├─ Yes → Create entity (areas/people or areas/companies)
      └─ No
         └─ Is it a significant project/company?
            ├─ Yes → Create entity
            └─ No → Note in daily note only
```

### Daily Notes Use Cases
- Timeline of events ("met with X", "shipped Y", "learned Z")
- Quick captures before extraction
- Context that doesn't fit an entity
- Temporary notes during active work

### Entity Use Cases
- Durable facts that need recall
- Relationships worth tracking
- Projects with multiple facts
- Knowledge worth indexing

## Fact Atomicity Guidelines

### Atomic Fact Rules

1. **One fact per entry** - Don't combine multiple claims
2. **Self-contained** - Readable without other context
3. **Timestamped** - When was this true?
4. **Sourced** - Where did this come from?
5. **Tagged** - For filtering/grouping
6. **Statused** - active | superseded | questionable

### Good Fact Examples

```yaml
# Good: Atomic, sourced, timestamped
- id: fact-001
  timestamp: 2026-06-22T00:00:00Z
  content: "BioNixus budget cap is $700/month for agent operations (BIO-259)"
  source: "BIO-259 board decision"
  tags: ["budget", "constraint"]
  status: active
  confidence: high

# Good: Specific, actionable
- id: fact-002
  timestamp: 2026-06-21T15:30:00Z
  content: "CMO agent paused due to adapter error (requires CTO fix)"
  source: "BIO-287 assessment"
  tags: ["blocker", "agent-status"]
  status: active
  confidence: high

# Good: Supersedes previous fact
- id: fact-003
  timestamp: 2026-06-22T10:00:00Z
  content: "Budget cap increased to $1200/month for Q3 (supersedes $700/mo)"
  source: "Board meeting 2026-06-22"
  tags: ["budget", "constraint"]
  status: active
  confidence: high
  supersedes: fact-001
```

### Bad Fact Examples

```yaml
# Bad: Multiple facts in one
- content: "CMO paused, Copywriter has errors, BD Manager needs SOP"
  # Should be 3 separate facts

# Bad: Opinion without source
- content: "The current architecture is suboptimal"
  # No source, vague, not actionable

# Bad: No timestamp
- content: "Project deadline is next week"
  # When is "next week"? Becomes stale immediately

# Bad: Not atomic
- content: "Completed BIO-287, updated BIO-280, blocked on BIO-84"
  # Should be 3 facts in respective project entities
```

## Summary Synthesis Patterns

### Weekly Synthesis Workflow

1. **Collect active facts** - Read items.yaml
2. **Group by theme** - Organize related facts
3. **Write narrative summary** - Synthesize into prose
4. **Link to sources** - Reference fact IDs or issues
5. **Update summary.md** - Replace or append

### Summary Templates

#### Project Summary
```markdown
# {Project Name}

Quick context: {1-2 sentence overview}

## Status

**State:** {Active|Blocked|Complete}
**Progress:** {milestone or percentage}
**Next action:** {what needs to happen next}
**Deadline:** {if applicable}

## Key Facts

- {Synthesized fact 1 from items.yaml}
- {Synthesized fact 2 from items.yaml}
- {Link to issue or document}

## Blockers

- {Current blocker 1}
- {Current blocker 2}

## Related Entities

- {Link to related project/area/resource}
```

#### Area (Person) Summary
```markdown
# {Person Name}

Quick context: {Role, relationship, how you work together}

## Status

**Relationship:** {Active collaborator|Occasional contact|etc}
**Last interaction:** {date}
**Next touchpoint:** {if planned}

## Key Facts

- {What you know about their priorities}
- {How they prefer to communicate}
- {Relevant context for working with them}

## Recent Interactions

- {Date}: {Brief summary}
- {Date}: {Brief summary}
```

## Cross-Agent Memory Patterns

### Shared vs Agent-Specific

**Agent-specific memory** (`.paperclip/agents/{agent}/`):
- Personal context (how I operate)
- Assigned work (my projects)
- My relationships (people I work with)

**Shared memory** (project-level):
- Company-wide facts (budget, policies)
- Common resources (templates, processes)
- Shared projects (multi-agent work)

### Memory Handoff Pattern

When delegating work:

1. **Capture context in your memory**
   ```bash
   para_add_fact projects/bio-610 "Delegated PARA helper library creation to Cursor agent" "BIO-610 comment" "delegation,cursor"
   ```

2. **Link in issue comment**
   ```markdown
   Delegated helper library creation. Context captured in:
   - [life/projects/bio-610](/.paperclip/agents/hermesengineer/life/projects/bio-610/)
   ```

3. **Executor reads context**
   ```bash
   # Executor can read handoff context
   cat .paperclip/agents/hermesengineer/life/projects/bio-610/summary.md
   ```

4. **Executor updates on completion**
   ```bash
   para_add_fact projects/bio-610 "Helper library created: scripts/paperclip/para-helpers.sh" "Cursor agent completion" "deliverable"
   ```

## Memory Decay and Superseding

### Never Delete Facts

Facts are historical records. To update knowledge:

```yaml
# Original fact
- id: fact-001
  timestamp: 2026-06-20T00:00:00Z
  content: "CMO agent is paused"
  status: superseded
  superseded_by: fact-015

# Superseding fact
- id: fact-015
  timestamp: 2026-06-22T00:00:00Z
  content: "CMO agent resumed after adapter fix"
  status: active
  supersedes: fact-001
```

### Confidence Levels

Use confidence to signal fact reliability:

- **high**: Direct observation or primary source
- **medium**: Inferred or secondary source
- **low**: Speculation or third-hand
- **questionable**: Needs verification

```yaml
- id: fact-020
  content: "New feature may ship next week"
  confidence: low  # Speculation, not confirmed
  
- id: fact-021
  content: "Feature shipped on 2026-06-22"
  confidence: high  # Direct observation
  supersedes: fact-020
```

## Common Patterns by Agent Role

### CEO Agent
- **Projects**: Company initiatives, board approvals
- **Areas**: Board members, key partners, C-suite relationships
- **Resources**: Company policies, governance frameworks
- **Daily notes**: Status checks, coordination activities

### Engineering Agent (HermesEngineer, CTO)
- **Projects**: Feature development, tech debt, infrastructure
- **Areas**: Systems (authentication, API, database), team relationships
- **Resources**: Technical patterns, architecture docs
- **Daily notes**: Implementation notes, debugging sessions

### Marketing Agent (CMO)
- **Projects**: Campaigns, content initiatives
- **Areas**: Channels (SEO, email, social), key accounts
- **Resources**: Marketing playbooks, templates
- **Daily notes**: Campaign performance, content ideas

### Operations Agent (CFO, HR)
- **Projects**: Process improvements, compliance initiatives
- **Areas**: Departments, vendors, recurring operations
- **Resources**: Policies, templates, frameworks
- **Daily notes**: Operational events, process observations

## Memory Maintenance Routines

### Daily (During Work)
- ✅ Write to daily note continuously
- ✅ Create entities when threshold met (3+ mentions)
- ✅ Add facts to active project entities

### End of Day
- ✅ Review daily note
- ✅ Extract durable facts to entities
- ✅ Update project summaries if major progress

### Weekly Synthesis
- ✅ Rewrite project summaries from items.yaml
- ✅ Archive completed projects
- ✅ Review and supersede outdated facts
- ✅ Update MEMORY.md with new patterns learned

### Monthly Review
- ✅ Archive inactive areas (if relationships ended)
- ✅ Consolidate duplicate entities
- ✅ Update resource materials
- ✅ Clean up stale daily notes (move to archives if needed)

## Tools and Commands

### Using the Helper Library

```bash
# Load helpers
source scripts/paperclip/para-helpers.sh

# Set PARA root (optional, defaults to current directory)
export PARA_ROOT=".paperclip/agents/ceo"

# Create entity
para_create_entity projects "q3-budget-planning" "Budget proposal for Q3 operations"

# Add fact
para_add_fact projects "q3-budget-planning" "Target: $1200/mo for agent ops" "Board meeting" "budget,target"

# Daily note
para_daily_note "Worked on PARA standardization today. Created helper library and init script."

# Archive
para_archive_entity projects "q2-budget-planning" "Q2 complete, Q3 planning started"

# List
para_list projects

# Stats
para_stats

# Search/recall
para_recall "budget"
```

### Initialize New Agent

```bash
# Initialize PARA for an agent
scripts/paperclip/init-para-memory.sh ceo

# Custom location
scripts/paperclip/init-para-memory.sh -l ./my-agent-memory cto

# Shared/company-level
scripts/paperclip/init-para-memory.sh --shared company

# Dry run (see what would be created)
scripts/paperclip/init-para-memory.sh --dry-run hermesengineer
```

## Troubleshooting

### Problem: Too many entities, hard to find things
**Solution:** Use `para_recall` (qmd semantic search) instead of browsing

### Problem: Summaries are stale
**Solution:** Set weekly synthesis routine, rewrite from items.yaml

### Problem: Facts are getting duplicated
**Solution:** Search before adding, use `supersedes` field to replace old facts

### Problem: Not sure if it's a project or area
**Decision tree:**
- Has deadline/goal? → Project
- Ongoing responsibility? → Area
- Just reference material? → Resource

### Problem: Don't know what category for a person/company
**Solution:** Always use areas/people or areas/companies. These are relationships, not projects.

## Next Steps

1. **Read** `para-memory-files` skill (full schema reference)
2. **Initialize** your PARA structure: `scripts/paperclip/init-para-memory.sh <your-agent-name>`
3. **Start** with daily notes today
4. **Create** your first project entity
5. **Extract** facts to items.yaml at end of day
6. **Synthesize** summaries weekly

## References

- [PARA Method](https://fortelabs.com/blog/para/) by Tiago Forte
- `para-memory-files` skill: Full YAML schema and memory decay rules
- `templates/para-memory/`: Template structure
- `scripts/paperclip/para-helpers.sh`: Helper library
- `scripts/paperclip/init-para-memory.sh`: Initialization script
