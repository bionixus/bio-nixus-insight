import { getPageMedia } from '@/data/mediaAssets';
import { ProofVideoEmbed } from '@/components/media/ProofVideoEmbed';
import { MediaVisualBriefing } from '@/components/media/MediaVisualBriefing';

/** Homepage media block: explainer video + visual briefing figures. */
export function HomeExplainerSection() {
  const media = getPageMedia('home');
  if (!media?.proofVideo && !media?.visualBriefing) return null;

  return (
    <>
      {media.proofVideo ? <ProofVideoEmbed config={media.proofVideo} className="bg-muted/20" /> : null}
      {media.visualBriefing ? (
        <MediaVisualBriefing
          heading={media.visualBriefing.heading}
          figures={media.visualBriefing.figures}
        />
      ) : null}
    </>
  );
}
