// The Booklet page — matches the approved Figma screen (2026-07-30).
// Full rewrite: different framing ("A Manual for Better Decisions"),
// different table of contents, different excerpt, and a different
// form (Organization instead of Business/Trade, a required Email —
// flagged, see CHANGELOG — and a structured mailing address). The
// thank-you copy is close to the original Copy Deck wording and was
// kept.

export const booklet = {
  kicker: 'The Plain Office Foundation',
  headline: 'A Manual for Better Decisions.',
  intro:
    'Our annual printed booklet is a compilation of our most critical frameworks for understanding institutional health. It is not a marketing brochure; it is a reference manual meant to be kept on your desk and referenced when navigating complex organizational choices.',

  coverMock: {
    edition: '2024 Edition',
    title: 'The Plain Office Booklet',
    volume: 'Volume IV',
  },

  contents: {
    heading: 'Table of Contents',
    chapters: [
      { title: 'The Illusion of Certainty in Ledgers', page: '04' },
      { title: 'Structuring Debt as a Defensive Asset', page: '12' },
      { title: 'The Institutional Memory of Operations', page: '28' },
      { title: 'Frameworks for Capital Preservation', page: '41' },
    ],
  },

  excerpt: {
    quote:
      'The most profound mistakes in organizational planning do not stem from a lack of data, but from a fundamental misreading of the emotional weight carried by historical ledgers.',
    caption: 'Excerpt from Chapter 1',
  },

  form: {
    heading: 'Request a Copy',
    subtext: 'Please complete the form below to receive the current volume.',
    formatLabel: 'Preferred Format (Select One)',
    deliveryChoices: [
      { value: 'mail_and_pdf', label: 'Both Printed & PDF' },
      { value: 'mail', label: 'Printed Copy Only' },
      { value: 'pdf', label: 'Digital PDF Only' },
    ],
    submitLabel: 'Submit Request',
  },

  thankYou: {
    heading: 'Thank you kindly.',
    mailedParagraph: 'Your booklet will go into the mail within two business days.',
    pdfParagraphPrefix: 'If you asked for the PDF, it is here:',
    pdfLinkLabel: 'Counting the Cost (PDF)',
    whileYouWaitPrefix: 'While you wait —',
    whileYouWaitLinkLabel: 'see the sample report',
    whileYouWaitSuffix: 'the booklet talks about.',
  },
} as const;
