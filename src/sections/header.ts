import { headerData} from "../data/header-data"
import { makeElement, renderTopic, select, toggleHeaderAndOverlay, transitionContent } from "../utils/helpers"
import { suggestData } from "./suggest";
// import { renderSuggestions } from "./suggest";

export let sentences = [
  {  
    sentence: "My test sentence", 
    translation: "Mi oracion de prueba",
    isArchived: false,
  },
];

const localStorageSentences = localStorage.getItem('sentences');

if (localStorageSentences) {
  sentences = JSON.parse(localStorageSentences);
}

export const renderHeader = () => {
  // const header = select('.header');
  // const nav = select('.nav');
    // const practiceLi = select('.practice-li');

    const practiceButton = select('.practice-button');
    practiceButton.addEventListener('click', handlePracticeButtonClick);
    const grammarButton = select('.grammar-button');
      grammarButton.addEventListener('click', handleGrammarClick);

      const suggestLi = select('.suggest-recommend-li');
      const suggestButton = makeElement('button', 'suggestions-button', suggestLi, 'Suggestions', handleSuggestClick);

      const adviceLi = select('.advice-li');
      const adviceButton = makeElement('button', 'advice-button', adviceLi, 'Advice', handleAdviceClick);

      const conjugationLi = select('.conjugation-li');
      const conjugationButton = makeElement('button', 'conjugation-button', conjugationLi, 'Conjugation', handleConjugationClick);

      const objectplusinfLi = select('.objectplusinf-li');
      const objectPlusInfButton = makeElement('button', 'objectplusinf-button', objectplusinfLi, 'Object + inf.', handleObjectPlusInfClick);

      const toHaveLi = select('.to-have-li');
      const toHaveButton = makeElement('button', 'to-have-button', toHaveLi, 'To have', handleToHaveClick);

      const modalsLi = select('.modals-li');
      const modalsButton = makeElement('button', 'modals-button', modalsLi, 'Modals', handleModalsClick);

      const questionsLi = select('.questions-li');
      const questionsButton = makeElement('button', 'questions-button', questionsLi, 'Questions', handleQuestionsClick);

      const pastLi = select('.past-li');
      const pastButton = makeElement('button', 'past-button', pastLi, 'The Past', handlePastClick);

      const doDoesLi = select('.do-does-li');
      const doDoesButton = makeElement('button', 'do-does-button', doDoesLi, 'Do-Does', handleDoDoesClick);

    
    const pronunciationLi = select('.pronunciation-li');
      const pronunciationButton = select('.pronunciation-button');
      pronunciationButton.addEventListener('click', handlePronunciationClick);

      // const pronunciationUl = select('.pronunciation-ul');
      const regVerbsLi = select('.reg-verbs-li');
        const regVerbsButton = makeElement('button', 'reg-verbs-button', regVerbsLi, 'Reg. verbs', handleRegVerbsClick);

      const sWordsLi = select('.s-words-li');
        const sWordsButton = makeElement('button', 's-words-button', sWordsLi, 'S-words', handleSWordsClick);

      const pluralsLi = select('.plurals-li');
        const pluralsButton = makeElement('button', 'plurals-button', pluralsLi, 'Plurals', handlePluralsClick);

    const wordORderLi = select('.word-order-li');
      const wordORderButton = select('.word-order-button');
      wordORderButton.addEventListener('click', handleWordOrderClick);
      const svoLi = select('.svo-li');
        const svoButton = makeElement('button', 'svo-button', svoLi, 'S.V.O', handleSvoClick);


    const basicLi = select('.basic-li');
      const basicButton = select('.basic-button');
      basicButton.addEventListener('click', handleBasicClick);
      const toBeLi = select('.to-be-li');
        const toBeButton = makeElement('button', 'to-be-button', toBeLi, 'To be', handleToBeClick);

      const mainSection = select('.main-section');
      const menuButton = makeElement('button', 'menu-button', mainSection, '', handleMenuButtonClick)
        const contentSection = makeElement('div', 'content-section', mainSection);

  const overlay = select('.overlay');
  overlay.addEventListener('click', toggleHeaderAndOverlay);

  renderTopic(suggestData);
  
}


const handlePracticeButtonClick = () => {
  console.log('test');
}

const handleMenuButtonClick = () => {
  toggleHeaderAndOverlay();

}

const handleGrammarClick = () => {
  console.log('test');
}

const handleSuggestClick = () => {
  toggleHeaderAndOverlay()
  renderTopic(suggestData);
}

const handleAdviceClick = () => {
  console.log('test');
}

const handleConjugationClick = () => {
  console.log('test');
}

const handleObjectPlusInfClick = () => {
  console.log('test');
}

const handleToHaveClick = () => {
  console.log('test');
}

const handleModalsClick = () => {
  console.log('test');
}

const handleQuestionsClick = () => {
  console.log('test');
}

const handleDoDoesClick = () => {
  console.log('test');
}

const handlePastClick = () => {
  console.log('test');
}


const handlePronunciationClick = () => {
  console.log('test');
}

const handleRegVerbsClick = () => {
  console.log('test');
}

const handleSWordsClick = () => {
  console.log('test');
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
}


// const handleMenuButtonClick = () => {
//     const headerEl = select('.header');
//   headerEl.classList.toggle('active-aside');
//   let overlay2El = select('.overlay-2');
//   if (!overlay2El) {
//     overlay2El = makeElement('div', 'overlay-2', document.body, '', handleOverlay2Click);
//   }
//     overlay2El.classList.toggle('active-overlay-2');
// }

// const handleOverlay2Click = (event) => {
//   const asideEl = select('.aside');
//   event.target.classList.toggle('active-overlay-2');
//   asideEl.classList.toggle('active-aside');
// }

