// Verbatim from "Website Copy Deck" v2, section "What We Do (/services)".
import type { LeakItem, OfficeOption } from '../types';

export const services = {
  kicker: 'What We Do',
  headline: 'Who runs your office?',
  intro:
    'Once a business carries a crew, the office becomes a real job whether anyone admits it or not. Someone is already doing it — well or poorly, paid or unpaid, by daylight or after supper. There are four ways to fill that job, and each carries its own price.',

  officeOptions: [
    { title: 'You do it yourself, at night', body: 'The cheapest answer in cash and the dearest in everything else. The books are kept by a tired man after his real day’s work is done, and the family gets what is left of him.' },
    { title: 'You hire office help', body: 'Figure $2,500 to $4,000 a month in wages — before the desk, the training, the vacation days, and the hiring that starts over when they move on. And one hire brings one person’s worth of skills.' },
    { title: 'You use a bookkeeping service', body: 'An improvement on the shoebox, but most of them record and stop there. Nobody studies the numbers, nobody flags the drift, nobody makes the call about the bill that sits unpaid.' },
    { title: 'Or the office comes to you, by mail and phone', body: 'This is what we built: a full office staff for less than the cost of one hired hand — books, reports, invoices, statements, letters, a phone line, payroll coordination — with someone actually watching the whole of it.' },
  ] satisfies OfficeOption[],

  whatWeDoHeading: 'What the Plain Office does',
  serviceList: [
    'Books kept current and every account balanced, month after month',
    'A monthly report in plain English, shaped to your business, delivered your way',
    'Invoices and estimates prepared and sent the day you call them in',
    'Statements mailed and polite collection calls made in your business’s name',
    'Your bills sorted and readied for payment — nothing paid without your say-so',
    'Letters drafted from your phone call and mailed under your name',
    'A telephone line answered for your office matters, with messages passed along',
    'Payroll coordinated, and a tidy year-end package handed to your tax preparer',
    'A standing hunt for overpayments and creeping costs, paid only out of what it saves you',
    'Printing, forms, signage, and advertising design at shared-buying prices',
  ] satisfies string[],

  leaksHeading: 'Where the money leaks',
  leaksIntro:
    'Most businesses lose money the way a barn loses heat — through a dozen small gaps that nobody stands still long enough to notice. Each cost looks reasonable on its own; it is the drift, year over year, that nobody totals. These are the gaps we find most often:',
  leaks: [
    { title: 'Loan interest.', body: 'Notes written when rates were different. Moving a $180,000 note down two points keeps roughly $3,600 a year in your pocket — every year it runs.' },
    { title: 'Required coverage.', body: 'Where law, lender, or contract obliges you to carry it, it should at least be priced right. Fresh quotes every few years, backed by clean records, commonly come in 10–25% under a renewal nobody questioned.' },
    { title: 'Card and payment fees.', body: 'If customers pay by card, the processor’s percentage is a negotiation — not a law of nature.' },
    { title: 'Telephone and services.', body: 'Lines nobody uses, plans nobody reviewed, subscriptions nobody remembers starting.' },
    { title: 'Slow receivables.', body: 'Every week a customer keeps your money is a week you have lent it free. Steady statements shorten the wait.' },
    { title: 'Buying alone.', body: 'Supplies and printing cost less bought for twenty shops than for one.' },
  ] satisfies LeakItem[],

  arrangement: {
    heading: 'Our arrangement, plainly stated',
    body: 'A man selling advice ought to share the risk of it. On the savings hunt, we are paid out of savings that actually land in your books — you choose which findings to act on, and until they pay, we are not paid. And there is no long contract to sign: service runs month to month, and a man who leaves takes his books with him, current and complete. We would rather hold a client with good work than with a signature.',
  },

  machinery: {
    heading: 'About the machinery, honestly',
    paragraphs: [
      'We will answer the tool question before you ask it: our office runs on modern equipment, computers included. We think that is the honest arrangement — much like engaging an English hauler, whose truck is his own. None of it enters your home or shop unless you invite it, and what travels between us is only what you choose: paper, telephone, fax, or email. The machinery is ours, and it stays on our side of the fence.',
      'See what the work looks like; the deciding stays with you.',
    ],
  },

  buttons: [
    { label: 'See a sample report', href: '/samples' },
    { label: 'Ask for the Second Look', href: '/second-look' },
  ],
} as const;
