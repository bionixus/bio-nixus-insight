import { Link } from 'react-router-dom';

type ReferenceConversionBandProps = {
  title: string;
  body: string;
  /** Optional context shown above CTA buttons */
  contextLine?: string;
};

/**
 * Inline conversion strip for long-form reference pages — pairs with footer CTASection.
 */
export function ReferenceConversionBand({ title, body, contextLine }: ReferenceConversionBandProps) {
  return (
    <aside
      aria-label="Contact BioNixus"
      className="relative overflow-hidden rounded-2xl border border-accent/35 bg-gradient-to-br from-card via-card to-muted/45 p-6 shadow-[0_26px_64px_-42px_rgba(15,40,72,0.52)] md:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/14 blur-[80px]"
      />
      <div className="relative space-y-4">
        <h3 className="text-xl font-display font-semibold tracking-tight text-foreground md:text-2xl">{title}</h3>
        <p className="leading-relaxed text-muted-foreground md:text-[1.05rem]">{body}</p>
        {contextLine ? (
          <p className="text-sm font-medium text-foreground">{contextLine}</p>
        ) : null}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/92"
          >
            Request a confidential proposal
          </Link>
          <a
            href="mailto:admin@bionixus.com?subject=Healthcare%20market%20research%20consultation"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Email the BioNixus team
          </a>
          <a
            href="tel:+447727666682"
            className="inline-flex items-center justify-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Call +44 7727 666682
          </a>
        </div>
      </div>
    </aside>
  );
}
