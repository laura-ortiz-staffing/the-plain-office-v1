// Shared shapes for the verbatim Copy Deck content files in ./copy/*.ts.
// Text values must be copied word-for-word from
// "The Plain Office — Website Copy Deck" (v2, July 2026). Nothing here
// should be reworded, padded, or invented — see CHANGELOG.md.

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceCard {
  title: string;
  body: string;
}

export interface ListItem {
  text: string;
}

export interface LeakItem {
  title: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface OfficeOption {
  title: string;
  body: string;
}
