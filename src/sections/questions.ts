import { sentences } from "./header";
import { questions, questionsFlags } from "../data/question-data";
import { makeElement, makeInputEl, saveToLocalStorage, select, showNotification, transitionContent } from "../utils/helpers";


export const  renderQuestions = () => {
  // flags.currentSection = "Common Errors"
  // toggleLinkStyles();
  const contentSection = select('.content-section');
  // transitionContent(contentSection, 'scale-up', 'scale-down');
  contentSection.innerHTML = '';
  const sentenceContainer = makeElement('div', 'sentence-container', contentSection);
  const correctSentenceContainer = makeElement('div', 'correct-sentence-container', contentSection);

  const currentSentence = questionsFlags.currentSentence;
  const currentQuestion = questions[currentSentence]!.questions[questionsFlags.currentQuestion]!;
  
  questions[currentSentence]!.statement.chunks.forEach(chunk => {
    const element = makeElement('span', chunk.role, sentenceContainer, chunk.text);
  });

  const wrapper1 = makeElement('div', 'wrapper1-div', contentSection);

    const instructionsEl = makeElement('p', 'instructions-p', wrapper1, currentQuestion.instruction);
    // transitionContent(instructionsEl, 'slide1', 'slide2');
    const partOfSpeechEl = makeElement('span', currentQuestion.role, instructionsEl, currentQuestion.partOfSpeech);

    const inputEl = makeInputEl('sentence-input', wrapper1, 'Type your question here...');

    const checkSencenceButton = makeElement('button', 'check-sentence-button', wrapper1, 'Check \u00A0 ✔', handleCheckSentenceClick);
    const hint1Button = makeElement('button', 'hint1-button', wrapper1, '💡 \u00A0 Hint 1', handleHint1Buttonclick);
    const hint2Button = makeElement('button', 'hint2-button', wrapper1, '💡 \u00A0 Hint 2', handleHint2Buttonclick);
    const showAnswserButton = makeElement('button', 'show-answer-button', wrapper1, 'Show Answer', handleShowAnswerButtonclick);
    const addToPracticeButton = makeElement('button', 'add-to-practice-button', wrapper1, '📌 \u00A0 Add to practice', handleAddToPracticeButtonclick);


    const previousButton = makeElement('button', 'previous-button', wrapper1, '⬅️ \u00A0 Previous Sentence', handlePreviousButtonClick);
    const nextButton = makeElement('button', 'next-button', wrapper1, 'Next Sentence \u00A0 ➡️', handleNextButtonClick);
}

const handleCheckSentenceClick = () => {
  const contentSection = select('.content-section');
  const correctSentenceContainer = select('.correct-sentence-container');
  correctSentenceContainer.innerHTML = '';
  
  const inputEl = select<HTMLInputElement>('.sentence-input');
  const currentQuestion = questions[questionsFlags.currentSentence]!.questions[questionsFlags.currentQuestion]!;

  const cleanedInput = normalizeString(inputEl.value);
  if (cleanedInput === currentQuestion.text.toLowerCase()) {
    console.log('testing');
    currentQuestion.chunks.forEach((chunk, i) => {
      makeElement('span', chunk.role, correctSentenceContainer, chunk.text);
      showNotification('Correct!', contentSection, 45, 45);
    });

    makeElement('span', 'correct-response', correctSentenceContainer, '☑️')
  } else {
    showNotification('Try again or get a hint.', contentSection, 50, 50);
  }
}

const handlePreviousButtonClick = () => {
  if (questionsFlags.currentSentence === 0 && questionsFlags.currentQuestion === 0) return;
  if (questionsFlags.currentQuestion === 0 ) {
    questionsFlags.currentSentence--;
    questionsFlags.currentQuestion = questions[questionsFlags.currentSentence]!.questions.length-1;
    renderQuestions();
  } else {
    questionsFlags.currentQuestion--;
    renderQuestions();
  }
}

const handleNextButtonClick = () => {
  if (questionsFlags.currentQuestion === questions[questionsFlags.currentSentence]!.questions.length - 1) {

    if (questionsFlags.currentSentence === questions.length -1) return;

    questionsFlags.currentSentence++;
    console.log(questionsFlags.currentQuestion);
    questionsFlags.currentQuestion = 0;  
    renderQuestions();
  } else {
    questionsFlags.currentQuestion++;
    renderQuestions();
  }
}

const handleHint1Buttonclick = () => {
  const correctSentenceContainer = select('.correct-sentence-container');
  correctSentenceContainer.innerHTML = '';
  correctSentenceContainer.innerText = questions[questionsFlags.currentSentence]!.questions[questionsFlags.currentQuestion]!.hint1;
  transitionContent(correctSentenceContainer, 'scale-up', 'scale-down');

}

const handleHint2Buttonclick = () => {
  const correctSentenceContainer = select('.correct-sentence-container');
  correctSentenceContainer.innerHTML = '';
  correctSentenceContainer.innerText = questions[questionsFlags.currentSentence]!.questions[questionsFlags.currentQuestion]!.hint2;
  transitionContent(correctSentenceContainer, 'scale-up', 'scale-down');
}

const handleShowAnswerButtonclick = () => {
  const correctSentenceContainer = select('.correct-sentence-container');
  correctSentenceContainer.innerHTML = '';
  correctSentenceContainer.innerText = questions[questionsFlags.currentSentence]!.questions[questionsFlags.currentQuestion]!.text + '?';
  transitionContent(correctSentenceContainer, 'scale-up', 'scale-down');
}

const handleAddToPracticeButtonclick = () => {
  const contentSection = select('.content-section')
  const sentenceObj = {sentence: questions[questionsFlags.currentSentence]!.questions[questionsFlags.currentQuestion]!.text + '?', translation: questions[questionsFlags.currentSentence]!.questions[questionsFlags.currentQuestion]!.hint2, isArchived: false};
  sentences.push(sentenceObj);
  saveToLocalStorage();
  showNotification('Sentence added.', contentSection, 45, 45);
}

const normalizeString = (string: string) => {
  if (!string) return '';
  let normalized = string.toLowerCase().trim();
  normalized = normalized.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
  return normalized;
}

