import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Layers } from 'lucide-react';
import { getSiteExplorerSections, pathLabel } from '@/lib/blogSiteExplorer';

/**
 * Editorial site index — grouped collapsible navigation of internal marketing URLs
 * (BioNixus hub, services, countries, pillar pages, blogs). Helps readers and reinforces IA.
 */
export default function BlogSiteExplorer() {
  const sections = getSiteExplorerSections();
  const total = sections.reduce((n, s) => n + s.paths.length, 0);

  return (
    <section
      className="mt-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-background via-muted/40 to-accent/[0.04] shadow-[0_44px_100px_-40px_rgb(15_23_42/0.35)] overflow-hidden"
      aria-label="BioNixus site directory"
    >
      <header className="relative px-5 sm:px-7 pt-7 pb-5 border-b border-border/80 bg-muted/25">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/70 to-transparent" aria-hidden />
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
              <Compass className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Explore BioNixus capabilities &amp; hubs
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Directory of every indexed marketing destination — GCC and MENA research pages, localized hubs,
                methodologies, pharmaceutical directories, reports, global websites, insights, case studies,
                methodology, and Arabic coverage. Prefer this index over generic “related” lists for full-site context.
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 font-medium">
                  <Layers className="h-3 w-3" aria-hidden />
                  {sections.length} groups · {total} URLs
                </span>
              </p>
            </div>
          </div>
          <Link
            to="/sitemap"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50 hover:bg-accent/5 transition-colors"
          >
            Full structured sitemap
            <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden />
          </Link>
        </div>
      </header>

      <div className="p-5 sm:p-7 space-y-2 max-h-[min(72vh,900px)] overflow-y-auto overscroll-contain">
        {sections.map((sec) => (
          <details
            key={sec.id}
            className="group rounded-2xl border border-border/80 bg-background/70 backdrop-blur-sm open:shadow-[0_12px_40px_-20px_rgb(15_23_42/0.2)] transition-shadow"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
              <span className="flex-1">
                <span className="block font-display font-semibold text-foreground">{sec.title}</span>
                {sec.description ? (
                  <span className="mt-1 block text-xs text-muted-foreground leading-snug">{sec.description}</span>
                ) : null}
              </span>
              <span className="flex items-center gap-2 shrink-0 text-xs tabular-nums font-medium text-muted-foreground mt-0.5">
                {sec.paths.length}
                <svg
                  className="w-4 h-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </summary>
            <ul className="grid gap-px border-t border-border/60 bg-border/60 sm:grid-cols-2">
              {sec.paths.map((path) => (
                <li key={path} className="bg-background/95">
                  <Link
                    to={path}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-primary hover:bg-accent/[0.07] hover:text-accent-foreground transition-colors"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium truncate">{pathLabel(path)}</span>
                      <span className="block text-[11px] text-muted-foreground font-mono truncate">{path}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
