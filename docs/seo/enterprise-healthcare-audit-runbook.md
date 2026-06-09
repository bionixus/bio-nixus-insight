# BioNixus Enterprise Healthcare Content + SEO Audit Runbook

This runbook operationalizes the enterprise prompt into a repeatable workflow for 400+ URLs.

## Objectives

- Build medically safe, evidence-aligned healthcare content.
- Improve topical authority and crawl efficiency.
- Raise readability and conversion trust signals.
- Enforce consistent internal linking across topic clusters.

## Scope Model

- **Cluster first, then page-level:** Hub pages, therapy hubs, country hubs, report details, service pages, blog pages.
- **Batch size:** 10-25 URLs per run.
- **Current rollout:** `/market-reports` cluster first.

## Two-Pass Workflow

### Pass 1: Audit Only (no rewrites)

For each URL, score and classify:

1. Search intent alignment
2. Medical accuracy risk
3. SEO metadata quality
4. Heading and information architecture
5. Internal link network quality
6. Readability and trust quality

Output: PASS / MINOR / MAJOR / CRITICAL with concrete blockers.

### Pass 2: Rewrite + Optimization (Implementation Standard)

Apply edits only after audit triage and only for URLs marked MINOR/MAJOR/CRITICAL.

#### Phase 2 Inputs

- Approved Pass 1 audit sheet for the batch
- URL list and template ownership map
- Current metadata and heading inventory
- Internal link target set for the cluster

#### Phase 2 Rewrite Sequence (must run in order)

1. **Accuracy rewrite**
   - Remove unsupported medical, epidemiology, and regulatory claims.
   - Replace over-assertive language with evidence-safe wording.
   - Mark unresolved statements as `REVIEW_REQUIRED` in working notes.

2. **Intent and structure rewrite**
   - Align intro with target query intent.
   - Enforce clean section progression: scope -> evidence context -> actionable output.
   - Preserve one H1 and meaningful H2/H3 hierarchy.

3. **Metadata rewrite**
   - Rebuild title/description from page-specific entities and coverage.
   - Remove hardcoded geography or therapy claims not supported by page data.
   - Prevent duplicate metadata patterns across sibling pages.

4. **Schema rewrite**
   - Use `CollectionPage` + `ItemList` for hub/category collections.
   - Keep `Article` only for genuine article/report pages.
   - Ensure canonical URL and item URLs are aligned with live routing.

5. **Internal linking rewrite**
   - Add or improve contextual in-paragraph links (not only list/grid links).
   - Link to nearest relevant hub + sibling cluster pages.
   - Keep anchor text descriptive and naturally phrased.

6. **Conversion trust rewrite**
   - Keep CTA language professional and non-promotional.
   - Prefer decision-support wording over sales wording.

#### Phase 2 Definition of Done (per URL)

- Accuracy gate passes with no unsupported claim in rewritten sections.
- Intent gate passes (topic focus and query match preserved).
- Metadata is specific and non-generic.
- Schema type matches page type.
- Minimum contextual internal link expectations are met.
- Readability improves without reducing topical depth.

#### Phase 2 Output Artifacts (required)

- `batch-xx-audit.md` updated with:
  - fixed items
  - remaining risks
  - URLs moved to PASS
- list of edited templates/pages
- build + lint validation status

## Per-Page Quality Gates

A page is accepted only if all gates pass.

- **Accuracy gate:** No unsupported medical or regulatory claim.
- **Intent gate:** Content resolves the page's target intent without drift.
- **Structure gate:** Clean heading hierarchy and scannable flow.
- **SEO gate:** Strong title/description/H1/entity coverage without stuffing.
- **Linking gate:** Minimum 5 contextual, relevant internal links where structurally possible.
- **Readability gate:** Professional, concise, non-generic language.

## Medical Validation Standard

- Use conservative phrasing when claims are not source-attributed in-page.
- For clinical/regulatory assertions, require traceability to recognized bodies (WHO, FDA, EMA, NIH, PubMed-backed evidence).
- Flag uncertain claims as `REVIEW_REQUIRED` instead of expanding them.

## Internal Linking Standard

- Prioritize links among:
  - Hub -> therapy hubs -> country hubs -> report details
  - Therapy hubs -> sibling therapy reports
  - Country hubs -> sibling country therapy reports
  - Detail reports -> therapy hub + country hub + related reports
- Anchor text must be descriptive and natural language.

## Deliverable Format Per Batch

Each batch file should include:

1. URL inventory
2. Template mapping
3. Shared blockers
4. URL-level issue summary
5. Rewrite priority queue
6. Next-batch recommendation

## Execution Cadence

- Run audit batches weekly for major clusters.
- Run rewrite batches after audit approval.
- Re-check metadata and internal links after deploy.

## Current Status

- Batch 01 initialized for first 20 `/market-reports` URLs.
- Phase 2 framework implemented in this runbook and ready for cluster execution.
- Sitewide audit automation is active via `npm run audit:sitewide:phase2` (438 sitemap URLs).
