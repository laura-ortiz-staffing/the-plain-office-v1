// Verbatim from "Website Copy Deck" v2, section "The Second Look (/second-look)".
import type { Faq } from '../types';

export const secondLook = {
  kicker: 'The Second Look · $500, credited',
  headline: 'Find out what your books have been keeping from you',
  intro:
    'Box up a year’s records — whatever shape they are in — and ship them to us. What comes back is two things: a sample monthly report built from your own figures, so you see exactly what you would be receiving, and a written list of everything we turned up — mistakes, money owed to you, and costs worth challenging.',

  terms: {
    heading: 'The terms, plainly',
    body: 'The Second Look costs $500, credited back in full against your setup if you join us — so a serious inquiry ends up costing nothing extra. Everything we find is yours to keep whether you join or not, and most owners recover the fee several times over from the first item on the list. If your books turn out to be in good order, we will say exactly that.',
  },

  gettingRecordsToUs: {
    heading: 'Getting your records to us',
    paragraphs: [
      'You ship; we return. Pack the records in a box and send them by whatever carrier you trust — or ask us for a prepaid UPS label, and the shipping costs you nothing but the packing. When the work is done, everything goes back to you the same way it came.',
      'If you are near us: within an hour or two of our office, we are glad to handle it in person — pick up the records ourselves, shake your hand, and when the findings are ready, go over them with you at your own table.',
    ],
  },

  whatHappensAfter: {
    heading: 'What happens after',
    steps: [
      { title: 'The setting up.', body: 'Your accounts are put in order, the reports are chosen and shaped, and a simple routine is settled for papers moving back and forth. It takes a few weeks and one or two unhurried conversations.' },
      { title: 'The rhythm.', body: 'Papers come in on a steady schedule — mail, fax, email, or drop-off. The books stay current, the report arrives every month, and anything needing your attention reaches you promptly, by phone or by note.' },
    ],
  },

  cost: {
    heading: 'What it costs',
    paragraphs: [
      'One fixed monthly figure, agreed before we start and put in writing — no meter running, no hourly surprises. A business with a lighter paper load generally starts around $700 a month; a full office for a shop with a crew falls between $1,500 and $3,000. Weigh that against the $2,500 to $4,000 a month an office hire commands before benefits and turnover, and judge it the way you judge any purchase — by what it brings back.',
      'Service runs month to month, with no long contract — and a man who leaves takes his books with him, current and complete. We would rather hold a client with good work than with a signature.',
    ],
  },

  faqHeading: 'Questions folks ask us',
  faqs: [
    { question: 'Who sees my numbers?', answer: 'Two people: the bookkeeper who keeps your account and the senior man who checks his work. It goes no further — not compared, not mentioned, not hinted at — and we will put that promise on paper. We understand what a man’s figures mean in a small community.' },
    { question: 'We already use email — or a computer of our own.', answer: 'Then that is how we will work with you. Spreadsheets and email, paper and telephone, or any mixture of the two — the routine bends to your habits, not ours.' },
    { question: 'I already have a bookkeeper.', answer: 'Keep them, and let the Second Look serve as a checkup. Either you learn, with evidence in hand, that you are well served — worth $500 to know — or you learn you have been settling for less. Both answers pay for themselves.' },
    { question: 'Do I need a computer?', answer: 'No — and you never will. The mailbox and the telephone carry the whole arrangement.' },
    { question: 'My books are a year behind.', answer: 'So were many of our clients’ when they started. Catch-up work is quoted separately and plainly before we begin — and once you are current, the monthly rhythm holds you there.' },
    { question: 'Who are you?', answer: 'The office arm of a family of businesses with years of service to Plain communities behind it, including design and production for Plain publications many households already know. Ask around about us — we would.' },
  ] satisfies Faq[],

  form: {
    heading: 'Ask for the Second Look',
    intro: 'The same card that is bound into the back of the booklet. A sentence or two in each blank is plenty.',
    bestTimePlaceholder: 'Early morning, noon, evening…',
    booksKeptPlaceholder: 'A sentence or two is plenty.',
    contactPrefChoices: ['Mail', 'Telephone', 'Fax', 'Email'],
    submitLabel: 'Request the Second Look',
    note: '$500, credited in full against your setup if you join us. Everything it finds is yours to keep either way.',
  },

  thankYou: {
    heading: 'Thank you kindly.',
    body: 'Within a few days you will receive a short list of what to gather — and a prepaid UPS shipping label, if you would like one. Within a few weeks of your records arriving, you will hold a report built from your own figures and the written list of what we found. After that, the deciding is yours — no calls chasing you, no pressure.',
  },
} as const;
