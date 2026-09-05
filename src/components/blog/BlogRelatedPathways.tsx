import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
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
    <section className="premium-home-cream section-padding py-16 md:py-20" ref={sectionRef} dir={dir}>
      <div className="container-wide mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <PremiumEyebrow tone="teal">Research paths</PremiumEyebrow>
          <h2 className="mb-4 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            {heading}
          </h2>
          <p className="font-light leading-relaxed text-[#7A7267]">{description}</p>
        </div>

        <ul className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ to, label, description: desc }) => (
            <li key={to}>
              <Link to={to} className="premium-card group flex h-full flex-col p-6">
                <h3 className="mb-2 font-display text-lg font-medium text-[#0C1B33]">{label}</h3>
                {desc ? <p className="flex-1 text-sm font-light leading-relaxed text-[#7A7267]">{desc}</p> : null}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] underline-offset-4 group-hover:underline">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {moreLinks.length > 0 ? (
          <details className="premium-card p-0">
            <summary className="cursor-pointer list-none px-7 py-6 font-display text-lg font-medium text-[#0C1B33]">
              <span className="flex items-center justify-between gap-2">
                {moreHeading}
                <span className="text-sm font-normal text-[#7A7267]">{moreLinks.length} links</span>
              </span>
            </summary>
            <ul className="grid max-h-64 grid-cols-1 gap-2 overflow-y-auto border-t border-[#EDE9E3] px-7 py-5 sm:grid-cols-2">
              {moreLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
                  >
                    {label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
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
