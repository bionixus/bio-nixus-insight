import type { MatrixCountrySlug, MatrixIndustrySlug } from '@/data/industryMarketResearchMatrix';

export type IndustryExecutivePoint = { title: string; body: string };

type ExecutivePointsMatrix = Record<MatrixIndustrySlug, Partial<Record<MatrixCountrySlug, IndustryExecutivePoint[]>>>;

/** Bespoke executive decision points per industry × country (48 BOFU pages). */
const EXECUTIVE_POINTS: ExecutivePointsMatrix = {
  medtech: {
    'saudi-arabia': [
      {
        title: 'SFDA classification gates the revenue case',
        body:
          'MedTech launches in Saudi Arabia hinge on SFDA device pathways, local representative requirements, and whether NUPCO or cluster procurement governs the account. Research should map classification, tender calendars, and hospital committee evidence before scaling fieldwork.',
      },
      {
        title: 'NUPCO and cluster buying reset net price',
        body:
          'A single NUPCO award can move utilization across hundreds of MOH-linked facilities. Size the opportunity by account type—tender-governed versus private carve-out—and test clinician confidence on switching, not panel averages alone.',
      },
      {
        title: 'Fieldwork tied to procedure volume',
        body:
          'Prioritize cath-lab, ICU, surgical, and imaging accounts where procedure counts drive device pull-through. Pair procurement signals with user workflow interviews so adoption forecasts reflect real chair time and maintenance contracts.',
      },
    ],
    uae: [
      {
        title: 'Emirate-level access is not one formulary',
        body:
          'DHA, DOH, and MOHAP each shape facility licensing and product lists; mandatory insurance products apply different medical policies. Build emirate × payer cells before extrapolating “UAE adoption.”',
      },
      {
        title: 'Private premium wards defend originators',
        body:
          'International hospital groups and medical tourism corridors sustain higher innovator uptake than Essential Benefits Plan channels. Segment research by insurer tier and hospital brand, not a blended national average.',
      },
      {
        title: 'Procurement plus user workflow',
        body:
          'Winning UAE MedTech share requires both committee-ready economic narratives and cath-lab/nursing workflow proof. Mixed qual–quant modules should test objection libraries insurers actually cite in prior authorization.',
      },
    ],
    egypt: [
      {
        title: 'EDA registration and public tender rhythm',
        body:
          'Device entry runs through EDA with hospital tender cycles and distributor networks that differ from Gulf NUPCO models. Anchor research on registrable claims, tender lots, and which accounts can pay in hard currency.',
      },
      {
        title: 'Public versus private hospital mix',
        body:
          'Utilization splits between Ministry hospitals, university centres, and fast-growing private groups. Sample design must reflect where your SKU is realistically listed—not where syndicated audits assume volume sits.',
      },
      {
        title: 'Value evidence under budget pressure',
        body:
          'Clinicians and procurement committees weigh FX-sensitive budgets and local service capability. Test total cost of ownership, training burden, and spare-parts logistics before national roll-out assumptions.',
      },
    ],
  },
  healthcare: {
    'saudi-arabia': [
      {
        title: 'Health clusters change the buyer map',
        body:
          'Regional health clusters under the Health Sector Transformation Program shift accountability for protocols and budgets. Map cluster-level decision makers—not only central MOH policy—before scaling physician surveys.',
      },
      {
        title: 'Referral and diagnostic bottlenecks',
        body:
          'Patient pathways from primary care to specialist centres often delay treatment starts. Qualitative depth on referral friction and testing capacity explains why “approved” therapies under-penetrate.',
      },
      {
        title: 'Bilingual evidence for committee packs',
        body:
          'Arabic–English materials for medical affairs and access teams should mirror what hospital committees and NUPCO reviewers expect documented. Research outputs should be activation-ready, not academic summaries.',
      },
    ],
    uae: [
      {
        title: 'Mandatory insurance shapes utilization',
        body:
          'Thiqa, Essential Benefits Plan, and employer-sponsored products apply different benefit designs and prior-authorization rules. Payer interviews must precede large physician quant when access gates spend.',
      },
      {
        title: 'Medical tourism and brand tiers',
        body:
          'Premium international hospitals attract different patient flows than government facilities. Positioning research should separate medical-tourism positioning from population health programmes.',
      },
      {
        title: 'Digital front door adoption',
        body:
          'Telehealth and app-based booking alter how patients enter specialist pathways. Track digital triage behaviour where it changes time-to-treatment for chronic programmes.',
      },
    ],
    egypt: [
      {
        title: 'Universal health insurance rollout',
        body:
          'UHI expansion reshapes who pays for which services outside classic out-of-pocket models. Payer and provider research should stress-test coverage assumptions by governorate and facility type.',
      },
      {
        title: 'Dual public–private utilization',
        body:
          'The same therapy can behave differently in ministry hospitals versus private chains. Segment samples by channel before applying one national adoption curve.',
      },
      {
        title: 'Physician density and referral reality',
        body:
          'Cairo-centric specialist concentration versus delta and upper-Egypt access changes reachable prescriber panels. Feasibility should be scored upfront, not after contracting.',
      },
    ],
  },
  biotech: {
    'saudi-arabia': [
      {
        title: 'Rare disease and genomics programmes',
        body:
          'Saudi Genome and orphan pathways concentrate high-cost therapies at specialist centres. Size addressable patients with genetics-aware feasibility, not broad oncology panels alone.',
      },
      {
        title: 'SFDA biologic evidence expectations',
        body:
          'Registration and named-patient routes differ from small-molecule tenders. Map what committees require for switching and continuation before forecasting share.',
      },
      {
        title: 'NUPCO high-cost drug committees',
        body:
          'Budget impact and budget-holder sign-off often trump label breadth. Payer and hospital pharmacist depth should precede large KOL mapping exercises.',
      },
    ],
    uae: [
      {
        title: 'Specialist centre concentration',
        body:
          'Biotech utilization clusters in tertiary hubs and research-active hospitals. Account lists should overweight centres that actually initiate biologic therapy, not all licensed sites.',
      },
      {
        title: 'Prior authorization depth',
        body:
          'Insurer medical policies on biologics and advanced therapies vary by emirate and product class. Document step-therapy and safety monitoring requirements insurers enforce in practice.',
      },
      {
        title: 'Companion diagnostic readiness',
        body:
          'Testing logistics and turnaround times gate eligible patients. Fieldwork should capture lab capacity and who orders tests—not only physician intent.',
      },
    ],
    egypt: [
      {
        title: 'Local manufacturing versus import biologics',
        body:
          'Domestic production strength in small molecules does not automatically translate to biologic access. Clarify cold-chain, registry status, and payer willingness for imported advanced therapies.',
      },
      {
        title: 'EDA and pricing realism',
        body:
          'Value dossiers must survive EDA review and hospital economics under currency pressure. Research should test acceptable price bands and documentation burdens committees cite.',
      },
      {
        title: 'Specialist referral pools',
        body:
          'Rheumatology, oncology, and metabolic centres concentrate initiations. Panel design should follow referral maps, not national prescriber counts alone.',
      },
    ],
  },
  'consumer-health': {
    'saudi-arabia': [
      {
        title: 'Pharmacy chain and e-commerce growth',
        body:
          'OTC and consumer health volume moves through expanding retail pharmacy and online refill models. Audit-style pharmacy modules should capture SKU-level movement, not hospital tenders.',
      },
      {
        title: 'SFDA advertising and claims guardrails',
        body:
          'Promotional claims and influencer partnerships face regulatory scrutiny. Message testing must stay inside registrable indications and approved claims.',
      },
      {
        title: 'Seasonality and pilgrimage peaks',
        body:
          'Demand spikes around religious travel and seasonal respiratory patterns shift category dynamics. Track calendars before locking national media and promotion plans.',
      },
    ],
    uae: [
      {
        title: 'Retail pharmacy consolidation',
        body:
          'Large chains and mall-based pharmacies dominate OTC discovery. Shopper insight should map planogram, pharmacist recommendation, and self-selection paths separately.',
      },
      {
        title: 'Expatriate versus national segments',
        body:
          'Category preferences split across resident demographics and insurance-linked pharmacy benefits. Segmentation research should avoid a single “UAE consumer” cell.',
      },
      {
        title: 'Cross-border e-pharmacy leakage',
        body:
          'Online fulfilment from neighbouring markets can distort audited retail read. Qualitative work on purchase behaviour complements panel data where leakage is material.',
      },
    ],
    egypt: [
      {
        title: 'Price-sensitive mass market',
        body:
          'OTC decisions weigh affordability and pharmacist trust heavily. Conjoint and price-pack architecture tests should reflect cash-pay reality, not premium Gulf price bands.',
      },
      {
        title: 'Traditional trade and modern retail',
        body:
          'Availability differs between neighbourhood pharmacies and modern chains. Channel mapping precedes national launch sequencing.',
      },
      {
        title: 'Local brand strength',
        body:
          'Domestic manufacturers compete aggressively on vitamins and OTC staples. Competitive defence research should document pharmacist switching triggers and shelf economics.',
      },
    ],
  },
  fmcg: {
    'saudi-arabia': [
      {
        title: 'Modern trade and discounter expansion',
        body:
          'Grocery consolidation and promotion mechanics drive FMCG volume. Shopper research should align to key retail banners and Ramadan promotional windows.',
      },
      {
        title: 'Localization and Vision 2030 manufacturing',
        body:
          'Local production incentives influence listing decisions and margin expectations. Map supplier commitments retailers reference in listing negotiations.',
      },
      {
        title: 'Household income and premium tiers',
        body:
          'Category growth splits between value packs and premium imports. Segmentation should reflect regional income dispersion, not Riyadh-only panels.',
      },
    ],
    uae: [
      {
        title: 'Hypermarket and convenience dual paths',
        body:
          'Purchase missions differ between hypermarket stock-ups and convenience top-ups. Design separate tracker cells for each mission.',
      },
      {
        title: 'Expatriate taste profiles',
        body:
          'SKU success often follows expatriate community demand as much as national preferences. Ethnicity-aware segmentation prevents misread launch potential.',
      },
      {
        title: 'Promotional inflation in Dubai retail',
        body:
          'High promotional intensity can mask underlying brand equity. Decompose base versus promoted volume before declaring share winners.',
      },
    ],
    egypt: [
      {
        title: 'Inflation and pack-size strategy',
        body:
          'Shrinkflation, local currency moves, and trade-down behaviour reshape category value. Price-pack and elasticity work should lead concept screening.',
      },
      {
        title: 'Traditional versus modern trade split',
        body:
          'Distribution through traditional trade still moves meaningful volume for staples. Route-to-market research should include wholesaler and neighbourhood store dynamics.',
      },
      {
        title: 'Local champion competition',
        body:
          'Egyptian producers defend shelf space on price and familiarity. Benchmark switching barriers before assuming multinational share gains.',
      },
    ],
  },
  retail: {
    'saudi-arabia': [
      {
        title: 'Mall and grocery ecosystem shifts',
        body:
          'Retail format evolution changes dwell time and cross-category purchase. Shopper missions by format should inform customer experience investments.',
      },
      {
        title: 'Loyalty and payment digitization',
        body:
          'Wallet and BNPL adoption alter basket composition. Track payment mix where it changes category trial.',
      },
      {
        title: 'Omnichannel fulfilment expectations',
        body:
          'Click-and-collect and quick-commerce set new service baselines. Mystery shopping and journey studies validate operational promises versus competitor benchmarks.',
      },
    ],
    uae: [
      {
        title: 'Luxury versus value retail corridors',
        body:
          'Dubai mall luxury and discounter value propositions coexist in one market narrative. Research cells must stay format-specific.',
      },
      {
        title: 'Tourist versus resident baskets',
        body:
          'Tourism peaks distort category trends if not weighted out. Calendarise fieldwork and reporting by resident-only filters where needed.',
      },
      {
        title: 'Landlord and franchise economics',
        body:
          'Franchise operators face rent and labour costs that shape promo depth. B2B interviews with operators explain promo sustainability.',
      },
    ],
    egypt: [
      {
        title: 'Urban congestion and store productivity',
        body:
          'Cairo traffic and store throughput cap basket size and visit frequency. Observational research complements claimed behaviour in surveys.',
      },
      {
        title: 'Discounting and informal trade',
        body:
          'Grey-market and informal discount channels affect listed price integrity. Trade audits should flag parallel import risk.',
      },
      {
        title: 'E-commerce acceleration post-currency stress',
        body:
          'Online grocery trials grew under economic pressure. Test fulfilment reliability and trust barriers before capital-heavy digital rollout.',
      },
    ],
  },
  'financial-services': {
    'saudi-arabia': [
      {
        title: 'SAMA regulatory pacing',
        body:
          'Banking and insurance innovation follows Saudi Central Bank guidance on open banking, payments, and product disclosure. Compliance timelines should frame concept tests.',
      },
      {
        title: 'Youth segment and digital wallets',
        body:
          'Younger cohorts adopt app-first financial behaviours faster than branch-led incumbents expect. Segment digital natives separately in UX and messaging studies.',
      },
      {
        title: 'Islamic finance product fit',
        body:
          'Sharia-compliant structures influence product architecture and marketing claims. Screen concepts with Sharia-conscious positioning early.',
      },
    ],
    uae: [
      {
        title: 'Free-zone versus onshore banking',
        body:
          'Corporate and affluent segments split across DIFC and onshore institutions. B2B sampling must declare which licence regime applies.',
      },
      {
        title: 'Expatriate remittance behaviour',
        body:
          'Remittance apps and FX products compete on fees and speed for expatriate majorities. Ethnographic depth explains wallet choice beyond stated intent.',
      },
      {
        title: 'Insurance mandatory lines',
        body:
          'Health and motor insurance link to visa and vehicle rules. Map mandatory versus voluntary cross-sell paths before wealth product tests.',
      },
    ],
    egypt: [
      {
        title: 'CBE policy and FX liquidity',
        body:
          'Central Bank measures and currency availability shape lending and card usage. Macro-sensitive scenarios should accompany product concept tests.',
      },
      {
        title: 'Financial inclusion and agent networks',
        body:
          'Agent banking and mobile money reach populations branch networks miss. Rural and peri-urban cells are essential for national representativeness.',
      },
      {
        title: 'Trust after inflation shocks',
        body:
          'Savings and investment products face trust deficits. Message testing should stress safety, liquidity, and transparent fees—not yield alone.',
      },
    ],
  },
  telecom: {
    'saudi-arabia': [
      {
        title: '5G monetization beyond speed',
        body:
          'Operators seek enterprise and home broadband ARPU lifts, not speed claims alone. B2B and household studies should quantify willingness to pay for bundled services.',
      },
      {
        title: 'CST regulatory filings',
        body:
          'Communications, Space & Technology Commission rules shape pricing and quality claims. Concept tests must align to permissible marketing language.',
      },
      {
        title: 'Prepaid versus postpaid migration',
        body:
          'Youth prepaid bases convert slowly to postpaid contracts. Cohort trackers should separate acquisition from ARPU expansion goals.',
      },
    ],
    uae: [
      {
        title: 'Duopoly competitive cycles',
        body:
          'Promotional wars between major operators distort churn readouts. Model competitive scenarios with promo-adjusted churn, not headline NPS alone.',
      },
      {
        title: 'Expatriate plan portability',
        body:
          'Contract terms for expatriates differ from national plans. Segment by visa class and contract length.',
      },
      {
        title: 'Smart home and fibre bundles',
        body:
          'Fixed-line fibre bundles compete on entertainment partnerships. Test bundle appeal by household type, not generic tech enthusiasm.',
      },
    ],
    egypt: [
      {
        title: 'ARPU pressure and data affordability',
        body:
          'Price-sensitive users optimize data packs and Wi-Fi offload. Usage diaries and bill analysis explain real consumption caps.',
      },
      {
        title: 'Regulatory quality-of-service scrutiny',
        body:
          'National Telecom Regulatory Authority attention to QoS affects network investment narratives. Track perceived quality by governorate.',
      },
      {
        title: 'Mobile money adjacency',
        body:
          'Wallet features compete with banks and fintechs. Partnership research should map trust and interoperability expectations.',
      },
    ],
  },
  technology: {
    'saudi-arabia': [
      {
        title: 'Government cloud and sovereignty',
        body:
          'Public-sector procurement favours data residency and local partners. B2G research should map certification hurdles and incumbent integrators.',
      },
      {
        title: 'Enterprise digitization under Vision 2030',
        body:
          'Large employers modernize HR, finance, and customer stacks on accelerated timelines. Buyer committees mix IT, procurement, and business sponsors—interview all three.',
      },
      {
        title: 'Arabic UX and support expectations',
        body:
          'Product-market fit tests must include Arabic UI quality and local support SLAs, not English-only prototypes.',
      },
    ],
    uae: [
      {
        title: 'Free-zone SaaS GTM',
        body:
          'Vendors sell from DIFC into MENA with varied go-to-market partners. Map channel conflict and pricing localization by emirate.',
      },
      {
        title: 'Enterprise buyer sophistication',
        body:
          'Multinational HQs in Dubai demand global security standards plus local implementation partners. Security and procurement diligence are gating items in qual.',
      },
      {
        title: 'Startup ecosystem noise',
        body:
          'Crowded SaaS categories require sharp positioning research against regional challengers, not only global analogues.',
      },
    ],
    egypt: [
      {
        title: 'Talent cost advantage and delivery risk',
        body:
          'Egypt-based engineering hubs attract offshore build—but execution risk worries buyers. Case-study depth and reference selling research reduce perceived risk.',
      },
      {
        title: 'SME digitization gaps',
        body:
          'Small businesses adopt tools unevenly outside Cairo. Field segments should include delta SMEs where mobile-first workflows dominate.',
      },
      {
        title: 'Payment integration friction',
        body:
          'Local payment rails and cash preference shape checkout completion. UX studies should test payment flows on low-bandwidth devices.',
      },
    ],
  },
  energy: {
    'saudi-arabia': [
      {
        title: 'Aramco ecosystem and local content',
        body:
          'Supplier decisions weigh IKTVA local-content scores and long-term service contracts. B2B research with procurement and operations leaders is essential.',
      },
      {
        title: 'Renewables and hydrogen narratives',
        body:
          'New energy investments need credible demand and policy scenarios. Scenario workshops beat single-point forecasts for board decisions.',
      },
      {
        title: 'Industrial power users',
        body:
          'Downstream chemicals and mining loads drive equipment pull-through. Segment by industrial cluster, not national averages.',
      },
    ],
    uae: [
      {
        title: 'ADNOC and utility adjacency',
        body:
          'Energy services firms navigate ADNOC frameworks and emirate utility rules. Map approval paths before sizing addressable B2B spend.',
      },
      {
        title: 'Solar for commercial real estate',
        body:
          'Building owners evaluate ROI under net-metering rules that differ by emirate. Engineer-led interviews validate payback assumptions.',
      },
      {
        title: 'Regional trading hub role',
        body:
          'Dubai hosts trading and services HQ decisions affecting MENA roll-outs. Interview regional HQ roles, not only UAE operations.',
      },
    ],
    egypt: [
      {
        title: 'Fuel subsidy reform impacts',
        body:
          'Energy pricing reforms shift industrial and transport economics. Macro-sensitive demand models should accompany product tests.',
      },
      {
        title: 'Gas power and industrial zones',
        body:
          'Special economic zones concentrate heavy users. Cluster-based sampling improves forecast accuracy.',
      },
      {
        title: 'Renewables auction credibility',
        body:
          'Developers need bankable offtake and grid connection realism. Stakeholder interviews with utilities and financiers de-risk assumptions.',
      },
    ],
  },
  'real-estate': {
    'saudi-arabia': [
      {
        title: 'Giga-project demand cycles',
        body:
          'NEOM and Riyadh redevelopment programmes create lumpy demand for materials and services. Time-series context prevents over-extrapolating one-year spikes.',
      },
      {
        title: 'Mortgage access and affordability',
        body:
          'Sakani and mortgage penetration shape residential demand tiers. Household finance research should accompany developer concept tests.',
      },
      {
        title: 'Commercial office absorption',
        body:
          'Corporate relocation plans affect Grade A vacancy narratives. Interview corporate real estate leads, not only developers.',
      },
    ],
    uae: [
      {
        title: 'Off-plan sales regulation',
        body:
          'Escrow and developer reputation rules influence buyer trust. Message testing on developer credibility is as important as amenity lists.',
      },
      {
        title: 'Golden visa and investor demand',
        body:
          'Foreign investor cohorts behave differently from resident end-users. Segment research by buyer nationality and holding period.',
      },
      {
        title: 'Supply pipeline in Dubai',
        body:
          'Launch timing versus competing towers determines absorption risk. Competitive supply audits should precede pricing research.',
      },
    ],
    egypt: [
      {
        title: 'New capital and corridor development',
        body:
          'Administrative capital projects redistribute demand from legacy Cairo corridors. Geo-specific demand models beat city-wide averages.',
      },
      {
        title: 'Informal housing and affordability',
        body:
          'Large informal segments affect attainable housing policy. Policy-sensitive qual should include government and NGO stakeholders where relevant.',
      },
      {
        title: 'Construction input cost volatility',
        body:
          'Currency and import costs swing project viability. Developer interviews should stress-test margin scenarios.',
      },
    ],
  },
  automotive: {
    'saudi-arabia': [
      {
        title: 'ICE to EV transition pacing',
        body:
          'Charging infrastructure and total cost of ownership narratives compete with SUV preference. Drive clinics and fleet buyer interviews split retail versus fleet.',
      },
      {
        title: 'Financing and ownership models',
        body:
          'Lease and Islamic finance structures change monthly payment psychology. Price sensitivity research should mirror actual contract terms.',
      },
      {
        title: 'Parts and aftersales loyalty',
        body:
          'Post-warranty service retention drives dealer profitability. Mystery shopping on service bays complements brand tracking.',
      },
    ],
    uae: [
      {
        title: 'Premium SUV dominance',
        body:
          'Luxury positioning and trim walk matter more than entry segments. Concept tests should reflect realistic trim ladders.',
      },
      {
        title: 'Fleet and ride-hail adjacency',
        body:
          'Corporate fleets and platform drivers create secondary demand pools. B2B fleet research should be separate from retail clinics.',
      },
      {
        title: 'Used import corridor',
        body:
          'Grey imports and certified pre-owned channels affect new car pricing power. Track parallel market pricing in feasibility.',
      },
    ],
    egypt: [
      {
        title: 'Assembly localisation economics',
        body:
          'Local assembly policies influence model availability and price bands. Map which models are actually stocked and financed.',
      },
      {
        title: 'Used car liquidity',
        body:
          'Resale value fears dominate new car consideration. Residual value research should lead message development.',
      },
      {
        title: 'Financing access constraints',
        body:
          'Credit availability gates demand more than interest in features. Partner with finance desk interviews where possible.',
      },
    ],
  },
  hospitality: {
    'saudi-arabia': [
      {
        title: 'Vision 2030 tourism targets',
        body:
          'Leisure visa expansion and giga-events create new hospitality segments. Demand research should calendarise event-driven peaks separately from business travel.',
      },
      {
        title: 'Religious travel seasonality',
        body:
          'Hajj and Umrah flows dominate certain corridors. Capacity and pricing models must respect religious calendars.',
      },
      {
        title: 'Labour and service quality',
        body:
          'Staffing costs affect service consistency scores. Employee and guest dual-track research explains satisfaction drivers.',
      },
    ],
    uae: [
      {
        title: 'Luxury versus mid-scale positioning',
        body:
          'Dubai luxury ADR dynamics differ from mid-scale emirate hotels. Competitive sets must be star-rated appropriately.',
      },
      {
        title: 'Event and MICE recovery',
        body:
          'Convention demand returns unevenly by sector. Interview corporate travel managers, not only leisure guests.',
      },
      {
        title: 'OTA commission pressure',
        body:
          'Direct booking campaigns need proof on willingness to bypass aggregators. Booking journey studies quantify leakage.',
      },
    ],
    egypt: [
      {
        title: 'Cairo leisure versus Red Sea resorts',
        body:
          'Red Sea resort economics differ from urban business hotels. Do not blend guest profiles across geographies.',
      },
      {
        title: 'Price value under FX pressure',
        body:
          'International guest spend sensitivity affects F&B and spa uptake. Wallet share studies should use realistic price points.',
      },
      {
        title: 'Domestic tourism growth',
        body:
          'Local weekend travel patterns increasingly support occupancy. Track Egyptian guest segments separately from inbound charters.',
      },
    ],
  },
  'public-sector': {
    'saudi-arabia': [
      {
        title: 'Procurement under ETIMAD',
        body:
          'Government tenders require evidence packs aligned to Saudi procurement law and local content. Research should interview buyers and vendors who won recent awards.',
      },
      {
        title: 'Service delivery KPIs',
        body:
          'Citizen experience programmes need measurable baselines before redesign contracts. Quant trackers on satisfaction and completion times anchor business cases.',
      },
      {
        title: 'Public–private partnership risk',
        body:
          'PPP structures shift risk allocation. Stakeholder workshops clarify acceptable risk sharing before financial models lock.',
      },
    ],
    uae: [
      {
        title: 'Federal versus emirate mandates',
        body:
          'Policy priorities differ between Abu Dhabi, Dubai, and northern emirates. Map which authority owns your programme before sampling citizens.',
      },
      {
        title: 'Smart city initiatives',
        body:
          'Digital government services compete on usability and trust. UX benchmarking against best-in-class apps sets realistic targets.',
      },
      {
        title: 'Procurement transparency expectations',
        body:
          'International vendors face scrutiny on pricing fairness. Price benchmarking studies support defensible award files.',
      },
    ],
    egypt: [
      {
        title: 'Administrative reform programmes',
        body:
          'Citizen service centres and digitization reduce informal facilitation. Journey mapping should include rural access constraints.',
      },
      {
        title: 'Donor and multilateral projects',
        body:
          'Development programmes require evidence for multilateral reviewers. Bilingual reporting and M&E frameworks should be designed in.',
      },
      {
        title: 'Fiscal constraint realism',
        body:
          'Budget cycles affect rollout speed. Scenario planning with finance ministry stakeholders prevents over-promising timelines.',
      },
    ],
  },
  education: {
    'saudi-arabia': [
      {
        title: 'University privatization and partnerships',
        body:
          'Foreign branch campuses and skills programmes reshape employer expectations. Employer–university linkage research validates curriculum investments.',
      },
      {
        title: 'EdTech procurement in schools',
        body:
          'Ministry-led digitization creates bulk buys with training obligations. Pilot studies should measure teacher adoption, not licence counts.',
      },
      {
        title: 'Female workforce participation goals',
        body:
          'Segmentation by gender and region matters for programme uptake under social dynamics that vary by city.',
      },
    ],
    uae: [
      {
        title: 'K–12 premium school market',
        body:
          'Tuition-sensitive expatriate parents evaluate curriculum and university placement track records. Parent choice modelling beats generic brand trackers.',
      },
      {
        title: 'Higher education hub competition',
        body:
          'Universities compete for international students on employability outcomes. Alumni outcome research supports credible prospectuses.',
      },
      {
        title: 'Corporate upskilling demand',
        body:
          'Employers fund certifications tied to visa and role requirements. B2B HR interviews quantify budget and topic priority.',
      },
    ],
    egypt: [
      {
        title: 'Public university capacity strain',
        body:
          'Private universities and vocational routes absorb overflow demand. Student decision journeys should include affordability and job placement fears.',
      },
      {
        title: 'EdTech on low-bandwidth devices',
        body:
          'Mobile-first learning requires offline-friendly design. UX tests on realistic devices and connectivity.',
      },
      {
        title: 'Teacher professional development',
        body:
          'In-service training adoption gates classroom impact. Observe classrooms where possible, not only principal interviews.',
      },
    ],
  },
  media: {
    'saudi-arabia': [
      {
        title: 'Regulated content and advertising',
        body:
          'Media Commission rules shape what platforms can monetize. Concept tests should screen claims and creative against compliance guidance.',
      },
      {
        title: 'Streaming versus linear TV',
        body:
          'Youth cohorts shift time to global platforms with local production gaps. Platform mix modelling guides content investment.',
      },
      {
        title: 'Sports rights inflation',
        body:
          'Premium sports rights drive subscription willingness. Van Westendorp and choice modelling on realistic bundle prices.',
      },
    ],
    uae: [
      {
        title: 'Multicultural audience fragmentation',
        body:
          'Content relevance differs sharply by nationality and language. Audience cells must be language- and culture-specific.',
      },
      {
        title: 'Advertising market cyclicality',
        body:
          'Luxury and real estate ad spend swings distort year-on-year comparisons. Normalize for category spend cycles.',
      },
      {
        title: 'Creator economy monetization',
        body:
          'Influencer ROI research should disclose sponsored-content rules under local advertising standards.',
      },
    ],
    egypt: [
      {
        title: 'Mobile-first media consumption',
        body:
          'Short-form and social platforms dominate time spent. Measure attention on mobile, not desktop-first surveys.',
      },
      {
        title: 'Local production economics',
        body:
          'Ad-supported models struggle under economic pressure. Test willingness to pay for ad-free tiers realistically.',
      },
      {
        title: 'News trust and misinformation',
        body:
          'Brand safety research should include trust scores and source credibility where news adjacency matters.',
      },
    ],
  },
};

