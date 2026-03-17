import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/uae-pharmaceutical-market-research';

export default function UaePharmaceuticalMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharma Market Research Company in UAE | BioNixus</title>
        <meta
          name="description"
          content="BioNixus is a pharma market research company in UAE delivering emirate-level evidence for pricing, access, physician pathways, and launch execution."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Pharma Market Research Company in UAE', href: '/uae-pharmaceutical-market-research' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Pharma Market Research Company in UAE</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              UAE research execution requires emirate-aware design across DHA, DOH, and MOHAP pathways. This page supports the Middle East pillar with UAE-specific planning depth.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Channel-specific demand modeling by emirate and provider type.</li>
              <li>Payer and institutional access barriers mapped for launch planning.</li>
              <li>Evidence translation for commercial and market access teams.</li>
            </ul>
            <div className="mt-6 rounded-xl border border-border bg-card p-5">
              <h2 className="text-lg font-semibold text-foreground mb-2">Company-intent execution focus</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Teams searching for a pharma market research company in UAE usually need clear operating guidance by emirate.
                BioNixus structures UAE studies around pricing and reimbursement requirements, formulary influence mapping,
                and physician behavior evidence to support proposal-ready launch and access decisions.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/bionixus-market-research-middle-east" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Back to Middle East Pillar
              </Link>
              <Link to="/uae-market-access-research" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                UAE market access research page
              </Link>
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Compare with Saudi Arabia page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

