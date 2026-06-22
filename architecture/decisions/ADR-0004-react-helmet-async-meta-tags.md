# ADR-0004: Use react-helmet-async for Meta Tag Management

**Date:** 2026-06-22  
**Status:** accepted  
**Supersedes:** N/A  
**Superseded by:** N/A

## Context

BioNixus operates in a competitive SEO landscape for pharmaceutical market research queries. Every page requires:

1. Unique `<title>` and `<meta name="description">` tags
2. Open Graph tags for social sharing (`og:title`, `og:description`, `og:image`, `og:type`)
3. Twitter Card tags for Twitter/X previews
4. Canonical URLs to prevent duplicate content penalties
5. Language and geographic targeting meta tags
6. JSON-LD structured data for rich search results
7. Server-side rendering: all meta tags must be in the initial HTML response (not injected via client-side JavaScript)

Manipulating the DOM directly (`document.title =` or `document.querySelector('meta[name="description"]')`) is prohibited by SEO requirements and `.cursorrules` rule 3.

## Decision

We will use **react-helmet-async** for managing `<head>` meta tags on every page:

- **Declarative API**: Define meta tags as JSX within page components
- **SSR support**: Helmet context provider enables server-side extraction of `<head>` contents
- **Automatic deduplication**: Later `<Helmet>` declarations override earlier ones (page-level overrides app-level)
- **Type-safe**: TypeScript definitions for all meta tag attributes
- **No DOM manipulation**: All `<head>` changes go through React component tree

## Consequences

### Positive
- SEO compliance: All meta tags present in server-rendered HTML before JavaScript loads
- Component-based: Each page component declares its own meta tags; no global state management
- Override hierarchy: Page-level `<Helmet>` overrides app-level defaults
- Type safety: TypeScript prevents typos in tag names and attributes
- No hydration mismatches: Server and client render identical `<head>` contents

### Negative
- Boilerplate: Every page component must include `<Helmet>` JSX
- Bundle size: `react-helmet-async` adds ~10KB to client bundle (acceptable for SEO gains)
- Learning curve: Team must understand Helmet context provider setup

### Neutral
- Provider setup: Wrap app in `<HelmetProvider>` in both `entry-server.tsx` and `entry-client.tsx`
- Server extraction: Call `helmet.renderStatic()` in `entry-server.tsx` to get `<head>` HTML string
- Inject into template: Replace `<!--ssr-head-->` placeholder in `dist/client/_ssr-template.html` with Helmet output

## Alternatives Considered

1. **Manual DOM manipulation** (`document.title =`): Rejected due to SEO failure (meta tags not in initial HTML) and `.cursorrules` violation.

2. **react-helmet** (original, synchronous version): Rejected due to warnings about SSR incompatibility and lack of async support.

3. **Next.js `<Head>` component**: Not applicable — we chose Vite + React Router (ADR-0001), not Next.js.

4. **Custom meta tag injection in Express middleware**: Possible but reinvents the wheel and lacks type safety compared to Helmet's battle-tested API.

## Implementation Notes

- Wrap app in `<HelmetProvider>` at the root level in both server and client entry points
- Server-side extraction in `entry-server.tsx`:
  ```ts
  const helmetContext = {};
  const markup = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App initialData={data} />
      </StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  const headTags = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  `;
  ```
- Inject `headTags` into `<!--ssr-head-->` placeholder in Express `server.js`
- Every page component must include `<Helmet>` with at least:
  - `<title>`
  - `<meta name="description">`
  - `<link rel="canonical">`
- Use `<script type="application/ld+json">` inside `<Helmet>` for JSON-LD structured data (`.cursorrules` rule 7)

## References

- [.cursorrules](/.cursorrules) — rule 3 mandates react-helmet-async usage
- [src/entry-server.tsx](/src/entry-server.tsx) — server-side Helmet extraction
- [src/entry-client.tsx](/src/entry-client.tsx) — client-side HelmetProvider
- [server.js](/server.js) — Helmet HTML injection into template
- [react-helmet-async Documentation](https://github.com/staylor/react-helmet-async)
