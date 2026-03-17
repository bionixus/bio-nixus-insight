import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/heor-consulting-saudi-arabia';

export default function HeorConsultingSaudiArabia() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HEOR Consulting Saudi Arabia | BioNixus</title>
        <meta
          name="description"
          content="HEOR consulting in Saudi Arabia for budget impact models, value evidence planning, and payer-facing reimbursement strategy support."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'HEOR Consulting Saudi Arabia', href: '/heor-consulting-saudi-arabia' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">HEOR Consulting Saudi Arabia</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              BioNixus supports HEOR consulting in Saudi Arabia with practical budget-impact modeling, localized value narratives, and evidence packages aligned to payer and procurement realities.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Budget impact model design with KSA market assumptions.</li>
              <li>Value communication testing for institutional stakeholders.</li>
              <li>Cross-functional translation for market access and commercial teams.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/healthcare-market-research-agency-gcc" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Back to healthcare market research agency GCC
              </Link>
              <Link to="/budget-impact-model-saudi-arabia" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Budget impact model Saudi Arabia
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request HEOR scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

