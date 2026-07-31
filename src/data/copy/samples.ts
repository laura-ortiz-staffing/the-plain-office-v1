// Sample Reports page — matches the approved Figma screen (2026-07-30).
// The gallery now shows the Figma's six generic photo cards (client
// instruction, 2026-07-30) with placeholder images pending real
// photography, NOT the six real report artifacts from
// samples_fragment.html. That component is left in place, unused, in
// case this decision changes — see CHANGELOG.md. Build Brief v2 §3's
// requirement to show the real supplied artifacts "as-is" no longer
// applies anywhere on the live site as a result; flagged, not resolved.

export const samples = {
  kicker: 'Sample Reports',
  headline: 'Reliable Numbers, Better Decisions.',
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

  galleryHeading: 'Sample Report Gallery',
  gallery: [
    { title: 'Monthly Summary', body: 'High-level snapshot of performance.' },
    { title: 'Sales Comparison', body: 'Year-over-year and month-over-month trends.' },
    { title: 'Major Expenses', body: 'Detailed breakdown of significant outlays.' },
    { title: 'AR Aging', body: 'Status of outstanding customer invoices.' },
    { title: 'Cash Trend', body: 'Historical and projected liquidity analysis.' },
    { title: 'Books / Ledger', body: 'The foundational detailed transaction log.' },
  ],

  cta: { label: 'Ask for the Second Look', href: '/second-look' },
} as const;
