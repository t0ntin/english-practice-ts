// PRACTICE SECTION

export type SentenceObj = {
  sentence: string;
  translation: string;
  isArchived: boolean;
}


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

// QUESTIONS SECTION

export type QuestionFlags = {
  currentSentence: number;
  currentQuestion: number;
}

export type Chunk = {
  text: string;
  role: string;
}

export type Question = {
  type: string;
  partOfSpeech: string;
  role: string;
  instruction: string;
  text: string;
  hint1: string;
  hint2: string;
  chunks: Chunk[];
}

export type QuestionSet = {
  statement: {
    text: string;
    chunks: Chunk[];
  }
  questions: Question[];
}