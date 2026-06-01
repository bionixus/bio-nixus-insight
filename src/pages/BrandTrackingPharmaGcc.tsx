import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  ExecutiveDecisionBlock,
  PremiumHero,
  ProofMetricGrid,
} from '@/components/page/PremiumPageSections';

const pageUrl = 'https://www.bionixus.com/brand-tracking-pharma-gcc';

const faqItems = [
  {
    question: 'How frequently should a pharma brand run tracking in GCC markets?',
    answer:
      'Tracking frequency should match the pace of competitive and commercial change in the relevant therapy area. For established, stable therapy areas — such as antihypertensives or oral antidiabetics — annual or bi-annual tracking is typically sufficient to detect meaningful trends. For therapy areas undergoing active competitive disruption — new biologic entrants in rheumatology or oncology, biosimilar launches in established biologic classes, or active promotional battles between two or three direct competitors — quarterly tracking is recommended. In GCC specifically, the timing of SFDA or DHA/DOH formulary listing decisions, which can happen at defined review cycles, can trigger rapid changes in prescribing behaviour that quarterly tracking captures and annual tracking misses entirely. BioNixus recommends a frequency assessment at programme initiation, reviewing the competitive event calendar and expected regulatory milestones for at least the next 12 months, to determine the optimal wave schedule before committing to the programme design.',
  },
  {
    question: 'What sample sizes are needed for robust GCC brand tracking?',
    answer:
      'Reliable wave-on-wave trend detection requires sufficient sample size to achieve statistical power at the metric level, not just the overall sample level. BioNixus recommends a minimum of 80 healthcare professionals per market per wave for primary specialist audiences in most GCC therapy areas — this provides approximately 80% power to detect a 10 percentage point change in prescribing intent or aided awareness at a 95% confidence level. For markets with smaller specialist populations — such as Kuwait or Bahrain in rare disease specialties — achieving n=80 may not be feasible, and the programme should explicitly account for wider confidence intervals around wave-on-wave comparisons. Where multi-market GCC tracking is commissioned, KSA and UAE typically serve as primary markets with n=100–150 each, while Kuwait, Qatar, Bahrain, and Oman serve as secondary markets with n=50–80 each. Patient brand tracking uses different sample logic: n=50–100 patients per market per wave is typically feasible for common chronic conditions; rarer conditions require feasibility assessment.',
  },
  {
    question: 'Which metrics should be included in a GCC pharma brand tracking programme?',
    answer:
      'A complete GCC brand tracking KPI framework for HCP audiences spans five measurement domains. Awareness: unaided brand awareness in class, unaided recall as first-mentioned brand, and aided awareness. Perceptions: rating of the brand on the most commercially critical product attributes — typically 6–10 attributes selected through pre-tracking qualitative research — versus the leading 2–3 competitors. Prescribing behaviour: current prescribing frequency, share of new patients started on the brand, intention to increase or decrease prescribing in the next 3 months. Promotional equity: recall of promotional materials by channel (detail visit, e-detail, congress, digital), and rating of the quality of promotional messaging. Net Promoter Score (NPS): likelihood to recommend the brand to a colleague. A minimum viable tracking instrument covering these domains takes approximately 15–20 minutes to complete. BioNixus also recommends including 2–3 open-ended verbatim questions per wave to capture unaided language around the brand and competitors, which provides qualitative texture to the quantitative metrics and early warning of emerging perception issues.',
  },
  {
    question: 'How does GCC brand tracking differ methodologically from US or European tracking?',
    answer:
      'GCC brand tracking differs from Western programme designs in several important respects. First, sample frame complexity: GCC specialist physician populations are smaller and more concentrated than US or EU populations, meaning that fresh-sample recruitment per wave is more expensive and slower. Panel-based tracking — using a consistent cohort of opted-in specialists — is frequently more practical in GCC, with rotating fresh-sample refreshment to avoid panel conditioning bias. Second, language and instrument adaptation: in KSA, Arabic-language instruments are strongly preferred and typically achieve 15–25% higher completion rates than English-only instruments among Saudi national physicians. In UAE, English is dominant but UAE national physicians may prefer Arabic. Instrument translation and back-translation with cultural adaptation is standard BioNixus practice. Third, competitive reference set: GCC markets may include regional brands, locally manufactured generics, and GCC-specific product variants that are not present in US or EU competitive landscapes and must be incorporated into the competitive battery. Fourth, channel mix: the promotional channel landscape differs — WhatsApp-based HCP communication is a legitimate professional channel in MENA and warrants inclusion as a tracked channel, as it is absent from standard EU/US tracking designs.',
  },
  {
    question: 'Can GCC brand tracking data be integrated with IQVIA MIDAS or other secondary data sources?',
    answer:
      'Yes. IQVIA MIDAS provides prescription volume data for GCC markets at varying levels of granularity — KSA and UAE have the most comprehensive IQVIA coverage in the region. Brand tracking data can be integrated with IQVIA sales data to produce a combined commercial performance dashboard: tracking surveys measure intent, awareness, and perception drivers, while IQVIA quantifies actual prescribing volume and market share movements. This integration is particularly valuable for diagnosing commercial performance gaps — for example, when IQVIA data shows declining share but tracking shows stable prescribing intent, the gap points to a distribution or access problem rather than a perception issue, which directs a very different commercial response. BioNixus designs tracking survey instruments and data deliverables with IQVIA integration in mind: KPI categorisation aligns with IQVIA product and market segment codes, and wave timing is synchronised with IQVIA data extract schedules where possible. IQVIA data access is the client\'s responsibility; BioNixus provides the tracking primary research and the integrated analytical framework.',
  },
  {
    question: 'What does a GCC brand tracking programme cost and how long does each wave take?',
    answer:
      'A single GCC brand tracking wave covering KSA and UAE with n=100–150 HCPs per market typically costs between $60,000 and $120,000 and requires 6–8 weeks from survey instrument finalisation to deliverables. Programmes covering additional GCC markets (Kuwait, Qatar, Bahrain, Oman) at n=50–80 per market add approximately $15,000–$25,000 per additional market per wave. Patient brand tracking programmes for the same markets add $20,000–$40,000 per wave depending on patient recruitment complexity. Multi-wave programme agreements — committing to 2–4 waves over 12–24 months — typically attract 10–15% cost reductions versus single-wave commissioning. All brand tracking programmes include a standing KPI dashboard delivered as an Excel or PowerPoint executive summary file after each wave, with wave-on-wave trending and competitive benchmark visualisation. Programmes can be expanded to include a real-time digital dashboard hosted on BioNixus infrastructure for continuous senior-leadership visibility.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Brand Tracking Pharma GCC',
    serviceType: 'Pharmaceutical brand tracking research across GCC markets',
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    description:
      'BioNixus delivers longitudinal pharma brand tracking programmes across GCC markets, covering HCP awareness, prescribing intent, promotional equity, and competitive share. Quarterly, bi-annual, and annual wave designs with IQVIA integration capability.',
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research Agency GCC', href: '/healthcare-market-research-agency-gcc' },
    { name: 'Brand Tracking Pharma GCC', href: '/brand-tracking-pharma-gcc' },
  ]),
  buildFAQSchema(faqItems),
];