function buildFallbackExecutivePoints(
  industrySlug: MatrixIndustrySlug,
  countrySlug: MatrixCountrySlug,
): IndustryExecutivePoint[] {
  const industryLabels: Record<MatrixIndustrySlug, string> = {
    medtech: 'MedTech',
    healthcare: 'Healthcare',
    biotech: 'Biotech',
    'consumer-health': 'Consumer health',
    fmcg: 'FMCG',
    retail: 'Retail',
    'financial-services': 'Financial services',
    telecom: 'Telecom',
    technology: 'Technology',
    energy: 'Energy',
    'real-estate': 'Real estate',
    automotive: 'Automotive',
    hospitality: 'Hospitality',
    'public-sector': 'Public sector',
    education: 'Education',
    media: 'Media',
  };
  const countryLabels: Partial<Record<MatrixCountrySlug, string>> = {
    kuwait: 'Kuwait',
    qatar: 'Qatar',
    oman: 'Oman',
    uk: 'United Kingdom',
    usa: 'United States',
    brazil: 'Brazil',
    germany: 'Germany',
  };
  const name = industryLabels[industrySlug] ?? industrySlug;
  const country = countryLabels[countrySlug] ?? countrySlug;
  return [
    {
      title: `Map ${country} market structure before fieldwork`,
      body: `${name} dynamics in ${country} vary by sector, region, and buyer segment. Anchor your research design on real decision-maker hierarchies and distribution channels specific to the local market before scaling fieldwork.`,
    },
    {
      title: 'Primary evidence, not imported assumptions',
      body: `Applying averages from neighbouring markets risks costly strategy gaps. ${country} buyers, regulators, and channels have distinct behaviour patterns — commission primary research here rather than relying on desk extrapolation.`,
    },
    {
      title: 'Decision-linked output over slide volume',
      body: `BioNixus structures ${name.toLowerCase()} programs around three to five decisions your team must act on — launch sequencing, pricing validation, channel prioritisation — so fieldwork translates directly into near-term actions.`,
    },
  ];
}

export function getIndustryBofuExecutivePoints(
  industrySlug: MatrixIndustrySlug,
  countrySlug: MatrixCountrySlug,
): IndustryExecutivePoint[] {
  const points = EXECUTIVE_POINTS[industrySlug]?.[countrySlug];
  if (points && points.length === 3) return points;
  return buildFallbackExecutivePoints(industrySlug, countrySlug);
}
