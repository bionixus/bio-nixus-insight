import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Users,
  Landmark,
  Search,
  Microscope,
  Map,
  Briefcase,
  Globe2,
  Building2,
  ShoppingBag,
  Stethoscope,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CTASection } from '@/components/shared/CTASection';
import { serviceRecoveryPaths } from '@/lib/internalLinkRecovery';

type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
};

type CommercialOffering = {
  to: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  examples: string;
};

const healthcareServices: ServiceItem[] = [
  {
    slug: 'quantitative-research',
    title: 'Quantitative research & physician surveys',
    summary:
      'Statistically powered surveys with physicians, payers, and healthcare professionals across 38 countries. Online and telephone fieldwork at defined sample sizes (n=50 to 500+), with base sizes, quotas, and significance testing your governance team can defend.',
    icon: BarChart3,
  },
  {
    slug: 'qualitative-research',
    title: 'Qualitative research & expert insights',
    summary:
      'In-depth interviews, focus groups, and advisory boards with KOLs, treating physicians, payers, and hospital decision-makers — designed to explain the why behind adoption and access, not just the what.',
    icon: Users,
  },
  {
    slug: 'market-access',
    title: 'Market access & HTA strategy',
    summary:
      'Evidence-led pricing, payer engagement, and value-story testing for the US, EU5, UK, and GCC — with HTA and reimbursement support mapped to NICE, G-BA, HAS, CMS, and Gulf health authority expectations.',
    icon: Landmark,
  },
  {
    slug: 'competitive-intelligence',
    title: 'Competitive intelligence',
    summary:
      'Competitor monitoring, pipeline and landscape assessments, launch-readiness reviews, and biosimilar impact studies — turned into a clear read on where your brand can realistically win.',
    icon: Search,
  },
  {
    slug: 'clinical-trial-support',
    title: 'Clinical trial support',
    summary:
      'Site identification, investigator profiling, patient-recruitment feasibility, protocol feedback from treating physicians, and real-world evidence planning across the Americas, Europe, and MENA.',
    icon: Microscope,
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'KOL & stakeholder mapping',
    summary:
      'Identification of the opinion leaders, committees, and procurement voices that shape decisions — with ethnographic research, patient-journey mapping, and treatment-pathway analysis where clinical context matters.',
    icon: Map,
  },
];

const commercialOfferings: CommercialOffering[] = [
  {
    to: '/pharma-healthcare-industries',
    title: 'Pharma, biotech & MedTech',
    summary:
      'The discipline BioNixus was founded on — drug launch, market access, MedTech, diagnostics, biotech, and consumer health evidence with the sampling and compliance standards regulated categories require.',
    icon: Stethoscope,
    examples: 'Oncology · rare disease · devices · OTC · vaccines',
  },
  {
    to: '/b2b-industries',
    title: 'B2B & enterprise research',
    summary:
      'Buyer-committee mapping, market sizing, and competitive intelligence for technology, energy, real estate, public sector, education, and industrial manufacturing — including wood products and engineered materials.',
    icon: Building2,
    examples: 'Technology · real estate · energy · manufacturing',
  },
  {
    to: '/b2c-industries',
    title: 'B2C & consumer research',
    summary:
      'Brand tracking, shopper insight, segmentation, and demand studies for FMCG, retail, financial services, telecom, automotive, hospitality, and tourism — where mass-market behaviour drives the decision.',
    icon: ShoppingBag,
    examples: 'Banking · retail · tourism · FMCG · telecom',
  },
  {
    to: '/bionixus-industries',
    title: 'AI, IT & growth-stage ventures',
    summary:
      'Win-loss analysis, buyer persona research, and GTM validation for B2B software, cybersecurity, health-tech AI, and IT services — combining enterprise buyer depth with the speed growth teams need.',
    icon: Cpu,
    examples: 'SaaS · AI startups · IT services · health-tech',
  },
];

