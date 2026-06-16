import GccSegmentMarketPage from './GccSegmentMarketPage';
import { GCC_SEGMENT_CONTENT } from '@/data/gccSegmentMarketContent';

export default function GccGenericInjectablesMarket() {
  return <GccSegmentMarketPage content={GCC_SEGMENT_CONTENT['gcc-generic-injectables-market']} />;
}
