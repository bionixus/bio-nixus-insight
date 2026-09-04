/**
 * React.lazy() keeps its own _status on first render. import() alone is not
 * enough: the lazy wrapper still suspends once, which discards SSR HTML and
 * flashes a fallback. Resolve that payload before hydrateRoot.
 */

type LazyPayload = {
  _status: number;
  _result: unknown;
};

type LazyLike = {
  _payload?: LazyPayload;
};

const UNINITIALIZED = -1;
const PENDING = 0;
const RESOLVED = 1;

function isThenable(value: unknown): value is Promise<{ default?: unknown }> {
  return Boolean(value && typeof (value as Promise<unknown>).then === 'function');
}

export async function warmLazy(component: unknown): Promise<void> {
  const payload = (component as LazyLike | undefined)?._payload;
  if (!payload) return;
  if (payload._status === RESOLVED) return;

  let thenable: Promise<{ default?: unknown }>;
  if (payload._status === UNINITIALIZED && typeof payload._result === 'function') {
    thenable = (payload._result as () => Promise<{ default?: unknown }>)();
    payload._status = PENDING;
    payload._result = thenable;
  } else if (payload._status === PENDING && isThenable(payload._result)) {
    thenable = payload._result;
  } else {
    return;
  }

  const mod = await thenable;
  // React 18 _init returns payload._result.default — store the module, not default.
  payload._status = RESOLVED;
  payload._result = mod;
}
