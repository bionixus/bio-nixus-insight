# Workspace State Snapshots - Quick Reference

**For:** All Paperclip agents  
**Purpose:** Context preservation across heartbeat boundaries

## TL;DR

```bash
# At heartbeat start
./scripts/paperclip/load-snapshot.sh --format summary

# At heartbeat end
cat > /tmp/snapshot.json <<'EOF'
{
  "context": {
    "summary": "What I did this heartbeat",
    "currentPhase": "implementation",
    "lastDecision": "Key decision made",
    "criticalContext": ["Don't forget this", "Important fact"]
  },
  "remainingWork": [
    {"item": "Task 1", "priority": "high", "estimated": "small"}
  ],
  "nextAction": {
    "recommended": "Next concrete action",
    "prerequisite": "None",
    "estimatedEffort": "small"
  },
  "heartbeatNumber": 1
}
EOF
./scripts/paperclip/create-snapshot.sh < /tmp/snapshot.json
```

## Why Use Snapshots?

- ⏱️ **Save time**: Skip re-reading entire issue threads
- 🧠 **Better memory**: Never forget key decisions or context
- 🔄 **Smooth handoffs**: New agents get your full context
- 💪 **Resilience**: Recover gracefully from failures

## Core Commands

```bash
# Load latest snapshot (summary format)
./scripts/paperclip/load-snapshot.sh --format summary

# Load brief one-liner
./scripts/paperclip/load-snapshot.sh --format brief

# Create snapshot from stdin
cat snapshot.json | ./scripts/paperclip/create-snapshot.sh

# Create minimal auto-snapshot
./scripts/paperclip/create-snapshot.sh --auto
```

## Minimal Snapshot Structure

```json
{
  "context": {
    "summary": "One-line summary",
    "currentPhase": "implementation | planning | review | blocked",
    "lastDecision": "Most recent key decision",
    "criticalContext": ["Key fact 1", "Key fact 2"]
  },
  "remainingWork": [
    {"item": "What's left", "priority": "high", "estimated": "small"}
  ],
  "nextAction": {
    "recommended": "Specific next action",
    "prerequisite": "Any blocker",
    "estimatedEffort": "small | medium | large"
  },
  "heartbeatNumber": 1
}
```

## Full Snapshot Structure

Add these optional fields for richer context:

```json
{
  "filesActivity": {
    "read": [{"path": "file.ts", "timestamp": "...", "purpose": "why"}],
    "modified": [{"path": "file.ts", "timestamp": "...", "change": "what"}],
    "created": [{"path": "file.ts", "timestamp": "...", "purpose": "why"}]
  },
  "commandsExecuted": [
    {"command": "npm test", "exitCode": 0, "timestamp": "...", "outcome": "passed", "keyOutput": "..."}
  ],
  "decisions": [
    {"decision": "Chose X", "rationale": "Because Y", "timestamp": "...", "alternatives": ["Option Z"]}
  ],
  "blockers": [
    {"description": "What's blocked", "type": "external", "unblockAction": "Who must act", "since": "..."}
  ]
}
```

## Integration Pattern

```bash
#!/usr/bin/env bash
# Heartbeat wrapper with snapshot support

ISSUE_ID="${PAPERCLIP_TASK_ID}"
HEARTBEAT_NUM=1

# 1. Load existing snapshot
if SNAPSHOT=$(./scripts/paperclip/load-snapshot.sh 2>/dev/null); then
  echo "📸 Resuming from snapshot"
  HEARTBEAT_NUM=$(($(echo "$SNAPSHOT" | jq '.heartbeatNumber') + 1))
  
  # Extract context
  NEXT_ACTION=$(echo "$SNAPSHOT" | jq -r '.nextAction.recommended')
  echo "Next action: $NEXT_ACTION"
else
  echo "🆕 Cold start"
fi

# 2. Do work
echo "Executing heartbeat $HEARTBEAT_NUM..."
# ... your work here ...

# 3. Create snapshot
cat <<EOF | ./scripts/paperclip/create-snapshot.sh
{
  "context": {
    "summary": "Work summary for heartbeat $HEARTBEAT_NUM",
    "currentPhase": "implementation",
    "lastDecision": "Key decision",
    "criticalContext": ["Important context"]
  },
  "remainingWork": [
    {"item": "Next task", "priority": "high", "estimated": "small"}
  ],
  "nextAction": {
    "recommended": "Concrete next action",
    "prerequisite": "None",
    "estimatedEffort": "small"
  },
  "heartbeatNumber": $HEARTBEAT_NUM
}
EOF

echo "✅ Snapshot created for heartbeat $HEARTBEAT_NUM"
```

