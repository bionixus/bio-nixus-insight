import { Link } from 'react-router-dom';
import { useInitialData } from '@/App';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { CTASection } from '@/components/shared/CTASection';
import { buildHubPageSchemas } from '@/lib/seo/schemas';
import { COUNTRY_CONFIGS } from '@/lib/constants/countries';

const HUB_FAQS = [
  {
    question: 'What is pharmaceutical market research in MENA, UK, and Europe?',
    answer:
      'Pharmaceutical market research is the structured process of gathering and analyzing evidence on healthcare stakeholders, treatment behavior, and market dynamics. BioNixus applies this process across MENA, UK, and Europe to help teams make evidence-based decisions for launch, growth, and access planning.',
  },
  {
    question: 'Which methods does BioNixus use for healthcare market intelligence?',
    answer:
      'BioNixus combines quantitative and qualitative methods, including CATI, CAPI, online surveys, in-depth interviews, focus groups, and KOL mapping. Method selection is aligned to the decision question, timeline, and target stakeholder group.',
  },
  {
    question: 'Does BioNixus support multilingual and cross-country research programs?',
    answer:
      'Yes. BioNixus supports multilingual and multi-market execution with quality controls for translation, recruitment, and analysis consistency so teams can compare results across countries while preserving local relevance.',
  },
  {
    question: 'How quickly can BioNixus deliver a proposal?',
    answer:
      'Most proposals are delivered quickly after scope alignment, including objective framing, target respondents, method recommendation, and realistic timeline options aligned to your commercial or access decision window.',
  },
  {
    question: 'Which therapy areas are covered by BioNixus healthcare research?',
    answer:
      'BioNixus supports major therapy areas including oncology, diabetes, respiratory disease, immunology, biologics, and vaccines, with study designs customized to local stakeholder dynamics and evidence expectations.',
  },
  {
    question: 'What compliance standards are followed in BioNixus projects?',
    answer:
      'BioNixus aligns projects with ESOMAR standards, GDPR data requirements, and local market context including SFDA (KSA), DOH/MOHAP (UAE), and MHRA/NICE-sensitive UK considerations when relevant.',
  },
];

export default function HubPage() {
  const { data } = useInitialData();
  const hubContent =
    data.pageType === 'hub' && data.hubContent && typeof data.hubContent === 'object'
      ? (data.hubContent as Record<string, unknown>)
      : null;

  const countries = Object.values(COUNTRY_CONFIGS);
  const hubFaqItems =
    Array.isArray(hubContent?.faq) && hubContent?.faq.length > 0
      ? (hubContent.faq as { question: string; answer: string }[])
      : HUB_FAQS;
  const heroTitle =
    typeof hubContent?.title === 'string' && hubContent.title.length > 0
      ? hubContent.title
      : 'Healthcare Market Research Across MENA, UK & Europe';
  const heroDescription =
    typeof hubContent?.metaDescription === 'string' && hubContent.metaDescription.length > 0
      ? hubContent.metaDescription
      : 'BioNixus delivers pharmaceutical market intelligence for commercial, medical, and access teams across priority healthcare markets.';
  const jsonLd = buildHubPageSchemas(hubFaqItems);
  const trustSignals =
    Array.isArray(hubContent?.trustSignals) && hubContent.trustSignals.length > 0
      ? (hubContent.trustSignals as { label: string; value: string }[])
      : [
        { label: 'UK Registration', value: '14408704' },
        { label: 'Core Markets', value: 'MENA, UK, Europe' },
        { label: 'Methods', value: 'CATI, CAPI, IDIs, Quant' },
        { label: 'Compliance', value: 'ESOMAR / GDPR' },
        { label: 'Coverage Model', value: 'Hub-and-spoke regional execution' },
      ];
  const services =
    Array.isArray(hubContent?.servicesOverview) && hubContent.servicesOverview.length > 0
      ? (hubContent.servicesOverview as { title?: string; description?: string; slug?: string }[])
      : [
        {
          title: 'Quantitative Research',
          description: 'Decision-ready survey programs for segmentation, adoption, and forecast confidence.',
          slug: 'quantitative-research',
        },
        {
          title: 'Qualitative Research',
          description: 'IDIs and moderated interviews to uncover stakeholder rationale and barriers.',
          slug: 'qualitative-research',
        },
        {
          title: 'KOL Mapping',
          description: 'Influence network mapping for expert engagement and evidence dissemination planning.',
          slug: 'kol-mapping',
        },
        {
          title: 'Physician Insights',
          description: 'Structured physician intelligence to support launch planning and brand optimization.',
          slug: 'physician-insights',
        },
        {
          title: 'Market Access',
          description: 'Access-focused evidence programs aligned to payer and institutional expectations.',
          slug: 'market-access',
        },
      ];

  return (
    <main>
      <SEOHead
        title="Healthcare Market Research MENA & Europe | BioNixus"
        description="BioNixus delivers pharmaceutical healthcare market research across MENA, UK, and Europe with decision-ready quantitative and qualitative insights."
        canonical="/healthcare-market-research"
        jsonLd={jsonLd}
      />

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
        ]}
      />

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container-wide max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            {heroTitle}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl">
            {heroDescription}
          </p>
        </div>
      </section>

      <section className="py-10 bg-muted/20">
        <div className="container-wide max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {trustSignals.map((item) => (
            <article key={`${item.label}-${item.value}`} className="rounded-xl border border-border bg-card p-4">
              <h2 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{item.label}</h2>
              <p className="text-base font-semibold text-foreground">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Regional Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {countries.map((country) => (
              <Link
                key={country.slug}
                to={`/healthcare-market-research/${country.slug}`}
                className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{country.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{country.metaSuffix}</p>
                <span className="text-primary text-sm font-medium">
                  Market research in {country.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Healthcare Research Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={`${service.slug || service.title}`}
                to={
                  service.slug
                    ? `/healthcare-market-research/services/${service.slug}`
                    : '/healthcare-market-research/services/market-access'
                }
                className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title || 'Research service'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description || 'Specialized pharmaceutical market research support for strategic decisions.'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Therapy Area Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {['oncology', 'diabetes', 'respiratory', 'immunology', 'biologics', 'vaccines'].map((area) => (
              <Link
                key={area}
                to={`/healthcare-market-research/therapy/${area}`}
                className="px-4 py-2 rounded-full border border-border bg-background text-sm capitalize hover:border-primary/40 transition-colors"
              >
                {area} market research
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/10">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Featured Guides & Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              to="/blog/middle-east-healthcare-market-statistics-2025"
              className="block p-5 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-primary mb-2">MENA Healthcare Statistics 2025</h3>
              <p className="text-sm text-muted-foreground">Comprehensive market data, disease prevalence, and growth metrics.</p>
            </Link>
            <Link
              to="/blog/sfda-drug-registration-guide"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">SFDA Drug Registration Guide</h3>
              <p className="text-sm text-muted-foreground">Master the Saudi regulatory landscape and pathway requirements.</p>
            </Link>
            <Link
              to="/blog/market-access-strategy-uae"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">UAE Market Access Strategy</h3>
              <p className="text-sm text-muted-foreground">Navigate DOH, DHA, and MOHAP formulary inclusion.</p>
            </Link>
            <Link
              to="/blog/kol-mapping-pharma-middle-east"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">KOL Mapping in the GCC</h3>
              <p className="text-sm text-muted-foreground">Identifying true clinical influencers in the Middle East.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection items={hubFaqItems} />
      <CTASection variant="research-proposal" />
    </main>
  );
}

