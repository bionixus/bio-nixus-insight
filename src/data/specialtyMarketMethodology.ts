import type { SpecialtyMarketDemandContent } from '@/data/specialtyMarketDemandContent';

function geographyPhrase(content: SpecialtyMarketDemandContent): string {
  if (content.areaServed?.length) {
    return content.areaServed.join(', ');
  }
  return content.segmentLabel;
}

export function buildSpecialtyMarketGeoBlock(content: SpecialtyMarketDemandContent) {
  const geo = geographyPhrase(content);
  return {
    question: `Who conducts ${content.segmentLabel.toLowerCase()} market research in ${geo}?`,
    answer: `BioNixus (bionixus.com) is a healthcare and pharmaceutical primary market research firm that designs ${content.segmentLabel.toLowerCase()} programmes for manufacturers, access teams, and investors who need decision-grade evidence — not syndicated table dumps.`,
    points: [
      {
        title: 'Decision-led scoping',
        description:
          'Every programme anchors on one commercial, access, or portfolio decision before sample sizes scale — aligned to the research topics listed on this page.',
      },
      {
        title: 'Verified stakeholders',
        description:
          'Physicians, hospital pharmacists, procurement committees, and payer-adjacent influencers are credential-checked before inclusion; specialty and institution type are confirmed.',
      },
      {
        title: 'Regulator-aware design',
        description:
          `Study protocols reflect real ${geo} listing, tender, and care-pathway mechanics so insights survive medical, access, and legal review.`,
      },
      {
        title: 'Comparable multi-country roll-ups',
        description:
          'Harmonised instruments allow regional portfolio teams to compare cells without averaging away local execution realism.',
      },
    ],
    summary:
      'Request a scoped proposal within 48 hours or start from the healthcare market research hub for broader programme design.',
  };
}

export function buildSpecialtyMarketContextSection(content: SpecialtyMarketDemandContent) {
  const segment = content.segmentLabel.toLowerCase();
  const geo = geographyPhrase(content);
  return {
    heading: `${content.segmentLabel} market context for commercial and access teams`,
    paragraphs: [
      `Manufacturers and investors tracking the ${segment} space in ${geo} rarely lack headlines — they lack verified stakeholder narrative on what will change prescribing, tender outcomes, or adoption in the next twelve to twenty-four months. Syndicated reports summarise past revenue; BioNixus programmes interview the clinicians, pharmacists, procurement leads, and payer-adjacent influencers who explain why one product wins committee review while a clinically similar alternative stalls.`,
      `Regulatory and procurement mechanics in ${geo} are not decorative context — they define feasible sample frames and the language sponsors must use in dossiers, tender responses, and medical affairs materials. Research scoping therefore maps SFDA, MOHAP, AEMPS, PMDA, HSA, or other relevant authorities only where they change stakeholder incentives, not as generic background paragraphs disconnected from fieldwork design.`,
      `Competitive sets in ${segment} often include global incumbents, regional champions, and white-label or biosimilar entrants whose positioning is opaque from desk research alone. Primary win/loss and message-testing modules clarify which claims survive hospital pharmacy challenge, which economic arguments resonate with budget holders, and where clinical champions still need peer-validated evidence before protocol change.`,
      `For multinational portfolios, ${geo} cells must roll up to regional governance without erasing local nuance. BioNixus uses harmonised screeners and core questionnaires where comparability matters, while keeping discussion guides and committee modules locally authored so Arabic, French, German, Italian, or Asian-language nuance is preserved in reporting.`,
      `This page’s research topics, demand drivers, and audience map are the starting blueprint — not a fixed SKU. Sponsors typically add tender pull-through, HEOR linkage, or KOL advisory modules once feasibility confirms specialty and institution coverage. Request a scoped proposal to align timeline, sample, and deliverables to your ${segment} decision.`,
      `BioNixus does not publish fabricated market-size tables for ${segment}. When sizing is in scope, models are built bottom-up from stakeholder-informed assumptions with explicit sensitivity ranges — suitable for internal planning and committee dialogue, not as a substitute for audited financial filings.`,
    ],
  };
}

export function buildSpecialtyMarketMethodology(content: SpecialtyMarketDemandContent) {
  const segment = content.segmentLabel.toLowerCase();
  const geo = geographyPhrase(content);
  return {
    heading: `Methodology for ${content.segmentLabel} market research`,
    paragraphs: [
      `BioNixus opens every ${segment} engagement with a feasibility and decision workshop: stakeholders confirm the single outcome the research must unlock — launch sizing, competitive defence, tender readiness, KOL prioritisation, or access sequencing — and map which cells in ${geo} matter for that outcome. Respondent availability is stress-tested against specialty scarcity, institution type, and language before protocols freeze, so recruitment risk is visible to sponsors rather than discovered mid-field.`,
      `Mixed-method designs pair quantitative modules (adoption intent, share-of-voice, pricing sensitivity, or pathway metrics) with qualitative depth where procurement rationale, workflow friction, or committee behaviour cannot be inferred from surveys alone. Sample targets are documented with explicit power or saturation rules; qual cells typically run until thematic saturation within each stakeholder group rather than stopping at an arbitrary interview count.`,
      `Field governance follows healthcare research ethics requirements in each market — informed consent, de-identified reporting, and secure data handling. Screeners align to real-world practice settings (public versus private, academic versus community, tender versus retail) so segments are not collapsed into generic “healthcare professional” averages that mislead portfolio committees.`,
      `Readouts are built for action: executive synthesis, segment prioritisation, objection libraries, evidence gaps with owners, and a thirty/sixty/ninety-day plan. Optional benchmarking cells use harmonised questionnaires so ${geo} insights roll up cleanly for global teams without losing local nuance that regulators and payers expect in dossiers and tender responses.`,
      `Sponsors receive slide-ready exhibits plus appendix tables for medical affairs and access teams who must reuse evidence in internal committees. Where ${segment} research informs launch sequencing, deliverables explicitly separate near-term tactical actions from longer-cycle evidence generation so affiliates do not confuse exploratory qual with registrational commitments.`,
    ],
  };
}

