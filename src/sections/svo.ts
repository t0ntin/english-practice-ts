import { makeElement, sel, showNotification, transitionContent } from "../utils/helpers";
import { svoFlags, svoSentences } from "../data/svo-data";

export const renderSvo = () => {
  // toggleLinkStyles();
  const contentSection = sel('.content-section');
  contentSection.innerHTML = '';
  transitionContent(contentSection, 'scale-up', 'scale-down');
  const tableContainer = makeElement('div', 'table-container', contentSection);
  const tableWrapper1 = makeElement('div', 'table-wrapper-1', tableContainer);
  const personEl = makeElement('div', 'person-div', tableWrapper1, 'Person');
  const actionEl = makeElement('div', 'action-div', tableWrapper1, 'Action');
  const whatEl = makeElement('div', 'what-div', tableWrapper1, 'What');
  const otherInfoEl = makeElement('div', 'other-info-div', tableWrapper1, 'Other information');

  const tableWrapper2 = makeElement('div', 'table-wrapper-2', tableContainer);
  const personEl2 = makeElement('div', 'person-2-div', tableWrapper2);
  const actionEl2 = makeElement('div', 'action-2-div', tableWrapper2);
  const whatEl2 = makeElement('div', 'what-2-div', tableWrapper2);
  const otherInfoEl2 = makeElement('div', 'other-info-2-div', tableWrapper2);

  const buttonWrapper = makeElement('div', 'button-wrapper', contentSection, 'Is this sentence correct?');
  const yesButton = makeElement('button', 'yes-button', buttonWrapper, 'Yes', () => handleAnswer(true));
  const noButton = makeElement('button', 'no-button', buttonWrapper, 'No', () => handleAnswer(false));

  const counterWrapper = makeElement('div', 'counter-wrapper', contentSection);
  const scoreEl = makeElement('span', 'score-span', counterWrapper, 'Score: ')
  const rightAnswersEl = makeElement('span', 'right-answers-span', counterWrapper, '0');
  const slashEl = makeElement('span', 'slash-span', counterWrapper,'/');
  const totalItemsEl = makeElement('span', 'total-items', counterWrapper);
  showTotalOfSentences();
  showSentence();

}

export const showSentence = () => {
  const currentSentence = svoSentences[svoFlags.currentGroupIndex]![svoFlags.currentSentenceIndex]!.words;
  svoFlags.chosenSentence = currentSentence;
  const tableWrapper2 = sel('.table-wrapper-2');
  const htmlCollection = tableWrapper2.children;
  const sentenceParts = [...htmlCollection];
  currentSentence.forEach((word, i) => {
    const color = word.color;
    setTimeout(() => {
      sentenceParts[i]!.textContent = word.text;
      (sentenceParts[i] as HTMLElement).style.backgroundColor = color;
    }, 700);
    transitionText((sentenceParts[i] as HTMLElement));
  });
}

const handleAnswer = (userAnswer: boolean) => {
  const contentSection = sel('.content-section');
  const answer = svoSentences[svoFlags.currentGroupIndex]![svoFlags.currentSentenceIndex]!.correct;
  if (userAnswer === true && answer === true || userAnswer === false && answer === false) {
    updateRightAnswersCounter();
    showNotification('Correct!', contentSection, 55, 40);
    if (svoFlags.currentSentenceIndex === svoSentences[svoFlags.currentGroupIndex]!.length - 1) {
      goToNextGroup();
      
      if (svoFlags.currentGroupIndex < svoSentences.length) {
        showSentence();
      }
      return;
    }
    svoFlags.currentSentenceIndex++;
    showSentence();
  };

  if (userAnswer === true && answer === false) {
    showNotification('That one is incorrect!', contentSection, 45, 45);
        if (svoFlags.currentSentenceIndex === svoSentences[svoFlags.currentGroupIndex]!.length - 1) {
      goToNextGroup();

      if (svoFlags.currentGroupIndex < svoSentences.length) {
        showSentence();
      }
      return;
    }
    svoFlags.currentSentenceIndex++;
    showSentence();
  }

  if (userAnswer === false && answer === true) {
    showNotification('Oops! This one is the correct one.', contentSection, 45, 45);
        if (svoFlags.currentSentenceIndex === svoSentences[svoFlags.currentGroupIndex]!.length - 1) {
      goToNextGroup();

      if (svoFlags.currentGroupIndex < svoSentences.length) {
        showSentence();
      }
      return;
    }
    svoFlags.currentSentenceIndex++;
    showSentence();

  }

}

function goToNextGroup() {
  const contentSection = sel('.content-section');
  svoFlags.currentGroupIndex++;
  svoFlags.currentSentenceIndex = 0;
  if (svoFlags.currentGroupIndex >= svoSentences.length) {
    showNotification('No more sentences.', contentSection, 45, 45)
    return;
  }

}

const transitionText = (element: HTMLElement) => {
element.style.transform = 'translate(50%)';
element.classList.add('text-slide');
setTimeout(() => {
  element.style.transform = 'translate(0)';
element.classList.remove('text-slide');
}, 500);
}

const showTotalOfSentences = () => {
  let numberOfSentences = 0;
  svoSentences.forEach(sentence => {
    numberOfSentences += sentence.length;
  })
  const totalItemsEl = sel('.total-items');
  totalItemsEl.textContent = numberOfSentences.toString();
}

const updateRightAnswersCounter = () => {
  const rightAnswersEl = sel('.right-answers-span');
  svoFlags.correctAnswersCounter++;
  rightAnswersEl.textContent = svoFlags.correctAnswersCounter.toString();
}