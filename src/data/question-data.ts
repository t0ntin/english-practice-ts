import type { QuestionSet, QuestionFlags } from "../types/types";

export const questionsFlags: QuestionFlags = {
  currentSentence: 0,
  currentQuestion: 0,
}

export const questions: QuestionSet[] = [
  {
    statement: {
      text: 'The doctor sees John in his office once a month',
      chunks: [
        { text: 'The doctor', role: 'subject-2' },
        { text: 'sees', role: 'verb-2' },
        { text: 'John', role: 'object-2' },
        { text: 'in his office', role: 'prep-phrase' },
        { text: 'once a month', role: 'frequency' },
      ],
    },

    questions: [
      {
        type: 'subject',
        partOfSpeech: 'The doctor',
        role: 'subject-2',
        instruction: 'Ask a question about ',
        text: 'Who sees John in his office once a month',
        hint1: 'Who...',
        hint2: '¿Quién ve a John en su oficina una vez al mes?',
        chunks: [
          { text: 'Who', role: 'interrogative' },
          { text: 'sees', role: 'verb-2' },
          { text: 'John', role: 'object-2' },
          { text: 'in his office', role: 'prep-phrase' },
          { text: 'once a month?', role: 'frequency' },
        ],
      },

      {
        type: 'verb',
        partOfSpeech: 'sees',
        role: 'verb-2',
        instruction: 'Ask a question about ',
        text: 'What does the doctor do in his office once a month',
        hint1: 'What...',
        hint2: '¿Qué hace el doctor en su oficina una vez al mes?',
        chunks: [
          { text: 'What', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'do', role: 'verb-2' },
          { text: 'in his office', role: 'prep-phrase' },
          { text: 'once a month', role: 'frequency' },
        ],
      },

      {
        type: 'object',
        partOfSpeech: 'John',
        role: 'object-2',
        instruction: 'Ask a question about ',
        text: 'Who does the doctor see in his office once a month',
        hint1: 'Who...',
        hint2: '¿A quién ve el doctor en su oficina una vez al mes?',
        chunks: [
          { text: 'Who', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'see', role: 'verb-2' },
          { text: 'in his office', role: 'prep-phrase' },
          { text: 'once a month?', role: 'frequency' },
        ],
      },

      {
        type: 'place',
        partOfSpeech: 'in his office',
        role: 'prep-phrase',
        instruction: 'Ask a question about ',
        text: 'Where does the doctor see John once a month',
        hint1: 'Where...',
        hint2: '¿Dónde ve el doctor a John una vez al mes?',
        chunks: [
          { text: 'Where', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'see', role: 'verb-2' },
          { text: 'John', role: 'object-2' },
          { text: 'once a month?', role: 'frequency' },
        ],
      },

      {
        type: 'frequency',
        partOfSpeech: 'once a month',
        role: 'frequency',
        instruction: 'Ask a question about ',
        text: 'How often does the doctor see John in his office',
        hint1: 'How often...',
        hint2: '¿Cada cuánto ve el doctor a John en su oficina?',
        chunks: [
          { text: 'How often', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'see', role: 'verb-2' },
          { text: 'John', role: 'object-2' },
          { text: 'in his office?', role: 'prep-phrase' },
        ],
      },
      
    ],
  },
  {
  statement: {
    text: 'John makes dinner quickly for his family',
    chunks: [
      { text: 'John', role: 'subject-2' },
      { text: 'makes', role: 'verb-2' },
      { text: 'dinner', role: 'object-2' },
      { text: 'quickly', role: 'adverb' },
      { text: 'for his family', role: 'prep-phrase' },
    ],
  },

    questions: [
      {
        type: 'subject',
        partOfSpeech: 'John',
        role: 'subject-2',
        instruction: 'Ask a question about ',
        text: 'Who makes dinner quickly for his family',
        hint1: 'Who...',
        hint2: '¿Quién prepara la cena rápidamente para su familia?',
        chunks: [
          { text: 'Who', role: 'interrogative' },
          { text: 'makes', role: 'verb-2' },
          { text: 'dinner', role: 'object-2' },
          { text: 'quickly', role: 'adverb' },
          { text: 'for his family?', role: 'prep-phrase' },
        ],
      },

      {
        type: 'verb',
        partOfSpeech: 'makes',
        role: 'verb-2',
        instruction: 'Ask a question about ',
        text: 'What does John do quickly for his family',
        hint1: 'What...',
        hint2: '¿Qué hace John rápidamente para su familia?',
        chunks: [
          { text: 'What', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'John', role: 'subject-2' },
          { text: 'do', role: 'verb-2' },
          { text: 'quickly', role: 'adverb' },
          { text: 'for his family?', role: 'prep-phrase' },
        ],
      },

      {
        type: 'object',
        partOfSpeech: 'dinner',
        role: 'object-2',
        instruction: 'Ask a question about ',
        text: 'What does John make quickly for his family',
        hint1: 'What...',
        hint2: '¿Qué prepara John rápidamente para su familia?',
        chunks: [
          { text: 'What', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'John', role: 'subject-2' },
          { text: 'make', role: 'verb-2' },
          { text: 'quickly', role: 'adverb' },
          { text: 'for his family?', role: 'prep-phrase' },
        ],
      },

      {
        type: 'manner',
        partOfSpeech: 'quickly',
        role: 'adverb',
        instruction: 'Ask a question about ',
        text: 'How does John make dinner for his family',
        hint1: 'How...',
        hint2: '¿Cómo prepara John la cena para su familia?',
        chunks: [
          { text: 'How', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'John', role: 'subject-2' },
          { text: 'make', role: 'verb-2' },
          { text: 'dinner', role: 'object-2' },
          { text: 'for his family?', role: 'prep-phrase' },
        ],
      },

      {
        type: 'purpose',
        partOfSpeech: 'for his family',
        role: 'prep-phrase',
        instruction: 'Ask a question about ',
        text: 'Who does John make dinner for quickly',
        hint1: 'Who...',
        hint2: '¿Para quién prepara John la cena rápidamente?',
        chunks: [
          { text: 'Who', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'John', role: 'subject-2' },
          { text: 'make', role: 'verb-2' },
          { text: 'dinner', role: 'object-2' },
          { text: 'quickly?', role: 'adverb' },
        ],
      },
    ],
  },

  {
    statement: {
      text: 'The news shocked everyone yesterday',
      chunks: [
        { text: 'The news', role: 'subject-2' },
        { text: 'shocked', role: 'verb-2' },
        { text: 'everyone', role: 'object-2' },
        { text: 'yesterday', role: 'adverb' },
      ],
    },

    questions: [
      {
        type: 'subject',
        partOfSpeech: 'The news',
        role: 'subject-2',
        instruction: 'Ask a question about ',
        text: 'What shocked everyone yesterday',
        hint1: 'What...',
        hint2: '¿Qué sorprendió a todos ayer?',
        chunks: [
          { text: 'What', role: 'interrogative' },
          { text: 'shocked', role: 'verb-2' },
          { text: 'everyone', role: 'object-2' },
          { text: 'yesterday?', role: 'adverb' },
        ],
      },

      {
        type: 'verb',
        partOfSpeech: 'shocked',
        role: 'verb-2',
        instruction: 'Ask a question about ',
        text: 'What did the news do to everyone yesterday',
        hint1: 'What...',
        hint2: '¿Qué le hizo la noticia a todos ayer?',
        chunks: [
          { text: 'What', role: 'interrogative' },
          { text: 'did', role: 'aux' },
          { text: 'the news', role: 'subject-2' },
          { text: 'do', role: 'verb-2' },
          { text: 'to everyone', role: 'prep-phrase' },
          { text: 'yesterday?', role: 'adverb' },
        ],
      },

      {
        type: 'object',
        partOfSpeech: 'everyone',
        role: 'object-2',
        instruction: 'Ask a question about ',
        text: 'Who did the news shock yesterday',
        hint1: 'Who...',
        hint2: '¿A quién sorprendió la noticia ayer?',
        chunks: [
          { text: 'Who', role: 'interrogative' },
          { text: 'did', role: 'aux' },
          { text: 'the news', role: 'subject-2' },
          { text: 'shock', role: 'verb-2' },
          { text: 'yesterday?', role: 'adverb' },
        ],
      },

      {
        type: 'time',
        partOfSpeech: 'yesterday',
        role: 'adverb',
        instruction: 'Ask a question about ',
        text: 'When did the news shock everyone',
        hint1: 'When...',
        hint2: '¿Cuándo sorprendió la noticia a todos?',
        chunks: [
          { text: 'When', role: 'interrogative' },
          { text: 'did', role: 'aux' },
          { text: 'the news', role: 'subject-2' },
          { text: 'shock', role: 'verb-2' },
          { text: 'everyone?', role: 'object-2' },
        ],
      },
    ],
  }


];


