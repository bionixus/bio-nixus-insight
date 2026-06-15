/**
 * Abstract, ring-framed duotone avatar — a stylised stand-in for a person.
 *
 * Pure SVG, no external images and no real faces. Each avatar is deterministic
 * from its `seed`, so a given audience always renders the same way while the set
 * stays visually varied. Used in the AudienceMosaic and the exit-intent popup.
 */
type DuotoneAvatarProps = {
  seed?: number;
  size?: number;
  className?: string;
  /** Accent ring tone. Defaults to gold. */
  accent?: 'gold' | 'light';
  label?: string;
};

function hashString(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function DuotoneAvatar({
  seed = 1,
  size = 72,
  className,
  accent = 'gold',
  label,
}: DuotoneAvatarProps) {
  const uid = `av${seed}`;
  // Deterministic variation: background lightness and shoulder/head proportions.
  const bgLight = 16 + (seed % 4) * 4; // 16–28% navy
  const headR = 12 + (seed % 3); // 12–14
  const shoulderW = 34 + (seed % 3) * 3; // 34–40
  const ringColor = accent === 'gold' ? 'hsl(38 92% 50%)' : 'hsl(42 95% 65%)';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={className}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`hsl(220 47% ${bgLight + 6}%)`} />
          <stop offset="100%" stopColor={`hsl(220 47% ${bgLight}%)`} />
        </linearGradient>
        <linearGradient id={`${uid}-fg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(42 95% 72%)" />
          <stop offset="100%" stopColor="hsl(38 92% 55%)" />
        </linearGradient>
        <clipPath id={`${uid}-clip`}>
          <circle cx="40" cy="40" r="34" />
        </clipPath>
      </defs>

      {/* Ring frame */}
      <circle cx="40" cy="40" r="38" fill="none" stroke={ringColor} strokeWidth="2.5" strokeOpacity="0.85" />
      <circle cx="40" cy="40" r="34" fill={`url(#${uid}-bg)`} />

      {/* Duotone head-and-shoulders silhouette */}
      <g clipPath={`url(#${uid}-clip)`}>
        <circle cx="40" cy={36 - (headR - 12)} r={headR} fill={`url(#${uid}-fg)`} />
        <path
          d={`M ${40 - shoulderW / 2} 80 Q 40 ${58 - (seed % 3) * 2} ${40 + shoulderW / 2} 80 Z`}
          fill={`url(#${uid}-fg)`}
        />
      </g>
    </svg>
  );
}
