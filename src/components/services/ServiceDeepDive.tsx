import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import type { ServiceDeepContent } from '@/data/seo/serviceDeepContent';

type ServiceDeepDiveProps = {
  slug: string;
  content: ServiceDeepContent;
  /** Premium pages render on the ivory background; default pages on the standard background. */
  tone?: 'default' | 'premium';
};

/**
 * Server-rendered deep content for /services/{slug}: answer block, market context, approach,
 * use cases, comparison table, scope and pricing, scoping-call CTA, related links and FAQ.
 * FAQ uses <details>/<summary> so it is readable without JavaScript; FAQPage schema is emitted by
 * ServiceDetail via SchemaMarkup.
 */
export function ServiceDeepDive({ slug, content, tone = 'default' }: ServiceDeepDiveProps) {
  const band = tone === 'premium' ? 'bg-[#FFFEFB]' : 'bg-background';
  const altBand = tone === 'premium' ? 'bg-[#F7F3EA]' : 'bg-cream-dark';
  const h2 = 'text-2xl md:text-3xl font-display font-semibold text-foreground mb-6';
  const para = 'text-muted-foreground leading-relaxed text-base md:text-lg';

  return (
    <>
      {/* GeoLLMAnswerBlock renders the question as the section's H2. */}
      <section className={`section-padding py-12 ${band}`}>
        <div className="container-wide max-w-4xl mx-auto">
          <GeoLLMAnswerBlock
            question={content.answer.question}
            answer={content.answer.answer}
            points={content.answer.points}
            summary={content.answer.summary}
          />
        </div>
      </section>

      <section className={`section-padding py-12 ${altBand}`}>
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className={h2}>{content.whyNow.heading}</h2>
          <div className="space-y-4">
            {content.whyNow.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className={para}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-padding py-12 ${band}`}>
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className={h2}>{content.approach.heading}</h2>
          <p className={`${para} mb-8`}>{content.approach.intro}</p>
          <ol className="space-y-6">
            {content.approach.steps.map((step) => (
              <li key={step.title} className="border-l-2 border-primary/40 pl-5">
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section-padding py-12 ${altBand}`}>
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className={h2}>{content.useCases.heading}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.useCases.items.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-padding py-12 ${band}`}>
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className={h2}>{content.compare.heading}</h2>
          <p className={`${para} mb-6`}>{content.compare.intro}</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/60 text-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Dimension
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Syndicated / desk / global
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    BioNixus primary research
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.compare.rows.map((row) => (
                  <tr key={row.dimension} className="border-t border-border align-top">
                    <th scope="row" className="px-4 py-3 font-medium text-foreground">
                      {row.dimension}
                    </th>
                    <td className="px-4 py-3 text-muted-foreground">{row.syndicated}</td>
                    <td className="px-4 py-3 text-foreground/90">{row.bionixus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`section-padding py-12 ${altBand}`}>
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className={h2}>{content.scope.heading}</h2>
          <div className="space-y-4">
            {content.scope.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className={para}>
                {p}
              </p>
            ))}
          </div>
          <p className="mt-4">
            <Link to="/pricing" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
              See the published pricing bands <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className={`section-padding py-12 ${band}`}>
        <div className="container-wide max-w-3xl mx-auto">
          <ConversionCTA
            variant="talk-to-research"
            ctaId={`services_${slug.replace(/-/g, '_')}_scoping_call`}
            ctaLocation="service-deep-dive"
            headline={content.ctaHeadline}
            sourceContext={`Service: ${slug}`}
            defaultNeed={content.defaultNeed}
          />
        </div>
      </section>

      <section className={`section-padding py-12 ${altBand}`}>
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className={h2}>{content.related.heading}</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {content.related.links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex items-start gap-2 text-primary font-medium hover:underline leading-snug"
                >
                  <ArrowRight className="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section-padding py-12 ${band}`} aria-labelledby={`${slug}-faq`}>
        <div className="container-wide max-w-4xl mx-auto">
          <h2 id={`${slug}-faq`} className={h2}>
            {/* Premium pages already carry a "Frequently asked questions" section above. */}
            {tone === 'premium' ? 'More questions on scope, pricing and timelines' : 'Frequently asked questions'}
          </h2>
          <div className="divide-y divide-border rounded-xl border border-border">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-foreground flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
