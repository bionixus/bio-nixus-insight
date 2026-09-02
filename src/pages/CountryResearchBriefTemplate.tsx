import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

const PATH = '/templates/country-research-brief';
const CANONICAL = `https://www.bionixus.com${PATH}`;
const CTR = getCtrSeo(PATH);
const TITLE = CTR?.title ?? 'Country Research Brief Template (2026) | BioNixus';
const DESCRIPTION =
  CTR?.description ??
  'Fill a country research brief — brand, SKU, market, Nielsen/IQVIA gap — and request a 48-hour proposal from BioNixus.';

const FIELDS = [
  { id: 'brand', label: 'Brand or SKU', placeholder: 'Named brand and pack size' },
  { id: 'country', label: 'Country', placeholder: 'Egypt, UAE, Saudi Arabia…' },
  { id: 'study', label: 'Study type', placeholder: 'Competitor, brand perception, mystery shop, account-level' },
  { id: 'gap', label: 'What the syndicated feed misses', placeholder: 'Traditional trade, subregion, named accounts…' },
];

export default function CountryResearchBriefTemplate() {
  const [notes, setNotes] = useState<Record<string, string>>({});
  const context = [
    'Country research brief',
    notes.brand && `Brand: ${notes.brand}`,
    notes.country && `Country: ${notes.country}`,
    notes.study && `Study: ${notes.study}`,
    notes.gap && `Gap: ${notes.gap}`,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
      </Helmet>
      <OpenGraphMeta title={TITLE} description={DESCRIPTION} image="https://www.bionixus.com/og-image.png" url={CANONICAL} type="article" locale="en_US" />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-16">
          <div className="container-wide max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">Template</p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Country research brief template
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Use this with your Insights team, then send it to BioNixus. A proposal is ready within 48 hours of a
              complete brief. Keep Nielsen or IQVIA for the national feed — this brief is for the account, SKU, and
              traditional-trade cut they do not sell.
            </p>
            <div className="space-y-4 mb-10">
              {FIELDS.map((field) => (
                <label key={field.id} className="block">
                  <span className="block text-sm font-medium text-foreground mb-1.5">{field.label}</span>
                  <input
                    value={notes[field.id] ?? ''}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [field.id]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm"
                  />
                </label>
              ))}
            </div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">Request the proposal</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Work email and company only. We attach the brief fields above as source context.
            </p>
            <QualificationForm
              formId="country_research_brief_template"
              sourceContext={context}
              defaultNeed="Brand and competitor data (account- or SKU-level)"
            />
            <p className="mt-8 text-sm text-muted-foreground">
              Related:{' '}
              <Link to="/tools/syndicated-data-gap" className="text-primary underline">
                Syndicated data gap diagnostic
              </Link>
              {' · '}
              <Link to="/account-level-market-research" className="text-primary underline">
                Account-level data
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
