import type { EditorialAuthor } from '@/data/editorialAuthors';
import { PersonNameLink } from '@/components/seo/PersonNameLink';

export function EditorialByline({
  author,
  published,
}: {
  author: EditorialAuthor;
  published: string;
}) {
  return (
    <p className="text-sm text-muted-foreground">
      {published} · By <PersonNameLink name={author.name} className="text-inherit no-underline" />, {author.jobTitle}
    </p>
  );
}
