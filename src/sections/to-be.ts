import { toBeData, toBeFlags } from "../data/to-be-data.js";
import { makeElement, makeInputEl, sel, selAll, shuffleArray, speak } from "../utils/helpers.js";
import correctSoundFile from '../sounds/correct.mp3';
import incorrectSoundFile from '../sounds/incorrect.mp3';
import type { ClickedButton, Pair, ParagraphSentence, PopupPronounButtonData, SubjectPronouns } from "../types/types.js";

const correctSound = new Audio(correctSoundFile);
const incorrectSound = new Audio(incorrectSoundFile);

export const renderToBe = () => {
  const contentSection = sel('.content-section');
  contentSection.innerHTML = '';
  const firstSectionWrapper = makeElement('div', 'first-section-div', contentSection);

  firstSectionWrapper.innerHTML = 
    renderTable(toBeData.subjectPronouns) +
    renderTable(toBeData.verbToBe) +
    renderTable(toBeData.contractions);

  const pronounButtons = selAll('.pronoun-button');
  pronounButtons.forEach(button => {
    button.addEventListener('click', handlePronounButtonClick)
  });

  const thirdSectionWrapper = makeElement('div', 'third-section-div', contentSection);
    const wrapper3a = makeElement('div', 'wrapper-3-a', thirdSectionWrapper);
      const translateTitleEl = makeElement('h2', 'translate-title-h2', wrapper3a, toBeData.translate.title);
      const translateInstructionsEl = makeElement('p', 'translate-instructions-p', wrapper3a, toBeData.translate.instructions);
      const transWrapper1 = makeElement('div', 'trans-div-1', wrapper3a);
      renderButtons(transWrapper1, 'english', 'practice-pronoun-button', toBeData.subjectPronouns.pairs, handlePracticePronounButtonClick);

    const wrapper3b = makeElement('div', 'wrapper-3-b', thirdSectionWrapper);
      const translateTitleEl2 = makeElement('h2', 'translate-title-h2', wrapper3b, toBeData.translate2.title);
      const translateInstructionsEl2 = makeElement('p', 'translate-instructions-p', wrapper3b, toBeData.translate2.instructions);
      const transWrapper2 = makeElement('div', 'trans-div-2', wrapper3b);
      renderButtons(transWrapper2, 'spanish', 'practice-pronoun-button', toBeData.subjectPronouns.pairs, handlePracticePronounButtonClick2);

    const wrapper3c = makeElement('div', 'wrapper-3-c', thirdSectionWrapper);
      const translateTitleEl3 = makeElement('h2', 'translate-title-h2', wrapper3c, toBeData.translate3.title);
      const translateInstructionsEl3 = makeElement('p', 'translate-instructions-p', wrapper3c, toBeData.translate3.instructions);
      const transWrapper3 = makeElement('div', 'trans-div-3', wrapper3c);
        // const toBeButtonData = new WeakMap<HTMLButtonElement, ClickedToBeButton>();
        renderButtons(transWrapper3, 'english', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick);
      const transWrapper4 = makeElement('div', 'trans-div-4', wrapper3c);
        renderButtons(transWrapper4, 'spanish', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick2);

    const wrapper3d = makeElement('div', 'wrapper-3-d', thirdSectionWrapper);
      const translateTitleEl4 = makeElement('h2', 'translate-title-h2', wrapper3d, toBeData.translate4.title);
      const translateInstructionsEl4 = makeElement('p', 'translate-instructions-p', wrapper3d, toBeData.translate4.instructions);
      const transWrapper5 = makeElement('div', 'trans-div-5', wrapper3d);
        renderButtons(transWrapper5, 'spanish', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick3);
      const transWrapper6 = makeElement('div', 'trans-div-6', wrapper3d);
        renderButtons(transWrapper6, 'english', 'practice-pronoun-button', toBeData.verbToBe.pairs,  handleVerbToBeButtonClick4);

    const wrapper3e = makeElement('div', 'wrapper-3-e', thirdSectionWrapper);
      const translateTitleEl5 = makeElement('h2', 'translate-title-h2', wrapper3e, toBeData.translate5.title);
      const translateInstructionsEl5 = makeElement('p', 'translate-instructions-p', wrapper3e, toBeData.translate5.instructions);
      const transWrapper7 = makeElement('div', 'trans-div-7', wrapper3e);
        const instructionsEl2 = makeElement('span', 'instructions-span', transWrapper7, 'Traduzca: ')
        const engToSpanButton = makeElement('button', 'eng-to-span-button', transWrapper7, 'Ing➔Esp', handleEngToSpanButtonClick);
        const spanToEngButton = makeElement('button', 'span-to-eng-button', transWrapper7, 'Esp➔Ing', handleSpanToEngButtonClick);
      const transWrapper8 = makeElement('div', 'trans-div-8', transWrapper7);
        const transWrapper9 = makeElement('div', 'trans-div-9', transWrapper8);
        // const transWrapper10 = makeElement('div', 'trans-div-10', transWrapper8);

        renderButtons(transWrapper9, 'english', 'practice-sentence-button', toBeData.translate5.sentences, handleEngToSpanSentenceButtonClick);

    const wrapper3f = makeElement('div', 'wrapper-3-f', thirdSectionWrapper);
      const translateTitleEl6 = makeElement('h2', 'translate-title-h2', wrapper3f, toBeData.translate6.title);
      const translateInstructionsEl6 = makeElement('p', 'translate-instructions-p', wrapper3f, toBeData.translate6.instructions);
      const transWrapper11 = makeElement('div', 'trans-div-11', wrapper3f);
      const transWrapper12 = makeElement('div', 'trans-div-12', wrapper3f);
      renderSpans(transWrapper11, transWrapper12)
      const transWrapper13 = makeElement('div', 'trans-div-13', wrapper3f);
      const checkQuestionButton = makeElement('button', 'check-question-button', transWrapper13, 'Revisar', handleCheckQuestionButton);
      const nextQuestionButton = makeElement('button', 'next-question-button', transWrapper13, 'Siguiente', handleNextQuestionButtonClick);

    const wrapper3g = makeElement('div', 'wrapper-3-g', thirdSectionWrapper);
      const translateTitleEl7 = makeElement('h2', 'translate-title-h2', wrapper3g, toBeData.translate7.title);
      const translateInstructionsEl7 = makeElement('p', 'translate-instructions-p', wrapper3g, toBeData.translate7.instructions);
      const statementEl = makeElement('p', 'negation-statement-p', wrapper3g);
      const transWrapper14 = makeElement('div', 'trans-div-14', wrapper3g);
      renderNegations(transWrapper14);
      const transWrapper15 = makeElement('div', 'trans-div-15', wrapper3g);
        const previousNegationButton = makeElement('button', 'previous-negation-button', transWrapper15, 'Anterior', handlePreviousNegationButtonClick);
        const nextNegationButton = makeElement('button', 'next-negation-button', transWrapper15, 'Siguiente', handleNextNegationButtonClick);

    const wrapper3h = makeElement('div', 'wrapper-3-h', thirdSectionWrapper);
      const translateTitleEl8 = makeElement('h2', 'translate-title-h2', wrapper3h, toBeData.translate8.title);
      const translateInstructionsEl8 = makeElement('p', 'translate-instructions-p', wrapper3h, toBeData.translate8.instructions);
      const statementEl2 = makeElement('p', 'negation-statement-2-p', wrapper3h);
      const transWrapper16 = makeElement('div', 'trans-div-16', wrapper3h);
      const transWrapper17 = makeElement('div', 'trans-div-17', wrapper3h);
        const previousNegationButton2 = makeElement('button', 'previous-negation-button-2', transWrapper17, 'Anterior', handlePreviousNegationButtonClick2);
        const nextNegationButton2 = makeElement('button', 'next-negation-button-2', transWrapper17, 'Siguiente', handleNextNegationButtonClick2);
        renderNegations2(statementEl2, transWrapper16);
    const wrapper3i = makeElement('div', 'wrapper-3-i', thirdSectionWrapper);
      const essayTitleEl = makeElement('h2', 'esay-title-h2', wrapper3i, toBeData.essay.title);
      const essayInstructionsEl = makeElement('p', 'essay-instructions-p', wrapper3i, toBeData.essay.instructions);
      const essayWrapper1 = makeElement('div', 'essay-div-1', wrapper3i);
      renderEssay(essayWrapper1);
    const wrapper3j = makeElement('div', 'wrapper-3-j', thirdSectionWrapper);
      const essayTitleEl2 = makeElement('h2', 'esay-title-2-h2', wrapper3j, toBeData.essay2.title);
      const essayInstructionsEl2 = makeElement('p', 'essay-instructions-2-p', wrapper3j, toBeData.essay2.instructions);
      const essayWrapper2 = makeElement('div', 'essay-div-2', wrapper3j);
      const outputEl2 = makeElement('div', 'output-2-div', wrapper3j);

      renderEssay2(essayWrapper2);
  createPopupAndOverlay();
}

