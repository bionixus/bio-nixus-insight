#!/usr/bin/env bash
set -euo pipefail

# Workspace State Snapshot Creator
# Creates structured snapshots for agent heartbeat context preservation
# Related: BIO-612, docs/ops/workspace-state-snapshots.md

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# Default values
ISSUE_ID="${PAPERCLIP_TASK_ID:-}"
AGENT_ID="${PAPERCLIP_AGENT_ID:-}"
RUN_ID="${PAPERCLIP_RUN_ID:-}"
SNAPSHOT_FILE=""
AUTO_MODE=false
AGENT_NAME_KEY=""

usage() {
  cat <<EOF
Usage: $0 [OPTIONS]

Create a workspace state snapshot for agent context preservation.

OPTIONS:
  --issue-id ID       Issue ID (default: \$PAPERCLIP_TASK_ID)
  --agent-id ID       Agent ID (default: \$PAPERCLIP_AGENT_ID)
  --agent-name KEY    Agent name key (default: derived from API)
  --run-id ID         Run ID (default: \$PAPERCLIP_RUN_ID)
  --file PATH         Read snapshot JSON from file (default: stdin)
  --auto              Auto-generate minimal snapshot from git/filesystem
  -h, --help          Show this help message

ENVIRONMENT:
  PAPERCLIP_TASK_ID      Issue ID
  PAPERCLIP_AGENT_ID     Agent ID
  PAPERCLIP_RUN_ID       Run ID
  PAPERCLIP_API_URL      API base URL
  PAPERCLIP_API_KEY      API authentication token

EXAMPLES:
  # Create from JSON on stdin
  echo '{"context":{"summary":"work done"}}' | $0

  # Create from file
  $0 --file snapshot.json

  # Auto-generate minimal snapshot
  $0 --auto

EOF
  exit 1
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --issue-id)
      ISSUE_ID="$2"
      shift 2
      ;;
    --agent-id)
      AGENT_ID="$2"
      shift 2
      ;;
    --agent-name)
      AGENT_NAME_KEY="$2"
      shift 2
      ;;
    --run-id)
      RUN_ID="$2"
      shift 2
      ;;
    --file)
      SNAPSHOT_FILE="$2"
      shift 2
      ;;
    --auto)
      AUTO_MODE=true
      shift
      ;;
    -h|--help)
      usage
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage
      ;;
  esac
done

# Validation
if [[ -z "$ISSUE_ID" ]]; then
  echo "Error: --issue-id required or set PAPERCLIP_TASK_ID" >&2
  exit 1
fi

if [[ -z "$AGENT_ID" ]] && [[ "$AUTO_MODE" != true ]]; then
  echo "Error: --agent-id required or set PAPERCLIP_AGENT_ID" >&2
  exit 1
fi

# Derive agent name key if not provided
if [[ -z "$AGENT_NAME_KEY" ]] && [[ -n "${PAPERCLIP_API_URL:-}" ]]; then
  AGENT_NAME_KEY=$(curl -sf -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    "$PAPERCLIP_API_URL/api/agents/me" | jq -r '.nameKey // empty') || true
fi

if [[ -z "$AGENT_NAME_KEY" ]]; then
  AGENT_NAME_KEY="unknown"
fi

# Fetch issue identifier if we have API access
ISSUE_IDENTIFIER="$ISSUE_ID"
if [[ -n "${PAPERCLIP_API_URL:-}" ]] && [[ -n "${PAPERCLIP_API_KEY:-}" ]]; then
  ISSUE_IDENTIFIER=$(curl -sf -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    "$PAPERCLIP_API_URL/api/issues/$ISSUE_ID" | jq -r '.identifier // .id') || ISSUE_IDENTIFIER="$ISSUE_ID"
fi

