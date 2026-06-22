# Agent Integration Guide: Workspace State Snapshots

**Related:** [BIO-612](/BIO/issues/BIO-612) • [Design Doc](./workspace-state-snapshots.md)

## Quick Start

Workspace state snapshots preserve your context across heartbeat boundaries. Use them to avoid re-reading entire issue threads and to maintain work continuity.

## Integration Points

### 1. Heartbeat Start: Load Snapshot

**When:** First action after checkout  
**Purpose:** Resume from last known state

```bash
# Load latest snapshot
if ./scripts/paperclip/load-snapshot.sh --format brief 2>/dev/null; then
  echo "📸 Resuming from snapshot"
  ./scripts/paperclip/load-snapshot.sh --format summary
else
  echo "🆕 Cold start - no snapshot found"
fi
```

**Integration code:**

```bash
# At the start of your heartbeat, after checkout
SNAPSHOT_PATH=$(./scripts/paperclip/load-snapshot.sh 2>/dev/null || echo "")

if [[ -n "$SNAPSHOT_PATH" ]]; then
  # Snapshot exists - hot resume
  SNAPSHOT_SUMMARY=$(./scripts/paperclip/load-snapshot.sh --format summary)
  
  echo "=== Resuming from snapshot ===" >&2
  echo "$SNAPSHOT_SUMMARY" >&2
  echo "==============================" >&2
  
  # Extract key context fields
  LAST_DECISION=$(echo "$SNAPSHOT_PATH" | jq -r '.context.lastDecision')
  NEXT_ACTION=$(echo "$SNAPSHOT_PATH" | jq -r '.nextAction.recommended')
  REMAINING_WORK=$(echo "$SNAPSHOT_PATH" | jq -r '.remainingWork | length')
  
  # Decision point: how much thread context to load
  if [[ $(echo "$SNAPSHOT_PATH" | jq '.heartbeatNumber') -lt 3 ]]; then
    # Early heartbeats: read thread + snapshot for full context
    echo "Early heartbeat - loading thread + snapshot" >&2
    # ... fetch issue comments ...
  else
    # Later heartbeats: trust snapshot, skip thread unless needed
    echo "Hot resume from snapshot - skipping thread" >&2
  fi
else
  # No snapshot - cold start
  echo "=== Cold start - no snapshot found ===" >&2
  # ... normal heartbeat context loading ...
fi
```

### 2. During Heartbeat: Track Activity

**When:** Throughout the heartbeat  
**Purpose:** Capture work for snapshot creation

Keep a running log of:
- **Files read/modified/created** with purpose
- **Commands executed** with outcomes
- **Decisions made** with rationale
- **Remaining work** items
- **Blockers** encountered

**Simple tracking pattern:**

```bash
# Initialize tracking at heartbeat start
FILES_READ=()
FILES_MODIFIED=()
FILES_CREATED=()
COMMANDS_EXECUTED=()
DECISIONS_MADE=()

# Track file reads
track_file_read() {
  local path="$1"
  local purpose="$2"
  FILES_READ+=("{\"path\":\"$path\",\"timestamp\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"purpose\":\"$purpose\"}")
}

# Track file modifications
track_file_modified() {
  local path="$1"
  local change="$2"
  FILES_MODIFIED+=("{\"path\":\"$path\",\"timestamp\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"change\":\"$change\"}")
}

# Track decisions
track_decision() {
  local decision="$1"
  local rationale="$2"
  DECISIONS_MADE+=("{\"decision\":\"$decision\",\"rationale\":\"$rationale\",\"timestamp\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}")
}

# Usage examples:
track_file_read "src/server.ts" "understand Express setup"
track_file_modified "src/server.ts" "added /health endpoint"
track_decision "Use Express middleware for health checks" "more idiomatic than raw http"
```

### 3. Heartbeat End: Create Snapshot

**When:** Before final status update  
**Purpose:** Save context for next heartbeat

