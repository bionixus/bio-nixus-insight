export interface CountryMarketContext {
  slug: string;
  flag: string;
  marketOverviewP1: string;  // ~80-100 words, macro market overview
  marketOverviewP2: string;  // ~80-100 words, market research landscape in this country
  keyStats: Array<{ label: string; value: string; note?: string }>;  // exactly 3 stats
  topSectors: string[];  // exactly 4 sector names
  regulatoryNote: string;  // ~60-80 words on regulatory environment relevant to market research
  fieldworkNote: string;  // ~60-80 words on fieldwork execution specifics
  marketBarriers: Array<{ barrier: string; mitigation: string }>;  // exactly 3 barriers
}

export const COUNTRY_MARKET_CONTEXT_DATA: Record<string, CountryMarketContext> = {
  kuwait: {
    slug: 'kuwait',
    flag: '🇰🇼',
    marketOverviewP1:
      'Kuwait operates a hydrocarbon-dominated economy with GDP of approximately $148 billion (2024 IMF estimate), relying on oil revenues for over 90% of government income. The population of roughly 4.8 million — nearly 70% expatriate — creates a bifurcated consumer market with notably high per-capita spending. Vision 2035 (New Kuwait) is steering investment toward non-oil sectors including logistics, financial services, and healthcare. Public procurement channels dominate healthcare and pharmaceutical purchasing, with the Ministry of Health and Central Agency for Public Tenders controlling most institutional spend.',
    marketOverviewP2:
      'The Kuwait market research landscape is relatively concentrated, dominated by a small number of local and regional agencies supplemented by GCC-wide firms. Pharma and healthcare research is the most active vertical, driven by Ministry of Health tenders and private hospital groups such as Dar Al Shifa and Al-Salam. Physician access for primary research is constrained by heavy public-sector scheduling and strict ethics committee gatekeeping at Kuwait University hospitals. Quantitative panels are limited; most robust data collection relies on in-person or telephone-assisted methodologies with bilingual Arabic-English instruments.',
    keyStats: [
      { label: 'GDP (2024)', value: '$148B', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '4.8M', note: '~70% expatriate workforce' },
      { label: 'Healthcare spend per capita', value: '~$1,450', note: 'WHO Global Health Expenditure 2022' },
    ],
    topSectors: ['Pharmaceuticals & Healthcare', 'Financial Services', 'Retail & FMCG', 'Construction & Real Estate'],
    regulatoryNote:
      'The Kuwait Food and Drug Authority (KFDA), established under Law No. 48/2016, oversees pharmaceutical registration, clinical trial authorisation, and promotional material approval. Market research involving patient data or investigational products requires KFDA notification and Kuwait University Health Sciences Centre ethics clearance. Data collection within Ministry of Health facilities demands institutional access letters and can add four to eight weeks to project timelines.',
    fieldworkNote:
      'Fieldwork in Kuwait benefits from high smartphone penetration (96%+) supporting mobile-first survey deployment, but low panel depth means recruitment for specialist physician or high-net-worth consumer segments often requires direct outreach via medical associations or private clinic networks. In-person depth interviews remain the gold standard for HCP research. Ramadan and national holiday periods (February, June) significantly compress field windows.',
    marketBarriers: [
      {
        barrier: 'Respondent recruitment in senior public-sector HCP and C-suite segments',
        mitigation: 'Engage Kuwait Medical Association and specialty society networks; use peer referral (snowball) combined with incentive structures calibrated to public-sector norms.',
      },
      {
        barrier: 'Ethics committee turnaround at Ministry of Health and KIMS hospital groups',
        mitigation: 'Build a four-to-six-week IRB runway into project plans; pre-screen protocol elements against KFDA guidance to minimise revision cycles.',
      },
      {
        barrier: 'Limited syndicated data and weak local panel infrastructure',
        mitigation: 'Layer primary qualitative depth (IDIs, advisory boards) over quantitative top-line surveys; supplement with secondary IQVIA/MIDAS and IMS data for triangulation.',
      },
    ],
  },

  qatar: {
    slug: 'qatar',
    flag: '🇶🇦',
    marketOverviewP1:
      'Qatar recorded GDP of approximately $225 billion in 2024, underwritten by the world\'s third-largest natural gas reserves and the Qatar Investment Authority\'s sovereign wealth portfolio. The population of roughly 2.9 million is around 88% expatriate. Post-FIFA World Cup 2022 legacy infrastructure — stadiums, metro, hospitality — anchors an expanding tourism and entertainment sector. Qatar National Vision 2030 targets economic diversification into finance, logistics, healthcare, and education. Hamad Medical Corporation (HMC) and Sidra Medicine are the twin pillars of the national healthcare system and the primary institutional research access points.',
    marketOverviewP2:
      'Qatar\'s market research industry is smaller in absolute scale than the UAE but growing rapidly on the back of healthcare, government, and real-estate mandates. The Qatar Chamber of Commerce supports local business intelligence activity, while international agencies including Ipsos, Nielsen, and YouGov have Doha offices. Healthcare and pharma primary research centres on HMC clinician panels, Qatar Biobank participant cohorts, and specialist networks at Sidra. High-income, tech-savvy respondent pools support strong online quantitative reach, but low base populations make nationally representative sampling statistically challenging for niche segments.',
    keyStats: [
      { label: 'GDP (2024)', value: '$225B', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '2.9M', note: '~88% expatriate; Qatari nationals ~400K' },
      { label: 'Internet penetration', value: '99%', note: 'ITU 2023; supports digital-first fieldwork' },
    ],
    topSectors: ['Energy & Petrochemicals', 'Hospitality & Tourism', 'Financial Services', 'Pharmaceuticals & Healthcare'],
    regulatoryNote:
      'Pharmaceutical product registration and promotional compliance fall under the Qatar Central Drug & Devices Department (QCDD) within the Ministry of Public Health. Clinical and market research involving human subjects requires approval from the Hamad Medical Corporation Institutional Review Board or Sidra Medicine IRB. Data privacy is governed by Law No. 13/2016 on Personal Data Protection, enforced by the Ministry of Transport and Communications; cross-border data transfer requires ministerial consent.',
    fieldworkNote:
      'Online panel depth in Qatar is the highest per-capita in the GCC owing to near-universal connectivity, yet panel provider rosters are shallow for Qatari nationals specifically. HCP research typically runs through HMC-affiliated specialist directories; recruitment lead times average three to four weeks for consultants. Arabic-English bilingual instruments are standard; Urdu and Malayalam modules extend reach to large South Asian expatriate segments where consumer or patient research requires it.',
    marketBarriers: [
      {
        barrier: 'Very small Qatari national respondent base for nationally representative consumer studies',
        mitigation: 'Report Qatari and expatriate sub-samples separately; use stratified quota designs and extend field windows with incentive boosts approved under local IRB guidance.',
      },
      {
        barrier: 'Single-system HMC gatekeeping for specialist physician access',
        mitigation: 'Obtain HMC Research Office endorsement early; engage the MOPH Continuing Medical Education office to leverage professional development framing for advisory-board participation.',
      },
      {
        barrier: 'Personal Data Protection Law restrictions on cross-border transfer of research data',
        mitigation: 'Process and store primary data on Qatar-resident servers or QFC-licensed cloud infrastructure; anonymise at source before any international transmission.',
      },
    ],
  },

  oman: {
    slug: 'oman',
    flag: '🇴🇲',
    marketOverviewP1:
      'Oman\'s GDP reached approximately $105 billion in 2024, supported by oil, gas, and an accelerating diversification programme under Vision 2040. With a population of around 4.7 million — roughly 45% expatriate — Oman pursues differentiated positioning in logistics (Duqm SEZ, Sohar Port), mining, and tourism. Healthcare spend has expanded materially since 2020 as the Ministry of Health (MOH) rolled out the National Health Strategy. Private healthcare penetration is lower than the UAE or Kuwait, meaning MOH and Diwan of Royal Court hospital networks dominate institutional decision-making.',
    marketOverviewP2:
      'Market research in Oman is a nascent but growing industry, with activity concentrated in Muscat and driven primarily by government, retail, and healthcare clients. The Gulf Organization for Industrial Consulting (GOIC) and the Oman Chamber of Commerce provide secondary data resources. Primary research capabilities are mostly delivered by GCC regional agencies, as home-grown firms are limited. Pharma research requires engagement with the MOH Directorate General for Pharmaceutical Affairs and Drug Control. Digital survey penetration is rising on the back of high smartphone ownership, but populations in Al Dakhliyah and Dhofar remain difficult to reach quantitatively.',
    keyStats: [
      { label: 'GDP (2024)', value: '$105B', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '4.7M', note: '~45% expatriate; NCSI 2024' },
      { label: 'Health expenditure (% GDP)', value: '~4.2%', note: 'WHO Global Health Expenditure 2022' },
    ],
    topSectors: ['Oil & Gas', 'Logistics & Ports', 'Tourism & Hospitality', 'Pharmaceuticals & Healthcare'],
    regulatoryNote:
      'Pharmaceutical market research in Oman falls under the Ministry of Health\'s Directorate General of Pharmaceutical Affairs and Drug Control. Studies involving patient populations require MOH ethical approval; industry-sponsored research further requires a No Objection Certificate (NOC) from the MOH Research and Studies Department. Oman does not yet have a standalone data protection law equivalent to GDPR, though the Electronic Transactions Law (2008) covers digital data handling and a comprehensive framework is expected under Vision 2040 reforms.',
    fieldworkNote:
      'Fieldwork reach is concentrated in Muscat (Greater Muscat holds over 40% of population) with secondary urban centres in Sohar, Salalah, and Nizwa. HCP depth interviews are typically conducted in Arabic or English depending on specialty and practice setting; South Asian physicians in the private sector often prefer English. Online quantitative surveys achieve acceptable completion in urban cohorts; paper-assisted fieldwork remains necessary for government hospital wards where device use is restricted.',
    marketBarriers: [
      {
        barrier: 'Geographic dispersion limiting representative rural sample coverage',
        mitigation: 'Augment urban-centric online panels with targeted CATI for interior and southern governorates; weight samples to NCSI population distributions.',
      },
      {
        barrier: 'MOH NOC process adding timeline risk for patient or clinical research',
        mitigation: 'Initiate ethics and NOC applications six to eight weeks ahead of fieldwork start; use observational or retrospective chart-review designs where feasible to reduce approval complexity.',
      },
      {
        barrier: 'Shallow commercial panel infrastructure and limited syndicated pharma data',
        mitigation: 'Partner with GCC-accredited CROs for HCP recruitment; triangulate with IQVIA Oman MIDAS data and MOH annual health report statistics for market sizing.',
      },
    ],
  },

  uk: {
    slug: 'uk',
    flag: '🇬🇧',
    marketOverviewP1:
      'The United Kingdom is the world\'s sixth-largest economy with GDP of approximately $3.1 trillion in 2024 (IMF). A population of 67 million underpins one of Europe\'s most sophisticated consumer and healthcare markets. Post-Brexit trade recalibration has reshaped regulatory divergence from the EU, while the NHS — the world\'s largest single-payer healthcare system — remains the dominant institutional client for pharmaceutical access and reimbursement. Financial services, advanced manufacturing, life sciences, and creative industries are the principal economic pillars. Life sciences R&D and clinical-trial activity is concentrated around the Oxford–Cambridge–London arc.',
    marketOverviewP2:
      'The UK is the world\'s second-largest market research market by revenue (after the USA), hosting the global or European headquarters of IQVIA, Kantar, Ipsos MORI, Savanta, and a dense ecosystem of specialist healthcare and pharma agencies. The Market Research Society (MRS) sets professional standards with broad industry adoption. NHS-facing research is regulated through the Health Research Authority (HRA) and NHS R&D approval pathways. Conjoint analysis, discrete choice experiments, and real-world evidence studies for NICE submissions are high-demand methodologies, driven by NICE\'s HTA framework for technology appraisals.',
    keyStats: [
      { label: 'GDP (2024)', value: '$3.1T', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '67M', note: 'ONS mid-year estimate 2024' },
      { label: 'MR industry revenue', value: '~£5B', note: 'MRS/ESOMAR industry report 2023' },
    ],
    topSectors: ['Pharmaceuticals & Life Sciences', 'Financial Services', 'Retail & FMCG', 'Technology & Digital'],
    regulatoryNote:
      'Market research involving medicinal products or devices is subject to MHRA oversight; studies that could influence clinical practice or patient treatment require Health Research Authority (HRA) approval and NHS R&D sign-off. NICE\'s evidence standards for HTA submissions set a de facto quality bar for commercial research. UK GDPR (retained post-Brexit) is enforced by the ICO; legitimate interest assessments are standard practice for HCP survey programmes.',
    fieldworkNote:
      'The UK benefits from large, well-profiled online panels (Kantar, Dynata, Toluna) and mature CATI infrastructure. NHS HCP recruitment is complicated by GP and consultant time pressures and ethics overhead for any research touching patient data; commercial physician panels such as Doctors.net.uk and M3 Global Research are the primary access route. Focus groups and IDIs are readily conducted in London, Manchester, and Birmingham; rural and socioeconomically deprived cohorts require targeted incentives and community partnerships.',
    marketBarriers: [
      {
        barrier: 'NHS data access governance and HRA approval timelines for patient-linked research',
        mitigation: 'Engage the HRA pre-submission service early; use NHS DigiTrials or CPRD (Clinical Practice Research Datalink) for real-world evidence; design around primary rather than routinely collected data where possible to reduce approval scope.',
      },
      {
        barrier: 'Post-Brexit regulatory divergence creating dual-submission complexity (MHRA and EMA) for European launch programmes',
        mitigation: 'Commission UK-specific HCP and payer research in parallel with EU studies; map NICE versus EMA/national HTA submission timelines early and align evidence-generation plans accordingly.',
      },
      {
        barrier: 'Panel quality degradation and professional respondent inflation in large online quantitative studies',
        mitigation: 'Apply MRS/ESOMAR quality standards: attention checks, speeder exclusions, open-text validation, and multi-source panel blending; supplement with probability-based sampling for high-stakes policy or access studies.',
      },
    ],
  },

  usa: {
    slug: 'usa',
    flag: '🇺🇸',
    marketOverviewP1:
      'The United States is the world\'s largest economy at approximately $27 trillion GDP (2024 BEA), with a population of 335 million across a federally fragmented healthcare and regulatory system. Healthcare accounts for roughly 17% of GDP — the highest share globally — creating the world\'s largest addressable market for pharmaceutical, medical device, and health services research. The biopharmaceutical sector is headquartered heavily in the Boston/Cambridge, San Francisco Bay Area, and New Jersey corridors. Commercial payer dynamics (UnitedHealth, CVS/Aetna, Cigna), PBM formulary management, and IDN contracting drive access and pricing outcomes independently of federal agencies.',
    marketOverviewP2:
      'The USA hosts the world\'s largest market research industry, estimated at over $50 billion annually, encompassing full-service agencies (Ipsos, Kantar, NielsenIQ), specialist pharma firms (IQVIA, Decision Resources, Veeva Crossix), and a dense layer of boutique qual, CRO, and real-world evidence providers. Digital survey panels are the most mature globally; B2B physician panels (M3, Medscape, Sermo) offer specialist access at scale. Oncology, rare disease, and biologics research demand premium HCP panels and patient advocacy partnerships. IRB oversight is required for any research framed as contributing to generalizable knowledge.',
    keyStats: [
      { label: 'GDP (2024)', value: '$27T', note: 'BEA advance estimate 2024' },
      { label: 'Population', value: '335M', note: 'U.S. Census Bureau 2024' },
      { label: 'MR industry revenue', value: '>$50B', note: 'ESOMAR Global Market Research Report 2023' },
    ],
    topSectors: ['Pharmaceuticals & Biotech', 'Technology & Digital', 'Financial Services', 'Retail & FMCG'],
    regulatoryNote:
      'The FDA governs drug and device marketing claims; studies designed to support product labelling, REMS programmes, or promotional review must comply with FDA guidance on human subject research (21 CFR Parts 50, 56). IRB review is triggered whenever research could generate generalizable knowledge or is federally funded. HIPAA governs any research involving identifiable patient health information; authorisation or waiver from a covered entity\'s IRB is required. State-level privacy laws (CCPA in California) layer additional consent requirements.',
    fieldworkNote:
      'The USA has the world\'s deepest online panel infrastructure, enabling rapid quantitative turnarounds (72-hour feasibility on most oncology physician segments). Regional market variation is pronounced: prescribing behaviour, payer mix, and hospital affiliation differ substantially between Northeast, South, Midwest, and West Coast. Virtual IDIs and focus groups became standard post-2020 and are now the default for national physician studies. Patient recruitment for rare diseases typically routes through advocacy organisations and IRB-approved registry partnerships.',
    marketBarriers: [
      {
        barrier: 'Fragmented payer and IDN landscape making nationally representative access and formulary research complex',
        mitigation: 'Stratify samples by payer type (commercial, Medicare, Medicaid, VA), geography (census region), and practice setting (academic, community, integrated); use claim-linked panel data (Symphony Health, IQVIA LAAD) to validate prescription behaviour against survey self-report.',
      },
      {
        barrier: 'IRB overhead and HIPAA compliance requirements for patient-linked or real-world evidence studies',
        mitigation: 'Pre-select IRB-certified CRO partners with established templates for pharmaceutical-sponsored research; use de-identified claims datasets (Optum, MarketScan) for outcomes research to bypass PHI authorisation requirements.',
      },
      {
        barrier: 'Physician survey fatigue and professional respondent over-representation in commodity online panels',
        mitigation: 'Use verified, specialty-credentialed panels (AMA Masterfile-linked, M3 Global, Sermo) with NPI matching; cap physician panel re-survey intervals at 60–90 days; blend with CATI for hard-to-reach sub-specialties.',
      },
    ],
  },

  brazil: {
    slug: 'brazil',
    flag: '🇧🇷',
    marketOverviewP1:
      'Brazil is Latin America\'s largest economy with GDP of approximately $2.1 trillion in 2024 (IMF), anchored by agriculture, energy, manufacturing, and an expanding digital services sector. A population of 215 million — one of the world\'s ten largest — is skewed young (median age ~34) and increasingly urban, with São Paulo and Rio de Janeiro accounting for a disproportionate share of consumer spending and healthcare utilisation. The public Sistema Único de Saúde (SUS) covers the majority of the population; the private supplementary health sector regulated by Agência Nacional de Saúde Suplementar (ANS) drives premium pharma and device uptake.',
    marketOverviewP2:
      'Brazil is the largest market research market in Latin America and among the top five globally by revenue, with a mature agency ecosystem including local leaders (Ibope, Instituto DataFolha) and international players (Ipsos Brasil, Kantar IBOPE). Mobile-first fieldwork is the dominant methodology: smartphone penetration exceeds 85% nationally and WhatsApp-based survey distribution achieves reach into lower-income cohorts unreachable by traditional online panels. Healthcare research is shaped by ANVISA\'s strict promotional code and CONAR self-regulation, while patient and HCP research must navigate CONEP/CEP ethics frameworks under Resolution CNS 510/2016.',
    keyStats: [
      { label: 'GDP (2024)', value: '$2.1T', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '215M', note: 'IBGE 2024 estimate' },
      { label: 'Smartphone penetration', value: '>85%', note: 'FGV Digital Census 2023; mobile-first fieldwork standard' },
    ],
    topSectors: ['Pharmaceuticals & Healthcare', 'Financial Services & Fintech', 'FMCG & Retail', 'Agribusiness & Energy'],
    regulatoryNote:
      'ANVISA (Agência Nacional de Vigilância Sanitária) regulates pharmaceutical registration, clinical trials (RDC 204/2017), and promotional materials. Market research involving patients or their data requires ethics review by a CEP (Comitê de Ética em Pesquisa) affiliated with CONEP under Resolution CNS 510/2016. Brazil\'s LGPD (Lei Geral de Proteção de Dados, Law 13.709/2018) is enforced by the ANPD (Autoridade Nacional de Proteção de Dados) and mandates explicit consent for sensitive health data processing.',
    fieldworkNote:
      'São Paulo and Rio de Janeiro account for the bulk of accessible HCP and consumer research panels, but regional heterogeneity (Northeast, Centro-Oeste, South) is commercially relevant and underweighted in national studies. WhatsApp and mobile CAWI are the dominant survey delivery channels; traditional CATI remains viable for older demographic segments. Portuguese-language instruments are mandatory; regional vocabulary and health literacy variation require local pretesting. HCP recruitment benefits from Conselho Federal de Medicina (CFM) registry validation.',
    marketBarriers: [
      {
        barrier: 'Regional socioeconomic and infrastructure disparity skewing national samples toward Southeast urban populations',
        mitigation: 'Apply post-stratification weighting to IBGE census distributions by region and income quintile; use WhatsApp-assisted CATI for Northeast and Norte regions where data connectivity is lower.',
      },
      {
        barrier: 'LGPD consent and CONEP ethics clearance adding complexity and timeline to patient health data studies',
        mitigation: 'Engage CEP-registered academic hospital partners for ethics sponsorship; anonymise primary research data at point of collection and maintain LGPD-compliant data processing agreements with all sub-processors.',
      },
      {
        barrier: 'ANVISA promotional code restricting HCP engagement formats and incentive structures for pharma-sponsored research',
        mitigation: 'Frame research as non-promotional scientific inquiry in study materials; align honoraria with INTERFARMA and CFM guidance; obtain medical affairs and legal sign-off on recruitment scripts before fieldwork launch.',
      },
    ],
  },

  germany: {
    slug: 'germany',
    flag: '🇩🇪',
    marketOverviewP1:
      'Germany is Europe\'s largest economy with GDP of approximately $4.1 trillion in 2024 (IMF/Destatis), driven by automotive, engineering, chemicals, and an expanding digital technology sector. A population of 84 million with one of the world\'s highest healthcare expenditures per capita makes Germany the most valuable single pharmaceutical market in Europe. The statutory health insurance (GKV) system covers approximately 90% of the population through 95+ Krankenkassen; the Federal Joint Committee (G-BA) controls benefit package decisions and post-AMNOG reimbursement negotiations through IQWiG (Institut für Qualität und Wirtschaftlichkeit im Gesundheitswesen).',
    marketOverviewP2:
      'Germany is Europe\'s largest market research market and globally third or fourth by revenue, hosting the European operations of GfK (Nuremberg), Kantar Germany, Ipsos Germany, and a mature ecosystem of healthcare-specialist agencies. The ADM (Arbeitskreis Deutscher Markt- und Sozialforschungsinstitute) sets professional standards. Pharma and healthcare market research is high-volume due to AMNOG early benefit assessment requirements, driving near-continuous HCP perception and patient preference studies. DSGVO (Germany\'s GDPR implementation) is enforced strictly by 16 state-level data protection authorities (LDAs), creating complex multi-jurisdictional compliance requirements unique within the EU.',
    keyStats: [
      { label: 'GDP (2024)', value: '$4.1T', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '84M', note: 'Destatis 2024' },
      { label: 'MR industry revenue', value: '~€3.2B', note: 'ADM/ESOMAR Germany 2023' },
    ],
    topSectors: ['Pharmaceuticals & Medical Devices', 'Automotive & Engineering', 'Financial Services', 'FMCG & Retail'],
    regulatoryNote:
      'BfArM (Bundesinstitut für Arzneimittel und Medizinprodukte) regulates drug approval and clinical trial authorisation; G-BA and IQWiG govern health technology assessment under AMNOG (2011). Market research touching patient data requires ethics committee (Ethikkommission) approval at the relevant Ärztekammer or university hospital level. DSGVO is enforced by 16 state LDAs; Germany\'s implementation is among the EU\'s strictest, with §22 BDSG (Bundesdatenschutzgesetz) adding additional requirements for sensitive health-data processing.',
    fieldworkNote:
      'Germany has excellent panel infrastructure for both consumer and HCP research, with large GfK and Kantar online panels and specialist physician panels through Doctors.net.de and pharmaphorum networks. HCP recruitment is aided by KV (Kassenärztliche Vereinigung) regional directory listings. Fieldwork must be conducted with DSGVO-compliant data processing agreements; sensitive health category data requires explicit Article 9 consent. Focus groups and IDIs are readily deployed in Frankfurt, Munich, Berlin, and Hamburg; qualitative recruitment lead times are typically seven to ten working days.',
    marketBarriers: [
      {
        barrier: 'DSGVO Article 9 consent requirements and 16-state LDA variation creating operational compliance complexity for health data research',
        mitigation: 'Implement a single harmonised consent framework reviewed against the most stringent LDA interpretation (typically Bavaria or Hamburg); appoint a local DSGVO-qualified Data Protection Officer for all pharma-sponsored programmes; use pseudonymised panel IDs throughout.',
      },
      {
        barrier: 'AMNOG-driven G-BA submission timelines requiring rapid generation of HCP perception and patient preference evidence within 12-month post-launch windows',
        mitigation: 'Pre-plan AMNOG-supportive research at Phase III readout; maintain standing HCP and patient advisory panels activatable within two weeks of launch; align DCE and patient-reported outcome study designs with IQWiG methodological guidance.',
      },
      {
        barrier: 'Kassenärztliche Vereinigung gatekeeping limiting direct-to-prescriber recruitment for GKV-sector primary care research',
        mitigation: 'Route primary care physician recruitment through KV regional directories supplemented by Hausarztverband (GP association) partnerships; for specialist research, leverage Fachgesellschaft (specialty society) endorsement to improve response rates.',
      },
    ],
  },
};

