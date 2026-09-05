import type { EditorialAuthor } from '@/data/editorialAuthors';

export function EditorialByline({
  author,
  published,
}: {
  author: EditorialAuthor;
  published: string;
}) {
  return (
    <p className="text-sm text-muted-foreground">
      {published} · By {author.name}, {author.jobTitle}
    </p>
  );
}
