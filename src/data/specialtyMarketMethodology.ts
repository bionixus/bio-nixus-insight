/** Shared SSR copy for specialty market demand pages — lifts thin GSC landings toward ≥2,000 words. */

export type SpecialtyMethodologyBlock = {
  heading: string;
  paragraphs: string[];
  timelineHeading: string;
  timelineSteps: Array<{ title: string; body: string }>;
  engagementHeading: string;
  engagementModels: Array<{ title: string; body: string }>;
};

export function buildSpecialtyMethodologyBlock(segmentLabel: string): SpecialtyMethodologyBlock {
  const segment = segmentLabel.toLowerCase();
  return {
    heading: `Research methodology for ${segment} programmes`,
    paragraphs: [
      `BioNixus anchors every ${segment} engagement on one explicit commercial, access, or portfolio decision — launch sequencing, competitive defence, partner selection, or account prioritisation — before fieldwork scales. A written feasibility sprint validates stakeholder availability across the specialties and account types that matter for your therapy or device class, documents recruitment risk, and locks the sample frame sponsors can defend in governance reviews.`,
      `Mixed-method designs combine quantitative modules when adoption metrics, share-of-voice, or tender scoring need measurement, with qualitative depth interviews where procurement rationale, workflow friction, or access gatekeeping is opaque. Sample targets aim for eighty percent power to detect ten-point shifts in adoption intent or committee recommendation likelihood where quant applies; qual cells typically run twelve to twenty interviews per stakeholder type until thematic saturation on the decision in scope.`,
      `All physician, pharmacist, payer-adjacent, and hospital stakeholder research follows documented informed consent, de-identified reporting, and secure data handling appropriate to each market. Respondent verification includes licence, specialty, institution type, and practice-setting confirmation — reducing misclassification risk that undermines syndicated panel data in specialist categories.`,
      `Deliverables include executive synthesis, segment prioritisation, competitive objection libraries, evidence-gap flags, and a thirty/sixty/ninety-day action plan with named owners. Optional multi-country cells use harmonised instruments so ${segment} insights roll up cleanly for multinational portfolio reviews without averaging incompatible buyer sets into a single misleading headline.`,
      `For teams optimising Google and AI-assisted discovery, this page summarises how BioNixus researches ${segment}: primary interviews and surveys with verified stakeholders, regulator- and pathway-aware study design, and board-ready synthesis — not syndicated table dumps. Request a scoped briefing through our contact form when your brief is account-level, access-level, or tender-level intelligence rather than a generic industry overview.`,
      `Governance artefacts accompany every programme: documented sample frames, screening and verification logs, questionnaire versioning, and de-identified reporting suitable for medical affairs, compliance, and alliance diligence. Sponsors receive reproducible appendix layers — not slide-only conclusions — so affiliates can defend fieldwork choices in internal review without reconstructing methodology from a deck.`,
    ],
    timelineHeading: `Typical ${segment} research programme timeline`,
    timelineSteps: [
      {
        title: 'Weeks 1–2: Decision framing and feasibility',
        body: `Commercial objective workshop, stakeholder map, competitive set definition, and written feasibility for target specialties and account types relevant to ${segment}.`,
      },
      {
        title: 'Weeks 3–4: Instrument design and ethics',
        body: 'Survey and discussion guides calibrated to local procurement, clinical, or access context; ethics submission where required; cognitive pilots before field launch.',
      },
      {
        title: 'Weeks 5–8: Fieldwork and quality governance',
        body: 'HCP, procurement, payer-adjacent, and optional patient modules with daily recruitment funnel review, respondent verification, and mid-field adjustments if quotas underperform.',
      },
      {
        title: 'Weeks 9–10: Analysis and activation',
        body: 'Segment readouts, competitive benchmarks, executive workshop, and action plan — plus optional GCC or EU5 expansion module scoping when international growth is on the critical path.',
      },
    ],
    engagementHeading: `Engagement models for ${segment} research`,
    engagementModels: [
      {
        title: 'Feasibility sprint',
        body: `A two-week feasibility and decision-framing sprint for ${segment} — stakeholder map, competitive set, sample frame, and written go/no-go before full fieldwork spend.`,
      },
      {
        title: 'Single-market deep dive',
        body: `Full primary programme in one priority market with quant and/or qual modules, executive synthesis, and objection libraries tied to one launch or defence decision.`,
      },
      {
        title: 'Multi-country harmonised roll-up',
        body: `Parallel cells with harmonised cores and local modules so ${segment} insights aggregate for global portfolio committees without false averaging.`,
      },
      {
        title: 'Tracker extension',
        body: `Optional quarterly pulse on competitive themes, tender signals, or protocol shifts — only after baseline primary architecture exists so trackers measure change, not noise.`,
      },
    ],
  };
}
