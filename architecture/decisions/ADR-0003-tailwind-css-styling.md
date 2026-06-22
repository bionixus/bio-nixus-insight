# ADR-0003: Adopt Tailwind CSS for Component Styling

**Date:** 2026-06-22  
**Status:** accepted  
**Supersedes:** N/A  
**Superseded by:** N/A

## Context

BioNixus required a consistent, maintainable styling approach for a large-scale content website with:

1. Responsive design across mobile, tablet, and desktop
2. Design system consistency without manual CSS duplication
3. Fast iteration on UI components
4. Type-safe styling (TypeScript compatibility)
5. SEO-friendly semantic HTML with accessible styling
6. No runtime CSS-in-JS overhead that could impact SSR performance

Traditional CSS methodologies (BEM, CSS Modules) were considered but rejected due to verbosity and maintenance burden as the component library grows.

## Decision

We will use **Tailwind CSS utility classes** for all component styling:

- **Utility-first approach**: Compose styles using pre-defined utility classes (`flex`, `text-lg`, `bg-blue-500`)
- **No inline styles**: All styling via Tailwind classes (`.cursorrules` rule 24)
- **Custom design tokens**: Configure brand colors, typography, and spacing in `tailwind.config.ts`
- **Responsive modifiers**: Use `md:`, `lg:`, `xl:` prefixes for breakpoint-specific styles
- **Component composition**: Build reusable components in `src/components/` with Tailwind classes
- **PurgeCSS integration**: Vite + Tailwind automatically removes unused styles in production

## Consequences

### Positive
- Development speed: No context switching between HTML and CSS files
- Design consistency: Tailwind's constraint-based system prevents arbitrary values
- Zero runtime overhead: All styles compiled to static CSS at build time
- Responsive design: Breakpoint modifiers make responsive styling trivial
- Type safety: Class names are strings, but `clsx` utility provides conditional class composition
- Bundle size optimization: PurgeCSS removes unused classes automatically

### Negative
- Class name verbosity: Components can have long `className` strings
- Learning curve: Team must learn Tailwind's utility class naming conventions
- Customization friction: Deviating from Tailwind's design system requires `tailwind.config.ts` changes
- HTML readability: Dense utility classes can obscure component structure

### Neutral
- Use `tailwind-merge` utility (`cn` helper) to resolve conflicting classes when composing components
- Typography plugin (`@tailwindcss/typography`) for rich text content styling
- Animations via `tailwindcss-animate` plugin for consistent motion design

## Alternatives Considered

1. **Styled Components / Emotion**: Rejected due to runtime overhead in SSR context and hydration complexity. CSS-in-JS requires JavaScript execution to apply styles.

2. **CSS Modules**: More maintainable than global CSS but requires separate `.module.css` files and lacks Tailwind's utility-first composability.

3. **Plain CSS / SCSS**: Maximum flexibility but high maintenance burden and risk of style duplication across components.

4. **Vanilla Extract**: Type-safe CSS-in-TS but adds build complexity and unfamiliar abstractions compared to Tailwind's mature ecosystem.

## Implementation Notes

- Configure Tailwind in `tailwind.config.ts` with brand colors, fonts, and spacing scale
- Use `clsx` and `tailwind-merge` for conditional class composition:
  ```ts
  import { clsx, type ClassValue } from "clsx";
  import { twMerge } from "tailwind-merge";
  
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```
- Shadcn/ui components pre-configured with Tailwind variants via `class-variance-authority`
- Dark mode support via `next-themes` (ironic naming; works with any React setup)
- Responsive breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`

## References

- [.cursorrules](/.cursorrules) — rule 24 enforces Tailwind-only styling
- [tailwind.config.ts](/tailwind.config.ts) — Tailwind configuration
- [src/lib/utils.ts](/src/lib/utils.ts) — `cn` utility function
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Typography Plugin](https://tailwindcss.com/docs/typography-plugin)
