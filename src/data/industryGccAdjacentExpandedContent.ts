import type { MatrixCountrySlug, MatrixIndustrySlug } from '@/data/industryMarketResearchMatrix';
import { MATRIX_COUNTRIES, MATRIX_INDUSTRIES } from '@/data/industryMarketResearchMatrix';
import type { ServiceLandingExpandedContent } from '@/data/serviceLandingContent';

const GCC_MARKET_SNIPPET =
  'The GCC pharmaceutical and healthcare market was worth roughly USD 23.7 billion in 2024 and is projected to reach about USD 49 billion by 2033 — a 7.6% CAGR (BioNixus market analysis, 2024).';

const ADJACENT_INDUSTRIES: ReadonlySet<MatrixIndustrySlug> = new Set([
  'medtech',
  'biotech',
  'consumer-health',
]);

const SHARED_DELIVERABLES = [
  'Executive summary mapped to one commercial, access, or portfolio decision',
  'Stakeholder segmentation with influence and objection themes by account type',
  'Quantitative adoption or sizing modules where the objective requires measurement',
  'Qualitative depth interviews with clinicians, procurement, and channel leaders',
  'Competitive landscape and switching barrier analysis with segment-level readouts',
  'Audit-ready methodology appendix for internal review or partner diligence',
];

type CountryIndustryRegulatory = Partial<Record<MatrixIndustrySlug, string[]>>;

