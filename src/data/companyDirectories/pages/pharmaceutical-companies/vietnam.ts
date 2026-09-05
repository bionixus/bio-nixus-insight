import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesVietnam: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'vietnam',
  metaDescription:
    'Pharmaceutical companies in Vietnam: DHG, Traphaco, Imexpharm, Pymepharco, Sanofi, Pfizer, Roche, AstraZeneca, DAV and VSS — BHYT tenders, channels.',
  introLead:
    'Vietnam has become one of Asia’s fastest-expanding medicine markets, with the Drug Administration of Vietnam tracking 6–8% annual growth and independent estimates placing 2024–2025 sales near eight billion dollars as the country moves toward an eight-billion-dollar DAV target for 2026.',
  introRest:
    'Domestic plants now cover roughly three fifths of unit demand and a little under half of value, so imported originators and high-tech injectables still set the price ceiling in hospitals while listed Mekong Delta and Hanoi manufacturers fight for the reimbursed oral-solid majority. Circulation licences sit with the Drug Administration of Vietnam under the Ministry of Health; without a DAV số đăng ký a pack cannot legally enter a hospital bid or a retail pharmacy. Payment for most inpatient and many outpatient scripts then runs through Vietnam Social Security, whose provincial bidding rounds convert the national essential-medicine list into awarded volumes for DHG, Traphaco, Imexpharm, Pymepharco and a long tail of smaller HOSE names. Parallel to that public spine, Sanofi’s historic Ho Chi Minh City affiliate, Stada’s Stellapharm campus in Binh Duong, and the two ASEAN logistics majors DKSH and Zuellig move specialty and consumer lines into private hospitals and the Long Chau, Pharmacity and An Khang chains. Sixty-seven firms shipped $312 million of finished medicines and ingredients in 2025, fourth in Southeast Asia, with foreign-invested plants contributing about three quarters of that export value. BioNixus keeps the roster below because these are the licence holders, payers, plants and trade houses that recur when a client asks who actually wins a class in Hanoi, Ho Chi Minh City, Can Tho or Da Nang.',
  stats: [
    { value: '$7.9–8.6bn', label: 'Vietnamese pharmaceutical market value, 2024–2025 (Fortune / IMARC / DAV trajectory)' },
    { value: '~60%', label: 'Share of domestic unit demand met by Vietnamese plants (about 46% by value)' },
    { value: '$312m', label: 'Finished-medicine and ingredient exports in 2025; 67 exporting companies' },
    { value: '6–8%', label: 'DAV-reported annual market growth rate' },
  ],
  channelHeading: 'How a medicine is licensed, bid and dispensed in Vietnam',
  channelBody:
    'A finished pack reaches a Vietnamese patient only after the Drug Administration of Vietnam issues a marketing authorisation and, for a foreign plant, accepts a GMP dossier that is increasingly aligned with PIC/S expectations. The holder of that licence must be a Vietnamese legal entity: a domestic manufacturer, a 100% foreign-owned affiliate such as Sanofi Vietnam, or an importer such as Hoang Duc that registers and then appoints a logistics partner. Once the số đăng ký is live, hospital volume is decided in provincial and central bidding under the Pharmacy Law and the Ministry of Health’s tender circulars. Vietnam Social Security reimburses the winning SKU at the bid price for members of the compulsory social-health-insurance scheme, which now covers the large majority of the population, so a lost VSS lot in Hanoi or Ho Chi Minh City can erase a year’s forecast for an oral antibiotic or a statin. Private hospitals and the fast-growing pharmacy chains buy outside those lots, paying a premium for originator brands, consumer-health SKUs and cold-chain specialty products that DKSH and Zuellig warehouse in temperature-mapped depots. Retail still includes tens of thousands of independent nha thuoc, which listed domestic houses reach with their own medical representatives and van fleets. Local-content and “Make in Vietnam” language in recent industrial strategy documents is nudging multinationals toward toll or equity partnerships at plants that already hold EU or PIC/S GMP, which is why Taisho’s control of DHG, Adamed’s purchase of Pymepharco and Stada’s Binh Duong campus matter as much as any import licence. Pricing of reimbursed molecules is referenced to winning bid history, so a new generic that undercuts the last award can reset the class overnight.',
  companies: [
    {
      name: 'Drug Administration of Vietnam (DAV)',
      hq: 'Hanoi',
      type: 'Government',
      focus: 'Marketing authorisation, GMP inspection, import licences and advertising control',
      notes: 'Cục Quản lý Dược under the Ministry of Health; its số đăng ký, plant inspections and dossier clocks decide when any company in this table may legally sell.',
    },
    {
      name: 'Vietnam Social Security (VSS / BHXH)',
      hq: 'Hanoi',
      type: 'Government',
      focus: 'Compulsory social-health-insurance reimbursement and provincial hospital bidding',
      notes: 'The single payer whose awarded lots determine unit volume for most essential oral solids in public hospitals and district clinics.',
    },
    {
      name: 'DHG Pharmaceutical',
      hq: 'Can Tho',
      type: 'Local',
      focus: 'Branded generics, consumer health and Mekong Delta hospital supply',
      notes: 'HOSE-listed Hau Giang house now controlled by Japan’s Taisho; still the benchmark domestic account for reimbursed oral solids and pharmacy brands such as Hapacol.',
    },
    {
      name: 'Traphaco',
      hq: 'Hanoi',
      type: 'Local',
      focus: 'Herbal medicines, hepatology and branded generics',
      notes: 'Northern listed group whose Boganic and other phytopharmaceuticals sit beside a growing prescription book detailed into Hanoi and Red River Delta hospitals.',
    },
    {
      name: 'Imexpharm',
      hq: 'Cao Lanh',
      type: 'Local',
      focus: 'Beta-lactams, sterile products and export-grade oral solids',
      notes: 'Dong Thap manufacturer with EU-oriented capacity; a frequent winner of antibiotic lots and a reference plant for foreign principals seeking Vietnamese toll production.',
    },
    {
      name: 'Pymepharco',
      hq: 'Tuy Hoa',
      type: 'Regional',
      focus: 'Hospital generics and PIC/S-standard oral and sterile lines',
      notes: 'Phu Yen plant built under Stada and acquired by Poland’s Adamed; used as a regional manufacturing hub as well as a domestic tender vehicle.',
    },
    {
      name: 'Domesco Medical Import Export',
      hq: 'Cao Lanh',
      type: 'Local',
      focus: 'Cardiovascular generics, vitamins and Mekong hospital tenders',
      notes: 'HOSE-listed Dong Thap company whose cardiometabolic and nutrition lines appear repeatedly in provincial VSS awards and southern pharmacy audits.',
    },
    {
      name: 'Mekophar Chemical Pharmaceutical',
      hq: 'Ho Chi Minh City',
      type: 'Local',
      focus: 'Anti-infectives, analgesics and legacy hospital brands',
      notes: 'One of the older Saigon manufacturers, still visible in public-hospital antibiotic and analgesic baskets despite newer Mekong competitors.',
    },
    {
      name: 'OPC Pharmaceutical',
      hq: 'Ho Chi Minh City',
      type: 'Local',
      focus: 'Herbal cough and cold, supplements and pharmacy-detailed lines',
      notes: 'Listed phytopharma specialist whose Hoastin and related brands make it a useful read on self-medication demand in southern retail.',
    },
    {
      name: 'Sanofi Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'MNC',
      focus: 'Vaccines, consumer healthcare, diabetes and established brands',
      notes: 'Longest-standing innovator affiliate with local manufacturing history; a reference account for private-hospital vaccines and pharmacy consumer health.',
    },
    {
      name: 'Stellapharm (Stada Vietnam)',
      hq: 'Binh Duong',
      type: 'MNC',
      focus: 'EU-GMP generics for domestic tenders and export',
      notes: 'German-owned Binh Duong campus that supplies both Vietnamese hospital lots and Stada’s wider Asian book from a PIC/S-standard site.',
    },
    {
      name: 'GSK Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'MNC',
      focus: 'Vaccines, respiratory and specialty care',
      notes: 'Innovator affiliate whose vaccines and respiratory brands are detailed into private hospitals and selected VSS-reimbursed programmes.',
    },
    {
      name: 'DKSH Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'Distributor',
      focus: 'Market access, registration support and nationwide wholesale',
      notes: 'Swiss ASEAN distributor appointed by many principals that lack a full Vietnamese affiliate; covers hospitals, chains and independent pharmacies.',
    },
    {
      name: 'Zuellig Pharma Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'Distributor',
      focus: 'Cold-chain hospital logistics and specialty wholesale',
      notes: 'Regional logistics house used by vaccine and oncology principals that need GDP warehousing from Hanoi to the Mekong.',
    },
    {
      name: 'Hoang Duc Pharmaceutical',
      hq: 'Ho Chi Minh City',
      type: 'Distributor',
      focus: 'Import, registration and marketing of foreign finished goods',
      notes: 'Vietnamese importer-marketer that holds DAV files for overseas principals and then feeds product into hospital and pharmacy trade.',
    },
    {
      name: 'TV.Pharm',
      hq: 'Tra Vinh',
      type: 'Local',
      focus: 'Essential-medicine generics for provincial tenders',
      notes: 'Mekong listed manufacturer whose low-cost oral solids compete for district-hospital lots outside the big four domestic names.',
    },
    {
      name: 'Ha Tay Pharmaceutical (HATAPHAR)',
      hq: 'Hanoi',
      type: 'Local',
      focus: 'Essential generics and hospital injectables for the Red River Delta',
      notes: 'Northern manufacturer that still supplies a large slice of provincial VSS lots around Hanoi, a useful proxy for Red River bid prices.',
    },
    {
      name: 'Pfizer Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'MNC',
      focus: 'Vaccines, anti-infectives, oncology and hospital injectables',
      notes: 'Innovator affiliate whose pneumococcal and hospital lines sit between national immunisation buying and private-hospital self-pay.',
    },
    {
      name: 'Roche Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'MNC',
      focus: 'Oncology, diagnostics and immunology specialty brands',
      notes: 'Specialty affiliate detailed into central cancer hospitals; access work is about VSS listing and sharing deeds, not pharmacy ranging.',
    },
    {
      name: 'AstraZeneca Vietnam',
      hq: 'Ho Chi Minh City',
      type: 'MNC',
      focus: 'Oncology, cardiovascular, respiratory and rare-disease innovators',
      notes: 'Concentrates on class-I hospitals and patient-support programmes while waiting for social insurance to open more oncology codes.',
    },
  ],
  categoryBlurbs: {
    local:
      'HOSE-listed Mekong and Hanoi manufacturers that win the bulk of VSS oral-solid lots and still own the pharmacy brands Vietnamese shoppers ask for by name.',
    mnc:
      'Innovator and European-generic affiliates with Vietnamese plants or commercial offices, concentrated in vaccines, diabetes, respiratory care and export-grade generics.',
    regional:
      'Northeast Asian and Central European groups that bought controlling stakes in Vietnamese plants, using those sites as both a domestic tender vehicle and a regional hub.',
    trade:
      'DAV as licence issuer, Vietnam Social Security as the reimbursing bidder, and the importer-plus-ASEAN-distributor layer that moves foreign packs into hospitals and chains.',
  },
  growthDrivers: [
    {
      title: 'Social-insurance bidding as the volume switch',
      desc: 'Coverage expansion under Vietnam Social Security turns a won provincial lot into guaranteed hospital throughput, which is why domestic generics houses spend more time on bid strategy than on consumer advertising for reimbursed classes.',
    },
    {
      title: 'Foreign equity in Mekong and Binh Duong plants',
      desc: 'Taisho at DHG, Adamed at Pymepharco and Stada at Stellapharm are upgrading PIC/S capacity that can serve both VSS tenders and export dossiers, changing who captures the next wave of toll-manufacturing mandates.',
    },
    {
      title: 'Pharmacy-chain consolidation in the two metros',
      desc: 'Long Chau, Pharmacity and An Khang are centralising OTC and chronic-repeat purchasing in Hanoi and Ho Chi Minh City, so consumer-health and supplement launches now need chain listing as well as independent nha thuoc coverage.',
    },
    {
      title: 'Export book growing from a low base',
      desc: 'Sixty-seven exporters shipped $312 million in 2025, and foreign-invested plants took most of that value, giving EU-GMP Vietnamese sites a second demand engine when domestic bid prices compress.',
    },
  ],
  faq: [
    {
      q: 'Who are the leading medicine manufacturers inside Vietnam?',
      a: 'Among listed domestic houses, DHG in Can Tho, Traphaco in Hanoi, Imexpharm and Domesco in Dong Thap, plus Pymepharco in Phu Yen, appear most often in VSS award files and pharmacy audits. Sanofi Vietnam and Stellapharm are the foreign plants that brand teams treat as the other two poles of the market.',
    },
    {
      q: 'What does the Drug Administration of Vietnam actually decide?',
      a: 'DAV issues and withdraws circulation licences, inspects plants, clears imports, polices advertising and sits on the legal framework for hospital bidding. A molecule without a DAV số đăng ký cannot be reimbursed by Vietnam Social Security or sold in a licensed pharmacy.',
    },
    {
      q: 'How do hospital tenders work under social insurance?',
      a: 'Provincial and central hospitals run competitive bids against the essential-medicine list; Vietnam Social Security then pays the winning supplier at the awarded price for insured patients. Lowest technically compliant bids usually take the lot, which is why unbranded and lightly branded domestic generics dominate public volume.',
    },
    {
      q: 'Can a foreign company sell without a Vietnamese plant?',
      a: 'Yes, if a Vietnamese legal entity holds the DAV licence and a licensed importer or distributor handles GDP logistics. Many originators still appoint Hoang Duc, DKSH or Zuellig rather than build a factory, though industrial-policy language is making toll deals at PIC/S sites more attractive.',
    },
    {
      q: 'What fieldwork does BioNixus run on Vietnamese pharmaceutical companies?',
      a: 'Panels with hospital pharmacists and provincial bid officers in Hanoi, Ho Chi Minh City, Can Tho and Da Nang; purchase-record reads in chain and independent pharmacies for cardiometabolic and antibiotic baskets; reconstruction of VSS award histories by molecule; and plant-quality interviews at Mekong and Binh Duong sites that foreign principals are considering for toll work.',
    },
    {
      q: 'Should readers treat this Vietnamese table as a league list?',
      a: 'Sequence here follows role — regulator, payer, plants, affiliates, trade — not last year’s revenue. Names were chosen because they keep appearing in BioNixus Vietnam projects and on DAV and HOSE records, not because a rank was calculated.',
    },
  ],
  regulatorSource: {
    name: 'Drug Administration of Vietnam (DAV) — registered drug products and licensed pharmaceutical establishments',
    url: 'https://dav.gov.vn',
    asOf: '2026-09-04',
  },
  sources: [
    'Drug Administration of Vietnam statements on market growth, local production share and 2025 export value ($312 million; 67 exporters)',
    'HOSE annual reports and disclosures for DHG Pharmaceutical, Traphaco, Imexpharm, Domesco, Mekophar, OPC and TV.Pharm, 2024–2025',
    'Fortune Business Insights and IMARC Vietnam pharmaceuticals market estimates, 2024–2025; Ministry of Health tender and Pharmacy Law guidance',
    'BioNixus Vietnam hospital-pharmacist, bid-officer and pharmacy fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'VSS lot reconstruction by molecule across Hanoi, Ho Chi Minh City, Da Nang and Can Tho awards, used to size public volume before a generic or biosimilar registration is filed.',
    'Pharmacy purchase audits in Long Chau, Pharmacity and independent nha thuoc for hepatology, cardiometabolic and cough-cold baskets, reconciled against distributor invoices.',
    'Prescriber conversations with endocrinologists and infectious-disease physicians in private hospitals on originator versus winning-bid generic choice when the patient pays out of pocket.',
    'Due-diligence interviews with quality heads at DHG, Imexpharm, Pymepharco and Stellapharm on PIC/S status, spare capacity and willingness to take multinational toll contracts.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
