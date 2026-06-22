# ADR Agent Integration Guide

This document explains how agents (AI assistants) should interact with Architecture Decision Records (ADRs) in the BioNixus codebase.

## Loading ADR Context on Startup

Agents should load ADR context at the beginning of any architectural or technical decision-making session. There are three ways to load ADR context:

### Option 1: Summary format (recommended for quick reference)

```bash
npm run adr:context
# or
node scripts/load-adr-context.mjs
```

This outputs a concise summary of all ADRs with:
- ADR number and title
- Status and date
- Brief decision summary
- File path for full details

### Option 2: Markdown format (for detailed context)

```bash
node scripts/load-adr-context.mjs --format=markdown
```

This outputs comprehensive markdown with:
- Full context sections
- Complete decision rationale
- Links to full ADR documents

### Option 3: JSON format (for programmatic access)

```bash
node scripts/load-adr-context.mjs --format=json
```

Returns structured JSON array of all ADRs for parsing.

### Filtering by Status

Load only accepted ADRs (most relevant for implementation decisions):

```bash
node scripts/load-adr-context.mjs --status=accepted
```

Available statuses: `proposed`, `accepted`, `superseded`, `deprecated`

## When Agents Should Reference ADRs

### 1. Making New Architectural Decisions

Before proposing a new architectural approach, agents should:

1. Load ADR context: `npm run adr:context --status=accepted`
2. Check if a related decision already exists
3. If yes: Explain why the existing decision applies or doesn't apply
4. If no: Propose a new ADR following the template

**Example scenario:**
```
User: "Should we switch from Express to Fastify for better performance?"

Agent workflow:
1. Load ADR context
2. Identify ADR-0005 (Use Express for Server-Side Rendering)
3. Review the "Alternatives Considered" section mentioning Fastify
4. Explain why ADR-0005 remains valid or propose superseding it
```

### 2. Explaining Existing Patterns

When a user asks "Why do we use X?" agents should:

1. Search ADR context for relevant decisions
2. Reference the specific ADR number
3. Summarize the decision and rationale
4. Link to the full ADR document

**Example scenario:**
```
User: "Why can't I use styled-components for styling?"

Agent response:
"According to ADR-0003 (Adopt Tailwind CSS for Component Styling), 
we use Tailwind CSS utility classes exclusively. Styled-components 
was explicitly rejected due to runtime overhead in our SSR context. 
See architecture/decisions/ADR-0003-tailwind-css-styling.md for details."
```

### 3. Evaluating Alternative Approaches

When a user proposes a different approach, agents should:

1. Load ADR context
2. Check if the alternative was already considered and rejected
3. Explain the historical decision-making context
4. Help evaluate if circumstances have changed enough to warrant revisiting

**Example scenario:**
```
User: "Let's use Next.js instead of Vite + React Router"

Agent workflow:
1. Load ADR context
2. Identify ADR-0001 (Use Vite + React Router for SSR)
3. Note that Next.js was explicitly rejected
4. Ask: "Has anything changed that makes Next.js more suitable now?"
5. If yes: Help draft ADR superseding ADR-0001
6. If no: Explain why ADR-0001 remains valid
```

### 4. Onboarding to Unfamiliar Code Areas

When working in an unfamiliar part of the codebase, agents should:

1. Load ADR context
2. Identify relevant ADRs by scanning titles
3. Read full ADR documents for architectural understanding
4. Apply the documented patterns and constraints

**Example scenario:**
```
Agent task: "Add a new blog post feature"

Agent workflow:
1. Load ADR context
2. Identify ADR-0002 (Implement Sanity CMS as Content Backend)
3. Read full ADR to understand Sanity schema patterns
4. Implement new feature following Sanity conventions
```

## Creating New ADRs

When agents identify a new architectural decision that needs documentation:

1. **Create the ADR:**
   ```bash
   npm run adr:create "Your Decision Title"
   ```

2. **Fill in the template sections:**
   - Context: Why this decision is needed
   - Decision: What was decided
   - Consequences: Positive, negative, and neutral outcomes
   - Alternatives Considered: What was rejected and why
   - Implementation Notes: Key technical details
   - References: Related issues, docs, and code

3. **Update the index:**
   Edit `architecture/README.md` to add the new ADR to the index table

