import type { SuggestTopic } from "../types/types";

export const select = (className: string) => {
  const element = document.querySelector(className) as HTMLElement;
  return element;
}

export const makeElement = (
  elementTag: string,
  className: string,
  appendToEl: HTMLElement | null,
  textInside?: string,
  listenerFunctionName?: () => void
  ) => {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  if (appendToEl) appendToEl.append(element);
  if (textInside) element.innerText = textInside;
  if (listenerFunctionName) element.addEventListener('click', listenerFunctionName);

  return element;
}

export const  makeInputEl =(
  className: string, 
  appendToEl: HTMLElement, 
  placeholder?:string, 
  value?:string
  ) => {
  const element = document.createElement('input');
  element.classList.add(className);
  if (appendToEl) appendToEl.append(element);
  if (placeholder) element.setAttribute('placeholder', placeholder);
  if (value) element.setAttribute('value', value);

  return element;
}

export const  renderTopic = (data: SuggestTopic[]) => {
  const contentSection = select('.content-section');

    const titleEl = makeElement('h2', 'title', contentSection, data[0]!.title);
  const incorrectEl = makeElement('div', 'incorrect-div', contentSection);
    const incorrectTitle = makeElement('h3', 'incorrect-title', incorrectEl, 'Incorrect');
    data[0]!.incorrect.forEach(item =>  {
      const incorrectSentenceEl = makeElement('p', 'incorrect-sentence', incorrectEl, item);
      makeElement('span', 'incorrect-x', incorrectSentenceEl, '❌');

    });

  const correctEl = makeElement('div', 'correct-div', contentSection);
    const correctTitle = makeElement('h3', 'correct-title', correctEl, 'Correct');
    data[0]!.correct.forEach(sentence =>  {
     const correctsentenceEl = makeElement('p', 'correct-sentence', correctEl, sentence);
      makeElement('span', 'correct-check-mark', correctsentenceEl, '☑️');
    });
  
    if (data[0]!.note) {
      const noteEl1 = makeElement('span', 'note-element-1', correctEl, 'Note:');
      const noteEl2 = makeElement('span', 'note-element-2', correctEl, `${data[0]!.note}`);
    }

  const practiceEl = makeElement('div', 'practice-div', contentSection);
    const practiceTitleEl = makeElement('h3', 'practice-title-h3', practiceEl, 'Practice');
    const practiceUl = makeElement('ul', 'practice-ul', practiceEl);
    data[0]!.practice.forEach(practiceSentence => {
      const practiceLi = makeElement('li', 'practice-sentence-li', practiceUl);
      const bulletEl = makeElement('span', 'practice-bullet', practiceLi, '◉');
      makeElement('div', 'practice-sentence-div', practiceLi, practiceSentence.english);
      
      makeElement('button', 'add-to-practice-button', practiceLi, 'Add to practice', () => handleAddToPracticeClick(practiceSentence));
    });
}


const handleAddToPracticeClick = (practiceSentence:object) => {
  console.log(practiceSentence);
}

export const toggleHeaderAndOverlay = () => {
  // const button = event.target as HTMLElement;
  const overlay = select('.overlay');
  const header = select('.header');
  overlay.classList.toggle('visible-overlay');
  header.classList.toggle('visible-header');
}

export const transitionContent = (element: HTMLElement, class1: string, class2: string) => {
  element.classList.remove(class1);
  element.classList.add(class2);
  setTimeout(() => {
    element.classList.remove(class2);
    element.classList.add(class1);
  }, 200);
}

