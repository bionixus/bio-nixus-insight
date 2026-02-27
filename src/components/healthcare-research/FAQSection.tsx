interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection({ items, title }: { items: FAQItem[]; title?: string }) {
  return (
    <section className="py-12" id="faq">
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

