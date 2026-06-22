# ADR-0005: Use Express for Server-Side Rendering

**Date:** 2026-06-22  
**Status:** accepted  
**Supersedes:** N/A  
**Superseded by:** N/A

## Context

BioNixus's Vite + React Router architecture (ADR-0001) requires a Node.js HTTP server to:

1. Render React components to HTML strings on every request (SSR)
2. Serve static assets built by Vite (CSS, JavaScript, images)
3. Handle 301 redirects for legacy URL patterns (e.g., `/global-websites` → `/healthcare-market-research`)
4. Inject server-rendered HTML and meta tags into the Vite-built `index.html` template
5. Fetch data from Sanity CMS (ADR-0002) before rendering pages
6. Compress responses for production performance
7. Support both development (proxying to Vite dev server) and production (serving `dist/` build artifacts) modes

The server must be framework-agnostic (not Next.js), lightweight, and have a mature ecosystem for middleware (compression, static file serving, etc.).

## Decision

We will use **Express 5.x** as the HTTP server for server-side rendering:

- **Request handling**: Express routes handle all incoming HTTP requests
- **SSR orchestration**: Call `render()` function from `entry-server.tsx` to generate HTML
- **Data fetching**: Invoke `fetchRouteData()` before rendering to pass `initialData` to React components
- **Template injection**: Read `dist/client/_ssr-template.html` and replace placeholders (`<!--ssr-head-->`, `<!--ssr-outlet-->`, `<!--ssr-data-->`) with SSR content
- **Static assets**: Use `serve-static` middleware to serve `dist/client/assets/` in production
- **Compression**: Enable gzip/brotli compression via `compression` middleware
- **Redirects**: Define 301 redirects in Express routes (rule 14 from `.cursorrules`)

## Consequences

### Positive
- Mature ecosystem: Express is the most widely adopted Node.js HTTP framework with extensive middleware library
- Simplicity: Minimal API surface; no magic or hidden abstractions
- Middleware composability: Easy to add compression, logging, error handling via standard middleware pattern
- Development velocity: Vite dev server integration works seamlessly with Express proxy
- Full control: No framework constraints on SSR rendering logic

### Negative
- Manual SSR wiring: Must implement template placeholder replacement ourselves
- No built-in routing conventions: Must define routes manually (though React Router handles client-side routing)
- Error handling: Must implement try-catch and fallback logic for SSR failures
- Boilerplate: More setup code compared to integrated frameworks like Next.js

### Neutral
- Development mode: Express proxies asset requests to Vite dev server (`http://localhost:5173`)
- Production mode: Express serves pre-built static assets from `dist/client/`
- Server entry point: `server.js` in project root (not `src/`)
- Port configuration: Defaults to `process.env.PORT` or `5174`

## Alternatives Considered

1. **Fastify**: Faster than Express but smaller ecosystem and less team familiarity. Performance gains not significant enough to justify switching.

2. **Koa**: Modern Express alternative with better async/await support, but Express 5.x added native async/await middleware support. No compelling reason to choose Koa over Express.

3. **Hono**: Lightweight Edge-compatible framework but lacks robust static file serving middleware and Express ecosystem maturity.

4. **Custom HTTP server (Node.js `http` module)**: Rejected due to need to reimplement middleware patterns (compression, static serving) that Express provides.

## Implementation Notes

- **Template placeholders** in `dist/client/_ssr-template.html`:
  - `<!--ssr-head-->`: Replaced with react-helmet-async `<head>` tags
  - `<!--ssr-outlet-->`: Replaced with `<div id="root">${markup}</div>`
  - `<!--ssr-data-->`: Replaced with `<script>window.__INITIAL_DATA__=${JSON.stringify(data)}</script>`

- **SSR error handling**: Wrap `render()` call in try-catch; return 500 status with error page on SSR failures

- **Asset manifest**: In production, read `dist/client/.vite/manifest.json` to resolve hashed asset filenames

- **Compression middleware**: Enable gzip/brotli for HTML, CSS, JavaScript responses

- **CORS headers**: Not required — BioNixus is a traditional server-rendered website, not an API

- **Graceful shutdown**: Handle `SIGTERM` and `SIGINT` to close server cleanly

## References

- [.cursorrules](/.cursorrules) — rule 2 specifies Express SSR, rule 11 specifies template placeholders, rule 14 specifies Express redirects
- [server.js](/server.js) — Express server implementation
- [src/entry-server.tsx](/src/entry-server.tsx) — SSR render function
- [Express 5.x Documentation](https://expressjs.com/en/5x/api.html)
- [Vite SSR Guide](https://vite.dev/guide/ssr.html)
