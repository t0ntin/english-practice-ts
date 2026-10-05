import { makeElement, makeInputEl, sel, selAll } from "../../utils/helpers";
import { hints, validSentences } from "../../data/do-does-data";
import type { DoDoesObj } from "../../types/types";
import { showOverlay } from "../header";

// For draggable cover:
let isDragging: boolean = false;
let offsetY: number;

const subjects = ['Mi mamá', 'Mis padres', 'El carro',  'Aprender un idioma', 'El sistema de transporte público'];

const verbs = ['tiene(n)', 'hace(n)', 'cuesta(n)', 'abre(n)', 'reduce(n)'];

const objects = ['la tarea', 'comida en navidad',  'una casa grande', 'puertas', 'la congestión', 'mucho dinero'];

export function renderDoDoes() {
  const contentSection = sel('.content-section');
  contentSection.innerHTML = '';
  // flags.currentSection = "Common Errors"
  // toggleLinkStyles();
  const sectionOne = makeElement('div', 'section-one', contentSection);
  const subjectSectionEl = makeElement<HTMLDivElement>('div', 'subject-section', sectionOne)
  const verbSectionEl = makeElement<HTMLDivElement>('div', 'verb-section', sectionOne)
  const objectSectionEl = makeElement<HTMLDivElement>('div', 'object-section', sectionOne)

  const allSentenceContainer = makeElement('section', 'all-sentence-container', contentSection)

  const chosenSentEl = makeElement<HTMLDivElement>('div', 'chosen-sentence-container', contentSection)

  const optionButtonsCont = makeElement('div', 'option-buttons-container', contentSection)

  const resetButton = makeElement('button', 'reset-button', optionButtonsCont, 'Reset');

  const typeModeBtn = makeElement<HTMLButtonElement>('button', 'type-mode-button', optionButtonsCont, 'Type it in')
  typeModeBtn.disabled = true;

  const coverAnswersButton = makeElement<HTMLButtonElement>('button', 'cover-answers-button', optionButtonsCont, 'Cover answers')
  coverAnswersButton.disabled = true;
  coverAnswersButton.addEventListener('click', handleCoverAnsClick);

  const showHintsButton = makeElement<HTMLButtonElement>('button', 'show-hints-button', optionButtonsCont, 'Show hints')
  showHintsButton.disabled = true;
  
  subjects.forEach(subject  => {
    makeElement('div', 'subject', subjectSectionEl, subject)});
  verbs.forEach(verb  => {
    makeElement('div', 'verb', verbSectionEl, verb)});
  objects.forEach(object  => {
    makeElement('div', 'object', objectSectionEl, object)});

  optionButtonsCont.addEventListener('click', handleResetClick);

  showHintsButton.addEventListener('click', handleShowHints);

  addMainSectionEventListeners(subjectSectionEl, verbSectionEl, objectSectionEl, chosenSentEl);
}

const subjectEls = selAll('.subject');

const verbEls = selAll('.verb');
const objectEls = selAll('.object');

subjectEls.forEach((subject, index) => {
  subject.dataset.id = index.toString();
});

verbEls.forEach((verb, index) => {
  verb.dataset.id = index.toString();
});

objectEls.forEach((object, index) => {
  object.dataset.id = index.toString();
});

function handlePartOfSpeechClick(event: MouseEvent, className:string, section:HTMLDivElement, appendToEl:HTMLDivElement,) {
  const partOfSpeechEl = event.target as HTMLDivElement;
  if (!partOfSpeechEl.classList.contains(className)) return;
  if (section.dataset.clicked === 'true') return;
  section.dataset.clicked = 'true';
  partOfSpeechEl.remove();
  appendToEl.append(partOfSpeechEl);
  keepCount();
}


function addMainSectionEventListeners(subjectSectionEl: HTMLDivElement, verbSectionEl:HTMLDivElement, objectSectionEl:HTMLDivElement, chosenSentEl:HTMLDivElement):void {

  subjectSectionEl.addEventListener('click', event => {
    handlePartOfSpeechClick(event, 'subject', subjectSectionEl, chosenSentEl)
  });
  
  verbSectionEl.addEventListener('click', event => {
    handlePartOfSpeechClick(event, 'verb', verbSectionEl, chosenSentEl)
  
  });
  
  objectSectionEl.addEventListener('click', event => {
    handlePartOfSpeechClick(event, 'object', objectSectionEl, chosenSentEl)
  });
}

function handleResetClick(event: MouseEvent): void {
  const resetButton = event.target as HTMLButtonElement;
  if (resetButton.classList.contains('reset-button')) {
    renderDoDoes();
  }
}

function keepCount() {
  const chosenSentEl = sel('.chosen-sentence-container')
  let count = chosenSentEl.children.length;
  if ( count === 3) {
    setTimeout(() => {
      pickSentence()
    }, 800);
  }
  count = 0;
}

function pickSentence() {
  const sectionOne = sel('.section-one')
  const chosenSentEl = sel('.chosen-sentence-container')
  const dialogBoxEl = sel('.dialog-box');
  sectionOne.classList.add('hidden');
  chosenSentEl.classList.add('hidden');
  const objectSectionEl = sel('.object-section');
  objectSectionEl.dataset.clicked = 'false';
  const [sentenceIsvalid, cleanedSentence] = validateSentence();

  if (!sentenceIsvalid) {
    openDialogBox();
    dialogBoxEl.textContent = 'Invald sentence. Click reset and try again.'
    return;
  }

  if (typeof cleanedSentence === 'string') {
    renderAllSentences(cleanedSentence);
  }

  const englishSentContainer = sel('.english-sentence-container');
  const cover = makeElement('div', 'cover', englishSentContainer);
  cover.addEventListener('pointerdown', (e) => {
    isDragging = true;
    offsetY = e.clientY - cover.offsetTop;
  });

  document.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    e.preventDefault(); 

    cover.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('pointerup', () => {
    isDragging = false;
  });
  const typeModeBtn = sel<HTMLButtonElement>('.type-mode-button');
  typeModeBtn.addEventListener('click', (event) =>  handleTypeModeClick(event, cleanedSentence));
    typeModeBtn.disabled = false;
}