export default function BrandTrackingPharmaGcc() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Brand Tracking Pharma GCC | BioNixus</title>
        <meta
          name="description"
          content="Brand tracking pharma GCC: longitudinal HCP and patient brand tracking across Saudi Arabia, UAE, Kuwait, and Qatar. Awareness funnel, prescribing intent, promotional equity, and IQVIA integration. Quarterly to annual wave designs from $60,000 per wave."
        />
        <link rel="canonical" href={pageUrl} />
        {jsonLd.map((schema, index) => (
          <script key={`bt-gcc-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Healthcare Market Research Agency GCC', href: '/healthcare-market-research-agency-gcc' },
            { name: 'Brand Tracking Pharma GCC', href: '/brand-tracking-pharma-gcc' },
          ]}
        />
        <PremiumHero
          h1="Brand Tracking Pharma GCC"
          intro="BioNixus designs and delivers longitudinal pharma brand tracking programmes across GCC markets — Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman — capturing the HCP and patient metrics that predict commercial performance. From quarterly competitive intelligence to annual awareness benchmarks, our GCC brand tracking programmes are calibrated to the pace and dynamics of each therapy area."
          links={[
            { to: '/commercial-effectiveness-pharma-middle-east', label: 'Commercial effectiveness pharma Middle East' },
            { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
            { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research' },
            { to: '/bionixus-market-research-middle-east', label: 'BioNixus market research Middle East' },
            { to: '/contact', label: 'Request brand tracking scope' },
          ]}
        />

        <ExecutiveDecisionBlock
          heading="GCC brand tracking: decision framework"
          points={[
            {
              title: 'Why it matters',
              body: 'GCC pharmaceutical markets are undergoing rapid competitive change driven by generic entry, biosimilar launches, and aggressive new market entrants from China and India. Brand equity built through years of promotional investment can erode within 2–3 quarters. Longitudinal tracking is the only way to detect erosion early enough to intervene.',
            },
            {
              title: 'What the evidence says',
              body: 'BioNixus tracking analysis across GCC therapy areas consistently shows that the prescribing intent gap between leading and lagging brands at the HCP level predicts IQVIA market share movements 1–2 quarters in advance, giving commercial teams actionable lead time to adjust promotional investment.',
            },
            {
              title: 'What to do next',
              body: 'Define the competitive set, the HCP audience, and the key commercial questions the tracking must answer. BioNixus will design a KPI framework and wave schedule, provide a feasibility and cost estimate, and recommend integration with IQVIA or other secondary data sources before programme launch.',
            },
          ]}
        />

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-10">

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                What brand tracking is and why pharma brands need it in GCC
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Brand tracking is a longitudinal primary research programme that measures the same set of commercially critical metrics across the same audience at defined intervals — typically quarterly, bi-annually, or annually — to detect changes in brand health over time and relative to competitors. Unlike a one-time market research study, brand tracking produces actionable trend data: the direction of travel for awareness, prescribing intent, and promotional equity is often more commercially meaningful than any single point-in-time measurement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In GCC markets specifically, the case for systematic brand tracking is compelling for several structural reasons. First, GCC pharmaceutical markets are growing rapidly — Saudi Arabia's pharmaceutical market is projected to exceed $12 billion by 2026 — attracting new entrants and intensifying competition. Second, generic and biosimilar penetration is accelerating, with local manufacturers and Indian and Chinese generics companies competing aggressively on price in all six GCC markets. Third, regulatory milestones — SFDA formulary listings, DHA/DOH coverage decisions — can shift the competitive landscape rapidly, often in ways that are not visible through secondary data alone. Fourth, the concentrated specialist prescriber base in GCC means that awareness or perception shifts among even 20–30 key specialists can have material commercial impact, a sensitivity that is only detectable through tracking research designed for the GCC context.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                HCP brand tracking metrics and KPI framework
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The BioNixus GCC HCP brand tracking KPI framework is organised around five measurement domains, each of which maps to a specific commercial decision or diagnostic question.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Awareness funnel</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unaided awareness — naming the brand without prompting when asked about products in the therapy area — is the most sensitive leading indicator of brand salience in the prescribing mind. Aided awareness captures the proportion of physicians who recognise the brand when named. Top-of-mind unaided awareness, expressed as the brand named first, is particularly predictive of prescribing behaviour: GCC physicians who name a brand first in their unaided recall are 3–4 times more likely to be regular prescribers than those who mention it only on aided prompt. Tracking the unaided funnel — unaided mention, unaided top-of-mind, aided awareness — over time identifies whether promotional investment is translating into lasting brand memory or delivering only transient recall.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Prescribing intent and behaviour</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Current prescribing frequency (how many patients were prescribed the brand in the last month), new patient starts (proportion of newly diagnosed or newly treated patients started on the brand versus competitors), and forward-looking prescribing intent (likelihood to increase, maintain, or decrease prescribing in the next 3 months) collectively form the most direct commercial performance signal in the tracking framework. In GCC, it is important to capture prescribing behaviour separately for public hospital patients (formulary-constrained) and private patients (discretionary prescribing), as these channels have meaningfully different competitive dynamics.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Brand perception and positioning</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perception ratings on a defined attribute set — typically 8–12 attributes identified through pre-tracking qualitative research as the most commercially relevant in the therapy area — provide the diagnostic layer that explains why awareness or prescribing metrics are moving. Attribute batteries cover clinical dimensions (efficacy in real-world patients, safety profile, speed of onset), practical dimensions (dosing convenience, device usability, patient support), and commercial dimensions (cost-effectiveness, reimbursement availability). Wave-on-wave perception movement on individual attributes pinpoints where the brand is gaining or losing ground relative to competitors and guides promotional strategy refinement.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Promotional equity and channel recall</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Promotional equity measures the extent to which the brand's promotional activities are generating positive commercial return — specifically, whether physicians who have been reached by the brand's promotional programme have higher awareness, more positive perceptions, and stronger prescribing intent than those who have not. Channel-level recall data — measuring which HCPs recall exposure to detail visits, e-details, congress symposia, journal advertising, digital materials, or WhatsApp communication — maps the reach and penetration of each promotional channel and identifies gaps between investment and actual physician reach.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Net Promoter Score</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NPS — the likelihood to recommend the brand to a colleague on a 0–10 scale — is a compact summary metric of overall brand advocacy. In GCC pharma tracking, NPS is valuable less as an absolute number and more as a wave-on-wave trend indicator: sustained NPS decline despite stable prescribing volumes is often the earliest warning sign of impending market share loss as detractor physicians begin influencing peer prescribers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Patient brand tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For consumer-facing pharma brands — particularly in chronic disease categories such as diabetes, asthma, cardiovascular disease, and dermatology — patient brand tracking provides a complementary perspective to HCP tracking. Patient tracking in GCC measures disease awareness (do patients in the target indication know the condition by name?), treatment awareness (have patients heard of the brand?), treatment experience and satisfaction (among current users), and adherence intentions. Patient tracking in GCC requires adaptation for cultural and linguistic context: Arabic-language instruments are essential for reaching Saudi national and UAE national patients, who account for a significant proportion of patients with lifestyle-related chronic conditions. BioNixus uses in-country Arabic-language patient research networks to recruit and survey patient panels in KSA and UAE.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                KSA-specific brand tracking considerations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Saudi Arabia requires specific design adaptations for effective pharma brand tracking. The specialist base is geographically concentrated: Riyadh and Jeddah together account for approximately 65–70% of Saudi specialist physicians in most therapy areas, while Mecca, Medina, Dammam, and the Eastern Province account for most of the remainder. Sampling strategies must reflect this geographic concentration to avoid over-representing Riyadh specialists in a way that skews the overall KSA picture.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Language is a critical design variable. Saudi national physicians — who make up a growing proportion of the specialist workforce as Saudisation programmes progress — strongly prefer Arabic-language research instruments. BioNixus designs bilingual tracking instruments (Arabic and English) with consistent KPI operationalisation across languages, validated through cognitive pilot interviews before wave launch. Survey completion rates for Saudi national specialists are 20–30% higher with Arabic-first instruments than with English-only instruments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The SFDA competitive landscape must also be incorporated into the KSA competitive tracking battery. Saudi Arabia has approved a number of regional and locally manufactured products that are not present in UAE or other GCC markets, and these local products hold formulary positions in MOH hospitals that can materially affect the competitive share of voice calculation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                UAE-specific brand tracking considerations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UAE brand tracking is shaped by the multi-national composition of the HCP workforce. The UAE specialist physician population includes significant proportions of Egypt, India, UK, US, and Philippines-trained physicians, each with different prescribing habits, familiarity with international clinical literature, and cultural orientation toward pharmaceutical promotional channels. English is the effective professional language for most UAE specialists, and English-language tracking instruments are appropriate for the majority of the physician audience. However, UAE national physicians — a small but commercially important group in SEHA facilities, particularly in Abu Dhabi — respond better to Arabic instruments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Dubai versus Abu Dhabi market split warrants explicit treatment in UAE brand tracking design. DHA and DOH formulary listings differ for several speciality products, meaning that prescribing behaviour drivers — particularly around formulary availability and reimbursement status — will differ by emirate. BioNixus recommends a minimum of n=50 per emirate within a UAE tracking wave to enable valid sub-market analysis when commercial teams need to understand DHA versus DOH dynamics separately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Dashboard, reporting, and secondary data integration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each brand tracking wave delivers a structured set of outputs designed for both strategic analysis and operational decision-making. The core deliverable is a wave-on-wave trend report: a PowerPoint and Excel package presenting all KPIs with time-series trending, competitive benchmarks, and statistical significance testing for wave-on-wave changes. The trend report is supplemented by a 2-page executive summary for senior leadership communication, highlighting the 3–5 most commercially significant findings and their implications for the next quarter's commercial activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For programmes integrated with IQVIA MIDAS data, BioNixus produces a combined commercial performance analysis that juxtaposes tracking KPIs — intent, awareness, perceptions — with IQVIA prescribing volumes and market share data, producing a single coherent narrative of brand health across primary and secondary data sources. This integrated analytical approach is particularly valuable for commercial leadership teams who need to explain brand performance movements to senior management or to global headquarters with access to IQVIA data but limited context on GCC market dynamics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Programme cost ranges and timelines
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GCC brand tracking programme costs and timelines depend on the number of markets, sample sizes, tracking frequency, and scope of reporting deliverables. Reference ranges for standard programme configurations are as follows.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li><strong>Single market (KSA or UAE), n=100–150 HCPs per wave:</strong> $60,000–$90,000 per wave, 6–8 weeks per wave.</li>
                <li><strong>Dual market (KSA + UAE), n=100–150 per market per wave:</strong> $90,000–$130,000 per wave, 6–8 weeks per wave.</li>
                <li><strong>Full GCC 6-market programme (KSA, UAE, Kuwait, Qatar, Bahrain, Oman):</strong> $150,000–$200,000 per wave, 8–10 weeks per wave.</li>
                <li><strong>Patient brand tracking addition (2 markets, n=75 per market):</strong> $30,000–$50,000 per wave added to HCP programme cost.</li>
                <li><strong>Multi-wave annual programme discount:</strong> 10–15% reduction for 4-wave annual commitment versus quarterly single-wave pricing.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/20 p-5">
              <h2 className="text-lg font-semibold text-foreground mb-3">GCC brand tracking proof points</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">HCP sample per wave</p>
                  <p className="text-xl font-semibold text-foreground">80–150</p>
                  <p className="text-xs text-muted-foreground mt-1">Per market per wave. Sufficient for 80% statistical power to detect 10pp changes in awareness or prescribing intent.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Wave delivery time</p>
                  <p className="text-xl font-semibold text-foreground">6–8 weeks</p>
                  <p className="text-xs text-muted-foreground mt-1">From survey instrument finalisation to wave-on-wave trend report delivery across KSA and UAE.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Programme cost range</p>
                  <p className="text-xl font-semibold text-foreground">$60K–$200K</p>
                  <p className="text-xs text-muted-foreground mt-1">Single-market to full 6-market GCC programme per wave. Multi-wave annual agreements attract 10–15% reduction.</p>
                </article>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/commercial-effectiveness-pharma-middle-east" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Commercial effectiveness pharma Middle East
              </Link>
              <Link to="/healthcare-market-research-agency-gcc" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Healthcare market research agency GCC
              </Link>
              <Link to="/gcc-hcp-recruitment-market-research" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                GCC HCP recruitment market research
              </Link>
              <Link to="/bionixus-market-research-middle-east" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                BioNixus market research Middle East
              </Link>
              <Link to="/contact" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Request brand tracking scope
              </Link>
            </div>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Brand tracking pharma GCC FAQs</h2>
              <div className="space-y-3">
                {faqItems.map((item) => (
                  <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
