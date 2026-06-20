import { Link } from 'react-router-dom';
import type { GeoMarketPageCluster, GeoMarketPageVariant } from '@/data/geo-market-page-clusters';

interface GeoMarketClusterCalloutProps {
  readonly cluster: GeoMarketPageCluster;
  readonly variant: GeoMarketPageVariant;
}

export function GeoMarketClusterCallout({ cluster, variant }: GeoMarketClusterCalloutProps) {
  const isGlobal = variant === 'global-websites';
  const isFullName = variant === 'healthcare-mr-full-name';

  const roleText = isGlobal
    ? cluster.globalRole
    : isFullName && cluster.healthcareFullNameRole
      ? cluster.healthcareFullNameRole
      : cluster.healthcareRole;

  const siblingLinks = isGlobal
    ? [
        { to: cluster.healthcareMrPath, label: cluster.healthcareMrLabel },
        ...(cluster.healthcareFullNamePath && cluster.healthcareFullNameLabel
          ? [{ to: cluster.healthcareFullNamePath, label: cluster.healthcareFullNameLabel }]
          : []),
      ]
    : [
        { to: cluster.globalWebsitesPath, label: cluster.globalWebsitesLabel },
        ...(isFullName && cluster.healthcareMrPath
          ? [{ to: cluster.healthcareMrPath, label: cluster.healthcareMrLabel }]
          : !isFullName && cluster.healthcareFullNamePath && cluster.healthcareFullNameLabel
            ? [{ to: cluster.healthcareFullNamePath, label: cluster.healthcareFullNameLabel }]
            : []),
      ];

  return (
    <aside
      className="rounded-xl border border-primary/25 bg-primary/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground"
      aria-label="Related country intelligence pages"
    >
      <p className="font-semibold text-foreground mb-1">
        {isGlobal ? 'Market entry blueprint page' : 'Healthcare market research services page'}
      </p>
      <p className="mb-2">{roleText}.</p>
      <p className="space-y-1">
        {siblingLinks.map((link) => (
          <span key={link.to} className="block">
            <Link to={link.to} className="text-primary font-medium hover:underline">
              {link.label}
            </Link>
          </span>
        ))}
      </p>
    </aside>
  );
}
