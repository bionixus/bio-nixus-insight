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
import { finalizeStandaloneMedDeviceFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'UK Medical Devices Market Report', href: '/uk-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneMedDeviceFaqs([
  {
    question: 'How big is the UK medical devices market in 2026?',
    answer: 'The UK medical devices market is estimated at GBP 12–13 billion (approximately USD 15–16 billion) in 2026, growing at approximately 5.5% CAGR through 2030. The UK is home to over 3,500 medtech companies and is a significant R&D and manufacturing base. NHS Supply Chain manages procurement for the majority of NHS acute trust purchasing across England, while private hospital groups (HCA Healthcare UK, Spire Healthcare, Nuffield Health, Ramsay Health Care) manage independent procurement.',
  },
  {
    question: 'What is UKCA marking and how does it differ from CE marking for medical devices?',
    answer: 'UKCA (UK Conformity Assessed) marking is the post-Brexit conformity mark required for medical devices placed on the market in Great Britain (England, Scotland, and Wales). Northern Ireland continues to accept CE marking under the Windsor Framework. CE-marked devices were accepted transitionally in Great Britain through extended periods following Brexit, but UKCA is the long-term regulatory standard. MHRA (Medicines and Healthcare products Regulatory Authority) oversees device registration, with Notified Body assessment required for Class IIa, IIb, and III devices. The UKCA/CE divergence requires manufacturers to plan separate regulatory submissions for UK versus EU market access.',
  },
  {
    question: 'What is the NHS Supply Chain and how does it affect medical device procurement?',
    answer: 'NHS Supply Chain is the national procurement body managing medical device and consumables purchasing for NHS trusts in England. It operates category towers covering surgical instruments, diagnostic imaging, cardiovascular devices, orthopaedics, wound care, infection prevention, and more. NHS Supply Chain framework agreements determine preferred suppliers and pricing for the majority of NHS acute and community trust procurement. Inclusion on NHS Supply Chain frameworks is a prerequisite for volume NHS sales. Scotland, Wales, and Northern Ireland operate separate but coordinated procurement organisations (NHS National Services Scotland, NHS Wales Shared Services, Business Services Organisation Northern Ireland).',
  },
  {
    question: 'What are the largest medical device segments in the UK?',
    answer: 'The five largest UK medical device segments by value are: in vitro diagnostics (IVD) — largest segment, including molecular diagnostics, point-of-care testing, and laboratory analysers; cardiovascular devices (pacemakers, stents, heart valves, electrophysiology); orthopaedics (joint replacement, spinal implants, trauma fixation); diagnostic imaging (MRI, CT, ultrasound, digital X-ray); and surgical instruments and robotic surgery (da Vinci expansion in NHS and private hospitals). Digital health devices and remote monitoring are the fastest-growing category.',
  },
  {
    question: 'How does MHRA regulate medical devices post-Brexit in the UK?',
    answer: 'Post-Brexit, MHRA operates as the independent UK medical device regulatory authority. For Great Britain, manufacturers must register devices on the MHRA device registration database and affix UKCA marking. Clinical investigations in the UK are approved by MHRA and NHS Research Ethics Committees. MHRA has introduced the Innovative Devices Access Pathway (IDAP) to accelerate access for novel technologies. MHRA also participates in the Access Consortium with Health Canada, TGA (Australia), HSA (Singapore), and SwissMedic for international recognition of approvals — though medical devices are not yet fully included in all recognition frameworks.',
  },
  {
    question: 'How does BioNixus serve UK-based medical device companies expanding to MENA?',
    answer: 'BioNixus\'s London office serves as the commercial intelligence hub for UK and European medical device companies expanding into GCC and MENA markets. We provide MOHAP (UAE), SFDA (Saudi Arabia), HMC (Qatar), and GCC-wide regulatory pathway intelligence; hospital procurement research at major GCC accounts; distributor network mapping; and primary research with biomedical engineers, procurement managers, and clinical specialists across the region. BioNixus connects UK medtech expertise with the GCC\'s rapidly growing hospital and medtech demand.',
  },
], 'uk');

