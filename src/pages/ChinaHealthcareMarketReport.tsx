import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'China Healthcare Market Report', href: '/china-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the China healthcare market in 2026?',
    answer: 'The Chinese healthcare market is estimated at USD 1.2–1.4 trillion in 2026 — the world\'s second-largest, behind only the United States. China\'s healthcare expenditure represents approximately 7.5% of GDP, with the government committed to expanding coverage under the Healthy China 2030 Action Plan. Three public insurance schemes cover the majority of China\'s 1.4 billion population: Urban Employee Basic Medical Insurance (UEBMI), Urban and Rural Resident Basic Medical Insurance (URRBMI), and the rural New Cooperative Medical Scheme (NCMS, now merged with URRBMI). The NHSA (National Healthcare Security Administration), established in 2018, manages all three schemes and conducts centralized drug price negotiations.',
  },
  {
    question: 'What is the China pharmaceutical market size in 2026?',
    answer: 'The Chinese pharmaceutical market is estimated at USD 165–185 billion in 2026 — the world\'s second-largest by value. NMPA (National Medical Products Administration, formerly CFDA) regulates drug registration and approval. China has dramatically accelerated NMPA approval timelines through Priority Review Pathways and the creation of the Clinical Trial Technical Guidelines alignment with ICH standards. The NRDL (National Reimbursement Drug List) is updated annually — NHSA conducts direct price negotiations with manufacturers for reimbursement listing, consistently achieving 50–70%+ price reductions from list price. The VBP (Volume-Based Procurement) centralized tender system applies to off-patent generics and biosimilars, with tender prices often representing 90%+ discounts from branded prices.',
  },
  {
    question: 'How do NMPA approval and NRDL reimbursement work in China?',
    answer: 'China pharmaceutical market access has three stages: (1) NMPA registration — new innovative drugs can be submitted after Phase I completion (simultaneous global development allowed since 2018 PRC reform); Priority Review Pathway (PRD) and Breakthrough Therapy Designation (BTD) enable expedited review (3–6 months for priority vs. 12+ months standard); (2) NRDL negotiation — NHSA negotiates annual price concessions with manufacturers of high-value innovative medicines; inclusion on the NRDL is required for public hospital reimbursement (which accounts for ~80% of prescription drug use); (3) VBP centralized procurement — applies to off-patent generics and biosimilars via national tender, setting supply prices for public hospitals through 3-year volume-guaranteed contracts. VBP has been extended to medical devices (coronary stents, orthopaedic implants), causing 70–95% price reductions.',
  },
  {
    question: 'What are the largest therapy areas in the China pharmaceutical market?',
    answer: 'The five largest therapy areas in the Chinese pharmaceutical market by NRDL and hospital spend are: oncology (largest by value; PD-1/PD-L1 checkpoint inhibitors, targeted therapies; China is the world\'s largest oncology market by patient volume); cardiovascular and metabolic (antihypertensives, statins, diabetes drugs at massive scale; GLP-1 agonists growing rapidly); anti-infectives (China has one of the world\'s largest antibiotic markets; antimicrobial stewardship reform is reshaping the segment); CNS and neurology (Alzheimer\'s, Parkinson\'s, antidepressants — growing rapidly); and immunology and autoimmune (biologics and JAK inhibitors for rheumatoid arthritis, psoriasis, IBD — biosimilar prices under VBP are very low but volume is large).',
  },
  {
    question: 'What is the impact of Volume-Based Procurement (VBP) on China pharmaceutical commercial strategy?',
    answer: 'VBP (Volume-Based Procurement, 集中带量采购 or 4+7 procurement) is a national centralized drug tender system requiring public hospitals to purchase specified volumes of selected generic and biosimilar products at tender-winning prices. VBP has dramatically reshaped China\'s pharmaceutical market: winning VBP tenders guarantees large volumes at negligible margins; losing means near-complete exclusion from the public hospital channel. International and domestic pharmaceutical companies must decide whether to compete in VBP (accepting price cuts of 70–95%) or focus on innovative branded products not yet subject to VBP. The impact of VBP on medical device categories (coronary stents reduced by 93%, knee implants by 84% in 2021) has been equally dramatic and continues to expand to new device categories.',
  },
  {
    question: 'How does BioNixus serve pharmaceutical companies with China and MENA strategy?',
    answer: 'BioNixus supports pharmaceutical and medical device companies with China-to-MENA or MENA-to-China comparative intelligence. For companies operating in China\'s complex VBP and NRDL environment, the GCC presents an alternative growth market with premium pricing, fewer price controls, and rapidly expanding healthcare investment. BioNixus provides SFDA (Saudi Arabia), MOHAP (UAE), and GCC-wide regulatory pathway intelligence; NUPCO tender and hospital formulary data; physician panel surveys; and comparative China vs. GCC market intelligence to inform global portfolio and market prioritization decisions.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/china-healthcare-market-report');
const FAQ_SECTION_ID = 'china-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'China Healthcare Market Report 2026: NMPA, NRDL, VBP, and Pharmaceutical Market Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/china-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/china-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
];

const ChinaHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="China Healthcare Market Report 2026 | NMPA, NRDL Reimbursement & VBP Procurement | BioNixus"
      description="China healthcare market at USD 1.3 trillion in 2026 — world's second largest. NMPA drug approval, NRDL reimbursement negotiations, VBP centralized procurement, Healthy China 2030, and BioNixus GCC intelligence."
      canonical="https://www.bionixus.com/china-healthcare-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-china-healthcare-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
      <section className="section-padding pb-10">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">Published by BioNixus · Updated May 2026 · Open access</div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">China Healthcare Market Report 2026: NMPA Approval, NRDL Reimbursement, and VBP Commercial Intelligence</h1>
          <p className="text-muted-foreground leading-relaxed">BioNixus provides China and GCC comparative market intelligence for global pharmaceutical and medical device companies — helping multi-market commercial teams prioritise between China's large but price-compressed market and the GCC's premium-priced, fast-growing healthcare opportunity.</p>
            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>
      <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$1.3T</p><p className="text-xs text-muted-foreground mt-1">China healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$175B</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$80B</p><p className="text-xs text-muted-foreground mt-1">Medical devices market 2026</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">China is the world's second-largest healthcare market and its most complex commercial environment. NMPA approval reforms have accelerated global launches, but VBP and NRDL pricing pressures compress margins significantly. For innovative products, China remains a high-priority market; for off-patent generics and biosimilars, VBP makes the commercial equation very different from other major markets.</p>
          <p className="text-muted-foreground leading-relaxed">For GCC/MENA intelligence, see our <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">GCC Pharmaceutical Market Report 2026</Link>.</p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>
      <FAQSection sectionId={FAQ_SECTION_ID} title="China healthcare market 2026 — NMPA, NRDL, VBP, NHSA, and pharma commercial strategy FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default ChinaHealthcareMarketReport;