export const countryMarketContextData: CountryMarketContext[] = [
  {
    slug: 'morocco',
    flag: '🇲🇦',
    marketOverviewP1:
      'Morocco is a lower-middle-income economy with a GDP of approximately $140 billion (2024 IMF estimate) and a population of 37 million. The country serves as a gateway between Europe and sub-Saharan Africa, anchored by Casablanca as the preeminent financial and commercial hub. Key economic pillars include phosphate mining and fertiliser exports (world's largest phosphate reserves), automotive manufacturing, tourism, and textiles. A growing urban middle class, accelerating digital adoption, and proximity to European markets make Morocco increasingly attractive for consumer, financial services, and industrial research mandates.',
    marketOverviewP2:
      'Morocco's market research industry is well-established by North African standards, with a concentration of professional agencies in Casablanca and Rabat. Quantitative surveys (CATI, face-to-face), focus groups, and mystery shopping are routine. Bilingual French/Arabic fieldwork is standard; Darija (Moroccan Arabic dialect) fluency is essential for qualitative consumer work. International MR networks operate locally — Ipsos, Kantar, and local agencies such as Sunergia and HPS are active. Healthcare and pharmaceutical research increasingly uses ANAM-aligned access data, particularly for social insurance reimbursement studies.',
    keyStats: [
      { label: 'GDP (2024)', value: '~$140 billion', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '~37 million', note: 'HCP Morocco 2024 estimate' },
      { label: 'Urbanisation rate', value: '~64%', note: 'UN World Urbanisation Prospects 2023' },
    ],
    topSectors: ['Automotive & Manufacturing', 'Financial Services', 'FMCG & Retail', 'Tourism & Hospitality'],
    regulatoryNote:
      'Market research data collection in Morocco is governed by Law 09-08 on personal data protection, overseen by the CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel). Healthcare research must align with ANAM (Agence Nationale de l'Assurance Maladie) frameworks for reimbursement-related studies. Pharmaceutical product research falls under the Ministry of Health and CAPM (Centre Anti-Poison et de Pharmacovigilance du Maroc) guidelines for pharmacovigilance.',
    fieldworkNote:
      'Urban fieldwork is most efficient in Casablanca, Rabat, Marrakech, and Fès. Rural reach requires Darija-speaking field supervisors and logistical planning for areas in the Souss-Massa or Drâa-Tafilalet regions. Face-to-face interviewing dominates consumer research, while CATI is effective for B2B and professional audiences. Phone penetration exceeds 130% and smartphone ownership is above 80% in urban areas, enabling mobile-assisted data collection.',
    marketBarriers: [
      {
        barrier: 'Linguistic fragmentation across French, Modern Standard Arabic, Darija, and Tamazight requiring multi-register instrument design',
        mitigation: 'Deploy bilingual (French/Darija) questionnaires for consumer work and Modern Standard Arabic for formal/institutional respondents; engage local linguistic validators before fieldwork launch.',
      },
      {
        barrier: 'Low survey participation among rural and peri-urban populations due to cultural wariness of unknown interviewers and limited digital literacy',
        mitigation: 'Use community-embedded recruiters with local referrals, conduct face-to-face in familiar community settings, and apply gender-matched interviewers for women respondents in conservative areas.',
      },
      {
        barrier: 'Data privacy compliance burden under CNDP Law 09-08 including prior declaration requirements for personal data processing',
        mitigation: 'File CNDP declarations before fieldwork, ensure informed-consent scripts reference data protection rights explicitly, and store data on CNDP-compliant infrastructure.',
      },
    ],
  },
  {
    slug: 'nigeria',
    flag: '🇳🇬',
    marketOverviewP1:
      'Nigeria is Africa's largest economy with a GDP of approximately $477 billion (2024 IMF estimate, nominal) and a population exceeding 220 million — the continent's most populous nation. Lagos functions as the commercial capital and Africa's most dynamic consumer market. The economy is driven by oil and gas revenues, though FMCG, telecommunications, banking, and fintech contribute significantly and are growing faster. A median age of 18 years, high mobile penetration, and rapid urbanisation create strong consumer demand. Currency volatility (NGN) and infrastructure gaps are persistent constraints for commercial investment.',
    marketOverviewP2:
      'Nigeria hosts the largest market research industry in sub-Saharan Africa outside South Africa. Lagos-headquartered agencies — including Kantar TNS Nigeria, Ipsos Nigeria, NOIPolls, and Philipp Morris-affiliated firms — conduct large-scale omnibus surveys, brand tracking, and political polling. Mobile-first methodologies are standard given smartphone penetration above 40% in urban centres. B2B and healthcare research targets a concentrated pool of KOLs in Lagos and Abuja. Face-to-face fieldwork is essential for mass-consumer research given literacy variation across the 36 states.',
    keyStats: [
      { label: 'GDP (2024)', value: '~$477 billion', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '>220 million', note: 'NBS Nigeria 2023 estimate' },
      { label: 'Mobile internet users', value: '~122 million', note: 'NCC Nigeria Q4 2023' },
    ],
    topSectors: ['FMCG & Consumer Goods', 'Telecommunications', 'Financial Services & Fintech', 'Oil, Gas & Energy'],
    regulatoryNote:
      'Market research in Nigeria operates under the Nigeria Data Protection Act 2023 (NDPA) and is regulated by the Nigeria Data Protection Commission (NDPC), which replaced the NDPR framework. Healthcare and pharmaceutical research must align with NAFDAC (National Agency for Food and Drug Administration and Control) requirements; clinical and patient-facing studies require NHREC (National Health Research Ethics Committee) approval. Consumer surveys require informed consent disclosures aligned with NDPA Section 24.',
    fieldworkNote:
      'Fieldwork is concentrated in Lagos (commercial hub), Abuja (federal capital), Kano, and Port Harcourt. Multi-ethnic respondent recruitment must account for the Hausa-Fulani north, Yoruba southwest, and Igbo southeast as culturally distinct consumer segments. CATI and mobile surveys are effective for formal-sector and urban audiences; face-to-face enumeration area sampling is required for nationally representative work. Traffic, security advisories, and fuel availability affect ground logistics in non-Lagos states.',
    marketBarriers: [
      {
        barrier: 'Electricity infrastructure unreliability — frequent grid outages affecting CATI call centres, data upload from field tablets, and focus group facility operations',
        mitigation: 'Equip field teams with power banks and offline data capture apps (e.g., SurveyCTO with local sync), use generator-backed CATI facilities, and schedule online qualitative sessions during off-peak hours.',
      },
      {
        barrier: 'Ethnic and linguistic heterogeneity across 500+ languages requiring targeted translation for Hausa, Yoruba, Igbo, and Pidgin English consumer segments',
        mitigation: 'Design core instruments in English and Pidgin, commission parallel Hausa and Yoruba translations for northern and southwestern samples, and use mother-tongue interviewers matched to each zone.',
      },
      {
        barrier: 'Security constraints limiting fieldwork access in parts of the North-East (Borno, Yobe, Adamawa states) and certain Niger Delta communities',
        mitigation: 'Restrict ground fieldwork to accessible LGAs; supplement with phone surveys for hard-to-reach zones; partner with NGO networks with established community access for sensitive or health-related studies.',
      },
    ],
  },
  {
    slug: 'south-africa',
    flag: '🇿🇦',
    marketOverviewP1:
      'South Africa is sub-Saharan Africa's most industrialised economy with a GDP of approximately $406 billion (2024 IMF estimate) and a population of approximately 60 million. Johannesburg and the broader Gauteng province function as Africa's financial and mining capital; Cape Town anchors the tech, tourism, and agribusiness sectors. The economy is characterised by high inequality (Gini ~0.63), a sophisticated dual private/public healthcare system, and one of Africa's most mature retail markets. Structural unemployment (~33%) and load-shedding electricity challenges remain growth constraints despite a strong institutional and financial services base.',
    marketOverviewP2:
      'South Africa has the most sophisticated market research industry on the continent. SAMRA (South African Market Research Association) sets professional standards and accredits agencies. Major global players — Ipsos, Nielsen, Kantar, and GfK — operate full local teams. Specialist healthcare research agencies including Medscape South Africa, Survey Solutions, and academic CROs (Wits, UCT) provide deep pharma and clinical insight capability. South Africa is the default African anchor market for multinational brand tracking, shopper research, and physician studies, with NHI implementation research a growing area of focus.',
    keyStats: [
      { label: 'GDP (2024)', value: '~$406 billion', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '~60 million', note: 'Stats SA mid-year estimate 2024' },
      { label: 'Private medical scheme members', value: '~8.9 million principal members', note: 'CMS Annual Report 2023 (~17% of population)' },
    ],
    topSectors: ['Financial Services & Insurance', 'Retail & FMCG', 'Mining & Resources', 'Pharmaceuticals & Healthcare'],
    regulatoryNote:
      'Market research in South Africa is governed by POPIA (Protection of Personal Information Act, effective July 2021), enforced by the Information Regulator. Healthcare research requires ethical clearance from a SAHPRA-recognised or NHREC-aligned Research Ethics Committee (REC). Pharmaceutical and device studies align with SAHPRA (South African Health Products Regulatory Authority) Good Clinical Practice guidelines. Post-market and real-world evidence studies increasingly incorporate NHI-readiness frameworks as the NHI Act 2023 implementation progresses.',
    fieldworkNote:
      'Johannesburg, Cape Town, Durban, and Pretoria offer mature fieldwork infrastructure — well-equipped CATI centres, focus group facilities, and experienced recruiter networks. Township fieldwork (Soweto, Khayelitsha, Umlazi) requires community partnership models and security-aware logistics. Online quantitative surveys achieve strong completion in LSM 6–10 segments; face-to-face remains essential for lower-income, rural, and older respondents. Afrikaans and Zulu capability is important for nationally representative consumer samples.',
    marketBarriers: [
      {
        barrier: 'Language diversity across 11 official languages — isiZulu, isiXhosa, Afrikaans, Sesotho, and others — requiring multilingual instrument design and translation for representative national studies',
        mitigation: 'Translate instruments into the top 4–5 languages by target segment; use professional back-translation review by SAMRA-affiliated translators; conduct cognitive debriefs in each language before launch.',
      },
      {
        barrier: 'High inequality creating a bifurcated respondent universe — sophisticated private-sector consumers and healthcare users alongside a large under-resourced public-sector population requiring entirely different recruitment and instrument approaches',
        mitigation: 'Explicitly design dual-track sampling for private and public segment objectives; use SAARF LSM or SEMs for stratification; deploy township field teams with community-embedded recruiters for public-sector cohorts.',
      },
      {
        barrier: 'Load-shedding (Eskom-controlled electricity outages of up to 10+ hours/day at peak stages) disrupting CATI centre operations, online survey completion, and healthcare facility access for fieldwork',
        mitigation: 'Schedule fieldwork during Stage 1–2 load-shedding periods; select facilities with generator backup; use offline-capable mobile data collection tools with automatic sync on reconnection.',
      },
    ],
  },
  {
    slug: 'kenya',
    flag: '🇰🇪',
    marketOverviewP1:
      'Kenya is East Africa's largest and most diversified economy with a GDP of approximately $118 billion (2024 IMF estimate) and a population of approximately 56 million. Nairobi functions as the region's primary commercial hub, hosting the African headquarters of numerous multinationals, development finance institutions, and technology companies. Key economic drivers include financial services (home to M-Pesa, the world's most advanced mobile money ecosystem), agribusiness, telecommunications, and a fast-growing tech startup sector. Kenya's devolved government structure — 47 counties — creates a fragmented but accessible sub-national market landscape.',
    marketOverviewP2:
      'Kenya has East Africa's most developed market research infrastructure. Nairobi-based agencies including Ipsos Kenya, Kantar Kenya, InfoTrak, and Geopoll conduct large-scale quantitative surveys, qualitative studies, and mobile panel research. The prevalence of smartphone ownership (~50% nationally, ~75% in Nairobi) and M-Pesa-linked digital identity enables strong mobile survey response rates. Healthcare research increasingly targets county health departments and the evolving SHIF (Social Health Insurance Fund) access landscape. Nairobi serves as the regional hub for pan-East Africa multi-country studies covering Uganda, Tanzania, and Rwanda.',
    keyStats: [
      { label: 'GDP (2024)', value: '~$118 billion', note: 'IMF World Economic Outlook 2024' },
      { label: 'Population', value: '~56 million', note: 'KNBS Kenya 2024 estimate' },
      { label: 'M-Pesa active users', value: '~32 million', note: 'Safaricom Annual Report FY2024' },
    ],
    topSectors: ['Financial Services & Mobile Money', 'Agribusiness & Food Processing', 'Telecommunications & Technology', 'Healthcare & Pharmaceuticals'],
    regulatoryNote:
      'Market research in Kenya is regulated under the Data Protection Act 2019, enforced by the Office of the Data Protection Commissioner (ODPC). Research involving human subjects — including healthcare and patient studies — requires ethical approval from a KEBS-recognised or NACOSTI (National Commission for Science, Technology and Innovation)-registered Institutional Review Board. Healthcare studies may also require county-level health authority approvals under Kenya's devolved governance framework established by the 2010 Constitution.',
    fieldworkNote:
      'Nairobi offers sophisticated fieldwork infrastructure including CATI centres, well-equipped qualitative facilities, and large professional recruiter networks. Mobile survey methodologies leveraging SMS and USSD channels can reach semi-rural respondents effectively given Kenya's high SIM penetration (>100%). County-level B2B fieldwork outside Nairobi requires Nairobi-based supervisors partnered with county-resident field agents fluent in local dialects. Kiswahili is the national lingua franca and the primary survey language for mass-consumer nationally representative studies.',
    marketBarriers: [
      {
        barrier: 'Devolved county governance creating 47 separate health and regulatory approval processes for healthcare studies, adding timelines and administrative complexity beyond a single national ethics clearance',
        mitigation: 'Obtain national-level NACOSTI clearance first, then engage county health research offices in target counties early with standardised county-specific approval letters; allow 4–8 weeks for county-level sign-off in the project plan.',
      },
      {
        barrier: 'Respondent fatigue and panel duplication risk in Nairobi's over-researched professional and middle-class segments — particularly physicians, business decision-makers, and tech-sector employees who receive multiple survey requests weekly',
        mitigation: 'Maintain deduplication protocols across recruiter databases, enforce 6-month exclusion windows for repeat panellists on similar topics, and use snowball referral recruitment for hard-to-reach professional segments.',
      },
      {
        barrier: 'Rural reach gaps in arid and semi-arid lands (ASAL counties — Turkana, Marsabit, Mandera) where road infrastructure, internet connectivity, and local recruiter networks are limited',
        mitigation: 'Use community health volunteer (CHV) networks embedded in county health systems for rural recruitment; deploy USSD-based mobile surveys for connectivity-constrained areas; prioritise Nairobi and secondary cities for quantitative representation unless the study objective requires rural reach.',
      },
    ],
  },
];
