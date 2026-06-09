import { getReportSafe } from '@/data/healthcareReportData'
import { getStandaloneReportConfig } from '@/data/reportConversionConfig'

export type RelatedReportLink = {
  href: string
  label: string
}

/** Resolve CMS relatedReportSlug to an on-site report URL. */
export function resolveRelatedReportPath(relatedReportSlug: string | undefined): RelatedReportLink | null {
  if (!relatedReportSlug?.trim()) return null
  const raw = relatedReportSlug.trim().replace(/^\/+/, '')

  if (raw.startsWith('market-reports/')) {
    const slug = raw.replace(/^market-reports\//, '')
    const entry = getReportSafe(slug)
    return {
      href: `/market-reports/${slug}`,
      label: entry ? `${entry.market} ${entry.therapyName ?? 'market'} report` : 'Related market report',
    }
  }

  const programmatic = getReportSafe(raw)
  if (programmatic) {
    return {
      href: `/market-reports/${raw}`,
      label: `${programmatic.market} healthcare market report`,
    }
  }

  const standalonePath = raw.includes('-market-report') ? `/${raw}` : null
  if (standalonePath) {
    getStandaloneReportConfig(standalonePath)
    const label = standalonePath
      .replace(/^\//, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
    return { href: standalonePath, label }
  }

  return {
    href: `/market-reports/${raw}`,
    label: 'Related market report',
  }
}