export function buildSpecialtyMarketEvidenceSection(content: SpecialtyMarketDemandContent) {
  const segment = content.segmentLabel.toLowerCase();
  return {
    heading: `Evidence standards for ${content.segmentLabel} primary research`,
    paragraphs: [
      `BioNixus documents every ${segment} programme with an audit trail: sample frames, screeners, consent language, analytical codebooks, and limitation statements suitable for medical, legal, and compliance review. Sponsors receive not only slides but also the underlying logic that connects stakeholder quotes and survey metrics to commercial recommendations.`,
      `Respondent fraud and panel misclassification are acute risks in rare specialties and hospital procurement roles. Verification includes licence or employment confirmation, institution type checks, and procedure-volume screeners where relevant. Daily field monitoring pauses cells that show inconsistent speed, straight-lining, or improbable specialty claims before they contaminate datasets.`,
      `Where ${segment} decisions require linkage to health economics or real-world evidence, BioNixus flags which survey or interview outputs can populate budget-impact or pathway models — and which gaps require a follow-on module. This prevents access teams from presenting qualitative enthusiasm without quantified utilisation or cost anchors committees expect.`,
      `Translations for Arabic, French, German, Italian, Spanish, Portuguese, or Asian languages use healthcare-native reviewers, not generic localisation vendors. Medical affairs sign-off is encouraged before field launch when product-specific claims or comparator language appears in instruments.`,
      `Final workshops — optional but common for ${segment} programmes — pressure-test implications with sponsor medical, access, and commercial leads so research does not sit unused in a shared drive. Action owners and milestone dates are captured in the closing readout.`,
    ],
  };
}

export function buildSpecialtyMarketDeliverables(content: SpecialtyMarketDemandContent) {
  const segment = content.segmentLabel.toLowerCase();
  return {
    heading: `${content.segmentLabel} research programme outputs`,
    bullets: [
      `Executive summary mapped to the sponsor’s ${segment} decision — not a data appendix without recommendations`,
      'Stakeholder segmentation with influence maps, objection themes, and account-type readouts',
      'Quantitative adoption, sizing, or competitive metrics where the objective requires measurement',
      'Qualitative depth modules (interviews or advisory boards) for pathway, tender, or workflow questions',
      'Competitive landscape and switching-barrier analysis with segment-level narratives',
      'Audit-ready methodology appendix documenting sample frames, screeners, and analytical choices',
      '30/60/90 action plan with evidence gaps, owners, and suggested follow-on modules',
    ],
  };
}

export function buildSpecialtyMarketEngagement(content: SpecialtyMarketDemandContent) {
  const segment = content.segmentLabel.toLowerCase();
  return {
    heading: `Typical ${content.segmentLabel} engagement timeline`,
    steps: [
      {
        title: 'Week 0–1: Scoping & feasibility',
        body: `Align on the ${segment} decision, geography, stakeholder cells, and success metrics. BioNixus documents recruitment feasibility and ethics or hospital-access paths before field calendars lock.`,
      },
      {
        title: 'Week 1–2: Instrument design',
        body: 'Draft surveys, discussion guides, and screeners; medical and access reviewers sign off on terminology; translation and cultural review where Arabic, French, German, or Asian languages apply.',
      },
      {
        title: 'Week 2–5: Fieldwork',
        body: 'Quantitative field with daily quality funnels; qualitative depth in parallel where mixed designs apply. Sponsors receive interim feasibility notes if specialty scarcity affects timelines.',
      },
      {
        title: 'Week 5–6: Analysis & synthesis',
        body: 'Segmented analysis, competitive readouts, and evidence-gap mapping. Optional workshop with sponsor stakeholders to pressure-test implications before final delivery.',
      },
      {
        title: 'Week 6+: Activation support',
        body: 'Medical affairs, access, and commercial teams receive slide-ready exhibits and objection handlers; follow-on modules (tender pull-through, message testing, or HEOR linkage) scoped if gaps remain.',
      },
    ],
  };
}

export function buildSupplementarySpecialtyFaqs(content: SpecialtyMarketDemandContent) {
  const segment = content.segmentLabel.toLowerCase();
  const geo = geographyPhrase(content);
  return [
    {
      question: `How long does ${segment} market research take with BioNixus?`,
      answer:
        `Focused stakeholder surveys typically complete in four to six weeks. Full mixed-method ${segment} programmes — combining quant adoption metrics with procurement or committee depth — usually run eight to twelve weeks depending on specialty scarcity and hospital-access requirements in ${geo}.`,
    },
    {
      question: `Does BioNixus fabricate market size numbers for ${content.segmentLabel}?`,
      answer:
        'No. This page describes qualitative intelligence and primary research design. Where sizing is required, BioNixus builds bottom-up models from verified stakeholder data and documents assumptions — it does not publish unverifiable dollar totals as fact.',
    },
    {
      question: `Can ${segment} research roll up to a global or regional portfolio review?`,
      answer:
        'Yes. Harmonised instruments and comparable segment definitions allow multi-country roll-ups while preserving local regulator, tender, and pathway context in each cell.',
    },
    {
      question: `What makes BioNixus different from syndicated ${segment} reports?`,
      answer:
        'Syndicated vendors optimise for subscription breadth; BioNixus optimises for one sponsor decision with verified recruitment, bilingual execution where needed, and board-ready synthesis tied to access and commercial milestones.',
    },
  ];
}