// Used keyof Pair here to tell TS that 'english' and 'spanish'  can be used as keys of the Pair obj. Later in makeElement, I can do pair[language]; 
const renderButtons = (element: HTMLDivElement, language: keyof Pair, className: string, obj: Pair[], clickHandler: (event: MouseEvent) => void) => {
  shuffleArray(obj);
  obj.forEach(pair => {
    const practicePronounButton = makeElement('button', className, element, pair[language], clickHandler);
    practicePronounButton.dataset.selected = 'false';
    practicePronounButton.dataset.done = 'false';
    if (language === 'spanish') {
      practicePronounButton.dataset.translation = pair.english;
    } else {
      practicePronounButton.dataset.translation = pair.spanish;
    }
  });
};

const renderSpans = (wrapper: HTMLDivElement, wrapper2: HTMLDivElement) => {
  wrapper.innerHTML = '';
  wrapper2.innerHTML = ''; 
  toBeData.translate6.sentences[toBeFlags.currentQuestion]!.chunks.forEach(chunk => {
    const chunkEl = makeElement('span', chunk.role, wrapper, chunk.text);
    chunkEl.draggable = true;
    chunkEl.id = chunk.text;
    const chunkSlot = makeElement('span', 'chunk-slot', wrapper2, '____')
  });
  addListeners();
}

