import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/gcc-pharmaceutical-market-research';

export default function GccPharmaceuticalMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GCC Pharmaceutical Market Research | BioNixus</title>
        <meta
          name="description"
          content="GCC pharmaceutical market research for launch, access, and growth decisions across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'GCC Pharmaceutical Market Research', href: '/gcc-pharmaceutical-market-research' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">GCC Pharmaceutical Market Research</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              This cluster page supports the Middle East pillar with GCC-specific planning guidance for pharmaceutical launch sequencing, payer evidence, and account-level execution.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-semibold text-foreground mb-2">Priority markets</h2>
                <p className="text-sm text-muted-foreground">Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman with country-level execution logic.</p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-semibold text-foreground mb-2">Decision use cases</h2>
                <p className="text-sm text-muted-foreground">Launch planning, market access evidence design, stakeholder prioritization, and post-launch optimization.</p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/bionixus-market-research-middle-east" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Open Middle East Pharmaceutical Market Research Pillar
              </Link>
              <Link to="/patient-support-program-research-gcc" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Patient support program research GCC
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Book a strategy call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

