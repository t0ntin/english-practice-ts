import { makeElement, renderTopic, sel, toggleHeaderAndOverlay, transitionContent } from "../utils/helpers"
import { adviceData } from "../data/advice-data";
import { suggestData } from "../data/suggest-data";
import { sentences, renderPracticeSection, renderSentences } from "./practice";
import { renderQuestions } from "./grammar/questions";
import { conjugationData } from "../data/conjugation-data";
import { objectPlusInfData } from "../data/object-plus-inf";
import { toHaveData } from "../data/to-have-data";
import { modalsData } from "../data/modals-data";
import { renderPast } from "./grammar/the-past";
import { renderDoDoes } from "./grammar/do-does";
import { renderRegVerbs } from "./pronunciation/reg-verbs";
import { renderSWords } from "./pronunciation/s-words";
import { renderPlurals } from "./pronunciation/plurals";
import { renderSvo } from "./svo";
import { renderToBe } from "./to-be";
import { headerFlags } from "../data/header-data";

const loadSection = (section: string) => {
    switch (section) {
    case 'practice':
      renderPracticeSection();
      sentences.forEach(sentence => {
        renderSentences(sentence);
      })
      break;
    case 'suggestions':
      renderTopic(suggestData);
      break;
    case 'advice':
      renderTopic(adviceData);
      break;
    case 'conjugation':
      renderTopic(conjugationData);
      break;
    case 'objectplusinf':
      renderTopic(objectPlusInfData);
      break;
    case 'tohave':
      renderTopic(toHaveData);
      break;
    case 'modals':
      renderTopic(modalsData);
      break;
    case 'questions':
      renderQuestions();
      break;
    case 'past':
      renderPast();
      break;
    case 'dodoes':
      renderDoDoes();
      break;
    case 'regverbs':
      renderRegVerbs();
      break;
    case 'swords':
      renderSWords();
      break;
    case 'plurals':
      renderPlurals();
      break;
    case 'svo':
      renderSvo();
      break;
    case 'tobe':
      renderToBe();
      break;
  }
}

export const initialize = () => {
  renderHeader();
  window.addEventListener('popstate', (event: PopStateEvent) => {
  const section = event.state?.section ?? 'suggestions';
  loadSection(section);
  changeButtonStyle(section);
  });
}

