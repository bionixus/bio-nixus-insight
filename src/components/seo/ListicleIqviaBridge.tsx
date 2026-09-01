import { Link } from 'react-router-dom';

type ListicleIqviaBridgeProps = {
  countryLabel: string;
};

/**
 * Wave 3–4: IQVIA + Nielsen alternative links on MENA country and healthcare
 * listicles. Does not create new report URLs.
 */
export function ListicleIqviaBridge({ countryLabel }: ListicleIqviaBridgeProps) {
  return (
    <aside
      className="mt-8 rounded-xl border border-border bg-card p-6"
      aria-label={`IQVIA alternative for ${countryLabel}`}
    >
      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
        Already on IQVIA or Nielsen in {countryLabel}?
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        Those subscriptions size the category. They do not give account-level, subregion, or traditional-trade
        data for a brand. BioNixus fills that gap with primary fieldwork — priced by project and country.
      </p>
      <p className="text-sm">
        <Link to="/iqvia-alternative" className="text-primary font-medium hover:underline">
          IQVIA alternative — custom primary research
        </Link>
        {' · '}
        <Link to="/nielsen-alternative" className="text-primary font-medium hover:underline">
          Nielsen alternative — account-level and traditional trade
        </Link>
        {' · '}
        <Link to="/bionixus-vs-iqvia-mena" className="text-primary font-medium hover:underline">
          BioNixus vs IQVIA MENA
        </Link>
      </p>
    </aside>
  );
}
