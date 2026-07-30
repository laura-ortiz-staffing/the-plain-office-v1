// Sample Reports page — matches the approved Figma screen (2026-07-30).
// The six report artifacts themselves still come from the supplied
// samples_fragment.html and are rendered as-is (see
// SampleReportGallery.astro) — the Figma shows six generic relabeled
// "photo" cards (Monthly Summary, Sales Comparison, etc.) instead, but
// Build Brief v2 §3 is explicit and repeated: "used as-is, do not
// redraw the charts or invent different numbers." Kept the real
// artifacts; restyled the page chrome around them to match the Figma.
// See CHANGELOG.md.

export const samples = {
  kicker: 'Sample Reports',
  headline: 'Reliable numbers, better decisions.',
  verse: '"A false balance is an abomination to the Lord, but a just weight is his delight." — Proverbs 11:1',

  overview: {
    heading: 'Report Overview',
    paragraph:
      'Our reports are designed to be clear, actionable, and focused on reality. We distill complex financial data into a format that reads like a well-structured document, prioritizing what you need to know now over what looks impressive but offers little insight.',
    pillarsEyebrow: 'The Four Pillars of Analysis',
    pillarsIntro: 'A disciplined approach to financial clarity, ensuring every figure serves a purpose and every report drives a decision.',
    pillars: [
      { title: '01. What Happened', body: 'A clear summary of financial activity for the period, providing the essential foundation for all subsequent analysis.' },
      { title: '02. What Changed', body: 'Key variances from previous periods or budgets, highlighting the shifts that matter most to your bottom line.' },
      { title: '03. Deserves Attention', body: 'Areas requiring immediate focus or adjustment, identified through rigorous comparison and professional judgment.' },
      { title: '04. Next Steps', body: 'Actionable recommendations based on the data, bridging the gap between raw numbers and strategic execution.' },
    ],
  },

  // Build Brief v2 §3 requires this stated plainly, above the fold, on
  // this page — kept even though the new Figma screen doesn't show it.
  disclaimer:
    'The report pages below belong to a sample shop, simplified for the page. No client’s private figures appear here, and none ever will.',

  galleryHeading: 'Sample Report Gallery',

  cta: { label: 'Ask for the Second Look', href: '/second-look' },
} as const;
