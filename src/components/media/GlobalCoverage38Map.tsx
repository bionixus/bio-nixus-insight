/** Global BioNixus coverage map — six continents, regional offices, 38-country field footprint. */

type OfficePin = {
  x: number;
  y: number;
  label: string;
  sublabel?: string;
  kind: 'hq' | 'office';
};

const OFFICES: OfficePin[] = [
  { x: 198, y: 168, label: 'Sheridan, WY', sublabel: 'Global HQ', kind: 'hq' },
  { x: 468, y: 142, label: 'London', sublabel: 'UK / Europe', kind: 'office' },
  { x: 556, y: 198, label: 'Dubai', sublabel: 'GCC hub', kind: 'office' },
  { x: 542, y: 212, label: 'Riyadh', kind: 'office' },
  { x: 534, y: 218, label: 'Jeddah', kind: 'office' },
  { x: 548, y: 192, label: 'Kuwait City', kind: 'office' },
  { x: 518, y: 208, label: 'Cairo', sublabel: 'MENA', kind: 'office' },
];

const COVERAGE_CLUSTERS = [
  { cx: 210, cy: 175, r: 52, label: 'Americas' },
  { cx: 480, cy: 155, r: 58, label: 'Europe & UK' },
  { cx: 545, cy: 205, r: 48, label: 'MENA & GCC' },
  { cx: 620, cy: 190, r: 44, label: 'Eastern Europe & CIS' },
  { cx: 720, cy: 220, r: 50, label: 'South & Southeast Asia' },
  { cx: 780, cy: 280, r: 38, label: 'East Asia & Pacific' },
  { cx: 380, cy: 295, r: 42, label: 'Africa' },
  { cx: 260, cy: 310, r: 36, label: 'Latin America' },
];

type GlobalCoverage38MapProps = {
  variant?: 'sidebar' | 'hero';
  /** Dark glass styling aligned with premium contact hero. */
  premium?: boolean;
  className?: string;
};

