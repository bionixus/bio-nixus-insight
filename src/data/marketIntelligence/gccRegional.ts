import type { MarketIntelligence } from './types';

export const gccRegionalMarketIntelligence: Record<string, MarketIntelligence> = {
  gcc: {
    slug: 'gcc',
    country: 'GCC',
    kpis: [
      {
        label: 'Combined population (6 member states)',
        value: '~62 million (2026)',
        note: 'Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman',
      },
      {
        label: 'Combined pharmaceutical market 2026',
        value: 'USD 18–22 billion',
        note: 'BioNixus estimate; Saudi Arabia ~45% of GCC pharma spend',
      },
      {
        label: 'Combined medical devices market 2026',
        value: 'USD 8–10 billion',
        note: 'BioNixus estimate',
      },
      {
        label: 'Saudi Arabia pharmaceutical market 2026',
        value: 'USD 8.5–9.5 billion',
        note: 'Largest GCC market',
      },
      {
        label: 'UAE pharmaceutical market 2026',
        value: 'USD 3.8–4.5 billion',
        note: 'Second-largest GCC market',
      },
      {
        label: 'Key regulators',
        value: 'SFDA, MOHAP, MOPH, NHRA, MOH Kuwait/Oman/Bahrain',
        note: 'Gulf Health Council harmonisation dialogues ongoing',
      },
      {
        label: 'Mandatory health insurance',
        value: 'UAE (2014 Dubai, 2007 Abu Dhabi), KSA (non-nationals 2006+)',
        note: 'Expanding private payer channels',
      },
    ],
    registrationSteps: [
      {
        step: 1,
        action: 'National marketing authorisation (SFDA, MOHAP, MOPH, NHRA, or MOH)',
        body: 'Country-specific regulatory authority',
        timeline: '12–30 months by country and product class',
        notes:
          'GCC states retain sovereign MA processes; Gulf Health Council harmonisation does not replace national dossiers',
      },
      {
        step: 2,
        action: 'Federal/emirate or national price approval',
        body: 'SFDA Pricing, MOHAP Pricing Committee, MOPH National Drug Committee, etc.',
        timeline: '2–6 months post-technical clearance',
        notes: 'Reference pricing baskets differ by member state',
      },
      {
        step: 3,
        action: 'Centralised procurement formulary submission',
        body: 'NUPCO (KSA), HMC (Qatar), CMS (Kuwait), MOH tenders (Bahrain, Oman)',
        timeline: '3–12 months post-MA',
        notes: 'INN-based tendering standard in Saudi Arabia and Qatar',
      },
      {
        step: 4,
        action: 'Private payer and hospital formulary listing',
        body: 'CCHI insurers, Daman, AXA Gulf, private hospital P&T committees',
        timeline: '2–6 months',
        notes: 'Parallel track essential for UAE dual-emirate launches',
      },
      {
        step: 5,
        action: 'Commercial launch across GCC accounts',
        body: '—',
        timeline: '—',
        notes:
          'BioNixus recommends parallel SFDA + MOHAP filings for simultaneous KSA and UAE access',
      },
    ],
    therapySegments: [
      {
        area: 'Oncology',
        marketSize2026: 'USD 3.5–4.2B (GCC combined)',
        cagr: '11–12% CAGR',
        keyDrivers:
          'KFSHRC, HMC NCCCR, Cleveland Clinic Abu Dhabi, Sidra Medicine CAR-T and genomics programmes',
      },
      {
        area: 'Diabetes & Metabolic',
        marketSize2026: 'USD 3.0–3.6B (GCC combined)',
        cagr: '13–14% CAGR',
        keyDrivers:
          'Kuwait 23.1%, UAE 19.3%, Saudi Arabia 18.4% T2DM prevalence (IDF Diabetes Atlas 2023); GLP-1 demand surge',
      },
      {
        area: 'Cardiovascular',
        marketSize2026: 'USD 2.8–3.4B (GCC combined)',
        cagr: '10–11% CAGR',
        keyDrivers: 'CVD 28–38% of mortality by country; NOACs and SGLT-2 cardiac indications',
      },
      {
        area: 'Immunology & Biologics',
        marketSize2026: 'USD 2.2–2.8B (GCC combined)',
        cagr: '11% CAGR',
        keyDrivers: 'Adalimumab biosimilar NUPCO tenders reshaping net pricing',
      },
      {
        area: 'Respiratory',
        marketSize2026: 'USD 1.4–1.8B (GCC combined)',
        cagr: '9% CAGR',
        keyDrivers: 'Hajj seasonal burden, asthma biologics, GOLD triple therapy uptake',
      },
    ],
    majorHospitals: [
      {
        name: 'King Faisal Specialist & Research Hospital (KFSHRC) — Riyadh',
        type: 'semi-government',
        beds: '1,200 beds',
        specialties: 'Oncology, transplant, CAR-T — Saudi Arabia reference',
      },
      {
        name: 'Hamad Medical Corporation (HMC) — Qatar',
        type: 'public',
        beds: 'Multi-site',
        specialties: 'NCCCR oncology, Heart Hospital, national tender anchor',
      },
      {
        name: 'Cleveland Clinic Abu Dhabi',
        type: 'private',
        beds: '364 beds',
        specialties: 'Oncology, cardiology, neurology — UAE premium hub',
      },
      {
        name: 'Sidra Medicine — Qatar',
        type: 'semi-government',
        beds: '400 beds',
        specialties: "Paediatrics, genomics, women's health",
      },
      {
        name: 'Salmaniya Medical Complex (SMC) — Bahrain',
        type: 'public',
        beds: '1,200 beds',
        specialties: 'Main Bahrain tertiary; oncology, cardiology',
      },
      {
        name: 'Royal Hospital Muscat — Oman',
        type: 'public',
        beds: '600 beds',
        specialties: 'Oman national referral; oncology, cardiology',
      },
    ],
    keyCompanies: [
      'Pfizer',
      'Roche',
      'Novartis',
      'AstraZeneca',
      'MSD (Merck)',
      'Sanofi',
      'AbbVie',
      'Novo Nordisk',
      'Eli Lilly',
      'Johnson & Johnson',
      'GSK',
      'Boehringer Ingelheim',
    ],
    accessTimeline: {
      regulatoryApproval: '12–36 months (country-dependent)',
      payerListing: '3–12 months post-approval',
      formularyAccess: '3–9 months post-listing',
      totalLaunchToAccess: '18–54 months',
    },
    epidemiology: [
      {
        condition: 'Type 2 Diabetes (GCC average)',
        stat: 'Kuwait 23.1%, UAE 19.3%, Saudi Arabia 18.4% adult prevalence — among highest globally',
        source: 'IDF Diabetes Atlas 2023',
      },
      {
        condition: 'Cardiovascular disease',
        stat: 'Leading cause of mortality across all GCC member states (28–38% of deaths)',
        source: 'MOH national statistics 2023–2024',
      },
      {
        condition: 'Cancer',
        stat: '~35,000+ new GCC diagnoses/year combined; breast and colorectal most prevalent',
        source: 'National cancer registries 2023',
      },
    ],
    bionixusCapabilities: [
      'Cross-GCC NUPCO, HMC, and MOHAP tender intelligence with hospital-level consumption analogues',
      'SFDA and MOHAP dossier status tracking for simultaneous multi-country launches',
      'Payer prior-authorisation mining across CCHI, Daman, and SEHATI networks',
      'Oncology infusion suite census across KFSHRC, HMC, Cleveland Clinic Abu Dhabi, and Sidra Medicine',
      'Vision 2030 and UAE digital health procurement pipeline monitoring',
    ],
  },
};
