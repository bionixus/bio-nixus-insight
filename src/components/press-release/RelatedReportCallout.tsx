import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { resolveRelatedReportPath } from '@/lib/resolveRelatedReportPath'

type RelatedReportCalloutProps = {
  relatedReportSlug?: string
}

export function RelatedReportCallout({ relatedReportSlug }: RelatedReportCalloutProps) {
  const link = resolveRelatedReportPath(relatedReportSlug)
  if (!link) return null

  return (
    <aside
      className="my-10 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.03] to-accent/[0.05] p-6"
      aria-label="Related market report"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary mb-2">
        Related research
      </p>
      <p className="text-[15px] leading-relaxed text-foreground mb-3">
        This announcement references BioNixus market intelligence. Read the full report for methodology,
        sizing, and access implications.
      </p>
      <Link
        to={link.href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        {link.label}
        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
      </Link>
    </aside>
  )
}
