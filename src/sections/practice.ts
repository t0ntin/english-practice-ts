import { makeElement, makeInputEl, makeTextArea, saveToLocalStorage, sel, shuffleArray, speak } from "../utils/helpers";
// import { sentences } from "./header";
import type { SentenceObj } from "../types/types";
let activeView = true;

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

export const renderPracticeSection = () => {
    const contentSection = sel('.content-section') as HTMLElement;
    contentSection.innerHTML = '';
  const containerForInputEls = makeElement('div', 'container-for-top-controls', contentSection);
  containerForInputEls.innerHTML = '';
  const sentencesContainerOne = makeElement('div', 'sentences-container-one', contentSection);

    const singleEnglishSentenceEl =  makeInputEl( 'single-english-sentence-input-element', containerForInputEls, 'Enter an English sentence...');

    const arrow =  makeElement('span', 'arrow', containerForInputEls, '➡');

    const singleSpanishTranslationEl =  makeInputEl( 'single-spanish-translation-input-element', containerForInputEls, 'Enter the Spanish translation...');

    const addSentenceButton =  makeElement('button', 'add-sentence-button', containerForInputEls, 'Add', handleAddClick);

    const showArchiveButton =  makeElement('button', 'show-archive-button', containerForInputEls, 'Show Archive', handleShowArchive);

    const showActiveButton =  makeElement('button', 'show-active-button', containerForInputEls, 'Show Active', handleShowActive);
      showActiveButton.classList.add('active');

    const shuffleSentencesButton =  makeElement('button', 'shuffle-sentences-button', containerForInputEls, 'Shuffle', handleShuffleClick);
}

const handleAddClick = () => {
  const singleEnglishSentenceEl = sel<HTMLInputElement>('.single-english-sentence-input-element');

  const singleSpanishTranslationEl = sel<HTMLInputElement>('.single-spanish-translation-input-element');

  if (singleEnglishSentenceEl.value === '' || singleSpanishTranslationEl.value === '') {
    return
  }

  const newSentenceObj = {sentence: singleEnglishSentenceEl.value, translation: singleSpanishTranslationEl.value, isArchived: false};
  
  sentences.push(newSentenceObj);
  saveToLocalStorage();
  renderSentences(newSentenceObj); 
  singleEnglishSentenceEl.value = '';
  singleSpanishTranslationEl.value = '';
  // console.log(sentences);
  styleNewlyAddedSentence();

}

const changeView = () => {
  const showArchiveButton = sel('.show-archive-button');
  const showActiveButton = sel('.show-active-button');
  const shuffleSentencesButton = sel<HTMLButtonElement>('.shuffle-sentences-button');
  console.log(shuffleSentencesButton instanceof HTMLButtonElement);
  if (!activeView) {
    showArchiveButton.classList.add('active');
    showActiveButton.classList.remove('active');
    shuffleSentencesButton.disabled = true;
    shuffleSentencesButton.classList.add('disabled');

  } else {
  showActiveButton.classList.add('active');
  showArchiveButton.classList.remove('active');
  shuffleSentencesButton.disabled = false;
  shuffleSentencesButton.classList.remove('disabled');
  }
}

const handleShowArchive = () => {
  const sentencesContainerOne = sel('.sentences-container-one');
  const shuffleSentencesButton = sel('.shuffle-sentences-button');
  sentencesContainerOne.innerHTML = '';
  sentences.forEach(sentence => {
    if (sentence.isArchived) {
      renderSentences(sentence);
    }
  })
  activeView = false;
  changeView();
};

const handleShowActive = () => {
  const sentencesContainerOne = sel('.sentences-container-one');
  const shuffleSentencesButton = sel('.shuffle-sentences-button');
  sentencesContainerOne.innerHTML = '';
  sentences.forEach(sentence => {
    if (!sentence.isArchived) {
      renderSentences(sentence);
    };
  });

  activeView = true;
  changeView();
}

