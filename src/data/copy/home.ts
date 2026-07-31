// Home page copy — matches the approved Figma design (screenshot
// reviewed 2026-07-30), NOT the original Website Copy Deck text above.
// The Figma content differs materially from the Copy Deck: a different
// hero paragraph, six different services, a different FAQ, and —
// importantly — a "free 3-month review" Second Look offer instead of
// the $500/year-of-records terms used everywhere else on the site
// (Copy Deck, Build Brief, /second-look page, both forms). Flagged to
// the client 2026-07-30; this file follows the Figma exactly pending
// their confirmation of which is the source of truth. See CHANGELOG.md.

export const home = {
  hero: {
    kicker: 'Bookkeeping & Business Support for Plain Communities',
    headline: 'We Handle the Office. You Run the Business.',
    paragraph:
      "You didn't start a business to sit at a desk. You started it to build, to serve, and to provide. We take the paperwork off your shoulders so you can get back to the shop floor or the job site.",
  },

  deskInCorner: {
    heading: 'The Desk in the Corner',
    paragraph:
      "Every night, it's the same. You finish a long day of hard work, only to face a stack of receipts, invoices, and bank statements. The numbers are there, but they aren't telling you what you need to know. Are you actually making a profit? Can you afford that new piece of equipment?",
    missionCard: {
      title: 'Our Mission',
      body: 'To bring clarity to the numbers so you can lead with confidence.',
    },
    pullQuote: 'Every bench in the shop is earning money. The one desk in the office is only costing it.',
  },

  questions: {
    items: [
      'What is my true profit per job?',
      'Which customers pay on time?',
      'How much sales tax do I owe?',
      'Is my overhead too high?',
      'Where is my cash actually going?',
    ],
    heading: 'The Questions Your Books Should Answer',
  },

  practicalSupport: {
    heading: 'Practical Support',
    cards: [
      { icon: 'book', title: 'Keep Your Books', body: 'Full-service data entry and ledger management. We ensure every penny is accounted for with meticulous detail.' },
      { icon: 'mail', title: 'Mail You a Report', body: 'Simple, printed monthly summaries delivered to your door. No login required—just clear numbers on paper.' },
      { icon: 'coins', title: 'Manage Accounts', body: 'We track what you owe and what is owed to you. We handle the follow-ups so you can maintain relationships.' },
      { icon: 'bank', title: 'Bank Reconciliations', body: 'Syncing your bank statements with your ledger to catch errors and prevent fraud before they become problems.' },
      { icon: 'document', title: 'Sales Tax Filing', body: 'Worry-free compliance. We calculate and file your sales tax returns accurately and always on schedule.' },
      { icon: 'chart', title: 'Profit Analysis', body: 'Deeper insights into your margins. We help you identify which parts of your business are truly thriving.' },
    ],
  },

  seeReport: {
    eyebrow: 'Transparent, easy-to-read bookkeeping. No complicated software, just your numbers.',
    heading: 'See the Report Before You Ask for It',
    card: {
      title: 'Monthly Operations Summary',
      brand: 'The Plain Office',
      subtitle: 'October 2024 · Prepared for Miller Woodworking',
      lines: [
        { label: 'Total Sales', value: '$42,850.00', tone: 'normal' },
        { label: 'Material Costs', value: '($12,400.00)', tone: 'negative' },
        { label: 'Labor Expense', value: '($15,200.00)', tone: 'negative' },
        { label: 'Gross Margin', value: '$15,250.00', tone: 'total' },
      ],
      chartLabel: 'Growth Trend',
      note: 'Note: Your material costs increased by 12% this month. We should review our supplier pricing in November.',
    },
  },

  threeSteps: {
    steps: [
      { number: '1', title: 'The Second Look', body: "We review your last three months of books for free. If we can't improve your clarity, we'll tell you." },
      { number: '2', title: 'Setting Up', body: 'We organize your accounts, clean up the backlog, and establish a system that works for your workflow.' },
      { number: '3', title: 'The Rhythm', body: 'You mail us receipts and bank statements; we mail you reports. A monthly cadence of clarity.' },
    ],
    heading: 'Three Steps, Start to Finish',
  },

  freeResource: {
    kicker: 'Free Resource',
    title: '"Counting the Cost"',
    paragraph: "We've compiled our best advice on business stewardship into a 24-page printed booklet. No fluff, just practical wisdom for plain businessmen.",
    checklist: [
      'The 5 fatal mistakes in small business bookkeeping',
      'How to read a Profit & Loss statement in 60 seconds',
      'Balancing growth with financial peace',
    ],
    linkLabel: 'Request your copy by mail',
    linkHref: '/booklet',
  },

  faqTeaser: {
    items: [
      { question: 'Do I need a computer?', answer: 'No. We work via mail and telephone. If you prefer to keep everything on paper, we are perfectly set up to support that way.' },
      { question: 'Is my information private?', answer: 'Absolutely. We understand the value of confidentiality in our community. Your numbers never leave our office except to come back to you.' },
      { question: 'What if my books are a mess?', answer: 'That is why we are here. Most of our clients come to us with "the box of receipts." We specialize in sorting it out and bringing order to the chaos.' },
    ],
    heading: 'Plain Answers',
  },

  finalCta: {
    heading: 'Find Out What Your Books Have Been Keeping From You',
    note: 'No obligation. Just the truth about your numbers.',
  },
} as const;