const HUB_LINKS = [
  { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
  { to: '/bionixus-industries', label: 'BioNixus across industries' },
  { to: '/market-research-by-industry', label: 'Market research by industry (global index)' },
  { to: '/market-research', label: 'Market research services overview' },
  { to: '/methodology', label: 'Research methodology & compliance' },
  { to: '/case-studies', label: 'Client case studies' },
] as const;

const SERVICE_FAQ = [
  {
    question: 'Does BioNixus only work in pharmaceutical and healthcare markets?',
    answer:
      'No. Pharmaceutical and healthcare research is where BioNixus leads — but the same senior-led methodology extends to B2B and B2C programmes: financial services, real estate, tourism and hospitality, manufacturing, technology, AI startups, retail, and FMCG. Explore the commercial sections below or the BioNixus industries hub for category-specific scope.',
  },
  {
    question: 'Which service fits a pre-launch pharmaceutical programme?',
    answer:
      'Most launch teams combine quantitative physician surveys with qualitative KOL depth and market access support. We scope modules to your phase — feasibility, positioning, pricing, or HTA — and sequence fieldwork to match your governance calendar across the US, Europe, and MENA.',
  },
  {
    question: 'Can we commission one module or an integrated global programme?',
    answer:
      'Both. Each healthcare card links to a dedicated scope page. You can run a standalone quantitative wave, a qualitative advisory board, a B2B buyer study, or a multi-country programme where modules share sampling logic and reporting templates.',
  },
  {
    question: 'Which geographies do these services cover?',
    answer:
      'BioNixus executes across 38 countries in the Americas, Europe, MENA, Africa, and Asia-Pacific priority markets — with offices and field networks in the US, UK, Egypt, Saudi Arabia, UAE, Kuwait, and Brazil.',
  },
  {
    question: 'How quickly can we receive a proposal?',
    answer:
      'Share your objective, audience, industry, and timeline via the contact form. We typically return a tailored methodology outline within one business day.',
  },
] as const;

const recoveryLinkLabels: Record<string, string> = {
  '/bionixus-market-research-middle-east': 'Middle East Pharmaceutical Market Research',
  '/blog/healthcare-market-research-europe-2026': 'Healthcare Market Research in Europe (2026 Guide)',
  '/blog/healthcare-market-research-methodologies-gcc': 'Healthcare Market Research Methodologies for the GCC',
  '/blog/healthcare-market-research-uae-guide-2025': 'Healthcare Market Research in the UAE — 2025 Guide',
  '/blog/hospital-market-research': 'Hospital Market Research for Pharma',
  '/blog/market-research-pharmaceutical-market-access-uae': 'Pharmaceutical Market Access Research in the UAE',
  '/blog/pharmaceutical-healthcare-market-research-gcc': 'Pharmaceutical Market Research in the GCC',
  '/blog/pharmaceutical-market-research-uk-2026': 'Pharmaceutical Market Research in the UK (2026 Guide)',
  '/blog/quantitative-market-research-and-market-access': 'Quantitative Market Research and Market Access',
  '/blog/top-healthcare-market-research-companies-mena': 'Top Healthcare Market Research Companies in MENA',
  '/healthcare-market-research/algeria': 'Healthcare Market Research in Algeria',
  '/healthcare-market-research/bahrain': 'Healthcare Market Research in Bahrain',
};

function pathToLabel(path: string): string {
  if (recoveryLinkLabels[path]) return recoveryLinkLabels[path];
  const slug = path.split('/').filter(Boolean).pop() ?? path;
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const recoveryLinksWithLabels = serviceRecoveryPaths.map((path) => ({
  path,
  label: pathToLabel(path),
}));

const servicesHubJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Global Market Research Services',
  description:
    'Pharmaceutical and healthcare market research plus B2B and B2C commercial research — quantitative and qualitative programmes across 38 countries for pharma, MedTech, financial services, real estate, tourism, technology, and more.',
  url: 'https://www.bionixus.com/services',
  publisher: {
    '@type': 'Organization',
    name: 'BioNixus',
    url: 'https://www.bionixus.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: healthcareServices.length + commercialOfferings.length,
    itemListElement: [
      ...healthcareServices.map((svc, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: svc.title,
        url: `https://www.bionixus.com/services/${svc.slug}`,
      })),
      ...commercialOfferings.map((offering, i) => ({
        '@type': 'ListItem',
        position: healthcareServices.length + i + 1,
        name: offering.title,
        url: `https://www.bionixus.com${offering.to}`,
      })),
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SERVICE_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const Services = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const introRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const gridRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const linksRef = useScrollReveal<HTMLElement>({ stagger: 60 });

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Market Research Services | Pharma, Healthcare & Commercial | BioNixus</title>
        <meta
          name="description"
          content="BioNixus market research across 38 countries — pharmaceutical and healthcare modules plus B2B and B2C programmes for financial services, real estate, tourism, technology, manufacturing, retail, and more."
        />
        <link rel="canonical" href="https://www.bionixus.com/services" />
        <script type="application/ld+json">{JSON.stringify(servicesHubJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.bionixus.com/services' },
            ],
          })}
        </script>
      </Helmet>
      <Navbar />
      <main dir="ltr" lang="en">
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden /> Back to Home
            </Link>
          </div>
        </div>

        <section
          className="section-padding pt-4 pb-12 bg-gradient-to-br from-navy-deep via-navy-medium to-primary text-primary-foreground"
          ref={heroRef}
        >
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6 sr sr-left sr-fast revealed">
              <Globe2 className="w-4 h-4" aria-hidden />
              Global services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 max-w-4xl leading-tight sr sr-up sr-line revealed">
              Market research services for pharma, healthcare, and commercial industries
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mb-8 sr sr-up revealed">
              BioNixus runs senior-led quantitative and qualitative programmes across 38 countries — from physician surveys and HTA strategy for pharmaceutical teams to B2B buyer research in technology and real estate, and B2C insight in banking, tourism, retail, and FMCG. One firm, one methodology standard, scoped to the decision you need to make.
            </p>
            <div className="flex flex-wrap gap-3 sr sr-up revealed">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors duration-200 cursor-pointer"
              >
                Request a proposal
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40 text-primary-foreground font-semibold hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                About BioNixus
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-cream-dark" ref={introRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6 sr sr-up sr-line">
              Two connected research portfolios
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="sr sr-left">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" aria-hidden />
                  Pharma &amp; healthcare
                </h3>
                <p>
                  Where BioNixus leads: regulated categories that demand verified HCP and payer samples, HTA-aware synthesis, and launch-ready evidence across the US, EU5, UK, GCC, and North Africa. The six modules below each open a dedicated scope page with typical deliverables and country nuance.
                </p>
              </div>
              <div className="sr sr-right">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" aria-hidden />
                  Commercial &amp; cross-industry
                </h3>
                <p>
                  The same sampling discipline and senior analysis applied beyond life sciences — financial services and banking, real estate, tourism and hospitality, wood manufacturing, technology, AI and IT ventures, retail, and FMCG. Explore the industry segments below or start at the{' '}
                  <Link to="/bionixus-industries" className="text-primary font-medium hover:underline">
                    BioNixus industries hub
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-12" ref={gridRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up">
              Pharma &amp; healthcare research modules
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl sr sr-up">
              Quantitative, qualitative, access, intelligence, trial support, and stakeholder mapping — combinable into one global programme.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {healthcareServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-200 cursor-pointer sr sr-scale-up hover-lift"
                  >
                    <div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5"
                      aria-hidden
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{svc.summary}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all duration-200">
                      Learn more <ArrowRight className="w-4 h-4" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-cream-dark">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up">
              Commercial &amp; cross-industry research
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl sr sr-up">
              Non-pharma programmes for enterprise buyers, institutional decision-makers, and consumer markets — Americas, EMEA, Africa, and LATAM.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {commercialOfferings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <Link
                    key={offering.to}
                    to={offering.to}
                    className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-200 cursor-pointer sr sr-scale-up hover-lift"
                  >
                    <div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5"
                      aria-hidden
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{offering.summary}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-4">
                      {offering.examples}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all duration-200">
                      Explore segment <ArrowRight className="w-4 h-4" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-cream-dark" ref={linksRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 sr sr-up">
              Related research hubs &amp; industries
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl sr sr-up">
              Start from a healthcare hub, an industry segment, or a global index — depending on your category and geography.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 sr sr-up">
              {HUB_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary font-medium hover:underline cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <details className="mt-8 rounded-xl border border-border bg-card p-6 sr sr-up">
              <summary className="cursor-pointer font-display font-semibold text-foreground list-none flex items-center justify-between gap-2">
                More research guides
                <span className="text-sm font-normal text-muted-foreground">
                  {recoveryLinksWithLabels.length} links
                </span>
              </summary>
              <ul className="grid sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-border">
                {recoveryLinksWithLabels.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="text-sm text-primary hover:underline cursor-pointer">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {SERVICE_FAQ.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-border bg-card px-6 py-4 group"
                >
                  <summary className="cursor-pointer font-medium text-foreground list-none pr-4">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
