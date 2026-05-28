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
  { name: 'Japan Medical Devices Market Report', href: '/japan-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Japan medical devices market in 2026?',
    answer: 'The Japanese medical devices market is estimated at USD 38–43 billion in 2026 — the world\'s third-largest, after the United States and China. Japan combines a massive hospital infrastructure (8,300+ hospitals, 1.6 million hospital beds — the highest bed density per capita of any major economy), with NHI reimbursement covering virtually all approved medical procedures and devices. Japan is also a major medical device manufacturer, home to global companies including Olympus (endoscopy, surgical), Terumo (cardiovascular, blood management), Hoya (optics, surgical), Omron (blood pressure, diabetes monitoring), and Sysmex (haematology IVD).',
  },
  {
    question: 'How does PMDA regulate medical devices in Japan?',
    answer: 'PMDA (Pharmaceuticals and Medical Devices Agency) reviews medical device applications on behalf of MHLW (Ministry of Health, Labour and Welfare), which issues the final marketing authorisation. Japan classifies devices into four classes based on risk: Class I (general medical devices — filing with local regulatory authority); Class II (controlled medical devices — conformity certification by Registered Certification Bodies or PMDA); Class III and IV (highly controlled and specially controlled medical devices — PMDA review with clinical evidence). Japan has historically experienced a "device lag" of 2–4 years behind US device approvals — MHLW has implemented reform programs including the Priority Review system for innovative devices. PMDA participates in the IMDRF (International Medical Device Regulators Forum), facilitating international regulatory alignment.',
  },
  {
    question: 'How does NHI reimbursement pricing work for medical devices in Japan?',
    answer: 'NHI medical device reimbursement in Japan works through the "Functional Classification System" — devices are classified into functional categories and reimbursed at a single price per category. New devices are listed in the NHI reimbursement schedule through a biannual revision process (C1/C2 listing for innovative devices, A/B/C listing for standard devices). The C1 and C2 categories enable premium pricing for genuinely innovative devices above existing category prices. Insurance Coverage with Evidence Development (Conditional Coverage) — "先進医療制度 (Advanced Medical Technology System)" — provides a pathway for early access to promising devices at hospital cost while NHI listing evidence is collected. Hospital-specific billing supplements (DPC/PDPS system) govern device reimbursement within inpatient care.',
  },
  {
    question: 'What are the largest medical device segments in Japan?',
    answer: 'The five largest Japanese medical device segments by NHI spend and import value are: diagnostic imaging (MRI, CT, ultrasound, endoscopy — Japan has the world\'s highest per-capita endoscopy rate; Olympus dominates endoscopy globally with ~70% share); in vitro diagnostics (clinical chemistry, haematology, immunoassay — Sysmex is a global IVD leader); cardiovascular devices (stents, cardiac rhythm management, TAVR — Japan is among the world\'s largest TAVR procedure markets given the aging population); orthopaedics and joint replacement (high joint replacement rates; significant domestic manufacturing); and surgical instruments and robotics (da Vinci surgical systems widely installed; Japanese domestic robotic surgery development growing).',
  },
  {
    question: 'What is the strategic importance of Japan\'s device lag reduction for international manufacturers?',
    answer: 'Japan\'s historical "device lag" — the delay between FDA/CE approval and PMDA approval — was a major commercial barrier for international medical device manufacturers, historically costing 2–4 years of market access. MHLW\'s reform program has significantly reduced device lag: the Priority Review pathway provides accelerated PMDA review for innovative devices; early consultation with PMDA reduces dossier preparation time; IMDRF work-sharing enables parallel review with FDA. Reducing device lag is critical for Japanese patient access and commercial success — each year of lag delays NHI listing, hospital adoption, and revenue generation in a market where physicians and hospitals prefer to use the latest technologies. The reduction in lag has made Japan a more attractive concurrent global launch market.',
  },
  {
    question: 'How does BioNixus support Japanese medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Japanese medical device manufacturers — including Olympus, Terumo, and emerging Japanese medtech companies — in entering GCC and MENA markets. Japanese devices (particularly Olympus endoscopy, Terumo cardiovascular, Sysmex IVD) have significant installed bases in GCC hospitals. BioNixus provides SFDA, MOHAP/DHA/DOH, HMC, and GCC-wide regulatory pathway intelligence; hospital procurement and installed base intelligence; distributor network mapping; and primary research with biomedical engineers and clinical specialists. BioNixus operates from London with in-country research teams across the GCC and Egypt.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/japan-medical-devices-market-report');
const FAQ_SECTION_ID = 'japan-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Japan Medical Devices Market Report 2026: PMDA, NHI Reimbursement, and Device Lag Reduction',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/japan-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/japan-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Japan Medical Devices Market Report 2026 | PMDA Approval, NHI Reimbursement & Device Lag | BioNixus",
    pageMetaDescription: "Japan medical devices market at USD 40B in 2026 — world's third largest. PMDA Class I–IV approval, NHI functional category reimbursement, device lag reduction, and BioNixus GCC expansion intelligence for Japanese medtech.",
    countryName: "Japan",
    marketSlug: "japan",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const JapanMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Japan Medical Devices Market Report 2026 | PMDA Approval, NHI Reimbursement & Device Lag | BioNixus"
      description="Japan medical devices market at USD 40B in 2026 — world's third largest. PMDA Class I–IV approval, NHI functional category reimbursement, device lag reduction, and BioNixus GCC expansion intelligence for Japanese medtech."
      canonical="https://www.bionixus.com/japan-medical-devices-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Japan Medical Devices Market Report 2026 | PMDA Approval, NHI Reimbursement & Device Lag | BioNixus",
    pageMetaDescription: "Japan medical devices market at USD 40B in 2026 — world's third largest. PMDA Class I–IV approval, NHI functional category reimbursement, device lag reduction, and BioNixus GCC expansion intelligence for Japanese medtech.",
    countryName: "Japan",
    marketSlug: "japan",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-japan-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Japan Medical Devices Market Report 2026: PMDA Regulation, NHI Reimbursement, and Commercial Intelligence"
          description="BioNixus delivers Japan medical device market intelligence — PMDA regulatory tracking, NHI pricing strategies, hospital procurement research, and GCC/MENA market entry intelligence for Japanese and international medtech companies."
          config={REPORT_CONVERSION}
          marketSlug="japan"
          countryName="Japan"
          stats={[
            { value: '~$40B', label: 'Japan medical devices market 2026' },
            { value: '~$49B', label: 'Forecast 2030' },
            { value: '4.5%', label: 'CAGR 2026–2030' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$40B</p><p className="text-xs text-muted-foreground mt-1">Japan medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$49B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">4.5%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Japan is the world's third-largest medical devices market and a global innovation hub for endoscopy, cardiovascular devices, IVD, and surgical robotics. PMDA's device lag reduction reforms have improved market access timing; NHI reimbursement and biannual price revisions continue to be the primary commercial framework for long-term volume strategy.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/japan-healthcare-market-report" className="text-primary hover:underline font-medium">Japan Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Japan medical devices market 2026 — PMDA, NHI reimbursement, device lag, and GCC expansion FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default JapanMedicalDevicesMarketReport;
