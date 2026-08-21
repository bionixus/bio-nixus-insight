import { useLanguage } from '@/contexts/LanguageContext';

const COVERAGE_MAP_SRC = '/images/bionixus-global-coverage-map.webp';
const COVERAGE_MAP_SRCSET =
  '/images/bionixus-global-coverage-map-800.webp 800w, /images/bionixus-global-coverage-map.webp 1280w';

/** Branded office-footprint graphic — US HQ, London, Cairo, Riyadh, Dubai, Kuwait City, São Paulo. */
export function TrustCoverageMap() {
  const { t } = useLanguage();
  const copy = t.ui.coverageMap;

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-[#06101F]">
      <img
        src={COVERAGE_MAP_SRC}
        srcSet={COVERAGE_MAP_SRCSET}
        sizes="(max-width: 1024px) 100vw, 33vw"
        alt={copy.alt}
        width={1280}
        height={854}
        loading="lazy"
        decoding="async"
        className="w-full h-auto"
      />
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-white/60 md:px-5">
        {copy.caption}
      </figcaption>
    </figure>
  );
}
