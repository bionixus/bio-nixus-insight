/**
 * AudienceSection ("Who we reach") — humanises the staging home page with the
 * abstract duotone avatar mosaic, framed around the real respondent audiences
 * BioNixus recruits for primary research.
 */
import useScrollReveal from '@/hooks/useScrollReveal';
import AudienceMosaic from '@/components/visuals/AudienceMosaic';

export default function AudienceSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 80 });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide max-w-5xl">
        <div className="mb-10 text-center">
          <p className="sr sr-up mb-3 text-xs font-semibold uppercase tracking-widest text-gold-warm">
            Who we reach
          </p>
          <h2 className="sr sr-up font-display text-3xl font-semibold text-foreground md:text-4xl">
            The people behind the data
          </h2>
          <p className="sr sr-up mx-auto mt-4 max-w-2xl text-muted-foreground">
            From prescribing physicians and key opinion leaders to patients, payers, pharmacists, and
            everyday consumers — BioNixus recruits and engages the audiences that shape real-world
            decisions across healthcare and consumer markets.
          </p>
        </div>
        <div className="sr sr-up sr-scale rounded-2xl border border-border bg-card p-8 shadow-[0_24px_60px_-30px_rgba(15,25,45,0.45)]">
          <AudienceMosaic />
        </div>
      </div>
    </section>
  );
}