const COUNTRY_REGULATORY: Record<MatrixCountrySlug, CountryIndustryRegulatory> = {
  'saudi-arabia': {
    medtech: [
      'MedTech research in Saudi Arabia must reflect SFDA medical device classification, local authorized representative requirements, and whether NUPCO or cluster procurement governs the target account — a single “national hospital average” misprices most device categories.',
      'NUPCO centralized awards can shift utilization across hundreds of MOH-linked facilities overnight; sizing should segment tender-governed accounts from private hospital carve-outs before field scales.',
      'Regional health clusters under the Health Sector Transformation Program change protocol ownership and capital budgets; influence maps must tag cluster-level biomedical engineering and value-analysis committees.',
      'SFDA post-market surveillance and vigilance expectations affect how hospitals evaluate switching costs; research should capture service, training, and spare-parts logistics alongside clinical enthusiasm.',
      'Arabic–English fieldwork is standard for cath-lab, ICU, surgical, and imaging stakeholders; medical terminology is reviewed with local advisors before recruitment calendars lock.',
      'Cross-GCC harmonization helps multinational portfolios, but Saudi procurement rhythm and NUPCO overlay require local primary research rather than imported UAE averages.',
    ],
    biotech: [
      'Biotech and life-sciences research in Saudi Arabia intersects SFDA biologics regulation, NUPCO listing for high-cost therapies, and Vision 2030 localization incentives for manufacturing and clinical development.',
      'SFDA Economic Evaluation System requirements from July 2025 raise the bar for pharmacoeconomic evidence at registration — biotech dossiers need committee-ready narratives, not academic summaries.',
      'Hospital biologics committees, cold-chain logistics, and pharmacist substitution rules shape uptake as much as specialist preference; mixed-method design links clinical intent to operational constraints.',
      'Clinical trial feasibility and site identification modules should map SFDA-approved centres, genetic testing infrastructure, and referral pathways for rare-disease or precision portfolios.',
      'Arabic–English depth interviews with KOLs, pharmacists, and payer-facing administrators preserve nuance for global sponsors while maintaining audit-ready governance.',
      'BioNixus pairs Saudi biotech modules with HEOR consulting and pharma fieldwork when launch planning spans hospital, payer, and community channels.',
    ],
    'consumer-health': [
      'Consumer health and OTC research in Saudi Arabia spans SFDA-adjacent product categories, pharmacy retail chains, e-pharmacy growth, and Wasfaty e-prescription dynamics that reshape OTC adjacency.',
      'Regulatory boundaries between cosmetics, supplements, and OTC medicines affect claims research and channel strategy; feasibility confirms category scope before message testing scales.',
      'Modern trade, traditional pharmacy, and e-commerce each follow distinct shopper missions; segmentation prevents Riyadh premium skew from masking mass-market behaviour.',
      'Arabic-first shopper and pharmacist modules are standard; bilingual packaging and influencer-led discovery require separate message tracks for youth versus chronic-care OTC.',
      'Seasonal demand (Ramadan, Hajj, summer travel) shifts category velocity; tracking studies should document field windows so conclusions are not attributed to temporary spikes.',
      'Connect consumer health readouts with pharmacies Saudi Arabia marketing intelligence and GCC pharmacy market research when retail and clinical channels intersect.',
    ],
  },
  uae: {
    medtech: [
      'MedTech research in the UAE must segment DHA (Dubai), DOH (Abu Dhabi), and MOHAP federal pathways — each governs facility licensing, product lists, and procurement cadence differently.',
      'Mandatory health insurance products apply distinct medical policies; device adoption splits between Essential Benefits Plan channels and premium international hospital networks.',
      'Private hospital groups and medical tourism corridors sustain higher innovator device uptake than basic insurance tiers; research tags emirate, insurer, and hospital brand before extrapolation.',
      'Procurement committees expect economic narratives and user-workflow proof; cath-lab, OR, and nursing modules should test objection libraries insurers cite in prior authorization.',
      'Arabic–English moderation preserves nuance in administrator and clinician conversations while delivering comparable analytics for regional leadership.',
      'Emirate-level readouts should precede national roll-up: Dubai private growth versus Abu Dhabi insurance density requires separate 30/60/90 actions.',
    ],
    biotech: [
      'Biotech research in the UAE spans MOHAP and emirate regulators, mandatory insurance formularies, and fast-growing private hospital adoption of innovator biologics.',
      'Dual-licensing and Emirates Drug Establishment pricing evolution affect how hospitals source biologics; provider research traces procurement alongside clinical adoption.',
      'Medical tourism and expatriate cohorts create distinct patient flows; feasibility confirms resident versus visitor populations before sizing rare-disease or specialty biologics.',
      'Cold-chain, compounding, and biosimilar switching policies differ by insurer tier; pharmacist and payer modules clarify operational rules committees rely on.',
      'Clinical research hubs in Dubai and Abu Dhabi attract multinational trial activity; site feasibility should map investigator networks relevant to your modality.',
      'Pair UAE biotech evidence with MOHAP access context and the UAE healthcare market report when decisions span provider and drug channels.',
    ],
    'consumer-health': [
      'Consumer health research in the UAE reflects high e-commerce penetration, mall pharmacy formats, and influencer-led discovery alongside traditional community pharmacy.',
      'Emirate-level income and insurance segmentation drives OTC and wellness category growth; Dubai premium missions differ from Northern Emirates mass-market behaviour.',
      'Regulatory claims boundaries for supplements and cosmetics require legal review before concept testing; research scopes permissible claims per category.',
      'Multilingual fieldwork (Arabic, English, Hindi, Tagalog) reaches expatriate shopper segments that dominate certain OTC categories.',
      'Employer wellness programmes and insurance formulary adjacency affect pharmacy recommendation behaviour; pharmacist modules capture detail beyond shelf analytics.',
      'Link UAE consumer health modules with GCC pharmacy market and retail research when omnichannel strategy spans bricks and e-pharmacy.',
    ],
  },
  egypt: {
    medtech: [
      'MedTech research in Egypt runs through EDA device registration, hospital tender cycles, and distributor networks that differ materially from Gulf NUPCO models.',
      'Public ministry hospitals, university centres, and fast-growing private groups follow distinct procurement rhythms; sample design reflects realistic listing accounts.',
      'Hard-currency budgets and FX-sensitive tenders affect device affordability; total cost of ownership and local service capability weigh heavily in committee decisions.',
      'Upper Egypt referral patterns differ from Cairo corridors; geographic quotas prevent capital-city skew in national adoption forecasts.',
      'Arabic fieldwork is mandatory for physician, biomedical engineering, and procurement depth; BioNixus Egypt programmes use verified specialist networks.',
      'Connect Egypt device research with the Egypt medical devices market report and pharmaceutical market research Egypt when portfolios span drug and device channels.',
    ],
    biotech: [
      'Biotech research in Egypt intersects EDA biologics regulation, UHIA public procurement, and growing private hospital adoption of innovator therapies.',
      'Price-sensitive public tenders coexist with out-of-pocket private segments; dual-pathway research prevents mispriced access strategy.',
      'Clinical trial activity concentrates in Cairo and Alexandria academic centres; feasibility maps investigator availability for your indication before global protocols lock.',
      'Pharmacist substitution and institutional protocols can override specialist preference; research documents operational rules alongside prescriber intent.',
      'Arabic–English execution preserves nuance for global sponsors; Egypt cells harmonize with GCC appendices when regional portfolios require roll-up.',
      'Pair biotech modules with Egypt pharmaceutical market research and the Egypt healthcare market report for macro context alongside institutional depth.',
    ],
    'consumer-health': [
      'Consumer health research in Egypt spans mass-market pharmacy chains, traditional outlets, and growing e-commerce with mobile-wallet payment adoption.',
      'Out-of-pocket spend dominates many OTC categories; pricing and pack-size testing requires income-segmented shopper modules beyond Cairo elites.',
      'Regulatory scope for supplements and OTC claims follows EDA categories; message research aligns to permissible claims before national roll-out.',
      'Seasonal and rural–urban splits affect distribution; field quotas document geography before conclusions drive national media spend.',
      'Pharmacist recommendation remains influential; pharmacy intercept and depth modules complement shopper quant where category dynamics require both.',
      'Link Egypt consumer health readouts with market research Egypt hub pages when retail strategy connects to broader healthcare portfolio decisions.',
    ],
  },
  kuwait: {
    medtech: [
      'MedTech research in Kuwait reflects MOH oversight, concentrated public procurement, and a small number of high-influence hospital networks relative to population size.',
      'KFD and hospital value committees evaluate device listings with emphasis on service contracts and spare-parts availability given import dependency.',
      'Private hospital share is smaller than UAE or Saudi but growing; segmentation prevents over-weighting single-institution formulary behaviour.',
      'Arabic–English fieldwork reaches clinician and procurement stakeholders across ministry and private channels with documented QC.',
      'Cross-GCC benchmarking with Saudi NUPCO and UAE emirate models helps multinational teams interpret Kuwait-specific tender timing.',
      'Connect Kuwait MedTech modules with the Kuwait healthcare market report and pharmaceutical companies Kuwait page for access context.',
    ],
    biotech: [
      'Biotech research in Kuwait aligns with MOH formulary processes, limited but high-spend insured population, and regional referral patterns for specialty care.',
      'High-cost therapy committees apply budget scrutiny; economic narratives and budget-impact framing matter alongside clinical evidence.',
      'Cold-chain and compounding infrastructure concentrates in named hospitals; site mapping precedes rare-disease or biologics feasibility.',
      'Arabic–English KOL and pharmacist depth supports medical affairs and access teams preparing committee packs.',
      'Kuwait cells roll up cleanly with Saudi and UAE harmonized instruments for regional portfolio reviews.',
      'Pair biotech research with Kuwait market access research when launch planning spans hospital and payer channels.',
    ],
    'consumer-health': [
      'Consumer health research in Kuwait reflects affluent shopper base, mall pharmacy concentration, and high e-commerce penetration relative to population.',
      'MOH pricing and pharmacy regulation affect OTC listing and promotion; claims research respects category boundaries before concept scale-up.',
      'Expatriate versus national shopper segments differ in brand loyalty and channel preference; quotas tag nationality and income proxies where feasible.',
      'Pharmacist recommendation influences premium OTC and wellness categories; pharmacy modules complement shopper quant.',
      'Seasonal travel and Gulf visitor flows can spike certain categories; field windows are documented in readouts.',
      'Link Kuwait consumer health work with GCC pharmacy market research when regional retail strategy is in scope.',
    ],
  },
  qatar: {
    medtech: [
      'MedTech research in Qatar reflects MOPH oversight, Hamad Medical Corporation system influence, and growing private hospital investment ahead of major events infrastructure legacy.',
      'Concentrated provider networks mean a small set of committees gate high-value device categories; institution tagging is essential before field scales.',
      'Import-dependent supply chains elevate total cost of ownership in committee dialogue; service and training modules accompany clinical research.',
      'Arabic–English fieldwork standard for biomedical engineering, surgical, and imaging stakeholders across public and private facilities.',
      'Qatar cells compare cleanly with UAE and Kuwait using harmonized GCC instruments for regional leadership.',
      'Connect Qatar MedTech research with the Qatar healthcare market report and pharmaceutical companies Qatar page.',
    ],
    biotech: [
      'Biotech research in Qatar aligns with MOPH formulary processes, HMC specialty centre concentration, and insurance mandate dynamics.',
      'Precision medicine and genomics initiatives create distinct investigator networks; feasibility maps relevant centres for oncology and rare-disease portfolios.',
      'Committee-ready economic evidence supports high-cost biologics listing; qual modules surface objections dossiers miss.',
      'Arabic–English execution with medical terminology QA preserves nuance for global sponsors.',
      'Clinical trial infrastructure supports multinational protocols; site identification modules integrate with global feasibility.',
      'Pair Qatar biotech modules with Qatar healthcare market report when macro and institutional context must align.',
    ],
    'consumer-health': [
      'Consumer health research in Qatar reflects high income, mall and hospital pharmacy formats, and expatriate-heavy shopper demographics.',
      'MOPH regulation shapes OTC and supplement categories; claims testing aligns to permissible language before activation.',
      'Premium wellness and sports nutrition segments grow alongside chronic-care OTC; segmentation prevents averaging incompatible missions.',
      'Multilingual shopper reach (Arabic, English, South Asian languages) reflects resident population mix.',
      'Pharmacist detail and insurance adjacency influence recommendation in premium channels.',
      'Link Qatar consumer health readouts with GCC pharmacy market intelligence for regional retail planning.',
    ],
  },
  oman: {
    medtech: [
      'MedTech research in Oman reflects MOH oversight, regional hospital referral patterns, and procurement rhythms distinct from larger Gulf markets.',
      'Public sector concentration means ministry tender calendars strongly influence device uptake; private hospital share is growing but still niche for many categories.',
      'Service capability and technician training weigh heavily in committee decisions given geographic spread across governorates.',
      'Arabic–English fieldwork reaches clinicians and procurement across Muscat and secondary cities with documented travel quotas.',
      'Oman modules harmonize with UAE and Saudi GCC cells without assuming identical procurement behaviour.',
      'Connect Oman MedTech research with the Oman healthcare market report and pharmaceutical companies Oman page.',
    ],
    biotech: [
      'Biotech research in Oman aligns with MOH formulary processes, referral to regional specialty centres, and budget-conscious committee evaluation.',
      'Some specialty care refers to UAE or Saudi centres; research documents local versus referred treatment pathways where relevant.',
      'Arabic–English KOL and pharmacist modules support listing and medical education planning.',
      'Feasibility validates investigator and patient availability before global protocols commit to Oman cells.',
      'Harmonized GCC readouts include Oman appendices with explicit sample-size limitations when categories are niche.',
      'Pair biotech work with Oman healthcare market report for institutional and macro alignment.',
    ],
    'consumer-health': [
      'Consumer health research in Oman spans community pharmacy, growing modern trade, and e-commerce with logistics constraints outside Muscat.',
      'MOH pricing affects OTC affordability; pack-size and price-point testing reflects local income distribution.',
      'Traditional and modern channel missions differ; research segments before national media or promotion spend commits.',
      'Arabic-first shopper and pharmacist modules standard; bilingual packaging tests where expatriate segments matter.',
      'Seasonal tourism and regional travel affect certain categories; field calendars note timing in deliverables.',
      'Link Oman consumer health modules with broader GCC retail research when distribution spans multiple Gulf markets.',
    ],
  },
  bahrain: {
    medtech: [
      'MedTech research in Bahrain reflects NHRA oversight, compact hospital network, and strong cross-border care flows with Saudi Eastern Province.',
      'Small market size concentrates influence in named facilities; institution mapping precedes scaled physician lists.',
      'Private insurance density supports faster innovator uptake in selected categories versus public pathways.',
      'Arabic–English fieldwork across ministry and private hospitals with documented respondent verification.',
      'Bahrain often serves as GCC pilot market; research designs should clarify whether conclusions export to Saudi or UAE scale-up.',
      'Connect Bahrain MedTech modules with Bahrain healthcare market report and pharmaceutical companies Bahrain page.',
    ],
    biotech: [
      'Biotech research in Bahrain aligns with NHRA regulation, concentrated specialist networks, and referral links to regional centres.',
      'Committee evaluation emphasizes budget impact for high-cost therapies in a small insured population.',
      'Clinical research activity exists but at smaller scale; feasibility sets realistic cohort targets before commitment.',
      'Arabic–English KOL depth supports medical affairs and access narrative development.',
      'Harmonized instruments allow Bahrain appendices within Saudi or UAE-led GCC programmes.',
      'Pair biotech modules with Bahrain healthcare market report when launch planning needs macro context.',
    ],
    'consumer-health': [
      'Consumer health research in Bahrain reflects high insurance penetration, mall pharmacy formats, and Saudi visitor flows.',
      'NHRA category regulation shapes OTC and supplement claims; message research respects legal boundaries.',
      'Compact geography enables efficient quant samples but requires care to avoid single-chain skew.',
      'Pharmacist recommendation and premium shopper missions dominate selected wellness categories.',
      'Cross-border shopping with Saudi Eastern Province affects certain SKU velocity; research notes channel leakage where material.',
      'Link Bahrain consumer health work with GCC pharmacy market research for regional strategy alignment.',
    ],
  },
};

