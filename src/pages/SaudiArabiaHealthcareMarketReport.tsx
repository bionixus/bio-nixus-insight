import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { MarketIntelligenceSections } from '@/components/market-intelligence';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';
import { finalizeStandaloneHealthcareFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Saudi Arabia Healthcare Market Report', href: '/saudi-arabia-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Saudi Arabia healthcare market in 2026?',
    answer:
      'The Saudi Arabia healthcare market is estimated at USD 55–65 billion in 2026, making it the largest healthcare market in the Arab world and the GCC. The market is projected to reach USD 90–110 billion by 2030 as Vision 2030\'s SAR 500 billion healthcare investment program delivers new hospital capacity, private sector participation, and insurance-funded consumption. Government spend accounts for approximately 62% of total healthcare expenditure; the private sector accounts for 38% and is growing rapidly.',
  },
  {
    question: 'What is the Saudi Arabia pharmaceutical market size in 2026?',
    answer:
      'The Saudi Arabia pharmaceutical market is estimated at USD 8.5–9.5 billion in 2026, making it the largest pharmaceutical market in the GCC and among the top 20 globally. The hospital channel accounts for approximately 42% of spend through NUPCO centralized procurement. Retail pharmacy and private hospital channels account for the remainder. Oncology, diabetes, cardiovascular, and immunology/biologics are the four largest therapy areas by value. The GLP-1 receptor agonist category is the fastest-growing individual drug class.',
  },
  {
    question: 'How does SFDA drug registration work in Saudi Arabia?',
    answer:
      'The Saudi Food and Drug Authority (SFDA) is responsible for pharmaceutical registration, pricing, and post-market surveillance in Saudi Arabia. New molecular entities require full CTD dossier submission with 18–36 month review timelines for innovative products; generics typically complete in 12–24 months. SFDA has implemented an accelerated pathway for products with demonstrated clinical need and international approval. Pricing is regulated — SFDA sets maximum retail prices based on reference country benchmarks. BioNixus tracks SFDA registration status, pricing approvals, and NUPCO formulary listing outcomes across all therapeutic categories.',
  },
  {
    question: 'What is Vision 2030\'s impact on the Saudi Arabia pharmaceutical and healthcare market?',
    answer:
      'Vision 2030 is the single most important structural driver of Saudi Arabia\'s healthcare market. Key commercial implications include: (1) SAR 500 billion healthcare infrastructure investment — adding 30,000+ hospital beds, driving pharmaceutical and device procurement at scale; (2) local pharmaceutical manufacturing target of 40% by 2030 — creating joint venture and technology transfer opportunities; (3) private sector healthcare participation target of 35% — expanding insurance-funded prescription channels; (4) SFDA regulatory reform — faster approval timelines and alignment with international standards.',
  },
  {
    question: 'What are the fastest-growing therapy areas in Saudi Arabia?',
    answer:
      'The five fastest-growing Saudi Arabia pharmaceutical therapy areas are: (1) Oncology — KFSH&RC expansion and 14+ new cancer center openings through 2030; (2) GLP-1/diabetes/obesity — GLP-1 prescriptions growing at 40%+ annually; (3) Immunology and biologics — biosimilar adoption accelerating post-SFDA approvals; (4) Rare diseases — Saudi Genome Program and high genetic disease burden driving orphan drug market; (5) Precision medicine and cell therapy — KFSH&RC and King Abdullah International Medical Research Center leading clinical programs.',
  },
  {
    question: 'How does BioNixus track Saudi Arabia healthcare market data?',
    answer:
      'BioNixus tracks Saudi Arabia pharmaceutical and medical device consumption through hospital procurement records at MOH, NGHA, and private hospital networks, pharmacy dispensing data, physician panel surveys across all major specialties, and primary research with NUPCO procurement, SFDA contacts, and hospital formulary committees. Our Saudi Arabia data provides consumption intelligence at hospital, department, indication, and patient level — the granularity that commercial teams need for NUPCO dossier development, KAM prioritization, and real-world evidence programs. BioNixus has operated Saudi Arabia research programs continuously since 2012.',
  },
], 'saudi-arabia');

