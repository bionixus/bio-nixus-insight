import { Navigate } from 'react-router-dom';
import { INDUSTRIES_INSIGHTS_SECTION_PATH } from '@/lib/blog-content-silo';

/** Legacy route — insights index lives as a section on `/bionixus-industries#insights`. */
export default function BionixusIndustriesInsights() {
  return <Navigate to={INDUSTRIES_INSIGHTS_SECTION_PATH} replace />;
}
