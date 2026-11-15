/**
 * Theme scope (PostCSS, runs before Tailwind).
 *
 * The site has two themes: night (default) and the original BioNixus light palette, chosen with the
 * theme switch, which sets html[data-theme="light"]. Sections marked `.theme-dark` stay night in
 * the light theme. Stylesheets mark theme-specific rules with two wrapper at-rules:
 *
 *   @dark-theme { .card { background: #0A1221; } }   night only (and inside .theme-dark islands)
 *   @light-theme { .card { background: #fff; } }     light theme only (outside .theme-dark islands)
 *
 * Each wrapped rule gets the matching condition on the subject of its selector, inside :where(),
 * so specificity is unchanged and the rule keeps its place in the cascade. The wrappers are then
 * removed. Everything outside a wrapper applies in both themes.
 */

export const DARK_CONDITION = ':where(:not([data-theme="light"] *), .theme-dark, .theme-dark *)';
export const LIGHT_CONDITION = ':where([data-theme="light"] :not(.theme-dark, .theme-dark *))';
const ROOT_DARK = ':not([data-theme="light"])';
const ROOT_LIGHT = '[data-theme="light"]';

/**
 * Adds a condition to the subject (last compound) of a selector, before any pseudo-element.
 * Escapes in Tailwind class names (`\:`) and nesting in () and [] are respected. A subject that is
 * the root element (`html…` or `:root…`) gets the attribute test on itself instead.
 */
export function scopeSelector(selector, theme) {
  const s = selector.trim();
  let depth = 0;
  let start = 0;
  let pseudoAt = -1;
  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];
    if (ch === '\\') {
      i += 1;
      continue;
    }
    if (ch === '(' || ch === '[') depth += 1;
    else if (ch === ')' || ch === ']') depth -= 1;
    else if (depth === 0 && (ch === ' ' || ch === '>' || ch === '+' || ch === '~')) {
      start = i + 1;
      pseudoAt = -1;
    } else if (depth === 0 && ch === ':' && s[i + 1] === ':' && pseudoAt < 0) {
      pseudoAt = i;
    }
  }
  if (pseudoAt < 0) {
    const legacy = s.slice(start).match(/:(?:before|after|first-line|first-letter)$/);
    if (legacy) pseudoAt = s.length - legacy[0].length;
  }
  const subject = s.slice(start);
  const rootMatch = subject.match(/^(html|:root)(?![\w-])/);
  if (rootMatch) {
    const at = start + rootMatch[0].length;
    return s.slice(0, at) + (theme === 'dark' ? ROOT_DARK : ROOT_LIGHT) + s.slice(at);
  }
  const condition = theme === 'dark' ? DARK_CONDITION : LIGHT_CONDITION;
  if (pseudoAt >= 0) return s.slice(0, pseudoAt) + condition + s.slice(pseudoAt);
  return s + condition;
}

function themeScopePlugin() {
  return {
    postcssPlugin: 'postcss-theme-scope',
    Once(root) {
      const wrappers = [];
      root.walkAtRules(/^(dark|light)-theme$/, (at) => {
        wrappers.push(at);
      });
      // innermost first, so a wrapper inside another (not expected) still resolves cleanly
      for (const at of wrappers.reverse()) {
        const theme = at.name === 'dark-theme' ? 'dark' : 'light';
        at.walkRules((rule) => {
          for (let p = rule.parent; p && p !== at; p = p.parent) {
            if (p.type === 'atrule' && /keyframes$/i.test(p.name)) return;
          }
          rule.selectors = rule.selectors.map((sel) => scopeSelector(sel, theme));
        });
        if (at.nodes && at.nodes.length) at.replaceWith(at.nodes);
        else at.remove();
      }
    },
  };
}
themeScopePlugin.postcss = true;

export default themeScopePlugin;
