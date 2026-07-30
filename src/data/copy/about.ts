// Verbatim from "Website Copy Deck" v2, section "About Us (/about)".

export const about = {
  kicker: 'About Us',
  headline: 'Built to still be here in twenty years',
  intro:
    'The Plain Office is the bookkeeping and office arm of a family of businesses that has worked alongside Plain communities for years — including design and production for Plain publications many households already have on the shelf. We are building for the next twenty years, not the next twelve months. Ask about us in the community; we would tell you to.',

  privacyPromise: {
    heading: 'The privacy promise',
    body: 'Your figures are seen by two people: the bookkeeper who keeps your account and the senior man who checks his work. They go no further — not compared, not mentioned, not hinted at — and we will put that promise on paper. We understand what a man’s figures mean in a small community.',
  },

  conventions: {
    heading: 'How we work with Plain conventions',
    paragraphs: [
      'Our office runs on modern equipment, computers included — much like an English hauler whose truck is his own. None of it enters your home or shop unless you invite it. What travels between us is only what you choose: paper, telephone, fax, or email. Some clients keep computers of their own; some never will; most sit somewhere between, and every one of those arrangements works.',
      'And when a business does not need us — too small yet, or already in good hands — we say so plainly. More than one owner has heard exactly that from us, at no charge and with our respect.',
      'Judge us the way you would judge any neighbor: by the work.',
    ],
  },

  buttons: [
    { label: 'See a sample report', href: '/samples' },
    { label: 'Get the free booklet', href: '/booklet' },
  ],
} as const;
