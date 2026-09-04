import { ChevronDown } from 'lucide-react';
import { PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

export type PharmaCompaniesFaqItem = { q: string; a: string };

type Props = {
  items: PharmaCompaniesFaqItem[];
  title?: string;
  /** Constrain to the directory matrix column width. */
  contained?: boolean;
};

/** Accessible FAQ block — must match FAQPage JSON-LD question/answer text exactly. */
export function PharmaCompaniesFaqSection({
  items,
  title = 'Frequently Asked Questions',
  contained = false,
}: Props) {
  return (
    <section className={`${PHARMA_GUIDE_SECTION_X} py-16 md:py-20 directory-cream scroll-mt-28`} id="faq">
      <div className={contained ? 'container-wide max-w-6xl mx-auto w-full' : PHARMA_GUIDE_INNER}>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A84C] mb-3">Questions</p>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">{title}</h2>
        <div className="premium-faq space-y-3">
          {items.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex items-center justify-between cursor-pointer gap-4 text-left text-[15px] font-semibold text-foreground hover:text-[#8A6A12] list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <span>{faq.q}</span>
                <ChevronDown
                  className="w-4 h-4 shrink-0 text-[#C9A84C] transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="text-sm text-muted-foreground leading-relaxed px-6 pb-5 border-t border-[#EDE9E3] pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
