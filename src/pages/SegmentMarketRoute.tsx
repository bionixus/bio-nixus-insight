import { useLocation } from 'react-router-dom';
import SegmentMarketPage from '@/pages/templates/SegmentMarketPage';
import NotFound from '@/pages/NotFound';
import { SEGMENT_MARKET_BY_SLUG } from '@/data/segmentMarketPages';

/**
 * Route entry for every geography × segment market page.
 *
 * All 42 pages share one lazy chunk, which is where the heavy page copy lives —
 * routes.tsx only imports the lightweight slug index. Content is resolved from the
 * pathname rather than a route param because each page has its own literal,
 * exact-match URL (e.g. /saudi-arabia-molecular-diagnostics-market).
 */
export default function SegmentMarketRoute() {
  const { pathname } = useLocation();
  const slug = pathname.split('?')[0].split('#')[0].replace(/^\/+/, '').replace(/\/+$/, '');
  const content = SEGMENT_MARKET_BY_SLUG.get(slug);

  if (!content) return <NotFound />;

  return <SegmentMarketPage content={content} />;
}