export function GlobalCoverage38Map({
  variant = 'sidebar',
  premium = false,
  className = '',
}: GlobalCoverage38MapProps) {
  const isHero = variant === 'hero';
  const dark = isHero;
  const lightPremium = premium && !isHero;

  const figureClass = dark
    ? 'rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-[0_32px_80px_-24px_rgba(0,0,0,0.55)] overflow-hidden'
    : lightPremium
      ? 'rounded-2xl border border-border/70 bg-white overflow-hidden shadow-[0_20px_56px_-20px_rgba(16,28,48,0.12)]'
      : 'rounded-2xl border border-border/80 bg-card overflow-hidden shadow-[0_20px_60px_-24px_rgba(16,28,48,0.12)]';

  const mapBg = dark
    ? 'relative bg-gradient-to-br from-[#0c1b33]/90 via-[#081628] to-[#06101F]'
    : 'relative bg-gradient-to-br from-primary/[0.04] via-background to-muted/30';

  const badgePrimary = dark
    ? 'bg-[#C9A84C] text-[#06101F]'
    : lightPremium
      ? 'bg-[#06101F] text-[#C9A84C] border border-[#C9A84C]/30'
      : 'bg-primary text-primary-foreground';
  const badgeSecondary = dark
    ? 'bg-white/10 border-white/15 text-white/90'
    : 'bg-card/95 border-border text-foreground';

  const continentFill = dark ? '#1a2d4a' : 'currentColor';
  const continentClass = dark ? '' : 'fill-muted/60 stroke-border';
  const continentStroke = dark ? 'rgba(201,168,76,0.15)' : undefined;

  return (
    <figure className={`${figureClass} ${className}`}>
      {dark ? (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" aria-hidden />
      ) : lightPremium ? (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent" aria-hidden />
      ) : (
        <div className="h-0.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" aria-hidden />
      )}
      <div className={mapBg}>
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow-sm ${badgePrimary}`}>
            38 countries
          </span>
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${badgeSecondary}`}>
            6 continents
          </span>
        </div>
        <svg
          viewBox="0 0 960 480"
          role="img"
          aria-labelledby="global-coverage-title global-coverage-desc"
          className="w-full h-auto block"
        >
          <title id="global-coverage-title">BioNixus 38-country global healthcare market research coverage</title>
          <desc id="global-coverage-desc">
            World map showing BioNixus field coverage across the Americas, Europe, Africa, Asia, and Oceania with
            regional offices in Sheridan Wyoming, London, Dubai, Riyadh, Jeddah, Kuwait City, and Cairo.
          </desc>
          {dark ? (
            <defs>
              <radialGradient id="coverageGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
              </radialGradient>
              <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          ) : null}
          <rect width="960" height="480" fill={dark ? 'url(#coverageGlow)' : 'transparent'} />
          <g
            className={continentClass}
            fill={dark ? continentFill : undefined}
            stroke={continentStroke ?? undefined}
            strokeWidth={dark ? 1 : 1}
          >
            <path d="M120 80 L280 70 L320 120 L300 200 L220 240 L140 220 L100 160 Z" />
            <path d="M230 260 L290 250 L310 340 L270 400 L220 380 L210 300 Z" />
            <path d="M430 90 L520 85 L540 130 L520 170 L450 175 L420 140 Z" />
            <path d="M440 200 L520 195 L540 280 L500 360 L440 340 L420 250 Z" />
            <path d="M510 175 L580 170 L590 220 L550 240 L510 230 Z" />
            <path d="M560 90 L820 80 L860 160 L840 260 L680 280 L580 220 L550 150 Z" />
            <path d="M760 300 L860 295 L880 340 L820 370 L750 350 Z" />
          </g>
          {COVERAGE_CLUSTERS.map((cluster) => (
            <g key={cluster.label}>
              <circle
                cx={cluster.cx}
                cy={cluster.cy}
                r={cluster.r}
                fill={dark ? 'rgba(201,168,76,0.06)' : undefined}
                stroke={dark ? 'rgba(201,168,76,0.2)' : undefined}
                className={dark ? '' : 'fill-primary/10 stroke-primary/25'}
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            </g>
          ))}
          <path
            d="M198 168 Q340 100 468 142 Q520 165 556 198"
            fill="none"
            stroke={dark ? 'rgba(201,168,76,0.35)' : 'currentColor'}
            strokeWidth="1.5"
            strokeDasharray="5 4"
            className={dark ? '' : 'text-primary/35'}
          />
          {OFFICES.map((office) => (
            <g key={office.label} filter={dark && office.kind === 'hq' ? 'url(#pinGlow)' : undefined}>
              {office.kind === 'hq' ? (
                <circle cx={office.x} cy={office.y} r={14} fill="rgba(201,168,76,0.15)" />
              ) : null}
              <circle
                cx={office.x}
                cy={office.y}
                r={office.kind === 'hq' ? 8 : 6}
                fill={dark ? (office.kind === 'hq' ? '#C9A84C' : '#0069A3') : undefined}
                stroke={dark ? '#FFFEFB' : undefined}
                className={
                  dark
                    ? ''
                    : office.kind === 'hq'
                      ? 'fill-primary stroke-primary-foreground'
                      : 'fill-primary/90 stroke-background'
                }
                strokeWidth="2"
              />
              <text
                x={office.x + (office.x > 500 ? -10 : 12)}
                y={office.y - 12}
                textAnchor={office.x > 500 ? 'end' : 'start'}
                fontSize="11"
                fill={dark ? 'rgba(255,254,251,0.92)' : undefined}
                className={dark ? '' : 'fill-foreground font-semibold'}
                fontWeight="600"
              >
                {office.label}
              </text>
              {office.sublabel ? (
                <text
                  x={office.x + (office.x > 500 ? -10 : 12)}
                  y={office.y + 2}
                  textAnchor={office.x > 500 ? 'end' : 'start'}
                  fontSize="9"
                  fill={dark ? 'rgba(255,254,251,0.45)' : undefined}
                  className={dark ? '' : 'fill-muted-foreground'}
                >
                  {office.sublabel}
                </text>
              ) : null}
            </g>
          ))}
        </svg>
      </div>
      <figcaption
        className={
          dark
            ? 'px-5 py-4 text-xs leading-relaxed border-t border-white/10 bg-[#06101F]/80 text-white/50'
            : 'px-5 py-4 text-xs text-muted-foreground leading-relaxed border-t border-border bg-card/80'
        }
      >
        <strong className={dark ? 'text-[#C9A84C] font-medium' : 'text-foreground font-medium'}>
          BioNixus 38-location coverage
        </strong>
        {' — '}
        Pharmaceutical and healthcare market research across the Americas, Europe, Africa, Asia, and Oceania.
        Regional offices in Sheridan, London, Dubai, Riyadh, Jeddah, Kuwait City, and Cairo.
      </figcaption>
    </figure>
  );
}

/** @deprecated Use GlobalCoverage38Map */
export function TrustCoverageMap() {
  return <GlobalCoverage38Map variant="sidebar" />;
}
