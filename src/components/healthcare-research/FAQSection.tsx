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
  premium?: boolean;
};

export function FAQSection({ items, title, sectionId = 'faq', className, premium = false }: FAQSectionProps) {
  return (
    <section className={cn('py-12', premium && 'premium-faq', className)} id={sectionId}>
      <div className="container-wide max-w-4xl mx-auto">
        <h2
          className={
            premium
              ? 'mb-10 font-display text-3xl md:text-4xl font-light tracking-tight text-[#0C1B33]'
              : 'mb-8 font-display text-3xl font-semibold text-foreground'
          }
        >
          {title || 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className={premium ? undefined : 'rounded-lg border border-border bg-card'}
            >
              <summary
                className={
                  premium
                    ? undefined
                    : 'flex cursor-pointer list-none items-start justify-between gap-4 p-5'
                }
              >
                <h3 className={premium ? 'text-base font-medium text-[#0C1B33]' : 'text-base font-semibold text-foreground'}>
                  {item.question}
                </h3>
                <span aria-hidden="true" className={premium ? undefined : 'text-muted-foreground'}>
                  +
                </span>
              </summary>
              <div
                className={
                  premium
                    ? 'px-6 pb-5 font-light leading-relaxed text-[#7A7267]'
                    : 'px-5 pb-5 leading-relaxed text-muted-foreground'
                }
              >
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

