import { useEffect, useRef } from 'react';
import type { HeroVideoConfig } from '@/data/mediaAssets';

type HeroBackgroundVideoProps = {
  config: HeroVideoConfig;
};

/** Full-bleed muted hero background — respects prefers-reduced-motion. */
export function HeroBackgroundVideo({ config }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (mq.matches) {
        video.pause();
        video.removeAttribute('autoplay');
      } else {
        void video.play().catch(() => {
          /* autoplay blocked — poster remains visible */
        });
      }
    };

    syncPlayback();
    mq.addEventListener('change', syncPlayback);
    return () => mq.removeEventListener('change', syncPlayback);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={config.poster}
      >
        <source src={config.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/92 via-navy-medium/88 to-primary/85" />
      <div className="absolute inset-0 bg-navy-deep/30" />
    </div>
  );
}
