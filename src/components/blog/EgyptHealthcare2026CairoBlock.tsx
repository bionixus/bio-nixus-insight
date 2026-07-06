import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  EGYPT_CAIRO_HOSPITAL_CLUSTERS,
  EGYPT_HEALTHCARE_2026_CAIRO_FAQ,
} from '@/data/egyptHealthcare2026CairoSeo';

/**
 * Above-the-fold CTR block for the high-impression “cairo hospitals healthcare 2023-2026” query.
 * Placed immediately after the blog hero / TOC so crawlers and users see query-matched copy first.
 */
export function EgyptHealthcare2026CairoBlock() {
  return (
    <>
      <section
        className="mb-8 rounded-xl border border-primary/15 bg-primary/[0.025] p-5 lg:p-6"
        aria-labelledby="cairo-hospitals-healthcare-heading"
      >
        <p className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-primary mb-3">
          Cairo hospitals healthcare 2023–2026
        </p>
        <h2
          id="cairo-hospitals-healthcare-heading"
          className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3 text-balance"
        >
          Cairo hospitals healthcare 2023–2026 — hospital clusters and Egypt market context
        </h2>
        <p className="text-[15px] text-foreground leading-relaxed mb-3 font-medium">
          <strong>Answer:</strong> Cairo hospitals healthcare from 2023 through 2026 spans public university
          centres (Kasr Al-Ainy, Ain Shams, Nasser Institute), private groups (Saudi German, Cleopatra, Dar
          Al-Fouad), and new capital facilities under universal health insurance — the clusters below map where
          pharmaceutical access, payer mix, and physician prescribing shift fastest.
        </p>
        <p className="text-[15px] text-foreground leading-relaxed mb-3">
          Use this snapshot for Cairo hospital footprint, payer mix, and pharmaceutical access signals from
          2023 through 2026. For company-level intelligence, see{' '}
          <Link
            to="/pharmaceutical-companies-egypt"
            className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
          >
            pharmaceutical companies in Egypt
          </Link>{' '}
          and the{' '}
          <Link
            to="/healthcare-market-research/egypt"
            className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
          >
            Egypt healthcare market research hub
          </Link>
          .
        </p>
        <p className="text-sm font-semibold text-foreground mb-2">
          Top Cairo hospital systems to map for healthcare 2023–2026 (numbered)
        </p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-4 max-w-3xl">
          {EGYPT_CAIRO_HOSPITAL_CLUSTERS.map((cluster) => (
            <li key={cluster.name} className="pl-1">
              <strong className="text-foreground font-semibold">{cluster.name}</strong>
              {' — '}
              {cluster.detail}
            </li>
          ))}
        </ol>
        <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0 mb-4">
          {EGYPT_CAIRO_HOSPITAL_CLUSTERS.map((cluster) => (
            <li
              key={cluster.name}
              className="rounded-lg border border-border/70 bg-background/80 p-4 text-sm text-muted-foreground leading-relaxed"
            >
              <strong className="block text-foreground font-semibold mb-1">{cluster.name}</strong>
              {cluster.detail}
            </li>
          ))}
        </ul>
        <ul className="grid sm:grid-cols-2 gap-2 list-none p-0 m-0">
          <li>
            <Link
              to="/market-research-egypt"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
              Market research in Egypt
            </Link>
          </li>
          <li>
            <Link
              to="/insights/top-market-research-companies-egypt-2026"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
              Top market research companies in Egypt (2026)
            </Link>
          </li>
          <li>
            <Link
              to="/healthcare-market-research"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
              EMEA healthcare market research hub
            </Link>
          </li>
          <li>
            <Link
              to="/egypt-pharmaceutical-market-research"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
              Egypt pharmaceutical market research
            </Link>
          </li>
        </ul>
      </section>

      <section
        className="mb-10 rounded-xl border border-border bg-card p-5 lg:p-6"
        aria-labelledby="cairo-hospitals-faq-heading"
      >
        <h2
          id="cairo-hospitals-faq-heading"
          className="text-lg md:text-xl font-display font-semibold text-foreground mb-4"
        >
          Cairo hospitals and Egypt healthcare — frequently asked questions
        </h2>
        <div className="divide-y divide-border">
          {EGYPT_HEALTHCARE_2026_CAIRO_FAQ.map((item) => (
            <details key={item.question} className="group py-3 first:pt-0 last:pb-0">
              <summary className="cursor-pointer font-medium text-foreground list-none flex items-start justify-between gap-3">
                <span>{item.question}</span>
                <span className="text-primary text-sm shrink-0 group-open:rotate-45 transition-transform" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
