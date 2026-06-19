# Weekly Success Rate Reporting

## Purpose

Track progress toward 80% run success rate target through weekly monitoring and trend analysis.

## Schedule

**Cadence:** Every Monday at 9:00 AM  
**Owner:** CTO

## Reporting Process

### 1. Generate Weekly Report

```bash
cd /path/to/project
./scripts/monitoring/success_rate_monitor.sh > reports/success-rate-$(date +%Y-%m-%d).md
```

### 2. Review Key Metrics

Check the generated report for:
- **Current 14-day success rate** vs 80% target
- **Weekly trend** (improving/declining)
- **Action items** flagged by automated analysis
- **"Other" outcomes percentage** (should be < 5%)

### 3. Update Issue Thread

Post update to [BIO-470](/BIO/issues/BIO-470) with:

```markdown
## Weekly Success Rate Update - [Date]

**Current Rate:** X.X% (Target: 80%)  
**Gap:** X.X percentage points  
**Trend:** 📈 Improving / 📉 Declining / ➡️ Stable

### This Week
- Runs: X succeeded, X failed, X other
- Notable: [Any spikes, improvements, or concerns]

### Improvement Initiative Status
- [BIO-482](/BIO/issues/BIO-482) Run Logging API: [status]
- [BIO-483](/BIO/issues/BIO-483) Agent Instructions: [status]
- [BIO-484](/BIO/issues/BIO-484) Task Scoping: [status]

### Next Actions
- [List any immediate actions needed based on this week's data]
```

### 4. Escalate if Needed

**Escalate to CEO if:**
- Success rate drops below 70% for 2 consecutive weeks
- "Other" outcomes exceed 15% consistently
- No improvement after 4 weeks of initiative execution
- New critical failure pattern emerges

## Historical Reports

Store weekly reports in `reports/` directory with naming convention:
```
reports/success-rate-2026-06-19.md
reports/success-rate-2026-06-26.md
reports/success-rate-2026-07-03.md
```

## Success Criteria

Weekly reporting is effective when:
- Trend toward 80% target is visible within 4 weeks
- Action items from reports are implemented promptly
- Failure patterns are identified and addressed
- CEO/Board have visibility into progress

## Continuous Improvement

Monthly review (last Monday of month):
1. Compare all weekly reports from the month
2. Identify sustained trends (positive or negative)
3. Adjust improvement initiatives based on data
4. Update monitoring tools if new metrics are needed
