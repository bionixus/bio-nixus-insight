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
  { name: 'India Healthcare Market Report', href: '/india-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the India healthcare market in 2026?',
    answer: 'The Indian healthcare market is estimated at USD 250–280 billion in 2026 — among the fastest-growing globally, driven by a 1.4 billion population, rising chronic disease burden, expanding insurance coverage, and significant government healthcare investment. India\'s National Health Mission (NHM) and Ayushman Bharat (AB-PMJAY) — the world\'s largest government health insurance program, covering 500+ million people — are transforming healthcare access and pharmaceutical consumption at scale. Healthcare spending represents approximately 3.5% of GDP, one of the lowest among G20 economies, creating a significant headroom for growth.',
  },
  {
    question: 'What is the India pharmaceutical market size in 2026?',
    answer: 'The Indian pharmaceutical market is estimated at USD 48–55 billion in 2026, making it the world\'s third-largest by volume and among the top 12 by value. India is the world\'s largest generic medicine supplier — supplying approximately 20% of global generic medicines by volume and 60% of global vaccines. CDSCO (Central Drugs Standard Control Organisation) under the Ministry of Health regulates drug registration and approval. NPPA (National Pharmaceutical Pricing Authority) regulates prices for essential medicines under the DPCO (Drug Price Control Order), which covers over 800 formulations in the National List of Essential Medicines (NLEM). Domestic manufacturers — Sun Pharma, Cipla, Dr. Reddy\'s, Lupin, Aurobindo — are major global generic exporters.',
  },
  {
    question: 'How does CDSCO drug registration and market access work in India?',
    answer: 'CDSCO (Central Drugs Standard Control Organisation) approves new drugs through the New Drug Application (NDA) process. India-specific clinical trial data is required for NCEs (new chemical entities) — ClinicalTrials.IN phase I–III data, though waiver provisions exist for products approved by DCGIs comparator agencies. The SUGAM online portal manages drug submissions. Price regulation under DPCO applies to scheduled formulations (essential medicines list). Non-scheduled medicines are not price-controlled. Ayushman Bharat formularies at national (PMJAY) and state levels govern what medicines are covered for AB beneficiaries, and NLEM determines priority medicines for public procurement. The Jan Aushadhi Scheme (Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana) promotes generic medicine access through government-run pharmacy outlets.',
  },
  {
    question: 'What are the largest therapy areas in the India pharmaceutical market?',
    answer: 'The five largest therapy areas in the Indian pharmaceutical market are: cardiovascular and metabolic (largest by volume; antihypertensives, statins, diabetes — India has 77M+ diabetics); anti-infectives (antibiotics at massive scale; India\'s antimicrobial resistance burden drives significant antibiotic consumption); CNS and psychiatry (growing rapidly; antidepressants, antipsychotics, anticonvulsants); gastrointestinal (proton pump inhibitors, antacids, antidiarrheals at high volume); and oncology (fastest-growing by value; government expansion of cancer centres under Ayushman Bharat, biosimilar availability at accessible price points). The biologics and biosimilars segment is growing rapidly — India has approved over 100 biosimilars, with manufacturing strength in insulins, erythropoietins, and monoclonal antibodies.',
  },
  {
    question: 'How does Ayushman Bharat (AB-PMJAY) affect the India pharmaceutical and healthcare market?',
    answer: 'Ayushman Bharat PM Jan Arogya Yojana (AB-PMJAY) is the world\'s largest government health insurance program, providing health coverage of up to INR 5 lakh (USD ~6,000) per family per year to approximately 107 million vulnerable families (500M+ beneficiaries). AB-PMJAY covers hospital care at empanelled public and private hospitals with benefit packages covering 1,949+ procedures. The PMJAY formulary and essential medicines lists drive procurement decisions for empanelled hospitals. AB-PMJAY has significantly expanded private hospital coverage in tier 2 and tier 3 cities, creating new commercial access points beyond the historically dominant metro hospital channel. Digital health integration through the Ayushman Bharat Digital Mission (ABDM) and ABHA health ID is creating a national health data infrastructure.',
  },
  {
    question: 'How does BioNixus serve Indian pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Indian pharmaceutical companies — including major generic manufacturers and innovative biotech companies — in expanding into GCC and MENA markets. Indian generic manufacturers are major suppliers to GCC countries, and SFDA, MOHAP, and GCC regulatory authorities increasingly reference CDSCO and WHO-GMP certification as part of their registration processes. BioNixus provides SFDA tender intelligence, NUPCO formulary data, competitive brand positioning, and physician and pharmacist research across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt — helping Indian manufacturers optimise their GCC commercial strategies.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/india-healthcare-market-report');
const FAQ_SECTION_ID = 'india-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'India Healthcare Market Report 2026: CDSCO, Ayushman Bharat, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/india-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/india-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "India Healthcare Market Report 2026 | CDSCO, Ayushman Bharat & Pharmaceutical Market Intelligence | BioNixus",
    pageMetaDescription: "India healthcare market at USD 265B in 2026. CDSCO drug registration, Ayushman Bharat PMJAY coverage, NLEM pricing, world's largest generic medicine supplier, and BioNixus intelligence for Indian pharma expanding to GCC and MENA.",
    countryName: "India",
    marketSlug: "india",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const IndiaHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="India Healthcare Market Report 2026 | CDSCO, Ayushman Bharat & Pharmaceutical Market Intelligence | BioNixus"
      description="India healthcare market at USD 265B in 2026. CDSCO drug registration, Ayushman Bharat PMJAY coverage, NLEM pricing, world's largest generic medicine supplier, and BioNixus intelligence for Indian pharma expanding to GCC and MENA."
      canonical="https://www.bionixus.com/india-healthcare-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "India Healthcare Market Report 2026 | CDSCO, Ayushman Bharat & Pharmaceutical Market Intelligence | BioNixus",
    pageMetaDescription: "India healthcare market at USD 265B in 2026. CDSCO drug registration, Ayushman Bharat PMJAY coverage, NLEM pricing, world's largest generic medicine supplier, and BioNixus intelligence for Indian pharma expanding to GCC and MENA.",
    countryName: "India",
    marketSlug: "india",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-india-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="India Healthcare Market Report 2026: CDSCO, Ayushman Bharat, and Pharmaceutical Market Intelligence"
          description="BioNixus serves Indian pharmaceutical and medical device companies with GCC and MENA market intelligence — connecting India's world-class generic manufacturing capability with the commercial intelligence needed to grow in the Gulf and broader MENA region."
          config={REPORT_CONVERSION}
          marketSlug="india"
          countryName="India"
          stats={[
            { value: '~$265B', label: 'India healthcare market 2026' },
            { value: '~$50B', label: 'Pharmaceutical market 2026' },
            { value: '~$12B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$265B</p><p className="text-xs text-muted-foreground mt-1">India healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$50B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$12B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">India is among the world's fastest-growing healthcare markets — driven by 1.4 billion people, a rapidly expanding middle class, Ayushman Bharat insurance coverage for 500M+ beneficiaries, and India's position as the world's pharmacy. India's generic medicine manufacturing strength makes it a critical supplier to GCC markets and a natural expansion market for BioNixus's clients.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="India healthcare market 2026 — CDSCO, Ayushman Bharat, NLEM, DPCO pricing, and pharma market FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default IndiaHealthcareMarketReport;