const REPORT_CONVERSION = getStandaloneReportConfig('/uk-medical-devices-market-report');
const FAQ_SECTION_ID = 'uk-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UK Medical Devices Market Report 2026: UKCA, MHRA, and NHS Procurement Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/uk-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/uk-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "UK Medical Devices Market Report 2026 | UKCA, MHRA & NHS Supply Chain | BioNixus",
    pageMetaDescription: "UK medical devices market at GBP 12–13B in 2026. UKCA marking post-Brexit, MHRA registration, NHS Supply Chain procurement, and BioNixus intelligence for UK medtech companies expanding to GCC and MENA.",
    countryName: "United Kingdom",
    marketSlug: "uk",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const UkMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="UK Medical Devices Market Report 2026 | UKCA, MHRA & NHS Supply Chain | BioNixus"
      description="UK medical devices market at GBP 12–13B in 2026. UKCA marking post-Brexit, MHRA registration, NHS Supply Chain procurement, and BioNixus intelligence for UK medtech companies expanding to GCC and MENA."
      canonical="https://www.bionixus.com/uk-medical-devices-market-report"
      jsonLd={jsonLd}
    />
      <ReportReadingProgress progressId="report-rp-uk-medical-devices-market-report" />
      <main>
      <div className="section-padding pt-24 pb-4"><div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div></div>
              <ReportPremiumHero
          title="UK Medical Devices Market Report 2026: UKCA Marking, NHS Supply Chain, and MHRA Regulatory Intelligence"
          description="BioNixus delivers UK medical device market intelligence — MHRA regulatory tracking, NHS Supply Chain procurement strategy, and primary research with clinical specialists and procurement leads at NHS trusts and private hospital groups."
          config={REPORT_CONVERSION}
          marketSlug="uk"
          countryName="UK"
          stats={[
            { value: '~£12.5B', label: 'UK medical devices market 2026' },
            { value: '~£17B', label: 'Forecast 2030' },
            { value: '5.5%', label: 'CAGR 2026–2030' },
          ]}
        />
      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~£12.5B</p><p className="text-xs text-muted-foreground mt-1">UK medical devices market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~£17B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">5.5%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">The UK medical devices market is Europe's third-largest by value, combining a significant NHS procurement base with a premium private hospital sector. Post-Brexit, UKCA marking and MHRA registration are the regulatory requirements for Great Britain, creating a UK-specific compliance pathway alongside — but distinct from — EU MDR/IVDR compliance for European market access.</p>
          <p className="text-muted-foreground leading-relaxed">See also: <Link to="/uk-healthcare-market-report" className="text-primary hover:underline font-medium">UK Healthcare Market Report</Link> and <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC Medical Devices Market Report</Link>.</p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
        </div>
      </section>

        <MarketIntelligenceSections marketSlug="uk" countryName="United Kingdom" variant="medical-devices" />
      <section className="section-padding" id="regulatory">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">UK Medical Device Regulatory Framework 2026</h2>
          <div className="space-y-4">
            {[
              { label: 'MHRA & UKCA Marking', body: 'MHRA is the UK\'s independent post-Brexit medical device regulator. UKCA marking is required for all devices placed on the GB market. Northern Ireland accepts CE marking under the Windsor Framework. Class IIa, IIb, and III devices require Notified Body involvement.' },
              { label: 'NHS Supply Chain', body: 'NHS Supply Chain manages framework agreements across all major device categories — surgical instruments, imaging, diagnostics, orthopaedics, and cardiovascular. Framework inclusion is essential for NHS volume procurement in England.' },
              { label: 'IDAP (Innovative Devices Access Pathway)', body: 'MHRA\'s early access pathway for novel medical technologies. Provides accelerated MHRA assessment alongside NHS England early access designation — parallel to the ILAP pathway for pharmaceuticals.' },
              { label: 'Private Hospital Procurement', body: 'HCA Healthcare UK, Spire Healthcare, Nuffield Health, and Ramsay Health Care procure independently from NHS frameworks. Premium device acceptance and faster adoption of new technologies. Clinical champion engagement is critical for private sector penetration.' },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
              <section className="section-padding" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Related BioNixus market intelligence</h2>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus runs medical device and MedTech market research across Europe. Compare the UK device market with our{' '}
              <Link to="/germany-medical-devices-market-report" className="text-primary hover:underline font-medium">Germany medical devices market report</Link>{' '}and{' '}
              <Link to="/france-medical-devices-market-report" className="text-primary hover:underline font-medium">France medical devices market report</Link>, set it against the{' '}
              <Link to="/uk-healthcare-market-report" className="text-primary hover:underline font-medium">UK healthcare market report</Link>, or widen the lens with the{' '}
              <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">GCC medical devices market report</Link>. For methods and global coverage, see the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">global healthcare market research hub</Link>{' '}and our{' '}
              <Link to="/market-research-healthcare" className="text-primary hover:underline font-medium">healthcare market research services</Link>.
            </p>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="UK medical devices market 2026 — UKCA, MHRA, NHS Supply Chain, and procurement FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />        </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
    <Footer />
  </div>
);

export default UkMedicalDevicesMarketReport;
