import type { SuggestTopic } from "../types/types";

export const suggestData: SuggestTopic[] = [
    {
    title: "Suggest and recommend",
    incorrect: ['I suggest you the sushi.', 'I suggest you to eat sushi.', 'I suggest to find a new job.', 'What do you suggest me?'],
    correct: ['I suggest the sushi.', 'I suggest eating sushi.', 'I suggest (that) you eat the sushi.', 'What do you suggest?'],
    practice: [
      {
        english: "Mary suggests ordering chicken.",
        spanish: 'Mary sugiere ordenar pollo.'
      },
      {
        english: "Mary suggests ordering chicken, but she doesn't suggest ordering fish.",
        spanish: 'Mary sugiere ordenar pollo, pero no sugiere ordenar pescado.'
      },
      {
        english: "Mary suggested ordering chicken, but she didn't suggest ordering fish.",
        spanish: 'Mary sugirió ordenar pollo, pero no sugiriò ordenar pescado.'
      },
      {
        english: "What do you recommend?",
        spanish: '¿Qué me recomienda?'
      },
    ],
    note: 'Recommend works the same way.'
  },
]

