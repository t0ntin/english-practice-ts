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

// S-WORDS

export type SWordsObj = {
  "step": string;
  "practiceContent": string[];
}

// PLURALS 

export type PluralsObj = {
  "step": string;
  "practiceContent": string[] | string[][];
}

// SVO

export type SvoFlags = {
  chosenSentence: { text: string; color: string }[];
  currentSentenceIndex: number;
  currentGroupIndex: number;
  correctAnswersCounter: number;
}

type SvoSentenceObj = {
  words: SvoWord[],
  correct: boolean,
}

type SvoWord = {
  text: string;
  color: string;
}

export type SvoSentenceGroup = SvoSentenceObj[][]

// TO BE 

export type ToBeFlags = {
  currentQuestion: number;
  currentNegation: number;
  currentNegation2: number;
  correctPossibilities: number;
  currentSentence: number;
  currentSentence2: number;
  currentHint: number;
  essay2Finished: boolean;
}

// I am using this inside a weakmap instead of assigning an object to an HTML element like I was doing in JS.
export type PopupPronounButtonData = { 
  pronounClicked: HTMLButtonElement; 
  translation: string 
}

export type ClickedButton = { 
  button: HTMLButtonElement; 
  selected: boolean; 
}

// ====== subjectPronouns ======

export type ToBeDataObj = {
  subjectPronouns: SubjectPronouns;
  verbToBe: SubjectPronouns;
  contractions: SubjectPronouns;
  translate: Translate;
  translate2: Translate;
  translate3: Translate;
  translate4: Translate;
  translate5: Translate5;
  translate6: Translate6;
  translate7: Translate7;
  translate8: Translate8;
  essay: EssayObj;
  essay2: Essay2Obj;
}

export type SubjectPronouns = {
  title: string;
  pairs: Pair[];
}

export type Pair = {
  english: string;
  spanish: string;
}

// ====== verbToBe ======

// (same as subjectPronouns)

// ====== contractions ======

// (same as subjectPronouns)

// ====== translate 1-4 ======

type Translate = {
  title: string;
  instructions: string;
}

// ====== translate 5 ======

type Translate5 = {
  title: string;
  instructions: string;
  sentences: Pair[];
}

// ====== translate 6 ======

type Translate6 = {
  title: string;
  instructions: string;
  sentences: Translate6Sentence[];
}

// type Translate6Sentences = {
//   sentences: TranslateSentence[];
// }

type Translate6Sentence = {
  statement: string;
  question: string;
  chunks: Chunk[];
}

// ====== translate 7 ======

type Translate7 = {
  title: string;
  instructions: string;
  negationData: NegationsObj[]
}

type NegationsObj = {
  statement: string;
  negations: Translate7Negations[];
}

type Translate7Negations = {
  negation:string;
  class: string;
}

// ====== translate 8 ======

type Translate8 = {
  title: string;
  instructions: string;
  sentences: Translate7SentenceObj[];
}

type Translate7SentenceObj = {
  statement: string;
  correctPossibilities: number;
  negations: Translate8Negations[];
}

type Translate8Negations = {
  negation: string;
  correct: boolean;
}

// ====== essay ======

type EssayObj = {
  title: string;
  instructions: string;
  paragraph: ParagraphSentence[];
}

export type ParagraphSentence = {
  text: string;
  translation: string;
  words: Words[];
}

type Words = {
  word: string;
  translation: string;
}

// ====== essay 2======

type Essay2Obj = {
  title: string;
  instructions: string;
  sentences: Essay2Sentence[];
}

type Essay2Sentence = {
  spanish: string;
  english: string;
  english2: string;
  hints: Hint[]
}

type Hint = {
  word: string;
  translation: string;
}
