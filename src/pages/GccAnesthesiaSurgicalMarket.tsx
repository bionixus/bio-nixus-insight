import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'GCC Anesthesia & Surgical Market Report', href: '/gcc-anesthesia-surgical-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the GCC anesthesia market in 2026?',
    answer:
      'The GCC anesthesia market is estimated at USD 850 million–1.0 billion in 2026, representing approximately 20–22% of the broader Middle East anesthesia market. Saudi Arabia accounts for the largest share (~50%), followed by the UAE (~25%). Growth is driven by expanding surgical infrastructure under Vision 2030, increasing elective procedure volumes, and rising chronic disease burden requiring operative intervention.',
  },
  {
    question: 'How many surgical procedures are performed in the GCC annually?',
    answer:
      'Approximately 1.8–2.2 million major surgical procedures are performed annually across the six GCC states, with Saudi Arabia accounting for roughly 950,000 procedures. Procedure volumes are growing at 6–8% annually, driven by bariatric surgery (GCC has among the highest obesity rates globally), cardiovascular surgery, oncologic resections, and orthopedic procedures. BioNixus tracks operating theater utilization and procedure volumes at hospital account level.',
  },
  {
    question: 'What are the leading anesthesia products and companies in Saudi Arabia and UAE?',
    answer:
      'The GCC anesthesia market is led by global pharmaceutical companies including Pfizer (propofol, midazolam), AstraZeneca (sevoflurane, desflurane), Baxter International (inhaled anesthetics), and Piramal Pharma (injectable anesthetics). Locally, Julphar manufactures select anesthetic generics. Procurement in Saudi Arabia flows primarily through NUPCO tendering for MOH and NGHA facilities; UAE procurement is institution-specific. Generics account for approximately 65% of anesthesia drug volume.',
  },
  {
    question: 'What is the GCC anesthesia market segmented by product type?',
    answer:
      'The GCC anesthesia market segments into: General Anesthesia (~55% of value) — primarily IV agents (propofol, ketamine) and volatile agents (sevoflurane, desflurane); Local and Regional Anesthesia (~30%) — bupivacaine, lidocaine, and nerve block formulations; and Anesthesia adjuncts (~15%) — neuromuscular blockers, reversal agents, and opioid adjuncts. Intravenous administration accounts for approximately 60% of volume; inhalation agents account for ~35%.',
  },
  {
    question: 'What is driving anesthesia market growth in the Middle East?',
    answer:
      'Five factors drive GCC anesthesia market growth: (1) expanding surgical bed and operating theater capacity under Vision 2030 (Saudi Arabia is adding 30,000+ hospital beds by 2030); (2) rising procedure volumes in bariatric, cardiac, and oncologic surgery; (3) ambulatory surgery center development reducing inpatient dependency; (4) technology adoption — ultrasound-guided regional anesthesia reducing general anesthesia exposure; and (5) growing private hospital capacity increasing elective procedure access. Geriatric population growth increases surgical risk complexity, creating demand for advanced monitoring and anesthesia management tools.',
  },
  {
    question: 'How does BioNixus track GCC anesthesia and surgical market data?',
    answer:
      'BioNixus tracks GCC anesthesia consumption through hospital pharmacy dispensing records, operating theater utilization data, and primary research with anesthesiologists, department heads, and hospital procurement managers. Our surgical procedure volume tracking covers major hospitals across all six GCC states — enabling pharmaceutical companies to estimate anesthesia product consumption by hospital account, procedure type, and patient segment. This account-level intelligence is directly applicable to NUPCO formulary dossiers, key account management strategy, and launch forecasting.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/gcc-anesthesia-surgical-market-report');
const FAQ_SECTION_ID = 'gcc-anesthesia-surgical-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCC Anesthesia and Surgical Market Report 2026: Hospital Consumption and Commercial Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-01',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/gcc-anesthesia-surgical-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/gcc-anesthesia-surgical-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "GCC Anesthesia & Surgical Market Report 2026 | Hospital Procedure Intelligence | BioNixus",
    pageMetaDescription: "GCC anesthesia market estimated at USD 850M–1B in 2026. Hospital-level surgical procedure volumes, anesthesia drug consumption by account, NUPCO formulary intelligence, and primary HCP research across Saudi Arabia and UAE.",
    countryName: "GCC",
    marketSlug: "gcc",
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

