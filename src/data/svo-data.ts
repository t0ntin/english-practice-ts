import type { SvoFlags, SvoSentenceGroup } from "../types/types";

export const svoFlags: SvoFlags = {
  chosenSentence: [],
  currentSentenceIndex: 0,
  currentGroupIndex: 0,
  correctAnswersCounter: 0,
  
}


export const svoSentences:  SvoSentenceGroup = [
  [
    {
      words: [
        { text: 'John', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'in the park', color: 'rgb(227, 125, 0)' },
        { text: 'soccer', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: '___', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'in the park', color: 'rgb(227, 125, 0)' },
        { text: 'soccer', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'John', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'soccer', color: 'green' },
        { text: 'in the park', color: 'rgb(227, 125, 0)' }
      ],
      correct: true
    },
    {
      words: [
        { text: 'In the park', color: 'rgb(227, 125, 0)' },
        { text: '___', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'soccer', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'In the park', color: 'rgb(227, 125, 0)' },
        { text: 'plays', color: 'blue' },
        { text: 'soccer', color: 'green' },
        { text: 'John', color: 'red' }
      ],
      correct: false
    }
  ],
  [
    {
      words: [
        { text: 'Mike', color: 'red' },
        { text: 'sweeps', color: 'blue' },
        { text: 'on weekends', color: 'rgb(227, 125, 0)' },
        { text: 'the floor', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: '___', color: 'red' },
        { text: 'sweeps', color: 'blue' },
        { text: 'on weekends', color: 'rgb(227, 125, 0)' },
        { text: 'the floor', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'on weekends,', color: 'rgb(227, 125, 0)' },
        { text: 'sweeps', color: 'blue' },
        { text: 'the floor', color: 'green' },
        { text: 'Mike', color: 'red' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'Mike', color: 'red' },
        { text: 'sweeps', color: 'blue' },
        { text: 'the floor', color: 'green' },
        { text: 'on weekends', color: 'rgb(227, 125, 0)' }
      ],
      correct: true
    },
  ],
  [
  {
    words: [
      { text: 'I', color: 'red' },
      { text: 'brush', color: 'blue' },
      { text: 'my teeth', color: 'green' },
      { text: 'twice a day', color: 'rgb(227, 125, 0)' }
    ],
    correct: true
  },
  {
    words: [
      { text: 'I', color: 'red' },
      { text: 'brush', color: 'blue' },
      { text: 'twice a day', color: 'rgb(227, 125, 0)' },
      { text: 'my teeth', color: 'green' }
    ],
    correct: false
  },
  {
    words: [
      { text: '___', color: 'red' },
      { text: 'brush', color: 'blue' },
      { text: 'twice a day', color: 'rgb(227, 125, 0)' },
      { text: 'my teeth', color: 'green' }
    ],
    correct: false
  },
  {
    words: [
      { text: 'Twice a day,', color: 'rgb(227, 125, 0)' },
      { text: 'I', color: 'red' },
      { text: 'brush', color: 'blue' },
      { text: 'my teeth', color: 'green' }
    ],
    correct: false
  }
  ],
  [
    {
      words: [
        { text: 'Ana and Peter', color: 'red' },
        { text: 'complete', color: 'blue' },
        { text: 'before the deadline', color: 'rgb(227, 125, 0)' },
        { text: 'assignments', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'Ana and Peter', color: 'red' },
        { text: 'complete', color: 'blue' },
        { text: 'assignments', color: 'green' },
        { text: 'before the deadline', color: 'rgb(227, 125, 0)' }
      ],
      correct: true
    },
  {
    words: [
      { text: '___', color: 'red' },
      { text: 'complete', color: 'blue' },
      { text: 'before the deadline', color: 'rgb(227, 125, 0)' },
      { text: 'assignments', color: 'green' }
    ],
    correct: false
  },
  {
    words: [
      { text: 'Before the deadline,', color: 'rgb(227, 125, 0)' },
      { text: 'complete', color: 'blue' },
      { text: 'assignments', color: 'green' },
      { text: 'Ana and Peter', color: 'red' }
    ],
    correct: false
  }
  ]
];
