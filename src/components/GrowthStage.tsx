const SHAPES = { orb: 0, funnel: 1, flywheel: 2, bars: 3, globe: 4 } as const;

type GrowthStageProps = {
  /** Which particle figure the growth engine draws here. */
  shape: keyof typeof SHAPES;
  /** Scale of the figure inside the stage box (desktop / phone). */
  size?: number;
  sizeMobile?: number;
  /** Brightness of the figure, 0–1. */
  dim?: number;
  className?: string;
};

/**
 * Decorative placeholder for the WebGL growth engine (alsaadany.com particle figures):
 * GrowthEngineLayer draws the figure where this box sits. Empty and aria-hidden, so it adds no content.
 */
export function GrowthStage({ shape, size = 1, sizeMobile, dim = 1, className = '' }: GrowthStageProps) {
  return (
    <div
      className={`gl-stage ${className}`.trim()}
      data-stage=""
      data-shape={SHAPES[shape]}
      data-size={size}
      data-size-m={sizeMobile ?? size}
      data-dim={dim}
      aria-hidden="true"
    />
  );
}
