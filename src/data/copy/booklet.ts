// Verbatim from "Website Copy Deck" v2, section "The Booklet (/booklet)".

export const booklet = {
  kicker: 'The Booklet · Free',
  headline: 'Counting the Cost',
  intro:
    'A plain guide to knowing your numbers, finding the bottleneck, and keeping more of what you earn. It is written for the owner whose operation has outgrown its paperwork — the shop with a crew, the builder with two trailers, the store, the farm that hires. It is free, it is short, and it is complete in itself: every idea in it can be put to work whether or not we ever hear from you.',

  coverCard: {
    brandLine: 'The Plain Office',
    title: 'COUNTING THE COST',
    subtitle: 'A Plain Guide to Knowing Your Numbers, Finding the Bottleneck, and Keeping More of What You Earn',
    kicker: 'BOOKKEEPING & BUSINESS SUPPORT',
  },

  contents: {
    heading: 'What is in it',
    chapters: [
      'The Evening Ledger',
      'What Good Books Are For',
      'Ten Signs Your Bookkeeping Is Falling Short',
      'The Report You Ought to Get Every Month',
      'The Slowest Station Sets the Pace',
      'Money Hiding in Plain Sight',
      'The Office Question',
      'How It Works, Plainly',
      'Questions Folks Ask Us',
      'The Next Step Costs a Postage Stamp',
    ] satisfies string[],
  },

  excerpt: {
    quote:
      '“Here is the trouble: the cost of an outgrown office is not the bookkeeper’s fee you saved. It is the $16,200 sitting in unpaid invoices nobody chased. It is the premium creeping up three years running because nobody asked why. It is the price you did not raise because you could not tell whether the big jobs were making money or just making noise. It is decisions made blind.”',
    caption: '— from chapter 1, The Evening Ledger',
  },

  form: {
    heading: 'Request the booklet',
    deliveryChoices: [
      { value: 'mail_and_pdf', label: 'Mail me the printed booklet and let me read the PDF now' },
      { value: 'mail', label: 'Mail me the printed booklet' },
      { value: 'pdf', label: 'Just the PDF, right away' },
    ],
    tradePlaceholder: 'Sheds, harness, retail, dairy…',
    submitLabel: 'Send my booklet',
    note: 'We will send you the booklet and nothing else, unless you ask. Your booklet goes into the mail within two business days.',
    replyCardNote: 'A reply card is bound into the back of the printed booklet — postage paid. The mail works as well as this form ever will.',
  },

  thankYou: {
    heading: 'Thank you kindly.',
    mailedParagraph: 'Your booklet will go into the mail within two business days.',
    pdfParagraphPrefix: 'If you asked for the PDF, it is here:',
    pdfLinkLabel: 'Counting the Cost (PDF)',
    whileYouWait: 'While you wait — see the sample report the booklet talks about.',
  },
} as const;
