import { pastStories as importedPastStories } from "../../data/the-past-data";
import { pastFlags } from "../../data/the-past-data";
import { makeElement, saveToLocalStorage, sel, showNotification, speak } from "../../utils/helpers";
import { sentences } from "../practice";
import type { SentenceObj } from "../../types/types";
import correctSoundFile from '../../../src/sounds/correct.mp3';
import incorrectSoundFile from '../../../src/sounds/incorrect.mp3';

const correctSound = new Audio(correctSoundFile);
const incorrectSound = new Audio(incorrectSoundFile);

let pastStories = [...importedPastStories];
const localStoragePastStories = localStorage.getItem('pastStories');

if (localStoragePastStories) {
  pastStories = JSON.parse(localStoragePastStories);
}

export const renderPast = () => {
  // flags.currentSection = "Common Errors"
  // toggleLinkStyles();
  const contentSection = sel<HTMLDivElement>('.content-section');
  contentSection.innerHTML = '';
    // transitionContent(contentSection, 'scale-up', 'scale-down');
  const storyWrapper = makeElement('div', 'story-wrapper', contentSection);
  const currentStory = pastStories[pastFlags.currentStory];
  const titleEl = makeElement('h2', 'story-title', contentSection, currentStory!.title);
  const suggestionEl = makeElement('div', 'suggestion-div', contentSection);
    const practiceEl = makeElement('h2', 'practice-h2', suggestionEl, 'Practice')
    currentStory!.sentences.forEach((sentence, index ) => {
      const sentenceEl = makeElement('div', 'sentence-div', storyWrapper, sentence.spanish);
      sentenceEl.dataset.id = index.toString();
      if (sentence.done === true) {
        sentenceEl.classList.add('show-check');
      } 
      
      if (sentence.toPractice === true) {
        const suggestionWrapper = makeElement('div', 'suggestion-wrapper', suggestionEl);
        const suggestion = makeElement('span', 'suggestion', suggestionWrapper, sentence.spanish);
        suggestion.dataset.english = sentence.correct;
        const addToPracticeButton = makeElement('button', 'add-to-practice-button', suggestionWrapper, 'Add to practice', handleAddToPracticeClick);
        sentenceEl.classList.add('show-x');
      }
      const popupEl = makeElement('div', 'past-popup-div', sentenceEl);
      popupEl.addEventListener('mouseleave', handlePopupElMouseleave);
      popupEl.classList.add('invisible');
      if (sentence.done === false) {
        sentenceEl.addEventListener('mouseenter', handleSentenceMouseenter);
        sentenceEl.addEventListener('click', handleSentenceMouseenter);
      }
      sentenceEl.addEventListener('mouseleave', handleSentenceMouseleave);
    });

  shuffleTranslations();
  const storyControlsWrapper = makeElement('div', 'next-story-div', contentSection);
    const previousStoryButton = makeElement('button', 'previous-story-button', storyControlsWrapper, '⬅️ \u00A0Previous Story', handlePreviousStoryButtonClick);
    const nextStoryButton = makeElement('button', 'next-story-button', storyControlsWrapper, 'Next Story \u00A0 ➡️', handleNextStoryButtonClick);
    const resetStoryButton = makeElement('button', 'reset-story-button', storyControlsWrapper, 'Reset', handleResetStoryButtonClick);

    addListenerToContentSection(contentSection);
}

const addListenerToContentSection = (contentSection: HTMLDivElement) => {
  contentSection.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.sentence-div')) {
      contentSection.querySelectorAll('.past-popup-div').forEach(popup => {
        popup.classList.add('invisible');
      });
    };
  });
};

const handleSentenceMouseenter = (event: MouseEvent) => {
  const sentenceEl = event.target as HTMLElement;
  if (sentenceEl.matches('.sentence-div')) {
    pastFlags.currentSentence = Number(sentenceEl.dataset.id);
    const popupEl = sentenceEl.querySelector('.past-popup-div') as HTMLDivElement;
    if (!popupEl.classList.contains('invisible')) return;
    popupEl.innerHTML = '';
    popupEl.classList.remove('move-popup-down');
    const currentSentence = pastStories[pastFlags.currentStory]!.sentences[pastFlags.currentSentence];
    currentSentence!.translations.forEach(translation => {
      const choicesEl = makeElement('div', 'choices-div', popupEl, translation);
      choicesEl.addEventListener('click', handleChoiceClick);
    });  
    popupEl.classList.remove('invisible');
    const popupRect = popupEl.getBoundingClientRect();
    if (popupRect.top < 0) {
      popupEl.classList.add('move-popup-down');
    }   
  }
}

