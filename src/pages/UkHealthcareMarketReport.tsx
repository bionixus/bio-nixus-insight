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
import { finalizeStandaloneHealthcareFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'UK Healthcare Market Report', href: '/uk-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the UK healthcare market in 2026?',
    answer: 'The UK healthcare market is estimated at GBP 250–270 billion (approximately USD 315–340 billion) in 2026. The NHS accounts for roughly 78% of total healthcare expenditure, with private healthcare accounting for the remainder. UK healthcare spending represents approximately 11.4% of GDP — among the higher shares in Western Europe. The Integrated Care Systems (ICS) framework, introduced in 2022, is reshaping commissioning and procurement across England\'s 42 ICS regions.',
  },
  {
    question: 'What is the UK pharmaceutical market size in 2026?',
    answer: 'The UK pharmaceutical market is estimated at GBP 20–22 billion (USD 25–28 billion) in 2026. The NHS is the primary payer, with NICE technology appraisals and the NHS Commercial Framework governing product access and pricing for most branded medicines. The Voluntary Scheme for Branded Medicines Pricing and Access (VPAS) caps industry revenue growth. The UK Medicines and Healthcare products Regulatory Authority (MHRA) operates independently from the EMA post-Brexit.',
  },
  {
    question: 'How does NICE technology appraisal affect pharmaceutical market access in the UK?',
    answer: 'NICE (National Institute for Health and Care Excellence) technology appraisals determine NHS reimbursement for new medicines in England. A positive NICE appraisal mandates NHS funding within 90 days. NICE evaluates clinical effectiveness and cost-effectiveness (typically requiring ICER below GBP 20,000–30,000 per QALY). The Cancer Drugs Fund provides managed access for oncology products awaiting full NICE appraisal. Scotland (SMC), Wales (AWMSG), and Northern Ireland operate separate but aligned appraisal processes.',
  },
  {
    question: 'What are the largest therapy areas in the UK pharmaceutical market?',
    answer: 'The five largest UK pharmaceutical therapy areas by NHS spend are: oncology (largest and fastest-growing, driven by Cancer Drugs Fund), cardiovascular (statins, anticoagulants, antihypertensives at high volume), diabetes (GLP-1 agonists growing rapidly, insulin, metformin), immunology/biologics (TNF inhibitors, IL-17/23 inhibitors, JAK inhibitors), and respiratory (COPD and asthma biologics, ICS/LABA combinations). Mental health pharmaceutical spend is growing as prescribing rates increase.',
  },
  {
    question: 'What is the UK medical devices market size in 2026?',
    answer: 'The UK medical devices market is estimated at GBP 12–13 billion (USD 15–16 billion) in 2026. MHRA CE marking (UKCA marking now required for Great Britain) governs device approval. The NHS Supply Chain manages procurement for a significant portion of NHS acute trust purchasing. Private hospital groups (HCA, Spire, Nuffield, Ramsay) manage independent procurement. UK is a significant medtech R&D and manufacturing base, with over 3,500 medtech companies.',
  },
  {
    question: 'How does BioNixus serve UK-based pharmaceutical companies expanding to MENA?',
    answer: 'BioNixus\'s London office serves as the commercial hub for UK and European pharmaceutical companies expanding into GCC and MENA markets. We provide UK-headquartered clients with GCC market entry intelligence, SFDA/MOHAP/HMC regulatory pathway mapping, physician panel research across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman, and comparative UK vs. GCC market intelligence that supports global commercial strategy and resource allocation decisions.',
  },
], 'uk');

const REPORT_CONVERSION = getStandaloneReportConfig('/uk-healthcare-market-report');
const FAQ_SECTION_ID = 'uk-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UK Healthcare Market Report 2026: NHS, NICE, and Pharmaceutical Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/uk-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/uk-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "UK Healthcare Market Report 2026 | NHS, NICE & Pharma Intelligence | BioNixus",
    pageMetaDescription: "UK healthcare market at GBP 260B in 2026. NHS pharmaceutical spend, NICE technology appraisals, MHRA post-Brexit regulation, medical devices, and BioNixus intelligence for UK pharma companies expanding to GCC and MENA.",
    countryName: "United Kingdom",
    marketSlug: "uk",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const UkHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="UK Healthcare Market Report 2026 | NHS, NICE & Pharma Intelligence | BioNixus"
      description="UK healthcare market at GBP 260B in 2026. NHS pharmaceutical spend, NICE technology appraisals, MHRA post-Brexit regulation, medical devices, and BioNixus intelligence for UK pharma companies expanding to GCC and MENA."
      canonical="https://www.bionixus.com/uk-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-uk-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="UK Healthcare Market Report 2026: NHS Pharmaceutical Market, NICE Access, and Commercial Intelligence"
          description="BioNixus operates from London, serving UK-headquartered pharmaceutical and medical device companies with GCC and MENA market entry intelligence — and providing UK market context for global commercial teams planning multi-market strategy."
          config={REPORT_CONVERSION}
          marketSlug="uk"
          countryName="UK"
          stats={[
            { value: '~£260B', label: 'UK healthcare market 2026' },
            { value: '~£21B', label: 'Pharmaceutical market 2026' },
            { value: '~£12B', label: 'Medical devices market 2026' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~£260B</p><p className="text-xs text-muted-foreground mt-1">UK healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~£21B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~£12B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">The UK is Europe's second-largest pharmaceutical market and the world's fifth-largest by value. Post-Brexit regulatory independence has given MHRA flexibility to accelerate approvals outside EU timelines — the Innovative Licensing and Access Pathway (ILAP) and International Recognition Procedure (IRP) enable faster UK launches for products with prior EMA, FDA, or TGA approval. NICE's value-based assessment framework remains the dominant market access gate for NHS reimbursement.</p>
          <p className="text-muted-foreground leading-relaxed">BioNixus's London office serves UK and European pharma companies as their GCC/MENA intelligence partner. See our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link> for the primary BioNixus market coverage.</p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>

        <MarketIntelligenceSections marketSlug="uk" countryName="United Kingdom" variant="healthcare" />
      <section className="section-padding" id="market-access">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">UK Pharmaceutical Market Access Framework</h2>
          <div className="space-y-4">
            {[
              { label: 'MHRA Approval', body: 'Post-Brexit, MHRA grants UK marketing authorisation independently. IRP pathway accepts EMA, FDA, or TGA approvals as the basis for expedited UK clearance — typical timelines 60–150 days.' },
              { label: 'NICE Technology Appraisal', body: 'Mandatory NHS funding follows positive NICE TA within 90 days. Cost-effectiveness threshold GBP 20,000–30,000/QALY; end-of-life and rare disease criteria apply. SMC (Scotland) and AWMSG (Wales) run parallel assessments.' },
              { label: 'NHS Commercial Framework', body: 'VPAS caps branded medicine revenue growth, with clawback mechanisms above threshold. Complex commercial agreements (managed access, outcomes-based) are negotiated through the NHS Commercial Framework.' },
              { label: 'Cancer Drugs Fund', body: 'CDF provides managed access for oncology products under NICE evaluation — enabling NHS use while real-world evidence is collected. BioNixus supports CDF evidence generation programs.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="UK healthcare market 2026 — NHS, NICE, MHRA, and pharma market access FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default UkHealthcareMarketReport;
