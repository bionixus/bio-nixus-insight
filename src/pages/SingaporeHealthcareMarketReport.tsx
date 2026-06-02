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
  { name: 'Singapore Healthcare Market Report', href: '/singapore-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Singapore healthcare market in 2026?',
    answer: 'The Singapore healthcare market is estimated at USD 28–33 billion in 2026, representing approximately 5.2% of GDP. Despite its small population of 5.9 million, Singapore\'s healthcare market punches far above its weight due to its role as Southeast Asia\'s premier healthcare hub — attracting medical tourists from Indonesia, Malaysia, Vietnam, Thailand, and the wider Asia-Pacific region. Singapore operates the "3Ms" framework: MediShield Life (universal public health insurance), MedisaveS (mandatory individual health savings accounts), and Medifund (safety net for those unable to afford care). The Ministry of Health (MOH) and the Health Sciences Authority (HSA) are the primary regulatory and policy authorities.',
  },
  {
    question: 'What is the Singapore pharmaceutical market size in 2026?',
    answer: 'The Singapore pharmaceutical market is estimated at USD 4–5 billion in 2026. HSA (Health Sciences Authority) is Singapore\'s pharmaceutical and medical device regulator, conducting independent safety, quality, and efficacy reviews. The MOH Medicines List and Singapore Standard Drug List (SDL) govern which medicines are subsidised at public healthcare institutions (SingHealth and NHG restructured hospital groups). Formulary listings at Singapore General Hospital (SGH), Tan Tock Seng Hospital (TTSH), National University Hospital (NUH), and National Cancer Centre Singapore (NCCS) are the primary commercial access targets for innovative medicines. Singapore participates in the Access Consortium alongside TGA, MHRA, Health Canada, and Swissmedic.',
  },
  {
    question: 'How does HSA drug registration and Singapore formulary access work?',
    answer: 'HSA reviews new drug applications under the Product Registration pathway (standard, expedited, or abridged routes). The abridged pathway accepts approvals from reference drug regulatory agencies (US FDA, EMA, PMDA, TGA, Health Canada, MHRA, Swiss Medic) — enabling significantly reduced review timelines for products with prior major-market approval. Following HSA registration, companies apply for formulary listing at public hospitals. The Agency for Care Effectiveness (ACE), established in 2015, conducts health technology assessments — evaluating clinical evidence and cost-effectiveness — to inform formulary decisions at MOH-funded institutions. ACE uses a modified cost-effectiveness framework with Singapore-specific thresholds (GDP per capita multiplier methodology).',
  },
  {
    question: 'What are the largest therapy areas in the Singapore pharmaceutical market?',
    answer: 'The five largest therapy areas in Singapore\'s pharmaceutical market are: oncology (largest by value; Singapore has the highest cancer incidence rate in Southeast Asia per capita; NCCS is a major oncology centre with CAR-T and precision oncology programs); immunology and biologics (biologics and biosimilars — Singapore has high biologic prescribing rates for RA, IBD, psoriasis); cardiovascular (antihypertensives, anticoagulants at high volume in an aging population); diabetes (GLP-1 agonists and SGLT-2 inhibitors growing; Singapore has high diabetes prevalence); and rare diseases and advanced therapy (Singapore leads Southeast Asia in gene therapy and advanced ATMP access — rare disease patients from across the region seek treatment in Singapore).',
  },
  {
    question: 'What is Singapore\'s role as a pharmaceutical and biotech hub in Southeast Asia?',
    answer: 'Singapore is Southeast Asia\'s premier life sciences hub — home to the regional headquarters of Pfizer, MSD, Roche, AstraZeneca, GSK, Abbott, Novartis, and virtually every major global pharmaceutical company. Singapore\'s Biopolis research cluster hosts A*STAR (Agency for Science, Technology and Research) and multiple global pharma R&D centres. Singapore manufactures approximately 10% of the world\'s pharmaceutical output by value. The EDB (Economic Development Board) actively attracts pharma manufacturing investments — over 60 pharmaceutical and biotech companies have Singapore manufacturing sites. Singapore\'s regulatory infrastructure and Access Consortium membership make it an efficient gateway for Asia-Pacific pharmaceutical development and registration.',
  },
  {
    question: 'How does BioNixus serve Singapore-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Singapore-headquartered and Asia-Pacific regional pharmaceutical and medical device companies in expanding into GCC and MENA markets. Singapore pharma companies have significant natural connections to the GCC — both are high-income, innovation-adopting markets with premium healthcare aspirations. BioNixus provides SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence; physician panel surveys; and comparative Singapore vs. GCC market intelligence. BioNixus bridges two of the world\'s most dynamic healthcare markets for global commercial teams.',
  },
], 'singapore');

