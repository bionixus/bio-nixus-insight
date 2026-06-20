import { Link } from 'react-router-dom';
import type { RareTumorSeoCluster } from '@/data/rare-tumor-seo-cluster';

interface RareTumorClusterCalloutProps {
  readonly cluster: RareTumorSeoCluster;
  readonly variant: 'pillar' | 'blog';
  /** When variant is blog, which spoke URL is active (drives role text + sibling links). */
  readonly activeBlogSlug?: string;
}

export function RareTumorClusterCallout({ cluster, variant, activeBlogSlug }: RareTumorClusterCalloutProps) {
  const isPillar = variant === 'pillar';
  const isDrugBlog =
    Boolean(activeBlogSlug) &&
    Boolean(cluster.drugBlogSlug) &&
    activeBlogSlug.trim().toLowerCase() === cluster.drugBlogSlug;

  const roleText = isPillar
    ? cluster.pillarRole
    : isDrugBlog && cluster.drugBlogRole
      ? cluster.drugBlogRole
      : cluster.blogRole;

  const editorialLinks = isPillar
    ? [
        { to: cluster.blogPath, label: cluster.blogLabel },
        ...(cluster.drugBlogPath && cluster.drugBlogLabel
          ? [{ to: cluster.drugBlogPath, label: cluster.drugBlogLabel }]
          : []),
      ]
    : isDrugBlog
      ? [
          { to: cluster.pillarPath, label: cluster.pillarLabel },
          { to: cluster.blogPath, label: cluster.blogLabel },
        ]
      : [
          { to: cluster.pillarPath, label: cluster.pillarLabel },
          ...(cluster.drugBlogPath && cluster.drugBlogLabel
            ? [{ to: cluster.drugBlogPath, label: cluster.drugBlogLabel }]
            : []),
        ];

  return (
    <aside
      className="rounded-xl border border-primary/25 bg-primary/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground"
      aria-label={isPillar ? 'Related editorial resources' : 'Related cluster pages'}
    >
      <p className="font-semibold text-foreground mb-1">
        {isPillar
          ? 'Services & capabilities page'
          : isDrugBlog
            ? 'Koselugo-focused editorial article'
            : 'Editorial market-access briefing'}
      </p>
      <p className="mb-2">{roleText}.</p>
      <p className="space-y-1">
        {editorialLinks.map((link) => (
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
