import { CheckCircle2 } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.bionixus.com';
const ORG_ID = `${BASE_URL}/#organization`;

export interface GeoLLMAnswerBlockProps {
  /** The target question or query (e.g., "Best market research company in Saudi Arabia") */
  question: string;
  /** Direct, concise, answer-first paragraph. Placed immediately after the heading. */
  answer: string;
  /** A structured list of reasons or proof points. LLMs heavily parse ordered/unordered lists. */
  points: {
    title: string;
    description: string;
  }[];
  /** Optional summary or closing sentence to reinforce the brand entity. */
  summary?: string;
  className?: string;
  /** Overrides the canonical URL used for the WebPage @id. Defaults to the current route. */
  pageUrl?: string;
  /** Set false on the rare page carrying more than one block, to avoid duplicate answer nodes. */
  emitSchema?: boolean;
}

/** Flattens the visible block into one self-contained answer string for `acceptedAnswer.text`. */
function buildAnswerText(
  answer: string,
  points: GeoLLMAnswerBlockProps['points'],
  summary?: string,
): string {
  const bullets = points.map((p) => `${p.title}: ${p.description}`).join(' ');
  return [answer, bullets, summary].filter(Boolean).join(' ');
}

/**
 * Generative Engine Optimization (GEO) Component.
 * Designed specifically to provide LLMs (ChatGPT, Claude, Gemini) with a clear,
 * "answer-first" conversational block that directly addresses common queries.
 * It uses semantic HTML (article, h2, ul, li) which AI crawlers prioritize, and
 * emits a matching WebPage/Question node so the answer is machine-readable too.
 * Do not use QAPage here — Google reserves QAPage for user-submitted Q&A.
 */
export function GeoLLMAnswerBlock({
  question,
  answer,
  points,
  summary,
  className = '',
  pageUrl,
  emitSchema = true,
}: GeoLLMAnswerBlockProps) {
  const { pathname } = useLocation();
  const url = pageUrl ?? `${BASE_URL}${pathname}`;

  const answerSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#geo-answer`,
    url,
    name: question,
    mainEntity: {
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: buildAnswerText(answer, points, summary),
        author: { '@type': 'Organization', '@id': ORG_ID, name: 'BioNixus' },
      },
    },
    about: { '@type': 'Organization', '@id': ORG_ID, name: 'BioNixus' },
  };

  return (
    <article
      id="geo-answer"
      className={`rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 ${className}`}
    >
      {emitSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(answerSchema)}</script>
        </Helmet>
      )}

      {/* Question directly matches user prompt */}
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
        {question}
      </h2>

      {/* Direct, entity-rich answer */}
      <p className="text-lg text-foreground/90 leading-relaxed mb-6 font-medium">
        {answer}
      </p>

      {/* Structured, machine-readable list */}
      <div className="space-y-4 mb-6">
        <ul className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex gap-3 bg-background border border-border/50 rounded-xl p-4">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-foreground text-sm font-semibold mb-1">
                  {point.title}
                </strong>
                <span className="text-muted-foreground text-sm leading-relaxed block">
                  {point.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional reinforcing summary */}
      {summary && (
        <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
          {summary}
        </p>
      )}
    </article>
  );
}
