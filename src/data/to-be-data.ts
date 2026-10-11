import type { ToBeDataObj, ToBeFlags } from "../types/types";

export const toBeFlags: ToBeFlags = {
  currentQuestion: 0,
  currentNegation: 0,
  currentNegation2: 0,
  correctPossibilities: 0,
  currentSentence: 0,
  currentSentence2: 0,
  currentHint: 0,
  essay2Finished: false,

}

export const toBeData: ToBeDataObj = {
  subjectPronouns: {
    title: "Pronombres",
    pairs: [
      { english: "I", spanish: "Yo" },
      { english: "You", spanish: "Tú" },
      { english: "He", spanish: "Él" },
      { english: "She", spanish: "Ella" },
      { english: "It", spanish: "(No existe)" },
      { english: "We", spanish: "Nosotros" },
      { english: "They", spanish: "Ellos" },
    ]
  },
  
  verbToBe: {
    title: "'To Be' - Ser / Estar",
    pairs: [
      { english: "I am", spanish: "Yo soy / Yo estoy" },
      { english: "You are", spanish: "Tú eres / Tú estás" },
      { english: "He is", spanish: "Él es / Él está" },
      { english: "She is", spanish: "Ella es / Ella está" },
      { english: "It is", spanish: "Es / está" },
      { english: "We are", spanish: "Nosotros somos / estamos" },
      { english: "They are", spanish: "Ellos son / están" },
    ]
  },
  
  contractions: {
    title: "Contracciones",
    pairs: [
      { english: "I'm", spanish: "Yo soy / Yo estoy" },
      { english: "You're", spanish: "Tú eres / Tú estás" },
      { english: "He's", spanish: "Él es / Él está" },
      { english: "She's", spanish: "Ella es / Ella está" },
      { english: "It's", spanish: "Es / Está" },
      { english: "We're", spanish: "Nosotros somos / estamos" },
      { english: "They're", spanish: "Ellos son / Ellos están" },
    ]
  },
  translate: {
    title: "Traduzca del inglés al español",
    instructions: "Toque el boton y escoja la traduccion correcta."
  },
  translate2: {
    title: "Traduzca del español al inglés",
    instructions: "Toque el boton y escoja la traduccion correcta."
  },
  translate3: {
    title: "Traduzca del inglés al español",
    instructions: "Toque una palabra en el primer grupo y su traducción en el segundo grupo."
  },
  translate4: {
    title: "Traduzca del español al inglés",
    instructions: "Toque una palabra en el primer grupo y su traducción en el segundo grupo."
  },
  translate5: {
    title: "Oraciones",
    instructions: "Cree oraciones cortas, escúchelas, dígalas, tradúzcalas.",
    sentences: [
      {english: "I am John.", spanish: "Yo soy John."},
      {english: "She is a Doctor.", spanish: "Ella es doctora."},
      {english: "We are 30 years old.", spanish: "Tenemos 30 años."},
      {english: "He is happy.", spanish: "Él está feliz."},
      {english: "You are in the office.", spanish: "Tú estás en la oficina."},
      {english: "They are from Japan.", spanish: "Ellos son de Japón."},
      {english: "It is late.", spanish: "Es tarde."},
    ]
  },
  translate6: {
    title: "Preguntas",
    instructions: "Arrastre las palabras correctamente para hacer una pregunta.",
    sentences: [
      {
        statement: "It is late.",
        question: "is it late?",
        chunks: [
          {text: "It", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "late", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "He is happy.",
        question: "is he happy?",
        chunks: [
          {text: "He", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "happy", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "You are in the office.",
        question: "are you in the office?",
        chunks: [
          {text: "You", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "in the office", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "She is a doctor.",
        question: "is she a doctor?",
        chunks: [
          {text: "She", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "a doctor", role: "noun-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "They are from Japan.",
        question: "are they from japan?",
        chunks: [
          {text: "They", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "from Japan", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "I am John.",
        question: "am i john?",
        chunks: [
          {text: "I", role: "subject-2"},
          {text: "am", role: "verb-2"},
          {text: "John", role: "noun-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "We are 30 years old.",
        question: "are we 30 years old?",
        chunks: [
          {text: "We", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "30 years old", role: "adjective-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "You are Colombian.", 
        question: "are you colombian?",
        chunks: [
          {text: "you", role: 'subject-2'},
          {text: "are", role: 'verb-2'},
          {text: "Colombian", role: 'adjective-2'},
          {text: "?", role: 'question-mark'},
        ]
      },
      {
        statement: "I am in the office", 
        question: "am i in the office?",
        chunks: [
          {text: "I", role: 'subject-2'},
          {text: "am", role: 'verb-2'},
          {text: "in the office", role: 'prep-phrase'},
          {text: "?", role: 'question-mark'},

        ]
      },
      {
        statement: "John is sad.",
        question: "is john sad?",
        chunks: [
          {text: "John", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "sad", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "It is important.",
        question: "is it important?",
        chunks: [
          {text: "It", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "important", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "John and Lee are from Peru.",
        question: "are john and lee from peru?",
        chunks: [
          {text: "John and Lee", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "from Peru", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "Mary is a pilot.",
        question: "is mary a pilot?",
        chunks: [
          {text: "Mary", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "a pilot", role: "noun-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "They are at home.",
        question: "are they at home?",
        chunks: [
          {text: "They", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "at home", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "He is 20 years old.",
        question: "is he 20 years old?",
        chunks: [
          {text: "He", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "20 years old", role: "adjective-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },

    ]
  },
  translate7: {
    title: "Negaciones",
    instructions: "Toque los botones para escuchar las tres formas de negar.",
    negationData: [
      {
        statement: "It is late.",
        negations: [
          { negation: "It is not late.", class: "negation-button" },
          { negation: "It's not late.", class: "negation-button" },
          { negation: "It isn't late.", class: "negation-button" }
        ]
      },
      {
        statement: "He is happy.",
        negations: [
          { negation: "He is not happy.", class: "negation-button" },
          { negation: "He's not happy.", class: "negation-button" },
          { negation: "He isn't happy.", class: "negation-button" }
        ]
      },
      {
        statement: "You are in the office.",
        negations: [
          { negation: "You are not in the office.", class: "negation-button" },
          { negation: "You're not in the office.", class: "negation-button" },
          { negation: "You aren't in the office.", class: "negation-button" }
        ]
      },
      {
        statement: "She is a doctor.",
        negations: [
          { negation: "She is not a doctor.", class: "negation-button" },
          { negation: "She's not a doctor.", class: "negation-button" },
          { negation: "She isn't a doctor.", class: "negation-button" }
        ]
      },
      {
        statement: "They are from Japan.",
        negations: [
          { negation: "They are not from Japan.", class: "negation-button" },
          { negation: "They're not from Japan.", class: "negation-button" },
          { negation: "They aren't from Japan.", class: "negation-button" }
        ]
      },
      {
        statement: "I am John.",
        negations: [
          { negation: "I am not John.", class: "negation-button" },
          { negation: "I'm not John.", class: "negation-button" }
        ]
      },
      {
        statement: "We are 30 years old.",
        negations: [
          { negation: "We are not 30 years old.", class: "negation-button" },
          { negation: "We're not 30 years old.", class: "negation-button" },
          { negation: "We aren't 30 years old.", class: "negation-button" }
        ]
      },
      {
        statement: "You are Colombian.",
        negations: [
          { negation: "You are not Colombian.", class: "negation-button" },
          { negation: "You're not Colombian.", class: "negation-button" },
          { negation: "You aren't Colombian.", class: "negation-button" }
        ]
      },
      {
        statement: "John is sad.",
        negations: [
          { negation: "John is not sad.", class: "negation-button" },
          { negation: "John's not sad.", class: "negation-button" },
          { negation: "John isn't sad.", class: "negation-button" }
        ]
      },
      {
        statement: "It is important.",
        negations: [
          { negation: "It is not important.", class: "negation-button" },
          { negation: "It's not important.", class: "negation-button" },
          { negation: "It isn't important.", class: "negation-button" }
        ]
      },
      {
        statement: "John and Lee are from Peru.",
        negations: [
          { negation: "John and Lee are not from Peru.", class: "negation-button" },
          { negation: "John and Lee're not from Peru.", class: "negation-button" },
          { negation: "John and Lee aren't from Peru.", class: "negation-button" }
        ]
      },
      {
        statement: "Mary is a pilot.",
        negations: [
          { negation: "Mary is not a pilot.", class: "negation-button" },
          { negation: "Mary's not a pilot.", class: "negation-button" },
          { negation: "Mary isn't a pilot.", class: "negation-button" }
        ]
      },
      {
        statement: "They are at home.",
        negations: [
          { negation: "They are not at home.", class: "negation-button" },
          { negation: "They're not at home.", class: "negation-button" },
          { negation: "They aren't at home.", class: "negation-button" }
        ]
      },
      {
        statement: "He is 20 years old.",
        negations: [
          { negation: "He is not 20 years old.", class: "negation-button" },
          { negation: "He's not 20 years old.", class: "negation-button" },
          { negation: "He isn't 20 years old.", class: "negation-button" }
        ]
      }
    ]
  }, 
  translate8: {
    title: "Más negaciones",
    instructions: "Toque las formas correctas de negar.",
    sentences: [
      {
        statement: "No es tarde.",
        correctPossibilities: 3,
        negations: [
          {negation: "It's not late.", correct: true},
          {negation: "It is not late.", correct: true},
          {negation: "It isn't late.", correct: true},
          {negation: "It's no late.", correct: false},
          {negation: "Is not late.", correct: false},
          {negation: "No is late.", correct: false},
          {negation: "No isn't late.", correct: false},
        ]
      },
      {
        statement: "Él está feliz.",
        correctPossibilities: 3,
        negations: [
          {negation: "He's not happy.", correct: true},
          {negation: "He is not happy.", correct: true},
          {negation: "He isn't happy.", correct: true},
          {negation: "He's no happy.", correct: false},
          {negation: "He not happy.", correct: false},
          {negation: "No is happy.", correct: false},
          {negation: "No isn't happy.", correct: false},
        ]
      },
      {
        statement: "Tú estás en la oficina.",
        correctPossibilities: 3,
        negations: [
          {negation: "You're not in the office.", correct: true},
          {negation: "You are not in the office.", correct: true},
          {negation: "You aren't in the office.", correct: true},
          {negation: "You're no in the office.", correct: false},
          {negation: "You not in the office.", correct: false},
          {negation: "No are in the office.", correct: false},
          {negation: "No aren't in the office.", correct: false},
        ]
      },
      {
        statement: "Ella es doctora.",
        correctPossibilities: 3,
        negations: [
          {negation: "She's not a doctor.", correct: true},
          {negation: "She is not a doctor.", correct: true},
          {negation: "She isn't a doctor.", correct: true},
          {negation: "She's no a doctor.", correct: false},
          {negation: "She not a doctor.", correct: false},
          {negation: "No is a doctor.", correct: false},
          {negation: "No isn't a doctor.", correct: false},
        ]
      },
      {
        statement: "Ellos son de Japón.",
        correctPossibilities: 3,
        negations: [
          {negation: "They're not from Japan.", correct: true},
          {negation: "They are not from Japan.", correct: true},
          {negation: "They aren't from Japan.", correct: true},
          {negation: "They're no from Japan.", correct: false},
          {negation: "They not from Japan.", correct: false},
          {negation: "No are from Japan.", correct: false},
          {negation: "No aren't from Japan.", correct: false},
        ]
      },
      {
        statement: "Yo soy John.",
        correctPossibilities: 2,
        negations: [
          {negation: "I'm not John.", correct: true},
          {negation: "I am not John.", correct: true},
          {negation: "I'm no John.", correct: false},
          {negation: "I not John.", correct: false},
          {negation: "No am John.", correct: false},
          {negation: "No I'm John.", correct: false},
        ]
      },
      {
        statement: "Nosotros tenemos 30 años.",
        correctPossibilities: 3,
        negations: [
          {negation: "We're not 30 years old.", correct: true},
          {negation: "We are not 30 years old.", correct: true},
          {negation: "We aren't 30 years old.", correct: true},
          {negation: "We're no 30 years old.", correct: false},
          {negation: "We not 30 years old.", correct: false},
          {negation: "No are 30 years old.", correct: false},
          {negation: "No aren't 30 years old.", correct: false},
        ]
      },
      {
        statement: "Tú eres colombiano.",
        correctPossibilities: 3,
        negations: [
          {negation: "You're not Colombian.", correct: true},
          {negation: "You are not Colombian.", correct: true},
          {negation: "You aren't Colombian.", correct: true},
          {negation: "You're no Colombian.", correct: false},
          {negation: "You not Colombian.", correct: false},
          {negation: "No are Colombian.", correct: false},
          {negation: "No aren't Colombian.", correct: false},
        ]
      },
      {
        statement: "John está triste.",
        correctPossibilities: 3,
        negations: [
          {negation: "John's not sad.", correct: true},
          {negation: "John is not sad.", correct: true},
          {negation: "John isn't sad.", correct: true},
          {negation: "John's no sad.", correct: false},
          {negation: "John not sad.", correct: false},
          {negation: "No is sad.", correct: false},
          {negation: "No isn't sad.", correct: false},
        ]
      },
      {
        statement: "Es importante.",
        correctPossibilities: 3,
        negations: [
          {negation: "It's not important.", correct: true},
          {negation: "It is not important.", correct: true},
          {negation: "It isn't important.", correct: true},
          {negation: "It's no important.", correct: false},
          {negation: "It not important.", correct: false},
          {negation: "No is important.", correct: false},
          {negation: "No isn't important.", correct: false},
        ]
      },
      {
        statement: "John y Lee son de Perú.",
        correctPossibilities: 3,
        negations: [
          {negation: "John and Lee're not from Peru.", correct: true},
          {negation: "John and Lee are not from Peru.", correct: true},
          {negation: "John and Lee aren't from Peru.", correct: true},
          {negation: "John and Lee're no from Peru.", correct: false},
          {negation: "John and Lee not from Peru.", correct: false},
          {negation: "No are from Peru.", correct: false},
          {negation: "No aren't from Peru.", correct: false},
        ]
      },
      {
        statement: "Mary es piloto.",
        correctPossibilities: 3,
        negations: [
          {negation: "Mary's not a pilot.", correct: true},
          {negation: "Mary is not a pilot.", correct: true},
          {negation: "Mary isn't a pilot.", correct: true},
          {negation: "Mary's no a pilot.", correct: false},
          {negation: "Mary not a pilot.", correct: false},
          {negation: "No is a pilot.", correct: false},
          {negation: "No isn't a pilot.", correct: false},
        ]
      },
      {
        statement: "Ellos están en casa.",
        correctPossibilities: 3,
        negations: [
          {negation: "They're not at home.", correct: true},
          {negation: "They are not at home.", correct: true},
          {negation: "They aren't at home.", correct: true},
          {negation: "They're no at home.", correct: false},
          {negation: "They not at home.", correct: false},
          {negation: "No are at home.", correct: false},
          {negation: "No aren't at home.", correct: false},
        ]
      },
      {
        statement: "Él tiene 20 años.",
        correctPossibilities: 3,
        negations: [
          {negation: "He's not 20 years old.", correct: true},
          {negation: "He is not 20 years old.", correct: true},
          {negation: "He isn't 20 years old.", correct: true},
          {negation: "He's no 20 years old.", correct: false},
          {negation: "He not 20 years old.", correct: false},
          {negation: "No is 20 years old.", correct: false},
          {negation: "No isn't 20 years old.", correct: false},
        ]
      }
    ]
  },
  essay: {
    title: "Párrafo",
    instructions: "Lea el siguiente párrafo. Toque las oraciones para escucharlas y buscar palabras desconocidas.",
    paragraph: [
      {
        text: "My name is John.", 
        translation: "Mi nombre es John.", 
        words: [
          {word: "My", translation: "Mi"}, 
          {word: "Name", translation: "Nombre"}, 
        ], 
      },
      {
        text: "I am from Colombia, but I'm not from Bogota.", 
        translation: "Soy de Colombia, pero no soy de Bogotá.", 
        words: [
          {word: "But", translation: "Pero"}, 
        ],
      },
      {
        text: "I'm from Medellín.",
        translation: "Soy de Medellín.",
        words: []
      },
      {
        text: "I am a doctor.",
        translation: "Soy doctor.",
        words: []
      },
      {
        text: "I'm not a nurse.",
        translation: "No soy enfermero.",
        words: [
          {word: "Nurse", translation: "Enfermero"}
        ]
      },
      {
        text: "My family is big.",
        translation: "Mi familia es grande.",
        words: [
          {word: "My", translation: "Mi"},
          {word: "Big", translation: "Grande"}
        ]
      },
      {
        text: "I am serious and impatient.",
        translation: "Soy serio e impaciente.",
        words: [
          {word: "And", translation: "E, y"},
        ]
      },
      {
        text: "Am I married?",
        translation: "¿Estoy casado?",
        words: [
          {word: "Married", translation: "Casado"}
        ]
      },
      {
        text: "Yes, I am.",
        translation: "Sí, lo estoy.",
        words: [
          {word: "Yes", translation: "Sí"}
        ]
      },
      {
        text: "My wife is Lisa.",
        translation: "Mi esposa es Lisa.",
        words: [
          {word: "My", translation: "Mi"},
          {word: "Wife", translation: "Esposa"}
        ]
      },
      {
        text: "She's an engineer.",
        translation: "Ella es ingeniera.",
        words: [
          {word: "Engineer", translation: "Ingeniero"}
        ]
      },
      {
        text: "Am I a father?",
        translation: "¿Soy padre?",
        words: [
          {word: "Father", translation: "Padre"}
        ]
      },
      {
        text: "Yes, I am a father of two.",
        translation: "Sí, soy padre de dos.",
        words: [
          {word: "Yes", translation: "Sí"},
          {word: "Father", translation: "Padre"},
          {word: "Of", translation: "De"},
          {word: "Two", translation: "Dos"}
        ]
      },
      {
        text: "My children are young.",
        translation: "Mis hijos son jóvenes.",
        words: [
          {word: "My", translation: "Mis"},
          {word: "Children", translation: "Hijos"},
          {word: "Young", translation: "Jóvenes"}
        ]
      },
      {
        text: "They are not adults.",
        translation: "No son adultos.",
        words: [
          {word: "Adults", translation: "Adultos"}
        ]
      },
      {
        text: "My parents aren't with me.",
        translation: "Mis padres no están conmigo.",
        words: [
          {word: "My", translation: "Mis"},
          {word: "Parents", translation: "Padres"},
          {word: "With me", translation: "Conmigo"},
        ]
      },
      {
        text: "They are in Colombia.",
        translation: "Ellos están en Colombia.",
        words: [
          {word: "In", translation: "En"}
        ]
      },
      {
        text: "Am I in Colombia now?",
        translation: "¿Estoy en Colombia ahora?",
        words: [
          {word: "In", translation: "En"},
          {word: "Now", translation: "Ahora"}
        ]
      },
      {
        text: "No, I am not.",
        translation: "No, no estoy.",
        words: []
      },
      {
        text: "I am in Madrid.",
        translation: "Estoy en Madrid.",
        words: [
          {word: "In", translation: "En"}
        ]
      },
      {
        text: "I am not a tourist.",
        translation: "No soy turista.",
        words: [
          {word: "Tourist", translation: "Turista"}
        ]
      },
      {
        text: "I am here for work.",
        translation: "Estoy aquí por trabajo.",
        words: [
          {word: "Here", translation: "Aquí"},
          {word: "For", translation: "Por"},
          {word: "Work", translation: "Trabajo"}
        ]
      },
      {
        text: "Is my job important?",
        translation: "¿Es mi trabajo importante?",
        words: [
          {word: "My", translation: "Mi"},
          {word: "Job", translation: "Trabajo"},
          {word: "Important", translation: "Importante"}
        ]
      },
      {
        text: "Yes, it is.",
        translation: "Sí, lo es.",
        words: [
          {word: "Yes", translation: "Sí"}
        ]
      },
      {
        text: "Is it easy?",
        translation: "¿Es fácil?",
        words: [
          {word: "Easy", translation: "Fácil"}
        ]
      },
      {
        text: "No, it is not.",
        translation: "No, no lo es.",
        words: []
      },
      {
        text: "My life is simple, and I'm happy.",
        translation: "Mi vida es simple, y soy feliz.",
        words: [
          {word: "My", translation: "Mi"},
          {word: "Life", translation: "Vida"},
          {word: "And", translation: "Y"},
          {word: "Happy", translation: "Feliz"}
        ]
      }
    ]

  },
  
  essay2: {
    title: "Párrafo 2",
    instructions: "Traduzca la oración y presione revisar.",
    sentences: [
      {
        spanish: "Mi nombre es Sara.",
        english: "my name is sara",
        english2: "My name is Sara.",
        hints: [
          {word: "Mi", translation: "My"},
          {word: "Nombre", translation: "Name"},
          {word: "Es", translation: "Is"},
        ]
      },
      {
        spanish: "Yo soy de Canadá.",
        english: "i am from canada",
        english2: "I am from Canada.",
        hints: [
          {word: "De", translation: "From"},
        ]
      },
      {
        spanish: "Pero no soy de Toronto.",
        english: "but i am not from toronto",
        english2: "But I am not from Toronto.",
        hints: [
          {word: "Pero", translation: "But"},
          {word: "De", translation: "From"},
        ]
      },
      {
        spanish: "Soy de Vancouver.",
        english: "i am from vancouver",
        english2: "I am from Vancouver.",
        hints: [
          {word: "De", translation: "From"},
        ]
      },
      {
        spanish: "Estoy en una escuela.",
        english: "i am at a school",
        english2: "I am at a school.",
        hints: [
          {word: "En", translation: "At"},
          {word: "Una", translation: "A"},
          {word: "Escuela", translation: "School"},
        ]
      },
      {
        spanish: "Pero no soy maestra.",
        english: "but i am not a teacher",
        english2: "But I am not a teacher.",
        hints: [
          {word: "Pero", translation: "But"},
          {word: "Maestra", translation: "Teacher"},
        ]
      },
      {
        spanish: "Soy la directora.",
        english: "i am the principal",
        english2: "I am the principal.",
        hints: [
          {word: "La", translation: "The"},
          {word: "Directora", translation: "Principal"},
        ]
      },
      {
        spanish: "Mi familia es pequeña.",
        english: "my family is small",
        english2: "My family is small.",
        hints: [
          {word: "Mi", translation: "My"},
          {word: "Familia", translation: "Family"},
          {word: "Es", translation: "Is"},
          {word: "Pequeña", translation: "Small"},
        ]
      },
      {
        spanish: "Soy inteligente y generosa.",
        english: "i am intelligent and generous",
        english2: "I am intelligent and generous.",
        hints: [
          {word: "Inteligente", translation: "Intelligent"},
          {word: "Y", translation: "And"},
          {word: "Generosa", translation: "Generous"},
        ]
      },
      {
        spanish: "¿Estoy casada?",
        english: "am i married",
        english2: "Am I married?",
        hints: [
          {word: "Casada", translation: "Married"},
        ]
      },
      {
        spanish: "No, no estoy casada.",
        english: "no i am not married",
        english2: "No, I am not married.",
        hints: [
          {word: "Casada", translation: "Married"},
        ]
      },
      {
        spanish: "¿Estoy soltera?",
        english: "am i single",
        english2: "Am I single?",
        hints: [
          {word: "Soltera", translation: "Single"},
        ]
      },
      {
        spanish: "Sí, estoy soltera.",
        english: "yes i am single",
        english2: "Yes, I am single.",
        hints: [
          {word: "Sí", translation: "Yes"},
          {word: "Soltera", translation: "Single"},
        ]
      },
      {
        spanish: "¿Soy madre?",
        english: "am i a mother",
        english2: "Am I a mother?",
        hints: [
          {word: "Madre", translation: "Mother"},
        ]
      },
      {
        spanish: "Sí, soy madre.",
        english: "yes i am a mother",
        english2: "Yes, I am a mother.",
        hints: [
          {word: "Sí", translation: "Yes"},
          {word: "Madre", translation: "Mother"},
        ]
      },
      {
        spanish: "Mis padres están conmigo en Canadá.",
        english: "my parents are with me in canada",
        english2: "My parents are with me in Canada.",
        hints: [
          {word: "Mis", translation: "My"},
          {word: "Padres", translation: "Parents"},
          {word: "Están", translation: "Are"},
          {word: "Conmigo", translation: "With me"},
          {word: "En", translation: "In"},
        ]
      },
      {
        spanish: "¿Estoy en Canadá ahora?",
        english: "am i in canada now",
        english2: "Am I in Canada now?",
        hints: [
          {word: "En", translation: "In"},
          {word: "Ahora", translation: "Now"},
        ]
      },
      {
        spanish: "No, no estoy en Canadá.",
        english: "no i am not in canada",
        english2: "No, I am not in Canada.",
        hints: [
          {word: "En", translation: "In"},
        ]
      },
      {
        spanish: "Estoy en Londres.",
        english: "i am in london",
        english2: "I am in London.",
        hints: [
          {word: "En", translation: "In"},
          {word: "Londres", translation: "London"},
        ]
      },
      {
        spanish: "No estoy aquí por trabajo.",
        english: "i am not here for work",
        english2: "I am not here for work.",
        hints: [
          {word: "Aquí", translation: "Here"},
          {word: "Por", translation: "For"},
          {word: "Trabajo", translation: "Work"},
        ]
      },
      {
        spanish: "Estoy aquí de vacaciones.",
        english: "i am here on vacation",
        english2: "I am here on vacation.",
        hints: [
          {word: "Aquí", translation: "Here"},
          {word: "De", translation: "On"},
          {word: "Vacaciones", translation: "Vacation"},
        ]
      },
      {
        spanish: "¿Mis vacaciones son divertidas?",
        english: "are my vacations fun",
        english2: "Are my vacations fun?",
        hints: [
          {word: "Mis", translation: "My"},
          {word: "Vacaciones", translation: "Vacations"},
          {word: "Son", translation: "Are"},
          {word: "Divertidas", translation: "Fun"},
        ]
      },
      {
        spanish: "Sí, son divertidas.",
        english: "yes they are fun",
        english2: "Yes, they are fun.",
        hints: [
          {word: "Sí", translation: "Yes"},
          {word: "Son", translation: "They are"},
          {word: "Divertidas", translation: "Fun"},
        ]
      },
      {
        spanish: "¿Son caras?",
        english: "are they expensive",
        english2: "Are they expensive?",
        hints: [
          {word: "¿Son", translation: "Are they"},
          {word: "Caras", translation: "Expensive"},
        ]
      },
      {
        spanish: "Sí, son muy caras.",
        english: "yes they are very expensive",
        english2: "Yes, they are very expensive.",
        hints: [
          {word: "Sí", translation: "Yes"},
          {word: "Son", translation: "They are"},
          {word: "Muy", translation: "Very"},
          {word: "Caras", translation: "Expensive"},
        ]
      },
      {
        spanish: "Pero soy feliz.",
        english: "but i am happy",
        english2: "But I am happy.",
        hints: [
          {word: "Pero", translation: "But"},
          {word: "Feliz", translation: "Happy"},
        ]
      }
    ] 
  }
  
};

