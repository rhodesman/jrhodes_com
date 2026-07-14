// Microsoft Clarity — lightweight analytics: heatmaps, session recordings,
// and custom events. The project ID is PUBLIC (it ships in the client bundle),
// so it is safe to commit.
//
// To enable: create a project at https://clarity.microsoft.com, copy its
// project ID, and paste it below. Until then everything here is a no-op, so
// the site works fine with analytics "off".
const CLARITY_PROJECT_ID = '';

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[] };

declare global {
  interface Window {
    clarity?: ClarityFn;
  }
}

/**
 * Inject the Microsoft Clarity tag once. No-op if no project ID is configured
 * or if it has already been injected.
 */
export function initAnalytics(): void {
  if (!CLARITY_PROJECT_ID || typeof window === 'undefined' || window.clarity) {
    return;
  }

  // Queueing stub so track()/tagSession() calls made before the async tag
  // finishes loading are replayed once Clarity is ready.
  const stub: ClarityFn = (...args: unknown[]) => {
    (stub.q ??= []).push(args);
  };
  window.clarity = stub;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  document.head.appendChild(script);
}

/** Fire a custom Clarity event (safe no-op until Clarity is configured/loaded). */
export function track(event: string): void {
  window.clarity?.('event', event);
}

/** Tag the current session with a key/value pair (safe no-op until loaded). */
export function tagSession(key: string, value: string): void {
  window.clarity?.('set', key, value);
}
