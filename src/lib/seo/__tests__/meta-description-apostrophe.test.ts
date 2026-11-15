import { describe, expect, it } from 'vitest';
import { escapeHtmlAttribute, normalizeDescriptionMetaTags } from '../../../../lib/html-meta-escape.mjs';

const SAMPLES = [
  "ADCAN Pharma and M42's UAE oncology MoU starts with packaging and registration, not an ADC plant.",
  "The UAE approved Lilly's oral GLP-1 Foundayo for type 2 diabetes on 6 Nov 2026.",
  "Abbott will sell Plosbrio, Novo Nordisk's second semaglutide brand, in Singapore and Asia Pacific.",
  "EVA Pharma's TriGutirek XR is described as the first triple FDC of these actives approved in Saudi Arabia.",
];

function descriptionTags(copy: string) {
  const once = escapeHtmlAttribute(copy);
  return [
    `<meta name="description" content="${once}" />`,
    `<meta property="og:description" content="${once}" />`,
    `<meta name="twitter:description" content="${once}" />`,
  ].join('\n');
}

describe('meta description apostrophes', () => {
  it('keeps a single &#x27; on description, og:description and twitter:description', () => {
    for (const copy of SAMPLES) {
      const doubleEscaped = descriptionTags(copy).replace(/&#x27;/g, '&amp;#x27;');
      const html = `<head>\n${doubleEscaped}\n</head>`;
      const out = normalizeDescriptionMetaTags(html);
      expect(out).not.toContain('&amp;#x27;');
      expect(out).not.toContain('&amp;amp;');
      const tags = [...out.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0]);
      expect(tags).toHaveLength(3);
      for (const tag of tags) {
        expect(tag).toContain('&#x27;');
        expect(tag).not.toContain('&amp;#x27;');
      }
      expect(escapeHtmlAttribute(copy).match(/&#x27;/g)?.length).toBe(
        copy.match(/'/g)?.length,
      );
    }
  });
});
