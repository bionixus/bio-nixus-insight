import type { Language } from '@/lib/i18n';
import type { HomePageHardcodedCopy } from '@/lib/homePageHardcoded';
import { PAGE_MEDIA, type PageMediaConfig, SHARED_FIGURES } from '@/data/mediaAssets';

export function getLocalizedHomeMedia(language: Language, copy: HomePageHardcodedCopy): PageMediaConfig {
  const base = PAGE_MEDIA.home;
  if (!base) return {};

  return {
    ...base,
    visualBriefing: base.visualBriefing
      ? {
          heading: copy.visualBriefing.heading,
          figures: [
            {
              ...SHARED_FIGURES.hcpWorkshop,
              alt: copy.visualBriefing.figures[0].alt,
              caption: copy.visualBriefing.figures[0].caption,
            },
            {
              ...SHARED_FIGURES.validationLab,
              alt: copy.visualBriefing.figures[1].alt,
              caption: copy.visualBriefing.figures[1].caption,
            },
          ],
        }
      : undefined,
    proofVideo: base.proofVideo
      ? {
          ...base.proofVideo,
          title: copy.overviewVideo.title,
          description: copy.overviewVideo.description,
          transcript: copy.overviewVideo.transcript,
          fallbackLabel: copy.overviewVideo.fallbackLabel,
        }
      : undefined,
  };
}
