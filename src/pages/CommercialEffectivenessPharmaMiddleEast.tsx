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

const pageUrl = 'https://www.bionixus.com/commercial-effectiveness-pharma-middle-east';

const faqItems = [
  {
    question: 'What does a commercial effectiveness research programme for a Middle East pharma brand typically include?',
    answer:
      'A comprehensive Middle East commercial effectiveness programme covers five research streams that together provide a 360-degree view of commercial performance. First, sales force effectiveness (SFE) research: physician-facing surveys measuring call frequency, message recall, representative performance perception, and rep versus competitor comparison — conducted with 80–120 HCPs across KSA and UAE. Second, KOL mapping and influence network analysis: systematic identification of tier-1, tier-2, and tier-3 key opinion leaders by specialty, with network relationship mapping and influence scoring. Third, promotional channel audit: recall and engagement measurement across all active channels — detail visits, e-details, congress and CME, digital materials, and WhatsApp in MENA-specific contexts. Fourth, multi-channel customer experience research: integrated touchpoint auditing capturing how HCPs experience the brand across all channels collectively, not just in isolation. Fifth, commercial effectiveness scorecard: a structured synthesis of all research streams into a ranked prioritisation of commercial investment decisions. BioNixus delivers the complete programme over 12–16 weeks for two to three GCC markets at a total cost of $80,000–$250,000.',
  },
  {
    question: 'How is GCC sales force effectiveness research conducted, and what metrics matter most?',
    answer:
      'GCC SFE research is conducted through structured HCP surveys with physicians who are actual targets of the sales force in question — identified through the client\'s target list or through BioNixus panel recruitment with targeting criteria matching the client\'s commercial segmentation. Key SFE metrics span four domains. Reach and frequency: what proportion of target physicians received at least one rep visit in the past 3 months, and how many visits on average — the GCC context matters here because specialist bases are small and rep-to-physician ratios are high, meaning over-calling is a common problem. Message recall: unaided and aided recall of the key clinical messages the sales force was briefed to deliver — poor message recall despite high call frequency indicates a training or messaging problem rather than a reach problem. Representative performance perception: HCP ratings of rep knowledge depth, quality of clinical discussions, responsiveness to questions, and overall value of interaction. Competitive benchmarking: how the brand\'s rep performance ratings compare to the leading 2–3 competitors on the same dimensions, identifying relative strengths and vulnerabilities in the commercial execution.',
  },
  {
    question: 'How does KOL mapping work in KSA and UAE, and why does tier classification matter?',
    answer:
      'KOL mapping in KSA and UAE begins with systematic identification of all practising specialists in the target therapy area across licensing authority registers (SFDA for KSA, DHA/DOH/MOHAP for UAE), followed by enrichment with publication records, conference speaking activity, clinical guideline committee membership, and clinical study participation. BioNixus applies a three-tier classification framework. Tier-1 KOLs are national and international opinion leaders: physicians with active publication records, guideline committee roles, and international conference presence who shape peer prescribing norms and have direct influence on formulary committee decisions. Tier-2 KOLs are regional or institutional leaders: high-prescribing specialists with influence within their hospital or health system, advisory board participants, and local guideline adapters. Tier-3 HCPs are high-frequency prescribers without formal opinion leader status but with high commercial value due to patient volume. Tier classification directly informs resource allocation: tier-1 KOLs warrant senior medical affairs engagement and advisory board investment; tier-2 KOLs are the primary target for promotional programmes; tier-3 HCPs are the priority for sales force call planning. In KSA, KOL influence networks are particularly important because the specialist community in each therapy area is small enough that 5–10 tier-1 KOLs can materially shape prescribing norms nationally.',
  },
  {
    question: 'How do digital channel effectiveness and WhatsApp communication feature in GCC commercial effectiveness research?',
    answer:
      'Digital channel effectiveness in GCC pharma requires different research frameworks than European or US counterparts because the channel mix is different. WhatsApp is widely used as a professional communication channel between pharmaceutical representatives and physicians in the MENA region — surveys indicate that 60–75% of GCC-based HCPs regularly receive product information through WhatsApp from pharma company representatives, making it a primary rather than supplementary promotional channel in some therapy areas. BioNixus GCC commercial effectiveness programmes include WhatsApp as an explicit tracked channel: measuring recall of WhatsApp communications, rating the quality and relevance of content received, and assessing HCP preferences for the types of clinical content they want delivered through the channel. Beyond WhatsApp, GCC HCP digital behaviour includes high engagement with Medscape Arabic (for Arabic-language clinical content), LinkedIn for professional development, and various medical educational platforms. Platform preferences differ meaningfully by physician nationality: Egyptian-trained physicians in UAE show higher Medscape Arabic engagement; UK-trained specialists prefer English-language international platforms. Effective digital channel strategy requires physician-level targeting calibrated to nationality and training background.',
  },
  {
    question: 'How does KSA Vision 2030 change what commercial messages resonate with payers and HCPs?',
    answer:
      'Saudi Arabia\'s Vision 2030 health transformation programme — specifically the Health Transformation Program (HTP) operating under the National Transformation Program — is reshaping the commercial landscape in ways that directly affect what promotional messages resonate with both payers and healthcare professionals. The HTP is driving a shift from volume-based to value-based healthcare delivery: hospitals are being measured on outcomes, patient satisfaction, and cost-efficiency rather than just throughput. For pharmaceutical commercial teams, this shift means that messages focused purely on clinical efficacy are less resonant with KSA payers and health system administrators than messages that connect product outcomes to value-based healthcare metrics — reduced hospitalisations, improved disease control rates, reduced long-term complication burden, and total cost of care. BioNixus commercial effectiveness research for KSA programmes explicitly tests message resonance in this value-based care context: which clinical messages achieve the highest recall and positive rating among KSA health system administrators and payers, not just prescribing physicians. This is a distinct measurement requirement from standard promotional message testing and requires a separate payer-audience research instrument designed around Vision 2030 healthcare priorities.',
  },
  {
    question: 'What does a commercial effectiveness scorecard look like and how is it used in planning?',
    answer:
      'The BioNixus commercial effectiveness scorecard is a structured synthesis tool that translates all research streams into a ranked, action-ready prioritisation framework. The scorecard covers five commercial effectiveness dimensions — sales force performance, KOL engagement, promotional channel mix, message effectiveness, and digital presence — each scored on a 1–5 scale based on primary research findings, with competitive benchmarks where available. For each dimension, the scorecard identifies the top-priority improvement action with associated resource requirements and expected commercial impact. The scorecard is delivered as a 20–25 slide executive presentation for commercial leadership, with a 2-page summary suitable for board-level communication. It serves as the planning input for the annual commercial plan: investment allocation across channels, KOL engagement programme prioritisation, sales force training and briefing updates, and digital strategy refinement. BioNixus recommends updating the commercial effectiveness scorecard annually, with a mid-year light-touch check-in using a shorter pulse survey to confirm that key metrics are moving in the intended direction.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Effectiveness Pharma Middle East',
    serviceType: 'Pharmaceutical commercial effectiveness research and optimisation consulting in the Middle East',
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    description:
      'BioNixus delivers commercial effectiveness research programmes for pharma companies across the Middle East, covering sales force effectiveness, KOL mapping, promotional channel audits, digital channel analysis, and multi-channel customer experience research.',
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research Agency GCC', href: '/healthcare-market-research-agency-gcc' },
    { name: 'Commercial Effectiveness Pharma Middle East', href: '/commercial-effectiveness-pharma-middle-east' },
  ]),
  buildFAQSchema(faqItems),
];