4. **Announce the ADR:**
   Comment on the related Paperclip issue (e.g., `BIO-XXX`) with:
   - Link to the new ADR
   - Summary of the decision
   - Rationale for creating the ADR

## ADR Status Lifecycle

Agents should understand the ADR status progression:

1. **proposed**: New ADR awaiting review or validation
   - Agent creates ADR during exploration
   - Team reviews and discusses
   - May be accepted, revised, or rejected

2. **accepted**: Decision approved and being implemented
   - Most relevant status for implementation work
   - Agents should follow accepted ADRs strictly
   - Changes require proposing a superseding ADR

3. **superseded**: Decision replaced by newer ADR
   - Update `Superseded by: ADR-XXXX` field
   - Keep document for historical context
   - Agents should reference the superseding ADR instead

4. **deprecated**: Decision no longer relevant
   - Technology removed or architecture changed
   - Keep document for historical context
   - Agents should not apply deprecated decisions

## Best Practices for Agents

### DO:
✅ Load ADR context at the start of architectural tasks  
✅ Reference ADR numbers when explaining decisions (e.g., "per ADR-0003")  
✅ Create new ADRs for significant architectural decisions  
✅ Link ADRs to Paperclip issues for traceability  
✅ Update ADR status when decisions change  
✅ Use ADRs to maintain architectural consistency across sessions  

### DON'T:
❌ Make architectural decisions without checking existing ADRs  
❌ Propose alternatives already rejected in ADRs without new justification  
❌ Create ADRs for trivial implementation details  
❌ Ignore ADR constraints when implementing features  
❌ Leave ADRs in `proposed` status indefinitely (resolve to accepted/deprecated)  

## Example Agent Session

```bash
# 1. User starts session with architectural question
User: "I need to add a new market report page type. How should I structure it?"

# 2. Agent loads ADR context
Agent: [Internally runs: npm run adr:context --status=accepted]

# 3. Agent identifies relevant ADRs
Agent: "Based on our architectural decisions:

- ADR-0001: Use React Router for page routing
- ADR-0002: Define content schema in Sanity CMS
- ADR-0003: Style with Tailwind CSS utility classes
- ADR-0004: Use react-helmet-async for meta tags
- ADR-0005: Fetch data in fetchRouteData.ts on server

Here's how to structure the new market report page type..."

# 4. Agent proposes implementation following ADRs
[Implementation that respects all architectural constraints]

# 5. Agent documents new decisions if needed
Agent: "This is a new content type. Should I create ADR-0006 to 
document the market report schema design?"
```

## Troubleshooting

### "No ADRs found"

If `npm run adr:list` returns "No ADRs found":
1. Check that `architecture/decisions/` exists
2. Verify ADR files follow naming convention: `ADR-XXXX-slug.md`
3. Ensure files are in the correct directory

### ADR context not loading

If `npm run adr:context` fails:
1. Check that Node.js is installed (`node --version`)
2. Verify script has execute permissions (`chmod +x scripts/load-adr-context.mjs`)
3. Check file paths in script match repository structure

### Creating ADRs fails

If `npm run adr:create` fails:
1. Ensure `architecture/ADR-TEMPLATE.md` exists
2. Check write permissions on `architecture/decisions/`
3. Verify Node.js version supports ES modules (v14+)

## Integration with Paperclip

When working on Paperclip issues, agents should:

1. **Check for related ADRs** at the start of the issue
2. **Reference ADRs in comments** when explaining architectural decisions
3. **Create ADRs for significant decisions** made during implementation
4. **Link ADRs back to issues** in the References section

**Example Paperclip issue comment:**
```markdown
## Architectural Decision

Created ADR-0006 (Define Market Report Schema in Sanity) to document 
the content model design for market report pages.

Decision: Use Sanity `document` type with nested `array` for report sections,
each containing Portable Text for rich content.

Rationale: Allows flexible section ordering while maintaining structured data
for SEO and content reuse. Follows patterns from ADR-0002 (Sanity CMS).

See: architecture/decisions/ADR-0006-market-report-schema.md
```

## Further Reading

- [Architecture Decision Records (GitHub Organization)](https://adr.github.io/)
- [Michael Nygard's original ADR blog post](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- [When to Write an ADR](https://github.com/joelparkerhenderson/architecture-decision-record#when-should-we-write-an-architecture-decision-record)
- [ADR Tools](https://github.com/npryce/adr-tools) (original CLI tool inspiration)