# Read snapshot data
if [[ "$AUTO_MODE" = true ]]; then
  # Auto-generate minimal snapshot from git/filesystem
  SNAPSHOT_DATA=$(cat <<EOF
{
  "version": "1.0",
  "issueId": "$ISSUE_ID",
  "issueIdentifier": "$ISSUE_IDENTIFIER",
  "agentId": "$AGENT_ID",
  "agentNameKey": "$AGENT_NAME_KEY",
  "runId": "$RUN_ID",
  "createdAt": "$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")",
  "heartbeatNumber": 1,
  "context": {
    "summary": "Auto-generated snapshot",
    "currentPhase": "unknown",
    "lastDecision": "N/A",
    "criticalContext": []
  },
  "filesActivity": {
    "read": [],
    "modified": [],
    "created": []
  },
  "commandsExecuted": [],
  "decisions": [],
  "remainingWork": [],
  "nextAction": {
    "recommended": "Review issue context and continue work",
    "prerequisite": "None",
    "estimatedEffort": "unknown"
  },
  "blockers": [],
  "metadata": {
    "snapshotSize": 0,
    "compressionType": "none",
    "checksum": ""
  }
}
EOF
)
elif [[ -n "$SNAPSHOT_FILE" ]]; then
  SNAPSHOT_DATA=$(cat "$SNAPSHOT_FILE")
else
  SNAPSHOT_DATA=$(cat)
fi

# Validate JSON
if ! echo "$SNAPSHOT_DATA" | jq empty 2>/dev/null; then
  echo "Error: Invalid JSON snapshot data" >&2
  exit 1
fi

# Merge system metadata
SNAPSHOT_DATA=$(echo "$SNAPSHOT_DATA" | jq \
  --arg issueId "$ISSUE_ID" \
  --arg issueIdentifier "$ISSUE_IDENTIFIER" \
  --arg agentId "$AGENT_ID" \
  --arg agentNameKey "$AGENT_NAME_KEY" \
  --arg runId "$RUN_ID" \
  --arg createdAt "$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")" \
  '. + {
    version: "1.0",
    issueId: $issueId,
    issueIdentifier: $issueIdentifier,
    agentId: $agentId,
    agentNameKey: $agentNameKey,
    runId: $runId,
    createdAt: $createdAt
  }')

# Create snapshot directory
SNAPSHOT_DIR="$PROJECT_ROOT/.paperclip/agents/$AGENT_NAME_KEY/snapshots/$ISSUE_IDENTIFIER"
mkdir -p "$SNAPSHOT_DIR"

# Generate filename
TIMESTAMP=$(date -u +"%Y-%m-%dT%H-%M-%S")
SNAPSHOT_PATH="$SNAPSHOT_DIR/${TIMESTAMP}-${RUN_ID:0:8}.json"

# Calculate metadata
SNAPSHOT_SIZE=$(echo "$SNAPSHOT_DATA" | wc -c | tr -d ' ')
CHECKSUM=$(echo "$SNAPSHOT_DATA" | shasum -a 256 | cut -d' ' -f1)

# Add metadata
SNAPSHOT_DATA=$(echo "$SNAPSHOT_DATA" | jq \
  --argjson size "$SNAPSHOT_SIZE" \
  --arg checksum "sha256-$CHECKSUM" \
  '.metadata.snapshotSize = $size | .metadata.checksum = $checksum')

# Write snapshot
echo "$SNAPSHOT_DATA" | jq '.' > "$SNAPSHOT_PATH"

# Update latest symlink
ln -sf "$(basename "$SNAPSHOT_PATH")" "$SNAPSHOT_DIR/latest.json"

# Prune old snapshots (keep last 10)
cd "$SNAPSHOT_DIR"
ls -1t *.json 2>/dev/null | grep -v latest.json | tail -n +11 | while read -r old_snapshot; do
  # Archive old snapshots
  ARCHIVE_DIR="$SNAPSHOT_DIR/archive"
  mkdir -p "$ARCHIVE_DIR"
  gzip -c "$old_snapshot" > "$ARCHIVE_DIR/${old_snapshot}.gz"
  rm "$old_snapshot"
done

echo "Snapshot created: $SNAPSHOT_PATH" >&2
echo "$SNAPSHOT_PATH"
