/** Long-form reference blocks for specialty market demand pages (SSR-visible for SEO + LLM grounding). */
export type ReferenceSection = {
  title: string;
  paragraphs: string[];
};

export type SpecialtyReferenceContext = {
  segmentLabel: string;
  geography: string;
  regulatoryFrame: string;
  buyerTypes: string;
  accessOrProcurementFrame: string;
  hubPath: string;
};

function methodologyParagraphs(segmentLabel: string, geography: string): string[] {
  return [
    `BioNixus designs ${segmentLabel.toLowerCase()} programmes with a single commercial decision in scope — launch sequencing, competitive defence, tender positioning, or portfolio rationalisation — then recruits verified stakeholders who actually hold that decision in ${geography}. Instruments are built for board and affiliate governance: traceable sampling logic, thematic coding for qualitative modules, and explicit flags where desk review and primary evidence diverge.`,
    `We do not publish unaudited national totals as facts. Where sizing is requested, outputs are framed as access-gated or protocol-gated uptake scenarios validated through stakeholder research — the format global portfolio committees can defend without overstating addressable patients or OR volume.`,
    `Typical deliverables include executive synthesis, objection libraries, account archetypes, tender or formulary implication memos, and sequenced recommendations with evidence gaps and owners named. Cross-links to the healthcare market research hub, therapy hubs, and relevant country reports keep findings inside BioNixus' broader intelligence architecture.`,
  ];
}

/** ~1,200–1,500 words of unique, segment-parameterized reference copy. */
export function buildSpecialtyMarketReferenceSections(ctx: SpecialtyReferenceContext): ReferenceSection[] {
  const { segmentLabel, geography, regulatoryFrame, buyerTypes, accessOrProcurementFrame, hubPath } = ctx;

  return [
    {
      title: `How ${segmentLabel} research supports accountable commercial decisions`,
      paragraphs: [
        `Teams searching for the ${segmentLabel.toLowerCase()} rarely need another syndicated table. They need a decision structure: which accounts move volume, which evidence gates adoption, and what would change prescribing, procurement, or protocol choice in the next 12–24 months. In ${geography}, those answers depend on ${regulatoryFrame} and on how ${buyerTypes} operationalise policy on the ground.`,
        `This reference section complements the summaries above with practitioner depth — stakeholder cartography, methodological standards, and how BioNixus converts field evidence into launch, access, and competitive strategy. It is written for medical affairs, market access, commercial, and portfolio leaders who must brief global governance without collapsing local nuance into a single slide.`,
      ],
    },
    {
      title: `Stakeholder cartography in ${geography}`,
      paragraphs: [
        `Effective ${segmentLabel.toLowerCase()} studies fail when they sample titles instead of leverage points. In ${geography}, adoption is often coalition-shaped: clinical enthusiasm, pharmacy or procurement governance, IT integration for connected platforms, and tender or framework scoring can each become the real gate. BioNixus begins with explicit hypotheses about bottlenecks, then verifies them with mixed methods rather than assuming a single influencer profile.`,
        `Depending on category, stakeholders may include specialty clinicians, generalists who gate referral, nurses and technicians who operationalise workflows, pharmacists who manage substitution, biomedical engineering or clinical engineering for devices, laboratory directors for diagnostics, and procurement or tender committees that translate interest into contracts. Recruitment respects local confidentiality culture and professional conduct norms while still delivering decision-grade insight for global owners.`,
      ],
    },
    {
      title: `Regulatory, reimbursement, and ${accessOrProcurementFrame}`,
      paragraphs: [
        `${regulatoryFrame} sets the outer boundary for what can be sold or used — but commercial success in ${geography} is usually determined by ${accessOrProcurementFrame}. BioNixus maps that sequence for each brand or platform: where registration or classification ends, where economic or quality review begins, and which institution-level filters still block uptake after national or functional approval.`,
        `Research outputs separate "policy-facing" insight (what regulators and payers allow) from "pathway-facing" insight (what hospitals and clinicians actually operationalise). That distinction prevents affiliates from mistaking registration, listing, or category placement for realised share — a common failure mode when headquarters dashboards overweight headquarters presence or tender wins that never convert to ward-level use.`,
      ],
    },
    {
      title: `Quantitative modules: when numbers must survive a leadership challenge`,
      paragraphs: [
        `Quantitative work in the ${segmentLabel.toLowerCase()} should be evaluated on whether the sample supports the decision it informs: institution-type coverage, geography where pathways diverge, and subgroups that matter for label-relevant segments. BioNixus integrates trade-off, MaxDiff, or discrete-choice modules when messaging, tender attributes, or contract scenarios need quantified preference structure — while avoiding exercises participants cannot relate to clinical or operational reality.`,
        `Reporting emphasises confidence and uncertainty: where segments are stable versus where qualitative depth is required to explain contradictions. For device and diagnostics categories, we align questions with real SKU baskets (stapling versus energy versus laparoscopic instruments, for example) rather than averaging incompatible product classes that destroy forecasting utility.`,
      ],
    },
    {
      title: `Qualitative depth: protocols, objections, and switch barriers`,
      paragraphs: [
        `Qualitative insight is most valuable when quantitative results show flat distributions, protocol stickiness, or unpredictable switching. Structured depth interviews reveal operational subtext behind stated intent — training burden, complication risk perception, service-contract dependence, IT security review, or reputational exposure in public systems.`,
        `BioNixus delivers objection libraries, misconception maps, and account archetypes formatted for medical affairs and brand teams. For supportive-care and oncology-adjacent categories, we trace prophylaxis thresholds, pharmacist substitution rules, and tender award dynamics as distinct research questions rather than collapsing them into a single "market size" narrative.`,
      ],
    },
    {
      title: `Competitive intelligence without syndicated noise`,
      paragraphs: [
        `Competitive briefs for the ${segmentLabel.toLowerCase()} should explain why incumbents retain share after shortlists — not only who appears on a static market map. BioNixus researches switch barriers, training cascades from university or high-volume centres, dual-source policies after shortage events, and local service density that global share reports underweight.`,
        `Where ${geography} is used as an APAC, GCC, or EU reference market, we flag which evidence travels to neighbouring dossiers and which does not. Singapore access narratives, Japan NHI functional categories, Gulf tender frameworks, and Italian regional procurement each have different spillover rules; treating them as interchangeable weakens regional sequencing decisions.`,
      ],
    },
    {
      title: `Methodology standards and governance-ready reporting`,
      paragraphs: methodologyParagraphs(segmentLabel, geography),
    },
    {
      title: `Connecting this page to broader BioNixus programmes`,
      paragraphs: [
        `The ${segmentLabel.toLowerCase()} sits inside wider healthcare market research programmes — country hubs, therapy-area fieldwork, real-world evidence, and market access consulting. Teams can escalate from this intelligence layer to scoped proposals for HCP surveys, ATU studies, pricing research, or tender support without losing methodological continuity.`,
        `Start from the healthcare market research hub (${hubPath}) for programme design, or request a scoped briefing for this segment. BioNixus responds with indicative timelines, recruitment feasibility notes, and the evidence modules that most efficiently reduce uncertainty for your affiliate and global stakeholders.`,
      ],
    },
  ];
}