function buildMarketContext(
  label: string,
  industryName: string,
  regulatorShort: string,
): string[] {
  return [
    `${GCC_MARKET_SNIPPET} ${label} combines concentrated provider networks, evolving procurement, and bilingual market dynamics that syndicated audits rarely segment cleanly.`,
    `${industryName} decisions in ${label} hinge on ${regulatorShort} context, institutional committee rhythms, and channel-specific buyer behaviour — not imported averages from Europe or North America.`,
    'Launch windows in the Gulf are shorter and access bars higher than in many mature markets; research tying stakeholder behaviour to procurement and payer reality reduces expensive rework before committee milestones.',
    `Multinational manufacturers often run parallel GCC cells within global mandates; BioNixus harmonizes core metrics across ${label}, Saudi Arabia, and UAE while preserving local execution realism in readouts.`,
    `BioNixus executes ${industryName.toLowerCase()} programmes from regional offices with healthcare-grade governance suitable for sensitive categories and multinational medical affairs teams.`,
    `For pharmaceutical adjacency in the same market, dedicated pharma BOFU pages remain separate — this URL owns ${industryName.toLowerCase()} industry intent and company-selection queries.`,
    `Connect ${label} findings to the healthcare market research hub and ${label} healthcare market report when portfolio decisions span multiple therapy or device categories.`,
  ];
}

