// Verbatim from "Website Copy Deck" v2, section "Home (/)".
// Do not reword. See CHANGELOG.md for how this file maps to the deck.
import type { Faq, ServiceCard, Step } from '../types';

export const home = {
  hero: {
    kicker: 'Bookkeeping & Business Support for Plain Communities',
    headline: 'We handle the office. You run the business.',
    paragraph:
      'The work itself is not the problem — the work is good, and the customers keep coming. The problem is the second job that rides along with it: the billing, the bank papers, the payroll hours, the letters that need answering. That job waits for evening, and evening is never long enough. We carry the second job for you, by mail and phone, and send back numbers you can read.',
  },

  deskInCorner: {
    heading: 'The desk in the corner',
    paragraphs: [
      'Picture a cabinet shop with six men and a waiting list. The owner can tell you, to a sixteenth of an inch, how a raised-panel door ought to fit. Ask him what the shop cleared in March, though, and the honest answer sits in a basket of papers on a desk in the corner — and the basket is never empty. An invoice from February still has not been paid, and no one has noticed. The liability policy renewed itself higher for the third year straight, and no one asked why.',
      'That owner is not careless; he is putting his attention where the work is. But an outgrown office never sends a bill for what it costs. It collects quietly — in money earned but never gathered in, in costs that climb a little each year unquestioned, in prices set by feel because no one can say which jobs truly pay. Books that are opened once a year, at tax time, tell you what happened only after it is too late to matter.',
    ],
    pullQuote:
      'Every bench in the shop keeps a square, a level, and a tape within arm’s reach. The numbers are a tool of the same kind — yet in many a good business, nobody can lay a hand on them.',
  },

  questions: {
    heading: 'The questions your books should answer',
    intro:
      '“For which of you, intending to build a tower, sitteth not down first, and counteth the cost?” — Luke 14:28. Books kept only to satisfy the tax man are done when the return is filed. Books kept for the owner earn their keep all year, because they answer — while acting still helps — the questions you already carry:',
    items: [
      'Which work is truly paying? At the end of a big job, feelings say one thing. The figures sometimes say another.',
      'Who owes me, and since when? Every unpaid bill is your cash resting in someone else’s drawer.',
      'What is coming due? Bills lined up and known ahead of time, not discovered when they land.',
      'Is there room for the next step? The new machine, the added man, the bigger building — reckoned before the money is spent, not after.',
      'What is quietly climbing? Fuel, coverage, materials — a creeping cost should be caught the month it moves, not at year’s end.',
    ] satisfies string[],
  },

  whatWeDo: {
    heading: 'What we do',
    cards: [
      { title: 'Keep your books', body: 'Every account balanced every month, every entry where it belongs. Books that are always current — and always yours.' },
      { title: 'Mail you a report you can read', body: 'A short monthly report that opens with plain sentences, not columns. It reaches you by mail, fax, email, or hand — your choice.' },
      { title: 'Send invoices, collect what’s owed', body: 'Tell us the job over the telephone and the invoice goes out that day. When a bill sits unpaid, we send the statement and make the polite call — as your office, in your name.' },
      { title: 'Answer your phone, write your letters', body: 'A telephone line answered for your business matters, and letters put into proper form from a phone call. You say it; we write it; it goes out.' },
      { title: 'Hunt for savings', body: 'Interest, coverage, processing fees, forgotten subscriptions. Our pay for this work is a portion of what you actually save — nothing found, nothing owed.' },
      { title: 'Printing & forms at group prices', body: 'Forms, signs, printing, and advertising design bought together with our other clients — twenty shops buying as one get a price one shop cannot.' },
    ] satisfies ServiceCard[],
    link: { label: 'See everything we do, plainly stated →', href: '/services' },
  },

  seeReport: {
    heading: 'See the report before you ask for it',
    paragraph:
      'No two businesses get the same pages, but every page earns its place the same way: by settling something an owner needs to know. How sales truly compare. Where the money went. Who owes you. What is left in the bank.',
    button: { label: 'See the whole sample report', href: '/samples' },
    subheading: 'Sales, measured fairly',
    caption: 'June beside last June — the only fair yardstick for a seasonal trade.',
  },

  threeSteps: {
    heading: 'Three steps, start to finish',
    steps: [
      { title: 'The Second Look.', body: 'Ship us a year’s records — we can send a prepaid UPS label — and for $500, credited in full against setup if you join, you receive a sample report built from your own figures and a written list of everything we found.' },
      { title: 'The setting up.', body: 'Accounts put in order, reports chosen and shaped, a simple routine settled for moving papers back and forth. A few weeks, without hurry.' },
      { title: 'The rhythm.', body: 'Papers flow in on schedule, the report comes back every month, and anything that needs your eye reaches you promptly — by phone or note, as you prefer.' },
    ] satisfies Step[],
    link: { label: 'The Second Look, in full →', href: '/second-look' },
  },

  bookletBand: {
    brandLine: 'The Plain Office',
    cardTitle: 'COUNTING THE COST',
    cardSubtitle: 'A Plain Guide to Knowing Your Numbers, Finding the Bottleneck, and Keeping More of What You Earn',
    cardKicker: 'BOOKKEEPING & BUSINESS SUPPORT',
    kicker: 'Free · Mailed to your shop · No obligation',
    heading: 'Counting the Cost',
    paragraph:
      'A plain guide to knowing your numbers, finding the bottleneck, and keeping more of what you earn. Twenty-four pages, free, and complete in themselves — take every idea in them and put it to work, whether or not we ever hear from you.',
    button: { label: 'Have it mailed to you', href: '/booklet' },
  },

  faqTeaser: {
    heading: 'Plain answers',
    items: [
      { question: 'Do I need a computer?', answer: 'No — and you never will. The mailbox and the telephone carry the whole arrangement.' },
      { question: 'Who sees my numbers?', answer: 'Two people: your bookkeeper and the senior man who checks the work. Your figures go no further, and we will put that in writing.' },
      { question: 'I already have a bookkeeper.', answer: 'Keep them — and let the Second Look serve as a checkup. Either you learn, with proof, that you are well served, or you learn you have been settling for less.' },
    ] satisfies Faq[],
    link: { label: 'All the questions folks ask us →', href: '/second-look' },
  },
} as const;