export const renderHeader = () => {
  const practiceButton = sel('.practice-button');
  practiceButton.addEventListener('click', handlePracticeButtonClick);
  const grammarButton = sel('.grammar-button');
    grammarButton.addEventListener('click', handleGrammarClick);

    const suggestLi = sel('.suggest-recommend-li');
    const suggestButton = makeElement('button', 'suggestions-button', suggestLi, 'Suggestions', handleSuggestClick);

    const adviceLi = sel('.advice-li');
    const adviceButton = makeElement('button', 'advice-button', adviceLi, 'Advice', handleAdviceClick);

    const conjugationLi = sel('.conjugation-li');
    const conjugationButton = makeElement('button', 'conjugation-button', conjugationLi, 'Conjugation', handleConjugationClick);

    const objectplusinfLi = sel('.objectplusinf-li');
    const objectPlusInfButton = makeElement('button', 'objectplusinf-button', objectplusinfLi, 'Object + inf.', handleObjectPlusInfClick);

    const toHaveLi = sel('.to-have-li');
    const toHaveButton = makeElement('button', 'to-have-button', toHaveLi, 'To have', handleToHaveClick);

    const modalsLi = sel('.modals-li');
    const modalsButton = makeElement('button', 'modals-button', modalsLi, 'Modals', handleModalsClick);

    const questionsLi = sel('.questions-li');
    const questionsButton = makeElement('button', 'questions-button', questionsLi, 'Questions', handleQuestionsClick);

    const pastLi = sel('.past-li');
    const pastButton = makeElement('button', 'past-button', pastLi, 'The Past', handlePastClick);

    const doDoesLi = sel('.do-does-li');
    const doDoesButton = makeElement('button', 'do-does-button', doDoesLi, 'Do-Does', handleDoDoesClick);

  
  const pronunciationLi = sel('.pronunciation-li');
    const pronunciationButton = sel('.pronunciation-button');
    pronunciationButton.addEventListener('click', handlePronunciationClick);

    // const pronunciationUl = select('.pronunciation-ul');
    const regVerbsLi = sel('.reg-verbs-li');
      const regVerbsButton = makeElement('button', 'reg-verbs-button', regVerbsLi, 'Reg. verbs', handleRegVerbsClick);

    const sWordsLi = sel('.s-words-li');
      const sWordsButton = makeElement('button', 's-words-button', sWordsLi, 'S-words', handleSWordsClick);

    const pluralsLi = sel('.plurals-li');
      const pluralsButton = makeElement('button', 'plurals-button', pluralsLi, 'Plurals', handlePluralsClick);

  const wordORderLi = sel('.word-order-li');
    const wordORderButton = sel('.word-order-button');
    wordORderButton.addEventListener('click', handleWordOrderClick);
    const svoLi = sel('.svo-li');
      const svoButton = makeElement('button', 'svo-button', svoLi, 'S.V.O', handleSvoClick);


  const basicLi = sel('.basic-li');
    const basicButton = sel('.basic-button');
    basicButton.addEventListener('click', handleBasicClick);
    const toBeLi = sel('.to-be-li');
      const toBeButton = makeElement('button', 'to-be-button', toBeLi, 'To be', handleToBeClick);

    const mainEl = sel('.main');
    const menuButton = makeElement('button', 'menu-button', mainEl, '', handleMenuButtonClick)

  const overlay = sel('.overlay');
  overlay.addEventListener('click', handleOverlayClick);

  renderTopic(suggestData);
  history.pushState({ section: 'suggestions' }, '', '');

}

const handlePracticeButtonClick = () => {
  toggleHeaderAndOverlay()
  renderPracticeSection();
  history.pushState({ section: 'practice' }, '', '');
  sentences.forEach(sentence => {
    if (!sentence.isArchived) {
      renderSentences(sentence);
    }
  })
  changeButtonStyle('practice')
}

const handleMenuButtonClick = () => {
  const overlay = sel('.overlay');
  const header = sel('.header');

  if (header.classList.contains('visible-header')) {
    header.classList.remove('visible-header');
    overlay.classList.remove('visible-overlay');
    return;
  }

  header.classList.add('visible-header');
  showOverlay(() => {
    header.classList.remove('visible-header');
  });
};

const handleGrammarClick = () => {
  const grammarUl = sel('.grammar-ul');
  grammarUl.classList.toggle('collapse');
}

const handleSuggestClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(suggestData);
  changeButtonStyle('suggestions');
  history.pushState({ section: 'suggestions' }, '', '');
}

const handleAdviceClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(adviceData);
  changeButtonStyle('advice');
  history.pushState({ section: 'advice' }, '', '');
}

const handleConjugationClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(conjugationData);
  changeButtonStyle('conjugation');
  history.pushState({ section: 'conjugation' }, '', '');
}

const handleObjectPlusInfClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(objectPlusInfData);
  changeButtonStyle('objectplusinf');
  history.pushState({ section: 'objectplusinf' }, '', '');
}

const handleToHaveClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(toHaveData);
  changeButtonStyle('tohave');
  history.pushState({ section: 'tohave' }, '', '');
}

const handleModalsClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(modalsData);
  changeButtonStyle('modals');
  history.pushState({ section: 'modals' }, '', '');
}

const handleQuestionsClick = () => {
  toggleHeaderAndOverlay();
  renderQuestions();
  changeButtonStyle('questions');
  history.pushState({ section: 'questions' }, '', '');
}

