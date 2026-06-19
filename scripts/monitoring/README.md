# BioNixus Success Rate Monitoring

Automated tools for tracking agent run success rates and progress toward the 80% target.

## Quick Start

Run the monitoring report:

```bash
./scripts/monitoring/success_rate_monitor.sh
```

This generates a comprehensive report with:
- Current 14-day success rate
- Daily breakdown with target comparison
- Recent trend analysis
- Action items based on performance

## Target

**Board Goal:** 80-89% run success rate

## Environment Variables Required

The monitoring script requires these environment variables (auto-injected in Paperclip runs):
- `PAPERCLIP_API_URL` - Paperclip API base URL
- `PAPERCLIP_API_KEY` - Authentication token
- `PAPERCLIP_COMPANY_ID` - Company identifier

## Usage

### Generate Current Report

```bash
./scripts/monitoring/success_rate_monitor.sh
```

### Save Report to File

```bash
./scripts/monitoring/success_rate_monitor.sh > reports/success-rate-$(date +%Y-%m-%d).md
```

### Weekly Monitoring Routine

Recommended: Run every Monday morning to track week-over-week trends.

## Report Sections

1. **Current Performance** - 14-day aggregate metrics
2. **Daily Breakdown** - Per-day success rates with target comparison
3. **Recent Trend** - 3-day moving average and direction
4. **Action Items** - Automated recommendations based on current state

## Interpreting Results

### Success Rate Calculation

```
Success Rate = (Succeeded Runs / (Succeeded + Failed Runs)) × 100
```

Note: "Other" outcomes (timeouts, cancellations) are excluded from the success rate calculation but tracked separately.

### Status Indicators

- ✅ Above target: Daily success rate ≥ 80%
- ❌ Below target: Daily success rate < 80%
- 📈 Improving trend: Recent 3-day average > 14-day average
- 📉 Declining trend: Recent 3-day average < 14-day average

## Known Limitations

- **Aggregate Data Only**: Current dashboard API provides daily totals without individual run details
- **"Other" Outcomes**: Cannot distinguish between timeouts, cancellations, and other error types
- **No Agent Breakdown**: Cannot filter success rate by specific agent
- **No Task Type Analysis**: Cannot correlate success rate with task characteristics

See [BIO-482](../BIO/issues/BIO-482) for run logging API enhancement to address these gaps.

## Related Issues

- [BIO-470](../BIO/issues/BIO-470) - Parent: Establish 80% Success Rate Monitoring
- [BIO-482](../BIO/issues/BIO-482) - Implement Run Logging API
- [BIO-483](../BIO/issues/BIO-483) - Audit Agent Instructions
- [BIO-484](../BIO/issues/BIO-484) - Task Scoping Standards

## Improvement Initiatives

Based on failure pattern analysis, three improvement initiatives have been launched:

1. **Run Logging API** (BIO-482) - Enable detailed failure analysis
2. **Agent Instruction Audit** (BIO-483) - Fix capability gaps
3. **Task Scoping Standards** (BIO-484) - Improve task clarity

## History

- 2026-06-19: Initial implementation (current rate: 72.8%, gap: 7.2%)
