import type { TherapyAreaContent } from '@/data/healthcareReportContent';

type TherapyDrugClassSectionProps = {
  therapy: TherapyAreaContent;
  marketName: string;
  therapyAreaName: string;
};

export function TherapyDrugClassSection({
  therapy,
  marketName,
  therapyAreaName,
}: TherapyDrugClassSectionProps) {
  if (!therapy.keyDrugClasses?.length) return null;

  return (
    <section className="py-12 bg-cream-dark rounded-xl px-4 md:px-6" id="drug-classes">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
          Key {therapyAreaName} Drug Classes in {marketName}
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left px-4 py-3 font-semibold text-foreground">Drug Class</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Key Products (INN + Brand)
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">
                  Mechanism
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  GCC/MENA Access Status
                </th>
              </tr>
            </thead>
            <tbody>
              {therapy.keyDrugClasses.map((dc, i) => (
                <tr key={dc.className} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="px-4 py-3 font-medium text-foreground align-top">{dc.className}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs align-top">{dc.examples}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs align-top hidden md:table-cell">
                    {dc.mechanismBrief}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs align-top">{dc.gccStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {therapy.epidemiologyHighlights ? (
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Epidemiology context: </strong>
            {therapy.epidemiologyHighlights}
          </p>
        ) : null}
        {therapy.accessChallenges && therapy.accessChallenges.length > 0 ? (
          <>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Market Access Challenges — {marketName}
            </h3>
            <ul className="list-disc ps-6 space-y-3 text-muted-foreground leading-relaxed marker:text-primary">
              {therapy.accessChallenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
}