const renderNegations = (transWrapper14: HTMLDivElement) => {
  const statementEl = sel('.negation-statement-p');
  const obj =  toBeData.translate7.negationData[toBeFlags.currentNegation];
  statementEl.innerHTML = '';
  statementEl.textContent = obj!.statement;
  obj!.negations.forEach(negation => {
    const negationEl = makeElement('button', negation.class, transWrapper14, negation.negation, handleNegationButtonClick);
  });
}

const renderNegations2 = (statementEl2: HTMLParagraphElement, transWrapper16: HTMLDivElement) => {
  statementEl2.innerHTML = '';
  transWrapper16.innerHTML = '';
  const obj = toBeData.translate8.sentences[toBeFlags.currentNegation2]!.negations;
  statementEl2.textContent = toBeData.translate8.sentences[toBeFlags.currentNegation2]!.statement;
  shuffleArray(obj);
  obj.forEach(negation => {
    const negationButtonEl = makeElement('button', 'negation-button-2', transWrapper16, negation.negation, handleNegationButtonClick2);
    negationButtonEl.dataset.correct = negation.correct.toString();
  });
}

const renderEssay = (essayWrapper1: HTMLDivElement) => {
  toBeData.essay.paragraph.forEach(sentence => {
    const essaySentence = makeElement('button', 'essay-sentence-button', essayWrapper1, sentence.text, (event) => handleEssaySentenceClick(event, sentence));
  })
}

const renderEssay2 = (essayWrapper2: HTMLDivElement) => {

  const obj = toBeData.essay2.sentences[toBeFlags.currentSentence2]!;
  const essay2SpanishEl = makeElement('div', 'essay2-spanish-div', essayWrapper2, obj.spanish);
    const userSentenceInputEl = makeInputEl('user-sentence-input', essayWrapper2, 'Traduzca aquí.');
    const checkButton = makeElement('button', 'check-button', essayWrapper2, 'Revisar', handleCheckButtonClick);
    const showHintButton = makeElement('button', 'show-hint-button', essayWrapper2, 'Pista', handleshowHintButtonClick);
    // const nextSentenceButton = makeElement('button', 'next-sentence-button', essayWrapper2, 'Siguiente', handleNextSentenceButtonClick);

  const outputEl = makeElement('div', 'output-div', essayWrapper2);
  // const outputEl2 = makeElement('div', 'output-2-div', essayWrapper2);

}

const addListeners = () => {
  const wrapper3f = sel('.wrapper-3-f');
  const transWrapper11 = sel('.trans-div-11');
  const transWrapper12 = sel('.trans-div-12');
  ([...transWrapper11.children] as HTMLSpanElement[]).forEach((span: HTMLSpanElement) => {
    span.addEventListener('dragstart', handleDragStart);
    span.addEventListener('dragend', handleDragEnd);
  });

  transWrapper12.addEventListener('dragleave', handleDragLeave);
  wrapper3f.addEventListener('dragover', handleDragOver);
  wrapper3f.addEventListener('drop', handleDrop);
}

const handleDragStart = (event: DragEvent) => {
  event.dataTransfer?.setData('text/plain', (event.target as HTMLSpanElement).id);
  (event.target as HTMLSpanElement).style.opacity = '0.5';
};

const handleDragEnd = (event: DragEvent) => {
  (event.target as HTMLSpanElement).style.opacity = '1';
};

const handleDragOver = (event: DragEvent) => {
  const target = event.target as HTMLSpanElement;
  event.preventDefault();
  if (target.matches('.chunk-slot')) {
    target.style.backgroundColor = 'red';
  }  
};

const handleDragLeave = (event: DragEvent) => {
  event.preventDefault();
  const target = event.target as HTMLSpanElement;
  if (target.classList.contains('chunk-slot')) {
    target.style.backgroundColor = 'transparent';
  }
};