function buildServices(
  label: string,
  industryName: string,
  regulatorShort: string,
): ServiceLandingExpandedContent['services'] {
  return {
    heading: `${industryName} market research services BioNixus delivers in ${label}`,
    items: [
      {
        title: 'Stakeholder segmentation and influence mapping',
        description: `Identify decision nodes across public, private, and partner channels in ${label} — tagged by institution type, payer context, and ${regulatorShort} relevance before field scales.`,
      },
      {
        title: 'Quantitative surveys and tracking',
        description: `Adoption metrics, brand tracking, and sizing modules with verified samples and daily QC — designed for ${industryName.toLowerCase()} categories where syndicated panels underperform.`,
      },
      {
        title: 'Qualitative depth and message testing',
        description: `Arabic–English interviews and workshops for objection libraries, narrative refinement, and procurement rationale in ${label}.`,
      },
      {
        title: 'Competitive and market structure intelligence',
        description: `Landscape mapping, share proxies, and scenario inputs grounded in ${label} channel reality rather than desk extrapolation.`,
      },
      {
        title: 'Mixed-method executive readouts',
        description: `Single evidence framework for leadership with 30/60/90 actions, owners, and evidence gaps flagged for ${industryName.toLowerCase()} decisions.`,
      },
      {
        title: 'GCC harmonization and roll-up modules',
        description: `Comparable ${label} cells with Saudi, UAE, or Egypt appendices using harmonized instruments for regional portfolio committees.`,
      },
    ],
  };
}

