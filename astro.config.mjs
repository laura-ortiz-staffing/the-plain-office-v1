import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// Deployment target: Render (Node web service).
// Pages are static by default; only src/pages/api/*.ts opt into
// on-demand rendering via `export const prerender = false`.
export default defineConfig({
  site: 'https://theplainoffice.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  server: { port: 4321 },
  security: {
    // Astro's built-in cross-site POST protection (the same mechanism
    // that replaces needing a CAPTCHA, per Build Brief v2 §6) only
    // trusts the incoming Host header for domains listed here. Without
    // this, every real form submission on the deployed Render domain
    // would 403 — this is NOT optional. Update the render.com hostname
    // below once the service is created if it differs, and update the
    // production entry once theplainoffice.com is registered and live.
    allowedDomains: [
      { hostname: 'theplainoffice.com' },
      { hostname: 'www.theplainoffice.com' },
      { hostname: '*.onrender.com' },
      { hostname: 'localhost' },
      { hostname: '127.0.0.1' },
    ],
  },
});