```bash
# Build snapshot JSON
cat > /tmp/snapshot-$$.json <<EOF
{
  "context": {
    "summary": "One-line summary of work done this heartbeat",
    "currentPhase": "implementation",
    "lastDecision": "Most recent decision made",
    "criticalContext": [
      "Critical fact 1",
      "Critical fact 2"
    ]
  },
  "filesActivity": {
    "read": [$(IFS=,; echo "${FILES_READ[*]}")],
    "modified": [$(IFS=,; echo "${FILES_MODIFIED[*]}")],
    "created": [$(IFS=,; echo "${FILES_CREATED[*]}")
    ]
  },
  "commandsExecuted": [$(IFS=,; echo "${COMMANDS_EXECUTED[*]}")],
  "decisions": [$(IFS=,; echo "${DECISIONS_MADE[*]}")],
  "remainingWork": [
    {"item": "Task 1", "priority": "high", "estimated": "small"},
    {"item": "Task 2", "priority": "medium", "estimated": "medium"}
  ],
  "nextAction": {
    "recommended": "Specific next action for next heartbeat",
    "prerequisite": "Any dependency or blocker",
    "estimatedEffort": "small"
  },
  "blockers": [],
  "heartbeatNumber": $((HEARTBEAT_NUMBER + 1))
}
EOF

# Create snapshot
./scripts/paperclip/create-snapshot.sh --file /tmp/snapshot-$$.json
rm /tmp/snapshot-$$.json
```

## Agent-Specific Patterns

### CEO: Coordination & Delegation

**Key snapshot fields:**
- `context.criticalContext`: Board approval gates, cross-team blockers
- `decisions`: Why delegated to X agent, why not Y agent
- `remainingWork`: Follow-up approvals, coordination tasks

**Example:**

```json
{
  "context": {
    "summary": "Daily coordination - flagged budget approval blocker",
    "currentPhase": "review",
    "lastDecision": "Prioritized BIO-259 budget approval as critical blocker",
    "criticalContext": [
      "Budget approval blocks $700/mo operational initiatives",
      "Credentials gate (BIO-84) blocks entire GEO pipeline"
    ]
  },
  "nextAction": {
    "recommended": "Routine complete - next execution tomorrow 09:00 UTC",
    "prerequisite": "None",
    "estimatedEffort": "automated"
  }
}
```

### Coder/Engineer: Implementation Work

**Key snapshot fields:**
- `filesActivity`: Which files touched, why
- `commandsExecuted`: Test runs, build outcomes
- `decisions`: Technical choices (library X vs Y, pattern A vs B)
- `remainingWork`: Concrete implementation tasks

**Example:**

```json
{
  "context": {
    "summary": "Implemented /health endpoint with MCP status check",
    "currentPhase": "implementation",
    "lastDecision": "Health endpoint always returns 200, even if MCP down",
    "criticalContext": [
      "Hermes needs to know server is alive, not MCP health",
      "Response format must match Hermes expectations"
    ]
  },
  "filesActivity": {
    "modified": [
      {"path": "server/src/server.ts", "change": "added /health endpoint"}
    ],
    "created": [
      {"path": "server/src/middleware/health.ts", "purpose": "health check logic"}
    ]
  },
  "remainingWork": [
    {"item": "Add tests for /health endpoint", "priority": "high", "estimated": "small"},
    {"item": "Update Hermes config to use new endpoint", "priority": "medium", "estimated": "small"}
  ],
  "nextAction": {
    "recommended": "Write vitest tests for /health endpoint",
    "prerequisite": "None",
    "estimatedEffort": "small"
  }
}
```

### Manager: Planning & Oversight

**Key snapshot fields:**
- `context.criticalContext`: Team dependencies, delivery gates
- `decisions`: Assignment rationale, priority choices
- `remainingWork`: Subtask creation, review items

## Recovery Scenarios

### Scenario 1: Adapter Failure

**Situation:** Previous run failed with `adapter_failed`

**Recovery:**

1. Load snapshot
2. Check `commandsExecuted` for incomplete operations
3. Verify any partial file changes
4. Add note to snapshot: `"recovered_from": "adapter_failed"`
5. Resume from last completed action

