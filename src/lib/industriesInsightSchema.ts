import {
  buildAuthorRef,
  buildHowToNode,
  buildPersonNode,
  buildPrimaryImageNode,
  countWords,
  getIndustriesInsightEntities,
  htmlToPlainText,
  primaryImageIdFor,
} from '../../lib/industries-insight-jsonld.mjs';
import type { BlogPost } from '@/types/blog';

type JsonLdNode = Record<string, unknown>;

/** Plain text of an HTML string or Portable Text body, for `wordCount`. */
export function articleBodyPlainText(body: unknown): string {
  if (typeof body === 'string') return htmlToPlainText(body);
  if (!Array.isArray(body)) return '';
  return body
    .map((block) => {
      const children = (block as { children?: { text?: string }[] })?.children;
      return Array.isArray(children) ? children.map((child) => child?.text ?? '').join('') : '';
    })
    .join(' ');
}

export type IndustriesInsightSchemaExtras = {
  wordCount?: number;
  authorNode: JsonLdNode;
  imageId: string;
  imageCaption: string;
  keywords?: string[];
  about?: ReadonlyArray<JsonLdNode>;
  mentions?: ReadonlyArray<JsonLdNode>;
  extraNodes: JsonLdNode[];
};

/**
 * Schema props for an industries-silo article, built from the same module the crawler
 * renderer uses so both outputs describe one author, image and HowTo.
 */
export function buildIndustriesInsightSchemaExtras({
  post,
  slug,
  pageUrl,
  imageUrl,
  imageWidth,
  imageHeight,
  body,
  inLanguage,
  headline,
  authorLinkedIn,
}: {
  post: BlogPost;
  slug: string;
  pageUrl: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  body: unknown;
  inLanguage: string;
  headline: string;
  authorLinkedIn?: string;
}): IndustriesInsightSchemaExtras {
  const author = post.authorName?.trim()
    ? {
        name: post.authorName,
        slug: post.authorSlug,
        jobTitle: post.authorTitle,
        linkedIn: authorLinkedIn,
      }
    : null;
  const imageCaption = post.coverImageAlt?.trim() || headline;
  const person = buildPersonNode(author) as JsonLdNode | null;
  const howTo = buildHowToNode({ slug, pageUrl, inLanguage }) as JsonLdNode | null;
  const entities = getIndustriesInsightEntities(slug) as
    | { about?: JsonLdNode[]; mentions?: JsonLdNode[] }
    | undefined;
  const wordCount = countWords(articleBodyPlainText(body));
  const keywords = (post.seoKeywords?.length ? post.seoKeywords : post.tags ?? []).filter(
    (keyword) => typeof keyword === 'string' && keyword.trim(),
  );

  return {
    ...(wordCount > 0 ? { wordCount } : {}),
    authorNode: buildAuthorRef(author) as JsonLdNode,
    imageId: primaryImageIdFor(pageUrl),
    imageCaption,
    ...(keywords.length > 0 ? { keywords } : {}),
    ...(entities?.about?.length ? { about: entities.about } : {}),
    ...(entities?.mentions?.length ? { mentions: entities.mentions } : {}),
    extraNodes: [
      ...(person ? [person] : []),
      buildPrimaryImageNode({
        pageUrl,
        url: imageUrl,
        width: imageWidth,
        height: imageHeight,
        caption: imageCaption,
        inLanguage,
      }) as JsonLdNode,
      ...(howTo ? [howTo] : []),
    ],
  };
}
