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

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'South Korea Healthcare Market Report', href: '/south-korea-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the South Korea healthcare market in 2026?',
    answer: 'The South Korean healthcare market is estimated at USD 110–125 billion in 2026, representing approximately 9.7% of GDP. South Korea operates the NHIS (National Health Insurance Service), a single-payer universal insurance scheme covering the entire population, with copayments varying by care type. HIRA (Health Insurance Review and Assessment Service) reviews insurance claims and evaluates health technologies for coverage. South Korea has one of the world\'s highest medical utilisation rates — Koreans average approximately 16 outpatient visits per year — creating exceptional prescription drug and diagnostic device demand per capita.',
  },
  {
    question: 'What is the South Korea pharmaceutical market size in 2026?',
    answer: 'The South Korean pharmaceutical market is estimated at USD 22–26 billion in 2026. MFDS (Ministry of Food and Drug Safety) regulates pharmaceutical registration and approval. HIRA conducts clinical benefit assessments for new drugs seeking NHIS coverage, while NHIS negotiates reimbursement prices. Korea has developed a significant domestic biopharmaceutical industry — Samsung Biologics (CDMO), Celltrion (biosimilars), and Daewoong Pharmaceutical (botulinum toxins, biosimilars) are global players. Korea was among the first countries to launch Celltrion\'s biosimilar infliximab (Remsima) globally, and Korean biosimilar companies supply GCC markets.',
  },
  {
    question: 'How does HIRA and NHIS market access work for pharmaceuticals in Korea?',
    answer: 'Korea\'s pharmaceutical market access process: (1) MFDS approval — Korea increasingly accepts EMA/FDA approval data under mutual recognition principles, reducing duplicative clinical requirements; (2) HIRA clinical assessment — HIRA evaluates whether the new drug demonstrates clinical benefit versus comparator; (3) NHIS reimbursement negotiation — NHIS negotiates price with manufacturer if HIRA clinical assessment is positive. Korea uses cost-effectiveness analysis (ICER) as part of the HIRA value assessment — medicines not meeting the threshold may receive conditional or restricted coverage. Risk-sharing agreements (RSAs) are common for high-cost products. Korea also has an Early Entry Assessment (EEA) pathway enabling patients to access promising treatments before full NHIS coverage.',
  },
  {
    question: 'What are the largest therapy areas in the South Korea pharmaceutical market?',
    answer: 'The five largest therapy areas in the Korean pharmaceutical market by NHIS expenditure are: oncology (Korea has among the world\'s highest cancer incidence rates per capita — gastric cancer, colorectal cancer, thyroid cancer; major NHIS investment in immuno-oncology); immunology and biologics (biosimilar leadership — Celltrion, Samsung Bioepis dominate biosimilar supply domestically and export globally); cardiovascular (high-volume generic sector; branded differentiation in heart failure and anticoagulation); diabetes (GLP-1 agonists growing; high insulin volume); and CNS/psychiatry (high antidepressant and antipsychotic prescribing rates). Korea is a significant clinical trial hub — Samsung Medical Centre, Asan Medical Centre, and Seoul National University Hospital are among Asia\'s most active clinical trial sites.',
  },
  {
    question: 'What is South Korea\'s role as a biopharmaceutical manufacturing hub?',
    answer: 'South Korea is one of the world\'s largest and fastest-growing biopharmaceutical contract manufacturing hubs. Samsung Biologics (Incheon) operates the world\'s largest single-site biomanufacturing facility with 360,000L+ bioreactor capacity. Celltrion (Incheon) manufactures biosimilars distributed across 100+ countries. SK Bioscience and GC Pharma are major vaccine manufacturers. Korea\'s government K-BIO initiative and Bio Cluster at Incheon Free Economic Zone support biomanufacturing expansion. Korean CDMO capacity makes Korea a critical supplier of biosimilar and innovative biologic products globally — including for GCC markets where Korean biosimilars have significant market share.',
  },
  {
    question: 'How does BioNixus serve South Korea-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Korean pharmaceutical companies — particularly biosimilar manufacturers (Celltrion, Samsung Bioepis, Daewoong) and innovative pharma (Boryung, HanAll Biopharma) — in expanding into GCC and MENA markets. Korean biosimilars have established significant GCC market positions; BioNixus provides SFDA tender intelligence, NUPCO formulary tracking, competitive biosimilar positioning research, and physician panel surveys across all major specialties to support Korean companies\' commercial strategies in Saudi Arabia, UAE, and the wider GCC.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/south-korea-healthcare-market-report');
const FAQ_SECTION_ID = 'south-korea-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'South Korea Healthcare Market Report 2026: HIRA, NHIS, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/south-korea-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/south-korea-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "South Korea Healthcare Market Report 2026 | HIRA, NHIS Reimbursement & Biosimilar Hub | BioNixus",
    pageMetaDescription: "South Korea healthcare market at USD 115B in 2026. MFDS drug approval, HIRA clinical assessment, NHIS price negotiation, Samsung Biologics/Celltrion biosimilar manufacturing, and BioNixus GCC expansion intelligence.",
    countryName: "South Korea",
    marketSlug: "south-korea",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const SouthKoreaHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="South Korea Healthcare Market Report 2026 | HIRA, NHIS Reimbursement & Biosimilar Hub | BioNixus"
      description="South Korea healthcare market at USD 115B in 2026. MFDS drug approval, HIRA clinical assessment, NHIS price negotiation, Samsung Biologics/Celltrion biosimilar manufacturing, and BioNixus GCC expansion intelligence."
      canonical="https://www.bionixus.com/south-korea-healthcare-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "South Korea Healthcare Market Report 2026 | HIRA, NHIS Reimbursement & Biosimilar Hub | BioNixus",
    pageMetaDescription: "South Korea healthcare market at USD 115B in 2026. MFDS drug approval, HIRA clinical assessment, NHIS price negotiation, Samsung Biologics/Celltrion biosimilar manufacturing, and BioNixus GCC expansion intelligence.",
    countryName: "South Korea",
    marketSlug: "south-korea",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-south-korea-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="South Korea Healthcare Market Report 2026: HIRA, NHIS Reimbursement, and Biopharmaceutical Industry Intelligence"
          description="BioNixus serves Korean pharmaceutical and medical device companies — particularly biosimilar manufacturers with GCC market ambitions — with regional market intelligence from London and Cairo."
          config={REPORT_CONVERSION}
          marketSlug="south-korea"
          countryName="South Korea"
          stats={[
            { value: '~$115B', label: 'South Korea healthcare market 2026' },
            { value: '~$24B', label: 'Pharmaceutical market 2026' },
            { value: '~$11B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$115B</p><p className="text-xs text-muted-foreground mt-1">South Korea healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$24B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$11B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">South Korea is among the world's top-15 pharmaceutical markets and the global leader in biosimilar manufacturing through Samsung Biologics and Celltrion. Korea's NHIS single-payer system with HIRA clinical assessment is one of Asia's most rigorous and transparent drug evaluation frameworks. Korean biosimilars have established significant GCC market positions — creating a natural BioNixus intelligence relationship.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="South Korea healthcare market 2026 — MFDS, HIRA, NHIS, biosimilar manufacturing, and GCC expansion FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default SouthKoreaHealthcareMarketReport;
