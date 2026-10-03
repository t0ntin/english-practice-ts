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

// SUGGEST SECTION

export type CommonErrorsObj = {
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

// THE PAST SECTION

export type PastFlags = {
  currentStory: number,
  currentSentence: number,
}

export type PastSentence = {
  done: boolean;
  toPractice: boolean;
  spanish: string;
  correct: string;
  translations: string[];
}

export type PastStories = {
  title: string;
  sentences: PastSentence[];
}


// DO-DOES SECTION

export type DoDoesFlagsObj = {
  lastSelectedElement: HTMLButtonElement |null;
  // userAnswer:null,
  currentSentenceIndex: number;
  currentGroupIndex: number;
  // chosenSentence: [],
  correctAnswersCounter: number;
}

export type Spanish = {
  text: string;
  role: string;
};

export type English = {
  text: string;
  role: string;
};

export type DoDoesObj = {
  key: string;
  complete: string;
  spanish: Spanish[];
  english: English[];
};

export type DoDoesData = {
  baseSentence: string;
  phrases: DoDoesObj[];
};


// REGVERBS SECTION

export type RegVerbFlags = {
  currentVerbCommon: number;
  currentVerbUncommon: number;
  currentVerbGroup: string;
}

export type VerbGroup = {
  mainVerbs1?: string[];
  mainVerbs2?: string[];
  commonVerbs?: string[];
  uncommonVerbs?: string[];
}

export type AllVerbsObj = {
  [verb: string]: string[];
};