const GccAnesthesiaSurgicalMarket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="GCC Anesthesia & Surgical Market Report 2026 | BioNixus"
        description="GCC anesthesia market estimated at USD 850M–1B in 2026. Hospital-level surgical procedure volumes, anesthesia drug consumption by account, NUPCO formulary."
        canonical="https://www.bionixus.com/gcc-anesthesia-surgical-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-gcc-anesthesia-surgical-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <ReportPremiumHero
          title="GCC Anesthesia and Surgical Market Report 2026: Hospital Procedure Volumes and Drug Consumption Intelligence"
          description="BioNixus tracks operating theater utilization, anesthesia drug dispensing, and surgical procedure volumes at hospital account level across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman — delivering consumption intelligence that aggregate market reports cannot provide."
          config={REPORT_CONVERSION}
          marketSlug="gcc"
          countryName="GCC"
          stats={[
            { value: '~$950M', label: 'GCC anesthesia market 2026 (est.)' },
            { value: '2M+', label: 'Annual GCC surgical procedures' },
            { value: '6.8%', label: 'CAGR 2026–2030' },
          ]}
        />

        <ReportContentWithAside
          config={REPORT_CONVERSION}
          tocItems={[
            { href: '#executive-summary', label: 'Executive summary' },
            { href: '#segmentation', label: 'Segmentation' },
            { href: '#country-overview', label: 'Country overview' },
            { href: '#commercial-intelligence', label: 'Commercial intelligence' },
            { href: `#${FAQ_SECTION_ID}`, label: 'FAQ' },
          ]}
        >
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Executive Summary
            </h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <StatCard value="~$950M" label="GCC anesthesia market 2026 (est.)" />
                <StatCard value="2M+" label="Annual GCC surgical procedures" />
                <StatCard value="6.8%" label="CAGR 2026–2030" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The GCC anesthesia market sits at the intersection of two major trends: a rapidly expanding
              surgical infrastructure driven by Vision 2030 hospital bed capacity investment, and rising
              procedure volumes across bariatric surgery, oncologic resections, cardiovascular surgery, and
              orthopedics. Approximately 1.8–2.2 million major surgical procedures are performed across the
              GCC annually, each requiring an average of 2–4 anesthesia drug administrations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The global anesthesia market was valued at USD 4.2 billion in 2022 and is projected to reach
              USD 6.1 billion by 2029 at 6.4% CAGR. The GCC represents approximately 16% of the broader
              Middle East and Africa region — a disproportionately large share relative to population, driven
              by high hospital infrastructure density and surgical procedure sophistication in Saudi Arabia
              and the UAE.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus tracks anesthesia consumption at hospital department level across all six GCC states.
              For pharmaceutical procurement context, see our{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC Pharmaceutical Market Report 2026
              </Link>.
            </p>
          </div>
        </section>

        {/* Market Segmentation */}
        <section className="section-padding" id="segmentation">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              GCC Anesthesia Market Segmentation
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">By Anesthesia Type</h3>
                <div className="space-y-3">
                  {[
                    { label: 'General Anesthesia', share: '~55%', note: 'IV and inhalation agents for major surgery — NUPCO tender dominant in KSA' },
                    { label: 'Regional/Local Anesthesia', share: '~30%', note: 'Growing with ultrasound-guided nerve block adoption in private hospitals' },
                    { label: 'Adjuncts & Reversal Agents', share: '~15%', note: 'Neuromuscular blockers, sugammadex, anticholinesterases' },
                  ].map(({ label, share, note }) => (
                    <div key={label} className="bg-white rounded-lg border border-border p-4">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-foreground text-sm">{label}</p>
                        <span className="text-xs font-medium text-primary">{share}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">By Administration Route</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Intravenous', share: '~60%', note: 'Propofol, ketamine, midazolam, fentanyl — hospital pharmacy dispensed' },
                    { label: 'Inhalation', share: '~35%', note: 'Sevoflurane dominant; desflurane use declining on sustainability grounds' },
                    { label: 'Other Routes', share: '~5%', note: 'Spinal, epidural, topical — growing with regional technique adoption' },
                  ].map(({ label, share, note }) => (
                    <div key={label} className="bg-white rounded-lg border border-border p-4">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-foreground text-sm">{label}</p>
                        <span className="text-xs font-medium text-primary">{share}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-lg font-display font-semibold text-foreground mb-4">By Surgery Type — GCC Procedure Volume Drivers</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { type: 'Bariatric Surgery', note: 'GCC has among the world\'s highest obesity rates. Saudi Arabia performs 30,000+ bariatric procedures annually, making it a major propofol and volatile agent consumption driver.' },
                { type: 'Cardiovascular Surgery', note: 'Cardiac surgery volumes at KFSH&RC, Cleveland Clinic Abu Dhabi, and King Fahad Cardiac Center create concentrated high-acuity anesthesia consumption.' },
                { type: 'Oncologic Surgery', note: 'Expanding cancer surgery volumes tracking GCC oncology drug market growth. Operating room hours per oncologic case exceed general surgery averages.' },
                { type: 'Orthopedic Surgery', note: 'Joint replacement and spine surgery growing with population aging and sports medicine. Regional anesthesia adoption highest in this surgical category.' },
                { type: 'Obstetric Surgery', note: 'High caesarean section rates across GCC (35–45%) drive spinal and epidural anesthesia volumes. Epidural labor analgesia adoption growing in private hospitals.' },
                { type: 'Ophthalmic Surgery', note: 'High-volume, rapid-turnover procedures preferring TIVA protocols — topical anesthesia and sub-Tenon blocks reducing general anesthesia exposure.' },
              ].map(({ type, note }) => (
                <div key={type} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-2">{type}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Country Overview */}
        <section className="section-padding bg-cream-dark" id="country-overview">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              GCC Country-Level Anesthesia Market Overview
            </h2>
            <div className="space-y-4">
              {[
                {
                  country: 'Saudi Arabia',
                  size: '~50% of GCC market',
                  detail: 'Largest surgical volume market driven by 250,000+ MOH hospital beds, NGHA facilities, and a rapidly growing private hospital sector. NUPCO tender process governs anesthesia drug procurement across all government hospitals. BioNixus tracks NUPCO tender outcomes and hospital-level anesthesia drug consumption by department.',
                },
                {
                  country: 'United Arab Emirates',
                  size: '~25% of GCC market',
                  detail: 'Private hospital dominant procurement model. DHA and DOH hospital tenders are conducted institution-by-institution rather than through centralized procurement. Medical tourism drives above-average complexity surgical cases at major centers. BioNixus covers surgical procedure volumes across DHA-licensed and DOH-licensed hospitals.',
                },
                {
                  country: 'Kuwait',
                  size: '~10% of GCC market',
                  detail: 'MOH Central Medical Stores procurement dominates (85%+ of volume). Kuwait procedural volumes are growing with public hospital expansion. Generic substitution in anesthesia is high — branded differentiation requires clinical evidence. BioNixus tracks Kuwait hospital anesthesia procurement at department level.',
                },
                {
                  country: 'Qatar, Bahrain, Oman',
                  size: '~15% combined',
                  detail: 'Qatar\'s Hamad Medical Corporation is the dominant surgical site; growing surgical complexity with specialty program expansion. Bahrain and Oman operate primarily through MOH procurement with smaller private sector procedural volumes.',
                },
              ].map(({ country, size, detail }) => (
                <div key={country} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <h3 className="text-lg font-display font-semibold text-foreground">{country}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {size}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Intelligence */}
        <section className="section-padding" id="commercial-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Commercial Intelligence: Anesthesia Market Strategy in GCC
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Procedure volume, not just formulary listing, determines consumption',
                  body: 'A formulary-listed anesthesia agent is used only when procedures are performed. BioNixus\'s operating theater utilization data maps which hospital accounts perform the highest surgical volumes — enabling commercial teams to prioritize accounts by actual consumption potential rather than bed count alone.',
                },
                {
                  title: 'NUPCO tender outcomes cascade across MOH hospitals',
                  body: 'In Saudi Arabia, NUPCO wins determine anesthesia drug supply across 240+ MOH hospitals simultaneously. BioNixus tracks NUPCO tender award history and forecast schedules — providing pharmaceutical teams with advance visibility into competitive tender positioning.',
                },
                {
                  title: 'Anesthesiologist preference drives brand selection in private hospitals',
                  body: 'Outside NUPCO-tendered accounts, anesthesiologist product preference is the primary demand driver. BioNixus conducts primary research with GCC anesthesiology departments — mapping protocol preferences, drug familiarity, and switching triggers at physician and institutional level.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-primary/5 rounded-xl border border-primary/20 p-6">
                  <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <FAQSection
          sectionId={FAQ_SECTION_ID}
          title="GCC anesthesia market — surgical volumes, NUPCO, and hospital procurement FAQ"
          items={REPORT_FAQ_ITEMS}
          className="bg-muted/30 rounded-2xl px-4 md:px-6"
        />
        </ReportContentWithAside>

        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>

      <Footer />
    </div>
  );
};

export default GccAnesthesiaSurgicalMarket;
