// The Second Look page — matches the approved Figma screen
// (2026-07-30). Full rewrite: no more "$500 fee, credited against
// setup" — the new framing is a free review that earns a $500 credit
// toward future service (consistent with Home's "free" wording). The
// six FAQs and "what it costs" sections from the old Copy Deck are
// dropped entirely; "How We Get Your Records" replaces "Getting your
// records to us" with different terms (50-mile radius, bonded
// courier, secure prepaid lockbox). The thank-you paragraph is the one
// piece of copy that carried over unchanged.

export const secondLook = {
  kicker: 'The Second Look',
  headline: 'A Careful Review of Your Books.',
  intro:
    'Before making major decisions or hiring full-time help, let us examine the state of your records. We provide clarity, correct past errors, and establish a clean baseline.',
  creditNote: 'Includes a $500 credit toward future bookkeeping services if you choose to continue with us.',

  terms: {
    heading: 'The Terms Plainly',
    paragraphs: [
      'We approach your records with the meticulousness of an auditor and the practical sensibility of a small business owner. A ‘Second Look’ is not a cursory glance; it is a deep reconciliation of your historical data against bank statements, identifying leaks, miscategorizations, and unrecorded liabilities.',
      'This service is ideal for businesses that have self-managed their books, experienced turnover in their accounting staff, or simply feel uncertain about the accuracy of their current financial reports. We present our findings in a straightforward, bound report that you can present to lenders, partners, or tax professionals.',
    ],
  },

  gettingRecords: {
    heading: 'How We Get Your Records',
    subtext: 'Physical or digital, we make it secure and simple.',
    options: [
      { icon: 'truck', title: 'We Ship a Box', body: 'For physical receipts and ledgers, we send a secure, prepaid lockbox directly to your office.' },
      { icon: 'tag', title: 'Prepaid Label', body: 'Already have your documents boxed? We provide an insured, expedited shipping label to send them to our facility.' },
      { icon: 'courier', title: 'Local Pickup', body: 'For businesses within a 50-mile radius, our bonded courier will collect the records from you personally.' },
    ],
  },

  form: {
    heading: 'Request a Second Look',
    subtext: 'Please fill out this card. We will reply within one business day to discuss next steps.',
    bestTimeChoices: ['Morning (8am - 12pm)', 'Afternoon (12pm - 5pm)', 'Evening (5pm - 8pm)'],
    booksKeptPlaceholder: "e.g., 'Using Excel, haven't reconciled since March.'",
    submitLabel: 'Submit Request',
  },

  thankYou: {
    heading: 'Thank you kindly.',
    body: 'Within a few days you will receive a short list of what to gather — and a prepaid UPS shipping label, if you would like one. Within a few weeks of your records arriving, you will hold a report built from your own figures and the written list of what we found. After that, the deciding is yours — no calls chasing you, no pressure.',
    returnLinkLabel: 'Return to Services',
    returnLinkHref: '/services',
  },
} as const;
