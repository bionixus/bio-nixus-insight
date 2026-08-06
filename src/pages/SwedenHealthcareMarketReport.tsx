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
  { name: 'Sweden Healthcare Market Report', href: '/sweden-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs(
  [
    {
      question: 'How big is the Sweden healthcare market in 2026?',
      answer:
        'Sweden’s tax-funded healthcare system spends roughly SEK 650–700 billion annually (~11% of GDP). Care is organised across 21 self-governing regions that hold primary hospital and specialist budgets. The pharmaceutical market is estimated at SEK 55–62 billion (retail + hospital) and medical devices at SEK 28–32 billion in 2026. Population is about 10.6 million, with a high-efficiency acute model (~2.1 hospital beds per 1,000) and strong university-hospital concentration for advanced therapies.',
    },
    {
      question: 'What is the Sweden pharmaceutical market size in 2026?',
      answer:
        'The Swedish pharmaceutical market is estimated at SEK 55–62 billion in 2026 (TLV / LIF estimates spanning retail and hospital channels). Oncology, immunology/biologics, diabetes & obesity (including GLP-1), cardiovascular, and rare diseases are the primary value segments. Biosimilar switching culture is mature, and regional budget cycles plus NT-rådet recommendations materially shape specialty hospital uptake after national reimbursement decisions.',
    },
    {
      question: 'How does Swedish pharmaceutical market access work for new medicines?',
      answer:
        'Typical sequencing is: (1) EMA centralised marketing authorisation or national/MRP via Läkemedelsverket (Swedish Medical Products Agency); (2) TLV health-economic dossier for ambulatory reimbursement into the national benefit scheme (förmånssystemet); (3) TLV Board decision, which may include indication restrictions or risk-sharing conditions; (4) for high-cost specialty hospital products, NT-rådet (New Therapies Council) recommendations that guide regional introduction; (5) formulary and budget adoption across the 21 regions; (6) pharmacy benefit listing and/or regional hospital tendering. Ambulatory and hospital specialty channels diverge for many innovative therapies.',
    },
    {
      question: 'What does TLV evaluate and how long does reimbursement take?',
      answer:
        'TLV (Tandvårds- och läkemedelsförmånsverket) evaluates cost-effectiveness versus a relevant comparator using an ICER-oriented decision framework. Complete ambulatory submissions typically take 3–6 months. Positive decisions can still include stop rules, indication limits, or managed-access conditions. Regional budget adoption after a national recommendation can add 1–12 months depending on the product class and region.',
    },
    {
      question: 'What role does NT-rådet play for hospital specialty products?',
      answer:
        'NT-rådet issues national recommendations for high-cost specialised hospital therapies, often in parallel with or after TLV processes. Regions use those recommendations to time managed introduction programmes, hospital drug-committee decisions, and budget releases. National recommendation is necessary but not always sufficient for rapid uptake across all 21 regions.',
    },
    {
      question: 'What are the largest therapy areas in the Swedish pharmaceutical market?',
      answer:
        'Leading 2026 segments include oncology (SEK 12–15B; NT-rådet managed introduction, CAR-T at university hospitals, precision oncology), immunology & biologics (SEK 9–11B; biosimilar switching; IL-17/23 and JAK inhibitors), diabetes & obesity (SEK 6–8B; GLP-1 growth with TLV and regional budget scrutiny), cardiovascular (SEK 5–7B; high generic penetration; SGLT2 in heart failure), and rare diseases (SEK 4–6B; specialised centres and managed access agreements).',
    },
    {
      question: 'Which hospitals matter most for specialty launch in Sweden?',
      answer:
        'Key academic centres include Karolinska University Hospital (~1,600 beds; national referral, oncology, transplant, rare disease, cell therapy), Sahlgrenska University Hospital in Gothenburg (~1,900 beds), Skåne University Hospital (Lund/Malmö), Uppsala University Hospital (Akademiska), and Linköping University Hospital. University-hospital formulary committees and regional drug programmes are critical commercial gates for specialty products.',
    },
    {
      question: 'How does BioNixus support companies launching in Sweden or expanding from Nordics to MENA?',
      answer:
        'BioNixus provides Sweden and EU5+Nordics market access intelligence — TLV/NT-rådet pathway mapping, regional uptake timing, KOL and hospital formulary research — and bridges Nordic commercial teams into GCC/MENA with SFDA, MOHAP, and tender intelligence. Use this report alongside our Germany, UK, and France healthcare market reports for Nordic–EU sequencing.',
    },
  ],
  'sweden',
);

