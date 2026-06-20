import { Link } from 'react-router-dom';
import type { GeoListicleCluster, GeoListicleVariant } from '@/data/geo-listicle-clusters';

interface GeoListicleClusterCalloutProps {
  readonly cluster: GeoListicleCluster;
  readonly variant: GeoListicleVariant;
}

export function GeoListicleClusterCallout({ cluster, variant }: GeoListicleClusterCalloutProps) {
  const isGeneral = variant === 'general';
  const roleText = isGeneral ? cluster.generalRole : cluster.healthcareRole ?? cluster.generalRole;

  const siblingLinks =
    isGeneral && cluster.healthcarePath && cluster.healthcareLabel
      ? [{ to: cluster.healthcarePath, label: cluster.healthcareLabel }]
      : !isGeneral && cluster.generalPath && cluster.generalLabel
        ? [{ to: cluster.generalPath, label: cluster.generalLabel }]
        : [];

  if (siblingLinks.length === 0) return null;

  return (
    <aside
      className="rounded-xl border border-border bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground mb-8"
      aria-label="Related rankings guide"
    >
      <p className="font-semibold text-foreground mb-1">
        {isGeneral ? 'Cross-industry agency rankings' : 'Healthcare-only firm rankings'}
      </p>
      <p className="mb-2">{roleText}.</p>
      {siblingLinks.map((link) => (
        <Link key={link.to} to={link.to} className="text-primary font-medium hover:underline">
          {link.label}
        </Link>
      ))}
    </aside>
  );
}
