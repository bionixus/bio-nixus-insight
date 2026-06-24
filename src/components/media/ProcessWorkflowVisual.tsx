type ProcessWorkflowVisualProps = {
  heading: string;
  steps: string[];
};

export function ProcessWorkflowVisual({ heading, steps }: ProcessWorkflowVisualProps) {
  return (
    <section className="section-padding py-8" aria-labelledby="process-workflow-heading">
      <div className="container-wide max-w-6xl mx-auto">
        <h2 id="process-workflow-heading" className="text-2xl font-display font-semibold text-foreground mb-6">
          {heading}
        </h2>
        <figure className="rounded-xl border border-border bg-card p-6 md:p-8">
          <svg
            viewBox="0 0 960 220"
            role="img"
            aria-labelledby="process-workflow-title process-workflow-desc"
            className="w-full h-auto"
          >
            <title id="process-workflow-title">{heading}</title>
            <desc id="process-workflow-desc">
              {steps.join('. ')}
            </desc>
            {steps.map((step, index) => {
              const x = 20 + index * (920 / Math.max(steps.length - 1, 1));
              const isLast = index === steps.length - 1;
              return (
                <g key={step}>
                  {index < steps.length - 1 ? (
                    <line
                      x1={x + 36}
                      y1="110"
                      x2={x + (920 / Math.max(steps.length - 1, 1)) - 36}
                      y2="110"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-border"
                    />
                  ) : null}
                  <circle
                    cx={x}
                    cy="110"
                    r="28"
                    className="fill-primary/10 stroke-primary"
                    strokeWidth="2"
                  />
                  <text
                    x={x}
                    y="116"
                    textAnchor="middle"
                    className="fill-primary text-sm font-semibold"
                    fontSize="14"
                  >
                    {index + 1}
                  </text>
                  <foreignObject x={x - 70} y={isLast ? 150 : 20} width="140" height="70">
                    <p
                      xmlns="http://www.w3.org/1999/xhtml"
                      className="text-[11px] leading-snug text-center text-muted-foreground m-0"
                    >
                      {step}
                    </p>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
          <figcaption className="sr-only">{steps.join(' → ')}</figcaption>
        </figure>
      </div>
    </section>
  );
}