const handleDoDoesClick = () => {
  toggleHeaderAndOverlay();
  renderDoDoes();
  changeButtonStyle('dodoes');
  history.pushState({ section: 'dodoes' }, '', '');
}

const handlePastClick = () => {
  toggleHeaderAndOverlay();
  renderPast();
  changeButtonStyle('past');
  history.pushState({ section: 'past' }, '', '');
}

const handlePronunciationClick = () => {
  const pronunciationUl = sel('.pronunciation-ul');
  pronunciationUl.classList.toggle('collapse');
}

const handleRegVerbsClick = () => {
  toggleHeaderAndOverlay();
  renderRegVerbs();
  changeButtonStyle('regverbs');
  history.pushState({ section: 'regverbs' }, '', '');
}

const handleSWordsClick = () => {
  toggleHeaderAndOverlay();
  renderSWords();
  changeButtonStyle('swords');
  history.pushState({ section: 'swords' }, '', '');
}

const handlePluralsClick = () => {
  toggleHeaderAndOverlay();
  renderPlurals();
  changeButtonStyle('plurals');
  history.pushState({ section: 'plurals' }, '', '');
}

const handleWordOrderClick = () => {
  const wordOrderUl = sel('.word-order-ul');
  wordOrderUl.classList.toggle('collapse');
}

const handleSvoClick = () => {
  toggleHeaderAndOverlay();
  renderSvo();
  changeButtonStyle('svo');
  history.pushState({ section: 'svo' }, '', '');
}

const handleBasicClick = () => {
  const basicUl = sel('.basic-ul');
  basicUl.classList.toggle('collapse');
}

const handleToBeClick = () => {
  toggleHeaderAndOverlay();
  renderToBe();
  changeButtonStyle('tobe');
  history.pushState({ section: 'tobe' }, '', '');
}

const handleOverlayClick = () => {
  const overlay = sel('.overlay');
  overlay.classList.remove('visible-overlay');
  onOverlayClose();
}

const changeButtonStyle = (sectionName: string) => {
  if (headerFlags.lastSelectedElement) {
    headerFlags.lastSelectedElement.classList.remove('selected');
  }
  if (sectionName === 'practice') {
    const button = sel<HTMLButtonElement>('.practice-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'suggestions') {
    const button = sel<HTMLButtonElement>('.suggestions-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'advice') {
    const button = sel<HTMLButtonElement>('.advice-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'conjugation') {
    const button = sel<HTMLButtonElement>('.conjugation-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'objectplusinf') {
    const button = sel<HTMLButtonElement>('.objectplusinf-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'tohave') {
    const button = sel<HTMLButtonElement>('.to-have-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'modals') {
    const button = sel<HTMLButtonElement>('.modals-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'questions') {
    const button = sel<HTMLButtonElement>('.questions-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'past') {
    const button = sel<HTMLButtonElement>('.past-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'dodoes') {
    const button = sel<HTMLButtonElement>('.do-does-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'regverbs') {
    const button = sel<HTMLButtonElement>('.reg-verbs-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'swords') {
    const button = sel<HTMLButtonElement>('.s-words-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'plurals') {
    const button = sel<HTMLButtonElement>('.plurals-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'svo') {
    const button = sel<HTMLButtonElement>('.svo-button');
    addClassAndUpdateLastSelectedElement(button);
  }
  if (sectionName === 'tobe') {
    const button = sel<HTMLButtonElement>('.to-be-button');
    addClassAndUpdateLastSelectedElement(button);
  }
}

const addClassAndUpdateLastSelectedElement = (button: HTMLButtonElement) => {
  button.classList.add('selected');
  headerFlags.lastSelectedElement = button;
}

let onOverlayClose: () => void = () => {};
export function showOverlay(closeAction: () => void) {
  const overlay = sel('.overlay');
  onOverlayClose = closeAction;
  overlay.classList.add('visible-overlay');
}