import type { CommonErrorsObj } from "../types/types";

export const adviceData: CommonErrorsObj[] = [
  {
    title: "Advice",
    incorrect: ['Can you give me an advice?', 'Can you give me some advices?', 'Let me give you an advice.'],
    correct: ['Can you give me advice?', 'Can you give me some advice?', 'Let me give you a piece of advice.'],
    practice: [
      {
        english: "Can you give me some advice?",
        spanish: '¿Me puedes dar algunos consejos?'
      },
      {
        english: "Let me give you a piece of advice.",
        spanish: 'Déjame darte un consejo.'
      },
    ],
    note: 'Advice is like furniture and homework: we don\'t count it.'
  },
]