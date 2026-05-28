import { gccMarketIntelligence } from './marketIntelligence/gcc';
import { menaMarketIntelligence } from './marketIntelligence/mena';
import { europeMarketIntelligence } from './marketIntelligence/europe';
import { americasMarketIntelligence } from './marketIntelligence/americas';
import { asiaPacificMarketIntelligence } from './marketIntelligence/asiaPacific';
import { subSaharanAfricaMarketIntelligence } from './marketIntelligence/subSaharanAfrica';
import { gccRegionalMarketIntelligence } from './marketIntelligence/gccRegional';

import type {
  MarketIntelligence,
  MarketKPI,
  RegulatoryStep,
  TherapySegment,
  HospitalEntry,
  TherapyDrugClass,
  TherapyAreaEnrichment,
} from './marketIntelligence/types';

export type {
  MarketIntelligence,
  MarketKPI,
  RegulatoryStep,
  TherapySegment,
  HospitalEntry,
  TherapyDrugClass,
  TherapyAreaEnrichment,
};

export const MARKET_INTELLIGENCE: Record<string, MarketIntelligence> = {
  ...gccMarketIntelligence,
  ...menaMarketIntelligence,
  ...europeMarketIntelligence,
  ...americasMarketIntelligence,
  ...asiaPacificMarketIntelligence,
  ...subSaharanAfricaMarketIntelligence,
  ...gccRegionalMarketIntelligence,
};
