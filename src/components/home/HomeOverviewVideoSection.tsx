import { getPageMedia } from '@/data/mediaAssets';
import { ProofVideoEmbed } from '@/components/media/ProofVideoEmbed';

/** Homepage overview video — placed directly after the services section. */
export function HomeOverviewVideoSection() {
  const media = getPageMedia('home');
  if (!media?.proofVideo) return null;

  return (
    <ProofVideoEmbed
      config={media.proofVideo}
      className="bg-cream border-y border-border py-12"
    />
  );
}
