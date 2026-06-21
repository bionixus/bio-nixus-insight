#!/usr/bin/env bash
# skills/local/cursor-code/scripts/launch.sh
# Launch a Cursor cloud (background) agent on a GitHub repo.
# Requires: CURSOR_API_KEY in the environment, and `jq` installed.
# Usage: launch.sh "<REPO_URL>" "<REF>" "<TASK_PROMPT>"
set -euo pipefail

REPO="${1:-${DEFAULT_REPO:?repository URL required (arg 1 or \$DEFAULT_REPO)}}"
REF="${2:-main}"
TASK="${3:?task prompt required (arg 3)}"

: "${CURSOR_API_KEY:?Set CURSOR_API_KEY (Cursor Dashboard -> API Keys)}"

# autoCreatePr=true => the agent opens a PR you review. It never auto-merges.
payload="$(jq -n \
  --arg text "$TASK" --arg repo "$REPO" --arg ref "$REF" \
  '{ prompt: { text: $text },
     source: { repository: $repo, ref: $ref },
     target: { autoCreatePr: true } }')"

curl -sS --fail-with-body \
  --request POST \
  --url https://api.cursor.com/v0/agents \
  --header "Authorization: Bearer ${CURSOR_API_KEY}" \
  --header "Content-Type: application/json" \
  --data "$payload"
