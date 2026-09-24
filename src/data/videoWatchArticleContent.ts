export type VideoArticleSection = {
  title: string;
  paragraphs: string[];
};

/** Long-form SSR copy for /videos/* watch pages (GEO + thin-page threshold). */
export const VIDEO_WATCH_ARTICLE_SECTIONS: Record<string, VideoArticleSection[]> = {
  'healthcare-market-research-overview': [
    {
      title: 'What this overview covers',
      paragraphs: [
        'BioNixus designs quantitative, qualitative, and market-access research for pharmaceutical and medtech teams that need decision-ready evidence — not syndicated tables alone. The overview video summarises how programmes move from brief to fieldwork to board-ready synthesis across the Americas, Europe, and the Middle East.',
        'Healthcare market research at BioNixus is primary: verified physician, payer, pharmacist, and hospital stakeholders; bilingual Arabic–English capability in the Gulf; and governance aligned to GDPR, ICH-GCP awareness, and regional regulator context (SFDA, MOHAP, EMA-facing dossiers where relevant).',
        'If you landed from search looking for a firm that complements IQVIA or Kantar syndicated feeds with account-level cuts, start with the IQVIA alternative page, then return here for methodology context.',
      ],
    },
    {
      title: 'Quantitative pharmaceutical research',
      paragraphs: [
        'Quant modules include ATU and brand tracking, message and claim testing, pricing and access vignettes, and segmentation studies sized for launch or defence decisions. Samples are recruited against real practice profiles — not generic “healthcare professional” panels.',
        'Survey instruments are built for multi-country roll-ups when needed, with country-specific regulatory and pathway modules so Gulf, European, and US cells remain comparable without averaging incompatible care systems.',
        'Deliverables include executive summaries tied to one decision, full data tables, and verbatims mapped to institution archetypes where qualitative follow-ups are included.',
      ],
    },
    {
      title: 'Qualitative and access research',
      paragraphs: [
        'In-depth interviews and advisory boards explore treatment sequencing, formulary behaviour, tender dynamics, and evidence gaps that quantitative waves later validate. Access teams use these modules before HTA submissions, pricing negotiations, or NUPCO-style framework defence.',
        'Medical affairs and commercial teams share the same evidence base when studies are scoped to cover both messaging and access objections — reducing rework between departments.',
        'Typical Gulf access topics include SFDA and MOHAP context, hospital P&T pathways, insurance formularies in the UAE, and procurement calendars that move share faster than in outpatient-only European markets.',
      ],
    },
    {
      title: 'Geographic depth',
      paragraphs: [
        'Priority regions include the GCC (Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain), wider Middle East and North Africa, G5 Europe, the United States, Brazil, and selected Asia-Pacific markets. Cairo serves as the MENA fieldwork hub; US headquarters support Americas programmes.',
        'Country pages under /healthcare-market-research document therapy and service coverage per market. Use them when your brief names a single country; use this overview when you are selecting a research partner across a portfolio.',
      ],
    },
    {
      title: 'How engagements start',
      paragraphs: [
        'Most programmes begin with a 30-minute scoping call or a written brief describing target stakeholders, countries, decision date, and competitor set. BioNixus responds with a methodology outline within one business day and a full proposal within 48 hours of a complete brief.',
        'Minimum engagement sizes typically start at USD 20,000 for multi-stakeholder primary research — aligned to pharma and medtech procurement norms. Smaller pilots are possible for single-city qualitative work when the brief is narrow.',
        'Contact admin@bionixus.com or use the site contact form with your timeline and budget band; reference this video if your team already reviewed the overview.',
      ],
    },
    {
      title: 'Related resources',
      paragraphs: [
        'Explore the healthcare market research hub for country and therapy entry points, the services hub for methodology detail, and anonymised case studies for sample deliverable styles.',
        'For competitor positioning versus syndicated incumbents, read the IQVIA alternative and account-level market research pages — they explain the keep-and-add model this video mentions.',
      ],
    },
    {
      title: 'Oncology, specialty, and rare-disease modules',
      paragraphs: [
        'Oncology programmes map indication sequencing, biomarker testing behaviour, and hospital versus community treatment paths — separate modules for high-acuity centres and ambulatory networks so forecasts are not averaged incorrectly.',
        'Rare-disease work emphasises patient-finding realism, centre-of-excellence mapping, and caregiver burden — sample sizes are smaller but stakeholder verification is stricter because KOL lists are narrow.',
        'Specialty hubs under healthcare market research document therapy-specific methods for immunology, biosimilars, vaccines, neurology, and digital health when your brief names a class rather than a country alone.',
      ],
    },
    {
      title: 'HEOR, pricing, and payer-facing research',
      paragraphs: [
        'Health economics and outcomes research modules support value dossiers, budget-impact narratives, and payer objection testing before submission — especially where Gulf or European payers request local adaptation of global models.',
        'Pricing research combines physician willingness-to-prescribe, pharmacist substitution rules, and procurement scoring criteria in hospital systems that do not behave like retail markets.',
        'Outputs flag evidence gaps with suggested owners (medical, access, or real-world evidence) so committees receive an action plan, not only a chart book.',
      ],
    },
    {
      title: 'Real-world evidence and post-marketing studies',
      paragraphs: [
        'Real-world evidence programmes use chart review, registry linkage where permitted, and physician-reported outcomes to complement trials — governed to respect patient privacy and local ethics expectations.',
        'Gulf RWE often aligns with SFDA pharmacovigilance and hospital quality mandates; European work may interface with national registries or HTA follow-up requests.',
        'BioNixus scopes RWE when the decision is label expansion, tender defence, or medical education gap closure — not when a simple syndicated audit refresh would suffice.',
      ],
    },
    {
      title: 'Quality, compliance, and field governance',
      paragraphs: [
        'Recruitment uses verified credentials for HCPs; consumer and patient work follows informed-consent procedures appropriate to each country. GDPR applies to EU respondents; US programmes follow client IRB or exemption paths as scoped.',
        'Audio, video, and transcript handling follows client confidentiality tiers — many pharma clients require secure portals and no generative-AI training on raw verbatims.',
        'Field teams record audit trails for incentive payments and screen-outs so procurement and legal reviewers can reconstruct sample composition during vendor audits.',
      ],
    },
    {
      title: 'Deliverable formats leadership teams use',
      paragraphs: [
        'Executive decks tie to one decision (launch go/no-go, tender defence, message pivot) with appendix tables for analysts. Workshop facilitation is available when cross-functional committees must align on scenarios.',
        'Tracking studies include wave-over-wave dashboards when clients operate always-on brand trackers across multiple countries with harmonised KPIs.',
        'Access modules often ship as objection libraries and payer archetype cards usable by field teams without rewriting medical language.',
      ],
    },
    {
      title: 'Questions teams ask before commissioning',
      paragraphs: [
        'Should we keep IQVIA or Kantar and add primary research? Usually yes when the question names accounts, cities, tenders, or stakeholders the syndicated universe does not resolve.',
        'Can one vendor cover the US and the Gulf? BioNixus runs both with region-specific recruitment playbooks — not a single translated survey.',
        'How long from kick-off to first readout? Timelines depend on sample and ethics paths; a typical multi-country physician quant wave runs several weeks from approval to top-line, with full delivery shortly after.',
        'What budget band should we plan? Multi-country primary programmes commonly start at USD 20,000 and scale with countries, stakeholder types, and waves — proposals state ranges explicitly after scoping.',
      ],
    },
    {
      title: 'Medtech and hospital stakeholder research',
      paragraphs: [
        'Medtech programmes interview surgeons, anaesthetists, cath-lab coordinators, biomedical engineers, and procurement — reflecting device categories where the physician is not the only economic buyer.',
        'Hospital capital committees and value-analysis teams appear in capital equipment and digital-health modules; studies document evaluation criteria, pilot success metrics, and IT security objections that delay go-live.',
        'GCC medtech work often intersects with MOHAP, SFDA, and tender calendars similar to pharma — separate device registration and hospital listing steps from physician preference.',
        'Link medtech briefs to country medtech market reports when you need macro context, then scope primary modules for the accounts that matter to revenue this year.',
      ],
    },
    {
      title: 'Medical affairs and commercial alignment',
      paragraphs: [
        'Medical affairs teams use message testing, medical information gap analysis, and KOL mapping; commercial teams use ATU, competitive switching, and account prioritisation — BioNixus can run parallel tracks with a merged readout.',
        'Advisory boards and steering committees are recruited with conflict checks and fair-balance review suitable for pharma compliance.',
        'When medico-legal must approve instruments, build extra review cycles into timelines; BioNixus drafts plain-language surveys and discussion guides designed for MLR iteration.',
        'Outputs separate “what physicians believe clinically” from “what they can prescribe given access” — a common failure mode in undifferentiated syndicated reports.',
      ],
    },
    {
      title: 'Working with local affiliates and global HQ',
      paragraphs: [
        'Affiliate teams brief in local language needs, tender dates, and named accounts; HQ teams need harmonised KPIs — study design should specify which cells roll up globally versus stay local-only appendices.',
        'Currency, net price, and confidential tender outcomes stay in restricted appendices when clients require tiered distribution.',
        'BioNixus project managers coordinate multi-time-zone steering calls and async feedback on drafts so affiliates are not surprised at final delivery.',
        'For Saudi and UAE affiliates comparing IQVIA subscriptions with primary cuts, use the IQVIA alternative Saudi page alongside this overview.',
      ],
    },
    {
      title: 'Pharmacovigilance and medical information touchpoints',
      paragraphs: [
        'Medical information and PV teams sometimes commission rapid physician pulse surveys after safety communications — scoped separately from brand trackers to meet timeline and fair-balance rules.',
        'Studies document whether HCPs change prescribing after Dear Doctor letters, label updates, or regional safety notices — with country-specific recruitment when Gulf regulators issue parallel communications.',
        'Outputs feed medical affairs prioritisation without replacing formal PV systems of record.',
      ],
    },
    {
      title: 'Contact and proposal logistics',
      paragraphs: [
        'Email admin@bionixus.com with countries, stakeholders, molecule or device class, and decision date. US teams may call +1 888 465 5557; Europe +44 7727 666682; Middle East, Africa and Asia +20 120 688 2323.',
        'The contact form at /contact routes briefs to research leadership — include “healthcare overview video” if you already watched the embed and want to skip introductory calls.',
        'Proposals list methodology, sample, timeline, and investment band; most multi-country pharma programmes start at USD 20,000 depending on scope.',
        'NDA and DPA templates are available for procurement review before fieldwork starts.',
        'Case studies at /case-studies show anonymised examples of launch, access, and competitive modules — useful when internal stakeholders ask for deliverable format before approving budget.',
        'Therapy-specific hubs (oncology, biosimilars, vaccines, immunology) document how quantitative and qualitative modules combine when your portfolio spans multiple departments.',
        'Market access consulting pages describe payer and HTA-facing work that often follows physician ATU waves — sequencing studies reduces duplicate fieldwork costs.',
      ],
    },
    {
      title: 'Syndicated feed complement (IQVIA, Kantar, Nielsen)',
      paragraphs: [
        'Most pharmaceutical clients keep syndicated audits for board-level share and commission BioNixus when the question is account-level, tender-specific, or stakeholder-verified.',
        'The IQVIA alternative page ranks when to keep the feed versus when to brief primary research — the same logic applies in every country cell, including Gulf affiliates.',
        'Account-level market research explains SKU and banner cuts that audits do not sell as standard products.',
        'Combining syndicated trend lines with a primary wave in the same quarter gives committees both macro context and actionable gaps.',
        'Hospital market research and pharmacy mystery shopper modules appear frequently in launch plans when retail audit data misses named accounts.',
        'Real-world evidence and HEOR pages describe follow-on modules once launch tracking establishes baseline share — useful for lifecycle teams watching this overview before budgeting waves two and three.',
      ],
    },
    {
      title: 'Glossary for procurement reviewers',
      paragraphs: [
        'ATU (awareness, trial, usage) studies measure physician familiarity and prescribing behaviour for pharmaceutical brands.',
        'U&A (usage and attitude) applies to consumer categories; do not confuse the acronyms when scoping mixed portfolios.',
        'RWE (real-world evidence) uses observational or chart-based designs; separate from interventional trials and from syndicated audits.',
        'FSP (functional service provider) in clinical development is unrelated to consumer research — see the GCC FSP market page if your query was outsourcing, not this healthcare overview.',
        'Minimum project sizes for multi-stakeholder pharma research typically begin around USD 20,000; exact bands appear in the written proposal after scoping.',
        'Subscribe to the site newsletter from the footer if you want monthly EMEA pharma research notes — optional and separate from project proposals.',
        'This guide stays on the canonical watch URL /videos/healthcare-market-research-overview so crawlers and LLM fetchers read the same text as human visitors.',
      ],
    },
  ],
  'consumer-b2b-market-research': [
    {
      title: 'Consumer and B2B research at BioNixus',
      paragraphs: [
        'BioNixus runs consumer and B2B market research for healthcare-adjacent categories, FMCG, retail, banking, real estate, and industrial buyers — using the same senior-led design and field governance as pharmaceutical programmes.',
        'The consumer and B2B portal video shows how teams combine mystery shopping, trade audits, U&A, and B2B decision-maker interviews when syndicated panels do not cover the category or geography.',
        'This is not a separate agency brand: one governance model, one proposal process, and shared quality standards across healthcare and commercial workstreams.',
      ],
    },
    {
      title: 'When consumer panels are not enough',
      paragraphs: [
        'National consumer trackers excel at attitudinal trends; they struggle with traditional trade, named banners, SKU-level facings, or B2B specification committees. BioNixus primary fieldwork fills that gap with account-level or route-level evidence.',
        'Categories such as OTC linked to pharmacy, medical aesthetics, devices sold through specialty retail, and B2B components in manufacturing supply chains often require hybrid qual-quant designs.',
        'MENA and Africa programmes leverage bilingual field teams and local permit awareness; European work follows GDPR recruitment and consent standards.',
      ],
    },
    {
      title: 'B2B decision-maker research',
      paragraphs: [
        'B2B modules interview procurement, operations, and technical approvers in manufacturing, logistics, energy, and services — wherever the buying centre is small and expert-led.',
        'Studies map criteria weights, incumbent stickiness, and proof points required to displace a supplier. Deliverables support pricing, segmentation, and sales enablement — not only top-line market size.',
        'Where healthcare manufacturers sell ingredients, packaging, or capital equipment into hospitals, the same B2B methods apply with hospital biomedical and procurement stakeholders.',
      ],
    },
    {
      title: 'Trade, retail, and mystery shopping',
      paragraphs: [
        'Mystery shopping and trade audits document availability, facing, price, and promoter quality in named outlets — critical when modern-trade syndicated data misses traditional trade or pharmacy independents.',
        'Pharmacy mystery shopper modules support OTC and consumer health launches where audit rows stop at category level.',
        'Results are geo-tagged and time-stamped for legal and commercial review; reporting highlights distribution gaps actionable by sales teams.',
      ],
    },
    {
      title: 'Industries hub and healthcare bridge',
      paragraphs: [
        'Non-healthcare industry work is indexed under B2B and B2C industry hubs. Healthcare teams should stay on healthcare URLs for clinical stakeholders; commercial teams exploring adjacent categories may use both silos deliberately.',
        'Cross-industry methodology pages describe quantitative, qualitative, and digital approaches shared across practices.',
      ],
    },
    {
      title: 'Starting a consumer or B2B brief',
      paragraphs: [
        'Provide category, geography, decision date, and whether the buyer is a brand team, strategy function, or private equity diligence group. Note if syndicated data already exists and what question remains unanswered.',
        'BioNixus scopes recruitment, sample size, and timeline in a written proposal within 48 hours. Email admin@bionixus.com or submit the contact form with “consumer/B2B video” in the message for routing.',
      ],
    },
    {
      title: 'Segmentation and U&A for consumer categories',
      paragraphs: [
        'Usage and attitude studies define need states, purchase drivers, and barrier language for innovation pipelines — recruited to match category buyers rather than general population panels when the category is niche.',
        'Segmentation outputs include targeting rules usable by media and sales teams, with stability testing when clients plan multi-year brand architecture.',
        'Healthcare-adjacent consumer categories (OTC, nutrition, aesthetics) often require pharmacy or clinic channel modules alongside grocery and e-commerce cells.',
      ],
    },
    {
      title: 'Pricing, promotion, and pack testing',
      paragraphs: [
        'Price ladder and conjoint modules test willingness to pay and promotional elasticity where legal and category norms allow — especially in markets with high promotion intensity or regulated price caps.',
        'Pack and claim tests combine shelf simulation with qualitative debriefs when regulatory wording must be checked before quantitative scale-up.',
        'Results link to distribution reality: a winning concept fails if traditional trade cannot execute facings or cold-chain requirements.',
      ],
    },
    {
      title: 'Digital and social listening complements',
      paragraphs: [
        'Digital audits supplement — not replace — primary fieldwork: review sentiment, creator categories, and e-commerce ratings when the category sells online, then validate with in-store or route audits.',
        'B2B categories use expert interviews and tender document review when public data is thin.',
        'Clients receive a single storyline merging digital signals and primary cuts so committees are not left reconciling conflicting vendors.',
      ],
    },
    {
      title: 'Africa, MENA, and Europe fieldwork',
      paragraphs: [
        'Consumer routes in MENA and Africa often mix modern trade, traditional trade, and pharmacy — sample plans must mirror where volume actually moves.',
        'European programmes respect GDPR consent and incentive caps; Middle East programmes may require Arabic instruments and gender-matched recruiters for household categories.',
        'Multi-country roll-ups document where findings are comparable versus country-specific appendices — avoiding false global averages.',
      ],
    },
    {
      title: 'Private equity and strategy diligence',
      paragraphs: [
        'Due-diligence modules size categories, test management theses, and interview customers and competitors under tight timelines — deliverables emphasise red flags and upside levers, not marketing fluff.',
        'Healthcare services, medtech distribution, and specialty retail are frequent subjects when investors need primary validation of syndicated estimates.',
        'BioNixus can run parallel workstreams (consumer quant plus B2B expert calls) with a merged steering readout for deal teams.',
      ],
    },
    {
      title: 'Governance shared with healthcare practice',
      paragraphs: [
        'The same legal review, incentive policy, and data retention standards apply across healthcare and commercial work — important for pharma clients running consumer health adjacency studies.',
        'Subcontractor and mystery-shopper identities are protected; clients receive aggregated findings with geo tags at agreed resolution.',
        'Proposal documents state recruitment sources, quality checks, and cancellation policies up front to speed procurement.',
      ],
    },
    {
      title: 'Category examples (illustrative, not exhaustive)',
      paragraphs: [
        'FMCG and beverage teams use route audits and U&A in traditional trade corridors where modern-trade syndicated panels under-represent volume.',
        'Real estate and banking B2B studies interview relationship managers, credit committees, and procurement — small samples with high verification standards.',
        'Healthcare-adjacent beauty and wellness categories combine clinic trade checks with consumer qual when regulation blurs medical and retail claims.',
        'Industrial buyers for packaging, logistics, and MRO components use expert interviews and tender reviews when public price indices do not exist.',
      ],
    },
    {
      title: 'Brand tracking versus primary commercial cuts',
      paragraphs: [
        'Brand trackers measure awareness, consideration, and imagery over time; primary commercial cuts measure facings, distribution, and account-level share — BioNixus emphasises the latter when revenue plans depend on specific banners or routes.',
        'Clients may run both: a tracker for marketing and a primary audit for sales — proposals clarify which vendor owns which metric to avoid double counting.',
        'In MENA, tracker samples often skew urban; primary audits can deliberately overweight traditional trade cells that trackers miss.',
        'Connect brand tracking requests to Kantar or Nielsen alternative pages when the question is explicitly about syndicated tracker replacement versus complement.',
      ],
    },
    {
      title: 'Reporting and workshop handoff',
      paragraphs: [
        'Deliverables include PowerPoint and Excel with codebooks; optional workshops walk sales and marketing through implications by region.',
        'Heat maps and route-level gap lists translate findings into weekly sales priorities — not only slide decks for headquarters.',
        'Translations cover Arabic summaries for Gulf stakeholders when fieldwork ran in English instruments.',
        'After delivery, BioNixus can scope follow-up waves to measure implementation of recommendations — common after distribution gap studies.',
      ],
    },
    {
      title: 'Sampling and quality control in the field',
      paragraphs: [
        'Route samples mirror sales territory structure; mystery shoppers complete standardized scorecards with photo evidence where clients permit.',
        'Back-checks and supervisor rides reduce falsification risk in high-incentive markets.',
        'Data cleaning rules flag impossible visit sequences or duplicate timestamps before tables reach clients.',
        'Quality reports accompany delivery so procurement teams can audit vendor performance.',
      ],
    },
    {
      title: 'Integrating syndicated and primary data',
      paragraphs: [
        'When Nielsen, Kantar, or IQVIA feeds exist, primary studies should state explicitly which metrics they validate versus replace — avoiding double counting in revenue plans.',
        'BioNixus proposals list syndicated sources clients already license and the gap primary fieldwork closes.',
        'Dashboard appendices can juxtapose audit trend lines with primary audit waves for the same geography when timelines align.',
      ],
    },
    {
      title: 'Contact and next steps',
      paragraphs: [
        'Send category, markets, and decision deadline to admin@bionixus.com or use /contact — note “consumer/B2B video” for routing.',
        'Phone: US +1 888 465 5557, Europe +44 7727 666682, Middle East/Africa/Asia +20 120 688 2323.',
        'Expect a methodology sketch within one business day and a full proposal within 48 hours of a complete brief.',
        'Visit /consumer-market-research and /b2b-industries for sector entry points linked from this video.',
        'For healthcare-only buyers, the healthcare market research hub remains the correct entry — consumer and B2B pages share governance but not clinical stakeholder templates.',
        'Syndicated competitor pages (Kantar alternative, Nielsen alternative) explain when to keep incumbents and add BioNixus primary cuts — the same complement model as IQVIA for commercial categories.',
      ],
    },
    {
      title: 'Ethics, incentives, and respondent care',
      paragraphs: [
        'Consumer respondents receive incentives aligned to local norms and legal caps; B2B experts are compensated for time at rates appropriate to seniority.',
        'Consent forms explain data use, retention, and withdrawal rights — especially important for GDPR markets and for household research in the Gulf.',
        'Sensitive categories (health, finance) use stricter screening and optional double-blind designs when competitive sensitivity is high.',
        'Clients receive anonymisation rules before fieldwork so marketing teams know what verbatims can appear in external materials.',
      ],
    },
    {
      title: 'E-commerce and modern trade measurement',
      paragraphs: [
        'E-commerce audits track buy-box availability, promotional mechanics, and seller ratings when brands sell through marketplaces — especially in categories where online share grew faster than syndicated retail panels updated.',
        'Click-and-collect and quick-commerce pilots in Gulf cities need separate sampling from hypermarket panels because basket dynamics differ materially.',
        'Omnichannel studies link online signals to in-store audits so leadership sees one story for investment committees.',
        'Deliverables highlight which channels require capex (cold chain, dark stores) versus messaging fixes alone.',
        'Retail pharmacy chains in MENA often mix corporate HQ decisions with franchisee execution — studies document both levels when OTC launches depend on facings.',
      ],
    },
    {
      title: 'Contracting and procurement tips',
      paragraphs: [
        'Procurement teams should request a written recruitment plan, quality KPIs, and cancellation terms in the statement of work — BioNixus includes these by default to shorten legal review.',
        'Multi-wave trackers benefit from pre-agreed refresh pricing so annual budgets are predictable without re-tendering every wave.',
        'Data ownership and re-contact rules are stated explicitly for GDPR and client confidentiality tiers.',
        'Industries matrix pages list country-by-industry entry points when your brief spans multiple sectors — consumer, B2B, and healthcare silos stay separate by design to protect SEO and buyer clarity.',
        'When a study mixes healthcare and consumer respondents, BioNixus splits instruments and reporting so MLR and consumer legal reviews do not block each other.',
      ],
    },
    {
      title: 'Frequently asked scoping questions',
      paragraphs: [
        'How many stores or routes do we need? Sample plans mirror the commercial decision — national coverage for launch, targeted cities for troubleshooting distribution gaps.',
        'Can you run Arabic and English in one wave? Yes, with split analysis when cultural nuance matters; harmonised KPIs when leadership needs one dashboard.',
        'Do you work with our existing agencies? BioNixus can lead end-to-end or execute fieldwork modules under a lead strategist — state your preference in the brief.',
        'What if syndicated data contradicts primary findings? Deliverables explain methodology differences so committees reconcile numbers instead of debating vendor loyalty.',
        'Retail and route audits can start within two to three weeks of contract signature in many MENA markets when permits are not required for mystery shopping.',
        'For pharmaceutical OTC tied to pharmacy channels, pair this consumer video with the pharmacy mystery shopper service page and the healthcare hub when MLR review applies.',
        'Watch page URL: /videos/consumer-b2b-market-research — share this link in RFP documents when video plus written scope must match for procurement.',
        'Minimum engagement thresholds mirror healthcare practice: most multi-market consumer or B2B primary programmes begin near USD 20,000 once sample and routing complexity are understood.',
        'Contact admin@bionixus.com for a consumer or B2B scope document referencing this watch page.',
        'US phone +1 888 465 5557, Europe +44 7727 666682, and Middle East/Africa/Asia +20 120 688 2323 reach research leadership during business hours.',
      ],
    },
  ],
};
