# Market reports — live URL inventory

**Production hub:** https://www.bionixus.com/market-reports  
**Sitemap:** 110 `/market-reports` URLs in `public/sitemap.xml` (1 hub + 11 therapy + 9 country + **89** reports)

## Deploy status (checked 2026-05-28)

| Check | Result |
|-------|--------|
| `HEAD` vs `origin/main` | **Same** — `a1a5feb` (0 ahead / 0 behind) |
| Vercel production | **Ready** — alias `www.bionixus.com` → deployment `bio-nixus-insight-o5pur111y` (~20h before check) |
| Sample HTTP | `/market-reports`, sample report, therapy hub, country hub → **200** |
| Programmatic reports on prod | **Yes** — shipped in `1530b2e` |
| Report-conversion CTAs on prod | **No** — local only (untracked `src/components/report-conversion/` + ~63 modified pages) |

Production matches **pushed** `main`, not your current working tree if you have uncommitted report-conversion changes.

---

## Hub & category pages (21)

| URL |
|-----|
| https://www.bionixus.com/market-reports |
| https://www.bionixus.com/market-reports/therapy/oncology |
| https://www.bionixus.com/market-reports/therapy/diabetes-metabolic |
| https://www.bionixus.com/market-reports/therapy/cardiovascular |
| https://www.bionixus.com/market-reports/therapy/immunology-biologics |
| https://www.bionixus.com/market-reports/therapy/respiratory |
| https://www.bionixus.com/market-reports/therapy/rare-diseases |
| https://www.bionixus.com/market-reports/therapy/neurology-cns |
| https://www.bionixus.com/market-reports/therapy/biosimilars |
| https://www.bionixus.com/market-reports/therapy/digital-health |
| https://www.bionixus.com/market-reports/therapy/vaccines |
| https://www.bionixus.com/market-reports/therapy/dermatology |
| https://www.bionixus.com/market-reports/country/gcc |
| https://www.bionixus.com/market-reports/country/saudi-arabia |
| https://www.bionixus.com/market-reports/country/uae |
| https://www.bionixus.com/market-reports/country/kuwait |
| https://www.bionixus.com/market-reports/country/qatar |
| https://www.bionixus.com/market-reports/country/bahrain |
| https://www.bionixus.com/market-reports/country/oman |
| https://www.bionixus.com/market-reports/country/egypt |
| https://www.bionixus.com/market-reports/country/turkey |

---

## Report detail pages (89)

Slug source: `src/data/healthcareReportData.ts` (`row(...)` entries).

### May 2026 expansion (29 new country × therapy reports)

| Therapy | New markets |
|---------|-------------|
| Rare diseases | Egypt |
| Neurology & CNS | Kuwait, Qatar, Oman, Bahrain |
| Biosimilars | UAE, Kuwait, Qatar, Oman, Bahrain |
| Digital health | UAE, Kuwait, Qatar, Oman, Bahrain, Egypt |
| Vaccines | Saudi Arabia, Egypt, Kuwait, Qatar, Oman, Bahrain |
| Dermatology | UAE, Saudi Arabia, Egypt, Kuwait, Qatar, Oman, Bahrain |

Regenerate full URL list: `npm run verify:market-reports` and the node one-liner in the footer of this file.

### Oncology (9)

- https://www.bionixus.com/market-reports/gcc-oncology-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-oncology-market-report
- https://www.bionixus.com/market-reports/uae-oncology-market-report
- https://www.bionixus.com/market-reports/kuwait-oncology-market-report
- https://www.bionixus.com/market-reports/qatar-oncology-market-report
- https://www.bionixus.com/market-reports/bahrain-oncology-market-report
- https://www.bionixus.com/market-reports/oman-oncology-market-report
- https://www.bionixus.com/market-reports/egypt-oncology-market-report
- https://www.bionixus.com/market-reports/turkey-oncology-market-report

### Diabetes & metabolic (9)

