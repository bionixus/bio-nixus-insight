import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, BarChart3, Globe, Microscope, ArrowRight, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';

interface Resource {
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
  href?: string;
}

const resources: Resource[] = [
  {
    title: 'The Comprehensive Guide to Quantitative Healthcare Market Research (2026 Edition)',
    description: 'A long-form quantitative healthcare market research playbook for Saudi Arabia and UAE: survey design, tracking studies, specialized HCP recruitment, AI-era data validation, and original GCC benchmark chart.',
    type: 'Flagship Guide',
    icon: <BarChart3 className="w-6 h-6" />,
    href: '/quantitative-healthcare-market-research',
  },
  {
    title: 'MENA Pharmaceutical Market Data 2026',
    description: 'Country-by-country pharmaceutical market data: $33.9B+ total market, growth rates, per-capita spending, regulatory bodies, and therapeutic area trends for Saudi Arabia, UAE, Egypt, Kuwait, Qatar, Bahrain & Oman.',
    type: 'Data Resource',
    icon: <Globe className="w-6 h-6" />,
    href: '/mena-pharma-market-data',
  },
  {
    title: 'GCC Pharmaceutical Market Access Guide 2026',
    description: 'Complete guide to drug registration, pricing, and reimbursement across the 6 GCC countries. Regulatory authority requirements, timelines, and practical guidance for pharmaceutical companies.',
    type: 'Guide',
    icon: <BarChart3 className="w-6 h-6" />,
    href: '/gcc-market-access-guide',
  },
  {
    title: 'Global Websites and Country Navigation',
    description: 'Browse BioNixus websites by top markets and region groups, including language routes and global resource entry points.',
    type: 'Navigation Hub',
    icon: <Globe className="w-6 h-6" />,
    href: '/global-websites',
  },
  {
    title: 'Pharmaceutical Companies in Saudi Arabia: Industry Guide 2026',
    description: 'Complete guide to pharmaceutical companies in Saudi Arabia — SPIMACO, Jamjoom, Tabuk + MNCs, $12.4B market data, SFDA drug registration, Vision 2030 targets, and distribution channels.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-saudi-arabia',
  },
  {
    title: 'Pharmaceutical Companies in UAE: Industry Guide 2026',
    description: 'Comprehensive guide to pharmaceutical companies in the UAE — Julphar, Neopharma + MNCs, $4.5B market, MOHAP/DHA/DOH registration, medical tourism, and fastest GCC growth at 17.5%.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-uae',
  },
  {
    title: 'Pharmaceutical Companies in Egypt: Industry Guide 2026',
    description: 'Complete guide to pharmaceutical companies in Egypt — EIPICO, EVA Pharma, 120+ manufacturers, $5.8B market, EDA registration, 90% local production, and Africa export hub.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-egypt',
  },
  {
    title: 'Pharmaceutical Companies in Kuwait: Industry Guide 2026',
    description: 'Comprehensive guide to pharmaceutical companies operating in Kuwait — local manufacturers, MNC offices, distributors, $1.2B market data, MOH drug registration, and distribution channels.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-kuwait',
  },
  {
    title: 'Pharmaceutical Companies in Qatar: Industry Guide 2026',
    description: 'Guide to pharmaceutical companies in Qatar — QPI, QLife Pharma + MNCs, $0.9B market, MOPH registration, Hamad Medical Corp, Sidra Medicine, and 12.3% growth.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-qatar',
  },
  {
    title: 'Pharmaceutical Companies in Oman: Industry Guide 2026',
    description: 'Guide to pharmaceutical companies in Oman — omanpharma, NPI + MNCs, $0.7B market, MOH DGPA registration, Vision 2040 healthcare targets, and distribution channels.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-oman',
  },
  {
    title: 'Pharmaceutical Companies in Bahrain: Industry Guide 2026',
    description: 'Guide to pharmaceutical companies in Bahrain — Bahrain Pharma, Gulf Biotech + MNCs, $0.3B market, NHRA registration, Vision 2030 healthcare pillar, and Saudi proximity advantage.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-bahrain',
  },
  {
    title: 'Pharmaceutical Companies in Iraq: Industry Guide 2026',
    description: 'Guide to pharmaceutical companies in Iraq — SDI, Pioneer Industries + MNCs, $2.8B market, KIMADIA procurement, KRG healthcare market, and post-conflict reconstruction.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-iraq',
  },
  {
    title: 'Pharmaceutical Companies in Iran: Industry Guide 2026',
    description: 'Guide to pharmaceutical companies in Iran — Darou Pakhsh, Cinnagen, 180+ manufacturers, $4.2B market, 95% local production, IFDA registration, and biosimilar hub.',
    type: 'Industry Guide',
    icon: <Building2 className="w-6 h-6" />,
    href: '/pharmaceutical-companies-iran',
  },
  {
    title: 'Physician Survey Methodology Whitepaper',
    description: 'Our approach to large-scale quantitative physician surveys across EMEA — sample design, recruitment strategies, quality assurance, and statistical analysis.',
    type: 'Whitepaper',
    icon: <FileText className="w-6 h-6" />,
    comingSoon: true,
  },
  {
    title: 'KOL Mapping Best Practices in EMEA',
    description: 'How to identify, tier, and engage Key Opinion Leaders across European and MENA markets for pharmaceutical launch and medical affairs programmes.',
    type: 'Best Practices',
    icon: <Microscope className="w-6 h-6" />,
    comingSoon: true,
  },
];

const Resources = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Resources | BioNixus — Healthcare Market Research Guides & Whitepapers</title>
        <meta
          name="description"
          content="Download healthcare market research resources from BioNixus: MENA pharmaceutical market guides, physician survey methodology whitepapers, GCC market access guides, and KOL mapping best practices."
        />
        <link rel="canonical" href="https://www.bionixus.com/resources" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
            <nav className="text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>{' '}
              <span className="text-foreground">Resources</span>
            </nav>
          </div>
        </div>

        <section className="section-padding pt-4 pb-16">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Resources
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Guides, Whitepapers & Market Intelligence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
              Practical resources from our healthcare market research practice. Download guides, whitepapers, and market intelligence reports to inform your pharmaceutical strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((res, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {res.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
                      {res.type}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                    {res.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {res.description}
                  </p>
                  {res.href ? (
                    <Link
                      to={res.href}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                    >
                      Read Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : res.comingSoon ? (
                    <span className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline">
                      <Download className="w-4 h-4" /> Download PDF
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-cream-dark rounded-xl">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                Need a custom report?
              </h2>
              <p className="text-muted-foreground mb-6">
                We create bespoke research reports and market intelligence for pharmaceutical companies. Tell us what you need.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
