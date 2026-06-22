# ADR-0001: Use Vite + React Router for SSR

**Date:** 2026-06-22  
**Status:** accepted  
**Supersedes:** N/A  
**Superseded by:** N/A

## Context

BioNixus needed a modern, SEO-optimized architecture for its pharmaceutical/healthcare market research website. The primary requirements were:

1. Server-side rendering (SSR) for complete HTML in initial page load (critical for SEO)
2. Fast development experience with instant HMR
3. Production-grade performance with minimal JavaScript overhead
4. Type-safe routing with React ecosystem compatibility
5. No vendor lock-in to proprietary frameworks

Next.js was considered but rejected due to its opinionated app router paradigm, complexity for SSR-only use cases, and potential over-engineering for a content-focused website.

## Decision

We will use **Vite + React Router** as the foundation for server-side rendering:

- **Vite** provides ultra-fast dev server with instant HMR and optimized production builds
- **React Router v6** handles client and server routing with a simple, well-documented API
- **Express server** orchestrates SSR by rendering React components to HTML strings on every request
- **StaticRouter** (from `react-router-dom/server`) enables SSR; **BrowserRouter** enables client-side hydration

## Consequences

### Positive
- Development velocity: Vite's HMR provides near-instant feedback cycles
- Full control over SSR pipeline: no framework magic, explicit rendering logic in `server.js`
- Smaller JavaScript bundles: no framework runtime overhead beyond React + React Router
- Type safety: TypeScript strict mode across the entire codebase
- SEO compliance: full HTML in initial response without relying on JavaScript execution

### Negative
- Manual SSR implementation: must maintain Express server rendering logic ourselves
- No built-in data fetching abstractions: must implement `fetchRouteData.ts` manually
- Learning curve: team must understand both client and server rendering contexts
- More boilerplate than Next.js for SSR setup

### Neutral
- Build process requires two Vite invocations: `build:client` and `build:server`
- Server must read Vite-built `index.html` template and inject SSR content via placeholders (`<!--ssr-head-->`, `<!--ssr-outlet-->`, `<!--ssr-data-->`)
- Code splitting via `React.lazy()` + `Suspense` required for non-critical routes

## Alternatives Considered

1. **Next.js**: Rejected due to app router complexity, pages router deprecation trajectory, and overkill for content-focused use case. Would require fighting framework conventions to achieve desired SSR behavior.

2. **Remix**: Strong SSR-first approach but more complex mental model and newer ecosystem compared to React Router. Team familiarity with React Router v6 was decisive.

3. **Astro**: Excellent for content sites but JavaScript-light approach conflicts with interactive pharmaceutical calculators and dynamic content features planned for future releases.

## Implementation Notes

- Server entry point: `entry-server.tsx` exports SSR render function
- Client entry point: `entry-client.tsx` hydrates server-rendered markup
- Express middleware in `server.js` handles all HTTP requests
- Vite manifest JSON used in production to resolve hashed asset URLs
- All page components receive `initialData` prop populated by `fetchRouteData.ts` on server

## References

- [.cursorrules](/.cursorrules) — enforces Vite + React Router conventions
- [server.js](/server.js) — Express SSR implementation
- [src/entry-server.tsx](/src/entry-server.tsx) — server rendering logic
- [src/entry-client.tsx](/src/entry-client.tsx) — client hydration
- [Vite SSR Guide](https://vite.dev/guide/ssr.html)
- [React Router Server-Side Rendering](https://reactrouter.com/en/main/guides/ssr)
