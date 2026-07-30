// Site-wide config: contact placeholders, navigation, footer text.
// Contact values updated 2026-07-30 to match the values shown
// consistently across the approved Figma screens (phone, fax, email,
// address). Still placeholders — the street address in particular
// reads like a placeholder ("1420 Bookbinder Lane") — confirm real
// values with the office before launch.

export const site = {
  name: 'The Plain Office',
  tagline: 'Reliable numbers, better decisions, a bridge to what’s next.',
  browserTitle: 'The Plain Office — Reliable Numbers, Better Decisions',
  metaDescription:
    'Bookkeeping and financial clarity built on accuracy, discretion, and meticulous record-keeping. Reliable numbers, better decisions.',

  // PLACEHOLDER — confirm with the office before launch
  phoneDisplay: '(717) 555-0123',
  phoneHref: 'tel:+17175550123',
  faxDisplay: '(717) 555-0124',
  email: 'inquiries@plainoffice.com',
  mailingAddressLine1: '1420 Bookbinder Lane, Suite 400',
  mailingAddressLine2: 'Philadelphia, PA 19102',
  businessHoursNote: 'Hours: 9am – 5pm EST, Mon–Fri',

  verse:
    '"For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?" — Luke 14:28',

  bookletPdfPath: '/documents/counting-the-cost.pdf',

  // The Figma nav headers show six items with no "Home" link at all.
  // Kept "Home" anyway — that was the client's own explicit usability
  // instruction (2026-07-30), independent of what any screen shows.
  nav: [
    { label: 'Home', href: '/' },
    { label: 'What We Do', href: '/services' },
    { label: 'Sample Reports', href: '/samples' },
    { label: 'The Booklet', href: '/booklet' },
    { label: 'The Second Look', href: '/second-look' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  // Referenced by the new footer design; no content/pages exist yet.
  footerLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact Us', href: '/contact' },
  ],

  ctaBooklet: { label: 'Get the free booklet', href: '/booklet' },
  ctaSecondLook: { label: 'Ask for the Second Look', href: '/second-look' },

  preferPaperNote:
    'Prefer paper? Telephone (717) 555-0123 or write to The Plain Office, 1420 Bookbinder Lane, Suite 400 — the mailbox and the telephone work as well as anything on this page.',
} as const;
