import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export const METHODOLOGY_EN_FAQ = [
  {
    question: 'Does BioNixus use the same methodology for healthcare and consumer research?',
    answer:
      'Yes — the governance spine is the same: decision-first design, verified sampling, fieldwork protocols, multi-stage validation, ethics, and a report built for the people who act. The respondents, codes, and deliverable grain change. Healthcare briefs recruit physicians, payers, and hospital accounts under BHBIA, EphMRA, and pharmacovigilance rules. Consumer briefs recruit shoppers, category buyers, and named retail accounts under ESOMAR and local consumer-research codes.',
  },
  {
    question: 'How do you verify healthcare samples?',
    answer:
      'Healthcare panellists pass licence verification against authority registers, specialty confirmation, and practice-setting checks through facility directories. We recruit from verified physician databases, hospital registries, and specialty society lists — not open-internet opt-in pools. Quarterly refresh cycles remove relocated or retired physicians.',
  },
  {
    question: 'How do you sample consumer and traditional-trade studies?',
    answer:
      'Consumer samples are built around the accounts and channels where volume actually moves — modern trade, independent pharmacies and grocers, bakals, and named distributors — plus shopper and category-buyer quotas where the brief needs household or basket evidence. Screeners are reviewed before fieldwork. Mystery shops, account visits, and intercepts are used when a syndicated panel undersamples the channel.',
  },
  {
    question: 'What quality controls apply in fieldwork?',
    answer:
      'Every project runs against a protocol for recruitment timelines, compliant honoraria, scheduling windows, and quota-shortfall escalation. Quantitative surveys are monitored in real time for completion time, drop-off, and straight-lining. Qualitative sessions are recorded with consent, transcribed, and debriefed within 24 hours. Multi-market studies have daily stand-ups to catch translation or recruitment drift.',
  },
  {
    question: 'How is GDPR and local data protection handled?',
    answer:
      'Projects operate under GDPR, the UK Data Protection Act, ESOMAR guidelines, and local laws including Saudi PDPL, the UAE Federal Data Protection Law, and Kuwait CITRA requirements. Healthcare work also follows BHBIA and EphMRA. Consent is taken before collection, data is pseudonymised, and identifiable information is not shared with clients unless the respondent consents to follow-up.',
  },
  {
    question: 'What does a BioNixus methodology report include?',
    answer:
      'Every deliverable opens with headline findings and recommended actions, then supporting data. Quantitative packs include sample tables, weighting, confidence intervals, and the questionnaire. Qualitative packs include thematic analysis with anonymised verbatim. Tracker studies can include dashboards. Healthcare dossiers can include HTA-ready appendices; consumer packs include brand and trade cuts a Head of Marketing can take to the commercial director.',
  },
] as const;

const THEATRE_ROWS = [
  {
    cut: 'Who we talk to',
    healthcare: 'Physicians, payers, KOLs, hospital and pharmacy accounts',
    consumer: 'Shoppers, category buyers, retailers, distributors, traditional trade',
  },
  {
    cut: 'How we find them',
    healthcare: 'Licence registers, hospital networks, specialty societies',
    consumer: 'Named accounts, trade lists, intercepts, mystery shops, consented re-contact',
  },
  {
    cut: 'Codes that bind the work',
    healthcare: 'BHBIA, EphMRA, pharmacovigilance, fair-market-value honoraria',
    consumer: 'ESOMAR, local consumer-research codes, auditable incentives',
  },
  {
    cut: 'What the pack must survive',
    healthcare: 'Medical, access, and HTA diligence',
    consumer: 'Brand, trade, and commercial-director scrutiny',
  },
] as const;

