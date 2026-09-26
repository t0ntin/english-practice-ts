import type { CommonErrorsObj } from "../types/types";

export const objectPlusInfData: CommonErrorsObj[] =  [ 
{
    title: "Object + inf.",
    incorrect: ['I want that you call me.', 'I told you that call me.', 'I asked you that you don\'t call me', 'I want that she call the doctor.'],
    correct: ['I want you to call me.', 'I told you to call me.', 'I asked you not to call me.', 'I want her to call the doctor.'],
    practice: [
      {
        english: "I want you to be happy.",
        spanish: 'Quiero que seas feliz.'
      },
      {
        english: "She wants you to exercise.",
        spanish: 'Ella quiere que hagas ejercicio.'
      },
      {
        english: "Mike expects us to work.",
        spanish: 'Mike espera que nosotros trabajemos.'
      },
      {
        english: "He tells me to help him, but he doesn want me to give him the answers.",
        spanish: 'Él me dice que lo ayude, pero no quiere que le dé las respuestas.'
      },
      {
        english: "Andrea wants them to meet Mike, but she doesn't want Sally to find out.",
        spanish: 'Andrea quiere que ellos conozcan a Mike, pero no quiere que Sally se entere.'
      },
      {
        english: "Did you tell me to cook or did you tell them to cook?",
        spanish: '¿Me dijiste a mí que cocinara o les dijiste a ellos que cocinaran?'
      },
    ],
    note: ''
  },
]