const handleDrop = (event: DragEvent) => {
   if (!event.dataTransfer) return;
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);
  const chunkSlot = event.target as HTMLSpanElement;
  if (!draggedElement) return;
  if (chunkSlot.matches('.chunk-slot')) {
    if (chunkSlot.children.length > 0) return;
    chunkSlot.style.backgroundColor = 'transparent';
    draggedElement.remove();
    if (chunkSlot.innerHTML === '____') {
      chunkSlot.innerHTML = '';
    }
    chunkSlot.append(draggedElement);
    return;
  }

  const transWrapper11 = chunkSlot.closest('.trans-div-11');

  if (transWrapper11) {
    transWrapper11.append(draggedElement);
    return;
  }
};

const handlePronounButtonClick = (event: MouseEvent) => {
  speak((event.target as HTMLButtonElement).textContent);

};

const createPopupAndOverlay = () => {
  let choicePopupEl = sel('.choice-poup-div');
  let clearOverlay = sel('.clear-overlay');
  let storyPopupEl = sel('.story-popup');
  if (!choicePopupEl) {
    choicePopupEl = makeElement('div', 'choice-popup-div', document.body); 
  }
  if (!clearOverlay) {
    clearOverlay = makeElement('div', 'clear-overlay', document.body, '', handleClearOverlayClick); 
  }
  if (!storyPopupEl) {
    storyPopupEl = makeElement('div', 'story-popup', document.body); 
  }
}

const popupButtonData = new WeakMap<HTMLButtonElement, PopupPronounButtonData>();

// Traduzca del inglés al español (first section)
const handlePracticePronounButtonClick = (event: MouseEvent) => {
  storeButtonInClickedButtonData(event);
  const transWrapper1 = sel<HTMLDivElement>('.trans-div-1');
  const choicePopupEl = sel<HTMLDivElement>('.choice-popup-div');
  const practicePronounButton = event.target as HTMLButtonElement;
  practicePronounButton.style.backgroundColor = 'red';
  handlePopupAndOverlayOnClick(transWrapper1, choicePopupEl);
  shuffleArray(toBeData.subjectPronouns.pairs);
  toBeData.subjectPronouns.pairs.forEach((pair) => {
    const popupPronounButton = makeElement('button', 'popup-pronoun-button', choicePopupEl, pair.spanish, handlePopupPronounButtonClick);
    const buttonData: PopupPronounButtonData = {
      pronounClicked: event.target as HTMLButtonElement,
      translation: pair.english,
    }
    popupButtonData.set(popupPronounButton, buttonData);
  });
  speak(practicePronounButton.textContent);
}

const handlePopupAndOverlayOnClick = (wrapper: HTMLElement, choicePopupEl: HTMLDivElement) => {
  const clearOverlay = sel('.clear-overlay');
  const wrapperRect = wrapper.getBoundingClientRect();
  choicePopupEl.style.left = `${wrapperRect.left}px`;
  choicePopupEl.style.top = `${wrapperRect.top}px`;
  choicePopupEl.style.transform = 'translateY(-100%)';
  clearOverlay.classList.toggle('clear-overlay-active');
  choicePopupEl.classList.remove('hidden');
  choicePopupEl.innerHTML = '';
}

const clickedButtonData = new WeakMap<HTMLButtonElement, ClickedButton>();

const storeButtonInClickedButtonData = (event: MouseEvent) => {
  clickedButtonData.set(event.target as HTMLButtonElement, {
    button: event.target as HTMLButtonElement,
    selected: true,
  });
}

// Traduzca del español al inglés (first section)
const handlePracticePronounButtonClick2 = (event: MouseEvent) => {
  const transWrapper2 = sel<HTMLDivElement>('.trans-div-2');
  const choicePopupEl = sel<HTMLDivElement>('.choice-popup-div');
  storeButtonInClickedButtonData(event);
  const buttonData = clickedButtonData.get(event.target as HTMLButtonElement);
  if (!buttonData) return;
  buttonData.button.style.backgroundColor = 'red';
  handlePopupAndOverlayOnClick(transWrapper2, choicePopupEl);
  shuffleArray(toBeData.subjectPronouns.pairs);
  console.log('testing');
  toBeData.subjectPronouns.pairs.forEach((pair, i) => {
    const popupPronounButton = makeElement('button', 'popup-pronoun-button', choicePopupEl, pair.english, handlePopupPronounButtonClick);
    const buttonData: PopupPronounButtonData = {
      pronounClicked: event.target as HTMLButtonElement,
      translation: pair.spanish,
    }
    popupButtonData.set(popupPronounButton, buttonData);
  });
}

