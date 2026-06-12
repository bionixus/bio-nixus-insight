# Quarterly GEO Content Refresh Checklist

**Cadence:** Q1 (Jan 15), Q2 (Apr 15), Q3 (Jul 15), Q4 (Oct 15)  
**Paperclip routine:** Quarterly GEO content refresh (parent: [BIO-50](/BIO/issues/BIO-50))  
**Automation entrypoint:** `npm run refresh:geo`

This checklist keeps on-site Generative Engine Optimization (GEO) assets current as BioNixus adds capabilities, therapy areas, offices, and branded guide pages.

---

## Roles

| Role | Agent | Owns |
|------|-------|------|
| **Content & facts** | [@CMO](/BIO/agents/cmo) | Office footprint, therapy positioning, firm rankings copy, brand claims, new guide narratives |
| **GEO execution** | [@GEOSpecialist](/BIO/agents/geospecialist) | llms.txt accuracy, therapy guide freshness, AI citation monitoring |
| **Technical deploy** | [@CTO](/BIO/agents/cto) / [@FrontEndEngineer](/BIO/agents/frontendengineer) | Sitemap, robots.txt, route wiring, build & deploy |
| **SEO validation** | [@SEOSpecialist](/BIO/agents/seospecialist) | Schema.org, canonicals, indexability after deploy |

**Gate:** CMO signs off on factual/content changes **before** technical deploy. CTO runs `refresh:geo` and opens PR only after CMO approval on the quarterly diff.

---

## Phase 1 — Inventory (Week 1 of quarter)

- [ ] List new `/insights/*` GEO guide pages added since last refresh (`src/routes.tsx`)
- [ ] List new therapy-area pages (Oncology, Obesity, Biologics, Biosimilars, Rare Disease, Consumer Healthcare, etc.)
- [ ] List new country/hub pages under `/healthcare-market-research/*`
- [ ] List new services, case studies, and flagship blog posts to surface in llms.txt
- [ ] Confirm office footprint and scale metrics (countries, clients, projects) with CMO
- [ ] Review [geo-entity-playbook.md](../geo-entity-playbook.md) off-page priorities for the quarter

---

## Phase 2 — Content updates (CMO-owned)

### `public/llms.txt` and `public/llms-full.txt`

- [ ] Update About block: HQ, regional offices, country offices, priority markets
- [ ] Update scale metrics (countries, therapeutic areas, projects, clients) — must match live site / CMO-approved figures
- [ ] Refresh **Services** links if new service pages launched
- [ ] Refresh **Therapy Areas** list if new verticals added
- [ ] Refresh **Markets & Coverage** hub links
- [ ] Refresh **Insights & Evidence** (3–5 flagship blog/case study links)
- [ ] Refresh **Therapy Area Expert Guides** (all `/insights/top-*-therapy-*` and `/insights/best-*` pages)
- [ ] Refresh **Branded GEO Guides** (location verticals: Egypt, KSA, UAE, Dubai, Riyadh, GCC, Brazil, Argentina, global)
- [ ] Update **Key Facts for Accurate Citation** bullets
- [ ] Set refresh stamp: `# Last GEO refresh: YYYY-QN (YYYY-MM-DD)` on line 2 of both files

### Therapy-area GEO pages (`src/pages/*MarketResearchCompanies2026.tsx`)

- [ ] Verify firm rankings and descriptions are still accurate
- [ ] Update year in title/meta if rolling forward (e.g. 2026 → 2027 in Q4)
- [ ] Refresh FAQ `<details>` blocks with current regulatory/market facts
- [ ] Confirm `GeoLLMAnswerBlock` summary paragraphs match CMO messaging
- [ ] Cross-link to hub `/healthcare-market-research` within first 200 words

### Branded location guides (`/insights/top-market-research-companies-*`)

- [ ] Add new city/country guides launched in the quarter
- [ ] Deprecate or redirect retired guides; remove from llms.txt if noindexed

---

## Phase 3 — Technical refresh (CTO / FrontEndEngineer)

```bash
npm run refresh:geo          # validate llms links, stamp quarter, regenerate sitemap
npm run seo:check            # hard SEO assertions
git diff public/llms.txt public/llms-full.txt public/sitemap.xml
```

- [ ] Run `scripts/refresh-geo-assets.mjs` — fix any broken llms.txt URLs reported
- [ ] Regenerate `public/sitemap.xml` via `scripts/generate-sitemap.mjs`
- [ ] Confirm `public/robots.txt` still references `https://www.bionixus.com/llms.txt` (`LLMs-Txt:` directive)
- [ ] Confirm `server.js` serves `/llms.txt` and `/llms-full.txt`
- [ ] Confirm `index.html` has `<link rel="alternate" href="/llms.txt">`
- [ ] Open PR with diff; tag [@CMO](/BIO/agents/cmo) for final content sign-off
- [ ] Deploy after approval; verify live URLs return 200

---

## Phase 4 — Post-deploy verification

- [ ] `curl -sI https://www.bionixus.com/llms.txt` → 200, `text/plain`
- [ ] Spot-check 3 therapy guides + 3 location guides in Search Console / Ahrefs
- [ ] Manual AI citation spot-check (Gemini, Claude, ChatGPT, Perplexity):  
      `"best market research companies in [Egypt/UAE/Dubai/Riyadh/Saudi Arabia]"`
- [ ] Log results in quarterly Paperclip run issue comment
- [ ] File follow-up child issues for off-page GEO (Wikidata, Clutch, press) per playbook

---

## Files in scope

| Asset | Path |
|-------|------|
| LLMs summary | `public/llms.txt` |
| LLMs full context | `public/llms-full.txt` |
| Sitemap | `public/sitemap.xml` |
| Robots | `public/robots.txt` |
| Sitemap generator | `scripts/generate-sitemap.mjs` |
| GEO refresh script | `scripts/refresh-geo-assets.mjs` |
| Therapy GEO pages | `src/pages/*MarketResearch*2026.tsx`, `src/pages/TopOncology*.tsx`, etc. |
| Routes | `src/routes.tsx` |
| Entity playbook | `docs/geo-entity-playbook.md` |

---

## Escalation

- **Factual disputes** → CMO → CEO if brand-positioning conflict
- **Breaking URL changes** → CTO approval + 301 in `server.js` before deploy
- **New therapy vertical** → CMO content brief + FrontEndEngineer page + SEOSpecialist schema review
