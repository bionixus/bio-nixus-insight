import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

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
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Healthcare Fieldwork Middle East</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              BioNixus runs healthcare fieldwork across GCC and wider Middle East markets with role validation, incidence-aware sampling, and audit-ready governance from screener to final dataset.
            </p>
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

