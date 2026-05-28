import type { TherapyAreaContent } from '@/data/healthcareReportContent';
import { ReportSectionVisual } from '@/components/report-premium';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type TherapyDrugClassSectionProps = {
  therapy: TherapyAreaContent;
  marketName: string;
  therapyAreaName: string;
  therapySlug?: string;
  marketSlug?: string;
};

export function TherapyDrugClassSection({
  therapy,
  marketName,
  therapyAreaName,
  therapySlug,
  marketSlug,
}: TherapyDrugClassSectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 70 });

  if (!therapy.keyDrugClasses?.length) return null;

  return (
    <section
      ref={sectionRef}
      className="py-12 rounded-2xl bg-gradient-to-br from-cream-dark to-cream border border-border/50 px-4 md:px-8"
      id="drug-classes"
    >
      <div className="w-full">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(200px,240px)] gap-8 items-start mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground sr sr-up sr-line">
            Key {therapyAreaName} Drug Classes in {marketName}
          </h2>
          <div className="hidden lg:block sr sr-right">
            <ReportSectionVisual
              theme="therapy"
              therapySlug={therapySlug}
              marketSlug={marketSlug}
              therapyName={therapyAreaName}
              alt={`${therapyAreaName} drug classes and mechanism landscape illustration for ${marketName}`}
            />
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border/70 shadow-sm mb-6 sr sr-up">
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
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 sr sr-up">
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
