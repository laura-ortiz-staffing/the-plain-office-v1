// Contact page — matches the approved Figma screen (2026-07-30).
// Full rewrite: "Correspondence Routes" (Write/Telephone/Facsimile/
// Electronic Mail with icons) replaces the old four-channel list, and
// the form is now a "Direct Inquiry Form" with a reach-method dropdown
// instead of a plain three-checkbox "how shall we reach you." Phone/
// fax/mail/email values themselves still live in src/data/site.ts.

export const contact = {
  headline: 'Reach us by the road you prefer.',
  intro:
    'We maintain traditional avenues of correspondence alongside modern methods, ensuring our accessibility matches your preferred mode of professional communication.',

  routesHeading: 'Correspondence Routes',
  routes: [
    { icon: 'mail', label: 'Write' },
    { icon: 'phone', label: 'Telephone' },
    { icon: 'fax', label: 'Facsimile' },
    { icon: 'at', label: 'Electronic Mail' },
  ],

  form: {
    heading: 'Direct Inquiry Form',
    subtext: 'Please provide your details below. We aim to respond within one business day.',
    nameLabel: 'Full Name / Salutation',
    namePlaceholder: 'e.g., Jane Doe',
    businessLabel: 'Business or Trade',
    businessPlaceholder: 'e.g., Mercantile Co.',
    reachMethodLabel: 'Preferred Reach Method',
    reachMethodChoices: ['Electronic Mail', 'Telephone', 'Write', 'Facsimile'],
    identifierLabel: 'Contact Identifier',
    identifierPlaceholder: 'Email address or Phone number',
    messageLabel: 'Message or Inquiry',
    messagePlaceholder: 'Please detail the nature of your request…',
    submitLabel: 'Submit Inquiry',
  },

  thankYou: {
    heading: 'Thank you kindly.',
    body: 'We will answer within two business days, by whichever way you gave us.',
    returnLinkLabel: 'Return to Home',
  },
} as const;
