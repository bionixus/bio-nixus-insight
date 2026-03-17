import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/healthcare-market-research-agency-gcc';

export default function HealthcareMarketResearchAgencyGcc() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Market Research Agency GCC | BioNixus</title>
        <meta
          name="description"
          content="BioNixus is a healthcare market research agency in GCC supporting pharmaceutical teams with country-level evidence, market access context, and launch-readiness planning."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Healthcare Market Research Agency GCC', href: '/healthcare-market-research-agency-gcc' },
          ]}
        />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Healthcare Market Research Agency GCC
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              BioNixus supports pharmaceutical and healthcare teams across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman with evidence programs built for practical decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <article className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-semibold text-foreground mb-2">Commercial and launch readiness</h2>
                <p className="text-sm text-muted-foreground">
                  Segment demand, prioritize accounts, and align messaging before major launch investment.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-semibold text-foreground mb-2">Market access intelligence</h2>
                <p className="text-sm text-muted-foreground">
                  Map payer, committee, and procurement dynamics to reduce access friction and timeline risk.
                </p>
              </article>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/bionixus-market-research-middle-east" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Middle East pharma research pillar
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request a proposal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

