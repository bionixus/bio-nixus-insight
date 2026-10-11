/**
 * Shared feedback helpers for lead forms. Forms sit in long pages and scrolling
 * dialogs, so a message rendered out of view reads as "nothing happened".
 */

/** Focuses the first field in DOM order whose `name` has an error, which also scrolls it into view. */
export function focusFirstInvalidField(form: HTMLFormElement | null, errors: Record<string, string>) {
  if (!form) return;
  for (const element of Array.from(form.elements)) {
    const name = (element as HTMLInputElement).name;
    if (name && errors[name] && typeof (element as HTMLElement).focus === 'function') {
      (element as HTMLElement).focus();
      return;
    }
  }
}

/**
 * Ref callback for success and error panels: moves focus to the panel and scrolls it into view.
 * Keep it a stable module-level reference so React only calls it on mount.
 */
export function revealStatus(element: HTMLElement | null) {
  if (!element) return;
  element.focus({ preventScroll: true });
  element.scrollIntoView?.({ block: 'center' });
}

/** mailto: link that carries the visitor's answers when both lead destinations fail. */
export function leadFallbackMailto(to: string, subject: string, fields: Record<string, string>, errorDetails?: string) {
  const lines = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`);
  const body =
    `--- FORM DATA ---\n${lines.join('\n')}\n\n` +
    `--- NOTE ---\nThe online form encountered an error${errorDetails ? ` (${errorDetails})` : ''}. Please process this inquiry manually.`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