const handlePopupPronounButtonClick = (event: MouseEvent) => {
  const thirdSectionWrapper = sel('.third-section-div');
  const clearOverlay = sel('.clear-overlay');
  const choicePopupEl = sel('.choice-popup-div');
  const buttonData = popupButtonData.get(event.target as HTMLButtonElement);
  if (!buttonData) return;
  if (buttonData.pronounClicked.textContent === buttonData.translation) {
    correctSound.play();
    choicePopupEl.classList.toggle('hidden');
    clearOverlay.classList.toggle('clear-overlay-active')
    buttonData.pronounClicked.style.backgroundColor = 'white';
    buttonData.pronounClicked.disabled = true;
    buttonData.pronounClicked.classList.add('correct');
  } else {
    incorrectSound.play();
  }
}


// Traduzca del inglés al español (second section)
const handleVerbToBeButtonClick = (event: MouseEvent) => {
  const transWrapper3 = sel('.trans-div-3');
  const transWrapper4 = sel('.trans-div-4');
  const clickedButton = event.target as HTMLButtonElement;
  clickedButton.dataset.selected = 'true';
  clickedButton.style.backgroundColor = 'white';
  clickedButton.style.color = 'black';
  const englishPronouns = transWrapper3.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button');
  const spanishPronouns = transWrapper4.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button')
  speak(clickedButton.textContent);
  toggleButtonState(englishPronouns);
  enableButtonIfNotDone(spanishPronouns);
}

const handleVerbToBeButtonClick2 = (event: MouseEvent) => {
  const transWrapper3 = sel('.trans-div-3');
  const englishButtons = transWrapper3.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button');
  const transWrapper4 = sel('.trans-div-4');
  const spanishButton = event.target as HTMLButtonElement;
  const englishButton = ([...transWrapper3.children] as HTMLButtonElement[]).find(button => (button.dataset.selected === 'true'));
  if (englishButton && englishButton.textContent === spanishButton.dataset.translation) {
    spanishButton.style.backgroundColor = 'white'; //CHANGES SPANISH TRANSLATION BUTTON
    spanishButton.dataset.done = 'true';
    spanishButton.style.color = 'black';
    correctSound.play();
    englishButton.dataset.selected = 'false';
    englishButton.dataset.done = 'true';
    const spanishButtons = transWrapper4.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button');
    // disableButtonIfDone(spanishButtons);
    toggleButtonState(spanishButtons);
    enableButtons(englishButtons)
  } else {
    spanishButton.style.backgroundColor = '';
    incorrectSound.play();
  }
}

// Traduzca del español al inglés (second section)
const handleVerbToBeButtonClick3 = (event: MouseEvent) => {
  const clickedButton = event.target as HTMLButtonElement;
  const transWrapper5 = sel('.trans-div-5');
  const transWrapper6 = sel('.trans-div-6');
  const spanishPronouns = transWrapper5.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button');
  const englishPronouns = transWrapper6.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button');
  clickedButton.style.backgroundColor = 'white';
  clickedButton.style.color = 'black';
  clickedButton.dataset.selected = 'true';
  toggleButtonState(spanishPronouns);
  enableButtonIfNotDone(englishPronouns);

}

const handleVerbToBeButtonClick4 = (event: MouseEvent) => {
  const transWrapper5 = sel('.trans-div-5');
  const transWrapper6 = sel('.trans-div-6');
  const clickedEnglishButton = event.target as HTMLButtonElement;
  const spanishButtons = transWrapper5.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button');
  const englishButtons = transWrapper6.querySelectorAll<HTMLButtonElement>('.practice-pronoun-button');
  const clickedSpanishButton = [...spanishButtons].find(button => (button.dataset.selected === 'true'));
  if (!clickedSpanishButton) return;
  if (clickedSpanishButton && clickedSpanishButton.textContent === clickedEnglishButton.dataset.translation) {
    clickedEnglishButton.style.backgroundColor = 'white';
    clickedEnglishButton.style.color = 'black';
    correctSound.play();
    clickedSpanishButton.dataset.selected = 'false';
    clickedSpanishButton.dataset.done = 'true';
    clickedEnglishButton.dataset.done = 'true';
    toggleButtonState(englishButtons);
    enableButtons(spanishButtons);
  } else {
    clickedEnglishButton.style.backgroundColor = '';
    incorrectSound.play();
  }
}

// Oraciones
const handleEngToSpanButtonClick = () => {
  const transWrapper9 = sel<HTMLDivElement>('.trans-div-9');
  transWrapper9.innerHTML = '';
  renderButtons(transWrapper9, 'english', 'practice-sentence-button', toBeData.translate5.sentences, handleEngToSpanSentenceButtonClick);
}

