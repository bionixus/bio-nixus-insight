import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

const PATH = '/tools/syndicated-data-gap';
const CANONICAL = `https://www.bionixus.com${PATH}`;
const CTR = getCtrSeo(PATH);
const TITLE = CTR?.title ?? 'Syndicated Data Gap Diagnostic | BioNixus';
const DESCRIPTION =
  CTR?.description ??
  'Five questions to see if Nielsen, IQVIA, GfK or IMS still miss account-level, SKU-level or traditional-trade data. Then request a proposal.';

const QUESTIONS = [
  { id: 'feed', label: 'Which feed do you already pay for?', options: ['IQVIA / IMS', 'NielsenIQ', 'GfK', 'Kantar', 'None / other'] },
  { id: 'cut', label: 'What cut do you still lack?', options: ['Named accounts', 'SKU-level brand vs competitor', 'Traditional trade', 'Subregion / city', 'Not sure'] },
  { id: 'country', label: 'Which country is the decision about?', options: ['Egypt', 'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Oman', 'Qatar', 'Other'] },
  { id: 'industry', label: 'Industry', options: ['Pharma / healthcare', 'FMCG', 'Retail', 'Real estate', 'Other'] },
  { id: 'timing', label: 'When do you need the read?', options: ['This month', 'This quarter', 'Exploring'] },
] as const;

export default function SyndicatedDataGapTool() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const complete = QUESTIONS.every((q) => answers[q.id]);
  const result = useMemo(() => {
    if (!complete) return null;
    const needsPrimary = answers.cut !== 'Not sure';
    return {
      headline: needsPrimary
        ? 'Keep the feed. Add a primary cut.'
        : 'Start with a scoped country brief.',
      body: `You already have ${answers.feed} and need ${answers.cut.toLowerCase()} in ${answers.country} (${answers.industry}). BioNixus prices that by project and country — proposal in 48 hours.`,
    };
  }, [answers, complete]);

  const context = complete
    ? `Syndicated gap · ${answers.feed} · ${answers.cut} · ${answers.country} · ${answers.industry} · ${answers.timing}`
    : 'Syndicated data gap diagnostic';

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
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">Diagnostic</p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Syndicated data gap diagnostic
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Five questions. The usual answer is not “switch off IQVIA or Nielsen.” It is “add the account, SKU, or
              traditional-trade cut the dashboard does not sell.”
            </p>
            <div className="space-y-6 mb-10">
              {QUESTIONS.map((q) => (
                <fieldset key={q.id}>
                  <legend className="text-sm font-medium text-foreground mb-2">{q.label}</legend>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                        className={`px-3 py-1.5 rounded-full text-sm border ${
                          answers[q.id] === opt
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'border-border bg-card text-foreground'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
            {result ? (
              <div className="rounded-xl border border-border bg-card p-6 mb-10">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">{result.headline}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{result.body}</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground mb-10">Answer all five to see the recommendation.</p>
            )}
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">Request a proposal</h2>
            <QualificationForm
              formId="syndicated_data_gap_tool"
              sourceContext={context}
              defaultNeed="Brand and competitor data (account- or SKU-level)"
              defaultMarkets={
                answers.country &&
                ['Egypt', 'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Oman', 'Qatar'].includes(answers.country)
                  ? [answers.country]
                  : undefined
              }
            />
            <p className="mt-8 text-sm text-muted-foreground">
              <Link to="/templates/country-research-brief" className="text-primary underline">
                Country research brief template
              </Link>
              {' · '}
              <Link to="/iqvia-alternative" className="text-primary underline">
                IQVIA alternative
              </Link>
              {' · '}
              <Link to="/nielsen-alternative" className="text-primary underline">
                Nielsen alternative
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
