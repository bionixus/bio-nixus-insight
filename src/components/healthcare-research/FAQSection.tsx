import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

type FAQSectionProps = {
  items: FAQItem[];
  title?: string;
  /** Section DOM id (must match FAQPage JSON-LD URL hash when used for schema). */
  sectionId?: string;
  className?: string;
};

export function FAQSection({ items, title, sectionId = 'faq', className }: FAQSectionProps) {
  return (
    <section className={cn('py-12', className)} id={sectionId}>
      <div className="container-wide max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-semibold text-foreground mb-8">
          {title || 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-lg border border-border bg-card">
              <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                <span aria-hidden="true" className="text-muted-foreground">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