export default function CommercialEffectivenessPharmaMiddleEast() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Commercial Effectiveness Pharma Middle East | BioNixus</title>
        <meta
          name="description"
          content="Commercial effectiveness pharma Middle East: sales force effectiveness research, KOL mapping, promotional channel audits, and multi-channel experience research across KSA, UAE, and GCC. Full programme $80,000–$250,000 over 12–16 weeks."
        />
        <link rel="canonical" href={pageUrl} />
        {jsonLd.map((schema, index) => (
          <script key={`ce-me-schema-${index}`} type="application/ld+json">
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
            { name: 'Commercial Effectiveness Pharma Middle East', href: '/commercial-effectiveness-pharma-middle-east' },
          ]}
        />
        <PremiumHero
          h1="Commercial Effectiveness Pharma Middle East"
          intro="BioNixus helps pharmaceutical commercial teams understand what is and is not working across every element of the marketing and sales mix in Middle East markets. From sales force effectiveness and KOL influence mapping to digital channel impact and promotional message testing, our commercial effectiveness programmes produce the evidence base for confident investment decisions in GCC markets."
          links={[
            { to: '/brand-tracking-pharma-gcc', label: 'Brand tracking pharma GCC' },
            { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
            { to: '/bionixus-market-research-middle-east', label: 'BioNixus market research Middle East' },
            { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research' },
            { to: '/contact', label: 'Request commercial effectiveness scope' },
          ]}
        />

        <ExecutiveDecisionBlock
          heading="Commercial effectiveness: decision framework"
          points={[
            {
              title: 'Why it matters',
              body: 'GCC pharmaceutical markets combine small, concentrated specialist bases with high rep-to-physician ratios and intensifying generic competition. Commercial investment that is not calibrated to these realities generates diminishing returns. Commercial effectiveness research identifies which investments are driving commercial outcomes and which are not.',
            },
            {
              title: 'What the evidence says',
              body: 'BioNixus commercial effectiveness research consistently identifies that promotional channel mix and KOL engagement are the two investment areas with the highest return volatility in GCC markets — yet they are the least frequently subjected to rigorous primary research measurement.',
            },
            {
              title: 'What to do next',
              body: 'Define the commercial effectiveness questions that most urgently need answering — SFE, channel mix, KOL network, or message effectiveness — and commission a scoped programme that addresses those questions with primary research designed for the specific GCC market context.',
            },
          ]}
        />

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-10">

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                What commercial effectiveness research covers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Commercial effectiveness research for pharmaceutical companies answers a set of interconnected questions about how well the full commercial mix — sales force, promotional materials, KOL engagement, digital channels, and congress presence — is translating investment into the physician behaviours that drive prescription volume. It is distinct from brand tracking, which measures outcomes (awareness, intent, share), because commercial effectiveness research examines the mechanisms by which those outcomes are or are not being achieved.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In Middle East and GCC markets specifically, commercial effectiveness research has a distinctive character shaped by four structural features. First, the specialist prescriber base is small relative to European or US markets — a GCC pharmaceutical company may be able to personally contact every commercially relevant cardiologist or oncologist in Saudi Arabia within a single year with a well-organised sales force, a scale of access that is simply not possible in large European markets. This intimacy makes the quality of each physician interaction disproportionately important, and commercial effectiveness research on interaction quality has high commercial leverage. Second, the promotional channel landscape includes channels — notably WhatsApp as a professional communication tool — that are absent from Western commercial effectiveness frameworks but are primary contact mechanisms in MENA. Third, KOL influence networks in GCC are tight: a small number of tier-1 specialists hold disproportionate influence over peer prescribing norms, making KOL engagement effectiveness a high-priority research question. Fourth, the transition to value-based care under Vision 2030 in Saudi Arabia is changing what messages resonate with health system decision-makers, requiring commercial teams to update their messaging frameworks based on current primary research rather than relying on pre-2020 positioning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Sales force effectiveness research in GCC
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GCC pharmaceutical sales force effectiveness research addresses a specific set of challenges that distinguish the region from European or US markets. The specialist physician base is small — in KSA, there are an estimated 500–600 practising oncologists and 800–1,000 cardiologists nationally — which means that rep-to-physician contact ratios are high. In some therapy areas, target physicians are contacted by multiple competing company representatives multiple times per week, creating significant call fatigue and attention fragmentation. Understanding where in this competitive attention landscape the brand's sales force sits, and how interaction quality compares to competitors, is the central SFE research question.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">SFE research methodology</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BioNixus GCC SFE research uses structured physician surveys administered to a representative sample of the client's HCP target list — typically 80–150 physicians per market, recruited either through the BioNixus physician panel or through targeted outreach to the client's commercial target universe. The survey captures: call frequency and channel of contact in the past 3 months (in-person detail, virtual detail, phone, WhatsApp, email); unaided and aided recall of key clinical messages delivered by the brand's representatives; rating of representative performance across 5–7 dimensions (clinical knowledge, discussion quality, responsiveness, leave-behind quality, overall value); comparison of the brand's representative versus the top-2 competitors on the same dimensions; and open-ended feedback on what would improve the interaction quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SFE research outputs are structured for direct use in sales force training and briefing: representative performance profiles by region and therapeutic area, message recall heat maps identifying which messages are penetrating and which are being missed, and a ranked list of interaction quality improvement priorities calibrated to the competitive context.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                KOL mapping and influence network analysis in KSA and UAE
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Key opinion leader mapping is not a list-building exercise — it is a structural analysis of how clinical influence flows through the specialist community in a given therapy area. In KSA and UAE, this analysis is commercially critical because the specialist communities are small enough that influence network dynamics are both highly consequential and highly actionable: identifying and engaging the right tier-1 KOLs can shift prescribing norms across an entire therapeutic category.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BioNixus KOL mapping programmes begin with systematic identification of all practising specialists across licensing authority registers (SFDA physician register for KSA; DHA, DOH, MOHAP registers for UAE), enriched with publication records from PubMed and regional journals, conference speaking activity at ESMO, ESC, ADA, EULAR, and regional GCC equivalents, clinical guideline committee membership (SFDA therapeutic committees, Saudi Heart Association, Saudi Endocrine Society), and clinical study principal investigator roles.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The resulting KOL database is then subjected to network analysis: structured interviews with 15–20 specialists asking them to name the physicians whose clinical opinions most influence their own prescribing decisions. This peer-nomination methodology identifies the actual influence network rather than a proxy based on publication count alone. The output is a three-tier KOL map — tier-1 national leaders, tier-2 regional and institutional leaders, tier-3 high-volume prescribers — with network relationship diagrams showing the connection structure between tiers and a recommended engagement strategy for each tier.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Promotional channel mix and message testing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Promotional channel effectiveness in GCC pharma encompasses a wider channel set than most Western commercial effectiveness frameworks account for. BioNixus GCC promotional channel audits measure physician reach, recall, and engagement quality across the following channels.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
                <li>
                  <strong>In-person detail visits:</strong> Still the primary promotional channel in GCC, but with diminishing call-to-value ratios as call frequencies increase. BioNixus measures both reach (what proportion of target physicians received an in-person visit in the past 3 months) and quality (how physicians rated the clinical value of the most recent visit).
                </li>
                <li>
                  <strong>E-detailing and virtual engagement:</strong> Adopted significantly during the COVID-19 period and maintained in many GCC markets as a supplementary channel for specialists with time-constrained clinic schedules. E-detail recall and quality ratings are measured alongside in-person detail benchmarks.
                </li>
                <li>
                  <strong>Congress and CME events:</strong> Regional and international congresses — Arab Health, Saudi Med, ISCU, ESCIM, and therapy-specific international conferences — represent high-engagement promotional moments with disproportionate KOL impact. BioNixus congress effectiveness research measures symposium attendance, key message takeaways, and post-congress behavioural intent change.
                </li>
                <li>
                  <strong>WhatsApp professional communication:</strong> A primary promotional channel for many GCC pharma brands, with 60–75% HCP adoption rates in MENA. BioNixus measures recall of WhatsApp content, content type preferences (clinical publications, treatment guidelines, patient case tools), and the regulatory and ethical compliance status of WhatsApp communications.
                </li>
                <li>
                  <strong>Digital content platforms:</strong> HCP online behaviour in GCC includes Medscape Arabic, LinkedIn, and regional medical education platforms. Platform preferences vary significantly by physician nationality, training background, and specialty.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Promotional message testing research supplements channel audits with concept-level evaluation: which key messages achieve the strongest combination of recall, relevance, and motivation impact among the target HCP audience. BioNixus uses validated message testing protocols — IMPACT framework or equivalent — adapted for GCC specialist cognitive contexts, with Arabic and English instrument versions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Share of voice measurement in GCC
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Share of promotional voice in GCC is measured differently from EU or US contexts because the GCC pharmaceutical industry does not have the same breadth of third-party promotional audit services (such as IQVIA's promotional spend tracking). BioNixus GCC share of voice measurement is therefore primarily primary-research based: physician surveys capturing recall of promotional activities across all competitors in the competitive set — how many companies' representatives visited the physician, how many company-sponsored educational events they attended, how many digital communications they received from each company — produce a primary-data-based share of voice estimate that is directly tied to physician experience rather than estimated from spend data.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Share of promotional voice is a leading indicator of future prescribing share: BioNixus GCC commercial effectiveness research consistently shows that promotional share of voice predicts market share movement with a 1–3 quarter lag in stable GCC therapy areas. Companies with declining share of voice relative to competitors — even while maintaining absolute promotional spending — should treat this as an early warning of future market share erosion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Programme outputs and commercial effectiveness scorecard
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A BioNixus Middle East commercial effectiveness programme delivers the following decision-ready outputs.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li><strong>Commercial effectiveness scorecard:</strong> Five-dimension scoring across SFE, KOL engagement, channel mix, message effectiveness, and digital presence, with competitive benchmarks and ranked investment prioritisation.</li>
                <li><strong>KOL influence map:</strong> Three-tier network diagram for each target specialty, with engagement status, influence scores, and recommended engagement strategy by tier.</li>
                <li><strong>Channel optimisation recommendations:</strong> Investment reallocation guidance across promotional channels, with estimated HCP reach and quality impact of recommended changes.</li>
                <li><strong>SFE performance profiles:</strong> Representative-level and regional-level SFE performance data packaged for sales leadership and training team use.</li>
                <li><strong>Message effectiveness report:</strong> Ranking of key clinical messages by recall, relevance, and motivation impact, with recommended message prioritisation for the next promotional cycle.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Programme cost and timeline
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A full Middle East commercial effectiveness programme covering 2–3 GCC markets costs between <strong>$80,000 and $250,000</strong> and runs over <strong>12–16 weeks</strong>, depending on the number of markets, research streams included, and KOL mapping depth.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>SFE research (2 markets, n=80–120 per market): $30,000–$60,000 / 5–7 weeks</li>
                <li>KOL mapping with network analysis (1 specialty, 2 markets): $25,000–$50,000 / 6–8 weeks</li>
                <li>Promotional channel audit and message testing (2 markets): $20,000–$40,000 / 4–6 weeks</li>
                <li>Digital channel effectiveness research (2 markets): $15,000–$30,000 / 4–5 weeks</li>
                <li>Commercial effectiveness scorecard synthesis: $10,000–$20,000 / 2–3 weeks</li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/20 p-5">
              <h2 className="text-lg font-semibold text-foreground mb-3">Commercial effectiveness programme proof points</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Research streams covered</p>
                  <p className="text-xl font-semibold text-foreground">5 domains</p>
                  <p className="text-xs text-muted-foreground mt-1">SFE, KOL mapping, channel mix, message testing, and digital effectiveness. Modular or integrated.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Programme timeline</p>
                  <p className="text-xl font-semibold text-foreground">12–16 weeks</p>
                  <p className="text-xs text-muted-foreground mt-1">Full 2–3 market programme from brief to commercial effectiveness scorecard delivery.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Programme cost range</p>
                  <p className="text-xl font-semibold text-foreground">$80K–$250K</p>
                  <p className="text-xs text-muted-foreground mt-1">Full programme across 2–3 GCC markets. Individual research stream modules available from $15,000.</p>
                </article>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/brand-tracking-pharma-gcc" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Brand tracking pharma GCC
              </Link>
              <Link to="/healthcare-market-research-agency-gcc" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Healthcare market research agency GCC
              </Link>
              <Link to="/bionixus-market-research-middle-east" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                BioNixus market research Middle East
              </Link>
              <Link to="/gcc-hcp-recruitment-market-research" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                GCC HCP recruitment market research
              </Link>
              <Link to="/contact" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Request commercial effectiveness scope
              </Link>
            </div>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Commercial effectiveness pharma Middle East FAQs</h2>
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
