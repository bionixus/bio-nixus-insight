# Biweekly SEO iteration log — 2026-06-22

Cadence per [sitewide-measurement-loop.md](./sitewide-measurement-loop.md).  
Parallel CTR tests per [gcc-primary-ctr-iteration.md](./gcc-primary-ctr-iteration.md) (14-day cycles).

---

## Active A/B tests (Cycle 1 — start 2026-06-22, review 2026-07-06)

| URL | Element | Variant A (live) | Variant B (queued if A fails) | Primary query family |
|-----|---------|------------------|-------------------------------|----------------------|
| `/blog/healthcare-overview-egypt-market-2026` | Title | Cairo Hospitals Healthcare 2023–2026 \| Egypt Market Overview \| BioNixus | *(hold — snippet match deployed)* | cairo hospitals healthcare 2023-2026 |
| `/pharmaceutical-companies-kuwait` | Title | Pharmaceutical Companies in Kuwait \| Top Medical Distributors & MNCs 2026 | Pharmaceutical Companies in Kuwait \| Top Distributors 2026 | pharmaceutical companies in kuwait |
| `/pharmaceutical-companies-saudi-arabia` | Title | Pharmaceutical Companies in Saudi Arabia \| Top Manufacturers 2026 | *(exact-match H1 + QuickAnswer deployed)* | pharmaceutical companies saudi arabia |
| `/market-research-saudi-arabia-pharmaceutical` | Title | Pharma Market Research Company in Saudi Arabia \| SFDA & NUPCO \| BioNixus | Pharma Market Research Company Saudi Arabia \| Proposal-Ready SFDA Insights | pharma market research saudi arabia |
| `/healthcare-market-research-agency-gcc` | Title | Healthcare Market Research Companies GCC \| Agency for Pharma Evidence | Pharma Market Research Company GCC \| Healthcare Market Research Agency | healthcare market research companies gcc |

**Decision rule:** Keep variant only if CTR **+0.5 to +0.8 pts** with stable or better average position (28-day GSC, MENA filter where applicable).

---

## Deployed this sprint

| URL | Change | Expected KPI |
|-----|--------|--------------|
| Cairo blog | Numbered hospital list + FAQ schema + internal links | Cairo query CTR > 0% |
| Kuwait / KSA pharma BOFU | Title Variant A refresh | CTR +0.5 pts |
| Agency GCC | Title Variant B (companies + agency intent) | CTR on companies queries |
| GCC pharma report | dateModified + segment title | pos 30→20 on biologics/injectables queries |
| GCC med devices report | IVD/prefilled meta emphasis | pos lift on IVD cluster |
| Hub | Report cluster nav links | Internal equity to pos 30–70 URLs |
| Site-wide | IndexNow batch + matrix wave scripts | Bing/Google recrawl |

---

## Review checklist (2026-07-06)

- [ ] Export GSC Performance (MENA saved view + site total)
- [ ] Compare each A/B URL: clicks, impressions, CTR, position
- [ ] Lock title winners; queue meta tests for winners only
- [ ] Run `npm run indexnow:priority` on changed URLs
- [ ] Update [gsc-weekly-measurement.md](./gsc-weekly-measurement.md) weekly table

---

## Next queue (Cycle 2 — after winners locked)

1. Meta description tests on KSA pharma BOFU + agency GCC
2. Industry matrix MedTech Egypt listicle title (per industry-matrix playbook)
3. Report cluster: `/gcc-pharmaceutical-market-research` segment title pass
