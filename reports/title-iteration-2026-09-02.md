# Title iteration checklist — 2026-09-02

Rule: position <= 15, CTR < 2%, impressions >= 50/week.
Only iterate a title after it has been indexed >= 14 days (check the override deploy date / git log).
Change titles ONLY in lib/ctr-seo-overrides.mjs + src/server/ctr-seo-overrides.js
(+ the hardcoded <Helmet> title when the page has one). Keep URL and H1 stable.

| Page | Impr | Clicks | CTR | Pos | Δ pos vs prev wk | Override exists |
|---|---|---|---|---|---|---|
| /pharmaceutical-companies-egypt | 3698 | 56 | 1.51% | 5.9 | 0.1 | yes — iterate |
| /pharmaceutical-companies-uae | 1620 | 25 | 1.54% | 9.6 | 1.0 | yes — iterate |
| /pharmaceutical-companies-saudi-arabia | 1047 | 15 | 1.43% | 12.7 | 2.8 | yes — iterate |
| /pharmaceutical-companies-iran | 882 | 15 | 1.70% | 6.3 | -0.2 | yes — iterate |
| /pharmaceutical-companies-iraq | 869 | 16 | 1.84% | 6.4 | 0.4 | yes — iterate |
| /blog/nupco-saudi-arabia-tendering-guide | 483 | 0 | 0.00% | 7.5 | 0.2 | yes — iterate |
| /pharmaceutical-companies-kuwait | 417 | 8 | 1.92% | 8.6 | 0.0 | yes — iterate |
| /iqvia-alternative | 391 | 5 | 1.28% | 7.6 | -0.9 | yes — iterate |
| /blog/healthcare-overview-egypt-market-2026 | 352 | 0 | 0.00% | 11.9 | 2.4 | yes — iterate |
| /insights/top-healthcare-market-research-companies-belgium-2026 | 248 | 1 | 0.40% | 14.8 | 2.6 | yes — iterate |
| /blog/awiqli-insulin-icodec-weekly-fda-2026 | 223 | 0 | 0.00% | 6.2 | -0.6 | yes — iterate |
| /blog/sfda-drug-registration-guide | 176 | 2 | 1.14% | 12.8 | -0.3 | yes — iterate |
| /blog/ai-drug-discovery-machine-learning-pharma-2026 | 173 | 0 | 0.00% | 7.8 | 0.3 | yes — iterate |
| /insights/top-healthcare-market-research-companies-poland-2026 | 135 | 1 | 0.74% | 10.4 | 0.7 | yes — iterate |
| /insights/best-obesity-weight-management-market-research-firms-2026 | 131 | 0 | 0.00% | 9.6 | -2.3 | yes — iterate |
| /insights/top-market-research-companies-iraq-2026 | 103 | 0 | 0.00% | 7.7 | -0.6 | yes — iterate |
| /blog/icotyde-icotrokinra-psoriasis-fda-2026 | 93 | 0 | 0.00% | 7.3 | -1.2 | yes — iterate |
| /insights/top-market-research-companies-morocco-2026 | 91 | 1 | 1.10% | 8.5 | 1.2 | yes — iterate |
| /brazil-medical-devices-market-report | 88 | 0 | 0.00% | 10.8 | 0.2 | yes — iterate |
| /blog/healthcare-overview-kuwait-market-2026 | 88 | 0 | 0.00% | 11.6 | 1.8 | yes — iterate |
| /blog/rare-disease-orphan-drug-saudi-arabia-sfda-2026 | 86 | 0 | 0.00% | 9.9 | 2.5 | yes — iterate |
| /japan-healthcare-market-report | 84 | 0 | 0.00% | 14.9 | 0.5 | yes — iterate |
| /insights/top-healthcare-market-research-companies-colombia-2026 | 76 | 0 | 0.00% | 8.8 | -0.8 | yes — iterate |
| /insights/top-healthcare-market-research-companies-saudi-arabia-2026 | 63 | 0 | 0.00% | 12.6 | -12.2 | yes — iterate |
| /insights/top-market-research-companies-angola-2026 | 62 | 0 | 0.00% | 14.4 | -0.9 | yes — iterate |
| /insights/top-healthcare-market-research-companies-sweden-2026 | 60 | 0 | 0.00% | 10.2 | -3.3 | yes — iterate |
| /insights/top-market-research-companies-qatar-2026 | 57 | 0 | 0.00% | 13.8 | -1.6 | yes — iterate |
| /oman-medical-devices-market-report | 56 | 1 | 1.79% | 5.8 | -22.1 | yes — iterate |
| /insights/top-pharmaceutical-analytics-companies-worldwide-2026 | 50 | 0 | 0.00% | 8.9 | -0.8 | yes — iterate |

Flagged: 29 pages.
