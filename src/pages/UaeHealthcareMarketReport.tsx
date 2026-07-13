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
  { name: 'UAE Healthcare Market Report', href: '/uae-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the UAE healthcare market in 2026?',
    answer:
      'The UAE healthcare market is estimated at USD 30–33 billion in 2026, on a trajectory to reach approximately USD 60 billion by 2030 at a CAGR of 7–8%. The market is split between Abu Dhabi (~45%), Dubai (~40%), and other emirates (~15%). Private sector spend accounts for roughly 65% of total healthcare expenditure, driven by mandatory health insurance coverage across all seven emirates.',
  },
  {
    question: 'What is driving UAE healthcare market growth through 2030?',
    answer:
      'UAE healthcare growth is driven by five structural factors: (1) mandatory health insurance coverage expanding to all residents, (2) medical tourism — the UAE attracted over 350,000 medical tourists in 2025; (3) digital health and AI integration in clinical decision-making; (4) growing geriatric and chronic disease population; and (5) government healthcare investment under UAE Vision 2031 and Abu Dhabi\'s ADHA expansion program. Oncology, biologics, and digital therapeutics are the fastest-growing clinical segments.',
  },
  {
    question: 'How large is the UAE pharmaceutical market in 2026?',
    answer:
      'The UAE pharmaceutical market is valued at approximately USD 3.0–3.5 billion in 2026, making it the GCC\'s second-largest market after Saudi Arabia. Private hospital and retail pharmacy channels each account for roughly 30% of spend; the remainder flows through government hospital formularies under MOHAP, DOH, and DHA. Oncology, diabetes, and immunology are the three largest therapy areas by value.',
  },
  {
    question: 'What is the UAE medical devices market size?',
    answer:
      'The UAE medical devices market is estimated at USD 1.5–1.8 billion in 2026, with Dubai acting as the regional distribution hub for the broader Middle East. MOHAP device registration is required for all devices sold in the UAE, with mutual recognition available for products registered with MDSAP-recognized authorities. Diagnostic imaging, cardiovascular devices, and digital health hardware are the leading segments by value.',
  },
  {
    question: 'How does Dubai healthcare regulation compare to Abu Dhabi?',
    answer:
      'Dubai and Abu Dhabi operate separate healthcare regulatory systems. Dubai Health Authority (DHA) governs Dubai; Department of Health (DOH) governs Abu Dhabi; MOHAP regulates other emirates and issues federal pharmaceutical registrations. This creates a dual-pathway structure — products must achieve separate DHA and DOH approval for full UAE coverage. BioNixus maps regulatory timelines, formulary listing requirements, and payer access pathways across all three authorities.',
  },
  {
    question: 'How does BioNixus track UAE healthcare consumption data?',
    answer:
      'BioNixus tracks UAE pharmaceutical and medical device consumption through hospital procurement partnerships, pharmacy dispensing records, and primary HCP research across DHA-licensed, DOH-licensed, and MOHAP-registered facilities. Our UAE panel covers specialist physicians across oncology, cardiology, endocrinology, immunology, and general medicine — delivering prescribing behavior, formulary access barriers, and competitive intelligence at market, institution, and department level.',
  },
], 'uae');

