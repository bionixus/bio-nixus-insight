import { getLocalizedHomeMedia } from '@/data/localizedHomeMedia';
import { ProofVideoEmbed } from '@/components/media/ProofVideoEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { HOME_OVERVIEW_WATCH_PATH } from '@/data/videos';

/** Homepage overview video — placed directly after the services section. */
export function HomeOverviewVideoSection() {
  const { language, t } = useLanguage();
  const media = getLocalizedHomeMedia(language, t.homePage);
  if (!media?.proofVideo) return null;

  return (
    <ProofVideoEmbed
      config={media.proofVideo}
      className="premium-home-ivory border-y border-[#EDE9E3] py-16 md:py-20"
      watchHref={HOME_OVERVIEW_WATCH_PATH}
      watchLabel="Open full watch page"
    />
  );
}
