import { ChevronDown } from 'lucide-react';
import { PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

export type PharmaCompaniesFaqItem = { q: string; a: string };

type Props = {
  items: PharmaCompaniesFaqItem[];
  title?: string;
};

/** Accessible FAQ block — must match FAQPage JSON-LD question/answer text exactly. */
export function PharmaCompaniesFaqSection({
  items,
  title = 'Frequently Asked Questions',
}: Props) {
  return (
    <section className={`${PHARMA_GUIDE_SECTION_X} py-16 bg-muted/30 scroll-mt-28`} id="faq">
      <div className={PHARMA_GUIDE_INNER}>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">{title}</h2>
        <div className="rounded-xl overflow-hidden border border-border bg-background shadow-sm">
          {items.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-border last:border-b-0 bg-card px-5 md:px-6"
            >
              <summary className="flex items-center justify-between cursor-pointer gap-4 text-left text-[15px] font-semibold text-foreground hover:text-primary py-5 list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <span>{faq.q}</span>
                <ChevronDown
                  className="w-4 h-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="text-sm text-muted-foreground leading-relaxed pb-5 border-t border-border/70 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
