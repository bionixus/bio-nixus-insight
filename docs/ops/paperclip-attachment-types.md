# Paperclip attachment types (BioNixus)

Configured in `~/.paperclip/instances/default/.env` via `PAPERCLIP_ALLOWED_ATTACHMENT_TYPES`.

## Supported formats

| Category | Extensions / formats |
|----------|---------------------|
| Images | png, jpg, webp, gif, svg |
| Documents | pdf, rtf |
| Microsoft Office | doc, docx, xls, xlsx, ppt, pptx |
| OpenDocument | odt, ods, odp |
| Google (exported) | Google Sheets/Docs MIME when uploaded as files |
| Text / data | md, txt, csv, html, json |
| Archives | zip |
| Video | mp4, webm, mov, m4v |

## Notes

- **Google Sheets links** are URLs, not file attachments — paste the link in an issue comment or attach an exported `.xlsx` / `.csv`.
- Default max size: **10 MB** per file (`PAPERCLIP_ATTACHMENT_MAX_BYTES`). Raise in `.env` if needed.
- After changing `.env`, **restart Paperclip** (`npx paperclipai run`) for types to take effect.

## Add more types

Comma-separated MIME types or wildcards, e.g.:

```bash
PAPERCLIP_ALLOWED_ATTACHMENT_TYPES=image/*,application/pdf,application/vnd.openxmlformats-officedocument.*
```

Wildcards: `image/*`, `text/*`, `application/vnd.openxmlformats-officedocument.*`
