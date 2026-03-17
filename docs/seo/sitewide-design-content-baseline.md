# Sitewide Design + Content Baseline (Excluding Home)

## Route Inventory Baseline
- Source: `src/routes.tsx`
- Static routes (excluding `/`): 103
- Dynamic routes (parameterized): retained as-is with shared component rules and content controls

## Non-Negotiable Guardrails
- Keep existing brand and Tailwind visual identity; no global redesign.
- Preserve SSR-first behavior and metadata handling via `SEOHead`.
- Keep one `h1` per page and consistent heading hierarchy.
- Keep breadcrumb navigation on all upgraded pages.
- Keep CTA coverage on all upgraded pages.
- Preserve canonical/hreflang logic and sitemap generation behavior.

## Performance Guardrails
- No increase in main bundle architecture complexity from new page components.
- Reuse shared presentation components to avoid repeated heavy markup.
- Keep chart/visual modules inline-SVG only (no heavy client chart dependencies).
- Build must pass with no new lints or hydration warnings.

## Pilot Wave (10 Strategic Pages)
- `/market-research`
- `/market-research-healthcare`
- `/market-research-saudi-arabia-pharmaceutical`
- `/uae-pharmaceutical-market-research`
- `/healthcare-market-research-agency-gcc`
- `/bionixus-market-research-middle-east`
- `/gcc-market-access-guide`
- `/real-world-evidence-gcc`
- `/kuwait-market-access-research`
- `/healthcare-fieldwork-middle-east`

## Full Rollout Grouping
- Market and BOFU pages
- Country and company-intent pages
- Service/resource pages
- Localized pages (`/ar`, `/de`, `/fr`, `/es`, `/zh` route families)

## Content Standard (Executive + Simple English)
- Use short sentences and plain business wording.
- Section structure: **Why it matters -> Evidence -> What to do next**.
- Keep content skimmable with concise subsections and decision bullets.
- Keep proof blocks and practical ranges where available.
