import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import { serviceRecoveryPaths } from '@/lib/internalLinkRecovery';

const services = [
  {
    slug: 'quantitative-research',
    title: 'Quantitative Healthcare Research & Physician Surveys',
    summary: 'Large-scale statistical insights from physicians and healthcare professionals across 17+ EMEA countries. Online and telephone surveys with defined sample sizes (n=50–500+) across multiple specialties.',
    icon: '📊',
  },
  {
    slug: 'qualitative-research',
    title: 'Qualitative Pharmaceutical Research & Expert Insights',
    summary: 'In-depth interviews, focus groups, and advisory boards with KOLs, treating physicians, payers, and hospital decision-makers across UK, Europe, and MENA.',
    icon: '🎤',
  },
  {
    slug: 'market-access',
    title: 'Market Access & HTA Strategy',
    summary: 'Evidence-based pricing and payer engagement for UK, EU5, and GCC markets. HTA submission support for NICE, G-BA, HAS, and Gulf health authorities.',
    icon: '🏛️',
  },
  {
    slug: 'competitive-intelligence',
    title: 'Competitive Intelligence',
    summary: 'Real-time competitor monitoring, pipeline analysis, landscape assessments, launch readiness evaluations, and biosimilar impact studies.',
    icon: '🔍',
  },
  {
    slug: 'clinical-trial-support',
    title: 'Clinical Trial Support',
    summary: 'Site identification, investigator profiling, patient recruitment feasibility, protocol feedback from treating physicians, and post-launch real-world evidence.',
    icon: '🧬',
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'KOL & Stakeholder Mapping',
    summary: 'Key Opinion Leader identification and engagement across UK, Europe, and MENA. Ethnographic research, patient journey mapping, and treatment pathway analysis.',
    icon: '🗺️',
  },
];

const recoveryLinkLabels: Record<string, string> = {
  '/bionixus-market-research-middle-east': 'Middle East Pharmaceutical Market Research',
  '/blog/healthcare-market-research-europe': 'Healthcare Market Research in Europe',
  '/blog/healthcare-market-research-europe-2026': 'Healthcare Market Research in Europe (2026 Guide)',
  '/blog/healthcare-market-research-methodologies-gcc': 'Healthcare Market Research Methodologies for the GCC',
  '/blog/healthcare-market-research-uae-guide-2025': 'Healthcare Market Research in the UAE — 2025 Guide',
  '/blog/hospital-market-research': 'Hospital Market Research for Pharma',
  '/blog/market-research-pharmaceutical-market-access-uae': 'Pharmaceutical Market Access Research in the UAE',
  '/blog/pharmaceutical-healthcare-market-research-gcc': 'Pharmaceutical Market Research in the GCC',
  '/blog/pharmaceutical-market-research-uk': 'Pharmaceutical Market Research in the UK',
  '/blog/pharmaceutical-market-research-uk-2026': 'Pharmaceutical Market Research in the UK (2026 Guide)',
  '/blog/quantitative-market-research-and-market-access': 'Quantitative Market Research and Market Access',
  '/blog/top-healthcare-market-research-companies-mena': 'Top Healthcare Market Research Companies in MENA',
  '/healthcare-market-research/algeria': 'Healthcare Market Research in Algeria',
  '/healthcare-market-research/bahrain': 'Healthcare Market Research in Bahrain',
};

function pathToLabel(path: string): string {
  if (recoveryLinkLabels[path]) return recoveryLinkLabels[path];
  const slug = path.split('/').filter(Boolean).pop() ?? path;
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const recoveryLinksWithLabels = serviceRecoveryPaths
  .slice(0, 14)
  .map((path) => ({ path, label: pathToLabel(path) }));

const servicesHubJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Healthcare Market Research Services',
  description:
    'Quantitative physician surveys, qualitative KOL research, market access, competitive intelligence, clinical trial support, and stakeholder mapping across EMEA and MENA.',
  url: 'https://www.bionixus.com/services',
  publisher: {
    '@type': 'Organization',
    name: 'BioNixus',
    url: 'https://www.bionixus.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: services.length,
    itemListElement: services.map((svc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: svc.title,
      url: `https://www.bionixus.com/services/${svc.slug}`,
    })),
  },
};

const Services = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Market Research Services in EMEA | BioNixus</title>
        <meta
          name="description"
          content="Quantitative, qualitative, market access, KOL mapping, competitive intelligence, and clinical trial support across the UK, Europe, GCC, and MENA."
        />
        <link rel="canonical" href="https://www.bionixus.com/services" />
        <script type="application/ld+json">{JSON.stringify(servicesHubJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.bionixus.com/services' },
          ],
        })}</script>
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
          </div>
        </div>

        <section className="section-padding pt-4 pb-16">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Comprehensive Healthcare Market Research Services for EMEA
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              From large-scale physician surveys to strategic market access consulting, BioNixus delivers end-to-end pharmaceutical research across 17+ countries in Europe, the Middle East, and North Africa.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mb-16 text-[15px]">
              <p>
                Each service card below links to a dedicated page with scope notes, typical deliverables, and geographic
                nuance. Quantitative programs emphasize representative sampling, transparent quotas, and statistical
                reporting that leadership teams can defend in governance reviews. Qualitative programs emphasize
                discussion guides that elicit clinical behavior—not slogans—and synthesis that converts transcripts into
                decisions.
              </p>
              <p>
                Market access and HTA support connects primary research to dossier narratives, payer objections, and
                price–volume scenarios. Competitive intelligence and KOL mapping modules feed launch readiness workshops,
                while clinical trial support bridges investigator sentiment with recruitment realism. Together, these
                services form a modular system: you can commission one module or a sequenced program aligned to your
                launch calendar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-4">{svc.icon}</div>
                  <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {svc.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-border bg-muted/20 p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                Strategic links for faster discovery
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Explore high-priority research hubs and country guides used most often by healthcare and pharmaceutical teams.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <Link to="/market-research" className="text-primary hover:underline">
                  Market research services hub
                </Link>
                <Link to="/healthcare-market-research/saudi-arabia" className="text-primary hover:underline">
                  Saudi Arabia pharmaceutical research page
                </Link>
                <Link to="/healthcare-market-research" className="text-primary hover:underline">
                  Healthcare market research regional hub
                </Link>
                <Link to="/global-websites" className="text-primary hover:underline">
                  Global websites directory and country navigation
                </Link>
                <Link to="/pharmaceutical-companies-uae" className="text-primary hover:underline">
                  UAE pharmaceutical companies guide
                </Link>
                <Link to="/ar/arabic-blog-alsawdyh" className="text-primary hover:underline">
                  Arabic guide: pharmaceutical market research in Saudi Arabia
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-2 mt-4">
                {recoveryLinksWithLabels.map(({ path, label }) => (
                  <Link key={path} to={path} className="text-primary hover:underline">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-16 bg-primary">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Tell us about your research needs and receive a tailored proposal within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
