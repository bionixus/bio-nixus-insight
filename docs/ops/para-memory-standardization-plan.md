# PARA Memory Standardization Plan

## Current State Analysis

### What Exists
- ✅ `para-memory-files` skill defines PARA concept and structure
- ✅ CEO agent has partial memory structure in `.paperclip/agents/CEO/memory/daily/`
- ✅ Project-level `memory/` directory with one daily note
- ✅ HermesEngineer references `para-memory-files` skill

### What's Missing
- ❌ No full PARA directory structure (`life/projects/`, `life/areas/`, etc.) anywhere
- ❌ No initialization scripts for new agents
- ❌ No standardized helper library for PARA operations
- ❌ Most agents (14 out of 15) don't have memory structures
- ❌ No agent onboarding documentation for PARA

## Implementation Plan

### 1. Create PARA Directory Template Structure

Location: `templates/para-memory/`

Structure:
```
templates/para-memory/
├── life/
│   ├── projects/
│   │   └── .gitkeep
│   ├── areas/
│   │   ├── people/
│   │   │   └── .gitkeep
│   │   └── companies/
│   │       └── .gitkeep
│   ├── resources/
│   │   └── .gitkeep
│   ├── archives/
│   │   └── .gitkeep
│   └── index.md
├── memory/
│   └── .gitkeep
├── MEMORY.md (tacit knowledge template)
└── README.md (quick start guide)
```

### 2. Create Initialization Script

Location: `scripts/paperclip/init-para-memory.sh`

Features:
- Takes agent name/ID as input
- Creates PARA structure in `.paperclip/agents/{agent}/`
- Initializes templates (summary.md, items.yaml)
- Sets up daily notes directory
- Creates MEMORY.md with agent-specific context

### 3. Create Helper Library

Location: `scripts/paperclip/para-helpers.sh`

Functions:
- `para_create_entity()` - Create new entity (project/area/resource)
- `para_add_fact()` - Add fact to items.yaml
- `para_update_summary()` - Update summary.md from items.yaml
- `para_archive_entity()` - Move entity to archives
- `para_daily_note()` - Create/append to daily note
- `para_recall()` - Search memory (wrapper for qmd)

### 4. Document PARA Patterns

Location: `docs/ops/para-memory-patterns.md`

Content:
- When to create entities vs daily notes
- Entity lifecycle (project → archive)
- Fact atomicity guidelines
- Summary synthesis examples
- Cross-agent memory sharing patterns

### 5. Update Agent Templates

Location: `bionixus/agents/AGENT_TEMPLATE.md`

Add:
- PARA skill reference
- Memory initialization step
- Daily note habits
- Entity management guidelines

### 6. Add PARA to Agent Bootstrap

Update agent creation workflow to:
- Run `init-para-memory.sh` during agent setup
- Add `para-memory-files` skill by default
- Include PARA section in AGENTS.md

## Acceptance Criteria (BIO-610)

- [x] Audit existing agent instruction files for PARA references
  - ✅ Only HermesEngineer and para-memory-files skill reference PARA
  - ✅ CEO has partial memory structure
  - ✅ 14 agents have no memory structure
  
- [x] Create a PARA template/helper library agents can import
  - [x] Directory template in `templates/para-memory/`
  - [x] Helper library in `scripts/paperclip/para-helpers.sh`
  - [x] Init script in `scripts/paperclip/init-para-memory.sh`
  
- [x] Document PARA patterns in agent onboarding materials
  - [x] Create `docs/ops/para-memory-patterns.md`
  - [x] Create `templates/para-memory/README.md` quick start
  - [x] Update agent template with PARA section
  
- [x] Add PARA directory initialization to agent bootstrap
  - [x] Create init script
  - [x] Document bootstrap process
  - [x] Add to agent creation workflow

## Implementation Sequence

1. ✅ Create this plan document
2. ✅ Create PARA directory template structure
3. ✅ Create helper library and init script
4. ✅ Write PARA patterns documentation
5. ✅ Update agent template
6. ✅ Test with one non-CEO agent
7. ✅ Document bootstrap integration
8. ✅ Mark BIO-610 complete

## Notes

- CEO agent already has partial structure - preserve it during rollout
- Consider whether PARA should be per-agent (`.paperclip/agents/{agent}/`) or shared (project-level)
- Current implementation suggests per-agent is the pattern
- Helper library should work with both locations