const handleSpanToEngButtonClick = (event: MouseEvent) => {
  const transWrapper9 = sel<HTMLDivElement>('.trans-div-9');
  transWrapper9.innerHTML = '';
  renderButtons(transWrapper9, 'spanish', 'practice-sentence-button',toBeData.translate5.sentences, handleSpanToEngSentenceButtonClick);
}

const handleEngToSpanSentenceButtonClick = (event: MouseEvent) => {
  const engSentenceButton = event.target as HTMLButtonElement;
  const transWrapper9 = sel<HTMLDivElement>('.trans-div-9');
  const choicePopupEl = sel<HTMLDivElement>('.choice-popup-div');
  const engSentenceButtons = transWrapper9.querySelectorAll<HTMLButtonElement>('.practice-sentence-button');
  speak(engSentenceButton.textContent);
  handlePopupAndOverlayOnClick(transWrapper9, choicePopupEl);
  engSentenceButton.style.backgroundColor = 'white';
  engSentenceButton.style.color = 'black';
  engSentenceButton.dataset.selected = 'true';
  renderButtons(choicePopupEl, 'spanish', 'popup-sentence-translation', toBeData.translate5.sentences, handlePopupSentenceTranslationButton);
  toggleButtonState(engSentenceButtons)
}

const handleSpanToEngSentenceButtonClick = (event: MouseEvent) => {
  const spanSentenceButton = event.target as HTMLButtonElement;
  const transWrapper9 = sel<HTMLDivElement>('.trans-div-9');
  const choicePopupEl = sel<HTMLDivElement>('.choice-popup-div');
  const sentenceButtons = transWrapper9.querySelectorAll<HTMLButtonElement>('.practice-sentence-button');
  handlePopupAndOverlayOnClick(transWrapper9, choicePopupEl);
  spanSentenceButton.style.backgroundColor = 'white';
  spanSentenceButton.style.color = 'black';
  spanSentenceButton.dataset.selected = 'true';
  renderButtons(choicePopupEl, 'english', 'popup-sentence-translation', toBeData.translate5.sentences, handlePopupSentenceTranslationButton);
  toggleButtonState(sentenceButtons);
}

const handlePopupSentenceTranslationButton = (event: MouseEvent) => {
  const transWrapper9 = sel('.trans-div-9');
  const translationButton = event.target as HTMLButtonElement;
  const bottomButtons = transWrapper9.querySelectorAll<HTMLButtonElement>('.practice-sentence-button');
  const choicePopupEl = sel('.choice-popup-div');
  const clearOverlay = sel('.clear-overlay');
  const selectedButton = ([...bottomButtons] as HTMLButtonElement[]).find(button => button.dataset.selected === 'true');
  if (selectedButton && translationButton.textContent === selectedButton.dataset.translation) {
    correctSound.play();
    selectedButton.dataset.selected = 'false';
    selectedButton.disabled = true;
    selectedButton.dataset.done = 'true';
    choicePopupEl.classList.toggle('hidden');
    clearOverlay.classList.toggle('clear-overlay-active');
    enableButtonIfNotDone(bottomButtons);
  } else {
    incorrectSound.play();
  }
}

const handleClearOverlayClick = (event: MouseEvent) => {
  const clearOverlay = event.target as HTMLDivElement;
  const choicePopupEl = sel('.choice-popup-div');
  const storyPopupEl = sel('.story-popup');
  if (clearOverlay.matches('.clear-overlay')) {
    choicePopupEl.classList.add('hidden');
    storyPopupEl.classList.add('hidden');
    clearOverlay.classList.toggle('clear-overlay-active');
  }
}

const handleCheckQuestionButton = () => {
  const transWrapper12 = sel('.trans-div-12');
  let sentenceArray: string[] = [];
  let sentence = '';
  [...transWrapper12.children].forEach(span => {
    sentenceArray.push(span.textContent);
  });
  sentence = sentenceArray.join(' ').toLowerCase();
  sentence = sentence.replace(/\s\?/g, '?');
  const sentenceObj = toBeData.translate6.sentences[toBeFlags.currentQuestion];
  if (!sentenceObj) return;
  if (sentence === sentenceObj.question) {
    correctSound.play();
    transWrapper12.classList.add('show-check');
    transWrapper12.classList.remove('show-x');
    setTimeout(() => {
      speak(sentence);
    }, 600);
  } else {
    incorrectSound.play();
    transWrapper12.classList.remove('show-check');
    transWrapper12.classList.remove('show-x');
    void transWrapper12.offsetWidth;
    transWrapper12.classList.add('show-x');
  }

}

const handleNegationButtonClick = (event: MouseEvent) => {
  speak((event.target as HTMLButtonElement).textContent);
}