const REPORT_CONVERSION = getStandaloneReportConfig('/sweden-healthcare-market-report');
const FAQ_SECTION_ID = 'sweden-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: 'https://www.bionixus.com/og-image.png',
    headline:
      'Sweden Healthcare Market Report 2026: Läkemedelsverket, TLV, NT-rådet, and Regional Market Access Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-08-06',
    dateModified: '2026-08-06',
    mainEntityOfPage: 'https://www.bionixus.com/sweden-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/sweden-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle:
      'Sweden Healthcare Market Report 2026 | TLV, NT-rådet & Nordic Pharma Access | BioNixus',
    pageMetaDescription:
      'Sweden healthcare market 2026: Läkemedelsverket registration, TLV reimbursement, NT-rådet specialty guidance, 21-region formulary uptake, and BioNixus Nordic–MENA intelligence.',
    countryName: 'Sweden',
    marketSlug: 'sweden',
    publishedDate: '2026-08-06',
    modifiedDate: '2026-08-06',
  }),
];

const SwedenHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Sweden Healthcare Market Report 2026 | BioNixus"
      description="Sweden healthcare market 2026: Läkemedelsverket, TLV reimbursement, NT-rådet specialty guidance, 21-region formulary uptake, and BioNixus Nordic–MENA intelligence."
      canonical="https://www.bionixus.com/sweden-healthcare-market-report"
      jsonLd={jsonLd}
    />
    <ReportReadingProgress progressId="report-rp-sweden-healthcare-market-report" />
    <main>
      <div className="section-padding pt-24 pb-4">
        <div className="container-wide">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>
      <ReportPremiumHero
        title="Sweden Healthcare Market Report 2026: TLV Access, NT-rådet Specialty Guidance, and Nordic Commercial Intelligence"
        description="BioNixus supports European and Nordic pharmaceutical and medical device teams with Sweden market access intelligence — and bridges Nordic launches into GCC and MENA."
        config={REPORT_CONVERSION}
        marketSlug="sweden"
        countryName="Sweden"
        stats={[
          { value: 'SEK 650–700B', label: 'Total health expenditure' },
          { value: 'SEK 55–62B', label: 'Pharmaceutical market 2026' },
          { value: 'SEK 28–32B', label: 'Medical devices market 2026' },
        ]}
      />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Executive Summary
            </h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">SEK 650–700B</p>
                  <p className="text-xs text-muted-foreground mt-1">Health expenditure</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">SEK 55–62B</p>
                  <p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">21 regions</p>
                  <p className="text-xs text-muted-foreground mt-1">Primary budget holders</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sweden combines EMA (or Läkemedelsverket) marketing authorisation with a dual access
              pathway: TLV decides ambulatory benefit-scheme listing on cost-effectiveness grounds,
              while NT-rådet recommendations shape regional introduction of high-cost hospital
              specialties. Unlike free-pricing-then-HTA sequences elsewhere in Europe, Swedish
              commercial uptake depends on TLV outcomes and regional budget adoption across 21
              regions — so national recommendation is necessary but not always sufficient for rapid
              hospital formulary penetration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For GCC/MENA intelligence, see our{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC Pharmaceutical Market Report 2026
              </Link>
              .
            </p>
          </div>
        </section>
        <MarketIntelligenceSections marketSlug="sweden" countryName="Sweden" variant="healthcare" />

        <section className="section-padding" id="payer-reimbursement">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Sweden Payer and Access Landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tax-funded regional budgets dominate hospital and specialist care. TLV decisions
              determine outpatient reimbursement and co-payment rules; regions retain discretion on
              hospital formulary timing and specialty drug budgets.
            </p>
            <div className="space-y-4">
              {[
                {
                  label: 'Läkemedelsverket / EMA authorisation',
                  body: 'Sweden is an active reference or concerned member state in European procedures. Marketing authorisation is the gate into TLV ambulatory assessment and hospital specialty pathways.',
                },
                {
                  label: 'TLV förmånssystemet listing',
                  body: 'Ambulatory products require a TLV health-economic dossier. Decisions may include indication restrictions, stop rules, or risk-sharing. Typical timelines are 3–6 months after a complete submission.',
                },
                {
                  label: 'NT-rådet managed introduction',
                  body: 'High-cost specialist hospital therapies are guided by New Therapies Council recommendations that shape regional introduction programmes and university-hospital uptake.',
                },
                {
                  label: '21-region formulary adoption',
                  body: 'Regional drug committees and budget cycles can add 1–12 months after national recommendation. Retail pharmacy and hospital specialty channels diverge for many innovative therapies.',
                },
              ].map(({ label, body }) => (
                <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Related BioNixus market intelligence
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus runs healthcare and pharmaceutical market research across Europe. Benchmark
              Sweden against our{' '}
              <Link to="/germany-healthcare-market-report" className="text-primary hover:underline font-medium">
                Germany healthcare market report
              </Link>{' '}
              and{' '}
              <Link to="/uk-healthcare-market-report" className="text-primary hover:underline font-medium">
                UK healthcare market report
              </Link>
              , or start from the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">
                global healthcare market research hub
              </Link>
              .
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <FAQSection
          sectionId={FAQ_SECTION_ID}
          title="Sweden healthcare market 2026 — TLV, NT-rådet, regions, and Nordic access FAQ"
          items={REPORT_FAQ_ITEMS}
          className="bg-muted/30"
        />
      </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
    </main>
    <Footer />
  </div>
);

export default SwedenHealthcareMarketReport;
