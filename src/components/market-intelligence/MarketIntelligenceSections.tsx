import { MARKET_INTELLIGENCE } from '@/data/marketIntelligenceData';
import type { HospitalEntry } from '@/data/marketIntelligence/types';

type MarketIntelligenceSectionsProps = {
  marketSlug: string;
  countryName: string;
  variant?: 'healthcare' | 'medical-devices';
};

function hospitalTypeClass(type: HospitalEntry['type']): string {
  if (type === 'public') return 'bg-blue-100 text-blue-800';
  if (type === 'private') return 'bg-green-100 text-green-800';
  if (type === 'academic') return 'bg-purple-100 text-purple-800';
  return 'bg-yellow-100 text-yellow-800';
}

export function MarketIntelligenceSections({
  marketSlug,
  countryName,
  variant = 'healthcare',
}: MarketIntelligenceSectionsProps) {
  const data = MARKET_INTELLIGENCE[marketSlug];
  if (!data) return null;

  const showTherapySegments = variant === 'healthcare' && (data.therapySegments?.length ?? 0) > 0;

  return (
    <>
      <section className="section-padding py-10" id="key-indicators">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            {countryName} Healthcare Market — Key Indicators 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Indicator</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Value</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Note</th>
                </tr>
              </thead>
              <tbody>
                {data.kpis.map((kpi, i) => (
                  <tr key={kpi.label} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="px-4 py-3 text-muted-foreground">{kpi.label}</td>
                    <td className="px-4 py-3 font-semibold text-foreground">{kpi.value}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{kpi.note ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding py-10 bg-cream-dark rounded-xl" id="registration-process">
        <div className="container-wide max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            Drug Registration Process in {countryName} — Step by Step
          </h2>
          <ol className="space-y-6">
            {data.registrationSteps.map((step) => (
              <li key={step.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mt-1">
                  {step.step}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{step.action}</p>
                  <p className="text-sm text-muted-foreground mb-1">
                    <span className="font-medium text-foreground">Responsible body:</span> {step.body}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    <span className="font-medium text-foreground">Timeline:</span> {step.timeline}
                  </p>
                  {step.notes ? (
                    <p className="text-sm text-muted-foreground italic">{step.notes}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {showTherapySegments ? (
        <section className="section-padding py-10" id="therapy-segments">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {countryName} Pharmaceutical Market — Top Therapy Areas by Spend 2026
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Therapy Area</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Market Size 2026</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">CAGR</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Key Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  {data.therapySegments?.map((seg, i) => (
                    <tr key={seg.area} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                      <td className="px-4 py-3 font-medium text-foreground">{seg.area}</td>
                      <td className="px-4 py-3 text-foreground font-semibold">{seg.marketSize2026}</td>
                      <td className="px-4 py-3 text-primary font-semibold">{seg.cagr}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs leading-relaxed">
                        {seg.keyDrivers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {variant === 'medical-devices' && showTherapySegments ? null : null}

      <section className="section-padding py-10 bg-muted/20 rounded-xl" id="hospital-infrastructure">
        <div className="container-wide max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            Hospital Infrastructure &amp; Key Procurement Channels
          </h2>
          {data.keyCompanies && data.keyCompanies.length > 0 ? (
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              <span className="font-semibold text-foreground">Leading manufacturers and suppliers: </span>
              {data.keyCompanies.join(', ')}.
            </p>
          ) : null}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {data.majorHospitals.map((h) => (
              <div key={h.name} className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-foreground text-sm leading-tight">{h.name}</p>
                  <span
                    className={`ml-2 flex-shrink-0 inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${hospitalTypeClass(h.type)}`}
                  >
                    {h.type}
                  </span>
                </div>
                {h.beds ? <p className="text-xs text-muted-foreground mb-1">{h.beds} beds</p> : null}
                <p className="text-xs text-muted-foreground leading-relaxed">{h.specialties}</p>
              </div>
            ))}
          </div>
          {data.bionixusCapabilities && data.bionixusCapabilities.length > 0 ? (
            <>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                BioNixus {countryName} intelligence capabilities
              </h3>
              <ul className="list-disc ps-6 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-primary">
                {data.bionixusCapabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </section>

      <section className="section-padding py-10" id="access-timeline">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            Pharmaceutical Market Access Timeline — {countryName} 2026
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Regulatory Approval', value: data.accessTimeline.regulatoryApproval },
              { label: 'Payer Listing', value: data.accessTimeline.payerListing },
              { label: 'Formulary Access', value: data.accessTimeline.formularyAccess },
              { label: 'Total Launch to Access', value: data.accessTimeline.totalLaunchToAccess },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl border border-border p-5 text-center">
                <p className="text-xs text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg md:text-xl font-display font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-10 bg-cream-dark rounded-xl" id="disease-burden">
        <div className="container-wide max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            Disease Burden — Key Epidemiology
          </h2>
          <div className="space-y-4">
            {data.epidemiology.map((ep) => (
              <div key={ep.condition} className="bg-white rounded-xl border border-border p-5 flex gap-4">
                <div className="flex-shrink-0 w-2 rounded-full bg-primary self-stretch" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{ep.condition}</p>
                  <p className="text-muted-foreground text-sm mb-1">{ep.stat}</p>
                  <p className="text-xs text-muted-foreground italic">Source: {ep.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
