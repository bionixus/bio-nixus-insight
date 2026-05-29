type ReportSourcesBlockProps = {
  sources: string[];
  className?: string;
};

export function ReportSourcesBlock({ sources, className = '' }: ReportSourcesBlockProps) {
  const unique = [...new Set(sources.filter(Boolean))];
  if (unique.length === 0) return null;

  return (
    <aside
      className={`rounded-xl border border-border/60 bg-muted/30 px-4 py-3 ${className}`.trim()}
      aria-label="Data sources"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        Sources & methodology
      </p>
      <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground leading-relaxed">
        {unique.map((source) => (
          <li key={source}>{source}</li>
        ))}
      </ul>
      <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
        Market size ranges and CAGR bands are planning estimates unless tied to a named public dataset.
        Validate regulatory and payer rules against live policy before implementation.
      </p>
    </aside>
  );
}
