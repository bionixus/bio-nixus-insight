import { getPageMedia } from '@/data/mediaAssets';
import { MediaVisualBriefing } from '@/components/media/MediaVisualBriefing';

/** Homepage visual briefing figures (below overview video). */
export function HomeExplainerSection() {
  const media = getPageMedia('home');
  if (!media?.visualBriefing) return null;

  return (
    <MediaVisualBriefing
      heading={media.visualBriefing.heading}
      figures={media.visualBriefing.figures}
    />
  );
}