const handlePreviousNegationButtonClick = () => {
  if (toBeFlags.currentNegation <= 0) {
    return;
  }
  const transWrapper14 = sel<HTMLDivElement>('.trans-div-14');
  transWrapper14.innerHTML = '';
  toBeFlags.currentNegation--;
  renderNegations(transWrapper14);
}

const handleNextQuestionButtonClick = () => {
  const transWrapper11 = sel<HTMLDivElement>('.trans-div-11');
  const transWrapper12 = sel<HTMLDivElement>('.trans-div-12');
  if (toBeFlags.currentQuestion >= toBeData.translate6.sentences.length -1) {
    transWrapper11.textContent = "No hay más oraciones."
    return;
  }
  toBeFlags.currentQuestion++;
  renderSpans(transWrapper11, transWrapper12);
  transWrapper12.classList.remove('show-check');
  transWrapper12.classList.remove('show-x');
}

const handleNegationButtonClick2 = (event: MouseEvent) => {
  const transWrapper16 = sel('.trans-div-16');
  const negationButton = event.target as HTMLButtonElement;
  if (negationButton.dataset.correct === 'true') {
    correctSound.play();
    toBeFlags.correctPossibilities++;
    negationButton.style.backgroundColor = 'white';
    negationButton.style.color = 'black';
    setTimeout(() => {
      speak(negationButton.textContent);
    }, 700);
    if (toBeFlags.correctPossibilities === toBeData.translate8.sentences[toBeFlags.currentNegation2]!.correctPossibilities) {
      toBeFlags.correctPossibilities = 0;
      transWrapper16.classList.add('show-larger-party-emoji');
      console.log('testing');
      setTimeout(() => {
      transWrapper16.classList.remove('show-larger-party-emoji');
      transWrapper16.classList.add('show-party-emoji');
      }, 200);
    }
  } else {
    incorrectSound.play();
  }
}

const handleNextNegationButtonClick = () => {
  if (toBeFlags.currentNegation >= toBeData.translate7.negationData.length -1) {
    return;
  }
  const transWrapper14 = sel<HTMLDivElement>('.trans-div-14');
  transWrapper14.innerHTML = '';
  toBeFlags.currentNegation++;
  renderNegations(transWrapper14);
}

const handlePreviousNegationButtonClick2 = () => {
  if (toBeFlags.currentNegation2 <= 0) return;
  const transWrapper16 = sel<HTMLDivElement>('.trans-div-16');
  const statementEl2 = sel<HTMLParagraphElement>('.negation-statement-2-p');
  transWrapper16.innerHTML = '';
  toBeFlags.currentNegation2--;
  renderNegations2(statementEl2, transWrapper16);

}

const handleNextNegationButtonClick2 = () => {
  const transWrapper16 = sel<HTMLParagraphElement>('.trans-div-16');
  const statementEl2 = sel<HTMLParagraphElement>('.negation-statement-2-p');
  if (toBeFlags.currentNegation2 >= toBeData.translate8.sentences.length -1) {
    statementEl2.textContent = "No hay más oraciones."
    return;
  }
  toBeFlags.currentNegation2++;
  renderNegations2(statementEl2, transWrapper16);
  transWrapper16.classList.remove('show-party-emoji');
}

const handleEssaySentenceClick = (event: MouseEvent, sentence: ParagraphSentence) => {
  const essaySentenceButton = event.target as HTMLButtonElement;
  const essayWrapper1 = sel('.essay-div-1');
  const storyPopupEl = sel<HTMLDivElement>('.story-popup');
  handlePopupAndOverlayOnClick(essaySentenceButton, storyPopupEl);
  renderPopupContent(sentence, storyPopupEl)
  speak(sentence.text)
}

const renderPopupContent = (sentence: ParagraphSentence, storyPopupEl: HTMLDivElement) => {
  storyPopupEl.innerHTML = '';
  const translationEl = makeElement('div', 'essay-translation', storyPopupEl, sentence.translation);
  const wordWrapper = makeElement('div', 'vocab-word-div', storyPopupEl);
  sentence.words.forEach(word => {
    if (word) {
      const pairWrapper = makeElement('div', 'pair-wrapper', wordWrapper);
      const englishWord = makeElement('span', 'vocab-word-english', pairWrapper, `${word.word}: `);
      const spanishhWord = makeElement('span', 'vocab-word-spanish', pairWrapper, word.translation);
    }
  });
}

