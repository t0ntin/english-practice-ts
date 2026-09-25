export type PracticeSentence = {
  english: string;
  spanish: string;
};

export type SuggestTopic = {
  title: string;
  incorrect: string[];
  correct: string[];
  practice: PracticeSentence[];
  note: string;
};