import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { ExecutiveDecisionBlock, PremiumHero, ProofMetricGrid } from '@/components/page/PremiumPageSections';

type LinkItem = {
  to: string;
  label: string;
  primary?: boolean;
};

type StrategicServicePageProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  breadcrumbLabel: string;
  h1: string;
  intro: string;
  links: LinkItem[];
  bullets: string[];
  decisionPoints: Array<{ title: string; body: string }>;
  metrics: Array<{ label: string; value: string; detail: string }>;
};

export default function StrategicServicePage({
  title,
  description,
  canonicalUrl,
  breadcrumbLabel,
  h1,
  intro,
  links,
  bullets,
  decisionPoints,
  metrics,
}: StrategicServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: breadcrumbLabel, href: canonicalUrl.replace('https://www.bionixus.com', '') }]} />
        <PremiumHero h1={h1} intro={intro} links={links.map((link) => ({ to: link.to, label: link.label }))} />
        <ExecutiveDecisionBlock heading="Executive decision framework" points={decisionPoints} />
        <ProofMetricGrid heading="Proof and execution snapshot" metrics={metrics} />
        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-xl font-semibold text-foreground mb-3">Delivery priorities</h2>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {links.map((link) =>
                  link.primary ? (
                    <Link key={link.to} to={link.to} className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