### Scenario 2: Multi-Day Gap

**Situation:** Issue hasn't been touched in 3+ days

**Recovery:**

1. Load snapshot for high-level summary
2. **Always read recent comments** — snapshot may be stale
3. Reconcile snapshot with new thread context
4. Update `criticalContext` if priorities changed

### Scenario 3: Agent Handoff

**Situation:** Issue reassigned from Agent A to Agent B

**Recovery:**

1. Agent B loads Agent A's snapshot (use `--agent` flag)
2. Read snapshot summary to understand A's work
3. Review `decisions` and `remainingWork`
4. Continue from `nextAction.recommended`
5. Create new snapshot under Agent B's name

```bash
# Agent B loading Agent A's snapshot
./scripts/paperclip/load-snapshot.sh --issue-id BIO-612 --agent cto --format summary
```

## Best Practices

### DO:

✅ **Create snapshot at every heartbeat end** — even if work seems simple  
✅ **Keep `context.summary` concise** — one line, actionable  
✅ **Record decision rationale** — future you will thank you  
✅ **Update `remainingWork` honestly** — don't hide complexity  
✅ **Set clear `nextAction.recommended`** — make resumption easy  
✅ **Use snapshots to skip thread reads** — after heartbeat 3+

### DON'T:

❌ **Don't copy-paste entire file contents** — just note what changed and why  
❌ **Don't include sensitive data** — snapshots are in git  
❌ **Don't assume snapshot is always current** — verify on multi-day gaps  
❌ **Don't create snapshot without `nextAction`** — leave breadcrumbs  
❌ **Don't skip snapshot creation** — "it's just a small change" compounds

## Snapshot Hygiene

**When to clean up:**

- Issue reaches `done` or `cancelled`: Archive snapshots after 7 days
- Agent renamed: Migrate snapshots to new agent name
- Issue identifier changed: No migration needed (stored by ID)

**Manual cleanup:**

```bash
# List all snapshots for an issue
ls -lh .paperclip/agents/*/snapshots/BIO-612/

# Archive old snapshots
./scripts/paperclip/create-snapshot.sh --archive-old BIO-612

# Clean up archived snapshots older than 30 days
find .paperclip/agents/*/snapshots/*/archive/ -name "*.json.gz" -mtime +30 -delete
```

## Troubleshooting

### No snapshot found

**Symptom:** `./scripts/paperclip/load-snapshot.sh` returns exit code 1

**Causes:**
- First heartbeat on issue (expected)
- Wrong agent name (use `--agent` flag)
- Wrong issue identifier

**Solution:**
```bash
# Check what's actually stored
ls -la .paperclip/agents/

# Try loading with explicit agent
./scripts/paperclip/load-snapshot.sh --issue-id BIO-612 --agent ceo
```

### Invalid JSON in snapshot

**Symptom:** `jq` parse error when loading

**Causes:**
- Snapshot creation interrupted
- Manual edit broke JSON

**Solution:**
```bash
# Validate snapshot JSON
jq empty < .paperclip/agents/ceo/snapshots/BIO-612/latest.json

# If invalid, use previous snapshot
cd .paperclip/agents/ceo/snapshots/BIO-612/
ls -lt *.json | sed -n 2p | awk '{print $9}' | xargs -I {} ln -sf {} latest.json
```

### Snapshot too large

**Symptom:** Snapshot file > 100KB

**Causes:**
- Including full file contents in `filesActivity`
- Too much command output in `commandsExecuted`

**Solution:**
- Summarize changes, don't include full diffs
- Keep `keyOutput` to 1-2 lines max
- Use external files for large data, reference path in snapshot

## See Also

- [Design Doc: Workspace State Snapshots](./workspace-state-snapshots.md)
- [Paperclip Heartbeat Procedure](../../skills/paperclip/SKILL.md#the-heartbeat-procedure)
- [Issue Workspaces](../../skills/paperclip/references/issue-workspaces.md)

---

**Last Updated:** 2026-06-22  
**Status:** Active
