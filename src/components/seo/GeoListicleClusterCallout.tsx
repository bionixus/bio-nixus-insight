import { Link } from 'react-router-dom';
import type {
  GeoListicleCalloutLocale,
  GeoListicleCluster,
  GeoListicleVariant,
} from '@/data/geo-listicle-clusters';

interface GeoListicleClusterCalloutProps {
  readonly cluster: GeoListicleCluster;
  readonly variant: GeoListicleVariant;
  readonly locale?: GeoListicleCalloutLocale;
}

const DEFAULT_HEADINGS: Record<GeoListicleCalloutLocale, { general: string; healthcare: string }> = {
  en: {
    general: 'Cross-industry agency rankings',
    healthcare: 'Healthcare-only firm rankings',
  },
  pt: {
    general: 'Rankings de agências (todos os setores)',
    healthcare: 'Rankings só de saúde e farmacêutica',
  },
  es: {
    general: 'Rankings de agencias (todos los sectores)',
    healthcare: 'Rankings solo de salud y farmacéutica',
  },
  ar: {
    general: 'تصنيفات وكالات أبحاث السوق العامة',
    healthcare: 'تصنيفات شركات أبحاث الرعاية الصحية فقط',
  },
};

function resolveClusterCopy(cluster: GeoListicleCluster, locale: GeoListicleCalloutLocale) {
  const localized = cluster.locales?.[locale];
  return {
    generalPath: localized?.generalPath ?? cluster.generalPath,
    generalLabel: localized?.generalLabel ?? cluster.generalLabel,
    generalRole: localized?.generalRole ?? cluster.generalRole,
    healthcarePath: localized?.healthcarePath ?? cluster.healthcarePath,
    healthcareLabel: localized?.healthcareLabel ?? cluster.healthcareLabel,
    healthcareRole: localized?.healthcareRole ?? cluster.healthcareRole,
    headingGeneral: localized?.headingGeneral ?? DEFAULT_HEADINGS[locale].general,
    headingHealthcare: localized?.headingHealthcare ?? DEFAULT_HEADINGS[locale].healthcare,
  };
}

export function GeoListicleClusterCallout({
  cluster,
  variant,
  locale = 'en',
}: GeoListicleClusterCalloutProps) {
  const copy = resolveClusterCopy(cluster, locale);
  const isGeneral = variant === 'general';
  const roleText = isGeneral ? copy.generalRole : copy.healthcareRole ?? copy.generalRole;

  const siblingLinks =
    isGeneral && copy.healthcarePath && copy.healthcareLabel
      ? [{ to: copy.healthcarePath, label: copy.healthcareLabel }]
      : !isGeneral && copy.generalPath && copy.generalLabel
        ? [{ to: copy.generalPath, label: copy.generalLabel }]
        : [];

  if (siblingLinks.length === 0) return null;

  return (
    <aside
      className="rounded-xl border border-border bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground mb-8"
      aria-label="Related rankings guide"
    >
      <p className="font-semibold text-foreground mb-1">
        {isGeneral ? copy.headingGeneral : copy.headingHealthcare}
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
