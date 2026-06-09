# Blog numeric claims — editorial workflow

1. Run `npm run audit:blog-numeric-claims` to refresh `blog-numeric-claims-audit.csv`.
2. For each flagged post, verify statistics against a named public source or label as **BioNixus synthesis**.
3. In Sanity Studio, set **Data sources** (`sources`) and **Fact checked at** (`factCheckedAt`) on the post.
4. Do not auto-publish rewrites of medical, regulatory, or market-size claims without human sign-off.
5. Link readers to [Methodology](/methodology) for how BioNixus handles market intelligence.

Programmatic market reports use [`content-accuracy-standards.md`](./content-accuracy-standards.md) and `npm run verify:content-accuracy`.
