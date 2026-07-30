// Verbatim from "Website Copy Deck" v2, section "Sample Reports (/samples)".
// The six report-page artifacts themselves come from the supplied
// samples_fragment.html (build pack assets) and are rendered as-is —
// see src/components/SampleReportGallery.astro. Do not redraw them or
// invent different numbers (Build Brief v2 §3).

export const samples = {
  kicker: 'Sample Reports',
  headline: 'What you would hold in your hands each month',
  intro:
    'A handful of pages, in words first and figures after, delivered by whatever route suits you — mail, fax, email, or hand. Each page exists to settle a question an owner actually carries.',
  verse: '“A false balance is abomination to the LORD: but a just weight is his delight.” — Proverbs 11:1',
  disclaimer:
    'The figures on this page belong to an invented woodworking shop with a crew of eight, kept simple so the pages read easily. No client’s numbers appear on this page — and none ever will.',

  // Note: the per-report-page headings, pull quote, and captions are
  // NOT repeated here — they already exist verbatim inside
  // samples_fragment.html (rendered by SampleReportGallery.astro), and
  // duplicating them in this file would just be two copies to keep in
  // sync for no benefit.

  fitted: {
    heading: 'Fitted to your business, at your pace',
    paragraphs: [
      'A retail store might need only a weekly sheet — sales, deposits, balance. A builder might want every job’s spending held against its bid. A manufacturer might watch backlog and shipments beside the dollars. Weekly, monthly, or somewhere between: the pages, the pace, and the delivery all bend to the business — never the other way around.',
      'Want these pages with your own figures on them? That is what the Second Look is for.',
    ],
    button: { label: 'Ask for the Second Look', href: '/second-look' },
  },
} as const;
