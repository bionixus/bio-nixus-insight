import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MethodologySection from '@/components/MethodologySection';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Methodology', href: '/methodology' },
];

const jsonLd = [buildBreadcrumbSchema(breadcrumbItems)];

const Methodology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="Healthcare Market Research Methodology | BioNixus"
        description="BioNixus methodology for healthcare market research: research design, sampling, fieldwork governance, data validation, ethics, and reporting standards across EMEA and GCC markets."
        canonical="https://www.bionixus.com/methodology"
        jsonLd={jsonLd}
      />

      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pb-8">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Healthcare Market Research Methodology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pharmaceutical decisions depend on evidence that is methodologically sound, operationally
              transparent, and aligned with the regulatory realities of each market. This page explains how
              BioNixus designs, executes, and quality-assures every healthcare market research programme
              we deliver across EMEA and GCC markets.
            </p>
          </div>
        </section>

        {/* Existing MethodologySection component */}
        <MethodologySection nestUnderParentH1 />

        {/* 1 — Research Design Principles */}
        <section className="section-padding bg-background" id="research-design">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              1. Research Design Principles
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every programme begins with a structured design phase that translates commercial questions
              into a testable research framework. We work with brand teams, medical affairs, and market
              access stakeholders to define objectives that are specific enough to drive action yet flexible
              enough to accommodate mid-study course corrections.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Quantitative research</strong> programmes use structured
              questionnaires designed around validated scales and conjoint or MaxDiff exercises where
              trade-off measurement is needed. Survey instruments undergo cognitive pre-testing with a
              minimum of five respondents before full launch. We apply skip-logic, randomisation, and
              trap questions to protect data integrity from the outset. Learn more about our approach
              to{' '}
              <Link to="/services/quantitative-research" className="text-primary hover:underline font-medium">
                quantitative healthcare research
              </Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qualitative research</strong> follows semi-structured
              discussion guides built around decision-tree logic. Whether the format is one-on-one
              physician interviews, payer advisory boards, or ethnographic observation in hospital
              settings, every guide is piloted internally and refined after a first tranche of two to
              three interviews. For complex therapeutic areas, we engage specialist medical moderators
              who can probe clinical nuance without leading the respondent. Explore our{' '}
              <Link to="/services/qualitative-research" className="text-primary hover:underline font-medium">
                qualitative pharmaceutical research
              </Link>{' '}
              capabilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mixed-method designs are applied when a project requires both statistical generalisability
              and explanatory depth — for example, a launch readiness study that combines a 200-physician
              survey with 20 depth interviews among high-prescribing specialists.
            </p>
          </div>
        </section>

        {/* 2 — Sampling Frameworks */}
        <section className="section-padding bg-cream" id="sampling-frameworks">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              2. Sampling Frameworks &amp; Sample-Size Governance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sample quality determines the credibility of any insight. BioNixus maintains proprietary
              healthcare professional panels across 17+ EMEA and GCC markets, supplemented by partnerships
              with accredited panel providers who meet ESOMAR and BHBIA sourcing standards. We recruit from
              verified physician databases, hospital registries, and specialty society membership lists —
              never from open-internet opt-in pools.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sample sizes are calculated against predefined statistical power targets. For most
              quantitative programmes, we target a minimum of ±5% margin of error at the 95% confidence
              level within each reportable sub-group. Where the target population is inherently small —
              rare-disease specialists, national formulary committee members — we apply census-style
              recruitment and adjust analysis to account for the smaller base.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quota controls enforce representation by specialty, practice setting (hospital vs.
              community), prescribing volume, and geography. In multi-country studies, quotas are set
              per market so that no single country dominates the aggregate data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For qualitative work, recruitment screeners are reviewed by the project lead and the
              client before fieldwork begins. We confirm specialty, prescribing authority, and treatment
              experience through a double-verification process that cross-references panel profile data
              with screener responses.
            </p>
          </div>
        </section>

        {/* 3 — Fieldwork Governance */}
        <section className="section-padding bg-background" id="fieldwork-governance">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              3. Fieldwork Governance &amp; Quality Controls
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fieldwork is where methodology meets operational discipline. Every project runs against a
              fieldwork protocol that specifies recruitment timelines, respondent honorarium rates
              (compliant with local industry codes), interview scheduling windows, and escalation
              procedures for quota shortfalls.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quantitative surveys include real-time monitoring dashboards that track completion rates,
              median completion time, drop-off points, and straight-lining flags. Surveys that
              consistently complete in less than one-third of the expected median time are flagged for
              review and excluded if quality checks fail.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Qualitative fieldwork is recorded (with respondent consent) and transcribed verbatim.
              Moderators submit debrief notes within 24 hours of each session, capturing initial
              hypotheses and emergent themes while the conversation is still fresh. For multi-market
              studies, a central project manager conducts daily fieldwork stand-ups with local market
              teams to catch translation discrepancies or recruitment drift early.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our{' '}
              <Link to="/services/clinical-trial-support" className="text-primary hover:underline font-medium">
                clinical trial support
              </Link>{' '}
              fieldwork follows the same governance framework, with additional controls for site
              identification feasibility and investigator profiling studies.
            </p>
          </div>
        </section>

        {/* 4 — Data Validation & AI QA */}
        <section className="section-padding bg-cream" id="data-validation">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              4. Data Validation &amp; AI-Augmented Quality Assurance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raw data undergoes a multi-stage validation pipeline before any analysis begins. The first
              stage is automated: algorithms flag duplicate IDs, impossible response combinations (e.g. a
              general practitioner claiming to perform neurosurgery), and statistically anomalous
              answer patterns.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The second stage is analyst-led. A senior researcher reviews flagged records against
              original recruitment data and, where necessary, contacts respondents for clarification.
              Records that cannot be validated are removed from the final dataset with a documented
              exclusion rationale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI-augmented quality assurance adds a third layer. Natural-language processing models
              evaluate open-ended responses for coherence, relevance, and minimum substantive length.
              Qualitative transcripts are processed through topic-modelling algorithms to surface
              latent themes that human coders might miss in a first pass. These machine-generated
              themes are then validated by the analysis team — AI accelerates pattern detection, but
              every interpretive conclusion is human-reviewed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This layered approach means clients receive datasets they can trust for internal
              decision-making and, where required, for regulatory or HTA submissions. Read more about
              how we integrate evidence into{' '}
              <Link to="/services/market-access" className="text-primary hover:underline font-medium">
                market access and HTA strategy
              </Link>{' '}
              workflows.
            </p>
          </div>
        </section>

        {/* 5 — Ethics, GDPR, Regulatory */}
        <section className="section-padding bg-background" id="ethics-compliance">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              5. Ethics, GDPR Compliance &amp; Regulatory Alignment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every BioNixus project operates within a compliance framework built around GDPR, the
              UK Data Protection Act, ESOMAR guidelines, BHBIA Legal &amp; Ethical Guidelines, and the
              EphMRA Code of Conduct. In GCC markets, we additionally comply with local data-protection
              regulations including the Saudi Arabia PDPL, the UAE Federal Data Protection Law, and
              Kuwait's CITRA requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Respondent consent is obtained before any data collection begins. Consent forms are
              available in the respondent's preferred language, explain how data will be used, and
              specify the retention period. Personal data is pseudonymised at collection and stored on
              encrypted EU-based servers. Identifiable information is never shared with clients unless
              the respondent has provided explicit additional consent for follow-up contact.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For studies involving patient data — even indirectly through physician-reported patient
              records — we obtain ethical review where required and apply additional de-identification
              protocols. Adverse-event reporting obligations are briefed to all moderators and
              interviewers before fieldwork begins, with a 24-hour escalation pathway to the client's
              pharmacovigilance team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Honorarium payments are processed through auditable channels and benchmarked against
              fair-market-value guidelines issued by local pharmaceutical industry bodies. This
              protects both the respondent and the sponsoring organization from transparency and
              anti-bribery risk.
            </p>
          </div>
        </section>

        {/* 6 — Reporting Standards */}
        <section className="section-padding bg-cream" id="reporting-standards">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              6. Reporting Standards &amp; Deliverable Structures
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Insight has no value until it reaches the people who act on it. BioNixus reports are
              structured around a decision-first framework: every deliverable opens with an executive
              summary that states the three to five headline findings, followed by recommended actions
              before the reader encounters any supporting data.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quantitative reports include full methodology appendices — sample composition tables,
              weighting schemes, confidence intervals, and questionnaire copies — so that clients can
              evaluate the evidence on its own terms. Qualitative reports present thematic analysis
              supported by verbatim quotes, with respondent identification anonymised.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Standard deliverables include interactive dashboards for ongoing tracker studies,
              executive slide decks for board-level presentations, and detailed technical appendices
              for regulatory or HTA dossier teams. For{' '}
              <Link to="/services/competitive-intelligence" className="text-primary hover:underline font-medium">
                competitive intelligence
              </Link>{' '}
              programmes, we provide real-time monitoring reports with alert-driven updates.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All reports undergo a two-stage internal review — first by the project analyst for
              data accuracy, then by a senior director for strategic coherence — before client
              delivery. Our{' '}
              <Link to="/services/kol-stakeholder-mapping" className="text-primary hover:underline font-medium">
                KOL and stakeholder mapping
              </Link>{' '}
              deliverables follow the same quality protocol, with additional visualisation layers
              for influence-network analysis.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary/5" id="contact-cta">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Discuss Your Research Requirements
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you are planning a multi-market launch study, a single-country payer landscape
              assessment, or an ongoing competitive intelligence programme, our methodology adapts to
              the complexity and regulatory context of your project. Contact us to discuss how we can
              design a research programme that meets your evidence standards.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Methodology;
