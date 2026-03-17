import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/real-world-evidence-gcc';

export default function RealWorldEvidenceGcc() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Real World Evidence GCC | BioNixus</title>
        <meta
          name="description"
          content="Real world evidence GCC programs for pharmaceutical launch and access strategy with practical study design, data quality governance, and stakeholder-ready outputs."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Real World Evidence GCC', href: '/real-world-evidence-gcc' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Real World Evidence GCC</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              BioNixus helps teams generate real world evidence in GCC markets with fit-for-purpose design, local relevance, and decision-ready outputs for market access and lifecycle strategy.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>RWE study framing aligned to payer and institutional decisions.</li>
              <li>Data quality governance and transparent analytical assumptions.</li>
              <li>Evidence translation for commercial, medical, and access stakeholders.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/heor-consulting-saudi-arabia" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                HEOR consulting in Saudi Arabia
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request RWE scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

