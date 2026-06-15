/**
 * Static, dependency-free poster for the hero 3D scene.
 *
 * Rendered during SSR, on the server-safe first paint, and whenever WebGL is
 * suppressed (reduced-motion, Save-Data, small screens, or while the lazy
 * three.js chunk is still loading). It mirrors the live hero gradient so the
 * swap to the live WebGL canvas is visually seamless.
 */
export default function SceneFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-primary" />
      {/* Static SVG "analytics constellation" — same motif the WebGL scene animates */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="sceneFallbackGlow" cx="70%" cy="40%" r="60%">
            <stop offset="0%" stopColor="hsl(38 92% 50%)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(38 92% 50%)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill="url(#sceneFallbackGlow)" />
        <g stroke="hsl(42 95% 65%)" strokeOpacity="0.25" strokeWidth="1">
          <line x1="160" y1="140" x2="320" y2="220" />
          <line x1="320" y1="220" x2="480" y2="160" />
          <line x1="480" y1="160" x2="620" y2="280" />
          <line x1="320" y1="220" x2="420" y2="380" />
          <line x1="420" y1="380" x2="600" y2="440" />
          <line x1="160" y1="140" x2="220" y2="340" />
          <line x1="220" y1="340" x2="420" y2="380" />
        </g>
        <g fill="hsl(38 92% 50%)">
          {[
            [160, 140, 4],
            [320, 220, 5],
            [480, 160, 3.5],
            [620, 280, 4.5],
            [420, 380, 5],
            [600, 440, 3.5],
            [220, 340, 4],
          ].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fillOpacity={0.85} />
          ))}
        </g>
        <g fill="hsl(0 0% 100%)" fillOpacity="0.5">
          {[
            [260, 120],
            [540, 300],
            [380, 280],
            [500, 460],
            [180, 420],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={1.6} />
          ))}
        </g>
      </svg>
      {/* Floating orbs mirror the live hero decoration */}
      <div className="absolute right-10 top-1/4 hidden h-72 w-72 rounded-full bg-gold-warm/10 blur-3xl lg:block" />
      <div className="absolute bottom-0 right-0 hidden h-96 w-96 rounded-full bg-white/5 blur-3xl lg:block" />
    </div>
  );
}