const REPORT_CONVERSION = getStandaloneReportConfig('/saudi-arabia-healthcare-market-report');
const FAQ_SECTION_ID = 'saudi-arabia-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Saudi Arabia Healthcare Market Report 2026: Pharma, Vision 2030, and Commercial Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/saudi-arabia-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/saudi-arabia-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Saudi Arabia Healthcare Market Report 2026 | USD 60B Market, Pharma & Vision 2030 | BioNixus",
    pageMetaDescription: "Saudi Arabia healthcare market at USD 55–65B in 2026. Pharmaceutical market (USD 9B), SFDA registration, NUPCO procurement, Vision 2030 investment pipeline, and BioNixus hospital-level consumption intelligence.",
    countryName: "Saudi Arabia",
    marketSlug: "saudi-arabia",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const SaudiArabiaHealthcareMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Saudi Arabia Healthcare Market Report 2026 | USD 60B Market, Pharma & Vision 2030 | BioNixus"
        description="Saudi Arabia healthcare market at USD 55–65B in 2026. Pharmaceutical market (USD 9B), SFDA registration, NUPCO procurement, Vision 2030 investment pipeline, and BioNixus hospital-level consumption intelligence."
        canonical="https://www.bionixus.com/saudi-arabia-healthcare-market-report"
        jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Saudi Arabia Healthcare Market Report 2026 | USD 60B Market, Pharma & Vision 2030 | BioNixus",
    pageMetaDescription: "Saudi Arabia healthcare market at USD 55–65B in 2026. Pharmaceutical market (USD 9B), SFDA registration, NUPCO procurement, Vision 2030 investment pipeline, and BioNixus hospital-level consumption intelligence.",
    countryName: "Saudi Arabia",
    marketSlug: "saudi-arabia",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
      />
      <ReportReadingProgress progressId="report-rp-saudi-arabia-healthcare-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
        </div>

                <ReportPremiumHero
          title="Saudi Arabia Healthcare Market Report 2026: Market Size, Pharmaceutical Intelligence, and Vision 2030 Strategy"
          description="BioNixus delivers Saudi Arabia pharmaceutical consumption intelligence, NUPCO procurement tracking, SFDA registration monitoring, and primary HCP research across MOH, NGHA, and private hospital networks — supporting commercial, medical affairs, and market access teams across all major therapeutic areas."
          config={REPORT_CONVERSION}
          marketSlug="saudi-arabia"
          countryName="Saudi Arabia"
          stats={[
            { value: '~$60B', label: 'Saudi Arabia healthcare market 2026' },
            { value: '~$9B', label: 'Pharmaceutical market 2026' },
            { value: '7.5%', label: 'Pharma CAGR 2026–2030' },
          ]}
        />

        <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div><p className="text-3xl font-display font-bold text-primary">~$60B</p><p className="text-xs text-muted-foreground mt-1">Saudi Arabia healthcare market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">~$9B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">7.5%</p><p className="text-xs text-muted-foreground mt-1">Pharma CAGR 2026–2030</p></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Saudi Arabia is the GCC's dominant pharmaceutical market — accounting for approximately 60%
              of total GCC pharma spend — and the most important commercial priority for any company with
              a Middle East strategy. NUPCO's centralized procurement system, SFDA's evolving regulatory
              framework, and Vision 2030's unprecedented healthcare infrastructure investment create a
              dynamic commercial environment that rewards deep market intelligence and account-level strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BioNixus has tracked Saudi Arabia pharmaceutical consumption since 2012. Our data covers
              hospital-level, department-level, indication-level, and patient-level consumption — the
              intelligence resolution required for NUPCO formulary dossiers, key account management
              prioritization, and real-world evidence programs in the Kingdom.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For deeper intelligence, see:{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC Pharmaceutical Market Report 2026
              </Link>
              {', '}
              <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary hover:underline font-medium">
                SFDA Market Access Strategy
              </Link>
              {', and '}
              <Link to="/saudi-arabia-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Saudi Arabia Medical Devices Market Report
              </Link>
              . For therapy-segmented oncology and diabetes market access briefings, see the{' '}
              <Link to="/market-reports/saudi-arabia-oncology-market-report" className="text-primary hover:underline font-medium">
                Saudi Arabia oncology market research report
              </Link>
              {' '}and{' '}
              <Link to="/market-reports/saudi-arabia-diabetes-market-report" className="text-primary hover:underline font-medium">
                Saudi Arabia diabetes market research report
              </Link>
              .
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <MarketIntelligenceSections marketSlug="saudi-arabia" countryName="Saudi Arabia" variant="healthcare" />

        <section className="section-padding" id="therapy-areas">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Saudi Arabia Pharmaceutical Therapy Areas 2026</h2>
            <div className="space-y-4">
              {[
                { area: 'Oncology', size: 'USD 1.1–1.3B', detail: 'Fastest-growing therapy area. KFSH&RC, KAMC, and 14 new cancer centers under Vision 2030 are expanding infusion capacity. BioNixus tracks oncology consumption at hospital, department, and infusion unit level.' },
                { area: 'Diabetes & GLP-1', size: 'USD 1.0–1.2B', detail: '18% adult diabetes prevalence — highest in GCC. GLP-1 receptor agonist prescriptions growing at 40%+ annually. BioNixus tracks GLP-1 initiation rates, dose escalation, and competitive brand share at physician level.' },
                { area: 'Cardiovascular', size: 'USD 1.0–1.1B', detail: 'Largest volume category by prescriptions. NUPCO centralized procurement and generic substitution create strong pricing dynamics. Branded differentiation requires cardiologist-level evidence strategy.' },
                { area: 'Immunology & Biologics', size: 'USD 0.8–0.9B', detail: '14 biosimilar approvals between 2023–2025 are accelerating biosimilar adoption in rheumatology, gastroenterology, and dermatology. BioNixus tracks switch rates and originator defense strategies at account level.' },
                { area: 'Rare Diseases', size: 'USD 0.4–0.5B', detail: 'Saudi Genome Program and genetic disease burden create a large and growing rare disease market. Patient-level consumption data at KFSH&RC and KAMC specialist centers is essential for orphan drug programs.' },
              ].map(({ area, size, detail }) => (
                <div key={area} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                  <div className="flex flex-wrap gap-2 items-center mb-2">
                    <h3 className="text-base font-semibold text-foreground">{area}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{size}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-dark" id="nupco">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              NUPCO: Saudi Arabia's Central Pharmaceutical Procurement Authority
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The National Unified Procurement Company (NUPCO) manages centralized pharmaceutical and
              medical device procurement for all MOH hospitals and a growing number of NGHA facilities —
              approximately 240+ hospital accounts. NUPCO tender outcomes determine formulary access and
              pricing across the government channel, which accounts for ~42% of total Saudi pharmaceutical spend.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Tender frequency', value: 'Annual or biannual by drug category; tender schedules vary by therapeutic area and supplier track record' },
                { label: 'Evaluation criteria', value: 'Price (significant weight), clinical evidence dossier, local manufacturing content, supply security, and post-market commitments' },
                { label: 'BioNixus NUPCO intelligence', value: 'Tender schedule forecasting, historical award data, competing product pricing, formulary committee member profiles, and clinical dossier evidence gap analysis' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="shrink-0 w-40 text-xs font-semibold text-primary pt-0.5">{label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Saudi Arabia healthcare market 2026 — pharma, SFDA, NUPCO, Vision 2030, and commercial strategy FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />
        </ReportContentWithAside>
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
      <Footer />
    </div>
  );
};

export default SaudiArabiaHealthcareMarketReport;
