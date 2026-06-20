import { Link } from 'react-router-dom';
import type { IndustryListicleCrossLink } from '@/data/industry-listicle-clusters';

interface IndustryListicleClusterCalloutProps {
  readonly industryLabel: string;
  readonly countryLabel: string;
  readonly roleText: string;
  readonly links: readonly IndustryListicleCrossLink[];
}

export function IndustryListicleClusterCallout({
  industryLabel,
  countryLabel,
  roleText,
  links,
}: IndustryListicleClusterCalloutProps) {
  return (
    <aside
      className="rounded-xl border border-border bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground mb-8"
      aria-label="Related industry research pages"
    >
      <p className="font-semibold text-foreground mb-1">
        {industryLabel} rankings in {countryLabel}
      </p>
      <p className="mb-2">{roleText}</p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-primary font-medium hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
