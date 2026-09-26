import type { CommonErrorsObj } from "../types/types";

export const toHaveData: CommonErrorsObj[] = [
  {
    title: "To have",
    incorrect: ['The computer have a problem', 'The computer hasn\'t a problem', 'I don\'t have started.'],
    correct: ['The computer has a problem', 'The computer doesn\'t have a problem', 'I haven\'t started.'  ],
    practice: [
      {
        english: "Mike doesn't have a car because he hasn't bought one.",
        spanish: "Mike no tiene carro porque no ha comprado uno."
      },
      {
        english: "I have tried it twice, but he hasn't tried it yet.",
        spanish: "Yo lo he probado dos veces, pero el no lo ha probado aun."
      },
      {
        english: "We don't have soap and we haven't bought any toothpaste, either.",
        spanish: 'No tenemos jabón y no hemos comprado pasta de dientes tampoco.'
      },
      {
        english: "Doesn't John have a car?",
        spanish: '¿John no tine carro?'
      },
      {
        english: "Hasn't John bought a car yet?",
        spanish: '¿John no ha comprado carro aun?'
      },
      {
        english: "Why hasn't he finished? What else does he have to do?",
        spanish: '¿Por qué él no ha terminado? ¿Qué más tiene que hacer?'
      },
    ],
    note: "\"The computer hasn't a problem.\"  is valid in British English."
  },
]