import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { ExecutiveDecisionBlock, PremiumHero, ProofMetricGrid } from '@/components/page/PremiumPageSections';

const pageUrl = 'https://www.bionixus.com/kuwait-market-access-research';

export default function KuwaitMarketAccessResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Access Research Kuwait | BioNixus</title>
        <meta
          name="description"
          content="Market access research Kuwait for pharmaceutical launch decisions, payer evidence alignment, and institutional adoption planning."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Market Access Research Kuwait', href: '/kuwait-market-access-research' }]} />
        <PremiumHero
          h1="Market Access Research Kuwait"
          intro="Kuwait access strategy needs institution-level evidence and realistic stakeholder sequencing. BioNixus translates market signals into practical payer and formulary actions."
          links={[
            { to: '/gcc-market-access-guide', label: 'GCC market access guide' },
            { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
            { to: '/pharmaceutical-companies-kuwait', label: 'Top pharma companies in Kuwait' },
            { to: '/contact', label: 'Request Kuwait access scope' },
          ]}
        />
        <ExecutiveDecisionBlock
          heading="Kuwait access decision framework"
          points={[
            {
              title: 'Why it matters',
              body: 'Kuwait decisions are shaped by concentrated institutional influence and procurement dynamics.',
            },
            {
              title: 'What the evidence says',
              body: 'Teams with early barrier mapping and value-message testing reduce late-stage access friction.',
            },
            {
              title: 'What to do next',
              body: 'Run access barrier diagnosis first, then map formulary influence and align the evidence package.',
            },
          ]}
        />
        <ProofMetricGrid
          heading="Execution proof snapshot"
          metrics={[
            {
              label: 'Scoping velocity',
              value: '7-12 days',
              detail: 'Objective-to-proposal turnaround for Kuwait-focused access scopes.',
            },
            {
              label: 'Access model coverage',
              value: 'Public + private',
              detail: 'Stakeholder architecture includes payer, institutional, and procurement influence.',
            },
            {
              label: 'Decision output',
              value: '30/60/90',
              detail: 'Action roadmap linked to launch and access timelines.',
            },
          ]}
        />
        <section className="section-padding py-6">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/healthcare-market-research-agency-gcc" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Back to healthcare market research agency GCC
              </Link>
              <Link to="/gcc-market-access-guide" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                GCC market access guide
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request Kuwait access scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

