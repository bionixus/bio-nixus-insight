import { Clock3, Building2, Activity, ShieldCheck } from 'lucide-react';
import { MARKET_INTELLIGENCE } from '@/data/marketIntelligenceData';
import type { HospitalEntry } from '@/data/marketIntelligence/types';
import {
  ReportSectionVisual,
  ReportTherapySpendChart,
} from '@/components/report-premium';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type MarketIntelligenceSectionsProps = {
  marketSlug: string;
  countryName: string;
  variant?: 'healthcare' | 'medical-devices';
  therapySlug?: string;
};

function hospitalTypeClass(type: HospitalEntry['type']): string {
  if (type === 'public') return 'bg-primary/10 text-primary border-primary/15';
  if (type === 'private') return 'bg-accent/15 text-accent-foreground border-accent/25';
  if (type === 'academic') return 'bg-navy-medium/10 text-navy-medium border-navy-medium/15';
  return 'bg-muted text-foreground border-border';
}

export function MarketIntelligenceSections({
  marketSlug,
  countryName,
  variant = 'healthcare',
  therapySlug,
}: MarketIntelligenceSectionsProps) {
  const data = MARKET_INTELLIGENCE[marketSlug];
  const kpiRef = useScrollReveal<HTMLElement>({ stagger: 60 });
  const regRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const hospitalRef = useScrollReveal<HTMLElement>({ stagger: 70 });
  const timelineRef = useScrollReveal<HTMLElement>({ stagger: 90 });

  if (!data) return null;

  const showTherapySegments = variant === 'healthcare' && (data.therapySegments?.length ?? 0) > 0;

  return (
    <>
      <section className="py-10 md:py-12" id="key-indicators">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] gap-8 items-start mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
                {countryName} Healthcare Market — Key Indicators 2026
              </h2>
              <p className="text-sm text-muted-foreground sr sr-up">
                Macro sizing, payer mix, and procurement signals for commercial and market access teams.
              </p>
            </div>
            <div className="hidden lg:block sr sr-right">
              <ReportSectionVisual
                theme="market"
                marketSlug={marketSlug}
                therapySlug={therapySlug}
                countryName={countryName}
                alt={`${countryName} healthcare market key indicators dashboard with KPI analytics`}
              />
            </div>
          </div>

          <div ref={kpiRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {data.kpis.map((kpi) => (
              <article
                key={kpi.label}
                className="rounded-xl border border-border/70 bg-card p-4 shadow-sm hover-lift sr sr-up"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  {kpi.label}
                </p>
                <p className="text-xl font-display font-bold text-primary tabular-nums">{kpi.value}</p>
                {kpi.note ? (
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{kpi.note}</p>
                ) : null}
              </article>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/70 shadow-sm sr sr-up">
            <table className="w-full text-sm min-w-[560px]">
              <caption className="sr-only">{countryName} healthcare market KPI table 2026</caption>
              <thead>
                <tr className="bg-primary/8 border-b border-border">
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                    Indicator
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                    Value
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.kpis.map((kpi, i) => (
                  <tr key={kpi.label} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-4 py-3 text-muted-foreground">{kpi.label}</td>
                    <td className="px-4 py-3 font-semibold text-foreground tabular-nums">{kpi.value}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{kpi.note ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        ref={regRef}
        className="py-10 md:py-12 rounded-2xl bg-gradient-to-br from-cream to-cream-dark/40 border border-border/50 px-4 md:px-8"
        id="registration-process"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)] gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
                Drug Registration Process in {countryName} — Step by Step
              </h2>
              <p className="text-sm text-muted-foreground mb-8 sr sr-up">
                Regulatory pathway from dossier submission through pricing and formulary listing.
              </p>
              <ol className="space-y-5 timeline-step sr sr-up">
                {data.registrationSteps.map((step) => (
                  <li key={step.step} className="flex gap-4 sr sr-up">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mt-0.5 shadow-md"
                      aria-hidden
                    >
                      {step.step}
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card/90 p-4 flex-1 shadow-sm">
                      <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-accent shrink-0" aria-hidden />
                        {step.action}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-medium text-foreground">Responsible body:</span> {step.body}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1.5">
                        <Clock3 className="w-3.5 h-3.5 shrink-0" aria-hidden />
                        <span>
                          <span className="font-medium text-foreground">Timeline:</span> {step.timeline}
                        </span>
                      </p>
                      {step.notes ? (
                        <p className="text-sm text-muted-foreground italic mt-2">{step.notes}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="hidden lg:block sr sr-right sticky top-28">
              <ReportSectionVisual
                theme="regulatory"
                marketSlug={marketSlug}
                therapySlug={therapySlug}
                countryName={countryName}
                alt={`${countryName} pharmaceutical drug registration and regulatory approval process illustration`}
              />
            </div>
          </div>
        </div>
      </section>

      {showTherapySegments ? (
        <section className="py-10 md:py-12" id="therapy-segments">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
              {countryName} Pharmaceutical Market — Top Therapy Areas by Spend 2026
            </h2>
            <p className="text-sm text-muted-foreground mb-8 sr sr-up">
              Therapy-area spend mix with CAGR bands and demand drivers.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-border/70 bg-card p-4 shadow-sm sr sr-up">
                <ReportTherapySpendChart segments={data.therapySegments ?? []} countryName={countryName} />
              </div>
              <div className="hidden lg:block sr sr-right">
                <ReportSectionVisual
                  theme="therapy"
                  marketSlug={marketSlug}
                  therapySlug={therapySlug}
                  countryName={countryName}
                  alt={`${countryName} top therapy areas pharmaceutical spend breakdown chart`}
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/70 shadow-sm sr sr-up">
              <table className="w-full text-sm min-w-[640px]">
                <caption className="sr-only">{countryName} therapy area spend table 2026</caption>
                <thead>
                  <tr className="bg-primary/8 border-b border-border">
                    <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                      Therapy Area
                    </th>
                    <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                      Market Size 2026
                    </th>
                    <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                      CAGR
                    </th>
                    <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                      Key Drivers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.therapySegments?.map((seg, i) => (
                    <tr key={seg.area} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                      <td className="px-4 py-3 font-medium text-foreground">{seg.area}</td>
                      <td className="px-4 py-3 text-foreground font-semibold tabular-nums">{seg.marketSize2026}</td>
                      <td className="px-4 py-3 text-primary font-semibold tabular-nums">{seg.cagr}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs leading-relaxed">{seg.keyDrivers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section
        ref={hospitalRef}
        className="py-10 md:py-12 rounded-2xl bg-muted/20 border border-border/40 px-4 md:px-8"
        id="hospital-infrastructure"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)] gap-8 items-start mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
                Hospital Infrastructure &amp; Key Procurement Channels
              </h2>
              <p className="text-sm text-muted-foreground sr sr-up">
                Major hospital networks, bed capacity, and procurement entry points for pharma and devices.
              </p>
            </div>
            <div className="hidden lg:block sr sr-right">
              <ReportSectionVisual
                theme="hospital"
                marketSlug={marketSlug}
                therapySlug={therapySlug}
                countryName={countryName}
                alt={`${countryName} hospital infrastructure and healthcare procurement channels illustration`}
              />
            </div>
          </div>

          {data.keyCompanies && data.keyCompanies.length > 0 ? (
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 sr sr-up">
              <span className="font-semibold text-foreground">Leading manufacturers and suppliers: </span>
              {data.keyCompanies.join(', ')}.
            </p>
          ) : null}

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {data.majorHospitals.map((h) => (
              <article
                key={h.name}
                className="rounded-xl border border-border/70 bg-card p-4 shadow-sm hover-lift sr sr-up"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-foreground text-sm leading-tight flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
                    {h.name}
                  </p>
                  <span
                    className={`flex-shrink-0 inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${hospitalTypeClass(h.type)}`}
                  >
                    {h.type}
                  </span>
                </div>
                {h.beds ? <p className="text-xs text-muted-foreground mb-1 ps-6">{h.beds} beds</p> : null}
                <p className="text-xs text-muted-foreground leading-relaxed ps-6">{h.specialties}</p>
              </article>
            ))}
          </div>

          {data.bionixusCapabilities && data.bionixusCapabilities.length > 0 ? (
            <>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 sr sr-up">
                BioNixus {countryName} intelligence capabilities
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 sr sr-up">
                {data.bionixusCapabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex gap-2 text-sm text-muted-foreground leading-relaxed rounded-lg border border-border/50 bg-card/80 px-3 py-2.5"
                  >
                    <Activity className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
                    {cap}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </section>

      <section ref={timelineRef} className="py-10 md:py-12" id="access-timeline">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
            Pharmaceutical Market Access Timeline — {countryName} 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-8 sr sr-up">
            Typical elapsed time from regulatory approval to formulary access and launch readiness.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Regulatory Approval', value: data.accessTimeline.regulatoryApproval, icon: ShieldCheck },
              { label: 'Payer Listing', value: data.accessTimeline.payerListing, icon: Clock3 },
              { label: 'Formulary Access', value: data.accessTimeline.formularyAccess, icon: Building2 },
              { label: 'Total Launch to Access', value: data.accessTimeline.totalLaunchToAccess, icon: Activity },
            ].map((item) => (
              <article
                key={item.label}
                className="relative overflow-hidden rounded-xl border border-border/70 bg-card p-5 text-center shadow-sm hover-lift sr sr-scale-up"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/70 to-primary/30" aria-hidden />
                <item.icon className="w-5 h-5 text-accent mx-auto mb-3" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg md:text-xl font-display font-bold text-primary tabular-nums">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-10 md:py-12 rounded-2xl bg-gradient-to-br from-cream to-background border border-border/50 px-4 md:px-8"
        id="disease-burden"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)] gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 sr sr-up sr-line">
                Disease Burden — Key Epidemiology
              </h2>
              <p className="text-sm text-muted-foreground mb-6 sr sr-up">
                Population health signals shaping therapy demand and access prioritization.
              </p>
              <div className="space-y-4">
                {data.epidemiology.map((ep) => (
                  <article
                    key={ep.condition}
                    className="rounded-xl border border-border/70 bg-card p-5 flex gap-4 shadow-sm hover-lift sr sr-up"
                  >
                    <div className="flex-shrink-0 w-1.5 rounded-full bg-gradient-to-b from-accent to-primary self-stretch" aria-hidden />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{ep.condition}</p>
                      <p className="text-muted-foreground text-sm mb-1">{ep.stat}</p>
                      <p className="text-xs text-muted-foreground italic">Source: {ep.source}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="hidden lg:block sr sr-right sticky top-28">
              <ReportSectionVisual
                theme="epidemiology"
                marketSlug={marketSlug}
                therapySlug={therapySlug}
                countryName={countryName}
                alt={`${countryName} disease burden and epidemiology population health visualization`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
