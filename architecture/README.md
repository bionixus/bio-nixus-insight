# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records (ADRs) for the BioNixus project. ADRs document significant architectural and technical decisions made throughout the project lifecycle.

## What is an ADR?

An Architecture Decision Record captures an important architectural decision along with its context and consequences. Each ADR describes:

- **Context**: The situation that led to the decision
- **Decision**: What was decided
- **Consequences**: The positive, negative, and neutral outcomes

## Format

All ADRs follow the template in [`ADR-TEMPLATE.md`](../ADR-TEMPLATE.md) and are numbered sequentially:

```
ADR-0001-use-vite-react-router-ssr.md
ADR-0002-implement-sanity-cms.md
ADR-0003-adopt-tailwind-css.md
```

## Status Values

- **proposed**: Decision is under consideration
- **accepted**: Decision has been approved and is being implemented
- **superseded**: Decision has been replaced by a newer ADR
- **deprecated**: Decision is no longer relevant or has been retired

## Creating a New ADR

Use the helper script to create a new ADR:

```bash
# Create a new proposed ADR
npm run adr:create "Your Decision Title"

# Create an accepted ADR
npm run adr:create "Your Decision Title" -- --status=accepted

# Or use the script directly
node scripts/create-adr.mjs "Your Decision Title" --status=accepted
```

The script will:
1. Assign the next sequential ADR number
2. Create a file with a slugified filename
3. Pre-fill the template with the title, date, and status
4. Guide you on next steps

## Agent Integration

ADRs are automatically loaded into agent startup context via the Paperclip system. Agents can reference ADRs when:

- Making new architectural decisions
- Explaining existing patterns
- Evaluating alternatives
- Onboarding to unfamiliar code areas

## Index of ADRs

| Number | Title | Status | Date |
|--------|-------|--------|------|
| [0001](decisions/ADR-0001-vite-react-router-ssr.md) | Use Vite + React Router for SSR | accepted | 2026-06-22 |
| [0002](decisions/ADR-0002-sanity-cms-backend.md) | Implement Sanity CMS as Content Backend | accepted | 2026-06-22 |
| [0003](decisions/ADR-0003-tailwind-css-styling.md) | Adopt Tailwind CSS for Component Styling | accepted | 2026-06-22 |
| [0004](decisions/ADR-0004-react-helmet-async-meta-tags.md) | Use react-helmet-async for Meta Tag Management | accepted | 2026-06-22 |
| [0005](decisions/ADR-0005-express-ssr-server.md) | Use Express for Server-Side Rendering | accepted | 2026-06-22 |

## Best Practices

1. **Be Concise**: ADRs should be readable in 5-10 minutes
2. **Be Specific**: Include concrete examples and code references
3. **Record Alternatives**: Document why other options were rejected
4. **Update Status**: Mark ADRs as superseded when decisions change
5. **Link Related Issues**: Reference Paperclip issues that led to or implement the decision

## References

- [Michael Nygard's ADR concept](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- [ADR GitHub Organization](https://adr.github.io/)
- [BIO-611: Implement persistent decision logs](/BIO/issues/BIO-611)
