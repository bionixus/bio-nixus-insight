/** Static SVG coverage map — GCC + Europe desk footprint (no iframe embed). */
export function TrustCoverageMap() {
  return (
    <figure className="rounded-xl border border-border bg-card p-4 md:p-5">
      <svg
        viewBox="0 0 640 360"
        role="img"
        aria-labelledby="coverage-map-title coverage-map-desc"
        className="w-full h-auto"
      >
        <title id="coverage-map-title">BioNixus GCC and Europe research coverage</title>
        <desc id="coverage-map-desc">
          Map highlighting Dubai, Jeddah, Kuwait City, Cairo, London, and European fieldwork coverage for pharmaceutical market research.
        </desc>
        <rect width="640" height="360" rx="12" className="fill-muted/30" />
        <path
          d="M80 180 Q200 120 320 150 T560 170"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="text-primary/40"
        />
        {[
          { x: 420, y: 200, label: 'Dubai' },
          { x: 400, y: 215, label: 'Jeddah' },
          { x: 435, y: 185, label: 'Kuwait City' },
          { x: 390, y: 230, label: 'Cairo' },
          { x: 260, y: 130, label: 'London / EU5' },
        ].map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="6" className="fill-primary" />
            <text
              x={point.x + 10}
              y={point.y + 4}
              fontSize="12"
              className="fill-foreground font-medium"
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-xs text-muted-foreground leading-relaxed">
        Bilingual Arabic–English fieldwork across GCC markets with GDPR-aligned European programs.
      </figcaption>
    </figure>
  );
}