const handleSentenceMouseleave = (event: MouseEvent) => {
  const sentenceEl = event.target as HTMLDivElement;
  const rect = sentenceEl.getBoundingClientRect();
  if (event.clientY < rect.top) {
    return; 
  }

  if (sentenceEl.matches('.sentence-div')) {
    const popupEl = sentenceEl.querySelector('.past-popup-div');
    if (!popupEl) return;
    popupEl.classList.add('invisible');
  }
}

const handlePopupElMouseleave = (event: MouseEvent) => {
  const popupEl = event.target as HTMLDivElement;
  const rect = popupEl.getBoundingClientRect();
  if (event.clientY > rect.bottom) return;
  if (popupEl.matches('.past-popup-div')) {
    popupEl.classList.add('invisible');
  }
}

const handleChoiceClick = (event: MouseEvent) => {
  // const contentSection = sel('.content-section');
  const choicesEl = event.target as HTMLDivElement;
  const sentenceEl = choicesEl.closest('.sentence-div') as HTMLDivElement | null;
  const chosenTranslation = choicesEl.innerText;
  const correct = pastStories[pastFlags.currentStory]!.sentences[pastFlags.currentSentence]!.correct;
  const currentSentence = pastStories[pastFlags.currentStory]!.sentences[pastFlags.currentSentence];
  if (chosenTranslation === correct) {
    const popupEl = choicesEl.closest('.past-popup-div');
    popupEl!.classList.add('invisible');
    if (!sentenceEl) return;
    sentenceEl.classList.remove('show-x');
    sentenceEl.classList.add('show-check');
    // showNotification('Correct! 🎉 🥳', contentSection, 70, 85);
    speak(correct);
    correctSound.play();
    currentSentence!.done = true;
    if (currentSentence!.toPractice === true){
      currentSentence!.toPractice = false;
    }

    sentenceEl.removeEventListener('mouseenter', handleSentenceMouseenter);
    savePastStoriesToLocalStorage();
  } else {
    sentenceEl!.classList.add('show-x');
    incorrectSound.play();
    // showNotification('Try again...', contentSection, 70, 85);
    addToPracticeSuggestions();
    currentSentence!.toPractice = true;
    savePastStoriesToLocalStorage();
  }
}

const addToPracticeSuggestions = () => {
  const suggestionEl = sel('.suggestion-div');
  if (suggestionEl.dataset.added) return;
  const suggestionWrapper = makeElement('div', 'suggestion-wrapper', suggestionEl);
  const spanishSentence = pastStories[pastFlags.currentStory]!.sentences[pastFlags.currentSentence]!.spanish;
  const suggestion = makeElement('span', 'suggestion', suggestionWrapper, spanishSentence);
  const addToPracticeButton = makeElement('button', 'add-to-practice-button', suggestionWrapper, 'Add to practice', handleAddToPracticeClick);
  suggestionEl.dataset.added = 'true';
}

const handleAddToPracticeClick = (event: MouseEvent) => {
  const contentSection = sel('.content-section');
  const addButton = event.target as HTMLButtonElement;
  const prevEl = addButton.previousElementSibling as HTMLSpanElement | null;
  if (!prevEl) return;
  const englishSentence = prevEl.dataset.english;
  const spanishSentence = prevEl.innerText;

  if (!englishSentence || !spanishSentence) return;
  const obj: SentenceObj = {sentence: englishSentence, translation: spanishSentence, isArchived: false};
  sentences.push(obj);
  saveToLocalStorage();
  showNotification('Sentence added.', contentSection, 55, 45)
}

const handlePreviousStoryButtonClick = () => {
  const contentSection = sel('.content-section');
  if (pastFlags.currentStory === 0) {
    return;
  }
  contentSection.innerHTML = '';
  pastFlags.currentStory--;
  renderPast();
}

const handleNextStoryButtonClick = () => {
  const contentSection = sel('.content-section');
  if (pastFlags.currentStory === pastStories.length-1){
    return;
  }
  contentSection.innerHTML = '';
  pastFlags.currentStory++;
  renderPast();
}

const handleResetStoryButtonClick = () => {
  const contentSection = sel('.content-section');
  pastStories.forEach(story => {
    story.sentences.forEach(sentence => {
      sentence.done = false;
      sentence.toPractice = false;
    });
  });
  contentSection.innerHTML = '';
  renderPast();
  savePastStoriesToLocalStorage();
}

const shuffleTranslations = () => {
  pastStories[pastFlags.currentStory]!.sentences.forEach(item => {
    item.translations.sort(() => Math.random() - 0.5);
  });
} 

const savePastStoriesToLocalStorage = () => {
  localStorage.setItem('pastStories', JSON.stringify(pastStories));
};

