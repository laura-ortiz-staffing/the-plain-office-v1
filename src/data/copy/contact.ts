// Verbatim from "Website Copy Deck" v2, section "Contact (/contact)".
// Phone/fax/mail/email values themselves live in src/data/site.ts
// (single source, reused across header/footer/contact) so they are
// never typed twice and can never drift out of sync.

export const contact = {
  kicker: 'Contact',
  headline: 'Reach us by the road you prefer',
  intro:
    'Mail, telephone, fax, or email — all four lead to the same desk. A note of two or three sentences is plenty: what the business does, and how the books are kept today. We answer within two business days, by the same road you used.',

  channels: {
    write: { heading: 'Write' },
    telephone: { heading: 'Telephone' },
    fax: { heading: 'Fax' },
    email: { heading: 'Email' },
  },

  form: {
    heading: 'Or use this form',
    reachLabel: 'How shall we reach you?',
    reachHint: 'Telephone, address, or email — at least one.',
    messageLabel: 'Your message',
    submitLabel: 'Send',
  },

  thankYou: {
    heading: 'Thank you kindly.',
    body: 'We will answer within two business days, by whichever way you gave us.',
  },
} as const;
