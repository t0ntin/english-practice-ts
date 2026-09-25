import { makeElement, makeInputEl } from "../utils/helpers";

export const renderPracticeSection = () => {
    const contentSection = document.querySelector('.content-section') as HTMLElement;
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
  
}

const handleShowArchive = () => {

}

const handleShowActive = () => {

}

const handleShuffleClick = () => {

}