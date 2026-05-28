# Sitewide Phase 2 Rollout Tracker

This tracker records enterprise audit + rewrite progress across all sitemap URLs.

## Scope

- Source of truth: `public/sitemap.xml`
- Current URL count: 438
- Audit script: `scripts/sitewide-audit-runbook-phase2.mjs`
- Last production baseline report: `docs/seo/sitewide-audit-phase2.md`

## Execution Status

### Completed

1. Implemented Phase 2 operational standard in:
   - `docs/seo/enterprise-healthcare-audit-runbook.md`
2. Completed Batch 01 rewrite for market-reports collection templates:
   - `src/pages/HealthcareReportsHub.tsx`
   - `src/pages/HealthcareReportsByTherapy.tsx`
   - `src/pages/HealthcareReportsByCountry.tsx`
3. Started sitewide automated audit pipeline:
   - `npm run audit:sitewide:phase2`
4. Began detail-template copy rewrite hardening:
   - `src/pages/HealthcareReportPage.tsx` intro language de-risked.

### In Progress

1. Deploy and re-audit market-reports collection pages to clear 21 legacy schema findings.
2. Resolve remaining production MAJOR findings:
   - `/case-studies/gcc-oncology-market` (multiple H1)
   - `/terms` (missing H1 + low internal links + short title on production)

## Priority Queue (Sitewide)

### Wave A — High impact, multi-URL templates

1. `HealthcareReportPage.tsx` (89 detail URLs)
2. `BlogPost.tsx` (88 URLs; audit/quality consistency pass)
3. `GlobalWebsiteCountry.tsx` (33 URLs)
4. `CountryPage.tsx` and `TherapyPage.tsx` under `/healthcare-market-research` (53 URLs aggregate)

### Wave B — Single-page long-form assets with minor issues

- `BionixusVsIqviaMena.tsx`
- `BiosimilarMarketEntrySaudiArabia.tsx`
- `GfkAlternativeEgypt.tsx`
- `IqviaAlternative.tsx`
- `KolMappingSaudiArabiaOncology.tsx`
- `PharmaceuticalMarketResearchDubai.tsx`
- `PhysicianSurveySaudiArabia.tsx`
- `SfdaMarketAccessStrategySaudiArabia.tsx`

## Exit Criteria

- 100% sitemap URLs audited in latest run.
- 0 MAJOR findings in production audit report.
- All rewrites pass build + lint + metadata checks.
- Internal linking quality verified in cluster templates.