- https://www.bionixus.com/market-reports/gcc-diabetes-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-diabetes-market-report
- https://www.bionixus.com/market-reports/uae-diabetes-market-report
- https://www.bionixus.com/market-reports/kuwait-diabetes-market-report
- https://www.bionixus.com/market-reports/qatar-diabetes-market-report
- https://www.bionixus.com/market-reports/bahrain-diabetes-market-report
- https://www.bionixus.com/market-reports/oman-diabetes-market-report
- https://www.bionixus.com/market-reports/egypt-diabetes-market-report
- https://www.bionixus.com/market-reports/turkey-diabetes-market-report

### Cardiovascular (8)

- https://www.bionixus.com/market-reports/gcc-cardiovascular-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-cardiovascular-market-report
- https://www.bionixus.com/market-reports/uae-cardiovascular-market-report
- https://www.bionixus.com/market-reports/kuwait-cardiovascular-market-report
- https://www.bionixus.com/market-reports/qatar-cardiovascular-market-report
- https://www.bionixus.com/market-reports/bahrain-cardiovascular-market-report
- https://www.bionixus.com/market-reports/oman-cardiovascular-market-report
- https://www.bionixus.com/market-reports/egypt-cardiovascular-market-report

### Immunology & biologics (8)

- https://www.bionixus.com/market-reports/gcc-immunology-biologics-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-immunology-biologics-market-report
- https://www.bionixus.com/market-reports/uae-immunology-biologics-market-report
- https://www.bionixus.com/market-reports/kuwait-immunology-biologics-market-report
- https://www.bionixus.com/market-reports/qatar-immunology-biologics-market-report
- https://www.bionixus.com/market-reports/bahrain-immunology-biologics-market-report
- https://www.bionixus.com/market-reports/oman-immunology-biologics-market-report
- https://www.bionixus.com/market-reports/egypt-immunology-biologics-market-report

### Respiratory (8)

- https://www.bionixus.com/market-reports/gcc-respiratory-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-respiratory-market-report
- https://www.bionixus.com/market-reports/uae-respiratory-market-report
- https://www.bionixus.com/market-reports/kuwait-respiratory-market-report
- https://www.bionixus.com/market-reports/qatar-respiratory-market-report
- https://www.bionixus.com/market-reports/bahrain-respiratory-market-report
- https://www.bionixus.com/market-reports/oman-respiratory-market-report
- https://www.bionixus.com/market-reports/egypt-respiratory-market-report

### Rare diseases (6)

- https://www.bionixus.com/market-reports/gcc-rare-diseases-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-rare-diseases-market-report
- https://www.bionixus.com/market-reports/uae-rare-diseases-market-report
- https://www.bionixus.com/market-reports/kuwait-rare-diseases-market-report
- https://www.bionixus.com/market-reports/qatar-rare-diseases-market-report
- https://www.bionixus.com/market-reports/oman-rare-diseases-market-report

### Neurology & CNS (4)

- https://www.bionixus.com/market-reports/gcc-neurology-cns-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-neurology-cns-market-report
- https://www.bionixus.com/market-reports/uae-neurology-cns-market-report
- https://www.bionixus.com/market-reports/egypt-neurology-cns-market-report

### Biosimilars (3)

- https://www.bionixus.com/market-reports/gcc-biosimilars-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-biosimilars-market-report
- https://www.bionixus.com/market-reports/egypt-biosimilars-market-report

### Digital health (2)

- https://www.bionixus.com/market-reports/gcc-digital-health-market-report
- https://www.bionixus.com/market-reports/saudi-arabia-digital-health-market-report

### Vaccines (2)

- https://www.bionixus.com/market-reports/gcc-vaccines-market-report
- https://www.bionixus.com/market-reports/uae-vaccines-market-report

### Dermatology (1)

- https://www.bionixus.com/market-reports/gcc-dermatology-market-report

---

## Regenerate this list

```bash
node -e "
const fs=require('fs');
const t=fs.readFileSync('src/data/healthcareReportData.ts','utf8');
const re=/\\brow\\(\\s*'([^']+)'\\s*,/g;
let m; while((m=re.exec(t))) console.log('https://www.bionixus.com/market-reports/'+m[1]);
"
```