const handleCheckButtonClick = () => {
  if (toBeFlags.essay2Finished) return;
  
  const essayWrapper2 = sel<HTMLDivElement>('.essay-div-2');
  const obj = toBeData.essay2.sentences[toBeFlags.currentSentence2];
  const userInputValue = sel<HTMLInputElement>('.user-sentence-input').value;
  const outputEl = sel('.output-div');
  const outputEl2 = sel('.output-2-div');
  let cleanedInput = userInputValue.trim().toLowerCase().replace(/\`|\'/g, '\'');

  let inputWithOutApostrophe = '';
  const inputWithApostrophe = /\'/.test(cleanedInput);

  if (inputWithApostrophe) {

    const hasApostropheS = /\'s/.test(cleanedInput); 
    const hasApostropheM = /\'m/.test(cleanedInput); 
    const hasApostropheRe = /\'re/.test(cleanedInput); 
    if (hasApostropheS ) {
      inputWithOutApostrophe = cleanedInput.replace(/\'s/, ' is');
      inputWithOutApostrophe = inputWithOutApostrophe.replace(/\s+/g, ' ').trim();
      inputWithOutApostrophe = inputWithOutApostrophe.replace(/[^\w\s]/g, '').trim();
    }
    if (hasApostropheM ) {
      inputWithOutApostrophe = cleanedInput.replace(/\'m/, ' am');
      inputWithOutApostrophe = inputWithOutApostrophe.replace(/[^\w\s]/g, '').trim();
      inputWithOutApostrophe = inputWithOutApostrophe.replace(/\s+/g, ' ').trim();
    }
    if (hasApostropheRe ) {
      inputWithOutApostrophe = cleanedInput.replace(/\'re/, ' are');
      inputWithOutApostrophe = inputWithOutApostrophe.replace(/[^\w\s]/g, '');
      inputWithOutApostrophe = inputWithOutApostrophe.trim();
    }
  } else {
    inputWithOutApostrophe = cleanedInput.replace(/\s+/g, ' ').trim();
    inputWithOutApostrophe = inputWithOutApostrophe.replace(/[^\w\s]/g, '').trim();
  }

  if (!obj) return;
  if  (inputWithOutApostrophe === obj.english) {
    makeElement('div', 'output-sentence', outputEl2, `${obj.english2} `)
    if (toBeFlags.currentSentence2 === toBeData.essay2.sentences.length - 1) {
      toBeFlags.essay2Finished = true;
        outputEl.textContent = '¡Terminaste el ejercicio!';
        return;
    }
    correctSound.play();
    outputEl.textContent = "Correcto!"
    essayWrapper2.innerHTML = '';
    toBeFlags.currentSentence2++;
    toBeFlags.currentHint = 0;
    renderEssay2(essayWrapper2);

  } else {
    console.log('different');
    incorrectSound.play();
    outputEl.textContent = "Inténtelo de nuevo o presione 'Pista.'"
  }
}

const handleshowHintButtonClick = () => {
  const outputEl = sel('.output-div');
  if (toBeFlags.currentHint >= toBeData.essay2.sentences[toBeFlags.currentSentence2]!.hints.length){
    return;
  }
  const hint = toBeData.essay2.sentences[toBeFlags.currentSentence2]!.hints[toBeFlags.currentHint];
  const pairWrapper = makeElement('div', 'pair-wrapper', outputEl);
  const hintSpanish = makeElement('span', 'hint-spanish', pairWrapper, `${hint!.word}: `);
  const hintEnglish = makeElement('span', 'hint-english', pairWrapper, hint!.translation);

  toBeFlags.currentHint++;
}

const enableButtonIfNotDone = (element: NodeListOf<HTMLButtonElement>) => {
  element.forEach(item => {
    if (item.dataset.done === 'false') {
      item.disabled = false;
    }
  })
}

const enableButtons = (buttons: NodeListOf<HTMLButtonElement>)  => {
  buttons.forEach(button => {
    button.disabled = false;
    if (button.dataset.done === 'true') {
      button.disabled = true;
    }
  })
}

const toggleButtonState = (element: NodeListOf<HTMLButtonElement>) => {
  element.forEach(item => {
    if (item.dataset.done === 'true') {
      item.disabled = true;
    }
    if (item.dataset.selected === 'false') {
      item.disabled = true;

    }
    if (item.dataset.selected === 'true') {
      item.disabled = true;

    }
  })
}

const renderTable = (tableData: SubjectPronouns) => {
  let html = `<h2>${tableData.title}</h2>`;
  html += `<table border="1" cellpadding="8" style="border-collapse: collapse; margin-bottom: 20px; width: 100%;">`;
  html += `<thead><tr><th>English</th><th>Spanish</th></tr></thead>`;
  html += `<tbody>`;
  
  tableData.pairs.forEach((pair, index) => {
    html += `<tr>`;
    // English column as a button
    html += `<td>
      <button class="pronoun-button">
        ${pair.english}
      </button>
    </td>`;
    // Spanish column remains text
    html += `<td>${pair.spanish}</td>`;
    html += `</tr>`;
  });
  
  html += `</tbody></table>`;
  return html;
}
