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

const services: ServiceItem[] = [
  {
    slug: 'quantitative-research',
    title: 'Quantitative Healthcare Research & Physician Surveys',
    summary:
      'Large-scale statistical insights from physicians and healthcare professionals across 17+ EMEA countries. Online and telephone surveys with defined sample sizes (n=50–500+) across multiple specialties.',
    icon: BarChart3,
  },
  {
    slug: 'qualitative-research',
    title: 'Qualitative Pharmaceutical Research & Expert Insights',
    summary:
      'In-depth interviews, focus groups, and advisory boards with KOLs, treating physicians, payers, and hospital decision-makers across UK, Europe, and MENA.',
    icon: Users,
  },
  {
    slug: 'market-access',
    title: 'Market Access & HTA Strategy',
    summary:
      'Evidence-based pricing and payer engagement for UK, EU5, and GCC markets. HTA submission support for NICE, G-BA, HAS, and Gulf health authorities.',
    icon: Landmark,
  },
  {
    slug: 'competitive-intelligence',
    title: 'Competitive Intelligence',
    summary:
      'Real-time competitor monitoring, pipeline analysis, landscape assessments, launch readiness evaluations, and biosimilar impact studies.',
    icon: Search,
  },
  {
    slug: 'clinical-trial-support',
    title: 'Clinical Trial Support',
    summary:
      'Site identification, investigator profiling, patient recruitment feasibility, protocol feedback from treating physicians, and post-launch real-world evidence.',
    icon: Microscope,
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'KOL & Stakeholder Mapping',
    summary:
      'Key Opinion Leader identification and engagement across UK, Europe, and MENA. Ethnographic research, patient journey mapping, and treatment pathway analysis.',
    icon: Map,
  },
];

const HUB_LINKS = [
  { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
  { to: '/market-research', label: 'Market research services overview' },
  { to: '/healthcare-market-research/saudi-arabia', label: 'Saudi Arabia pharmaceutical research' },
  { to: '/healthcare-market-research/uae', label: 'UAE healthcare market research' },
  { to: '/global-websites', label: 'Global websites directory' },
  { to: '/case-studies', label: 'Healthcare case studies' },
] as const;

const SERVICE_FAQ = [
  {
    question: 'Which BioNixus service fits a pre-launch pharmaceutical program?',
    answer:
      'Most launch teams combine quantitative physician surveys with qualitative KOL depth and market access support. We scope modules to your phase—feasibility, positioning, pricing, or HTA—and sequence fieldwork to match your governance calendar.',
  },
  {
    question: 'Can we commission one service or an integrated program?',
    answer:
      'Both. Each card below links to a dedicated scope page. You can run a standalone quantitative wave, a qualitative advisory board, or a multi-market program where modules share sampling logic and reporting templates.',
  },
  {
    question: 'Which geographies do these services cover?',
    answer:
      'BioNixus executes across 17+ EMEA and MENA markets, including the UK, EU5, GCC, Egypt, and North Africa, with bilingual Arabic–English field teams where required.',
  },
  {
    question: 'How quickly can we receive a proposal?',
    answer:
      'Share your objective, audience, and timeline via the contact form. We typically return a tailored methodology outline within one business day.',
  },
] as const;

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
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const recoveryLinksWithLabels = serviceRecoveryPaths.map((path) => ({
  path,
  label: pathToLabel(path),
}));

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
        <title>Healthcare Market Research Services in EMEA | BioNixus</title>
        <meta
          name="description"
          content="Quantitative, qualitative, market access, KOL mapping, competitive intelligence, and clinical trial support across the UK, Europe, GCC, and MENA."
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
              <Briefcase className="w-4 h-4" aria-hidden />
              Our Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 max-w-4xl leading-tight sr sr-up sr-line revealed">
              Comprehensive Healthcare Market Research Services for EMEA
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mb-8 sr sr-up revealed">
              From large-scale physician surveys to strategic market access consulting, BioNixus delivers end-to-end pharmaceutical research across 17+ countries in Europe, the Middle East, and North Africa.
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
              Modular research for pharmaceutical teams
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <p className="sr sr-left">
                Each service below links to a dedicated page with scope notes, typical deliverables, and geographic nuance. Quantitative programs emphasize representative sampling, transparent quotas, and statistical reporting that leadership teams can defend in governance reviews.
              </p>
              <p className="sr sr-right">
                Qualitative programs emphasize discussion guides that elicit clinical behavior—not slogans—and synthesis that converts transcripts into decisions. Market access, competitive intelligence, and KOL modules can be sequenced to your launch calendar.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-12" ref={gridRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((svc) => {
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
                    <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {svc.title}
                    </h2>
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

        <section className="section-padding py-12 bg-cream-dark" ref={linksRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 sr sr-up">
              Related research hubs
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl sr sr-up">
              Explore regional hubs and guides most often used alongside these service modules.
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
