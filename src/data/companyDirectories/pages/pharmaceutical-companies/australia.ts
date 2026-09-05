import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesAustralia: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'australia',
  metaDescription:
    'Pharmaceutical companies in Australia: CSL, Seqirus, Mayne Pharma, Viatris, Pfizer, GSK, AstraZeneca, Roche, TGA and PBS — listing, plasma, vaccines.',
  introLead:
    'Australia is a high-regulation, high-subsidy medicines market in which a product that is on the Australian Register of Therapeutic Goods but not on the Pharmaceutical Benefits Scheme is, for most patients, only half launched.',
  introRest:
    'The Therapeutic Goods Administration decides whether a medicine may be sold. The Pharmaceutical Benefits Advisory Committee then decides whether the Commonwealth will subsidise it, and the Department of Health, Disability and Ageing administers the PBS that, in 2024–25, spent AUD 19.1 billion of government money on 226 million subsidised prescriptions across 949 listed medicines. Patient copayments are capped — the general maximum fell to AUD 25 from January 2026 — so originator economics live or die in the PBAC dossier, not at the pharmacy till. CSL, headquartered in Melbourne, is the country’s global plasma and vaccine champion; its Seqirus arm supplies influenza vaccine at home and abroad. Mayne Pharma and Viatris’s Alphapharm plant give Australia a generics manufacturing base. Pfizer, GSK, AstraZeneca, Novartis, Roche, Sanofi, MSD, Janssen, Amgen and Bristol Myers Squibb run the innovator affiliates that fill most of the high-value PBS oncology and immunology lines. BioNixus keeps this roster current for any access or brand-share brief that has to survive a Sydney, Melbourne or Brisbane P&T committee.',
  stats: [
    { value: 'AUD 19.1bn', label: 'Commonwealth PBS expenditure on medicines, 2024–25 (up 7.4% on 2023–24)' },
    { value: '226m', label: 'PBS-subsidised prescriptions dispensed in 2024–25' },
    { value: '949', label: 'Distinct medicines listed on the PBS at 30 June 2025 (5,164 brands)' },
    { value: 'AUD 25', label: 'Maximum general PBS copayment from January 2026 (down from AUD 31.60)' },
  ],
  channelHeading: 'How TGA registration and PBS listing decide whether a medicine is commercially real',
  channelBody:
    'Every prescription product needs an ARTG entry. TGA offers standard, priority and provisional pathways and participates in the Access Consortium with the UK, Canada, Singapore and Switzerland; many dossiers now ride on FDA or EMA reviews. Registration is not reimbursement. A sponsor then files with PBAC, which applies cost-effectiveness analysis — informal bands often described around AUD 45,000–75,000 per QALY, with separate logic for the Life Saving Drugs Program — and recommends a listing, a deferral or a rejection. Price disclosure on the PBS forces subsequent cuts when actual dispensed prices fall, which is why generic and biosimilar houses such as Viatris/Alphapharm and Mayne can erode an originator’s net even after a successful listing. Community pharmacies dispense most Section 85 products; hospitals administer Section 100 and highly specialised drugs under state formularies that generally follow, but sometimes trail, the PBS. Private health insurance, held by a large minority of Australians, pays hospital episodes and devices more than it pays outpatient medicines, so it is not a second PBS. CSL’s Broadmeadows and Parkville sites, Seqirus’s vaccine plants, and Alphapharm’s Queensland factory are the manufacturing names that come up when a minister talks about sovereign capability; most innovator volume is still imported by the affiliates and distributed through full-line wholesalers into Chemist Warehouse, TerryWhite Chemmart, Priceline and independent pharmacies. Medicines Australia is the industry body that negotiates the Strategic Agreement with government; it is not a company on this list because it does not manufacture, reimburse or dispense.',
  companies: [
    {
      name: 'Therapeutic Goods Administration (TGA)',
      hq: 'Canberra',
      type: 'Government',
      focus: 'ARTG registration, GMP and post-market safety',
      notes: 'The regulator whose pathway choice — standard, priority, provisional, Access Consortium — sets the clock before any PBS conversation can start.',
    },
    {
      name: 'Department of Health, Disability and Ageing (PBS)',
      hq: 'Canberra',
      type: 'Government',
      focus: 'PBS administration, PBAC secretariat and listing instruments',
      notes: 'The Commonwealth purchaser: PBAC recommends, the Department lists, and 2024–25 government spend of AUD 19.1 billion is the pool every originator is competing for.',
    },
    {
      name: 'CSL Limited',
      hq: 'Melbourne',
      type: 'Local',
      focus: 'Plasma-derived therapies, iron and global biotech',
      notes: 'ASX-listed global plasma company and Australia’s most valuable life-sciences group; the domestic champion ministers cite when they talk about sovereign biologics.',
    },
    {
      name: 'CSL Seqirus',
      hq: 'Melbourne',
      type: 'Local',
      focus: 'Influenza and other vaccines for Australia and export',
      notes: 'CSL’s vaccine arm, with Australian manufacturing that supplies the national influenza programme and export contracts — a separate account from plasma.',
    },
    {
      name: 'Mayne Pharma',
      hq: 'Salisbury',
      type: 'Local',
      focus: 'Generics, specialty brands and contract development',
      notes: 'ASX-listed South Australian manufacturer that is the local generics name most often paired with Viatris when a PBS price-disclosure story is being told.',
    },
    {
      name: 'Viatris (Alphapharm)',
      hq: 'Carole Park',
      type: 'MNC',
      focus: 'PBS generics and the historic Alphapharm manufacturing site',
      notes: 'Viatris’s Australian generics franchise, still widely known as Alphapharm, is the plant and the brand that originators watch when a molecule goes off patent.',
    },
    {
      name: 'Pfizer Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Vaccines, oncology, anti-infectives and hospital specialty',
      notes: 'Innovator affiliate with both a PBS-listed specialty book and a manufacturing history that still comes up in sovereign-capability debates.',
    },
    {
      name: 'GSK Australia',
      hq: 'Melbourne',
      type: 'MNC',
      focus: 'Vaccines, respiratory, HIV and specialty',
      notes: 'Vaccine and respiratory affiliate whose PBS and National Immunisation Program listings are as commercially important as its private pharmacy brands.',
    },
    {
      name: 'AstraZeneca Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Oncology, cardiovascular, respiratory and rare disease',
      notes: 'High-value PBS oncology and respiratory franchise; a reference account for how a global specialty brand survives price disclosure and biosimilar entry.',
    },
    {
      name: 'Novartis Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Cardiovascular, oncology, immunology and ophthalmology',
      notes: 'Specialty affiliate whose PBAC history — including high-cost gene and radioligand therapies — is a case library for any first-in-class access plan.',
    },
    {
      name: 'Roche Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Oncology, diagnostics and immunology',
      notes: 'Oncology affiliate whose listings and managed-access deeds are studied whenever a client asks how PBAC treats a high-cost biologic.',
    },
    {
      name: 'Sanofi Australia',
      hq: 'Macquarie Park',
      type: 'MNC',
      focus: 'Specialty, vaccines, rare disease and consumer health',
      notes: 'Dual-track affiliate: PBS specialty and immunisation on one side, pharmacy consumer health on the other.',
    },
    {
      name: 'MSD Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Oncology, vaccines, antivirals and hospital products',
      notes: 'Keytruda and vaccine listings make MSD one of the largest PBS counterparties by value in recent years.',
    },
    {
      name: 'Janssen Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Oncology, immunology, neuroscience and pulmonary hypertension',
      notes: 'Johnson & Johnson’s medicines affiliate; another high-cost PBS specialty book that hospital P&T committees see constantly.',
    },
    {
      name: 'Amgen Australia',
      hq: 'Sydney',
      type: 'MNC',
      focus: 'Oncology, bone health and inflammatory specialty biologics',
      notes: 'Biotech affiliate whose PBS and hospital-formulary work is a clean example of a company with almost no retail OTC story.',
    },
    {
      name: 'Bristol Myers Squibb Australia',
      hq: 'Melbourne',
      type: 'MNC',
      focus: 'Oncology, haematology and cardiovascular specialty',
      notes: 'Innovator affiliate concentrated on PBS oncology and haematology, often paired with Roche and MSD in hospital share-of-voice studies.',
    },
    {
      name: 'Aspen Pharmacare Australia',
      hq: 'Sydney',
      type: 'Regional',
      focus: 'Established brands, hospital injectables and licensed portfolios',
      notes: 'South African group’s Australian company, holding a large book of mature brands and hospital products that sit below the specialty-originator tier.',
    },
    {
      name: 'Sigma Healthcare',
      hq: 'Melbourne',
      type: 'Distributor',
      focus: 'Full-line wholesale into community pharmacy after the Chemist Warehouse combination',
      notes: 'The wholesale-and-retail group whose depot and banner decisions now sit beside PBS listing as a practical ranging gate for community products.',
    },
  ],
  categoryBlurbs: {
    local:
      'CSL and Seqirus as the global plasma and vaccine champion, plus Mayne Pharma as the ASX-listed generics manufacturer based in South Australia.',
    mnc:
      'Innovator affiliates and Viatris/Alphapharm, whose PBS oncology, immunology and off-patent books account for most high-value subsidised spend.',
    regional:
      'Aspen and other non-European, non-US groups that hold mature Australian portfolios or hospital injectables rather than first-in-class launches.',
    trade:
      'TGA, the PBS-administering Department, and Sigma Healthcare, whose registration, listing and wholesale decisions decide whether a SKU is commercially real.',
  },
  growthDrivers: [
    {
      title: 'PBS listing as the real launch',
      desc: 'With government spend at AUD 19.1 billion and a AUD 25 general copay, a medicine that misses PBAC will not see national volume. Sponsors now sequence TGA and PBAC in parallel and budget for deeds, risk-sharing and resubmissions rather than for a single “yes.”',
    },
    {
      title: 'Price disclosure and biosimilar erosion',
      desc: 'Mandatory disclosure keeps cutting net prices after listing, and biosimilar and generic houses — Viatris/Alphapharm, Mayne, and hospital-preferred brands — take unit share quickly. Originator forecasts have to assume a steeper cliff than in markets without a PBS-style disclosure cycle.',
    },
    {
      title: 'CSL as a sovereign biologics and vaccine platform',
      desc: 'Plasma therapies and Seqirus influenza capacity give Australia a domestic manufacturing story that ministers will keep funding. That does not replace imported specialty, but it does change how government talks about onshore fill-finish and about who is a strategic supplier.',
    },
    {
      title: 'Community-pharmacy concentration after banner consolidation',
      desc: 'Chemist Warehouse, Sigma and the remaining banners now concentrate ranging decisions. A PBS listing still creates the subsidy; a banner decision decides whether the pack is actually on the shelf in Sydney, Melbourne and Brisbane.',
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical companies are most important in Australia?',
      a: 'CSL and Seqirus are the domestic global players. On PBS value, MSD, Pfizer, AstraZeneca, Novartis, Roche, Janssen, Amgen and Bristol Myers Squibb recur at the top of specialty spend; Viatris/Alphapharm and Mayne matter once a molecule is off patent. Rankings shift with new listings and price disclosure.',
    },
    {
      q: 'Is TGA approval enough to sell at scale?',
      a: 'It is enough to sell privately. It is not enough to reach most patients. Without a PBS listing, the patient faces the full price, and community pharmacies will not dispense the product as a subsidised script. Hospital formularies generally follow the PBS for high-cost drugs.',
    },
    {
      q: 'What did the Commonwealth spend on the PBS in 2024–25?',
      a: 'AUD 19.1 billion of government money, 91.7% of total medicine cost on the scheme, up 7.4% on the previous year. Patients paid AUD 1.7 billion. Some 226 million subsidised prescriptions were dispensed, and 949 medicines were listed at 30 June 2025.',
    },
    {
      q: 'Why is CSL treated differently from other Australian companies?',
      a: 'It is a global plasma and vaccine group headquartered in Melbourne, not a domestic generics house. Seqirus supplies influenza vaccine from Australian sites. That combination makes CSL a sovereign-capability account as well as a commercial one, which is why it sits beside TGA and the Department on this page.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Australia?',
      a: 'PBAC and PBS history is reconstructed by molecule; hospital P&T interviews in Sydney, Melbourne and Brisbane test whether listing has become formulary practice; community-pharmacy banner interviews cover ranging after Sigma and Chemist Warehouse consolidation; plasma and vaccine supply conversations treat CSL and Seqirus as a separate industrial file.',
    },
    {
      q: 'Is this an official ranking of Australian pharmaceutical companies?',
      a: 'Nothing here is an official or unofficial ranking. Sponsors, the TGA register and PBS history explain why a name is present; BioNixus does not sort Australian companies by revenue or script volume.',
    },
  ],
  regulatorSource: {
    name: 'Therapeutic Goods Administration — Australian Register of Therapeutic Goods and licensed manufacturers',
    url: 'https://www.tga.gov.au',
    asOf: '2026-09-04',
  },
  sources: [
    'PBS Expenditure and Prescriptions Report, 1 July 2024 to 30 June 2025, Department of Health, Disability and Ageing',
    'TGA public materials on ARTG pathways and Access Consortium; PBAC public summary documents',
    'ASX filings and reports for CSL, Mayne Pharma; Viatris/Alphapharm site materials',
    'BioNixus Australia PBS, hospital-formulary and community-pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'PBAC outcome and PBS listing reconstructions by molecule for oncology, immunology and cardiometabolic classes, including deeds and price-disclosure steps after listing.',
    'Hospital P&T interviews in Sydney, Melbourne and Brisbane on whether a new PBS item is actually stocked, and how fast a biosimilar is preferred.',
    'Community-pharmacy banner and independent interviews on ranging after the Sigma–Chemist Warehouse combination, focused on chronic-care and vaccine SKUs.',
    'CSL and Seqirus supply-side interviews treating plasma and influenza capacity as an industrial file separate from innovator-affiliate share-of-voice.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
