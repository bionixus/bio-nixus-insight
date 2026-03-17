import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { ExecutiveDecisionBlock, PremiumHero, ProofMetricGrid } from '@/components/page/PremiumPageSections';

const pageUrl = 'https://www.bionixus.com/healthcare-fieldwork-middle-east';

export default function HealthcareFieldworkMiddleEast() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Fieldwork Middle East | BioNixus</title>
        <meta
          name="description"
          content="Healthcare fieldwork in the Middle East with specialist recruitment, quality controls, and compliant execution for pharmaceutical market research."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Healthcare Fieldwork Middle East', href: '/healthcare-fieldwork-middle-east' }]} />
        <PremiumHero
          h1="Healthcare Fieldwork Middle East"
          intro="BioNixus runs healthcare fieldwork across GCC and wider Middle East markets with role validation, incidence-aware sampling, and audit-ready governance from screener to final dataset."
          links={[
            { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment standards' },
            { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC' },
            { to: '/quantitative-healthcare-market-research', label: 'Quantitative guide framework' },
            { to: '/contact', label: 'Request fieldwork scope' },
          ]}
        />
        <ExecutiveDecisionBlock
          heading="Fieldwork decision framework"
          points={[
            {
              title: 'Why it matters',
              body: 'Weak field operations undermine strategic confidence even when analytical models are strong.',
            },
            {
              title: 'What the evidence says',
              body: 'Role verification and quota telemetry are the strongest predictors of downstream data quality.',
            },
            {
              title: 'What to do next',
              body: 'Lock respondent architecture first, then run daily quality funnel governance during active fieldwork.',
            },
          ]}
        />
        <ProofMetricGrid
          heading="Field quality performance snapshot"
          metrics={[
            {
              label: 'Qualified completion',
              value: '26-35%',
              detail: 'Observed benchmark range by GCC market for high-integrity specialist cohorts.',
            },
            {
              label: 'QC readiness',
              value: 'Audit-ready',
              detail: 'Validation and exclusion logic remain transparent from screener to final base.',
            },
            {
              label: 'Operational cadence',
              value: 'Daily controls',
              detail: 'Quota and quality checkpoints support active correction before endline risk appears.',
            },
          ]}
        />
        <section className="section-padding py-6">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <article className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-semibold text-foreground mb-2">Fieldwork quality controls</h2>
                <p className="text-sm text-muted-foreground">
                  Duplicate checks, eligibility verification, and quality-funnel governance across quant and qual projects.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-semibold text-foreground mb-2">Specialist recruitment depth</h2>
                <p className="text-sm text-muted-foreground">
                  Access to physicians, pharmacists, payer-facing stakeholders, and institutional decision contributors.
                </p>
              </article>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/gcc-hcp-recruitment-market-research" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                GCC HCP recruitment standards
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request fieldwork scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

