#!/bin/bash
# BioNixus Success Rate Monitor
# Fetches daily run statistics and calculates success rate

set -euo pipefail

# Configuration
API_URL="${PAPERCLIP_API_URL}"
API_KEY="${PAPERCLIP_API_KEY}"
COMPANY_ID="${PAPERCLIP_COMPANY_ID}"
TARGET_RATE=80

# Fetch dashboard data
DASHBOARD=$(curl -s -H "Authorization: Bearer $API_KEY" \
  "$API_URL/api/companies/$COMPANY_ID/dashboard")

# Parse run activity
echo "# BioNixus Run Success Rate Report"
echo "Generated: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""
echo "## Target: ${TARGET_RATE}% success rate"
echo ""

# Calculate current metrics
TOTAL_SUCCEEDED=$(echo "$DASHBOARD" | jq '[.runActivity[] | select(.total > 0) | .succeeded] | add // 0')
TOTAL_FAILED=$(echo "$DASHBOARD" | jq '[.runActivity[] | select(.total > 0) | .failed] | add // 0')
TOTAL_OTHER=$(echo "$DASHBOARD" | jq '[.runActivity[] | select(.total > 0) | .other] | add // 0')
TOTAL_RUNS=$((TOTAL_SUCCEEDED + TOTAL_FAILED + TOTAL_OTHER))

if [ "$((TOTAL_SUCCEEDED + TOTAL_FAILED))" -gt 0 ]; then
  SUCCESS_RATE=$(echo "scale=1; ($TOTAL_SUCCEEDED * 100) / ($TOTAL_SUCCEEDED + $TOTAL_FAILED)" | bc)
else
  SUCCESS_RATE=0
fi

echo "## Current Performance (Last 14 Days)"
echo ""
echo "- **Success Rate:** ${SUCCESS_RATE}%"
echo "- **Total Runs:** $TOTAL_RUNS"
echo "- **Succeeded:** $TOTAL_SUCCEEDED"
echo "- **Failed:** $TOTAL_FAILED"
echo "- **Other:** $TOTAL_OTHER"
echo "- **Gap to Target:** $(echo "$TARGET_RATE - $SUCCESS_RATE" | bc) percentage points"
echo ""

# Daily breakdown
echo "## Daily Breakdown"
echo ""
echo "| Date | Succeeded | Failed | Other | Total | Success Rate | Status |"
echo "|------|-----------|--------|-------|-------|--------------|--------|"

echo "$DASHBOARD" | jq -r '.runActivity[] | select(.total > 0) | 
  "\(.date)|\(.succeeded)|\(.failed)|\(.other)|\(.total)|" + 
  (if (.succeeded + .failed) > 0 then 
    (((.succeeded * 100) / (.succeeded + .failed)) | tostring) 
  else "0" end)' | \
while IFS='|' read -r date succeeded failed other total rate; do
  rate_int=${rate%.*}
  if [ "$rate_int" -ge 80 ]; then
    status="✅ Above target"
  else
    status="❌ Below target"
  fi
  printf "| %s | %3d | %3d | %3d | %3d | %5.1f%% | %s |\n" \
    "$date" "$succeeded" "$failed" "$other" "$total" "$rate" "$status"
done

echo ""

# Recent trend (last 3 days)
RECENT_DATES=$(echo "$DASHBOARD" | jq -r '.runActivity | reverse | .[0:3] | reverse | .[] | select(.total > 0) | .date' | tr '\n' ' ')
echo "## Recent Trend (Last 3 Days with Activity)"
echo ""
echo "Recent dates: $RECENT_DATES"

RECENT_SUCCEEDED=$(echo "$DASHBOARD" | jq '[.runActivity | reverse | .[0:3] | .[] | select(.total > 0) | .succeeded] | add // 0')
RECENT_FAILED=$(echo "$DASHBOARD" | jq '[.runActivity | reverse | .[0:3] | .[] | select(.total > 0) | .failed] | add // 0')

if [ "$((RECENT_SUCCEEDED + RECENT_FAILED))" -gt 0 ]; then
  RECENT_RATE=$(echo "scale=1; ($RECENT_SUCCEEDED * 100) / ($RECENT_SUCCEEDED + $RECENT_FAILED)" | bc)
  echo "- **Recent Success Rate:** ${RECENT_RATE}%"
  
  TREND_DELTA=$(echo "scale=1; $RECENT_RATE - $SUCCESS_RATE" | bc)
  if [ "$(echo "$TREND_DELTA >= 0" | bc)" -eq 1 ]; then
    echo "- **Trend:** 📈 Improving (+${TREND_DELTA}%)"
  else
    echo "- **Trend:** 📉 Declining (${TREND_DELTA}%)"
  fi
fi

echo ""
echo "## Action Items"
echo ""

if [ "$(echo "$SUCCESS_RATE < $TARGET_RATE" | bc)" -eq 1 ]; then
  echo "⚠️  **Action Required:** Success rate is below ${TARGET_RATE}% target"
  echo ""
  echo "Priority improvements needed:"
  echo "1. Investigate 'other' outcomes ($TOTAL_OTHER runs, $(echo "scale=1; ($TOTAL_OTHER * 100) / $TOTAL_RUNS" | bc)%)"
  echo "2. Analyze failure patterns in recent runs"
  echo "3. Review days with lowest performance"
else
  echo "✅ **Target Met:** Success rate is at or above ${TARGET_RATE}%"
fi
