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
  { name: 'Italy Healthcare Market Report', href: '/italy-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Italy healthcare market in 2026?',
    answer: 'The Italian healthcare market is estimated at EUR 165–175 billion in 2026, representing approximately 9.4% of GDP. Italy operates a universal healthcare system — the SSN (Servizio Sanitario Nazionale), established in 1978 — funded primarily through general taxation. Regional health authorities (ASL and AO) manage service delivery across Italy\'s 20 regions, with significant variation in healthcare quality and budget management between northern regions (Lombardy, Emilia-Romagna, Veneto) and southern regions. Italy has approximately 1,100 public hospitals and 550 private accredited hospitals, with a total of approximately 210,000 hospital beds.',
  },
  {
    question: 'What is the Italy pharmaceutical market size in 2026?',
    answer: 'The Italian pharmaceutical market is estimated at EUR 26–30 billion in 2026, making it the third-largest pharmaceutical market in the EU after Germany and France. AIFA (Agenzia Italiana del Farmaco) is Italy\'s pharmaceutical regulator and pricing/reimbursement authority. AIFA classifies medicines as Classe A (fully reimbursed by SSN), Classe H (hospital-only reimbursement), Classe C (not reimbursed, patient pays). The Prontuario Farmaceutico Nazionale (PFN) is the national formulary. Price negotiations and reimbursement decisions are made by AIFA\'s CTS (Commissione Tecnico-Scientifica) and CPR (Comitato Prezzi e Rimborso). Italy has a significant managed entry agreement (MEA) culture — payback, cost-sharing, and payment-by-results agreements are common.',
  },
  {
    question: 'How does AIFA market access work for pharmaceuticals in Italy?',
    answer: 'AIFA evaluates new medicines through the CTS (Commissione Tecnico-Scientifica), which assesses clinical evidence and issues a classification and reimbursement recommendation. The CPR (Comitato Prezzi e Rimborso) then negotiates the reimbursement price and managed entry agreement conditions with the manufacturer. Italy uses extensive MEA (Managed Entry Agreements): payment at results (pagamento a risultato), risk sharing, cost sharing, and expenditure caps are all common mechanisms for high-cost or uncertain-value products. Regional "extra-budgetary" expenditure caps (tetti di spesa) create additional complexity — regional purchasing groups (Intercent-ER, ARCA, ESTAR) negotiate prices independently from AIFA for some categories. The L. 648/96 pathway provides temporary reimbursement for off-label uses with supporting evidence.',
  },
  {
    question: 'What are the largest therapy areas in the Italy pharmaceutical market?',
    answer: 'The five largest therapy areas in the Italian pharmaceutical market by SSN spend are: oncology (largest by value; Italy has extensive oncology network across 350+ cancer centres); cardiovascular (high volume: statins, anticoagulants, heart failure drugs); immunology and biologics (biologics and biosimilars in rheumatology, gastroenterology, dermatology); diabetes (GLP-1 agonists growing rapidly; insulin, SGLT-2 inhibitors at scale); and CNS/neurology (multiple sclerosis DMTs, antidepressants, antiepileptics). Gene therapy and advanced therapy medicinal products (ATMPs) are an emerging high-value category in Italy, driven by hospital-based specialist centres.',
  },
  {
    question: 'How does Italy\'s regional healthcare variation affect pharmaceutical market access?',
    answer: 'Italy\'s 20 regions have significant autonomy in healthcare budget management, creating a fragmented market access landscape despite national AIFA reimbursement. Regions can add products to regional formularies beyond the national PFN, impose additional restrictions on AIFA-approved products, and negotiate regional-level contracts. Lombardy (Regione Lombardia, population 10M), Emilia-Romagna, Veneto, and Lazio account for a disproportionate share of pharmaceutical spend and hospital prescribing. Regional formulary inclusion (Prontuario Terapeutico Regionale, PTR) is a separate step from national AIFA reimbursement for accessing the hospital channel in many regions. Market access strategies must account for regional tier variations in launch sequencing.',
  },
  {
    question: 'How does BioNixus serve Italy-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Italian and European pharmaceutical and medical device companies in expanding into GCC and MENA markets. From our London office, we provide SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence; hospital-level pharmaceutical consumption data; physician panel surveys across all major therapeutic areas in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt; and comparative EU vs. GCC market intelligence for global commercial strategy.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/italy-healthcare-market-report');
const FAQ_SECTION_ID = 'italy-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Italy Healthcare Market Report 2026: AIFA, SSN, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/italy-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/italy-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Italy Healthcare Market Report 2026 | AIFA, SSN Reimbursement & Regional Market Access | BioNixus",
    pageMetaDescription: "Italy healthcare market at EUR 170B in 2026. AIFA CTS/CPR market access, SSN reimbursement (Classe A/H), regional formulary variation, managed entry agreements, and BioNixus intelligence for Italian pharma expanding to GCC.",
    countryName: "Italy",
    marketSlug: "italy",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const ItalyHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Italy Healthcare Market Report 2026 | AIFA, SSN Reimbursement & Regional Market Access | BioNixus"
      description="Italy healthcare market at EUR 170B in 2026. AIFA CTS/CPR market access, SSN reimbursement (Classe A/H), regional formulary variation, managed entry agreements, and BioNixus intelligence for Italian pharma expanding to GCC."
      canonical="https://www.bionixus.com/italy-healthcare-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Italy Healthcare Market Report 2026 | AIFA, SSN Reimbursement & Regional Market Access | BioNixus",
    pageMetaDescription: "Italy healthcare market at EUR 170B in 2026. AIFA CTS/CPR market access, SSN reimbursement (Classe A/H), regional formulary variation, managed entry agreements, and BioNixus intelligence for Italian pharma expanding to GCC.",
    countryName: "Italy",
    marketSlug: "italy",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-italy-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="Italy Healthcare Market Report 2026: AIFA Market Access, SSN Reimbursement, and Commercial Intelligence"
          description="BioNixus serves Italian and European pharmaceutical and medical device companies with GCC and MENA market intelligence — and provides Italy market context for global commercial teams planning EU5 and multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="italy"
          countryName="Italy"
          stats={[
            { value: '~€170B', label: 'Italy healthcare market 2026' },
            { value: '~€28B', label: 'Pharmaceutical market 2026' },
            { value: '~€13B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~€170B</p><p className="text-xs text-muted-foreground mt-1">Italy healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€28B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~€13B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Italy is the EU's third-largest pharmaceutical market and an important component of the EU5 launch sequence. AIFA's two-committee approval process, the extensive MEA culture, and significant regional variation in formulary access create a complex but commercially rewarding market for manufacturers with strong clinical dossiers and account-level engagement strategies.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Italy healthcare market 2026 — AIFA, SSN, regional access, and MEA FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default ItalyHealthcareMarketReport;
