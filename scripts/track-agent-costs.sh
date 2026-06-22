#!/bin/bash
# scripts/track-agent-costs.sh
# Daily agent cost tracking script for BioNixus budget monitoring
# Owner: CTO (when unpaused)
# Usage: Run daily via cron or manual trigger
# Related: BIO-471 budget tracking framework

set -euo pipefail

# Configuration
API_URL="${PAPERCLIP_API_URL:-http://127.0.0.1:3100}"
API_KEY="${PAPERCLIP_API_KEY:-}"
STATE_DIR="state"
TODAY=$(date +%Y-%m-%d)
MONTH=$(date +%Y-%m)
TRACKING_FILE="${STATE_DIR}/budget-tracking-${MONTH}.csv"
RUN_HISTORY_FILE="${STATE_DIR}/run-history-${MONTH}.json"

# Alert thresholds (from BIO-471)
ALERT_THRESHOLD_WARNING=80  # 80% budget utilization
ALERT_THRESHOLD_CRITICAL=100  # 100% budget utilization

# Budget caps (monthly, in USD)
BUDGET_AGENT_RUNTIME=1567
BUDGET_SAAS=200
BUDGET_OPS=300
BUDGET_TOTAL=2067  # BIO-260 allocation

# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Ensure state directory exists
mkdir -p "$STATE_DIR"

# Function: Query Paperclip API for agent runs
query_agent_runs() {
    local start_date="${1:-$(date -v-30d +%Y-%m-%d)}"  # Default: last 30 days
    local limit="${2:-1000}"
    
    echo "Querying Paperclip API for agent runs since ${start_date}..."
    
    curl -s -X GET "${API_URL}/api/runs?limit=${limit}&startDate=${start_date}" \
        -H "Authorization: Bearer ${API_KEY}" \
        -H "Content-Type: application/json" \
        > "$RUN_HISTORY_FILE" || {
            echo "Error: Failed to query Paperclip API"
            return 1
        }
    
    echo "Run history saved to ${RUN_HISTORY_FILE}"
}

