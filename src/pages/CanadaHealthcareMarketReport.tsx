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

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Canada Healthcare Market Report', href: '/canada-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Canada healthcare market in 2026?',
    answer: 'The Canadian healthcare market is estimated at USD 280–310 billion in 2026, representing approximately 12.5% of GDP. Canada operates a publicly funded universal healthcare system under the Canada Health Act, with each of the 10 provinces and 3 territories managing their own provincial health insurance plans (funded jointly by federal and provincial governments). Unlike many other universal systems, Canada\'s Medicare covers physician services and hospital care but does not include a national pharmaceutical benefits program — drug coverage is managed through a patchwork of provincial formularies, private employer insurance, and federal coverage for specific populations (First Nations, veterans, armed forces).',
  },
  {
    question: 'What is the Canada pharmaceutical market size in 2026?',
    answer: 'The Canadian pharmaceutical market is estimated at USD 34–38 billion in 2026, making it among the top 10 globally by value. Health Canada is Canada\'s federal drug regulator, with the Therapeutic Products Directorate (TPD) reviewing new drug submissions and biologics. The PMPRB (Patented Medicine Prices Review Board) sets price ceilings for patented medicines in Canada using international reference pricing — reforms to the PMPRB framework (delayed from 2021, partially implemented) continue to affect launch pricing strategy. CADTH (Canadian Drug and Health Technology Agency) conducts national HTA — Common Drug Reviews (CDR) for drugs and Optimal Use Reviews. pCPA (pan-Canadian Pharmaceutical Alliance) negotiates reimbursement prices with manufacturers on behalf of provincial drug plans, with agreements unlocking provincial formulary listings.',
  },
  {
    question: 'How does CADTH and pCPA market access work in Canada?',
    answer: 'The Canadian market access process has two stages: (1) CADTH assessment — CADTH\'s CDR (Common Drug Review) evaluates clinical evidence and cost-effectiveness, issuing a recommendation to reimburse (with or without conditions) or not reimburse; (2) pCPA negotiation — following a positive CADTH recommendation, pCPA negotiates the reimbursement price with the manufacturer, with all participating provinces agreeing to a single negotiated price. pCPA completion unlocks provincial formulary listings across participating provinces. Individual provincial formulary committees (ODBF in Ontario, BC PharmaCare, RAMQ in Quebec) then make final listing decisions with timing and criteria varying by province. Quebec\'s INESSS conducts independent HTA and may differ in its assessment from CADTH — adding complexity for national access strategies.',
  },
  {
    question: 'What are the largest therapy areas in the Canada pharmaceutical market?',
    answer: 'The five largest therapy areas in the Canadian pharmaceutical market by combined public and private payer spend are: oncology (largest by value; Cancer Care Ontario, BC Cancer, and provincial cancer agencies fund cancer medicines; many innovative therapies access provincial drug plans through managed access programs); immunology and biologics (TNF inhibitors, IL-17/23, JAK inhibitors — biosimilar transition policies are actively reducing originator market share in several provinces); diabetes (GLP-1 agonists growing rapidly in private sector; insulin and SGLT-2 inhibitors widely reimbursed); cardiovascular (high volume generic sector; branded agents compete in heart failure and atherosclerosis); and rare diseases (significant orphan drug activity; multiple provincial rare disease frameworks being consolidated into a proposed national rare disease drug strategy).',
  },
  {
    question: 'How do provincial formularies affect pharmaceutical commercial strategy in Canada?',
    answer: 'Canada\'s provincial formulary fragmentation means that national market access requires individual provincial listing negotiations following the pCPA agreement. Key provincial markets by population and pharmaceutical spend: Ontario (ODB formulary — 14.5M population), Quebec (RAMQ — 8.9M; independent INESSS assessment), British Columbia (BC PharmaCare — 5.3M), Alberta (Alberta Drug Benefit List — 4.5M). Each province has its own formulary structure, clinical criteria, and special authorisation processes. Managed Access Programs (MAPs), Exceptional Access Programs (EAP in Ontario), and Special Authority processes in BC provide pathways for early patient access while formulary negotiations proceed. The disparity in access timing between provinces creates equity debates and commercial uncertainty for manufacturers.',
  },
  {
    question: 'How does BioNixus serve Canada-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus supports Canadian pharmaceutical and medical device companies in expanding into GCC and MENA markets. From our London office, we provide SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender intelligence; hospital-level pharmaceutical consumption data; physician panel surveys across all major therapeutic areas in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt; and comparative Canadian vs. GCC market intelligence. Canada\'s CADTH HTA evidence standards are closely aligned with GCC regulatory requirements — BioNixus helps Canadian companies leverage their existing evidence packages for GCC market access.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/canada-healthcare-market-report');
const FAQ_SECTION_ID = 'canada-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Canada Healthcare Market Report 2026: CADTH, pCPA, Provincial Formularies, and Pharmaceutical Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/canada-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/canada-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Canada Healthcare Market Report 2026 | CADTH, pCPA, Provincial Formularies & Pharma Intelligence | BioNixus",
    pageMetaDescription: "Canada healthcare market at USD 295B in 2026. CADTH HTA, pCPA price negotiation, provincial formulary access, PMPRB price controls, and BioNixus intelligence for Canadian pharma companies expanding to GCC and MENA.",
    countryName: "Canada",
    marketSlug: "canada",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const CanadaHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Canada Healthcare Market Report 2026 | CADTH, pCPA, Provincial Formularies & Pharma Intelligence | BioNixus"
      description="Canada healthcare market at USD 295B in 2026. CADTH HTA, pCPA price negotiation, provincial formulary access, PMPRB price controls, and BioNixus intelligence for Canadian pharma companies expanding to GCC and MENA."
      canonical="https://www.bionixus.com/canada-healthcare-market-report"
      jsonLd={[...jsonLd, ...buildReportEnrichmentSchemas({
    pageTitle: "Canada Healthcare Market Report 2026 | CADTH, pCPA, Provincial Formularies & Pharma Intelligence | BioNixus",
    pageMetaDescription: "Canada healthcare market at USD 295B in 2026. CADTH HTA, pCPA price negotiation, provincial formulary access, PMPRB price controls, and BioNixus intelligence for Canadian pharma companies expanding to GCC and MENA.",
    countryName: "Canada",
    marketSlug: "canada",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })]}
    />
      <ReportReadingProgress progressId="report-rp-canada-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
      <section className="section-padding pb-10">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">Published by BioNixus · Updated May 2026 · Open access</div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Canada Healthcare Market Report 2026: CADTH HTA, pCPA Negotiations, and Provincial Formulary Intelligence</h1>
          <p className="text-muted-foreground leading-relaxed">BioNixus serves Canadian pharmaceutical and medical device companies with GCC and MENA market entry intelligence — and provides Canada market context for global commercial teams planning North American and multi-market strategy.</p>
            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$295B</p><p className="text-xs text-muted-foreground mt-1">Canada healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$36B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$14B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Canada is among the top 10 global pharmaceutical markets with a rigorous, evidence-based access pathway (CADTH + pCPA) that is highly respected internationally. Provincial formulary fragmentation post-pCPA and ongoing PMPRB reform continue to challenge commercial access strategies. Canada is also a significant clinical research hub — with a large research hospital network and proximity to the US market.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="Canada healthcare market 2026 — CADTH, pCPA, PMPRB, provincial formularies, and market access FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default CanadaHealthcareMarketReport;
