import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesLebanon: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'lebanon',
  metaDescription:
    'Lebanese pharmaceutical companies after the currency crash: Algorithm, Benta, Arwan, Pharmaline, Mersaco, NSSF and the MOPH Import & Drug Department.',
  introLead:
    'After the lira lost almost all of its value from 2019 and the Banque du Liban wound down medicine subsidies, Lebanese pharmacies stopped being a showcase for European originators and became a market of local packs, parallel imports, and cash prices reset every few weeks.',
  introRest:
    'Algorithm, Benta, Arwan, Pharmaline and Mediphar kept formulation lines running when dollars for finished imports dried up, and the Syndicate of Pharmaceutical Industries has said domestic plants now put a much larger share of packs on the shelf than they did before the crash, even though customs figures still show import value larger than local output. Mersaco and sister wholesalers such as Pharmanet remain the physical route into pharmacies from Beirut to Tripoli, while Roche, Novartis, Pfizer, Sanofi and Boehringer kept commercial teams but trimmed inventories and waited for NSSF reimbursement to be restated in something closer to a usable currency. The Import and Drug Department at the Ministry of Public Health still stamps registrations and import licences; what changed is the economics around those papers. Names below are the counterparties BioNixus meets when a client asks who still manufactures in-country, who still details, and who actually moves boxes after the subsidy era ended.',
  stats: [
    { value: '~$626m', label: 'Approximate medicine market size in 2024, US Commercial Service / Lebanese Customs (chapter 30)' },
    { value: '$737m', label: 'Pharmaceutical imports recorded by Lebanese Customs in 2024' },
    { value: '~$150m', label: 'Estimated local pharmaceutical production value, 2023–2024, same US Commercial Service series' },
    { value: '~50%', label: 'Industry estimate of value contraction between 2020 and 2023, cited by Algorithm in L’Orient Today' },
  ],
  channelHeading: 'What the currency crash did to medicine supply in Lebanon',
  channelBody:
    'A pack still needs a Ministry of Public Health registration held by a Lebanese marketing authorisation holder, plus an import licence when the goods are finished abroad; the Import and Drug Department is the desk that issues both. Until 2021 the Central Bank effectively paid the dollar invoice for many registered products, which is why originator brands filled Beirut and Tripoli shelves at administered lira prices. Subsidy withdrawal and the collapse of the official rate flipped that model: importers could no longer clear goods at a cheap rate, shortages appeared within weeks, and pharmacists began substituting locally made generics or buying parallel stock that had never sat in a principal’s warehouse. Domestic plants, which had been treated as a secondary source, suddenly had a reason to add diabetes, cardiovascular, antibiotic and even some oncology lines, and the authorities ran a “support Lebanese medicine” campaign that encouraged substitution on a unified prescription form. NSSF coverage, which had become almost meaningless while benefits stayed in old lira, was restated in stages; by 2025 the fund was again talking about drug and hospital rates near pre-crisis percentages, though payment delays and currency conversion still shape what a patient actually pays at the counter. Physical distribution is concentrated: Mersaco, Pharmanet and houses such as Khalil Fattal & Fils carry credit and cold-chain to independents and to hospital pharmacies, while medical representatives — thinner than in 2018 — still call on consultants in Beirut, Sidon and Tripoli. Parallel trade and leftover subsidised stock continue to distort shelf prices, which is why a locally made SKU can sometimes sit above an imported original that entered under the old regime.',
  companies: [
    {
      name: 'Algorithm SAL',
      hq: 'Dbayeh',
      type: 'Local',
      focus: 'Cardiovascular, diabetes, lipids, primary-care branded generics',
      notes: 'Family-owned Dbayeh manufacturer whose managers told the press pack volumes roughly doubled after the crash as imports collapsed and export accounts helped keep the plant solvent.',
    },
    {
      name: 'Benta Pharma Industries',
      hq: 'Dbayeh',
      type: 'Local',
      focus: 'Solids, liquids, licensed brands and hospital lines',
      notes: 'One of the larger Lebanese formulation sites, used both for own brands and for contract or licensed manufacture when a foreign principal wants a local pack without building a plant.',
    },
    {
      name: 'Arwan Pharmaceutical Industries',
      hq: 'Jadra',
      type: 'Local',
      focus: 'Sterile injectables and specialty hospital products',
      notes: 'Jadra plant built around vials and ampoules, so hospital pharmacists treat it as a domestic alternative when imported injectables fail to clear or price out of reach.',
    },
    {
      name: 'Pharmaline',
      hq: 'Jdeideh',
      type: 'Local',
      focus: 'Diabetes, antibiotics, CNS, oncology support and chronic-care generics',
      notes: 'Malia-group manufacturer whose general manager also chairs the industry syndicate; the house expanded several chronic-care lines when subsidy withdrawal emptied originator shelves.',
    },
    {
      name: 'Mediphar Laboratories',
      hq: 'Beirut',
      type: 'Local',
      focus: 'Branded generics for community pharmacies',
      notes: 'Smaller Lebanese laboratory that stayed in the retail mix through the crisis by holding registrations pharmacists could substitute when European SKUs vanished.',
    },
    {
      name: 'Mersaco',
      hq: 'Beirut',
      type: 'Distributor',
      focus: 'National wholesale, agency lines and pharmacy credit',
      notes: 'The wholesaler most principals still name first when they need Beirut-to-north coverage, cold chain and a sales force that already calls on the independent trade.',
    },
    {
      name: 'Pharmanet',
      hq: 'Beirut',
      type: 'Distributor',
      focus: 'Distribution and promotion for local and foreign principals',
      notes: 'Often mentioned in the same breath as Mersaco; brand teams use it when they want a second or specialist route into pharmacies without standing up their own vans.',
    },
    {
      name: 'Khalil Fattal & Fils',
      hq: 'Beirut',
      type: 'Distributor',
      focus: 'Agency distribution, consumer health and pharmacy logistics',
      notes: 'Long-standing trading house whose healthcare arm still places multinational consumer and prescription lines into organised and independent retail.',
    },
    {
      name: 'Hikma Lebanon',
      hq: 'Beirut',
      type: 'Regional',
      focus: 'Branded generics, injectables and licensed specialty',
      notes: 'Jordanian group with a Lebanese commercial presence that filled many of the gaps left when European originators rationed stock during the dollar shortage.',
    },
    {
      name: 'Roche Lebanon',
      hq: 'Beirut',
      type: 'MNC',
      focus: 'Oncology, haematology and diagnostics',
      notes: 'Specialty affiliate that kept a Beirut team through the crash, concentrating on hospital accounts and patient-access work rather than broad primary-care detailing.',
    },
    {
      name: 'Novartis Lebanon',
      hq: 'Beirut',
      type: 'MNC',
      focus: 'Cardiology, ophthalmology, immunology and oncology',
      notes: 'Innovator office that stayed registered and detailed selected franchises while cutting inventory risk and watching NSSF restatement of chronic-care benefits.',
    },
    {
      name: 'Pfizer Lebanon',
      hq: 'Beirut',
      type: 'MNC',
      focus: 'Vaccines, anti-infectives, hospital and specialty brands',
      notes: 'Commercial affiliate whose hospital and vaccine lines still appear in institutional orders, though retail volume is a fraction of the pre-2019 book.',
    },
    {
      name: 'Sanofi Lebanon',
      hq: 'Beirut',
      type: 'MNC',
      focus: 'Diabetes, consumer health and established products',
      notes: 'Kept a Lebanese presence for insulin and consumer lines while pharmacists substituted local generics wherever a Sanofi SKU became unaffordable or unavailable.',
    },
    {
      name: 'Boehringer Ingelheim Lebanon',
      hq: 'Beirut',
      type: 'MNC',
      focus: 'Cardiometabolic, respiratory and animal health',
      notes: 'Smaller innovator office that remains relevant in diabetes and respiratory detailing even after subsidy-era volumes disappeared.',
    },
    {
      name: 'GSK Lebanon',
      hq: 'Beirut',
      type: 'MNC',
      focus: 'Vaccines, respiratory and established brands',
      notes: 'Affiliate still visible in vaccine and respiratory accounts; consumer-health SKUs now compete with cheaper local and parallel stock on the same shelves.',
    },
    {
      name: 'Ministry of Public Health — Import & Drug Department',
      hq: 'Beirut',
      type: 'Government',
      focus: 'Registration, import licensing and pharmacy inspection',
      notes: 'The desk that decides whether a dossier, a plant or a shipment is legal; launch timing in Lebanon is still a function of this department’s queue, not of a separate pricing agency.',
    },
    {
      name: 'National Social Security Fund (NSSF)',
      hq: 'Beirut',
      type: 'Government',
      focus: 'Reimbursement of medicines and hospital acts for formal-sector workers',
      notes: 'Largest social payer; after years of worthless lira benefits it began restating drug and hospital coverage, which is why chronic-care brands watch its circulars as closely as MOPH registrations.',
    },
    {
      name: 'Syndicate of Pharmaceutical Industries in Lebanon (SPIL)',
      hq: 'Beirut',
      type: 'Operator',
      focus: 'Industry representation for local manufacturers',
      notes: 'The manufacturers’ syndicate that argued for substitution rules and residual support for domestic plants; useful as a source on capacity and on who actually runs a line.',
    },
  ],
  categoryBlurbs: {
    local:
      'Dbayeh, Jdeideh and Jadra formulation houses that kept lines open through the dollar shortage and now occupy a much larger share of pharmacy packs than they did when subsidies favoured imports.',
    mnc:
      'European and UK affiliates that retained Beirut offices for specialty, vaccines and a few chronic franchises while accepting that retail volume would not return to 2018 shapes.',
    regional:
      'Levant groups, Hikma first among them, that already knew how to price and detail in a cash market and therefore gained shelf space when originator stock thinned.',
    trade:
      'Beirut wholesalers that still extend credit to independents, plus the Import and Drug Department and the NSSF, whose stamps and circulars decide whether a pack is legal and whether anyone will reimburse it.',
  },
  growthDrivers: [
    {
      title: 'End of the Central Bank medicine subsidy',
      desc: 'Once Banque du Liban stopped covering dollar invoices, imported originators became scarce or expensive overnight, which is the single largest reason local plants added chronic-care SKUs and pharmacists learned to substitute.',
    },
    {
      title: 'NSSF restatement of drug benefits',
      desc: 'Coverage rates that had collapsed with the lira were rebuilt toward pre-crisis percentages during 2024–2025, so brands with an NSSF code again have a reason to detail formal-sector patients instead of selling only against cash.',
    },
    {
      title: 'Substitution rules and a unified prescription',
      desc: 'Authorities and the industry syndicate pushed pharmacists to offer a Lebanese generic when one exists, turning registration of a local equivalent into a commercial weapon against an imported brand.',
    },
    {
      title: 'Parallel stock and price confusion',
      desc: 'Goods that entered under old subsidy rates, plus informal imports, still sit beside newly priced local packs, so any share study has to separate legal principal stock from leftover and parallel inventory before it can be believed.',
    },
  ],
  faq: [
    {
      q: 'Who still manufactures medicines inside Lebanon?',
      a: 'The plants that come up in every Beirut conversation are Algorithm in Dbayeh, Benta, Arwan in Jadra, Pharmaline in Jdeideh and Mediphar. Several other smaller laboratories hold registrations, but those five names account for most of the domestic pack story after 2020.',
    },
    {
      q: 'Did the 2019–2023 crash shrink the Lebanese medicine market?',
      a: 'Yes, in value. Algorithm’s manufacturing leadership told L’Orient Today the market roughly halved between 2020 and 2023 as international brands stopped landing, and US Commercial Service tables built on customs data put 2024 size near six hundred million dollars — far below the pre-crisis dollar book.',
    },
    {
      q: 'How does a foreign company register a medicine in Lebanon?',
      a: 'A Lebanese holder files with the Import and Drug Department at the Ministry of Public Health. There is no separate pricing agency of the Pakistani or Algerian type; the commercial problem is currency, subsidy history and NSSF coding, not a published maximum-price formula.',
    },
    {
      q: 'What role does the NSSF play for pharmaceutical brands?',
      a: 'Formal-sector patients look to the fund for drug and hospital cover. While benefits stayed in old lira the fund barely moved packs; once it restated rates, chronic-care brands regained a reimbursed channel, though cash at the pharmacy counter is still the default for many households.',
    },
    {
      q: 'What fieldwork does BioNixus run among Lebanese pharmaceutical companies?',
      a: 'Stock and price checks in community pharmacies across Beirut, Tripoli and Sidon that separate principal, parallel and leftover subsidised inventory; interviews with hospital pharmacists on injectable availability; and reconstruction of NSSF circulars against what patients actually pay.',
    },
    {
      q: 'Should readers treat this Lebanese table as a sales ranking?',
      a: 'Treat the roster as a map of plants, wholesalers and payers that keep appearing in Lebanese registration files and in BioNixus Beirut fieldwork. Nothing about the order of rows is a claim that one house outsells another.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Public Health (Lebanon) — Import & Drug Department, drug registration and import licensing',
    url: 'https://www.moph.gov.lb',
    asOf: '2026-09-04',
  },
  sources: [
    'US Commercial Service, Lebanon Country Commercial Guide — Pharmaceuticals, customs-based production, import and market figures for 2022–2024',
    'L’Orient Today reporting on local manufacturers and the post-subsidy boom, including Algorithm pack-volume comments and SPIL statements, 2023–2025',
    'National Social Security Fund statements on restated drug and hospital coverage, relayed by National News Agency / L’Orient Today, 2025',
    'BioNixus Lebanon pharmacy, hospital and payer fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'Beirut and Tripoli community-pharmacy stock checks that tag each SKU as principal import, local manufacture or parallel, then compare shelf price with the last known subsidised sticker.',
    'Sidon and Beirut hospital-pharmacy conversations on sterile injectables, focusing on Arwan versus leftover imported vials and on which wholesaler still extends credit.',
    'Walkthroughs of NSSF circulars with fund clerks and with pharmacists who bill the fund, to see which chronic-care brands regained a reimbursed code after the 2024–2025 restatement.',
    'Plant-capacity interviews at Dbayeh and Jdeideh sites covering shift patterns, API dollar access and which licensed brands a foreign principal could still toll-manufacture in Lebanon.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
