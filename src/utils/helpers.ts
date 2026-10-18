import { headerFlags } from "../data/header-data";
import { showOverlay } from "../sections/header";
import { sentences } from "../sections/practice";
import type { CommonErrorsObj, PracticeSentence } from "../types/types";


export const sel = <T extends HTMLElement>(className: string) => {
  return document.querySelector(className) as T;
}

export const selAll = <T extends HTMLElement = HTMLElement>(selector: string): NodeListOf<T> => {
  return document.querySelectorAll(selector) as NodeListOf<T>;
};

export const makeElement = <K extends keyof HTMLElementTagNameMap>(
  elementTag: K,
  className: string,
  appendToEl: HTMLElement | null,
  textInside?: string,
  listenerFunctionName?: (event: MouseEvent) => void
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(elementTag);

  element.classList.add(className);
  if (appendToEl) appendToEl.append(element);
  if (textInside) element.innerText = textInside;
  if (listenerFunctionName) {
    element.addEventListener('click', listenerFunctionName as EventListener);
  }

  return element;
};

export const  makeInputEl = (
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

export const makeTextArea = (
  className:string,
  appendToEl: HTMLElement,
  placeholder?: string,
  value?: string
  ) => {
  const element = document.createElement('textarea');
  element.classList.add(className);
  if (appendToEl) appendToEl.append(element);
  if (placeholder) element.setAttribute('placeholder', placeholder);
  if (value) element.setAttribute('value', value);
  return element;
}

export const  renderTopic = (data: CommonErrorsObj[]) => {
  const contentSection = sel('.content-section');
  contentSection.innerHTML = '';
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
    data[0]!.practice.forEach(practiceSentence => {
      const practiceItemWrapper = makeElement('div', 'practice-item-wrapper', practiceEl);
      const bulletEl = makeElement('span', 'practice-bullet', practiceItemWrapper, '◉');
      makeElement('div', 'practice-sentence-div', practiceItemWrapper, practiceSentence.english);
      
      makeElement('button', 'add-to-practice-button', practiceItemWrapper, 'Add to practice', () => handleAddToPracticeClick(practiceSentence));
    });

}

const handleAddToPracticeClick = (practiceSentence:PracticeSentence) => {
  const contentSection = sel('.content-section');
  const sentenceObj = {
    sentence: practiceSentence.english,
    translation: practiceSentence.spanish,
    isArchived: false,
  }
  sentences.push(sentenceObj);
  saveToLocalStorage();
  showNotification('Sentence added.', contentSection, 45, 45);
}

export const toggleHeaderAndOverlay = () => {
  const overlay = sel('.overlay');
  const header = sel('.header');
  header.classList.remove('visible-header');
  overlay.classList.remove('visible-overlay');
}

export const transitionContent = (element: HTMLElement, class1: string, class2: string) => {
  element.classList.remove(class1);
  element.classList.add(class2);
  setTimeout(() => {
    element.classList.remove(class2);
    element.classList.add(class1);
  }, 200);
}

export const showNotification = (message: string, containingElement:HTMLElement, top: number, left: number) => {
  let popupEl = sel('.popup-div');
  if (!popupEl) {
    popupEl = makeElement('div', 'popup-div', containingElement);
  }
  if (top) {
    popupEl.style.top = `${top}%`;
  }

  if (left) {
    popupEl.style.left = `${left}%`;
  }
  popupEl.innerText = message;
  popupEl.classList.add('active-popup'); 
  setTimeout(() => {
    popupEl.classList.remove('active-popup'); 
  }, 2000);
}

export const shuffleArray = (array: object[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i]!, array[j]!] = [array[j]!, array[i]!];
  }
}

export const saveToLocalStorage = () => {
  localStorage.setItem('sentences', JSON.stringify(sentences));
}

let selectedVoice: SpeechSynthesisVoice | null | undefined = null;

export function loadBestVoice() {
    const voices = speechSynthesis.getVoices();
  // console.log('test');
    const preferred = [
        "Microsoft Jenny",
        "Microsoft Aria",
        "Microsoft Guy",
        "Google UK English Female",
        "Google US English",
        "Google UK English Male",
        "Samantha",
        "Karen",
        "Daniel"
    ];

    // Try preferred voices first
    for (const name of preferred) {
        const voice = voices.find(v => v.name.includes(name));
        if (voice) {
            selectedVoice = voice;
            console.log(typeof selectedVoice);
            console.log('est');
            return;
        }
    }

    // Any English female voice
    selectedVoice = voices.find(v =>
        v.lang.startsWith("en") &&
        /female|woman|samantha|karen|jenny|aria/i.test(v.name)
    );
    if (selectedVoice) return;
    
    // Any English voice
    selectedVoice = voices.find(v => v.lang.startsWith("en"));
        if (selectedVoice) return;

    // Fallback
    selectedVoice = voices[0];
}

// Chrome loads voices asynchronously
speechSynthesis.onvoiceschanged = loadBestVoice;

export function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice!;
    utterance.rate = 0.95;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
}