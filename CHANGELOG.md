# Changelog

All notable changes to the-plain-office-v1 are recorded here, in the order
they happened, so a future reader (human or AI) can see not just *what*
changed but *why*. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] — 2026-07-30 — Initial v1 scaffold

### Context

This repository implements the website described in the client's own
**Build Brief v2**, **Website Specification**, **Website Copy Deck**, and
the **Key Findings** memo, plus the two reference HTML mockups
(`plain-office-site-A.html` "The Printed Page", `plain-office-site-B.html`
"The Steady Firm") and the supplied build-pack assets (logos, the six
sample-report artifacts, the booklet PDF). A separate technical
consultation (stack evaluation, framework comparison, architecture
proposal) was delivered and approved before any code was written — this
changelog picks up from that approval.

**A note on Figma:** the approved design lives at a Figma file the
assistant could not inspect in this session (no authenticated Figma
access was available — the link only resolves to an empty app shell
without a logged-in session). This build was implemented from the Build
Brief, Specification, Copy Deck, and the two reference HTML mockups,
which are themselves described in the Brief as the source the Figma
design was built from. **The visual output here should be checked
against the actual Figma frames and adjusted if they've diverged** —
that check could not be performed as part of this work.

### Stack decisions actually implemented

- **Astro 5** (TypeScript, `output: 'static'` with per-route
  `prerender = false` for the three API endpoints) — matches the
  consultation's recommendation: zero client JS by default, file-based
  routing maps 1:1 to the flat 7-page sitemap.
- **No React, no UI framework, anywhere.** Every interactive element
  (FAQ disclosures, mobile nav) uses native HTML (`<details>/<summary>`)
  so it works with JavaScript fully disabled, per Build Brief v2 §7.
- **Plain CSS custom properties** (`src/styles/tokens.css`) +
  component-scoped Astro styles, not Tailwind — per the consultation's
  reasoning: the palette is small and fixed, and the editorial
  typography (pull-quotes, small-caps kickers, tabular numerals, print
  rules) is easier to hand-author than to compose from utility classes.
- **Deployment target changed from the consultation's Vercel
  recommendation to Render**, per explicit client instruction. This
  changed the rendering model: Vercel/Cloudflare would have used
  serverless functions for just the three form endpoints; Render runs a
  single persistent Node process (`@astrojs/node`, standalone mode), so
  the whole site — static pages and the three API routes — is served by
  one long-running server (`node ./dist/server/entry.mjs`). See
  `render.yaml` and `astro.config.mjs`.
- **Supabase (Postgres) replaces the consultation's "Google Sheets vs.
  managed Postgres" open question**, per explicit client instruction:
  "si se lleva una base de datos, que sea por Supabase." Form
  submissions are written to a `form_submissions` table
  (`supabase/migrations/0001_form_submissions.sql`) via the service-role
  key, server-side only.
  - **v1 decision on the "printable log" requirement** (Build Brief v2
    §6): the office views and prints this table directly from Supabase
    Studio's own table editor, rather than a custom-built admin page.
    That satisfies "a log the office can print" with no additional
    authenticated surface on the public site. A branded, simpler
    printable view is a reasonable v1.1 upgrade if the Studio UI proves
    awkward for daily use.
- **Resend** for the office email notification on every submission
  (`src/lib/email.ts`), consistent with the consultation. Both Resend
  and Supabase degrade gracefully to a console log when their env vars
  aren't set, so the site runs and forms "work" (validate, redirect to
  the correct thank-you copy) in local development with zero external
  accounts configured — see `.env.example`.

### What was built

- Full project scaffold: `package.json`, `astro.config.mjs`,
  `tsconfig.json`, `.gitignore`, `.env.example`.
- Design tokens (`src/styles/tokens.css`) using the client's own
  validated palette values verbatim from the Website Specification —
  navy `#1E3A5F`, bronze `#A97E42`, olive `#74804F`, cream `#FDFCF9` /
  `#F7F4EC`, ink `#26251F`, plus the chart/aging colors, none of which
  were re-derived or guessed.
