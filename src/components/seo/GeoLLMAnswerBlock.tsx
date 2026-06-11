import { CheckCircle2 } from 'lucide-react';
import React from 'react';

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
}

/**
 * Generative Engine Optimization (GEO) Component.
 * Designed specifically to provide LLMs (ChatGPT, Claude, Gemini) with a clear,
 * "answer-first" conversational block that directly addresses common queries.
 * It uses semantic HTML (article, h2, ul, li) which AI crawlers prioritize.
 */
export function GeoLLMAnswerBlock({
  question,
  answer,
  points,
  summary,
  className = '',
}: GeoLLMAnswerBlockProps) {
  return (
    <article className={`rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 ${className}`}>
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