const REPORT_CONVERSION = getStandaloneReportConfig('/singapore-healthcare-market-report');
const FAQ_SECTION_ID = 'singapore-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Singapore Healthcare Market Report 2026: HSA, ACE, 3Ms Framework, and Pharmaceutical Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/singapore-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/singapore-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Singapore Healthcare Market Report 2026 | HSA, ACE, 3Ms & Southeast Asia Pharma Hub | BioNixus",
    pageMetaDescription: "Singapore healthcare market at USD 30B in 2026 — Southeast Asia's premier healthcare hub. HSA abridged registration, ACE cost-effectiveness assessment, MediShield Life, Biopolis life sciences cluster, and BioNixus GCC intelligence.",
    countryName: "Singapore",
    marketSlug: "singapore",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const SingaporeHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Singapore Healthcare Market Report 2026 | HSA, ACE, 3Ms & Southeast Asia Pharma Hub | BioNixus"
      description="Singapore healthcare market at USD 30B in 2026 — Southeast Asia's premier healthcare hub. HSA abridged registration, ACE cost-effectiveness assessment, MediShield Life, Biopolis life sciences cluster, and BioNixus GCC intelligence."
      canonical="https://www.bionixus.com/singapore-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-singapore-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Singapore Healthcare Market Report 2026: HSA Registration, ACE HTA, and Southeast Asia Pharma Hub Intelligence"
          description="BioNixus serves Singapore-based and Asia-Pacific pharmaceutical and medical device companies with GCC and MENA market intelligence — connecting Singapore's world-class regulatory infrastructure with the commercial intelligence needed to grow in the Gulf and MENA."
          config={REPORT_CONVERSION}
          marketSlug="singapore"
          countryName="Singapore"
          stats={[
            { value: '~$30B', label: 'Singapore healthcare market 2026' },
            { value: '~$4.5B', label: 'Pharmaceutical market 2026' },
            { value: '~$2.5B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$30B</p><p className="text-xs text-muted-foreground mt-1">Singapore healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$4.5B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$2.5B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Singapore is disproportionately important relative to its 5.9M population — it is Southeast Asia's regulatory gateway (Access Consortium member), the regional HQ hub for 50+ global pharma companies, and the destination for medical tourism from across ASEAN. Its regulatory infrastructure and Biopolis life sciences ecosystem make it among the world's most efficient pharma hubs.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
              <MarketIntelligenceSections marketSlug="singapore" countryName="Singapore" variant="healthcare" />

        <section className="section-padding" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Related BioNixus market intelligence</h2>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus runs healthcare and pharmaceutical market research across Asia-Pacific. Benchmark Singapore against our{' '}
              <Link to="/japan-healthcare-market-report" className="text-primary hover:underline font-medium">Japan healthcare market report</Link>{' '}and{' '}
              <Link to="/australia-healthcare-market-report" className="text-primary hover:underline font-medium">Australia healthcare market report</Link>, or start from the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">global healthcare market research hub</Link>{' '}and our{' '}
              <Link to="/market-research-healthcare" className="text-primary hover:underline font-medium">healthcare market research services</Link>. For therapy-segmented demand and access analysis, see our{' '}
              <Link to="/pharmaceutical-therapy-areas" className="text-primary hover:underline font-medium">pharmaceutical therapy-area coverage</Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Singapore healthcare market 2026 — HSA, ACE, 3Ms, medical tourism, and GCC expansion FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default SingaporeHealthcareMarketReport;
