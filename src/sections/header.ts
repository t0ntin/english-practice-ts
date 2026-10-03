import { makeElement, renderTopic, sel, toggleHeaderAndOverlay, transitionContent } from "../utils/helpers"
import { adviceData } from "../data/advice-data";
import { suggestData } from "../data/suggest-data";
import { sentences, renderPracticeSection, renderSentences } from "./practice";
import { renderQuestions } from "./questions";
import { conjugationData } from "./conjugation";
import { objectPlusInfData } from "./object-plus-inf";
import { toHaveData } from "./to-have";
import { modalsData } from "./modals";
import { renderPast } from "./the-past";
import { renderDoDoes } from "./do-does";
import { renderRegVerbs } from "./reg-verbs";
import { renderSWords } from "./s-words";

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

const handlePracticeButtonClick = () => {
  toggleHeaderAndOverlay()
  renderPracticeSection();
  sentences.forEach(sentence => {
    if (!sentence.isArchived) {
      renderSentences(sentence);
    }
  })
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
  console.log('test');
}

const handleSuggestClick = () => {
  toggleHeaderAndOverlay()
  renderTopic(suggestData);
}

const handleAdviceClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(adviceData);
}

const handleConjugationClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(conjugationData);
}

const handleObjectPlusInfClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(objectPlusInfData);
}

const handleToHaveClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(toHaveData);
}

const handleModalsClick = () => {
  toggleHeaderAndOverlay();
  renderTopic(modalsData);
}

const handleQuestionsClick = () => {
  toggleHeaderAndOverlay();
  renderQuestions();
}

const handleDoDoesClick = () => {
  toggleHeaderAndOverlay();
  renderDoDoes();
}

const handlePastClick = () => {
  toggleHeaderAndOverlay();
  renderPast();
}


const handlePronunciationClick = () => {
  console.log('test');
}

const handleRegVerbsClick = () => {
  toggleHeaderAndOverlay();
  renderRegVerbs();
}

const handleSWordsClick = () => {
  toggleHeaderAndOverlay();
  renderSWords();
}

const handlePluralsClick = () => {
  console.log('test');
}

const handleWordOrderClick = () => {
  console.log('test');
}

const handleSvoClick = () => {
  console.log('test');
}

const handleBasicClick = () => {
  console.log('test');
}

const handleToBeClick = () => {
  console.log('test');
}

const handleOverlayClick = () => {
  const overlay = sel('.overlay');
  overlay.classList.remove('visible-overlay');
  onOverlayClose();
}

let onOverlayClose: () => void = () => {};
export function showOverlay(closeAction: () => void) {
  const overlay = sel('.overlay');
  onOverlayClose = closeAction;
  overlay.classList.add('visible-overlay');
}