/** Crawlable depth sections for /market-reports/saudi-arabia-cancer-diagnostics-market-report */

export type EnrichmentTable = {
  headers: string[];
  rows: string[][];
  caption: string;
};

export type EnrichmentSection = {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  table?: EnrichmentTable;
  listItems?: string[];
};

export const SAUDI_CANCER_DIAGNOSTICS_REPORT_ENRICHMENT: EnrichmentSection[] = [
  {
    id: 'saudi-arabia-cancer-diagnostics-market-size-2026',
    title: 'Saudi Arabia cancer diagnostics market size 2026',
    subtitle: 'Hospital and oncology-lab BioNixus scope versus broader published estimates.',
    paragraphs: [
      'The Saudi Arabia cancer diagnostics market is often quoted with conflicting headline numbers because publishers use different scopes. BioNixus sizes the hospital and oncology-laboratory opportunity—IVD, imaging, and biopsy used in oncology pathways—at roughly USD 1.25 billion in 2026, advancing toward about USD 1.75 billion by 2030 at roughly 7% CAGR.',
      'Grand View Research publishes USD 938.4 million in 2023 growing to USD 1,394.7 million by 2030 at 5.8% CAGR. IMARC Group publishes a broader Saudi Arabia cancer diagnostics market of USD 2.1 billion in 2025, reaching USD 4.1 billion by 2034 at 7.70% CAGR. Ken Research cites about USD 1.2 billion in a related framing. Use the table below when reconciling board packs; do not treat mismatched scopes as forecast errors.',
    ],
    table: {
      caption: 'Saudi Arabia cancer diagnostics market size — scope comparison (published estimates)',
      headers: ['Source / scope', 'Reference year', 'Market size', 'Growth band', 'What is included'],
      rows: [
        [
          'BioNixus — hospital + oncology lab',
          '2026',
          '~USD 1.25B',
          '~7% CAGR to ~USD 1.75B by 2030',
          'IVD, imaging, and biopsy used in oncology pathways',
        ],
        [
          'Grand View Research',
          '2023 → 2030',
          'USD 938.4M → USD 1,394.7M',
          '5.8% CAGR',
          'Published Saudi cancer diagnostics outlook (services/instruments/consumables framing)',
        ],
        [
          'IMARC Group — broader market',
          '2025 → 2034',
          'USD 2.1B → USD 4.1B',
          '7.70% CAGR',
          'Wider product, technology, application, and end-user coverage',
        ],
        [
          'Ken Research',
          'Recent framing',
          '~USD 1.2B',
          'Growth cited with screening and technology drivers',
          'Saudi cancer diagnostics market overview',
        ],
      ],
    },
  },
  {
    id: 'market-by-product',
    title: 'Saudi Arabia cancer diagnostics market by product',
    subtitle: 'Consumables versus instruments.',
    paragraphs: [
      'Product mix in the Saudi Arabia cancer diagnostics market splits between recurring consumables—kits, reagents, antibodies, probes—and capital instruments for pathology, imaging, and biopsy. Consumables typically dominate long-run revenue once centres are live; instruments concentrate in Vision 2030 cancer-centre projects and tertiary replacement cycles.',
    ],
    listItems: [
      'Consumables — antibodies, kits and reagents, probes, and related pathology/IVD supplies tied to case volume.',
      'Pathology-based instruments — staining, slide handling, and lab automation supporting IHC and molecular workflows.',
      'Imaging instruments — MRI, CT, PET/CT, mammography, and ultrasound systems for staging and screening.',
      'Biopsy instruments — devices and disposables for tissue acquisition feeding cytology and molecular testing.',
    ],
  },
  {
    id: 'market-by-technology',
    title: 'Saudi Arabia cancer diagnostics market by technology',
    subtitle: 'IVD testing, imaging, and biopsy technique.',
    paragraphs: [
      'Technology segmentation mirrors how tumour boards actually work: molecular and immunoassay IVD for eligibility, imaging for staging and response, and biopsy for tissue diagnosis. Advanced NGS and PET capacity remains hub-concentrated; PCR, IHC, and mammography volumes are more widely distributed across MOH networks.',
    ],
    listItems: [
      'IVD testing — PCR, ISH, IHC, NGS, microarrays, flow cytometry, immunoassays, and related platforms.',
      'Imaging — MRI, CT, PET, mammography, and ultrasound.',
      'Biopsy technique — core needle, fine-needle aspiration, and surgical pathology pathways.',
    ],
  },
  {
    id: 'market-by-application',
    title: 'Saudi Arabia cancer diagnostics market by application',
    subtitle: 'Tumour types that concentrate testing demand.',
    paragraphs: [
      'Application mix follows Saudi cancer-registry patterns and tertiary referral flows. Breast, colorectal, and lung pathways drive substantial imaging and biomarker volumes; melanoma and other solid tumours add specialised molecular demand in hub centres. Haematologic diagnostics concentrate where flow cytometry and specialised pathology exist.',
    ],
    listItems: [
      'Breast cancer — mammography programmes, HER2/IHC/FISH, and expanding NGS in tertiary centres.',
      'Lung cancer — staging CT/PET plus EGFR/ALK/ROS1 and broader NGS panels where available.',
      'Colorectal cancer — screening and staging imaging with MSI and related molecular tests.',
      'Melanoma and other solid tumours — specialised IHC/NGS concentrated in hub centres.',
    ],
  },
  {
    id: 'market-by-end-user',
    title: 'Saudi Arabia cancer diagnostics market by end user',
    subtitle: 'Hospitals and clinics versus diagnostic laboratories.',
    paragraphs: [
      'Hospitals and cancer centres dominate advanced imaging, inpatient pathology, and companion-diagnostic initiation for oncology drugs. Independent and hospital-affiliated diagnostic laboratories capture outbound molecular and specialised assay volume where on-site capacity is thin. Commercial plans should segment end users by whether they buy capital, reagents, or send-out testing.',
    ],
  },
  {
    id: 'sfda-ivd-device-pathway',
    title: 'SFDA pathway for cancer diagnostics',
    subtitle: 'Device and IVD registration versus hospital utilisation.',
    paragraphs: [
      'SFDA regulates medical devices and in-vitro diagnostics used across cancer pathways. Classification, clinical evidence, and labelling expectations differ by product risk and intended use; companion diagnostics linked to oncology therapies must align with the drug’s clinical narrative.',
      'Registration is necessary but not sufficient: hospital lab adoption, accreditation, and NUPCO procurement decide real volumes. Pair this briefing with the SFDA market access strategy for Saudi Arabia when registration sequencing sits on the critical path.',
    ],
  },
  {
    id: 'nupco-cancer-centres',
    title: 'NUPCO procurement and cancer-centre capacity',
    subtitle: 'How awards and Vision 2030 infrastructure convert into demand.',
    paragraphs: [
      'NUPCO capital tenders for imaging and pathology systems and recurring reagent frameworks reshape supplier access across MOH-linked facilities. KFSH&RC and Vision 2030 cancer-centre programmes concentrate PET, NGS, and specialised pathology, so national averages overstate reachable demand for advanced assays.',
      'For launch sequencing on the drug side, see the Saudi Arabia oncology market report; for broader capital equipment context, see the Saudi Arabia medical devices market report.',
    ],
  },
  {
    id: 'companion-dx-gating',
    title: 'Companion diagnostics gating oncology therapy',
    subtitle: 'Why turnaround—not only formulary—sets treated share.',
    paragraphs: [
      'Companion diagnostics such as PD-L1 IHC, MSI, BRCA, EGFR/ALK panels, and broader NGS often gate immuno-oncology and targeted-therapy starts more tightly than formulary listing. Outside Riyadh, Jeddah, and Dammam tertiary corridors, specimen logistics and queue depth shrink eligible treated populations.',
      'BioNixus recommends joint diagnostics–drug critical paths: testing enablement, tumour-board documentation, and centre-level capacity maps belong in the same launch plan as NUPCO and formulary work.',
    ],
  },
];
