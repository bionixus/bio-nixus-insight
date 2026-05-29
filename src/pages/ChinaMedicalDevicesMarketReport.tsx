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
import { finalizeStandaloneMedDeviceFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'China Medical Devices Market Report', href: '/china-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneMedDeviceFaqs([
  {
    question: 'How big is the China medical devices market in 2026?',
    answer: 'The Chinese medical devices market is estimated at USD 75–90 billion in 2026 — the world\'s second-largest, after the United States. China\'s device market is growing at approximately 8% CAGR, driven by rapid hospital infrastructure expansion (China\'s hospital bed count has grown from 4M in 2010 to over 8M), aging population dynamics, and government healthcare investment under Healthy China 2030. China has both a large import market (predominantly premium innovative devices) and a rapidly expanding domestic manufacturing sector across all device categories.',
  },
  {
    question: 'How does NMPA regulate medical devices in China?',
    answer: 'NMPA (National Medical Products Administration) regulates medical devices in China through a three-class risk-based system: Class I (lowest risk — filing with local regulatory authority required); Class II (registration with provincial NMPA required; technical review); Class III (highest risk — national NMPA approval required; clinical evaluation/clinical trial data needed). Registration is required for imported and domestic devices. Imported devices require an NMPA certificate and a Resident Agent or local legal entity in China. Clinical evaluation requirements align partially with global standards but may require China-specific clinical data for Class III devices. NMPA has created a Priority Review pathway for innovative medical devices — the "创新医疗器械特别审查程序" (Special Review Procedure for Innovative Medical Devices).',
  },
  {
    question: 'How is VBP (Volume-Based Procurement) affecting China\'s medical device market?',
    answer: 'VBP (Volume-Based Procurement) has been extended from pharmaceuticals to medical devices with dramatic commercial impact. Key VBP device rounds: coronary stents (2020) — prices cut by ~93% from an average of CNY 13,000 to CNY 700 per stent; joint replacements — knee implants cut by ~84% in 2021; spine implants extended VBP 2023; cardiac electrophysiology catheters (2024). VBP device rounds typically require multi-year volume commitments from public hospitals in exchange for guaranteed procurement at VBP prices. For manufacturers, winning VBP secures volume but at minimal margins; losing means near-exclusion from public hospital procurement. This has driven import substitution acceleration — domestic manufacturers win more VBP rounds due to lower cost bases, putting international manufacturers under pressure.',
  },
  {
    question: 'What is China\'s import substitution policy for medical devices?',
    answer: 'China\'s government-led import substitution policy (自主可控, or autonomous and controllable technology) is systematically replacing imported medical devices with domestically manufactured equivalents in public hospitals. The "Grade III Hospital Equipment Guidance Catalogue" (2021+) identifies device categories where domestic alternatives exist and recommends their use over imports. Priority domestically-produced device targets include: diagnostic imaging (CT, MRI, ultrasound — companies like United Imaging Healthcare, Mindray, Neusoft Medical), laboratory diagnostics (Mindray, Sysmex China, DAAN Gene), cardiac devices (MicroPort, Lepu Medical), and orthopaedic implants (Chunli Medical, Kanghui Holdings). International manufacturers with local production in China (joint ventures) may qualify as domestic products for procurement purposes.',
  },
  {
    question: 'What are the fastest-growing medical device segments in China?',
    answer: 'The fastest-growing Chinese medical device segments are: AI-enabled diagnostics and medical AI (China leads globally in FDA/NMPA-cleared medical AI applications — companies including Infervision, Yitu Healthcare, Deep Pharma); robotic surgery (Chinese domestic surgical robot companies: MicroPort, Tinavi, Shenzhen Edge Medical competing with imported systems); continuous glucose monitoring (CGM penetration in China\'s 130M+ diabetic population is expanding rapidly); ophthalmic devices (refractive surgery, cataract, myopia — China has the world\'s highest myopia prevalence); and IVD consumables (domestic manufacturers expanding against international market leaders).',
  },
  {
    question: 'How does BioNixus support medical device companies with China and GCC strategy?',
    answer: 'BioNixus provides comparative China and GCC market intelligence for global medical device manufacturers. For international manufacturers facing VBP pricing pressure and import substitution risk in China\'s public hospital market, the GCC\'s premium hospital market (no VBP, government-funded premium procurement, high per-device value) represents a strategically important counterbalance. BioNixus delivers SFDA, MOHAP/DHA/DOH, HMC, and GCC-wide regulatory and procurement intelligence — supporting portfolio prioritization decisions between China and GCC market investments.',
  },
], 'china');

const REPORT_CONVERSION = getStandaloneReportConfig('/china-medical-devices-market-report');
const FAQ_SECTION_ID = 'china-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'China Medical Devices Market Report 2026: NMPA, VBP Procurement, and Import Substitution Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/china-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/china-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "China Medical Devices Market Report 2026 | NMPA, VBP Procurement & Import Substitution | BioNixus",
    pageMetaDescription: "China medical devices market at USD 80B in 2026 — world's second largest. NMPA Class I–III registration, VBP device procurement (coronary stents, joint implants), import substitution policy, and BioNixus GCC intelligence.",
    countryName: "China",
    marketSlug: "china",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const ChinaMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="China Medical Devices Market Report 2026 | NMPA, VBP Procurement & Import Substitution | BioNixus"
      description="China medical devices market at USD 80B in 2026 — world's second largest. NMPA Class I–III registration, VBP device procurement (coronary stents, joint implants), import substitution policy, and BioNixus GCC intelligence."
      canonical="https://www.bionixus.com/china-medical-devices-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "China Medical Devices Market Report 2026 | NMPA, VBP Procurement & Import Substitution | BioNixus",
    pageMetaDescription: "China medical devices market at USD 80B in 2026 — world's second largest. NMPA Class I–III registration, VBP device procurement (coronary stents, joint implants), import substitution policy, and BioNixus GCC intelligence.",
    countryName: "China",
    marketSlug: "china",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-china-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="China Medical Devices Market Report 2026: NMPA Regulation, VBP Procurement, and Import Substitution Intelligence"
          description="BioNixus provides China and GCC comparative medical device market intelligence for global medtech companies — helping commercial teams navigate China's VBP disruption while identifying the GCC's premium, rapidly growing hospital market as a strategic complement."
          config={REPORT_CONVERSION}
          marketSlug="china"
          countryName="China"
          stats={[
            { value: '~$80B', label: 'China medical devices market 2026' },
            { value: '~$117B', label: 'Forecast 2030' },
            { value: '8.0%', label: 'CAGR 2026–2030' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$80B</p><p className="text-xs text-muted-foreground mt-1">China medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$117B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">8.0%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">China is the world's second-largest medical devices market — a dual commercial reality: massive volume growth opportunity alongside VBP price compression and import substitution risk. International manufacturers face structurally different competitive dynamics in China's public hospital channel versus the premium private hospital sector.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/china-healthcare-market-report" className="text-primary hover:underline font-medium">China Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="China medical devices market 2026 — NMPA, VBP, import substitution, and commercial strategy FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default ChinaMedicalDevicesMarketReport;
