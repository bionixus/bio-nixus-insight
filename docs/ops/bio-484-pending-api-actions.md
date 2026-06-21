# BIO-484 refactored issue descriptions (ready to apply)

Apply via PATCH when a normal-model run is available.

---

## BIO-482

```markdown
(paste from /tmp/bio482-desc.md)
```

See `/tmp/bio482-desc.md` in workspace run artifacts.

---

## BIO-483

See `/tmp/bio483-desc.md`

---

## BIO-470

See `/tmp/bio470-desc.md`

---

## BIO-477 action

Cancel as duplicate of [BIO-482](/BIO/issues/BIO-482).

---

## BIO-485 draft (adoption metrics child)

**Title:** Implement task scoping adoption metrics  
**Parent:** BIO-484  
**Assignee:** CTO  
**Status:** todo  
**Blocked by:** BIO-482  
**Priority:** medium

**Objective:** Track % of new issues using scoping template and correlate with run success rate.

**Acceptance criteria:**
1. Label or tag `scoping:v1` available on issue create/update
2. Weekly report query: count issues with all required sections vs total created
3. Dashboard widget or API field for template-adoption %
4. Document measurement SOP in `docs/ops/task-scoping-standards.md` § adoption
