import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/saudi-payer-market-access-research';

export default function SaudiPayerMarketAccessResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Saudi Payer Market Access Research | BioNixus</title>
        <meta
          name="description"
          content="Saudi payer market access research for pharmaceutical evidence design, procurement pathway analysis, and reimbursement-focused launch planning."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Saudi Payer Market Access Research', href: '/saudi-payer-market-access-research' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Saudi Payer Market Access Research</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Saudi access decisions depend on payer expectations, procurement pathways, and stakeholder sequencing. This cluster page links tactical access research to the Middle East commercial pillar.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <article className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">Value evidence threshold diagnostics</article>
              <article className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">Institutional procurement pathway mapping</article>
              <article className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">Access barrier prioritization and mitigation</article>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/bionixus-market-research-middle-east" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Open Middle East Pillar
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Scope market access research
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

