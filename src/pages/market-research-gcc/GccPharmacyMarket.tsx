import GccSegmentMarketPage from './GccSegmentMarketPage';
import { GCC_SEGMENT_CONTENT } from '@/data/gccSegmentMarketContent';

export default function GccPharmacyMarket() {
  return <GccSegmentMarketPage content={GCC_SEGMENT_CONTENT['gcc-pharmacy-market']} />;
}
