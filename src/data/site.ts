// Site-wide config: contact placeholders, navigation, footer text.
// Per Build Brief v2 §8, telephone, fax, mailing address, email, and
// business hours are PLACEHOLDERS until the office confirms real values.
// Do not treat the numbers below as real — they are the Copy Deck's own
// placeholder values, carried through verbatim so nothing is invented.

export const site = {
  name: 'The Plain Office',
  tagline: 'We handle the office. You run the business.',
  browserTitle: 'The Plain Office — Bookkeeping & Business Support for Plain Communities',
  metaDescription:
    'Bookkeeping, monthly reports in plain English, invoicing, letters, and a whole office by mail and phone — for Plain businesses. We handle the office. You run the business.',

  // PLACEHOLDER — confirm with the office before launch (Brief v2 §8)
  phoneDisplay: '(717) 555-0100',
  phoneHref: 'tel:+17175550100',
  faxDisplay: '(717) 555-0101',
  email: 'office@theplainoffice.com',
  mailingAddressLine1: '[Mailing Address]',
  mailingAddressLine2: '[Town, State ZIP]',
  businessHoursNote: 'Answered during business hours; the machine listens after.',

  verse:
    '"For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?" — Luke 14:28',

  bookletPdfPath: '/documents/counting-the-cost.pdf',

  nav: [
    { label: 'What We Do', href: '/services' },
    { label: 'Sample Reports', href: '/samples' },
    { label: 'The Booklet', href: '/booklet' },
    { label: 'The Second Look', href: '/second-look' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  ctaBooklet: { label: 'Get the free booklet', href: '/booklet' },
  ctaSecondLook: { label: 'Ask for the Second Look', href: '/second-look' },

  preferPaperNote:
    'Prefer paper? Telephone (717) 555-0100 or write to The Plain Office, [Mailing Address] — the mailbox and the telephone work as well as anything on this page.',
} as const;
