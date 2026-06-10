export interface MarketKPI {
  label: string;
  value: string;
  note?: string;
}

export interface RegulatoryStep {
  step: number;
  action: string;
  body: string;
  timeline: string;
  notes: string;
}

export interface TherapySegment {
  area: string;
  marketSize2026: string;
  cagr: string;
  keyDrivers: string;
}

export interface HospitalEntry {
  name: string;
  type: 'public' | 'private' | 'semi-government' | 'academic';
  beds?: string;
  specialties: string;
}

export interface MarketIntelligence {
  slug: string;
  country: string;
  kpis: MarketKPI[];
  registrationSteps: RegulatoryStep[];
  therapySegments?: TherapySegment[];
  majorHospitals: HospitalEntry[];
  keyCompanies?: string[];
  accessTimeline: {
    regulatoryApproval: string;
    payerListing: string;
    formularyAccess: string;
    totalLaunchToAccess: string;
  };
  epidemiology: Array<{ condition: string; stat: string; source: string }>;
  bionixusCapabilities?: string[];
}

export interface TherapyDrugClass {
  className: string;
  examples: string;
  mechanismBrief: string;
  gccStatus: string;
}

export interface TherapyAreaEnrichment {
  keyDrugClasses: TherapyDrugClass[];
  epidemiologyHighlights: string;
  accessChallenges: string[];
}