- Global stylesheet (`src/styles/global.css`) and a dedicated print
  stylesheet (`src/styles/print.css`) per Build Brief v2 §7
  ("pages and the samples gallery print cleanly in black and white").
- Shared layout and components: `BaseLayout`, `SiteHeader`,
  `SiteFooter`, `CTAButtons`, `TitledCard`, `PullQuote`, `NoticeBox`,
  `FaqAccordion` (native `<details>`, first item open by default where
  used on short lists), `SampleReportGallery`.
- All seven pages (`/`, `/services`, `/samples`, `/booklet`,
  `/second-look`, `/about`, `/contact`) plus **three** thank-you pages
  (`/booklet/thank-you`, `/second-look/thank-you`, `/contact/thank-you`
  — see "Open item" below on why a third was built).
- Copy transcribed **verbatim** from the Website Copy Deck into typed
  data files under `src/data/copy/*.ts`, structured section-by-section
  to mirror the deck's own labels (KICKER / PAGE HEADLINE / PARAGRAPH /
  LIST ITEM) so a reviewer can diff the code against the deck directly.
  Site-wide values (phone, fax, address, nav labels) live once in
  `src/data/site.ts` and are imported everywhere, so they can never
  drift out of sync between the header, footer, and Contact page.
- The six supplied sample-report artifacts (`samples_fragment.html`)
  are imported **raw** (`?raw` import) and injected as-is via
  `SampleReportGallery.astro` — not re-authored, not redrawn, no
  numbers changed, per Build Brief v2 §3.
- Three forms (`BookletForm`, `SecondLookForm`, `ContactForm`) as real
  `<form method="post" action="/api/...">` elements — functional with
  JavaScript fully disabled — each with a hidden honeypot field and
  server-side-only validation. Corresponding API routes
  (`src/pages/api/booklet.ts`, `second-look.ts`, `contact.ts`) validate,
  rate-limit, notify the office by email, log to Supabase, and redirect
  (303) to the correct thank-you page — or back to the form with a
  `?error=<field>` the form re-renders as a plain-language message
  (e.g. "We need your mailing address to send the booklet."), matching
  the Specification's own example error wording.
- `robots.txt` + `@astrojs/sitemap` for basic SEO plumbing.
- Logo assets and the booklet PDF copied in from the supplied build
  pack (`src/assets/`, `public/documents/counting-the-cost.pdf`).
- `render.yaml` blueprint for one-click Render deployment as a Node web
  service (not a static site — the form endpoints need a server).

### Fixed during build

- **`src/content/` renamed to `src/data/`.** Astro treats `src/content/`
  as a reserved directory for Content Collections; the plain `.ts` data
  files here aren't collections, and leaving them there produced a
  build warning about auto-generated collections and a bogus "no
  markdown files found" glob warning. Moving to `src/data/` (and
  updating every import) resolved it cleanly — confirmed via a clean
  rebuild with no warnings.
- **`samples.ts` had duplicate content.** An early draft of
  `src/data/copy/samples.ts` re-transcribed the per-chart headings,
  captions, and pull-quote text from the Copy Deck — but that exact
  text already exists verbatim inside the supplied
  `samples_fragment.html`, which is rendered as-is. Kept both in sync
  by hand would have been two copies of the same sentences with no
  reader ever seeing the unused one; removed the duplicate fields and
  left a comment explaining where that text actually lives.
- **Astro's origin-check CSRF protection would have 403'd every real
  form submission in production.** Astro 5's built-in cross-site POST
  protection (the mechanism that lets this site skip a CAPTCHA per
  Build Brief v2 §6) only trusts the incoming `Host` header for domains
  explicitly listed in `security.allowedDomains`. Left unconfigured, it
  silently falls back to treating every request's origin as
  `http://localhost` — which would reject every genuine submission from
  a real visitor on the live Render domain, not just local curl tests.
  Fixed in `astro.config.mjs` by explicitly allow-listing
  `theplainoffice.com`, `www.theplainoffice.com`, `*.onrender.com`,
  and `localhost`/`127.0.0.1` for local development. **Verified** by
  building, running the compiled server locally, and POSTing to all
  three endpoints with a matching `Origin` header — confirmed
  successful redirects to the correct thank-you state, confirmed the
  missing-field error redirects, confirmed the honeypot silently
  "succeeds," and confirmed the rate limiter engages after 5
  submissions from the same IP within 60 seconds.

