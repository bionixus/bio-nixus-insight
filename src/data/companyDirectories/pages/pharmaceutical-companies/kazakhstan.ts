import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesKazakhstan: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'kazakhstan',
  metaDescription:
    'Pharmaceutical companies in Kazakhstan: Santo, Nobel AFF, Abdi Ibrahim, SK-Pharmacy, Pfizer, Sanofi, Novartis, NCEM — EAEU dossiers, OSMS, localisation.',
  introLead:
    'Kazakhstan’s medicine market reached about USD 2.53 billion in 2024 on Proxima Research figures, split between a USD 1.42 billion retail pharmacy trade and a USD 1.11 billion hospital channel that a single state wholesaler, SK-Pharmacy, is legally empowered to feed.',
  introRest:
    'Registration now runs on two tracks: a national file and, increasingly, the Eurasian Economic Union common-market procedure. The Ministry of Health sets policy; the National Center for Expertise of Medicines reviews dossiers; SK-Pharmacy, the unified distributor created in 2009 and now owned by the ministry, buys for the guaranteed basic-care package and for compulsory social health insurance (OSMS). The Social Health Insurance Fund reported 15.9 million people insured under OSMS in 2024 — coverage rates quoted by officials have ranged from the low eighties to the low nineties depending on the year and the definition — and that insured demand is what makes a SK-Pharmacy award valuable. Localisation is the other political fact: the government has said it wants domestic plants to supply half of public-sector medicines, and long-term contracts with Chimpharm (Santo), Nobel AFF, Abdi Ibrahim Global Pharm and Kelun-Kazpharm are the instrument. Pfizer, Sanofi, Novartis, Roche and Bayer keep Almaty affiliates and have signed, or been invited to sign, contract-manufacturing memoranda. BioNixus uses the companies below when a client needs to know who can actually put a pack on an Almaty or Astana hospital shelf.',
  stats: [
    { value: 'USD 2.53bn', label: 'Kazakh pharmaceutical sales in 2024 (Proxima Research, +14.5% on 2023)' },
    { value: 'USD 1.11bn', label: 'Hospital-channel value in 2024, versus USD 1.42bn retail (Proxima)' },
    { value: '15.9m', label: 'People recorded as insured under OSMS in 2024 (Social Health Insurance Fund)' },
    { value: '50%', label: 'Stated government target for the domestic share of public-sector medicines' },
  ],
  channelHeading: 'How SK-Pharmacy, EAEU registration and OSMS reimbursement organise supply',
  channelBody:
    'A product needs an expert review from the National Center for Expertise of Medicines and a registration decision from the health ministry’s control committee. Sponsors can file nationally or through the EAEU procedure, which is meant to open the same dossier to Russia, Belarus, Armenia and Kyrgyzstan — useful in theory, still uneven in clock and in national follow-up steps. Once registered, the commercial world splits. Retail pharmacies in Almaty, Astana and the oblasts buy from private wholesalers; that is the USD 1.42 billion cash-and-insurance counter trade. Public hospitals and polyclinics do not. They receive product that SK-Pharmacy has bought under the guaranteed package (GOBMP) and under OSMS, through tenders, long-term contracts of up to ten years with domestic manufacturers, and a smaller set of direct or international-organisation purchases. SK-Pharmacy’s own materials describe dozens of long-term contracts with domestic plants covering thousands of medicine and device SKUs, and a rising share of its spend going to those plants. That is why Chimpharm’s Shymkent site (Santo, part of Poland’s Polpharma), Nobel’s Almaty factory, Abdi Ibrahim Global Pharm and Kelun-Kazpharm are not merely manufacturers — they are the localisation vehicles the unified distributor is paid to prefer. Originators that want public volume either win a SK-Pharmacy lot as an import or put a contract-manufacturing agreement on a Kazakh line, as Pfizer and Roche have already started to do. Pricing for reimbursed products is regulated; retail pricing is freer but still watched. For a launch team the sequence is: NCEM and EAEU file, price submission, then a conscious choice between the retail wholesaler path and the SK-Pharmacy path — or both.',
  companies: [
    {
      name: 'Ministry of Health of the Republic of Kazakhstan',
      hq: 'Astana',
      type: 'Government',
      focus: 'Policy, pricing rules and the medical-pharmaceutical control committee',
      notes: 'The ministry that owns SK-Pharmacy, sets localisation targets and issues the registration decision after NCEM’s expert review.',
    },
    {
      name: 'National Center for Expertise of Medicines',
      hq: 'Astana',
      type: 'Government',
      focus: 'Dossier assessment for national and EAEU registrations',
      notes: 'The expert body whose review is the technical gate before a ministry decision; the account regulatory teams actually work with day to day.',
    },
    {
      name: 'SK-Pharmacy',
      hq: 'Astana',
      type: 'Government',
      focus: 'Single public wholesaler for GOBMP and OSMS hospital supply',
      notes: 'The unified distributor: if a product is not on its award list, public hospitals will not stock it, however good the EAEU file looks.',
    },
    {
      name: 'Chimpharm (Santo)',
      hq: 'Shymkent',
      type: 'Regional',
      focus: 'Generics, hospital lines and Polpharma-group manufacturing',
      notes: 'Shymkent plant trading as Santo, part of Poland’s Polpharma; a top local name in retail audits and a core SK-Pharmacy long-term contractor.',
    },
    {
      name: 'Nobel Almaty Pharmaceutical Factory (Nobel AFF)',
      hq: 'Almaty',
      type: 'Local',
      focus: 'Localised generics and contract manufacture for originators',
      notes: 'Almaty factory that SK-Pharmacy’s 2023 supplier tables put at the top of unified-distributor spend, and a site used for originator contract production.',
    },
    {
      name: 'Abdi Ibrahim Global Pharm',
      hq: 'Almaty',
      type: 'Regional',
      focus: 'Turkish-owned local manufacturing and a new multi-profile complex',
      notes: 'Abdi Ibrahim’s Kazakh vehicle, built on the Global Pharm site; a 2026 investment agreement covers a broader plant for antivirals, diabetes and anaemia lines.',
    },
    {
      name: 'Kelun-Kazpharm',
      hq: 'Almaty Region',
      type: 'Regional',
      focus: 'Infusions, hospital generics and Chinese–Kazakh joint production',
      notes: 'Joint venture that supplies parenteral and hospital products into SK-Pharmacy contracts and is part of the localisation story ministers cite.',
    },
    {
      name: 'Romat',
      hq: 'Pavlodar',
      type: 'Local',
      focus: 'Domestic generics from a northern manufacturing base',
      notes: 'Pavlodar manufacturer that appears on long-term unified-distributor lists and in retail audits outside Almaty.',
    },
    {
      name: 'Kyzyl May',
      hq: 'Almaty',
      type: 'Local',
      focus: 'Phytopharmaceuticals and established domestic brands',
      notes: 'Older Kazakh house whose herbal and established lines still show up in the pharmacy basket that Proxima measures on the retail side.',
    },
    {
      name: 'VIVA Pharm',
      hq: 'Almaty',
      type: 'Local',
      focus: 'Branded generics and consumer-facing pharmacy products',
      notes: 'Almaty manufacturer that retail audits pick up as a domestic branded-generic name beside Santo and Nobel.',
    },
    {
      name: 'Pfizer Kazakhstan',
      hq: 'Almaty',
      type: 'MNC',
      focus: 'Vaccines, anti-infectives and hospital specialty; localisation MoUs',
      notes: 'Affiliate that signed a long-term unified-distributor agreement aimed at contract-producing pneumococcal vaccine in Kazakhstan.',
    },
    {
      name: 'Sanofi Kazakhstan',
      hq: 'Almaty',
      type: 'MNC',
      focus: 'Vaccines, diabetes, consumer health and established brands',
      notes: 'Among the largest originator suppliers to SK-Pharmacy in recent unified-distributor tables, with Hexaxim a high-visibility public SKU.',
    },
    {
      name: 'Novartis Kazakhstan',
      hq: 'Almaty',
      type: 'MNC',
      focus: 'Cardiovascular, oncology and immunology originators',
      notes: 'Specialty affiliate on the ministry’s localisation-talk list; public volume still depends on a SK-Pharmacy award rather than on pharmacy detailing alone.',
    },
    {
      name: 'Roche Kazakhstan',
      hq: 'Almaty',
      type: 'MNC',
      focus: 'Oncology and diagnostics; long-term contract-manufacturing deals',
      notes: 'Signed unified-distributor long-term contracts for original medicines with Nobel AFF as a local site — the template other biologics firms now study.',
    },
    {
      name: 'Bayer Kazakhstan',
      hq: 'Almaty',
      type: 'MNC',
      focus: 'Cardiology, women’s health, consumer health and hospital products',
      notes: 'Affiliate with a ministry memorandum and a mixed retail-plus-tender book, useful as a mid-specialty originator reference.',
    },
    {
      name: 'STADA (Nizhpharm)',
      hq: 'Almaty',
      type: 'MNC',
      focus: 'Branded generics that Proxima has placed in the top retail tier',
      notes: 'European generics group whose Nizhpharm-origin brands still appear near the top of Kazakh retail share tables beside Santo and Sanofi.',
    },
    {
      name: 'Gedeon Richter Kazakhstan',
      hq: 'Almaty',
      type: 'Regional',
      focus: 'Women’s health, CNS and branded generics from a Central European group',
      notes: 'Hungarian group with a long Central Asian presence; a regional account rather than a global-oncology account.',
    },
    {
      name: 'Social Health Insurance Fund (OSMS)',
      hq: 'Astana',
      type: 'Government',
      focus: 'Compulsory insurance pot that SK-Pharmacy supply is paid from',
      notes: 'Recorded 15.9 million insured people in 2024 and paid more than KZT 1.1 trillion of OSMS care; the payer sitting behind the unified distributor.',
    },
  ],
  categoryBlurbs: {
    local:
      'Kazakh plants in Almaty, Shymkent and Pavlodar — Nobel AFF, Romat, Kyzyl May, VIVA Pharm — that live on SK-Pharmacy long-term contracts and on the retail audit.',
    mnc:
      'Almaty affiliates of Pfizer, Sanofi, Novartis, Roche, Bayer and STADA, now being pulled into contract manufacturing if they want public volume.',
    regional:
      'Polpharma’s Santo, Turkey’s Abdi Ibrahim Global Pharm, Kelun-Kazpharm and Gedeon Richter, which treat Kazakhstan as a manufacturing and EAEU platform.',
    trade:
      'The ministry, NCEM, the OSMS fund and SK-Pharmacy, whose combined registration, insurance and monopoly-wholesale decisions define the public channel.',
  },
  growthDrivers: [
    {
      title: 'SK-Pharmacy long-term contracts as industrial policy',
      desc: 'Ten-year awards to domestic plants are how the state is trying to lift the local share of public medicines toward 50%. A manufacturer without such a contract is a retail-only story; an originator without a local site is increasingly an import-only story.',
    },
    {
      title: 'OSMS on top of the guaranteed package',
      desc: 'Fifteen point nine million people were recorded as insured in 2024, and OSMS paid more than KZT 1.1 trillion of care. That insured hospital demand is what makes a unified-distributor lot valuable, even though coverage percentages still move around in official statements.',
    },
    {
      title: 'EAEU dossiers as a regional option',
      desc: 'A common-market file can, in principle, open Russia and the rest of the union from an Astana or Almaty base. Clocks and national follow-up still differ, so teams treat EAEU as a parallel path rather than as a substitute for a Kazakh registration.',
    },
    {
      title: 'Originator contract manufacturing on Kazakh lines',
      desc: 'Pfizer’s vaccine memorandum and Roche’s long-term deal with Nobel AFF are the templates. Localisation is no longer only a generics story; specialty firms are being asked to put a Kazakh plant on the supply map if they want SK-Pharmacy volume.',
    },
  ],
  faq: [
    {
      q: 'Which pharmaceutical companies matter in Kazakhstan?',
      a: 'On the domestic side, Santo (Chimpharm), Nobel AFF, Abdi Ibrahim Global Pharm, Kelun-Kazpharm, Romat and VIVA Pharm recur in retail audits and in SK-Pharmacy contractor lists. Sanofi, STADA, Pfizer, Roche, Novartis and Bayer are the originator names that appear in both channels. SK-Pharmacy itself is the public-channel gate.',
    },
    {
      q: 'Can a company sell to public hospitals without SK-Pharmacy?',
      a: 'In practice, no. The unified distributor is the legal single wholesaler for GOBMP and OSMS hospital supply. Private pharmacies are a separate retail world; public wards are not.',
    },
    {
      q: 'Is Abdi Ibrahim actually present in Kazakhstan?',
      a: 'Yes. The Turkish group operates as Abdi Ibrahim Global Pharm on the former Global Pharm industrial base in the Almaty area, and a 2026 government investment agreement covers a broader multi-profile plant.',
    },
    {
      q: 'What does EAEU registration change?',
      a: 'It offers a union-level dossier that can support supply into other EAEU states. It does not replace a Kazakh expert review in every case, and it does not replace a SK-Pharmacy award if the target channel is a public hospital.',
    },
    {
      q: 'How does BioNixus research pharmaceutical companies in Kazakhstan?',
      a: 'SK-Pharmacy award and long-term-contract files are mapped by molecule; NCEM and EAEU clock interviews sit with regulatory heads in Almaty and Astana; retail pharmacy audits estimate Santo versus STADA versus originator share; hospital pharmacists are asked what the unified distributor actually delivered last quarter.',
    },
    {
      q: 'Are the firms below sorted by turnover in Kazakhstan?',
      a: 'Do not read the table as a size order. Entries were chosen because they keep appearing in SK-Pharmacy awards, EAEU dossiers and BioNixus Almaty and Astana interviews, not because one outsold another.',
    },
  ],
  regulatorSource: {
    name: 'Ministry of Health of the Republic of Kazakhstan — Committee for Medical and Pharmaceutical Control / National Center for Expertise of Medicines',
    url: 'https://www.gov.kz/memleket/entities/dsm',
    asOf: '2026-09-04',
  },
  sources: [
    'Proxima Research market figures for 2024 as reported by TAdviser (USD 2.53bn; retail / hospital split)',
    'SK-Pharmacy public reports on long-term contracts, localisation share and originator memoranda, 2023–2026',
    'Social Health Insurance Fund 2024 results: 15.9 million OSMS insured; Ministry of Health statements on the 50% domestic-supply target',
    'BioNixus Kazakhstan hospital, retail-pharmacy and registration fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'SK-Pharmacy award and ten-year-contract reconstructions by molecule, separating domestic-plant lots from imported originator lots, for Almaty and Astana hospital catchments.',
    'NCEM versus EAEU dossier-clock interviews with regulatory heads in Almaty and Astana, used to sequence a dual-track registration plan.',
    'Retail pharmacy purchase-record checks in Almaty and Astana estimating Santo, Nobel, STADA and originator share in cardiometabolic and anti-infective baskets.',
    'Hospital-pharmacist interviews on what the unified distributor delivered last quarter versus what the formulary listed — the gap that decides whether a “win” was real.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