# Function: Calculate agent costs from run history
calculate_agent_costs() {
    if [[ ! -f "$RUN_HISTORY_FILE" ]]; then
        echo "Error: Run history file not found. Run query_agent_runs first."
        return 1
    fi
    
    echo "Calculating agent costs..."
    
    # Extract and aggregate costs by agent
    # Note: Adjust jq query based on actual API response structure
    jq -r '
        .runs[] | 
        select(.createdAt | startswith("'"$MONTH"'")) |
        {
            agent_id: .agentId,
            cost: (.cost // 0),
            runs: 1
        }
    ' "$RUN_HISTORY_FILE" | \
    jq -s '
        group_by(.agent_id) |
        map({
            agent: .[0].agent_id,
            total_cost: (map(.cost) | add),
            run_count: length
        })
    ' > "${STATE_DIR}/agent-cost-summary-${MONTH}.json"
    
    echo "Agent cost summary saved to ${STATE_DIR}/agent-cost-summary-${MONTH}.json"
}

# Function: Update budget tracking CSV
update_tracking_csv() {
    local category="$1"
    local line_id="$2"
    local item="$3"
    local budget_monthly="$4"
    local actual="$5"
    local notes="${6:-}"
    
    local variance=$(echo "$budget_monthly - $actual" | bc)
    
    echo "${TODAY},${category},${line_id},${item},${budget_monthly},${actual},${variance},${notes}" \
        >> "$TRACKING_FILE"
}

# Function: Check budget thresholds and generate alerts
check_thresholds() {
    local category="$1"
    local budget="$2"
    local actual="$3"
    
    local utilization=$(echo "scale=2; ($actual / $budget) * 100" | bc)
    local utilization_int=${utilization%.*}
    
    if (( utilization_int >= ALERT_THRESHOLD_CRITICAL )); then
        echo -e "${RED}🚨 CRITICAL: ${category} at ${utilization}% (≥${ALERT_THRESHOLD_CRITICAL}%)${NC}"
        echo "CRITICAL: ${category} budget exceeded" >> "${STATE_DIR}/alerts-${TODAY}.log"
        return 2
    elif (( utilization_int >= ALERT_THRESHOLD_WARNING )); then
        echo -e "${YELLOW}⚠️  WARNING: ${category} at ${utilization}% (≥${ALERT_THRESHOLD_WARNING}%)${NC}"
        echo "WARNING: ${category} approaching budget limit" >> "${STATE_DIR}/alerts-${TODAY}.log"
        return 1
    else
        echo -e "${GREEN}✅ OK: ${category} at ${utilization}% (<${ALERT_THRESHOLD_WARNING}%)${NC}"
        return 0
    fi
}

# Function: Generate daily budget summary
generate_summary() {
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    echo "  BioNixus Budget Tracking — ${TODAY}"
    echo "═══════════════════════════════════════════════════════════"
    echo ""
    
    # Read current month totals from tracking CSV
    if [[ ! -f "$TRACKING_FILE" ]]; then
        echo "No tracking data found for ${MONTH}"
        return 1
    fi
    
    # Calculate totals by category
    local agent_actual=$(awk -F',' '$2=="agent_runtime" {sum+=$6} END {print sum}' "$TRACKING_FILE")
    local saas_actual=$(awk -F',' '$2=="saas" {sum+=$6} END {print sum}' "$TRACKING_FILE")
    local ops_actual=$(awk -F',' '$2=="ops" {sum+=$6} END {print sum}' "$TRACKING_FILE")
    local total_actual=$(echo "$agent_actual + $saas_actual + $ops_actual" | bc)
    
    echo "Category Breakdown:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    printf "%-20s %10s %10s %10s\n" "Category" "Budget" "Actual" "Remaining"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    printf "%-20s \$%9.2f \$%9.2f \$%9.2f\n" "Agent Runtime" "$BUDGET_AGENT_RUNTIME" "$agent_actual" "$(echo "$BUDGET_AGENT_RUNTIME - $agent_actual" | bc)"
    printf "%-20s \$%9.2f \$%9.2f \$%9.2f\n" "SaaS & Tools" "$BUDGET_SAAS" "$saas_actual" "$(echo "$BUDGET_SAAS - $saas_actual" | bc)"
    printf "%-20s \$%9.2f \$%9.2f \$%9.2f\n" "Operations" "$BUDGET_OPS" "$ops_actual" "$(echo "$BUDGET_OPS - $ops_actual" | bc)"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    printf "%-20s \$%9.2f \$%9.2f \$%9.2f\n" "TOTAL" "$BUDGET_TOTAL" "$total_actual" "$(echo "$BUDGET_TOTAL - $total_actual" | bc)"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    # Check thresholds
    echo "Budget Status:"
    check_thresholds "Agent Runtime" "$BUDGET_AGENT_RUNTIME" "$agent_actual"
    check_thresholds "SaaS & Tools" "$BUDGET_SAAS" "$saas_actual"
    check_thresholds "Operations" "$BUDGET_OPS" "$ops_actual"
    check_thresholds "TOTAL" "$BUDGET_TOTAL" "$total_actual"
    
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    echo ""
    
    # Check if alerts file exists and show recent alerts
    if [[ -f "${STATE_DIR}/alerts-${TODAY}.log" ]]; then
        echo "Alerts triggered today:"
        cat "${STATE_DIR}/alerts-${TODAY}.log"
        echo ""
    fi
}

# Main execution
main() {
    local command="${1:-summary}"
    
    case "$command" in
        query)
            query_agent_runs
            calculate_agent_costs
            ;;
        update)
            # Example: update tracking CSV with manual entry
            # Usage: ./track-agent-costs.sh update category line_id item budget actual "notes"
            shift
            update_tracking_csv "$@"
            ;;
        summary)
            generate_summary
            ;;
        alerts)
            if [[ -f "${STATE_DIR}/alerts-${TODAY}.log" ]]; then
                cat "${STATE_DIR}/alerts-${TODAY}.log"
            else
                echo "No alerts for ${TODAY}"
            fi
            ;;
        *)
            echo "Usage: $0 {query|update|summary|alerts}"
            echo ""
            echo "Commands:"
            echo "  query     - Query Paperclip API for agent runs and calculate costs"
            echo "  update    - Update tracking CSV with manual entry"
            echo "  summary   - Generate daily budget summary"
            echo "  alerts    - Show today's budget alerts"
            exit 1
            ;;
    esac
}

# Check for required environment variables
if [[ -z "$API_KEY" ]]; then
    echo "Error: PAPERCLIP_API_KEY environment variable not set"
    exit 1
fi

# Run main function
main "$@"