### Known gaps / placeholders — must resolve before launch

These are carried over from the technical consultation; nothing below
was guessed at or invented in code:

- **Contact details are placeholders.** Phone `(717) 555-0100`, fax
  `(717) 555-0101`, `office@theplainoffice.com`, and the bracketed
  mailing address in `src/data/site.ts` are the Copy Deck's own
  placeholder values (Build Brief v2 §8 explicitly calls these out as
  not-yet-real). Update `src/data/site.ts` once the office confirms
  real values — every page reads from that one file.
- **The booklet PDF is the print-resolution "Illustrated Print"
  edition** (2.2 MB), used here as a placeholder for the download path.
  The Brief calls for a separate, real booklet PDF "with the printed
  reply card and real contact details" before launch — likely also
  wanting a lighter, web-optimized export, since a physical mail-in
  reply card makes little sense for someone who just downloaded a PDF.
- **Per-page SEO titles/descriptions**: only Home's title and meta
  description are given verbatim in the Copy Deck. The other six pages'
  `<title>` currently follow an unstyled `"{headline} — The Plain
  Office"` pattern in each `.astro` page as a placeholder, not
  copy-deck-approved text — flagged in the consultation, still open.
- **No social preview image exists yet.** `BaseLayout.astro` accepts an
  `ogImage` prop but nothing currently passes one; the booklet cover
  only exists inside the PDF, not as a standalone image asset.
- **Supabase and Resend are not yet provisioned.** Both integrations
  are fully wired in code and degrade to console logging when their
  env vars are absent (see `.env.example`), so the site is fully
  demoable without them — but real credentials, the
  `form_submissions` table migration, and the sender domain for Resend
  all need to be set up before this goes live.
- **`/contact/thank-you` was built even though Build Brief v2 §4 lists
  only two thank-you states** (booklet, second-look). Both the
  Specification and the Copy Deck contain full "Thank you kindly." copy
  for Contact, and the Key Findings memo independently flags this exact
  same discrepancy. Built on the assumption it's in scope; flag to the
  client if that assumption is wrong.
- **Rate limiting is in-memory, per Node process.** Fine for a single
  Render instance at low traffic; resets on every deploy/restart and
  would not be shared if the service is ever scaled to multiple
  instances. Noted in code (`src/lib/rateLimit.ts`) as a deliberate v1
  tradeoff, not an oversight.
- **Logo/PNG source files are heavier than ideal** (167–186 KB as
  supplied) for a rural-connection performance budget — `astro:assets`
  already compresses these to ~14–40 KB WebP at build time, which
  covers the immediate risk, but a native SVG source (the marks are
  line-art) would be both crisper and smaller still.
- **No automated tests yet** (Playwright/axe/Lighthouci CI from the
  consultation's testing recommendations aren't set up in this pass) —
  the verification done here was a manual build + live server smoke
  test of all pages and all three form endpoints, described above.
- **Bronze-on-cream small text contrast** (kickers, captions) should
  still be measured against WCAG 2.1 AA once real fonts/weights render
  in a browser — flagged in the consultation, not yet re-verified here.

### Not yet done

- `eslint`/`prettier` config (dependencies not installed yet).
- Any automated test suite.
- The Supabase project itself, its migration applied, and its
  credentials in Render's environment variables.
- The Resend account, verified sending domain, and its API key.
- Domain purchase/DNS (`theplainoffice.com`, per Build Brief v2 §8 —
  explicitly a task for the client's team, not this build).
