import type { DoDoesData, DoDoesFlagsObj } from "../types/types";

export const flags: DoDoesFlagsObj =  {
  // currentSection: null,
  // lastSelectedTopic: null
  lastSelectedElement: null,
  // userAnswer:null,
  currentSentenceIndex: 0,
  currentGroupIndex: 0,
  // chosenSentence: [],
  correctAnswersCounter: 0,
}

// Added this Record thing here because it's a strange object that starts with a sentence as the key.
export const validSentences: Record<string, DoDoesData> =  {
  'Mi mamá tiene la tarea': {
    baseSentence: 'Mi mamá tiene la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has the homework',

        spanish: [
          { text: 'Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea', role: 'object' },
        ],

        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have the homework?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene una casa grande': {
    baseSentence: 'Mi mamá tiene una casa grande',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has a big house',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "tiene", "role": "verb" },
          { "text": "una casa grande", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'a big house', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have a big house?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have a big house",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a big house.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a big house?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
    ],
  },

  'Mi mamá hace una casa grande': {
    baseSentence: 'Mi mamá hace una casa grande',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom makes a big house',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "hace", "role": "verb" },
          { "text": "una casa grande", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'makes', role: 'verb' },
          { text: 'a big house', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom make a big house?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't make a big house",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'una casa grande.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'a big house.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes a big house?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene puertas': {
    baseSentence: 'Mi mamá tiene puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has doors',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "tiene", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have doors?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene congestión': {
    baseSentence: 'Mi mamá tiene congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has congestion',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "tiene", "role": "verb" },
          { "text": "congestión", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have congestion?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has congestion?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'congestión?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene mucho dinero': {
    baseSentence: 'Mi mamá tiene mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has a lot of money',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "tiene", "role": "verb" },
          { "text": "mucho dinero", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have a lot of money?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace comida en navidad': {
    baseSentence: 'Mi mamá hace comida en navidad',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom makes food on Christmas',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "hace", "role": "verb" },
          { "text": "comida en navidad", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'makes', role: 'verb' },
          { text: 'food on Christmas', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom make food on Christmas?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'food on Christmas?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't make food on Christmas",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'food on Christmas.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes food on Christmas?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'food on Christmas?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace la tarea': {
    baseSentence: 'Mi mamá hace la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom does the homework',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "hace", "role": "verb" },
          { "text": "la tarea", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'does', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom do the homework?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'do', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't do the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'do', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom do?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'do?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who does the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'does', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace puertas': {
    baseSentence: 'Mi mamá hace puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom makes doors',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "hace", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'makes', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom make doors?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't make doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace mucho dinero': {
    baseSentence: 'Mi mamá hace mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom makes a lot of money',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "hace", "role": "verb" },
          { "text": "mucho dinero", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'makes', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom make a lot of money?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't make a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá abre puertas': {
    baseSentence: 'Mi mamá abre puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom opens doors',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "abre", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'opens', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom open doors?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who opens doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá reduce la congestión': {
    baseSentence: 'Mi mamá reduce la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom reduces congestion',
        spanish: [
          { "text": "Mi mamá", "role": "subject" },
          { "text": "reduce", "role": "verb" },
          { "text": "la congestión", "role": "object" }
        ],
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom reduce congestion?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who reduces congestion?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },

  'Mis padres tiene comida en navidad': {
    baseSentence: 'Mis padres tienen comida en navidad',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have food on Christmas',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "tienen", "role": "verb" },
          { "text": "comida en navidad", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'food on Christmas', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have food on Christmas?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'food on Christmas?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have food on Christmas",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'comida en navidad.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'food on Christmas.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has food on Christmas?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'food on Christmas?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tiene la tarea': {
    baseSentence: 'Mis padres tienen la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have the homework',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "tienen", "role": "verb" },
          { "text": "la tarea", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have the homework?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tiene una casa grande': {
    baseSentence: 'Mis padres tienen una casa grande',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have a big house',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "tienen", "role": "verb" },
          { "text": "una casa grande", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a big house', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have a big house?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have a big house",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'una casa grande.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a big house.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a big house?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tiene puertas': {
    baseSentence: 'Mis padres tienen puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have doors',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "tienen", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have doors?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },

  'Mis padres tiene mucho dinero': {
    baseSentence: 'Mis padres tienen mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have a lot of money',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "tienen", "role": "verb" },
          { "text": "mucho dinero", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have a lot of money?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hace comida en navidad': {
    baseSentence: 'Mis padres hacen comida en navidad',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make food on Christmas',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "hacen", "role": "verb" },
          { "text": "comida en navidad", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'food on Christmas', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make food on Christmas?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'food on Christmas?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make food on Christmas",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'comida en navidad.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'food on Christmas.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes food on Christmas?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'food on Christmas?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hace la tarea': {
    baseSentence: 'Mis padres hacen la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents do the homework',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "hacen", "role": "verb" },
          { "text": "la tarea", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'do', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents do the homework?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'do', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't do the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'do', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents do?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'do?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who does the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'does', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hace una casa grande': {
    baseSentence: 'Mis padres hacen una casa grande',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make a big house',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "hacen", "role": "verb" },
          { "text": "una casa grande", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a big house', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make a big house?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make a big house",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'una casa grande.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'a big house.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes a big house?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hace puertas': {
    baseSentence: 'Mis padres hacen puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make doors',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "hacen", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make doors?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hace mucho dinero': {
    baseSentence: 'Mis padres hacen mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make a lot of money',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "hacen", "role": "verb" },
          { "text": "mucho dinero", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make a lot of money?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres abre puertas': {
    baseSentence: 'Mis padres abren puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents open doors',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "abren", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents open doors?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'abren', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abren', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abren', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who opens doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres reduce la congestión': {
    baseSentence: 'Mis padres reducen la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents reduce congestion',
        spanish: [
          { "text": "Mis padres", "role": "subject" },
          { "text": "reducen", "role": "verb" },
          { "text": "la congestión", "role": "object" }
        ],
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents reduce congestion?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'reducen', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reducen', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reducen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who reduces congestion?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },

  'El carro tiene puertas': {
    baseSentence: 'El carro tiene puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'The car has doors',
        spanish: [
          { "text": "El carro", "role": "subject" },
          { "text": "tiene", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'The car', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the car have doors?',
        spanish: [
          { text: '¿El carro', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the car doesn't have doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el carro', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the car', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the car have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'el carro?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      // Note: wh-subject uses 'What' for inanimate subjects
      {
        key: 'wh-subject',
        complete: 'What has doors?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'El carro cuesta mucho dinero': {
    baseSentence: 'El carro cuesta mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'The car costs a lot of money',
        spanish: [
          { "text": "El carro", "role": "subject" },
          { "text": "cuesta", "role": "verb" },
          { "text": "mucho dinero", "role": "object" }
        ],
        english: [
          { text: 'The car', role: 'subject' },
          { text: 'costs', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the car cost a lot of money?',
        spanish: [
          { text: '¿El carro', role: 'subject' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'cost', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the car doesn't cost a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el carro', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the car', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'cost', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'How much does the car cost?',
        spanish: [
          { text: '¿Cuánto', role: 'wh-word' },
          { text: 'cuesta', role: 'verb' },
          { text: 'el carro?', role: 'subject' },
        ],
        english: [
          { text: 'How much', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'cost?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What costs a lot of money?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'costs', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'El carro reduce la congestión': {
    baseSentence: 'El carro reduce la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'The car reduces congestion',
        spanish: [
          { "text": "El carro", "role": "subject" },
          { "text": "reduce", "role": "verb" },
          { "text": "la congestión", "role": "object" }
        ],
        english: [
          { text: 'The car', role: 'subject' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the car reduce congestion?',
        spanish: [
          { text: '¿El carro', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the car doesn't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el carro', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the car', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the car reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'el carro?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What reduces congestion?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },
  'Aprender un idioma cuesta mucho dinero': {
    baseSentence: 'Aprender un idioma cuesta mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'Learning a language costs a lot of money',
        spanish: [
          { "text": "Aprender un idioma", "role": "subject" },
          { "text": "cuesta", "role": "verb" },
          { "text": "mucho dinero", "role": "object" }
        ],
        english: [
          { text: 'Learning a language', role: 'subject' },
          { text: 'costs', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does learning a language cost a lot of money?',
        spanish: [
          { text: '¿Aprender un idioma', role: 'subject' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'learning a language', role: 'subject' },
          { text: 'cost', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, learning a language doesn't cost a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'aprender un idioma', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'learning a language', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'cost', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'How much does learning a language cost?',
        spanish: [
          { text: '¿Cuánto', role: 'wh-word' },
          { text: 'cuesta', role: 'verb' },
          { text: 'aprender un idioma?', role: 'subject' },
        ],
        english: [
          { text: 'How much', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'learning a language', role: 'subject' },
          { text: 'cost?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What costs a lot of money?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'costs', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Aprender un idioma abre puertas': {
    baseSentence: 'Aprender un idioma abre puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'Learning a language opens doors',
        spanish: [
          { "text": "Aprender un idioma", "role": "subject" },
          { "text": "abre", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'Learning a language', role: 'subject' },
          { text: 'opens', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does learning a language open doors?',
        spanish: [
          { text: '¿Aprender un idioma', role: 'subject' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'learning a language', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, learning a language doesn't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'aprender un idioma', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'learning a language', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does learning a language open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'aprender un idioma?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'learning a language', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What opens doors?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'El sistema de transporte público abre puertas': {
    baseSentence: 'El sistema de transporte público abre puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'The public transportation system opens doors',
        spanish: [
          { "text": "El sistema de transporte público", "role": "subject" },
          { "text": "abre", "role": "verb" },
          { "text": "puertas", "role": "object" }
        ],
        english: [
          { text: 'The public transportation system', role: 'subject' },
          { text: 'opens', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the public transportation system open doors?',
        spanish: [
          { text: '¿El sistema de transporte público', role: 'subject' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the public transportation system doesn't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el sistema de transporte público', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the public transportation system', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the public transportation system open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'el sistema de transporte público?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What opens doors?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'El sistema de transporte público reduce la congestión': {
    baseSentence: 'El sistema de transporte público reduce la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'The public transportation system reduces congestion',
        spanish: [
          { "text": "El sistema de transporte público", "role": "subject" },
          { "text": "reduce", "role": "verb" },
          { "text": "la congestión", "role": "object" }
        ],
        english: [
          { text: 'The public transportation system', role: 'subject' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the public transportation system reduce congestion?',
        spanish: [
          { text: '¿El sistema de transporte público', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete:
          "No, the public transportation system doesn't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el sistema de transporte público', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the public transportation system', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the public transportation system reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'el sistema de transporte público?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What reduces congestion?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },
};

export const hints = [
  { 'Mi mama:': 'My mom' },
  { 'Does:': 'He, She, It' },
  { 'Do:': 'I, You, We, They' },
  { 'Has:': 'He, She, It' },
  { 'Have:': 'I, You, We, They' },
  { 'Aprender:': 'Learning' },
  { 'El sistema de transporte público:': 'The public transportation system' },
  { 'Hacer tarea:': 'do' },
  { 'Hacer comida:': 'make' },
];