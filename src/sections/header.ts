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

    const mainSection = sel('.main-section');
    const menuButton = makeElement('button', 'menu-button', mainSection, '', handleMenuButtonClick)
      const contentSection = makeElement('div', 'content-section', mainSection);

  const overlay = sel('.overlay');
  overlay.addEventListener('click', handleOverlayClick);

  renderTopic(suggestData);
}

const handlePracticeButtonClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay()
  renderPracticeSection();
  sentences.forEach(sentence => {
    if (!sentence.isArchived) {
      renderSentences(sentence);
    }
  })
  changeButtonStyle(event)
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

const handleSuggestClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay()
  renderTopic(suggestData);
  changeButtonStyle(event)
}

const handleAdviceClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderTopic(adviceData);
  changeButtonStyle(event)
}

const handleConjugationClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderTopic(conjugationData);
  changeButtonStyle(event)
}

const handleObjectPlusInfClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderTopic(objectPlusInfData);
  changeButtonStyle(event)
}

const handleToHaveClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderTopic(toHaveData);
  changeButtonStyle(event)
}

const handleModalsClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderTopic(modalsData);
  changeButtonStyle(event)
}

const handleQuestionsClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderQuestions();
  changeButtonStyle(event)
}

const handleDoDoesClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderDoDoes();
  changeButtonStyle(event)
}

const handlePastClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderPast();
  changeButtonStyle(event)
}

const handlePronunciationClick = () => {
  const pronunciationUl = sel('.pronunciation-ul');
  pronunciationUl.classList.toggle('collapse');
}

const handleRegVerbsClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderRegVerbs();
  changeButtonStyle(event)
}

const handleSWordsClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderSWords();
  changeButtonStyle(event)
}

const handlePluralsClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderPlurals();
  changeButtonStyle(event)
}

const handleWordOrderClick = () => {
  const wordOrderUl = sel('.word-order-ul');
  wordOrderUl.classList.toggle('collapse');
}

const handleSvoClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderSvo();
  changeButtonStyle(event)
}

const handleBasicClick = () => {
  const basicUl = sel('.basic-ul');
  basicUl.classList.toggle('collapse');
}

const handleToBeClick = (event: MouseEvent) => {
  toggleHeaderAndOverlay();
  renderToBe();
  changeButtonStyle(event)
}

const handleOverlayClick = () => {
  const overlay = sel('.overlay');
  overlay.classList.remove('visible-overlay');
  onOverlayClose();
}

const changeButtonStyle = (event: MouseEvent) => {
  if (headerFlags.lastSelectedElement) {
    headerFlags.lastSelectedElement.classList.remove('selected');
  }
  const clickedButton = event.target as HTMLButtonElement;
  headerFlags.lastSelectedElement = clickedButton;
  clickedButton.classList.add('selected');
}

let onOverlayClose: () => void = () => {};
export function showOverlay(closeAction: () => void) {
  const overlay = sel('.overlay');
  onOverlayClose = closeAction;
  overlay.classList.add('visible-overlay');
}