export function MethodologyLongFormEn({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="premium-home-ivory section-padding py-16 md:py-20" id="two-theatres" aria-labelledby="two-theatres-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <PremiumEyebrow>One spine</PremiumEyebrow>
            <h2
              id="two-theatres-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              Healthcare and consumer share the method, not the respondent
            </h2>
            <p className="mt-5 max-w-3xl font-light leading-relaxed text-[#7A7267]">
              BioNixus is a primary market research firm. The same six controls — design, sampling, fieldwork, validation, ethics, and
              reporting — run on a{' '}
              <Link to={p('/healthcare-market-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                healthcare market research
              </Link>{' '}
              brief and on a consumer or{' '}
              <Link to={p('/bionixus-industries')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                industry
              </Link>{' '}
              brief. What changes is who sits in the sample, which code governs the honorarium, and how fine the tables must be cut.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.05)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                How BioNixus methodology applies in healthcare versus consumer industries
              </caption>
              <thead>
                <tr className="bg-[#06101F] text-[#FFFEFB]">
                  <th scope="col" className="px-5 py-4 font-medium">
                    Control
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium text-white/70">
                    Healthcare
                  </th>
                  <th scope="col" className="border-l border-[#C9A84C]/30 px-5 py-4 font-medium text-[#C9A84C]">
                    Consumer &amp; other industries
                  </th>
                </tr>
              </thead>
              <tbody>
                {THEATRE_ROWS.map((row, index) => (
                  <tr key={row.cut} className={index % 2 === 0 ? 'bg-[#FFFEFB]' : 'bg-[#F4F2ED]/60'}>
                    <th scope="row" className="px-5 py-4 align-top font-medium text-[#0C1B33]">
                      {row.cut}
                    </th>
                    <td className="px-5 py-4 align-top font-light leading-relaxed text-[#7A7267]">{row.healthcare}</td>
                    <td className="border-l border-[#C9A84C]/15 px-5 py-4 align-top font-light leading-relaxed text-[#0C1B33]">
                      {row.consumer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="research-design" aria-labelledby="research-design-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">01</PremiumEyebrow>
          <h2
            id="research-design-heading"
            className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
          >
            Research design principles
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Every programme starts by turning a business question into something a study can actually answer. We sit down with the people
            who will use the evidence — brand, medical, and market access on a healthcare brief; brand, category, and trade on a consumer
            brief — and pin objectives specific enough to drive a decision, yet flexible enough to course-correct when early data points
            somewhere unexpected. A study designed around the wrong question is fast, cheap, and useless.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Quantitative</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Structured questionnaires, validated scales, and conjoint or MaxDiff where trade-offs matter — physician treatment choice
                or shopper pack choice. Instruments get a cognitive pre-test with at least five respondents. Skip-logic, randomisation, and
                trap questions protect integrity.{' '}
                <Link to={p('/services/quantitative-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                  Quantitative research
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Qualitative</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Semi-structured guides built around decision-tree logic. Healthcare: physician interviews, payer boards, hospital
                ethnography. Consumer: shopper depths, retailer and distributor interviews, in-store observation. Guides are piloted and
                refined after the first two to three sessions.{' '}
                <Link to={p('/services/qualitative-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                  Qualitative research
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Mixed method</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Used when the brief needs both statistical grain and explanatory depth — a launch study that pairs a 200-physician survey
                with specialist depths, or a category study that pairs a shopper survey with named-account visits the syndicated feed
                cannot show.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="sampling-frameworks" aria-labelledby="sampling-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>02</PremiumEyebrow>
          <h2 id="sampling-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Sampling frameworks and sample-size governance
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Sample quality determines the credibility of any insight. Healthcare samples come from proprietary professional panels across
            17+ EMEA and GCC markets, plus accredited partners who meet ESOMAR and BHBIA sourcing standards. Consumer and industry samples
            are built around the accounts and channels in the brief — not an open-internet opt-in pool.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">Healthcare</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">Panel sourcing</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                <p>
                  <strong className="font-medium text-[#0C1B33]">Licensing authority verification.</strong> Recruitment from regulatory
                  databases — DHA Dubai, DOH Abu Dhabi, SFDA Saudi Arabia, MOHAP UAE, and MOH Kuwait — so each panellist has an auditable
                  licence, specialty, and practice setting before first contact.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Hospital and clinic networks.</strong> Specialist referral through medical
                  education and clinic coordinators at major facilities, including SEHA, Mediclinic, Aster, NMC, Cleveland Clinic Abu Dhabi,
                  and Saudi German Hospital networks — for therapy-area depth registers alone do not surface.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Professional associations.</strong> Society rosters are cross-referenced
                  with licensing registers so membership lists never stand alone.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Three-layer validation.</strong> Licence check, specialty confirmation, and
                  practice-setting validation. Quarterly refresh removes relocated or retired physicians.
                </p>
              </div>
            </div>
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#0EA5A0]">Consumer &amp; industry</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">Account and channel sourcing</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                <p>
                  <strong className="font-medium text-[#0C1B33]">Named accounts.</strong> Retailers, distributors, independent pharmacies,
                  grocers, and bakals are sampled when that is where volume moves — the grain syndicated{' '}
                  <Link to={p('/nielsen-alternative')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    Nielsen
                  </Link>{' '}
                  and{' '}
                  <Link to={p('/gfk-alternative-egypt')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    GfK-style
                  </Link>{' '}
                  feeds typically miss. See{' '}
                  <Link to={p('/account-level-market-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    account-level market research
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Shopper and buyer quotas.</strong> Category buyers and household shoppers
                  are recruited to the SKU, channel, and city in the brief — not a national average that hides the account.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Mystery shop and intercept.</strong> Used when the question is what happens
                  at the shelf, the counter, or the traditional-trade store — methods a panel dashboard cannot substitute.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Consented re-contact.</strong> Verified respondents from previous waves who
                  agreed to future contact remain the fastest route when timeline is the priority — in both theatres.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Sample sizes are calculated against predefined statistical power targets. For most quantitative programmes, we target a minimum
            of ±5% margin of error at the 95% confidence level within each reportable sub-group. Where the population is inherently small —
            rare-disease specialists, national formulary members, or a short list of key-account buyers — we apply census-style recruitment
            and adjust analysis to the smaller base. Quota controls enforce representation by role, setting, volume, and geography so no
            single country dominates a multi-market file.
          </p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="fieldwork-governance" aria-labelledby="fieldwork-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">03</PremiumEyebrow>
          <h2 id="fieldwork-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Fieldwork governance and quality controls
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Fieldwork is where methodology meets operational discipline. Every project — healthcare or consumer — runs against a protocol
            that specifies recruitment timelines, respondent honorarium rates (compliant with the relevant industry code), interview
            scheduling windows, and escalation procedures for quota shortfalls.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Quantitative surveys include real-time dashboards for completion rates, median time, drop-off, and straight-lining. Surveys
            that consistently finish in less than one-third of the expected median time are flagged and excluded if quality checks fail.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Qualitative fieldwork is recorded with consent and transcribed verbatim. Moderators submit debrief notes within 24 hours.
            Multi-market studies have a central project manager and daily stand-ups with local teams to catch translation discrepancies
            or recruitment drift — whether the respondent is a consultant in an NHS trust or a category buyer in Cairo.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Healthcare{' '}
            <Link to={p('/services/clinical-trial-support')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              clinical trial support
            </Link>{' '}
            fieldwork follows the same spine, with extra controls for site identification and investigator profiling. Consumer mystery-shop
            and account-visit waves follow the same spine, with extra controls for store selection and SKU availability logs.
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="data-validation" aria-labelledby="validation-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>04</PremiumEyebrow>
          <h2 id="validation-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Data validation and AI-augmented quality assurance
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Raw data undergoes a multi-stage validation pipeline before analysis. The first stage is automated: algorithms flag duplicate
            IDs, impossible combinations (a GP claiming to perform neurosurgery — or a shopper claiming a channel they cannot reach), and
            statistically anomalous answer patterns.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            The second stage is analyst-led. A senior researcher reviews flagged records against recruitment data and, where necessary,
            contacts respondents. Records that cannot be validated are removed with a documented exclusion rationale.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            AI-augmented quality assurance adds a third layer. Natural-language models evaluate open-ends for coherence, relevance, and
            minimum length. Qualitative transcripts go through topic-modelling to surface latent themes a first human pass might miss.
            Machine-generated themes are then validated by the analysis team — AI accelerates pattern detection; every interpretive
            conclusion is human-reviewed.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Clients receive datasets they can trust for internal decisions and, on healthcare briefs, for regulatory or HTA submissions.
            See how evidence feeds{' '}
            <Link to={p('/services/market-access')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              market access and HTA strategy
            </Link>{' '}
            — and how consumer briefs feed brand and trade decisions instead.
          </p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="ethics-compliance" aria-labelledby="ethics-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">05</PremiumEyebrow>
          <h2 id="ethics-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Ethics, GDPR, and industry codes
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Every BioNixus project operates under GDPR, the UK Data Protection Act, ESOMAR guidelines, and local data-protection law —
            including Saudi PDPL, the UAE Federal Data Protection Law, and Kuwait CITRA requirements. That floor applies to healthcare
            and consumer work alike.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Healthcare programmes add BHBIA Legal &amp; Ethical Guidelines and the EphMRA Code of Conduct. Studies that touch patient data
            — even indirectly through physician-reported records — obtain ethical review where required and apply extra de-identification.
            Adverse-event reporting is briefed to every moderator before fieldwork, with a 24-hour escalation to the client&apos;s
            pharmacovigilance team.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Consumer and industry programmes stay inside ESOMAR and the applicable local consumer-research code. Incentives are processed
            through auditable channels. Healthcare honoraria are additionally benchmarked against fair-market-value guidelines issued by
            local pharmaceutical industry bodies — protecting the respondent and the sponsor from transparency and anti-bribery risk.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Consent is obtained before collection, in the respondent&apos;s preferred language, with use and retention explained. Personal
            data is pseudonymised and stored on encrypted EU-based servers. Identifiable information is never shared with clients unless
            the respondent gives explicit extra consent for follow-up.
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="reporting-standards" aria-labelledby="reporting-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>06</PremiumEyebrow>
          <h2 id="reporting-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Reporting standards and deliverable structures
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Insight has no value until it reaches the people who act on it. Reports open with the three to five headline findings and the
            recommended actions — before the reader hits supporting data. That is true for a Head of Marketing on a consumer brand and for
            a market-access lead on a therapy launch.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Quantitative reports include methodology appendices — sample composition, weighting, confidence intervals, and the questionnaire
            — so the evidence can be evaluated on its own terms. Qualitative reports present thematic analysis with anonymised verbatim.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Standard deliverables include interactive dashboards for trackers, executive slide decks for board-level presentations, and
            technical appendices. Healthcare packs can be cut for HTA or regulatory dossier teams. Consumer packs are cut for brand, trade,
            and SKU decisions. For{' '}
            <Link to={p('/services/competitive-intelligence')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              competitive intelligence
            </Link>{' '}
            programmes, we provide monitoring reports with alert-driven updates in either theatre.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            All reports undergo a two-stage internal review — analyst for data accuracy, senior director for strategic coherence — before
            delivery.{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              KOL and stakeholder mapping
            </Link>{' '}
            follows the same protocol, with extra visualisation for influence networks.
          </p>
        </div>
      </section>

      <div className="premium-home-cream">
        <FAQSection
          premium
          title="Frequently asked questions"
          items={[...METHODOLOGY_EN_FAQ]}
          className="section-padding py-16 md:py-20"
        />
      </div>
    </>
  );
}
