/** Cairo-hospitals GSC CTR block — synced with BlogPost EGYPT_HEALTHCARE_2026_* overrides. */

export const EGYPT_CAIRO_HOSPITAL_CLUSTERS = [
  {
    name: 'Greater Cairo public tertiary',
    detail:
      'Kasr Al-Ainy (Cairo University), Ain Shams University hospitals, and Nasser Institute — high referral volume for complex cases and teaching-hospital research networks.',
  },
  {
    name: 'Private Cairo hospital groups',
    detail:
      'Saudi German Hospital Cairo, Cleopatra Hospitals Group, Dar Al-Fouad, and As-Salam International — private payer mix, elective procedures, and pharma launch targeting.',
  },
  {
    name: 'New administrative capital corridor',
    detail:
      'Medical City and emerging facilities east of Cairo — infrastructure expansion under Egypt Vision 2030 and universal health insurance (UHI) rollout.',
  },
  {
    name: 'Alexandria & Delta referral spine',
    detail:
      'Alexandria University hospitals and regional MOH facilities feeding Cairo tertiary centres for oncology, cardiology, and rare-disease pathways.',
  },
] as const;

export const EGYPT_HEALTHCARE_2026_CAIRO_FAQ: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: 'What does “Cairo hospitals healthcare 2023–2026” cover in this overview?',
    answer:
      'Cairo hospitals healthcare 2023–2026 is a practical map of where insured and out-of-pocket care concentrates in Egypt: public university tertiary centres (Kasr Al-Ainy, Ain Shams), private groups (Cleopatra, Saudi German, Dar Al-Fouad), and new capital corridor hospitals under UHI expansion. Use it to align EDA-regulated pharma access, hospital formulary decisions, and BioNixus primary HCP research with the clusters that drive national referral volume.',
  },
  {
    question: 'How many Cairo hospital clusters should pharma teams prioritise for Egypt launches?',
    answer:
      'Most launch and access plans start with four clusters: Greater Cairo public tertiary, private hospital groups, the new administrative capital corridor, and Alexandria–Delta referral spine into Cairo oncology and cardiology pathways. Mapping prescribing committees and pharmacy buyers in each cluster prevents overstating retail coverage when hospital tenders and UHI listings decide volume.',
  },
  {
    question: 'Which Cairo hospital systems matter most for pharmaceutical market access?',
    answer:
      'Tertiary public centres (Kasr Al-Ainy, Ain Shams, Nasser Institute) drive high-acuity volumes; private groups (Saudi German, Cleopatra, Dar Al-Fouad) shape branded uptake and payer mix; new capital facilities expand insured catchment under UHI — each needs distinct HCP and hospital-pharmacy evidence.',
  },
  {
    question: 'How does Egypt healthcare policy from 2023 to 2026 affect Cairo hospitals?',
    answer:
      'Universal health insurance expansion, Hayah Karima rural health investment, and EDA pricing reforms shift formulary decisions and hospital procurement. Cairo remains the clinical and regulatory hub where many national tenders and KOL networks concentrate.',
  },
  {
    question: 'Where can I find pharmaceutical companies operating in Egypt?',
    answer:
      'See the BioNixus directory of pharmaceutical companies in Egypt for EDA-registered manufacturers, importers, and MNC affiliates — paired with this Cairo hospital landscape for launch and access planning.',
  },
];
