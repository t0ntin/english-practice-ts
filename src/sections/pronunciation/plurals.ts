import { pluralsData } from "../../data/plurals-data.js";
import { makeElement, sel, speak, transitionContent } from "../../utils/helpers.js";


export const renderPlurals = () => {
  // flags.currentSection  "Common Errors"
  // toggleLinkStyles();
  const contentSection = sel('.content-section');
  contentSection.innerHTML = '';
  // transitionContent(contentSection, 'scale-up', 'scale-down');

  const titleEl = makeElement('h2', 'plurals-title', contentSection, 'Plurals');
  const topTextEl = makeElement('div', 'top-text-div', contentSection)
  topTextEl.innerHTML = `<h3>The problem:</h3><p>
  Given a word like <strong>garages</strong>.", students usually say "<strong>garage</strong>". Here's how you can fix that:
</p>
<h3> Practice</h3`;
  const listOl = makeElement('ol', 'steps-ol', contentSection);
  const listLi = makeElement('li', 'list-li', listOl);
    const listStepEl = makeElement('p', 'list-step', listLi, pluralsData[0]!.step);
    pluralsData[0]!.practiceContent.forEach(pair => {
      const text = Array.isArray(pair) ? pair.join(', ') : pair;
      makeElement('button', 'pair-button', listLi, text, handlePairButtonClick);
      const pairButton = makeElement('button', 'pair-button', listLi, text, handlePairButtonClick)
    })
  pluralsData.slice(1).forEach(element => {
    const listLi = makeElement('li', 'list-li', listOl);
    const listStepEl = makeElement('p', 'list-step', listLi, element.step);
    const practiceContentWrapper = makeElement('div', 'practice-content-div', listLi);
    const practiceContentEl = makeElement('p', 'practice-content-p', practiceContentWrapper, element.practiceContent.join(', '));
    const speakButton = makeElement('button', 'speak-button', practiceContentWrapper, '▶️ \u00A0 Play', handleSpeakButtonClick);
  });
};

const handlePairButtonClick = (event: MouseEvent) => {
  const pairButton = event.target as HTMLButtonElement;
  speak(pairButton.textContent);
};

const handleSpeakButtonClick = (event: MouseEvent) => {
  const speakButton = event.target as HTMLButtonElement;
  const practiceContentWrapper = speakButton.closest('div') as HTMLDivElement;
  const practiceContentEl = practiceContentWrapper.querySelector('.practice-content-p') as HTMLParagraphElement;
  speak(practiceContentEl.textContent);
};