const REPORT_CONVERSION = getStandaloneReportConfig('/uae-healthcare-market-report');
const FAQ_SECTION_ID = 'uae-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UAE Healthcare Market Report 2026: Market Size, Pharma, Medical Devices, and Commercial Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-01',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/uae-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/uae-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "UAE Healthcare Market Report 2026 | Market Size, Pharma & Medical Devices | BioNixus",
    pageMetaDescription: "UAE healthcare market estimated at USD 30B+ in 2026, reaching $60B by 2030. Covers pharma (USD 3.5B), medical devices (USD 1.8B), DHA and DOH regulation, and primary HCP research across Dubai and Abu Dhabi.",
    countryName: "United Arab Emirates",
    marketSlug: "uae",
    publishedDate: "2026-05-01",
    modifiedDate: "2026-05-27",
  })
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-display font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function EmirateCard({
  emirate,
  marketSize,
  regulator,
  children,
}: {
  emirate: string;
  marketSize: string;
  regulator: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-xl font-display font-semibold text-foreground mb-2">{emirate}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          {marketSize}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
          {regulator}
        </span>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const UaeHealthcareMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="UAE Healthcare Market Report 2026 | BioNixus"
        description="UAE healthcare market estimated at USD 30B+ in 2026, reaching $60B by 2030. Covers pharma (USD 3.5B), medical devices (USD 1.8B), DHA and DOH regulation."
        canonical="https://www.bionixus.com/uae-healthcare-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-uae-healthcare-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero */}
                <ReportPremiumHero
          title="UAE Healthcare Market Report 2026: Market Size, Pharmaceutical Intelligence, and Commercial Strategy"
          description="BioNixus delivers UAE pharmaceutical consumption data, HCP research, and market access intelligence across Dubai (DHA), Abu Dhabi (DOH), and federal MOHAP-regulated channels — covering hospital formularies, retail pharmacy, and specialist prescribing across all major therapeutic areas."
          config={REPORT_CONVERSION}
          marketSlug="uae"
          countryName="UAE"
          stats={[
            { value: '$30–33B', label: 'UAE healthcare market 2026 (est.)' },
            { value: '~$60B', label: 'Forecast by 2030' },
            { value: '7.5%', label: 'CAGR 2025–2030' },
          ]}
        />

        {/* Executive Summary */}
        <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Executive Summary
            </h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <StatCard value="$30–33B" label="UAE healthcare market 2026 (est.)" />
                <StatCard value="~$60B" label="Forecast by 2030" />
                <StatCard value="7.5%" label="CAGR 2025–2030" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The UAE is the GCC's second-largest healthcare market and its fastest-growing pharmaceutical market.
              Mandatory health insurance coverage across all seven emirates, a population of 10+ million anchored
              by a high-income expatriate majority, and a private-sector-dominant delivery model create
              consumption dynamics unlike any other GCC state.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The UAE operates three distinct regulatory environments — DHA in Dubai, DOH in Abu Dhabi, and MOHAP
              federally — creating a multi-pathway pharmaceutical and device registration landscape. BioNixus
              tracks market access timelines, formulary listing status, and consumption trends across all three
              authorities, enabling commercial teams to prioritize emirate-level entry sequences with precision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For UAE-specific market access research, see BioNixus's{' '}
              <Link to="/uae-market-access-research" className="text-primary hover:underline font-medium">
                UAE Market Access Research
              </Link>
              {' '}and{' '}
              <Link to="/uae-pharmaceutical-market-research" className="text-primary hover:underline font-medium">
                healthcare market research company in UAE
              </Link>
              . For therapy-focused briefings spanning DHA, DOH, and MOHAP dynamics, see{' '}
              <Link to="/market-reports/uae-oncology-market-report" className="text-primary hover:underline font-medium">
                UAE oncology market research report
              </Link>
              {' '}and{' '}
              <Link to="/market-reports/uae-diabetes-market-report" className="text-primary hover:underline font-medium">
                UAE diabetes market research report
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Emirate-Level Breakdown */}
        <section className="section-padding" id="emirate-breakdown">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Emirate-Level Healthcare Market Overview
            </h2>
            <div className="space-y-6">
              <EmirateCard emirate="Dubai" marketSize="~40% of UAE pharma spend" regulator="DHA">
                <p>
                  The UAE's largest private healthcare hub. Dubai Health Authority licenses approximately 3,000
                  healthcare facilities, with over 65% of pharmaceutical spend flowing through the private sector.
                  Medical tourism — attracting 350,000+ patients annually — concentrates premium prescription
                  drug demand at specialty centers in Healthcare City and Sheikh Zayed Road corridors.
                </p>
                <p>
                  <strong className="text-foreground">Commercial priority areas:</strong> Oncology, aesthetics,
                  dermatology, fertility, and executive health check programs. DHA pricing approval is required
                  for all drugs sold in Dubai, running in parallel to MOHAP registration.
                </p>
              </EmirateCard>

              <EmirateCard emirate="Abu Dhabi" marketSize="~45% of UAE pharma spend" regulator="DOH">
                <p>
                  The government-sector dominant emirate. The Department of Health Abu Dhabi operates a
                  mandatory health insurance framework through Daman (Thiqa for UAE nationals), creating a
                  structured formulary access model. SEHA — the Abu Dhabi Healthcare Company — operates the
                  largest hospital network and represents a high-priority institutional account.
                </p>
                <p>
                  <strong className="text-foreground">Commercial priority areas:</strong> Oncology (Cleveland
                  Clinic Abu Dhabi), rare diseases, specialty biologics, and chronic disease management across
                  diabetes and cardiovascular. DOH conducts its own HTA-adjacent review for high-cost drugs.
                </p>
              </EmirateCard>

              <EmirateCard emirate="Other Emirates" marketSize="~15% of UAE pharma spend" regulator="MOHAP">
                <p>
                  Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain fall under MOHAP federal
                  regulation. Market access achieved through MOHAP registration typically flows to these
                  markets without additional emirate-level approval. Combined population of ~2 million with
                  growing healthcare infrastructure investment particularly in Sharjah.
                </p>
              </EmirateCard>
            </div>
          </div>
        </section>

        {/* Therapy Areas */}
        <section className="section-padding bg-cream-dark" id="therapy-areas">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              UAE Pharmaceutical Therapy Area Trends 2026
            </h2>
            <div className="space-y-6">
              {[
                {
                  area: 'Oncology',
                  body: 'The UAE\'s fastest-growing therapy area by pharmaceutical spend. Cleveland Clinic Abu Dhabi and Mediclinic City Hospital are the two highest-volume oncology accounts. BioNixus tracks UAE oncology consumption at infusion unit level — essential for launch sequencing across institutional and outpatient settings.',
                },
                {
                  area: 'Diabetes and Metabolic Disease',
                  body: 'GLP-1 receptor agonist adoption is accelerating sharply in the UAE. BioNixus tracks GLP-1 prescribing at physician and account level — including initiation rates, dose escalation patterns, and competing product share — across both the DHA and DOH systems.',
                },
                {
                  area: 'Biologics and Biosimilars',
                  body: 'UAE biosimilar penetration is among the highest in the GCC, particularly in rheumatology and gastroenterology where DOH has published substitution guidance. BioNixus tracks originator-to-biosimilar switch rates at department and physician level.',
                },
                {
                  area: 'Digital Therapeutics and AI-Adjacent Categories',
                  body: 'The UAE is the region\'s leading market for digital health integration. BioNixus maps physician adoption of AI diagnostic tools, remote monitoring platforms, and connected device programs — a growing intelligence category for pharma companies developing companion services.',
                },
              ].map(({ area, body }) => (
                <div key={area} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{area}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="section-padding" id="commercial-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              UAE Healthcare Market: Commercial Intelligence
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Multi-pathway registration is the primary market access bottleneck',
                  body: 'MOHAP, DHA, and DOH run independent drug approval processes. A product registered with MOHAP does not automatically gain formulary access in Dubai or Abu Dhabi\'s government facilities. BioNixus maps UAE registration timelines and identifies authority-specific evidence requirements to optimize multi-pathway sequencing.',
                },
                {
                  title: 'Insurance formulary listing, not registration, determines actual patient access',
                  body: 'UAE payer landscape includes Daman (Abu Dhabi nationals), hundreds of private insurers, and employer self-insurance schemes. Formulary inclusion varies significantly by payer. BioNixus surveys prescribers on payer access barriers by product and insurer — identifying where access is the constraint versus awareness or preference.',
                },
                {
                  title: 'Medical tourism creates premium demand beyond the resident population',
                  body: 'Inbound medical tourists concentrate in specialty areas — oncology, cardiac, orthopedic, reproductive medicine — at price points significantly above standard UAE reimbursement. BioNixus quantifies the medical tourism contribution to product consumption at institutional level.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-primary/5 rounded-xl border border-primary/20 p-6">
                  <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        </ReportContentWithAside>

        <FAQSection
          sectionId={FAQ_SECTION_ID}
          title="UAE healthcare market 2026 — pharma, medical devices, DHA, DOH, and market access FAQ"
          items={REPORT_FAQ_ITEMS}
          className="bg-muted/30"
        />

        {/* CTA */}
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>

      <Footer />
    </div>
  );
};

export default UaeHealthcareMarketReport;
