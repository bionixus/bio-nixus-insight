# ADR-0002: Implement Sanity CMS as Content Backend

**Date:** 2026-06-22  
**Status:** accepted  
**Supersedes:** N/A  
**Superseded by:** N/A

## Context

BioNixus produces high-volume, research-backed content about pharmaceutical market access, health economics, and regulatory affairs across multiple geographies. Content requirements include:

1. Complex structured content: blog posts, market reports, case studies, country pages
2. Rich text editing with embedded data tables, charts, and citations
3. Content versioning and draft/published workflows
4. Image asset management with automatic CDN delivery and transformations
5. Headless architecture compatible with SSR pipeline
6. Developer-friendly query language for content retrieval
7. Type-safe content models in TypeScript

Traditional WordPress or file-based CMS approaches were considered but rejected due to scalability concerns and developer experience friction.

## Decision

We will use **Sanity.io** as the headless CMS backend:

- **Structured content**: Define schemas for all content types (`blogPost`, `marketReport`, `countryPage`, etc.)
- **Portable Text**: Sanity's rich text format enables custom blocks, inline citations, and embedded components
- **GROQ queries**: Sanity's query language for precise content retrieval in `fetchRouteData.ts`
- **Sanity Client**: Imported only in server-side code (`entry-server.tsx`, `fetchRouteData.ts`, `server.js`) — never in client components
- **CDN-delivered assets**: Automatic image optimization and global delivery via Sanity's CDN
- **Type generation**: Use Sanity's TypeScript codegen for type-safe content access

## Consequences

### Positive
- Developer velocity: GROQ queries are expressive and type-safe
- Content team autonomy: Non-technical editors can publish without developer intervention
- Global CDN: Sanity handles image optimization, lazy loading, and responsive variants automatically
- Rich preview: Sanity Studio provides real-time content preview
- Version control: Content changes tracked with full audit history
- Flexible schema evolution: Add fields without database migrations

### Negative
- Additional service dependency: Sanity.io availability impacts site rendering
- Query complexity: GROQ has a learning curve; complex joins require careful optimization
- API rate limits: Must cache content or use CDN layer to avoid hitting Sanity API limits on high-traffic pages
- Cost scaling: Sanity pricing increases with API requests and asset bandwidth

### Neutral
- Studio deployment: Separate Sanity Studio app lives in `day-one/apps/studio/`
- Schema deployment: Run `npm run studio:schema-deploy` to sync schema changes
- Client initialization: Sanity client configured via environment variables (`VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`)

## Alternatives Considered

1. **WordPress Headless**: Rejected due to REST API verbosity, performance overhead of WordPress core, and poor TypeScript support.

2. **Contentful**: Strong contender but more expensive than Sanity for our content volume. GROQ is more expressive than Contentful's query syntax.

3. **Strapi (self-hosted)**: Rejected due to infrastructure maintenance burden and inferior image CDN compared to Sanity's.

4. **File-based Markdown**: Simplest approach but lacks rich text capabilities, versioning, and content team editing without Git knowledge.

## Implementation Notes

- Sanity Client **must** be imported only in server-side code (`.cursorrules` enforcement)
- Use `@sanity/image-url` for generating optimized image URLs in SSR templates
- Cache Sanity responses in production via CDN or Redis to minimize API calls
- Implement preview mode for editors to review draft content before publish
- Use Sanity's `_createdAt` and `_updatedAt` for content freshness tracking

## References

- [.cursorrules](/.cursorrules) — rule 23 enforces server-only Sanity client usage
- [src/data/fetchRouteData.ts](/src/data/fetchRouteData.ts) — server-side GROQ queries
- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity TypeScript Codegen](https://www.sanity.io/docs/sanity-typegen)