const renderAllSentences = (cleanedSentence: string) => {
  const allSentenceContainer = sel('.all-sentence-container');
  allSentenceContainer.innerHTML = '';
  validSentences[cleanedSentence]!.phrases.forEach(phraseObj => {
    const dualSentenceContainer = makeElement('div', 'dual-sentence-container', allSentenceContainer )
    const spanishSentContainer = makeElement('div', 'spanish-sentence-container', dualSentenceContainer);
    const englishSentContainer = makeElement('div', 'english-sentence-container', dualSentenceContainer);
    phraseObj.spanish?.forEach(chunk => {
      makeElement('span', chunk.role, spanishSentContainer, chunk.text);
    });
    phraseObj.english.forEach(chunk => {
      makeElement('span', chunk.role, englishSentContainer, chunk.text);
    })
  });
}

const renderSpanishSentencesAndInputEls = (cleanedSentence: string) => {
  const allSentenceContainer = sel('.all-sentence-container');
  allSentenceContainer.innerHTML = '';
  
  validSentences[cleanedSentence]!.phrases.forEach((phraseObj: DoDoesObj, id: number) => {
    const dualSentenceContainer = makeElement('div', 'dual-sentence-container', allSentenceContainer )
    const spanishSentContainer = makeElement('div', 'spanish-sentence-container', dualSentenceContainer);
    const englishSentContainer = makeElement('div', 'english-sentence-container', dualSentenceContainer);
    
    phraseObj.spanish?.forEach(chunk => {
      makeElement('span', chunk.role, spanishSentContainer, chunk.text);
    });

    const input = makeInputEl('english-input', englishSentContainer, 'Translate here');
    
    input.dataset.id = id.toString(); 
    
    input.addEventListener('input', (event) => handleTypeInInput(event as InputEvent, phraseObj.complete));

    const showAnswerButton = makeElement('button', 'show-answer-button', englishSentContainer, 'Show');
    showAnswerButton.addEventListener('click', (event) => handleShowAnswerClick(event, phraseObj))
  });
  
}

function handleTypeModeClick(event: MouseEvent, cleanedSentence: string) { 
  const typeModeButton = event.target as HTMLButtonElement;
  if (typeModeButton.matches('.type-mode-button')) {
    renderSpanishSentencesAndInputEls(cleanedSentence);
  }
  const coverAnswersButton = sel<HTMLButtonElement>('.cover-answers-button');
  const showHintsButton = sel<HTMLButtonElement>('.show-hints-button');
  
  coverAnswersButton.disabled = false;
  showHintsButton.disabled = false; 
  typeModeButton.disabled = true;
}

function handleCoverAnsClick(event: MouseEvent) {
  const coverAnswersButton = event.target as HTMLButtonElement;
  if (coverAnswersButton.matches('.cover-answers-button')){ 
    pickSentence();
  }
  coverAnswersButton.disabled = false;
}

function handleShowHints(event: MouseEvent) {
  const showHintsButton = event.target as HTMLButtonElement;
  const dialogBoxEl = sel('.dialog-box');
  if (showHintsButton.matches('.show-hints-button')) {
  console.log('testing2');

    dialogBoxEl.innerHTML = '';
    openDialogBox();
    hints.forEach(hint => {
      const hintContainer = makeElement('div', 'hint-container', dialogBoxEl);
      Object.entries(hint).forEach(([key, value]) => {
        makeElement('span', 'hint-key', hintContainer, key);
        makeElement('span', 'hint-value', hintContainer, value);

      })

    })
  }
}

function handleShowAnswerClick(event: MouseEvent, phraseObj: DoDoesObj) {
  const showAnswerButton = event.target as HTMLButtonElement;
  const dialogBoxEl = sel('.dialog-box');
  dialogBoxEl.innerHTML = '';
  if (showAnswerButton.matches('.show-answer-button')){
    openDialogBox();
    dialogBoxEl.textContent = phraseObj.complete;
  }
}

function handleTypeInInput(event: InputEvent, complete: string) {
  const translationInputEl = event.target as HTMLInputElement;
  const translationInputValue = translationInputEl.value;
  const normalizedTrans = normalizeString(translationInputValue)
  const normalizedCorrectAnswer = normalizeString(complete)
  console.log(normalizedCorrectAnswer);
  if (normalizedTrans === normalizedCorrectAnswer) {
    translationInputEl.style.backgroundColor = 'darkgreen';
  }
}

function normalizeString(translation: string) {
  if (!translation) return '';
  let normalized = translation.toLowerCase().trim();
  normalized = normalized.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
  return normalized;
}

function validateSentence(): [boolean, string] {
  let isValid = false;
  const chosenSentEl = sel('.chosen-sentence-container')
  const sentence = [...chosenSentEl.children].map(child => child.textContent).join(' ');
  const pluralTest = /Mis padres\s+[A-Za-z]+/g;
  const extraLetters = /\(\w\)/g;
  const cleanedSentence = sentence.replace(extraLetters, '');

  if (cleanedSentence in validSentences ) {
    isValid = true;
  }

      return [isValid, cleanedSentence];
}

function openDialogBox() {
  const dialogBoxEl = sel('.dialog-box');
  dialogBoxEl.classList.add('visible-dialog-box');
  showOverlay(() => {
    dialogBoxEl.classList.remove('visible-dialog-box');
  })
}
