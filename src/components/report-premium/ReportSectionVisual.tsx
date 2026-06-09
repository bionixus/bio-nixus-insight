import type { ReportVisualTheme } from '@/components/report-premium/reportVisualThemes';
import { getTherapyAccent, getVisualSeed } from '@/components/report-premium/reportVisualThemes';

type ReportSectionVisualProps = {
  theme: ReportVisualTheme;
  therapySlug?: string;
  marketSlug?: string;
  countryName?: string;
  therapyName?: string;
  className?: string;
  /** Accessible description for screen readers */
  alt: string;
};

export function ReportSectionVisual({
  theme,
  therapySlug,
  marketSlug,
  countryName,
  therapyName,
  className = '',
  alt,
}: ReportSectionVisualProps) {
  const accent = getTherapyAccent(therapySlug);
  const seed = getVisualSeed(marketSlug, therapySlug);
  const variant = seed % 3;
  const label = therapyName ?? countryName ?? 'Market intelligence';

  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-background to-cream shadow-elegant ${className}`.trim()}
      aria-label={alt}
    >
      <svg
        viewBox="0 0 480 320"
        className="w-full h-auto block"
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id={`rp-bg-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220 47% 12%)" stopOpacity="0.04" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id={`rp-accent-${seed}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(38 92% 50%)" />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        <rect width="480" height="320" fill={`url(#rp-bg-${seed})`} />
        <circle cx="400" cy="60" r="90" fill={accent} opacity="0.08" className="float-gentle" />
        <circle cx="70" cy="260" r="60" fill="hsl(38 92% 50%)" opacity="0.1" className="float-gentle-delayed" />

        {theme === 'hero' || theme === 'market' ? (
          <>
            <g transform="translate(48, 52)">
              <rect x="0" y="0" width="384" height="216" rx="16" fill="white" opacity="0.92" stroke="hsl(220 15% 90%)" />
              <text x="24" y="36" fill="hsl(220 47% 15%)" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
                {label} — indexed growth outlook
              </text>
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={`grid-${i}`}
                  x1="24"
                  y1={60 + i * 36}
                  x2="360"
                  y2={60 + i * 36}
                  stroke="hsl(220 15% 92%)"
                  strokeWidth="1"
                />
              ))}
              <polyline
                fill="none"
                stroke={`url(#rp-accent-${seed})`}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={
                  variant === 0
                    ? '24,180 72,168 120,150 168,132 216,118 264,98 312,82 360,68'
                    : variant === 1
                      ? '24,170 72,160 120,145 168,128 216,112 264,95 312,78 360,62'
                      : '24,175 72,162 120,148 168,130 216,115 264,96 312,80 360,70'
                }
                className="report-chart-line"
              />
              <polygon
                fill={accent}
                fillOpacity="0.12"
                points={
                  variant === 0
                    ? '24,180 72,168 120,150 168,132 216,118 264,98 312,82 360,68 360,204 24,204'
                    : variant === 1
                      ? '24,170 72,160 120,145 168,128 216,112 264,95 312,78 360,62 360,204 24,204'
                      : '24,175 72,162 120,148 168,130 216,115 264,96 312,80 360,70 360,204 24,204'
                }
              />
              {[2022, 2024, 2026, 2028, 2030].map((yr, i) => (
                <text
                  key={yr}
                  x={24 + i * 84}
                  y="212"
                  fill="hsl(220 10% 45%)"
                  fontSize="10"
                  fontFamily="Inter, sans-serif"
                >
                  {yr}
                </text>
              ))}
            </g>
          </>
        ) : null}

        {theme === 'regulatory' ? (
          <g transform="translate(56, 48)">
            {[0, 1, 2].map((i) => (
              <g key={`doc-${i}`} transform={`translate(${i * 28}, ${i * 18})`}>
                <rect x="0" y="0" width="200" height="240" rx="12" fill="white" stroke="hsl(220 15% 88%)" />
                <rect x="24" y="36" width="120" height="8" rx="4" fill="hsl(220 15% 90%)" />
                <rect x="24" y="56" width="152" height="6" rx="3" fill="hsl(220 15% 94%)" />
                <rect x="24" y="72" width="140" height="6" rx="3" fill="hsl(220 15% 94%)" />
                <circle cx="168" cy="200" r="28" fill={accent} fillOpacity="0.15" />
                <path
                  d="M156 200 L164 208 L180 188"
                  fill="none"
                  stroke={accent}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            ))}
          </g>
        ) : null}

        {theme === 'hospital' ? (
          <g transform="translate(40, 40)">
            {[0, 1, 2].map((i) => (
              <g key={`hosp-${i}`} transform={`translate(${i * 130}, 0)`}>
                <rect x="0" y="80" width="110" height="160" rx="8" fill="white" stroke="hsl(220 15% 88%)" />
                <rect x="12" y="96" width="86" height="56" rx="4" fill="hsl(220 15% 96%)" />
                <rect x="20" y="168" width="20" height="20" rx="2" fill={accent} fillOpacity="0.35" />
                <rect x="48" y="168" width="20" height="20" rx="2" fill={accent} fillOpacity="0.25" />
                <rect x="76" y="168" width="20" height="20" rx="2" fill={accent} fillOpacity="0.2" />
                <rect x="44" y="204" width="22" height="36" rx="2" fill="hsl(220 47% 15%)" fillOpacity="0.85" />
                <rect x="38" y="56" width="34" height="28" rx="4" fill={accent} />
                <text x="55" y="76" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Inter">
                  +
                </text>
              </g>
            ))}
          </g>
        ) : null}

        {theme === 'therapy' ? (
          <g transform="translate(120, 40)">
            <circle cx="120" cy="120" r="88" fill="none" stroke={accent} strokeWidth="2" strokeOpacity="0.35" />
            <circle cx="120" cy="120" r="56" fill="none" stroke="hsl(38 92% 50%)" strokeWidth="2" strokeOpacity="0.5" />
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = (i / 6) * Math.PI * 2;
              const x = 120 + Math.cos(angle) * 88;
              const y = 120 + Math.sin(angle) * 88;
              return (
                <g key={`node-${i}`}>
                  <line x1="120" y1="120" x2={x} y2={y} stroke={accent} strokeOpacity="0.25" strokeWidth="2" />
                  <circle cx={x} cy={y} r="10" fill="white" stroke={accent} strokeWidth="2" />
                </g>
              );
            })}
            <circle cx="120" cy="120" r="22" fill={`url(#rp-accent-${seed})`} />
            <rect x="48" y="232" width="144" height="36" rx="18" fill="white" stroke="hsl(220 15% 88%)" />
            <text x="120" y="255" textAnchor="middle" fill="hsl(220 47% 15%)" fontSize="11" fontWeight="600" fontFamily="Inter">
              {therapyName ?? 'Therapy area'}
            </text>
          </g>
        ) : null}

        {theme === 'access' ? (
          <g transform="translate(48, 72)">
            {[0, 1, 2, 3].map((i) => (
              <g key={`step-${i}`}>
                <circle cx={24 + i * 96} cy="40" r="20" fill={i === 3 ? accent : 'white'} stroke={accent} strokeWidth="2" />
                <text
                  x={24 + i * 96}
                  y="46"
                  textAnchor="middle"
                  fill={i === 3 ? 'white' : 'hsl(220 47% 15%)'}
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="Inter"
                >
                  {i + 1}
                </text>
                {i < 3 ? (
                  <line x1={44 + i * 96} y1="40" x2={76 + i * 96} y2="40" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />
                ) : null}
                <rect x={-8 + i * 96} y="80" width="64" height="8" rx="4" fill="hsl(220 15% 90%)" />
                <rect x={-8 + i * 96} y="98" width="48" height="6" rx="3" fill="hsl(220 15% 94%)" />
              </g>
            ))}
          </g>
        ) : null}

        {theme === 'field' ? (
          <g transform="translate(60, 56)">
            <rect x="0" y="0" width="360" height="200" rx="16" fill="white" stroke="hsl(220 15% 88%)" />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={`bar-${i}`}
                x={32 + i * 64}
                y={160 - (40 + (seed % 5) * 8 + i * 14)}
                width="36"
                height={40 + (seed % 5) * 8 + i * 14}
                rx="6"
                fill={i % 2 === 0 ? accent : 'hsl(38 92% 50%)'}
                fillOpacity={0.75 - i * 0.08}
                className="report-bar-grow"
                style={{ transformOrigin: `${50 + i * 64}px 160px`, animationDelay: `${i * 0.12}s` }}
              />
            ))}
            <circle cx="300" cy="48" r="24" fill={accent} fillOpacity="0.15" />
            <path d="M288 48 h24 M300 36 v24" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          </g>
        ) : null}

        {theme === 'epidemiology' ? (
          <g transform="translate(48, 48)">
            {Array.from({ length: 48 }).map((_, i) => {
              const col = i % 8;
              const row = Math.floor(i / 8);
              const opacity = 0.15 + ((seed + i) % 6) * 0.12;
              return (
                <circle
                  key={`dot-${i}`}
                  cx={24 + col * 48}
                  cy={24 + row * 36}
                  r={6 + ((seed + i) % 4)}
                  fill={i % 3 === 0 ? accent : 'hsl(38 92% 50%)'}
                  fillOpacity={opacity}
                />
              );
            })}
            <rect x="280" y="180" width="140" height="64" rx="12" fill="white" stroke="hsl(220 15% 88%)" />
            <text x="300" y="208" fill="hsl(220 47% 15%)" fontSize="11" fontWeight="600" fontFamily="Inter">
              Disease burden
            </text>
            <text x="300" y="228" fill="hsl(220 10% 45%)" fontSize="10" fontFamily="Inter">
              Population health signals
            </text>
          </g>
        ) : null}
      </svg>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
