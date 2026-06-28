import { getLocalizedHomeMedia } from '@/data/localizedHomeMedia';
import { MediaVisualBriefing } from '@/components/media/MediaVisualBriefing';
import { useLanguage } from '@/contexts/LanguageContext';

/** Homepage visual briefing figures (below overview video). */
export function HomeExplainerSection() {
  const { language, t } = useLanguage();
  const media = getLocalizedHomeMedia(language, t.homePage);
  if (!media?.visualBriefing) return null;

  return (
    <MediaVisualBriefing
      heading={media.visualBriefing.heading}
      figures={media.visualBriefing.figures}
    />
  );
}
