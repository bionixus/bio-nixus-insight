#!/usr/bin/env bash
set -euo pipefail

# Workspace State Snapshot Loader
# Retrieves latest snapshot for agent heartbeat context restoration
# Related: BIO-612, docs/ops/workspace-state-snapshots.md

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# Default values
ISSUE_ID="${PAPERCLIP_TASK_ID:-}"
AGENT_NAME_KEY=""
FORMAT="json"

usage() {
  cat <<EOF
Usage: $0 [OPTIONS]

Load the latest workspace state snapshot for an issue.

OPTIONS:
  --issue-id ID       Issue ID or identifier (default: \$PAPERCLIP_TASK_ID)
  --agent KEY         Agent name key (default: current agent from API)
  --format FORMAT     Output format: json, summary, brief (default: json)
  -h, --help          Show this help message

ENVIRONMENT:
  PAPERCLIP_TASK_ID      Issue ID
  PAPERCLIP_API_URL      API base URL
  PAPERCLIP_API_KEY      API authentication token

OUTPUT FORMATS:
  json      Full snapshot JSON
  summary   Human-readable summary
  brief     One-line status

EXIT CODES:
  0   Snapshot loaded successfully
  1   No snapshot found or error
  2   Invalid arguments

EXAMPLES:
  # Load latest snapshot for current issue
  $0

  # Load snapshot for specific issue and agent
  $0 --issue-id BIO-612 --agent ceo

  # Get brief summary
  $0 --format brief

EOF
  exit 2
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --issue-id)
      ISSUE_ID="$2"
      shift 2
      ;;
    --agent)
      AGENT_NAME_KEY="$2"
      shift 2
      ;;
    --format)
      FORMAT="$2"
      shift 2
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
  exit 2
fi

# Derive agent name key if not provided
if [[ -z "$AGENT_NAME_KEY" ]] && [[ -n "${PAPERCLIP_API_URL:-}" ]]; then
  AGENT_NAME_KEY=$(curl -sf -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    "$PAPERCLIP_API_URL/api/agents/me" | jq -r '.nameKey // empty') || true
fi

if [[ -z "$AGENT_NAME_KEY" ]]; then
  echo "Error: --agent required or set PAPERCLIP_API_URL for auto-detection" >&2
  exit 2
fi

# Normalize issue identifier (strip any prefix if it's a full UUID)
ISSUE_IDENTIFIER="$ISSUE_ID"

# Find snapshot directory
SNAPSHOT_DIR="$PROJECT_ROOT/.paperclip/agents/$AGENT_NAME_KEY/snapshots/$ISSUE_IDENTIFIER"

if [[ ! -d "$SNAPSHOT_DIR" ]]; then
  echo "No snapshots found for issue $ISSUE_IDENTIFIER (agent: $AGENT_NAME_KEY)" >&2
  exit 1
fi

# Check for latest.json symlink
LATEST_SNAPSHOT="$SNAPSHOT_DIR/latest.json"

if [[ ! -f "$LATEST_SNAPSHOT" ]] && [[ ! -L "$LATEST_SNAPSHOT" ]]; then
  # No symlink, find most recent snapshot by timestamp
  LATEST_SNAPSHOT=$(ls -1t "$SNAPSHOT_DIR"/*.json 2>/dev/null | grep -v latest.json | head -1 || true)
  
  if [[ -z "$LATEST_SNAPSHOT" ]]; then
    echo "No snapshots found in $SNAPSHOT_DIR" >&2
    exit 1
  fi
fi

# Load snapshot
SNAPSHOT_DATA=$(cat "$LATEST_SNAPSHOT")

# Validate JSON
if ! echo "$SNAPSHOT_DATA" | jq empty 2>/dev/null; then
  echo "Error: Invalid JSON in snapshot file" >&2
  exit 1
fi

# Output based on format
case $FORMAT in
  json)
    echo "$SNAPSHOT_DATA" | jq '.'
    ;;
  
  summary)
    echo "$SNAPSHOT_DATA" | jq -r '
      "=== Workspace Snapshot ===",
      "Issue: \(.issueIdentifier)",
      "Agent: \(.agentNameKey)",
      "Created: \(.createdAt)",
      "Heartbeat: \(.heartbeatNumber)",
      "",
      "== Context ==",
      "Summary: \(.context.summary)",
      "Phase: \(.context.currentPhase)",
      "Last Decision: \(.context.lastDecision)",
      "",
      "== Critical Context ==",
      (.context.criticalContext[] // "None"),
      "",
      "== Files Activity ==",
      "Read: \(.filesActivity.read | length)",
      "Modified: \(.filesActivity.modified | length)",
      "Created: \(.filesActivity.created | length)",
      "",
      "== Work Status ==",
      "Remaining: \(.remainingWork | length) items",
      "Blockers: \(.blockers | length)",
      "",
      "== Next Action ==",
      "\(.nextAction.recommended)",
      "Prerequisite: \(.nextAction.prerequisite)",
      "Effort: \(.nextAction.estimatedEffort)"
    '
    ;;
  
  brief)
    echo "$SNAPSHOT_DATA" | jq -r '
      "\(.issueIdentifier) (\(.agentNameKey), heartbeat \(.heartbeatNumber)): \(.context.summary)"
    '
    ;;
  
  *)
    echo "Error: Unknown format: $FORMAT" >&2
    exit 2
    ;;
esac
