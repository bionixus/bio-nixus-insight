# PARA Memory Bootstrap Integration

This document describes how to integrate PARA memory initialization into the agent bootstrap process.

## Quick Start for New Agents

When creating a new agent, initialize their PARA memory structure:

```bash
./scripts/paperclip/init-para-memory.sh <agent-name-or-id>
```

This creates the full PARA directory structure at `.paperclip/agents/<agent>/`:

```
.paperclip/agents/<agent>/
├── life/
│   ├── projects/          # Time-bound work with deadlines
│   ├── areas/             # Ongoing responsibilities
│   │   ├── people/        # People relationships
│   │   └── companies/     # Company/partner tracking
│   ├── resources/         # Reference material
│   └── archives/          # Completed projects
├── memory/                # Daily notes (raw timeline)
│   └── YYYY-MM-DD.md     # Today's note created automatically
├── MEMORY.md              # Tacit knowledge template
└── README.md              # Quick start guide
```

## Prerequisites

1. **Template directory exists**: `templates/para-memory/`
2. **Helper library exists**: `scripts/paperclip/para-helpers.sh`
3. **Agent has `para-memory-files` skill** in their AGENTS.md skills list

## Manual Bootstrap Steps

If you need to manually initialize PARA for an existing agent:

1. **Run the initialization script:**
   ```bash
   ./scripts/paperclip/init-para-memory.sh <agent-id>
   ```

2. **Add the `para-memory-files` skill** to the agent's AGENTS.md:
   ```yaml
   skills:
     - "paperclipai/paperclip/para-memory-files"
   ```

3. **Add PARA section to agent instructions** (see `bionixus/agents/AGENT_TEMPLATE.md`)

4. **Verify the structure:**
   ```bash
   ls -la .paperclip/agents/<agent-id>/life/
   ```

## Integration Points

### 1. Agent Creation Workflow

When a new agent is created (via UI, CLI, or programmatically):

```bash
# After agent is created in the system
AGENT_ID="<new-agent-id>"
AGENT_NAME="<new-agent-name>"

# Initialize PARA memory
./scripts/paperclip/init-para-memory.sh "$AGENT_ID"

# Ensure para-memory-files skill is added
# (This should be done in the agent creation template)
```

### 2. Agent AGENTS.md Template

The `bionixus/agents/AGENT_TEMPLATE.md` now includes:

- `para-memory-files` skill in the skills list
- "PARA Memory Management" section with:
  - Directory structure overview
  - Daily memory habits
  - Entity management guidelines
  - Cross-agent memory patterns
  - Maintenance routines

### 3. Existing Agent Migration

For existing agents without PARA memory:

```bash
# Dry-run to preview what will be created
./scripts/paperclip/init-para-memory.sh --dry-run <agent-id>

# Run for real
./scripts/paperclip/init-para-memory.sh <agent-id>

# Update the agent's AGENTS.md to add para-memory-files skill
# and PARA Memory Management section (copy from AGENT_TEMPLATE.md)
```

## Helper Library Usage

Once PARA is initialized, agents can use the helper functions:

```bash
# Source the library
source scripts/paperclip/para-helpers.sh

# Set PARA root (or use default current directory)
export PARA_ROOT=".paperclip/agents/<agent-id>"

# Create a new project
para_create_entity projects "my-project" "Brief description"

# Add facts
para_add_fact projects/my-project "Completed initial research"
para_add_fact projects/my-project "Identified key stakeholders"

# Update summary from facts
para_update_summary projects/my-project

# Add daily note
para_daily_note "Worked on BIO-610, created templates and scripts"

# Search memory
para_recall "typescript patterns"

# Archive completed project
para_archive_entity projects/my-project

# List entities
para_list projects

# View memory stats
para_stats
```

## Daily Workflow Integration

Agents should adopt these daily habits:

**Start of heartbeat:**
1. Create/append to today's daily note
2. Log: issue woken for, what you're about to do
3. Use `qmd` to recall relevant context

**During work:**
- Log decisions, blockers, outcomes in real-time
- Note reusable learnings

**End of heartbeat:**
- Update daily note with outcomes, next steps
- Extract durable patterns to entities or MEMORY.md

## Verification

After initialization, verify the agent's PARA memory is working:

```bash
# 1. Check structure exists
ls -la .paperclip/agents/<agent-id>/life/

# 2. Verify today's daily note was created
cat .paperclip/agents/<agent-id>/memory/$(date +%Y-%m-%d).md

# 3. Check MEMORY.md has agent-specific context
head -20 .paperclip/agents/<agent-id>/MEMORY.md

# 4. Test entity creation
bash -c 'source scripts/paperclip/para-helpers.sh && \
  PARA_ROOT=".paperclip/agents/<agent-id>" \
  para_create_entity projects "test-project" && \
  para_list projects'
```

## Script Options Reference

The `init-para-memory.sh` script supports:

```bash
# Standard initialization
./scripts/paperclip/init-para-memory.sh <agent-name-or-id>

# Force overwrite existing PARA structure
./scripts/paperclip/init-para-memory.sh --force <agent-id>

# Custom location (not under .paperclip/agents/)
./scripts/paperclip/init-para-memory.sh --location /path/to/memory <agent-id>

# Shared project-level PARA (not per-agent)
./scripts/paperclip/init-para-memory.sh --shared company-memory

# Dry-run (preview without creating)
./scripts/paperclip/init-para-memory.sh --dry-run <agent-id>
```

## Troubleshooting

### "PARA root not initialized"

If you see this error when using helper functions:

```bash
# Ensure PARA_ROOT points to the right location
export PARA_ROOT=".paperclip/agents/<agent-id>"

# Or re-run initialization
./scripts/paperclip/init-para-memory.sh <agent-id>
```

### "Agent information not found in API"

The init script tries to fetch agent details from the Paperclip API. If it fails:

- The script continues with a generic MEMORY.md template
- You can manually edit `.paperclip/agents/<agent-id>/MEMORY.md` afterward

### Helper functions not found

If para_* functions don't work:

```bash
# Ensure you source the library with bash (not zsh)
bash -c 'source scripts/paperclip/para-helpers.sh && para_stats'
```

### Directory structure mismatch

The template uses plural forms: `projects`, `areas`, `resources`, `archives`.
When using helper functions, use the plural form:

```bash
# Correct
para_create_entity projects "my-project"

# Wrong (creates life/project/ instead of life/projects/)
para_create_entity project "my-project"
```

## Next Steps

1. **Add PARA init to agent creation UI/CLI** — integrate the init script into the workflow that creates new agents
2. **Migrate existing agents** — run init script for all 15 agents, update their AGENTS.md files
3. **Add health checks** — create a script that validates all agents have proper PARA structure
4. **Document cross-agent memory patterns** — add examples of how agents should share context

## References

- **PARA patterns**: `docs/ops/para-memory-patterns.md`
- **Agent template**: `bionixus/agents/AGENT_TEMPLATE.md`
- **Templates**: `templates/para-memory/`
- **Helper library**: `scripts/paperclip/para-helpers.sh`
- **Init script**: `scripts/paperclip/init-para-memory.sh`
- **Original plan**: `docs/ops/para-memory-standardization-plan.md`