## Common Patterns

### Pattern 1: Simple Progress Tracking

```json
{
  "context": {
    "summary": "Completed feature X, starting feature Y",
    "currentPhase": "implementation",
    "lastDecision": "Split feature Y into 2 subtasks",
    "criticalContext": ["Feature X deployed to staging"]
  },
  "remainingWork": [
    {"item": "Implement feature Y part 1", "priority": "high", "estimated": "medium"},
    {"item": "Implement feature Y part 2", "priority": "medium", "estimated": "small"}
  ],
  "nextAction": {
    "recommended": "Start feature Y part 1 implementation",
    "prerequisite": "None",
    "estimatedEffort": "medium"
  }
}
```

### Pattern 2: Blocked Work

```json
{
  "context": {
    "summary": "Waiting for board approval on approach X",
    "currentPhase": "blocked",
    "lastDecision": "Proposed approach X vs Y in issue comment",
    "criticalContext": ["Cannot proceed until board chooses approach"]
  },
  "remainingWork": [],
  "nextAction": {
    "recommended": "Wait for board approval",
    "prerequisite": "Board decision on approach",
    "estimatedEffort": "none"
  },
  "blockers": [
    {
      "description": "Need board approval for approach",
      "type": "approval",
      "unblockAction": "Board must comment with decision",
      "since": "2026-06-22T00:00:00Z"
    }
  ]
}
```

### Pattern 3: Agent Handoff

```json
{
  "context": {
    "summary": "Completed initial research, ready for implementation",
    "currentPhase": "planning",
    "lastDecision": "Chose approach X after evaluating 3 options",
    "criticalContext": [
      "Approach X is simpler but slower than Y",
      "Board approved approach X for MVP",
      "Implementation estimate: 2-3 heartbeats"
    ]
  },
  "remainingWork": [
    {"item": "Implement core logic", "priority": "high", "estimated": "large"},
    {"item": "Add tests", "priority": "high", "estimated": "medium"},
    {"item": "Update docs", "priority": "low", "estimated": "small"}
  ],
  "nextAction": {
    "recommended": "Assign to Coder agent for implementation",
    "prerequisite": "None - all planning complete",
    "estimatedEffort": "large"
  },
  "decisions": [
    {
      "decision": "Use approach X (simple, slower) over Y (complex, faster)",
      "rationale": "MVP needs reliability over performance, can optimize later",
      "alternatives": ["Approach Y: 2x faster but 3x code complexity"]
    }
  ]
}
```

## File Locations

```
.paperclip/agents/{agent}/snapshots/{issue}/
├── 2026-06-22T00-00-00-abc123.json  # Timestamped snapshots
├── 2026-06-22T00-10-00-def456.json
├── latest.json                       # Symlink to most recent
└── archive/                          # Compressed old snapshots
    └── 2026-06-21T00-00-00-xyz789.json.gz
```

## Retention

- ✅ Keep last **10 snapshots** per issue
- 📦 Archive older snapshots (gzip compressed)
- 🗑️ Clean archived snapshots after **30 days**

## Troubleshooting

### No snapshot found

```bash
# Check what exists
ls -la .paperclip/agents/

# Try explicit agent name
./scripts/paperclip/load-snapshot.sh --agent ceo
```

### Invalid JSON

```bash
# Validate
jq empty < .paperclip/agents/ceo/snapshots/BIO-612/latest.json

# Fallback to previous snapshot
cd .paperclip/agents/ceo/snapshots/BIO-612/
ls -lt *.json | sed -n 2p | awk '{print $9}' | xargs -I {} ln -sf {} latest.json
```

## Learn More

- [Design Doc](./workspace-state-snapshots.md) - Full technical design
- [Integration Guide](./agent-snapshot-integration.md) - Detailed agent integration
- [Paperclip Heartbeat](../../skills/paperclip/SKILL.md) - Core heartbeat procedure

---

**Quick Questions?**

- 💬 Ask in issue comments: [BIO-612](/BIO/issues/BIO-612)
- 📖 Read integration guide: `docs/ops/agent-snapshot-integration.md`
- 🔧 Scripts: `scripts/paperclip/{create,load}-snapshot.sh`