function buildMethodology(label: string, industryName: string): ServiceLandingExpandedContent['methodology'] {
  return {
    heading: `${industryName} market research methodology in ${label}`,
    paragraphs: [
      `BioNixus anchors every ${label} programme on one ${industryName.toLowerCase()} decision — sizing, access, competitive defence, or messaging — before recruitment calendars lock. Feasibility documents sample frames, bilingual requirements, and institution access risk.`,
      `Mixed-method designs combine quant for metrics and qual for procurement, pathway, and objection depth. Soft-launch completes validate quotas before database lock; daily telemetry flags channel or geography skew early.`,
      `Arabic–English instruments undergo medical or category terminology review with local advisors. Respondent verification includes role, institution type, and practice setting confirmation — reducing misclassification that undermines panel-only data.`,
      `Deliverables include executive synthesis, competitive objection libraries, audit-ready appendices, and activation workshops with named owners — optional GCC roll-up scoping when regional leadership requires comparable readouts.`,
      `Ethics permissions, hospital access agreements, and MOH research permits are mapped during feasibility so fieldwork does not stall mid-program when institutional sites require formal approval.`,
      `Workshop cadence includes pre-field alignment on segment tags, mid-field telemetry review, and final readout validation before 30/60/90 actions are assigned to commercial, medical, or access owners.`,
    ],
  };
}

