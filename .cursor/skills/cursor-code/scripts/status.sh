#!/usr/bin/env bash
# skills/local/cursor-code/scripts/status.sh
# Check a Cursor cloud agent's status by id.  Usage: status.sh <AGENT_ID>
set -euo pipefail

AGENT_ID="${1:?agent id required (e.g. bc_abc123)}"
: "${CURSOR_API_KEY:?Set CURSOR_API_KEY (Cursor Dashboard -> API Keys)}"

curl -sS --fail-with-body \
  --url "https://api.cursor.com/v0/agents/${AGENT_ID}" \
  --header "Authorization: Bearer ${CURSOR_API_KEY}"
