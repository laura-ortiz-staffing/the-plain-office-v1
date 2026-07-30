// Minimal in-memory, per-IP rate limiter — used instead of a CAPTCHA,
// per Build Brief v2 §6 ("no CAPTCHAs ... hidden honeypot field plus
// server-side rate limiting").
//
// Known limitation: this state lives in the Node process's memory, so
// it resets on every deploy/restart and is NOT shared across multiple
// Render instances if the service is ever scaled horizontally. That's
// an acceptable tradeoff for a low-traffic marketing site's three
// forms at v1; if traffic or abuse patterns ever justify it, replace
// with a shared store (e.g. a Supabase table or Redis) — see CHANGELOG.

const hits = new Map<string, number[]>();

const WINDOW_SECONDS = Number(import.meta.env.RATE_LIMIT_WINDOW_SECONDS ?? 60);
const MAX_SUBMISSIONS = Number(import.meta.env.RATE_LIMIT_MAX_SUBMISSIONS ?? 5);

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = WINDOW_SECONDS * 1000;
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);

  if (timestamps.length >= MAX_SUBMISSIONS) {
    hits.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0].trim() : 'unknown';
}