function buildFaqs(
  label: string,
  industryName: string,
  regulatorShort: string,
  bofuPath: string,
): ServiceLandingExpandedContent['faqs'] {
  const lower = industryName.toLowerCase();
  return [
    {
      question: `Who is the best ${lower} market research company in ${label}?`,
      answer: `BioNixus is a leading ${lower} market research company in ${label}: bilingual fieldwork, mixed methods, ${regulatorShort}-aware design, and outputs built for decisions — not generic syndicated decks. See ${bofuPath} for company-intent detail.`,
    },
    {
      question: `What does ${lower} market research include in ${label}?`,
      answer: `Programs typically combine stakeholder interviews, surveys, channel mapping, competitive intelligence, and executive synthesis tailored to ${label} institutional and regulatory context.`,
    },
    {
      question: `Does BioNixus run Arabic fieldwork in ${label}?`,
      answer: 'Yes. Arabic–English instruments and moderation are standard for MENA programs with medical or category terminology QA before field.',
    },
    {
      question: `How much does ${lower} market research cost in ${label}?`,
      answer: 'Scope drives cost; focused qual modules often start in the low five figures USD. BioNixus scopes to one decision per phase with written feasibility before commitment.',
    },
    {
      question: `How does BioNixus differ from generalist agencies in ${label}?`,
      answer: `BioNixus combines multi-industry capability with healthcare-grade governance — useful when ${lower} studies need rigorous sampling, institution tagging, and access-aware design in ${label}.`,
    },
    {
      question: `Can ${label} research connect to GCC benchmarking?`,
      answer: 'Yes. Modules run standalone or with comparable Saudi, UAE, Egypt, and other Gulf cells using harmonized instruments and segment tags.',
    },
    {
      question: `How long does a typical ${lower} study take in ${label}?`,
      answer: 'Focused qual modules often complete in three to five weeks after feasibility; larger mixed-method programs may run eight to twelve weeks depending on institution access and sample complexity.',
    },
    {
      question: `Does BioNixus support ${regulatorShort} context in ${lower} research?`,
      answer: `Yes. Study design reflects ${regulatorShort} pathways, listing requirements, and procurement overlays where they gate uptake for your category in ${label}.`,
    },
  ];
}

