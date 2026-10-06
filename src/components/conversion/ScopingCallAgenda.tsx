export const SCOPING_CALL_AGENDA = [
  'We pin down the decision your research has to support.',
  'We check feasibility: respondent types, countries and timeline.',
  'You receive a costed proposal within 48 hours of the call.',
] as const;

export function ScopingCallAgenda({ className = '', tone = 'default' }: { className?: string; tone?: 'default' | 'inverse' }) {
  const text = tone === 'inverse' ? 'text-white/75' : 'text-muted-foreground';
  const heading = tone === 'inverse' ? 'text-white' : 'text-foreground';
  const marker = tone === 'inverse' ? 'text-accent' : 'text-primary';
  return (
    <div className={className}>
      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${heading}`}>What happens on the call</p>
      <ul className={`space-y-1 text-sm ${text}`}>
        {SCOPING_CALL_AGENDA.map((item, i) => (
          <li key={item} className="flex gap-2">
            <span className={`font-semibold tabular-nums ${marker}`} aria-hidden>
              {i + 1}.
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
