import type { DirectoryPageInput } from '../../types';

export const pharmaceuticalCompaniesArgentina: DirectoryPageInput = {
  entity: 'pharmaceutical-companies',
  countrySlug: 'argentina',
  metaDescription:
    'Pharmaceutical companies in Argentina: Roemmers, Bagó, Elea Phoenix, Raffo, Richmond, Cassará, Pfizer, ANMAT, PAMI and IOMA — plants, payers, reimbursement.',
  introLead:
    'Argentine-owned laboratories still invoice roughly two-thirds of domestic pharmaceutical sales, a share that INDEC’s industry series has held through devaluations, and houses such as Roemmers, Bagó, Elea Phoenix, Raffo and Gador remain the names physicians write first in primary care.',
  introRest:
    'ANMAT, the national medicines, food and medical-technology administration under the Ministry of Health, issues every registro sanitario and inspects plants; without that number a pack cannot be sold, reimbursed or tendered. Demand is then split among PAMI, which covers retirees and is the single largest institutional buyer, IOMA for Buenos Aires provincial employees, the obras sociales that insure formal workers, prepaid medicine firms in Greater Buenos Aires, and a cash retail trade that has learned to reprice weekly when the peso moves. CILFA speaks for the national industry and CAEME for the innovator affiliates; the two lobbies disagree on data exclusivity and import substitution, yet both live with Law 25.649, which obliges physicians to write the generic name. This directory sets out the plants, payers and trade houses a launch team has to brief before choosing a partner, a price band or a detailing plan in Argentina.',
  stats: [
    { value: '~US$7–11bn', label: 'Argentine pharmaceutical market, 2023–2024 (CILFA / IMARC / embassy briefings; peso figures swing with FX)' },
    { value: '~67%', label: 'Share of industry billing from nationally produced medicines (INDEC, 2024 quarters)' },
    { value: '~5m', label: 'PAMI affiliates — the largest single reimbursed medicines population' },
    { value: 'US$860m+', label: 'Pharmaceutical exports, 2024 (CILFA), mainly to Latin American neighbours' },
  ],
  channelHeading: 'ANMAT licences, obras sociales and how packs move after release',
  channelBody:
    'A finished medicine enters commerce only after ANMAT grants a registro and, for locally made product, accepts the plant’s GMP file. Innovator dossiers often travel a longer clock than copies of molecules already on the market, and reliance on FDA or EMA opinions is narrower than in some neighbouring agencies, so affiliates budget an extra year when the active is new to Argentina. Once authorised, the pack is listed with PAMI if the laboratory wants retiree volume: PAMI’s vademecum and its farmácia network decide both the reimbursed price and the substitution rule, and a delisting can erase a chronic-care brand overnight. Obras sociales — union-run funds plus PAMI’s cousin schemes — must cover at least the Plan Médico Obligatorio discount, commonly 40 percent and often 70 percent for chronic therapies, which is why sales forces treat social-security listing as a separate launch from the private prepaid channel. Prepaid firms such as OSDE, Swiss Medical and Galeno negotiate their own formularies and are the usual first home for high-priced specialties. Retail is still fragmented: Droguería del Sud, Rofina and Global Farm feed thousands of independent pharmacies, while Farmacity and a handful of regional chains concentrate OTC facing in the AMBA. Decree 70/2023 and later import-rule changes have shortened some paperwork for finished goods, yet peso scarcity and ANMAT’s inspection calendar remain the binding constraints on when a new SKU actually appears on a shelf in Córdoba or Rosario.',
  companies: [
    {
      name: 'ANMAT (Administración Nacional de Medicamentos, Alimentos y Tecnología Médica)',
      hq: 'Buenos Aires',
      type: 'Government',
      focus: 'Registros sanitarios, plant GMP, labelling and pharmacovigilance',
      notes: 'The authorising body whose dossier clock and inspection diary set the earliest possible launch date for every laboratory in this table.',
    },
    {
      name: 'PAMI (INSSJP)',
      hq: 'Buenos Aires',
      type: 'Government',
      focus: 'Social-security medicines cover for retirees and pensioners',
      notes: 'The dominant reimbursed account: vademecum inclusion, reference prices and pharmacy-network rules decide whether a chronic brand lives or dies in volume.',
    },
    {
      name: 'Ministerio de Salud de la Nación',
      hq: 'Buenos Aires',
      type: 'Government',
      focus: 'National health policy, emergency purchases and the PMO benefit floor',
      notes: 'Writes the obligatory medical plan and runs ministerial buying for vaccines and strategic stock, so it sits beside PAMI as a public counterpart.',
    },
    {
      name: 'IOMA (Instituto de Obra Médico Asistencial)',
      hq: 'La Plata',
      type: 'Government',
      focus: 'Buenos Aires provincial social-security fund for public employees',
      notes: 'A provincial payer large enough that a missed IOMA code can wipe out interior volume even when the PAMI vademecum looks healthy.',
    },
    {
      name: 'Laboratorios Bagó',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Branded prescription lines and a wide Latin American export network',
      notes: 'A family group founded in the 1930s, Bagó still details heavily in cardiology and gastroenterology and runs affiliates from Mexico to the Andean corridor.',
    },
    {
      name: 'Roemmers',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Primary-care brands, anti-infectives and a large domestic plant base',
      notes: 'Frequently the unit leader among Argentine houses; its medical-visit model and obra-social coverage make it the benchmark branded-generic competitor.',
    },
    {
      name: 'Elea Phoenix',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Women’s health, CNS, vaccines and licensed specialty brands',
      notes: 'The Elea–Phoenix combination gives the group both a classic detailing franchise and a biologics/vaccine capability that PAMI and the ministry use.',
    },
    {
      name: 'Laboratorios Raffo',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Cardiometabolic and chronic primary-care brands',
      notes: 'A prescription-heavy house whose share in hypertension and lipids is watched by any multinational entering those classes through the social-security channel.',
    },
    {
      name: 'Gador',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'CNS, women’s health, bone and licensed specialties',
      notes: 'Privately held and export-active, Gador pairs a loyal specialist base with contract work that keeps its plants busy when the peso squeezes imports.',
    },
    {
      name: 'Laboratorios Cassará',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Biotech, interferons, vaccines and respiratory brands',
      notes: 'One of the few Argentine groups with a genuine biologics story; ministry immunisation contracts and hospital tenders are as important as retail.',
    },
    {
      name: 'Laboratorios Richmond',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Antiretrovirals, CNS, cannabis-derived medicines and biologics',
      notes: 'BYMA-listed manufacturer whose HIV franchise and newer biologic bets make it the most capital-markets-visible of the national labs.',
    },
    {
      name: 'Laboratorio Phoenix',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Established prescription brands now marketed inside Elea Phoenix',
      notes: 'Historic Argentine house whose older packs still appear on pharmacy shelves and in obra-social codes after the Elea combination.',
    },
    {
      name: 'Biosidus',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Biosimilars and recombinant biologics (EPO, G-CSF, interferons)',
      notes: 'Early Argentine biosimilar developer still used as a local comparator when hospital committees weigh imported originators against domestic biologics.',
    },
    {
      name: 'Laboratorios Montpellier',
      hq: 'Buenos Aires',
      type: 'Local',
      focus: 'Branded generics across primary care and hospital lines',
      notes: 'A mid-tier national manufacturer that wins obra-social listings where price bands squeeze the larger houses and still details in the interior provinces.',
    },
    {
      name: 'Pfizer Argentina',
      hq: 'Buenos Aires',
      type: 'MNC',
      focus: 'Vaccines, oncology, anti-infectives and hospital specialties',
      notes: 'The affiliate’s value sits in prepaid and ministerial vaccine lots more than in PAMI generics, and its medical team is a reference account for specialty access.',
    },
    {
      name: 'Roche Argentina',
      hq: 'Buenos Aires',
      type: 'MNC',
      focus: 'Oncology, diagnostics and immunology biologics',
      notes: 'Roche’s hospital and diagnostic franchise depends on prepaid formularies and ministerial exceptional-purchase pathways rather than on mass social-security volume.',
    },
    {
      name: 'Novartis Argentina',
      hq: 'Buenos Aires',
      type: 'MNC',
      focus: 'Cardiometabolic, ophthalmology, oncology and established brands',
      notes: 'Keeps a mixed model of innovative launches into prepaid medicine and mature brands that still appear on obra-social lists after local-price resets.',
    },
    {
      name: 'Eurofarma Argentina',
      hq: 'Buenos Aires',
      type: 'Regional',
      focus: 'Brazilian-origin branded generics and consumer-health lines',
      notes: 'The São Paulo group’s Argentine subsidiary competes with national houses on price and visit frequency rather than on originator science.',
    },
    {
      name: 'Droguería del Sud',
      hq: 'Buenos Aires',
      type: 'Distributor',
      focus: 'National wholesale into independent pharmacies and provincial depots',
      notes: 'A required listing for any retail SKU that must reach beyond Farmacity and the AMBA chains; credit terms here often decide whether a launch sticks.',
    },
    {
      name: 'Farmacity',
      hq: 'Buenos Aires',
      type: 'Retailer',
      focus: 'National pharmacy chain for OTC, private label and prescription traffic',
      notes: 'The banner whose planogram decides whether a consumer-health or chronic-repeat pack is easy to find in the AMBA and the larger interior cities.',
    },
  ],
  categoryBlurbs: {
    local:
      'Family-controlled Argentine laboratories that still hold the majority of unit sales, run their own plants, and treat PAMI and obra-social listing as the core commercial event.',
    mnc:
      'Innovator affiliates whose value concentrates in prepaid formularies, ministerial vaccine lots and hospital specialties rather than in high-volume social-security generics.',
    regional:
      'Brazilian and other Latin American groups that open Argentine subsidiaries to fight national houses on branded-generic price and visit frequency.',
    trade:
      'PAMI, IOMA, the ministry, the obras sociales and the national droguerías whose vademecums, credit and depot maps decide whether a registered pack actually moves.',
  },
  growthDrivers: [
    {
      title: 'PAMI vademecum resets after price liberalisation',
      desc: 'Successive PAMI list revisions and reference-price cuts have opened lots that national generics can take from originators, provided the laboratory can finance the receivable and keep the SKU in the farmácia network.',
    },
    {
      title: 'Export plants as a peso hedge',
      desc: 'Bagó, Roemmers, Elea and Cassará already ship several hundred million dollars a year into neighbouring markets; new ANMAT-inspected capacity is being sold as a regional supply node when domestic real prices compress.',
    },
    {
      title: 'Prepaid specialty and oncology demand',
      desc: 'OSDE, Swiss Medical and Galeno continue to list high-cost biologics that PAMI will not fund at originator prices, which is why Roche, Pfizer and Novartis still staff medical teams despite a shrinking mass-market share.',
    },
    {
      title: 'Generic-name prescribing under Law 25.649',
      desc: 'Mandatory INN writing plus pharmacy substitution keeps branded-generic detailing expensive and favours houses that already own the obra-social code and the droguería slot for a given molecule.',
    },
  ],
  sections: [
    {
      heading: 'PAMI, obras sociales and the prepaid split',
      paragraphs: [
        'PAMI’s farmácia network and its vademecum are the first slide in any chronic-care plan: a molecule that is not listed, or that is listed only as an unbranded substitute, will not reach the five million retirees who consume the largest share of cardiovascular, diabetes and CNS packs. The obras sociales add another layer of codes, copayments and delayed payment, and each union fund can prefer a different laboratory for the same INN. Prepaid medicine is smaller in heads but larger in value per script; it is the channel where innovative oncology and immunology brands recover the margin that social security strips out. Mapping those three ledgers separately is more useful than quoting a single national market share.',
        'Collection risk is part of the product story. PAMI and several obras sociales have stretched payment cycles during inflation spikes, which is why mid-sized houses sometimes walk away from a listed SKU that looks attractive on volume. A launch forecast that ignores days-sales-outstanding at the social-security window will overstate cash and understate the working-capital line that Argentine controllers actually watch.',
      ],
    },
    {
      heading: 'CILFA, CAEME and the manufacturing argument',
      paragraphs: [
        'CILFA’s members argue that national plants already satisfy most unit demand and that import substitution should be defended; CAEME’s members argue that weak data protection and slow ANMAT clocks delay innovative launches. Both statements can be true at once. INDEC’s quarterly billing still shows nationally produced medicines above 65 percent of facturación, while the import bill for APIs and high-value biologics continues to rise. For a foreign brand the practical question is not the lobby talking point but whether ANMAT will accept a foreign GMP file, whether a local plant will toll-manufacture, and whether PAMI will list the result at a price that covers the peso cost of goods.',
      ],
    },
  ],
  faq: [
    {
      q: 'Which Argentine laboratories still lead unit sales after the latest devaluations?',
      a: 'Roemmers, Bagó, Elea Phoenix, Raffo, Gador and Cassará recur at the top of audited unit tables, while Pfizer, Roche and Novartis lead in value inside prepaid and hospital specialties. INDEC’s production-versus-import split is a better guide than any single commercial ranking, because social-security prices move with PAMI lists rather than with list-price league tables.',
    },
    {
      q: 'What does ANMAT require before a new pack can be invoiced?',
      a: 'A registro sanitario held by an Argentine legal entity, a plant GMP that ANMAT accepts, and labelling in Spanish that matches the approved dossier. Copies of already-marketed molecules usually move faster than first-in-class actives. There is no automatic FDA-to-ANMAT passport of the kind some neighbouring agencies advertise, so affiliates should not copy a Mexican or Chilean timeline.',
    },
    {
      q: 'Why is PAMI listing treated as a separate launch?',
      a: 'Retiree volume is large enough to make or break a chronic brand, yet PAMI’s price, substitution and pharmacy-network rules differ from those of OSDE or a union obra social. Winning a prepaid listing does not put the pack into PAMI’s farmácia, and a PAMI delisting does not automatically remove it from prepaid formularies.',
    },
    {
      q: 'Do foreign companies need a local plant to compete?',
      a: 'Not for registration, but peso costs, import-licence friction and PAMI preference for nationally produced codes push many affiliates toward toll agreements with Argentine plants. Houses that only import finished goods are more exposed when the central bank rations dollars.',
    },
    {
      q: 'What evidence does BioNixus collect on Argentine laboratories and payers?',
      a: 'Interview panels with PAMI auditors, obra-social pharmacy managers and prepaid medical directors in Buenos Aires, Córdoba and Rosario; reconstruction of vademecum entries and reference prices by INN; plant-capacity notes at national laboratories; and purchase-record cuts at independent pharmacies supplied by Droguería del Sud.',
    },
    {
      q: 'Should the table be read as a sales league?',
      a: 'No. Names appear because they recur in ANMAT records, PAMI lists, CILFA/CAEME membership and BioNixus interviews. Order is editorial, not a statement of revenue, quality or endorsement.',
    },
  ],
  regulatorSource: {
    name: 'ANMAT — registros sanitarios de medicamentos and authorised establishment listings',
    url: 'https://www.argentina.gob.ar/anmat',
    asOf: '2026-09-04',
  },
  sources: [
    'INDEC Industria farmacéutica en la Argentina quarterly facturación series, 2024; CILFA statements on national-industry share and 2024 exports',
    'Indian Embassy Buenos Aires pharmaceutical-sector note, 2024 (ANMAT, PAMI reimbursement, CILFA figures)',
    'IMARC and related 2024–2025 peso-to-dollar market-size estimates; Law 25.649 on generic-name prescribing',
    'BioNixus Argentina PAMI, obra-social and prepaid-channel fieldwork, 2023–2026',
  ],
  fieldNotes: [
    'PAMI vademecum reconstructions by INN: listed brands, reference prices, substitution flags and reported stock-outs across AMBA farmácias.',
    'Obra-social versus prepaid formulary comparisons for cardiometabolic and oncology baskets, including copay bands and days-to-pay at union funds.',
    'Plant-tour notes at national laboratories covering export share, toll-manufacturing spare capacity and ANMAT inspection findings that delay SKU additions.',
    'Independent-pharmacy invoice audits in Buenos Aires, Córdoba and Rosario estimating droguería share and branded-generic penetration after peso spikes.',
  ],
  publishedDate: '2026-09-04',
  modifiedDate: '2026-09-04',
};
