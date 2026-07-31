// What We Do (/services) — client clarified 2026-07-31 that this is
// the real title for the content previously built as a separate
// "About" page/route. The old placeholder What We Do content (Copy
// Deck's "Who runs your office?") and the separate About page/nav
// item are both removed; this is the only surviving version.

export const services = {
  headline: 'Built to Still Be Here in Twenty Years.',
  intro:
    'We believe in enduring stability. Our approach to bookkeeping and financial management is rooted in the timeless principles of accuracy, discretion, and meticulous record-keeping. We are not a trendy startup; we are a reliable institution for your business.',

  privacyPromise: {
    heading: 'The Privacy Promise',
    body: 'Your numbers are your business. Our business is keeping them precise, organized, and entirely confidential. We operate with the discretion of a private bank and the exactitude of a master archiver.',
  },

  conventions: {
    heading: 'Plain Conventions',
    items: [
      { icon: 'book', title: 'Meticulous Records', body: 'Every transaction is documented, verified, and stored with an archivist’s care. We leave nothing to interpretation.' },
      { icon: 'shield', title: 'Absolute Discretion', body: 'Security isn’t just software; it’s a culture. Your financial standing remains strictly between you and your ledger.' },
      { icon: 'compass', title: 'Structural Integrity', body: 'We build financial frameworks designed to withstand audits, market shifts, and the test of time.' },
    ],
  },

  honestFit: {
    heading: 'An Honest Fit',
    body: 'We aren’t for everyone. If you seek rapid, automated shortcuts or creative accounting, we are not the firm for you. We serve clients who value precision, clarity, and the peace of mind that comes from knowing their financial foundation is unshakeable.',
  },

  verdict: {
    kicker: 'The Verdict',
    quote: 'Judge us not by our promises, but by the impeccable order of the work.',
  },
} as const;
