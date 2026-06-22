#!/bin/bash
# Summarize detailed daily log into compressed format for memory optimization
# Usage: ./summarize-daily-log.sh [date] [agent-name]
# Example: ./summarize-daily-log.sh 2026-06-22 CEO
# Example: ./summarize-daily-log.sh 2026-06-22  (for project-level memory)

set -euo pipefail

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Parse arguments
DATE="${1:-$(date +%Y-%m-%d)}"
AGENT_NAME="${2:-}"

# Determine paths
if [ -n "$AGENT_NAME" ]; then
    MEMORY_ROOT=".paperclip/agents/${AGENT_NAME}"
else
    MEMORY_ROOT="."
fi

DAILY_LOG="${MEMORY_ROOT}/memory/daily/${DATE}.md"
SUMMARY_DIR="${MEMORY_ROOT}/memory/summaries"
SUMMARY_FILE="${SUMMARY_DIR}/${DATE}.md"

# Validate input file exists
if [ ! -f "$DAILY_LOG" ]; then
    echo "❌ Daily log not found: $DAILY_LOG"
    exit 1
fi

# Create summaries directory
mkdir -p "$SUMMARY_DIR"

echo -e "${BLUE}📊 Summarizing daily log${NC}"
echo "   Source: $DAILY_LOG"
echo "   Target: $SUMMARY_FILE"
echo ""

# Extract key information using grep/sed
echo -e "${BLUE}Extracting key information...${NC}"

# Extract completed issues (✅ or "done" or "complete")
COMPLETED=$(grep -E "(✅|[Dd]one|[Cc]omplete)" "$DAILY_LOG" | grep -oE "BIO-[0-9]+" | sort -u || echo "")

# Extract in-progress issues (⏳ or "in progress" or "in_progress")
IN_PROGRESS=$(grep -E "(⏳|in.progress|in_progress)" "$DAILY_LOG" | grep -oE "BIO-[0-9]+" | sort -u || echo "")

# Extract blocked issues (🚫 or "blocked" or "blocker")
BLOCKERS=$(grep -iE "(🚫|blocked|blocker)" "$DAILY_LOG" | grep -oE "BIO-[0-9]+" | sort -u || echo "")

# Extract decisions (lines with "decision" or "approved" or "decided")
DECISIONS=$(grep -iE "(decision|approved|decided|strategy)" "$DAILY_LOG" | head -5 || echo "")

# Count lines for sizing
LINE_COUNT=$(wc -l < "$DAILY_LOG")

# Generate summary file
cat > "$SUMMARY_FILE" << EOF
# Daily Summary — ${DATE}

## Completed
EOF

# Add completed issues
if [ -n "$COMPLETED" ]; then
    for issue in $COMPLETED; do
        # Extract relevant context line for this issue
        CONTEXT=$(grep -m1 "$issue" "$DAILY_LOG" | sed 's/^[[:space:]]*[-*✅⏳🚫]*//' | cut -c1-80 || echo "Issue $issue completed")
        echo "- ✅ $issue: $CONTEXT" >> "$SUMMARY_FILE"
    done
else
    echo "- No issues completed" >> "$SUMMARY_FILE"
fi

cat >> "$SUMMARY_FILE" << EOF

## In Progress
EOF

# Add in-progress issues
if [ -n "$IN_PROGRESS" ]; then
    for issue in $IN_PROGRESS; do
        CONTEXT=$(grep -m1 "$issue" "$DAILY_LOG" | sed 's/^[[:space:]]*[-*✅⏳🚫]*//' | cut -c1-80 || echo "Issue $issue in progress")
        echo "- ⏳ $issue: $CONTEXT" >> "$SUMMARY_FILE"
    done
else
    echo "- No issues in progress" >> "$SUMMARY_FILE"
fi

cat >> "$SUMMARY_FILE" << EOF

## Blockers Added
EOF

# Add blockers
if [ -n "$BLOCKERS" ]; then
    for issue in $BLOCKERS; do
        CONTEXT=$(grep -m1 "$issue" "$DAILY_LOG" | sed 's/^[[:space:]]*[-*✅⏳🚫]*//' | cut -c1-80 || echo "Issue $issue blocked")
        echo "- 🚫 $issue: $CONTEXT" >> "$SUMMARY_FILE"
    done
else
    echo "- No new blockers" >> "$SUMMARY_FILE"
fi

cat >> "$SUMMARY_FILE" << EOF

## Key Decisions
EOF

# Add decisions (first 3-5 lines containing decision keywords)
if [ -n "$DECISIONS" ]; then
    echo "$DECISIONS" | head -3 | while IFS= read -r line; do
        echo "- ${line:0:100}" >> "$SUMMARY_FILE"
    done
else
    echo "- No major decisions recorded" >> "$SUMMARY_FILE"
fi

cat >> "$SUMMARY_FILE" << EOF

## Source Log Stats
- Lines: $LINE_COUNT
- Issues referenced: $(grep -oE "BIO-[0-9]+" "$DAILY_LOG" | sort -u | wc -l)

---
*Summary extracted from detailed log at \`memory/daily/${DATE}.md\`. Load full log when deep context needed.*
EOF

# Calculate compression ratio
SUMMARY_LINES=$(wc -l < "$SUMMARY_FILE")
COMPRESSION_RATIO=$(echo "scale=1; $LINE_COUNT / $SUMMARY_LINES" | bc)

echo ""
echo -e "${GREEN}✅ Summary generated${NC}"
echo "   Original: $LINE_COUNT lines"
echo "   Summary:  $SUMMARY_LINES lines"
echo "   Compression: ${COMPRESSION_RATIO}x"
echo ""
echo -e "${YELLOW}💡 Token savings: ~$(echo "scale=0; $LINE_COUNT * 25 - $SUMMARY_LINES * 25" | bc) tokens${NC}"
