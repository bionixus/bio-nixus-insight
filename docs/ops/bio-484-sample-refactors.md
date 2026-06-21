# BIO-484 sample task refactors

Three issues refactored using [task scoping standards](/docs/ops/task-scoping-standards.md).

---

## 1. [BIO-482](/BIO/issues/BIO-482) — Run Logging API

### Before (gaps)
- No **Objective** line
- No **Out of scope**
- No **Verification steps**
- Requirements mixed with acceptance criteria

### After
See updated issue description (refactored 2026-06-19).

**Key improvements:** Single objective, explicit API contract, curl verification, out-of-scope excludes UI dashboard work.

---

## 2. [BIO-483](/BIO/issues/BIO-483) — Agent instruction audit

### Before (gaps)
- "Tasks" section duplicated work breakdown without deliverable paths
- No verification for "3 instruction updates completed"
- No out-of-scope (could balloon to rewriting all 32 agents)

### After
See updated issue description.

**Key improvements:** Deliverable = issue document `audit-report` + 3 merged instruction PRs/patches named by agent.

---

## 3. [BIO-470](/BIO/issues/BIO-470) — Success rate monitoring (parent)

### Before (gaps)
- Parent mixed coordination with implementation steps
- No child issue mapping
- "Trending toward 80% in 2 weeks" not measurable without baseline

### After
See updated issue description.

**Key improvements:** Parent owns delegation + weekly report only; children ([BIO-482](/BIO/issues/BIO-482), [BIO-483](/BIO/issues/BIO-483), [BIO-484](/BIO/issues/BIO-484)) own execution.

---

## Duplicate caught

[BIO-477](/BIO/issues/BIO-477) was identical to BIO-482 — cancelled as duplicate per anti-pattern table.
