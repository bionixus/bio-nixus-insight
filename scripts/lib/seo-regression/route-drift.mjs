import { readFileSync } from 'node:fs';
import { parse } from '@babel/parser';

/**
 * Extract static route paths declared in routes.tsx: `{ path: '/x', element: ... }`
 * object literals anywhere in the AST. Dynamic segments (`:param`, `*`) are
 * excluded since they can't be compared 1:1 against sitemap URLs.
 */
export function extractStaticRoutePaths(routesFilePath) {
  const code = readFileSync(routesFilePath, 'utf-8');
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  const paths = [];

  function walk(node) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      for (const n of node) walk(n);
      return;
    }
    if (node.type === 'ObjectExpression') {
      const pathProp = node.properties.find(
        (p) => p.type === 'ObjectProperty' && p.key && (p.key.name === 'path' || p.key.value === 'path'),
      );
      const hasElement = node.properties.some(
        (p) => p.type === 'ObjectProperty' && p.key && (p.key.name === 'element' || p.key.value === 'element'),
      );
      if (pathProp && hasElement && pathProp.value.type === 'StringLiteral') {
        const value = pathProp.value.value;
        if (!value.includes(':') && !value.includes('*')) {
          paths.push(value);
        }
      }
    }
    for (const key of Object.keys(node)) {
      if (key === 'loc' || key === 'start' || key === 'end' || key === 'range') continue;
      const child = node[key];
      if (child && typeof child === 'object') walk(child);
    }
  }

  walk(ast.program);
  return [...new Set(paths)];
}
