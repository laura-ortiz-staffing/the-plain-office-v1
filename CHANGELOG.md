# Changelog

All notable changes to the-plain-office-v1 are recorded here, in the order
they happened, so a future reader (human or AI) can see not just *what*
changed but *why*. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] — 2026-07-30 — Full responsive audit

Audited every page at 360px (the Build Brief's own minimum) and 768px
by screenshotting each one and measuring actual rendered width against
viewport width — not just eyeballing it. Found and fixed three real
horizontal-overflow bugs, not just cosmetic tightness:

- **Booklet's table of contents** forced `white-space: nowrap` on
  chapter titles. Fine on desktop; on a 360px screen a title like
  "Structuring Debt as a Defensive Asset" doesn't fit on one line, so
  the row (and the whole page) was pushed wider than the viewport
  instead of wrapping. Removed the nowrap; long titles now wrap onto a
  second line.
- **Second Look's "How We Get Your Records" cards** were hardcoded to
  `repeat(3, 1fr)` with no fallback for narrow screens — three fixed
  columns don't fit in 360px. Removed the override; falls back to the
  shared `.card-grid` responsive default (`auto-fit, minmax(...)`),
  which was already safe.
- **Contact's two-column layout** used an inline `style=` attribute to
  widen the form column. Inline styles beat the media query that's
  supposed to collapse `.two-col` to one column below 780px — this
  page never actually collapsed no matter how narrow the screen. Moved
  the override into a `.wide-right` class instead, which the same
  media query now correctly overrides on mobile.

Confirmed the fix by measuring every page's screenshot width at both
360px and 768px — all seven came back exactly matching the requested
viewport width (no overflow) both before and after, except these
three, which are now fixed and reconfirmed.

Also increased mobile nav link tap targets to 44px minimum (they were
~25px) once the nav wraps to its own row below 1120px — this is the
actual on-phone tap target, not a decorative breakpoint.

---

## [Unreleased] — 2026-07-30 — Figma redesign wave (Home, Sample Reports, About, Booklet, Second Look, Contact)

### Context

The client shared actual screenshots of the approved Figma file for the
first time today — 9 screens total: Home, Sample Reports, About, The
Booklet (default + thank-you states), The Second Look (default +
thank-you states), and Contact (default + thank-you states). No screen
for What We Do (/services) was included, so that page still reflects
the original Copy Deck build from the Initial v1 Scaffold entry below.

This is a full redesign, not a visual refresh: every page's copy,
structure, and several site-wide elements (header, footer) differ
substantially from what the Initial v1 Scaffold entry below describes.
Rebuilt all 6 pages + their thank-you states to match. What follows are
the changes and, importantly, the places where the new design conflicts
with the original Build Brief v2's explicit hard requirements — flagged
to the client, not silently resolved.

### Site-wide changes

- **Header logo replaced with a text wordmark.** All 9 approved Figma
  screens show "THE PLAIN OFFICE" as plain serif text, not the supplied
  circular emblem image (`logo_h_web.png`). Changed `SiteHeader.astro`
  to match. **Conflicts with Build Brief v2's explicit instruction to
  use the logo image in the header — flagged, not resolved.**
- **Footer replaced entirely.** Old footer (cream, phone/address/email/
  Luke 14:28 verse) replaced with a dark navy, text-only footer:
  "THE PLAIN OFFICE" + Privacy Policy / Terms of Service / Contact Us
  links (current page underlined) + a copyright line. Phone is no
  longer shown in the footer, but remains on every page via the header,
  so the "phone visible on every page" requirement still holds overall.
- **Two new pages are now referenced but don't exist**: `/privacy` and
  `/terms`, linked from the new footer. Not built — out of the
  original 7-page scope, no content supplied.
- **Contact placeholders updated** (`src/data/site.ts`) to the values
  shown consistently across all 9 new screens: phone `(717) 555-0123`,
  fax `(717) 555-0124`, email `inquiries@plainoffice.com`, address
  "1420 Bookbinder Lane, Suite 400, Philadelphia, PA 19102." Still
  placeholders (the street name reads like one) — confirm before launch.
- **Tagline changed** from "We handle the office. You run the
  business." to "Reliable numbers, better decisions, a bridge to what's
  next." — matches the new footer/copyright line across every screen.
- Added 9 new line icons to `Icon.astro` (shield, compass, truck, tag,
  courier, phone, fax, at, envelope-check) for the new icon-card grids.
- Removed `FaqAccordion.astro`, `PullQuote.astro`, `NoticeBox.astro`,
  `CTAButtons.astro` — no longer used anywhere after this rewrite.
  Pruned the now-unused `Faq`, `ServiceCard`, `Step`, `ListItem` types.

### Per-page changes

- **Home** — already rebuilt earlier today from the client's first
  Figma screenshot; see that work above (unchanged in this pass).
- **Sample Reports** — new "Report Overview" box (Four Pillars of
  Analysis) and restyled gallery section. **The six real report
  artifacts from `samples_fragment.html` were kept as-is**, not
  replaced with the Figma's generic relabeled photo cards ("Monthly
  Summary," "AR Aging," etc.) — Build Brief v2 §3 explicitly and
  repeatedly requires the supplied artifacts be used unmodified with
  their own captions. Restyled the surrounding page chrome to match
  Figma; kept the actual gallery content mandated by the Brief. Also
  kept the §3-required "no client figures appear here" disclaimer,
  which the new Figma screen omits entirely — moved it directly above
  the gallery so it stays legally/functionally present without
  cluttering the new hero.
- **About** — full rewrite: "Built to still be here in twenty years,"
  Privacy Promise, Plain Conventions (3 icons), An Honest Fit / The
  Verdict. No source photo was supplied for the desk/ledger image
  shown in Figma — placeholder box in its place.
- **The Booklet** — full rewrite: new framing ("A Manual for Better
  Decisions"), new 4-chapter table of contents with page numbers, new
  excerpt, and a **new form** (Organization instead of Business/Trade,
  a structured Street/City/Postal address, and email marked required).
  **Email is shown as required (with `*`) per the approved design, but
  is deliberately not enforced** — no `required` HTML attribute, and
  the server-side handler (`src/pages/api/booklet.ts`) does not reject
  a submission missing it. Build Brief v2 §6 is explicit that no action
  on the site may require an email address; this audience often has
  none. Flagged to the client as a likely-unintentional side effect of
  adopting the new form design — the visual asterisk is kept pending
  their confirmation, the actual blocking behavior is not.
- **The Second Look** — full rewrite: "A Careful Review of Your Books,"
  and a changed economic framing. The Second Look is no longer "$500,
  paid upfront, credited against setup" (the original Copy Deck and
  Build Brief) — it now reads as a review with **"a $500 credit toward
  future bookkeeping services if you choose to continue,"** consistent
  with Home's "we review your last three months for free" line from
  the earlier Home rebuild. The old six-question FAQ and "what it
  costs" monthly-pricing sections are dropped; "How We Get Your
  Records" replaces the old "getting your records to us" copy, with
  different terms (50-mile radius, bonded courier, secure prepaid
  lockbox vs. the original "an hour or two," "prepaid UPS label"). The
  thank-you paragraph is the one piece of copy that carried over
  unchanged from the original Copy Deck.
- **Contact** — full rewrite: "Correspondence Routes" (4 icon rows:
  Write, Telephone, Facsimile, Electronic Mail) replaces the old
  four-card grid, and the form is now a "Direct Inquiry Form" with a
  Preferred Reach Method dropdown and a single free-text Contact
  Identifier field, rather than three separate optional telephone/
  address/email inputs. No source photo supplied for the mail-slot
  image shown in Figma — placeholder box in its place. Footer's
  "Contact Us" link correctly underlines as the active page here.

### Fixed during this pass

- Contact page's two-column ratio (`1fr 1.3fr`, form column wider) —
  the shared `.two-col` default (`1.5fr 1fr`) made sense for Home/
  Booklet/Second Look, where the narrower column is a small side card,
  but on Contact it starved the form column and truncated dropdown/
  input text. Overridden per-page rather than changing the shared
  default and affecting the other pages.
- A missing space in the Booklet thank-you page ("here:Counting the
  Cost" instead of "here: Counting the Cost") caused by JSX whitespace
  collapsing between an expression and adjacent text — fixed with an
  explicit `{' '}`.

### Verification

Built clean with no errors or warnings. Ran the compiled server
locally and screenshotted all 6 rebuilt pages plus all 3 thank-you
states at 1280px — confirmed structure, section order, and colors
match the approved screens. Re-ran the same form-endpoint smoke test
as the Initial v1 Scaffold entry (missing-required-field redirects,
honeypot silent-success, valid-submission redirects, rate limiting)
against the new field names — all passed. `/services` (untouched)
still builds and renders.

### Still open

- No Figma screen was provided for What We Do (/services) — still
  running the original Copy Deck version.
- Two real photo assets are needed and don't exist yet: the ledger/
  desk scene on About, and the mail-slot image on Contact. Both are
  placeholder boxes right now.
- `/privacy` and `/terms` are linked from the footer but have no pages.
- The header-logo-vs-wordmark and required-email conflicts above need
  the client's explicit confirmation before launch.

### Follow-up fixes (same day) — form alignment and gallery

- **Client feedback: forms across the site looked disordered and
  misaligned, submit buttons weren't centered.** Root cause: `.field
  .hint` (the small "Optional" label) was `display: block`, so a field
  with a hint rendered one line taller than a neighboring field
  without one — in a two-column row this broke the input boxes out of
  alignment. Changed to inline, appended right after the label text
  instead. Centered every form's submit button (`.form-actions-center`
  for Booklet/Contact; a `.tpo-form > .btn` rule handles Second Look's
  bare button) instead of the previous right/left-aligned placement.
- **Client instruction: use the Figma's Sample Report Gallery (six
  generic photo cards), not the real report artifacts kept in the
  previous pass.** Replaced the `SampleReportGallery` component (real
  supplied artifacts) with six placeholder-photo cards matching the
  Figma exactly (Monthly Summary, Sales Comparison, Major Expenses, AR
  Aging, Cash Trend, Books/Ledger). This fully removes Build Brief v2
  §3's mandated real-artifact display from the live site — flagged
  again, explicitly overridden by the client this time.
  `SampleReportGallery.astro` and `samples_fragment.html` are left in
  place, unused, in case this is revisited.
- Verified all four changed pages by screenshot after rebuilding.

---

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
