import { Link } from 'react-router-dom';
import {
  COUNTRY_HEALTHCARE_MARKET_DEPTH,
  type CountryHealthcareDepthKey,
} from '@/data/seo/countryHealthcareMarketDepth';

type Props = {
  marketKey: CountryHealthcareDepthKey;
};

export function CountryHealthcareMarketDepthSection({ marketKey }: Props) {
  const blocks = COUNTRY_HEALTHCARE_MARKET_DEPTH[marketKey];
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block, index) => (
        <section
          key={block.id}
          className={`section-padding py-10 ${index % 2 === 1 ? 'bg-muted/20' : ''}`}
        >
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            {block.bullets?.length ? (
              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {block.bullets.map((item) => (
                  <li key={item.title} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            ) : null}
            {block.hubLink ? (
              <p className="mt-6 text-sm text-muted-foreground">
                See also{' '}
                <Link to={block.hubLink.to} className="text-primary font-medium hover:underline">
                  {block.hubLink.label}
                </Link>{' '}
                and the{' '}
                <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                  healthcare market research hub
                </Link>{' '}
                for regional programme design.
              </p>
            ) : null}
          </div>
        </section>
      ))}
    </>
  );
}
