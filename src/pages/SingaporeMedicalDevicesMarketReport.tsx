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
  { name: 'Singapore Medical Devices Market Report', href: '/singapore-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Singapore medical devices market in 2026?',
    answer: 'The Singapore medical devices market is estimated at USD 2.3–2.8 billion in 2026, growing at approximately 7% CAGR — driven by rapid expansion of the private hospital sector, medical tourism demand, and Singapore\'s role as the regional distribution hub for Southeast Asia. Despite its small domestic population of 5.9 million, Singapore imports and distributes medical devices for the broader ASEAN region through its JAFZA-equivalent free trade zones. Most global medical device companies maintain Singapore as their Southeast Asia regional headquarters and often as the APAC distribution centre.',
  },
  {
    question: 'How does HSA regulate medical devices in Singapore?',
    answer: 'HSA (Health Sciences Authority) regulates medical devices under the Health Products Act and the Medical Devices (MD) regulatory framework. Devices are classified Class A (lowest risk), Class B, Class C, and Class D (highest risk). Class A devices require product registration by declaration; Class B, C, and D require full HSA registration with conformity assessment. HSA accepts CE marking (EU MDR), FDA clearance, TGA registration, and other major market approvals as supporting evidence through its Product Registration abridged pathway — enabling expedited registration timelines (4–12 weeks for abridged submissions vs. longer for new full applications). Singapore participates in the Access Consortium, enabling work-sharing with MHRA, TGA, Health Canada, and Swissmedic.',
  },
  {
    question: 'How important is Singapore as a medical device distribution hub for Southeast Asia?',
    answer: 'Singapore functions as the primary regional medical device distribution hub for Southeast Asia, in a role analogous to Dubai\'s position for the Middle East. Key advantages: (1) Jurong Innovation District and Tuas Biomedical Park offer manufacturing and distribution infrastructure; (2) Changi Airport provides excellent air freight connectivity for time-sensitive medical devices; (3) Harbour infrastructure enables container shipping throughout ASEAN; (4) Singapore\'s regulatory framework (Access Consortium membership) facilitates regulatory data sharing; (5) Singapore free trade agreements with most ASEAN countries reduce distribution costs; (6) Most global medtech OEMs maintain Singapore regional HQ for Southeast Asia commercial and regulatory operations.',
  },
  {
    question: 'What are the fastest-growing medical device segments in Singapore?',
    answer: 'The fastest-growing Singapore medical device segments are: AI-enabled diagnostics and digital health (Singapore is Southeast Asia\'s leading adopter of medical AI — MOH initiatives in AI-assisted diagnostic imaging and clinical decision support); robotic surgery (Changi General Hospital, Singapore General Hospital, and private hospitals National Heart Centre and Gleneagles expanding robotic surgical programs); continuous glucose monitoring (CGM uptake expanding rapidly among Singapore\'s high-prevalence diabetic population, supported by MOH digital health programs); oncology devices (NCCS expanding proton therapy and precision oncology infrastructure); and aesthetic medicine devices (Singapore is ASEAN\'s premium aesthetic medicine destination — demand for energy-based aesthetic devices, injectables, and body contouring).',
  },
  {
    question: 'How does Singapore\'s medical tourism demand affect medical device procurement?',
    answer: 'Singapore attracts approximately 500,000+ medical tourists annually, predominantly from Indonesia, Malaysia, Vietnam, and Myanmar, as well as high-value patients from the Middle East. Medical tourism is concentrated in oncology, cardiac surgery, orthopaedics, fertility, and neurology — all high-device-value specialties. Premium private hospitals (Mount Elizabeth, Gleneagles, Farrer Park, Raffles Medical) that serve the medical tourism segment procure premium devices at full international prices, creating a premium brand positioning opportunity for international manufacturers. The medical tourism volume creates utilisation rates at Singapore private hospitals that significantly exceed what the domestic population alone would support, justifying investment in the highest-specification device technologies.',
  },
  {
    question: 'How does BioNixus support Singapore medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Singapore-based and Asia-Pacific medical device manufacturers and distributors in entering GCC and MENA markets. Singapore and the GCC share striking commercial parallels — both are premium healthcare markets with high per-capita spending, significant medical tourism, and rapid adoption of novel technologies. BioNixus provides SFDA, MOHAP/DHA/DOH, HMC, and GCC-wide regulatory intelligence; hospital procurement intelligence; distributor network mapping; and primary research with biomedical engineers and clinical specialists. The Singapore-GCC connection is particularly strong given the large Singapore-based regional headquarters networks of companies that also seek GCC market access.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/singapore-medical-devices-market-report');
const FAQ_SECTION_ID = 'singapore-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Singapore Medical Devices Market Report 2026: HSA Registration, Regional Distribution Hub, and Medical Tourism',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/singapore-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/singapore-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Singapore Medical Devices Market Report 2026 | HSA Registration, ASEAN Distribution Hub & Medical Tourism | BioNixus",
    pageMetaDescription: "Singapore medical devices market at USD 2.5B in 2026, growing 7% CAGR. HSA Class A–D registration, Access Consortium, ASEAN regional distribution hub, medical tourism device demand, and BioNixus GCC intelligence.",
    countryName: "Singapore",
    marketSlug: "singapore",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const SingaporeMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Singapore Medical Devices Market Report 2026 | HSA Registration, ASEAN Distribution Hub & Medical Tourism | BioNixus"
      description="Singapore medical devices market at USD 2.5B in 2026, growing 7% CAGR. HSA Class A–D registration, Access Consortium, ASEAN regional distribution hub, medical tourism device demand, and BioNixus GCC intelligence."
      canonical="https://www.bionixus.com/singapore-medical-devices-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Singapore Medical Devices Market Report 2026 | HSA Registration, ASEAN Distribution Hub & Medical Tourism | BioNixus",
    pageMetaDescription: "Singapore medical devices market at USD 2.5B in 2026, growing 7% CAGR. HSA Class A–D registration, Access Consortium, ASEAN regional distribution hub, medical tourism device demand, and BioNixus GCC intelligence.",
    countryName: "Singapore",
    marketSlug: "singapore",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-singapore-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Singapore Medical Devices Market Report 2026: HSA Regulation, ASEAN Distribution Hub, and Medical Tourism Intelligence"
          description="BioNixus delivers Singapore and Southeast Asia medical device market intelligence — HSA regulatory tracking, ASEAN distribution strategy, hospital procurement research, and GCC/MENA market entry intelligence for Singapore-based and international medtech companies."
          config={REPORT_CONVERSION}
          marketSlug="singapore"
          countryName="Singapore"
          stats={[
            { value: '~$2.5B', label: 'Singapore medical devices market 2026' },
            { value: '~$3.4B', label: 'Forecast 2030' },
            { value: '7.0%', label: 'CAGR 2026–2030' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$2.5B</p><p className="text-xs text-muted-foreground mt-1">Singapore medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$3.4B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">7.0%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Singapore is the premium medical device market and regional distribution hub for Southeast Asia — analogous to Dubai's role in the Middle East. Access Consortium membership, excellent logistics infrastructure, and a premium medical tourism sector make Singapore a critical strategic node for any Asia-Pacific device commercialisation strategy.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/singapore-healthcare-market-report" className="text-primary hover:underline font-medium">Singapore Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Singapore medical devices market 2026 — HSA, Access Consortium, ASEAN hub, medical tourism, and GCC FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default SingaporeMedicalDevicesMarketReport;