function buildExpandedContent(
  countrySlug: MatrixCountrySlug,
  industrySlug: MatrixIndustrySlug,
): ServiceLandingExpandedContent | null {
  if (!ADJACENT_INDUSTRIES.has(industrySlug)) return null;

  const country = MATRIX_COUNTRIES[countrySlug];
  const industry = MATRIX_INDUSTRIES[industrySlug];
  if (!country || !industry) return null;

  const regulatoryParagraphs = COUNTRY_REGULATORY[countrySlug]?.[industrySlug];
  if (!regulatoryParagraphs?.length) return null;

  const industryName = industry.displayNameShort;
  const bofuPath = `/${countrySlug}-${industrySlug}-market-research`;

  return {
    hubLink: { to: '/healthcare-market-research', label: 'healthcare market research hub' },
    regulatory: {
      heading: `${country.regulatorShort} and institutional context for ${industryName} research in ${country.label}`,
      paragraphs: regulatoryParagraphs,
    },
    marketContext: {
      heading: `Why ${industryName} teams invest in ${country.label} market research now`,
      paragraphs: buildMarketContext(country.label, industryName, country.regulatorShort),
    },
    services: buildServices(country.label, industryName, country.regulatorShort),
    methodology: buildMethodology(country.label, industryName),
    useCases: {
      heading: `Common ${industryName} research use cases in ${country.label}`,
      paragraph: `${industryName} research in ${country.label} supports launch sequencing, competitive defence, channel strategy, and access-aligned messaging when local evidence is required for committee or leadership decisions.`,
      areas: [
        'Pre-launch sizing and account prioritisation',
        'Competitive entry and switching barrier analysis',
        'Procurement and committee objection mapping',
        'KOL and stakeholder influence mapping',
        'Message and narrative testing',
        'GCC harmonization and regional roll-up',
        'Pricing and value evidence planning',
        'Distributor and channel partner evaluation',
      ],
    },
    process: {
      heading: `How BioNixus runs ${industryName} programs in ${country.label}`,
      steps: [
        {
          title: 'Decision framing and feasibility',
          body: `Align on one ${industryName.toLowerCase()} outcome, map stakeholders and channels, and document bilingual and institution access requirements in ${country.label}.`,
        },
        {
          title: 'Instrument design and QC plan',
          body: 'Build Arabic–English screeners and discussion guides with soft-launch validation before full field opens.',
        },
        {
          title: 'Field execution with telemetry',
          body: `Recruit verified respondents across target institutions with daily quota review and ${country.regulatorShort}-aware segment tags.`,
        },
        {
          title: 'Executive synthesis and activation',
          body: 'Deliver integrated readout, objection libraries, and 30/60/90 actions with optional GCC appendices for regional leadership.',
        },
      ],
    },
    deliverables: {
      heading: `Typical ${industryName} deliverables in ${country.label}`,
      bullets: SHARED_DELIVERABLES,
    },
    decisionBlueprint: {
      why: `${country.label} ${industryName.toLowerCase()} decisions concentrate in identifiable institutions and committee rhythms — syndicated averages hide the gates that determine uptake.`,
      evidence: `Institution-tagged mixed-method research with ${country.regulatorShort} context surfaces behaviour prescriber-only or shopper-only panels cannot explain alone.`,
      next: `Scope a ${country.label} cell on one ${industryName.toLowerCase()} decision; BioNixus delivers written feasibility and methodology within one week.`,
    },
    faqs: buildFaqs(country.label, industryName, country.regulatorShort, bofuPath),
  };
}

export function getGccIndustryExpandedContent(
  countrySlug: MatrixCountrySlug,
  industrySlug: MatrixIndustrySlug,
): ServiceLandingExpandedContent | null {
  return buildExpandedContent(countrySlug, industrySlug);
}