const handleShuffleClick = () => {
  shuffleArray(sentences)
  saveToLocalStorage();
  const sentencesContainerOne = sel('.sentences-container-one');
  sentencesContainerOne.innerHTML = '';
  sentences.forEach(sentence => {
    if (!sentence.isArchived) {
      renderSentences(sentence);
    }
  })
};

const transitionContainer = (sentencesContainerOne: HTMLDivElement) =>{
  sentencesContainerOne.classList.add('fade-out');
  sentencesContainerOne.classList.remove('fade-in');
  setTimeout(() => {
    sentencesContainerOne.classList.remove('fade-out');
    sentencesContainerOne.classList.add('fade-in');
  }, 200);
}

export const renderSentences = (sentence: SentenceObj) => {
  const sentencesContainerOne = sel<HTMLDivElement>('.sentences-container-one');
    transitionContainer(sentencesContainerOne);
  const containerOne =  makeElement('div', 'container-one', sentencesContainerOne);
    const topRowContainer =  makeElement('div', 'top-row-container', containerOne);

      const englishSentenceEl = makeTextArea('single-english-sentence-input-element-2', topRowContainer);
        englishSentenceEl.id = 'autoGrow';

        englishSentenceEl.addEventListener('input', () => {
           const text = englishSentenceEl.value;
          sentence.sentence = text;
          saveToLocalStorage();
        });

      const arrow =  makeElement('span', 'arrow', topRowContainer, '➡');

      const spanishSentenceEl = makeTextArea( 'single-spanish-sentence-input-element-2', topRowContainer);  
      
      spanishSentenceEl.value = sentence.translation;
        spanishSentenceEl.addEventListener('input', (event) => {
          const text = spanishSentenceEl.value;
          sentence.translation = text;
          saveToLocalStorage();
        })

    const bottomRowContainer = makeElement('div', 'bottom-row-container', containerOne);
      const showHideOne = makeElement('button', 'show-hide-one-button', bottomRowContainer, 'Show / Hide');

      let translationIsVisible = false;

      showHideOne.addEventListener('click', () => {
        translationIsVisible = !translationIsVisible;
        if (translationIsVisible) {
          englishSentenceEl.value = sentence.sentence;
        } else {
          englishSentenceEl.value = "";
        }
      });
      
      if (sentence.isArchived === false) {
        const archiveButton = makeElement('button', 'archive-button', bottomRowContainer, 'Archive');
        
        archiveButton.addEventListener('click', () => {
          sentence.isArchived = true;
          saveToLocalStorage();
          sentencesContainerOne.innerHTML = '';
          sentences.forEach(sentence => {
            if (sentence.isArchived === false) {
              renderSentences(sentence);
            }
          })
        });
      }
      

      if (sentence.isArchived === false) {
        const snoozeButton = makeElement('button', 'snooze-button-5min', bottomRowContainer, '😴 - 5 min');
          snoozeButton.addEventListener('click', () =>{
            containerOne.classList.add('invisible');
            setTimeout(() => {
            containerOne.classList.remove('invisible');
            }, 300000);
          })
      }

      const speakButton = makeElement('button', 'speak-button', bottomRowContainer, '📢');
        speakButton.addEventListener('click', () => {
          console.log(sentence.sentence);
          speak(sentence.sentence);
        });
        
        const deleteButton = makeElement('button', 'delete-button', bottomRowContainer, '🗑️');
        deleteButton.addEventListener('click', () => {
          sentencesContainerOne.innerHTML = '';
          const index = sentences.indexOf(sentence);
          sentences.splice(index, 1);
          saveToLocalStorage();
          sentences.forEach(sentence => {
            if (activeView && !sentence.isArchived) {
              renderSentences(sentence);
            } else if (!activeView && sentence.isArchived){
              renderSentences(sentence);
            }
          });
        });
}
      
const styleNewlyAddedSentence = () => {
  const containerEls = document.querySelectorAll('.container-one');
  const lastContainer = [...containerEls][containerEls.length -1];
  lastContainer!.classList.add('new-sentence');
}