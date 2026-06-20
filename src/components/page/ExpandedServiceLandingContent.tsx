import { Link } from 'react-router-dom';
import type { ServiceLandingExpandedContent } from '@/data/serviceLandingContent';
import {
  LongFormList,
  LongFormParagraph,
  LongFormProse,
  LongFormSection,
  LongFormSubheading,
} from '@/components/page/LongFormProse';

type ExpandedServiceLandingContentProps = {
  content: ServiceLandingExpandedContent;
};

export function ExpandedServiceLandingContent({ content }: ExpandedServiceLandingContentProps) {
  return (
    <LongFormProse>
      <LongFormSection heading={content.regulatory.heading}>
        {content.regulatory.paragraphs.map((paragraph) => (
          <LongFormParagraph key={paragraph.slice(0, 48)}>{paragraph}</LongFormParagraph>
        ))}
      </LongFormSection>

      <LongFormSection heading={content.marketContext.heading}>
        {content.marketContext.paragraphs.map((paragraph) => (
          <LongFormParagraph key={paragraph.slice(0, 48)}>{paragraph}</LongFormParagraph>
        ))}
        <p className="text-sm text-muted-foreground leading-relaxed">
          Explore the{' '}
          <Link to={content.hubLink.to} className="text-primary underline">
            {content.hubLink.label}
          </Link>{' '}
          for regional context and related services.
        </p>
      </LongFormSection>

      <LongFormSection heading={content.services.heading}>
        <div className="grid md:grid-cols-2 gap-4">
          {content.services.items.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <LongFormSubheading>{item.title}</LongFormSubheading>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </LongFormSection>

      <LongFormSection heading={content.methodology.heading}>
        {content.methodology.paragraphs.map((paragraph) => (
          <LongFormParagraph key={paragraph.slice(0, 48)}>{paragraph}</LongFormParagraph>
        ))}
      </LongFormSection>

      <LongFormSection heading={content.useCases.heading}>
        <LongFormParagraph>{content.useCases.paragraph}</LongFormParagraph>
        <LongFormList items={content.useCases.areas} />
      </LongFormSection>

      <LongFormSection heading={content.process.heading}>
        <ol className="space-y-4">
          {content.process.steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                Step {index + 1}
              </p>
              <LongFormSubheading>{step.title}</LongFormSubheading>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </LongFormSection>

      <LongFormSection heading={content.deliverables.heading}>
        <LongFormList items={content.deliverables.bullets} />
      </LongFormSection>

      <LongFormSection heading="Executive decision blueprint">
        <div className="grid md:grid-cols-3 gap-4">
          <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <LongFormSubheading>Why it matters</LongFormSubheading>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.decisionBlueprint.why}</p>
          </article>
          <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <LongFormSubheading>What the evidence says</LongFormSubheading>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.decisionBlueprint.evidence}</p>
          </article>
          <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <LongFormSubheading>What to do next</LongFormSubheading>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.decisionBlueprint.next}</p>
          </article>
        </div>
      </LongFormSection>
    </LongFormProse>
  );
}
