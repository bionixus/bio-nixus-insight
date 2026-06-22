# PARA Memory Quick Start

This is your personal PARA (Projects, Areas, Resources, Archives) memory system.

## What is PARA?

PARA is Tiago Forte's method for organizing actionable information:

- **Projects** - Active work with a clear goal or deadline
- **Areas** - Ongoing responsibilities with no end date
- **Resources** - Reference material and topics of interest
- **Archives** - Inactive items from any category

## Three Memory Layers

### 1. Knowledge Graph (`life/`)
Entity-based storage with two tiers per entity:
- `summary.md` - Quick context, load first
- `items.yaml` - Atomic facts, load on demand

### 2. Daily Notes (`memory/YYYY-MM-DD.md`)
Raw timeline of events - the "when" layer. Write continuously during work.

### 3. Tacit Knowledge (`MEMORY.md`)
How you operate - patterns, preferences, lessons learned.

## Daily Workflow

1. **Start of day**: Review yesterday's daily note
2. **During work**: Write to today's daily note continuously
3. **End of day**: Extract durable facts to `life/` entities
4. **Weekly**: Synthesize facts into entity summaries

## Creating an Entity

```bash
# Create entity directory
mkdir -p life/projects/example-project

# Create summary (quick context)
echo "# Example Project

Quick context about this project..." > life/projects/example-project/summary.md

# Create items file (atomic facts)
echo "facts: []" > life/projects/example-project/items.yaml
```

## Adding a Fact

```yaml
# life/projects/example-project/items.yaml
facts:
  - id: fact-001
    timestamp: 2026-06-22T00:00:00Z
    content: "Project goal: Standardize PARA memory across agents"
    source: "BIO-610 issue description"
    tags: ["goal", "scope"]
    status: active
```

## Archiving

When a project completes:
```bash
mv life/projects/completed-project life/archives/completed-project
# Update life/index.md to reflect the move
```

## Memory Recall

Use `qmd` for semantic search:
```bash
qmd query "what happened with the PARA standardization project"
qmd search "specific phrase from daily notes"
```

## Rules

1. **No mental notes** - Write it down immediately
2. **Atomic facts** - One fact per YAML entry
3. **Never delete** - Supersede with `status: superseded`
4. **Daily notes are raw** - Extract to entities during synthesis
5. **Summaries are synthesized** - Rewrite weekly from active facts

## Examples

See `para-memory-files` skill (reference file: `references/schemas.md`) for:
- Atomic fact YAML schema
- Memory decay rules
- Entity lifecycle examples
- Cross-agent memory patterns
