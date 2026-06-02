import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { MarketIntelligenceSections } from '@/components/market-intelligence';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';
import { finalizeStandaloneHealthcareFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Japan Healthcare Market Report', href: '/japan-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Japan healthcare market in 2026?',
    answer: 'The Japanese healthcare market is estimated at USD 500–560 billion in 2026, making it the third-largest globally after the United States and China. Japan\'s healthcare system is a universal National Health Insurance (NHI) scheme covering all residents, administered through employer-based insurance societies (Kenpo Kumiai), national health insurance (Kokumin Kenko Hoken), and the Late-Stage Medical Care System for those 75+. Japan has the world\'s oldest population — approximately 29% of the population is 65 or older — creating the highest per-capita healthcare demand of any major economy. Healthcare expenditure represents approximately 11.3% of GDP.',
  },
  {
    question: 'What is the Japan pharmaceutical market size in 2026?',
    answer: 'The Japanese pharmaceutical market is estimated at USD 85–95 billion in 2026 — the world\'s third-largest by value. PMDA (Pharmaceuticals and Medical Devices Agency) regulates drug approval in Japan, conducting quality, safety, and efficacy reviews. MHLW (Ministry of Health, Labour and Welfare) makes final approval decisions and determines NHI reimbursement prices. Japan operates a biannual NHI drug price revision system — prices are revised every two years under regular revision cycles, with exceptional revisions for products exceeding expected sales volumes (the "market expansion re-pricing" mechanism, which can result in significant price cuts for high-volume products). Generic penetration in Japan has risen from ~25% (2012) to ~80%+ by volume (2026) following aggressive government policies.',
  },
  {
    question: 'How does PMDA drug approval and NHI pricing work in Japan?',
    answer: 'Japan\'s pharmaceutical market access process: (1) PMDA review — standard review approximately 12 months for new molecular entities; the Sakigake (Breakthrough Therapy) designation provides priority review in 6 months for products addressing unmet needs. Japan has reduced the historical "drug lag" — the delay between global and Japan approvals — from 4+ years to under 1 year for many breakthrough products; (2) MHLW NHI listing — following PMDA approval, MHLW prices new drugs using international reference pricing (US, UK, Germany, France) or comparator pricing. Premium pricing (加算) is awarded for high medical necessity, innovativeness, or paediatric indications; (3) Biannual price revision — NHI prices are revised downward every two years; high-volume products face additional extraordinary price revisions.',
  },
  {
    question: 'What are the largest therapy areas in the Japan pharmaceutical market?',
    answer: 'The five largest therapy areas in the Japanese pharmaceutical market by NHI spend are: oncology (Japan\'s aging population creates the world\'s highest per-capita cancer incidence; checkpoint inhibitors, targeted therapies — Opdivo/nivolumab was among the world\'s largest launches in Japan); immunology and autoimmune (biologics and JAK inhibitors in rheumatoid arthritis, IBD — Japan has high RA prevalence); cardiovascular (antihypertensives, statins at high volume — Japan has universal statin prescribing for hypercholesterolaemia); diabetes (insulin analogues, GLP-1 agonists, SGLT-2 inhibitors — 11M+ diabetic patients); and CNS/neurology (antidepressants, Alzheimer\'s drugs — early adopter of Lecanemab with NHI coverage).',
  },
  {
    question: 'What is Japan\'s significance as a pharmaceutical innovation hub?',
    answer: 'Japan is a major pharmaceutical innovation hub, home to global companies including Takeda, Eisai, Astellas, Daiichi Sankyo, Otsuka, Shionogi, and Sumitomo Pharma. Japan\'s regulatory framework has aligned with ICH (International Council for Harmonisation) standards — enabling simultaneous global development. Japan has pioneered cell and gene therapy regulation (PMDA established a specific unit for regenerative medicine) and is among the first countries globally to approve CAR-T therapies, gene therapies, and iPS cell-derived therapies. Japan\'s AMED (Japan Agency for Medical Research and Development) provides significant research funding for clinical development.',
  },
  {
    question: 'How does BioNixus serve Japan-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Japanese pharmaceutical and medical device companies in expanding into GCC and MENA markets. Japanese pharma companies (particularly Takeda, Otsuka, Eisai, and Daiichi Sankyo) have significant MENA expansion programs. BioNixus provides SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence; hospital-level consumption data; physician panel surveys across all major therapeutic areas; and comparative Japan vs. GCC market intelligence for global commercial planning.',
  },
], 'japan');

const REPORT_CONVERSION = getStandaloneReportConfig('/japan-healthcare-market-report');
const FAQ_SECTION_ID = 'japan-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Japan Healthcare Market Report 2026: PMDA, NHI Pricing, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/japan-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/japan-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Japan Healthcare Market Report 2026 | PMDA, NHI Drug Pricing & Pharmaceutical Market Intelligence | BioNixus",
    pageMetaDescription: "Japan healthcare market at USD 530B in 2026 — world's third largest. PMDA Sakigake approval, NHI biannual price revision, aging population dynamics, world's third-largest pharma market, and BioNixus GCC intelligence.",
    countryName: "Japan",
    marketSlug: "japan",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const JapanHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Japan Healthcare Market Report 2026 | PMDA, NHI Drug Pricing & Pharmaceutical Market Intelligence | BioNixus"
      description="Japan healthcare market at USD 530B in 2026 — world's third largest. PMDA Sakigake approval, NHI biannual price revision, aging population dynamics, world's third-largest pharma market, and BioNixus GCC intelligence."
      canonical="https://www.bionixus.com/japan-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-japan-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Japan Healthcare Market Report 2026: PMDA Approval, NHI Pricing, and Pharmaceutical Market Intelligence"
          description="BioNixus serves Japanese pharmaceutical and medical device companies with GCC and MENA market intelligence — and provides Japan market context for global commercial teams planning Asia-Pacific and multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="japan"
          countryName="Japan"
          stats={[
            { value: '~$530B', label: 'Japan healthcare market 2026' },
            { value: '~$90B', label: 'Pharmaceutical market 2026' },
            { value: '~$40B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$530B</p><p className="text-xs text-muted-foreground mt-1">Japan healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$90B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$40B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Japan is the world's third-largest pharmaceutical market and the leading market for aging population-driven healthcare demand. PMDA's Sakigake pathway has largely eliminated Japan drug lag; the biannual NHI price revision system and market expansion re-pricing remain the defining commercial headwinds for high-volume products.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
              <MarketIntelligenceSections marketSlug="japan" countryName="Japan" variant="healthcare" />

        <section className="section-padding" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Related BioNixus market intelligence</h2>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus runs healthcare and pharmaceutical market research across Asia-Pacific. Benchmark Japan against our{' '}
              <Link to="/china-healthcare-market-report" className="text-primary hover:underline font-medium">China healthcare market report</Link>{' '}and{' '}
              <Link to="/south-korea-healthcare-market-report" className="text-primary hover:underline font-medium">South Korea healthcare market report</Link>, or start from the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">global healthcare market research hub</Link>{' '}and our{' '}
              <Link to="/market-research-healthcare" className="text-primary hover:underline font-medium">healthcare market research services</Link>. For therapy-segmented demand and access analysis, see our{' '}
              <Link to="/pharmaceutical-therapy-areas" className="text-primary hover:underline font-medium">pharmaceutical therapy-area coverage</Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Japan healthcare market 2026 — PMDA, NHI pricing, Sakigake, biannual price revision, and pharma FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default JapanHealthcareMarketReport;
