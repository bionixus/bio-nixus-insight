import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export type BlogPathwayLink = { to: string; label: string; description?: string };

interface BlogRelatedPathwaysProps {
  heading: string;
  description: string;
  links: BlogPathwayLink[];
  moreHeading: string;
  moreLinks: { path: string; label: string }[];
  dir?: 'ltr' | 'rtl';
}

export function BlogRelatedPathways({
  heading,
  description,
  links,
  moreHeading,
  moreLinks,
  dir = 'ltr',
}: BlogRelatedPathwaysProps) {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 70 });

  return (
    <section className="section-padding border-t border-border/60 bg-[#FAF8F4] py-14" ref={sectionRef} dir={dir}>
      <div className="container-wide mx-auto max-w-6xl">
        <div className="mb-2 inline-flex items-center gap-2.5">
          <span className="h-px w-8 bg-[#C9A84C]/50" aria-hidden />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
            Research paths
          </span>
        </div>
        <h2 className="mb-3 font-display text-2xl font-semibold text-foreground md:text-3xl sr sr-up sr-line">
          {heading}
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground sr sr-up">{description}</p>

        <ul className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ to, label, description: desc }) => (
            <li key={to} className="sr sr-scale-up sr-spring">
              <Link
                to={to}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover-lift hover:border-primary/40"
              >
                <h3 className="mb-2 font-display font-semibold text-foreground transition-colors group-hover:text-primary">
                  {label}
                </h3>
                {desc ? <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p> : null}
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary transition-all group-hover:gap-2">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {moreLinks.length > 0 ? (
          <details className="rounded-xl border border-border bg-card p-6 sr sr-up">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-display font-semibold text-foreground">
              {moreHeading}
              <span className="text-sm font-normal text-muted-foreground">{moreLinks.length} links</span>
            </summary>
            <ul className="mt-4 grid max-h-64 grid-cols-1 gap-2 overflow-y-auto border-t border-border pt-4 sm:grid-cols-2">
              {moreLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="text-sm font-medium text-primary hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </div>
    </section>
  );
}
