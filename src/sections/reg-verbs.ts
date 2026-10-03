import { allVerbs, regVerbData, regVerbFlags as importedRegVerbFlags } from "../data/reg-verbs-data";
import { sel, makeElement, speak, showNotification } from "../utils/helpers";

let regVerbFlags = {...importedRegVerbFlags};
const localStorageRegVerbData = localStorage.getItem('regVerbFlags')
if (localStorageRegVerbData) {
  regVerbFlags = JSON.parse(localStorageRegVerbData); 
}

export const renderRegVerbs = () => {
  // flags.currentSection = "Common Errors"
  // toggleLinkStyles();
  const contentSection = sel('.content-section');
  contentSection.innerHTML = '';
  // transitionContent(contentSection, 'scale-up', 'scale-down');
  const mainSection2 = sel('.main-section-2');
  const regVerbsTitleEl = makeElement('h2', 'reg-verbs-title-h2', contentSection, 'Pronunciation of regular verbs (-d, -ed)');
  const allVerbsWrapper = makeElement('div', 'all-verbs-wrapper', contentSection);

  const mainVerbsWrapper = makeElement('div', 'main-verbs-wrapper', allVerbsWrapper);
  const note1El = makeElement('div', 'note-1', mainVerbsWrapper, 'Pronounce the "e":');
    regVerbData[0]?.mainVerbs1?.forEach(verb => {
      const verbEl = makeElement('div', 'verb-div', mainVerbsWrapper, verb);
      underlineLastConsonant(verbEl);
    })
    const otherVerbsWrapper = makeElement('div', 'other-verbs-wrapper', allVerbsWrapper);
    const note2El = makeElement('div', 'note-2', otherVerbsWrapper, 'Don\'t pronounce the "e":');

    regVerbData[0]?.mainVerbs2?.forEach((verb, i) => {
      const verbEl = makeElement('div', 'verb-div', otherVerbsWrapper, verb);
      underlineLastConsonant(verbEl);
    });
      
  const currentVerbWrapper = makeElement('div', 'current-verb-wrapper', contentSection);
    const currentVerbEl = makeElement('span', 'current-verb-span', currentVerbWrapper);
    const instructionsEl = makeElement('div', 'instructions-div', currentVerbWrapper, 'Match this underlined consonant sound to the to one of the verbs on the left. Example: Talk and walk end in a "k", so you would drag the word Talked into Walked. The last sound of laugh is an "f", not a "g" or an "h". To practice with uncommon verbs, hit the Show Uncommon Verbs button.');
    const buttonWrapper = makeElement('div', 'button-wrapper-2', currentVerbWrapper); //Had to add a 2 to this because of a conflict with another element in the app.
      const commonVerbsButton = makeElement('button', 'common-verbs-button', buttonWrapper, 'Show Common Verbs', handleShowCommonVerbsClick);
      const uncommonVerbsButton = makeElement('button', 'uncommon-verbs-button', buttonWrapper, 'Show Uncommon Verbs', handleShowUncommonVerbsClick);
      const resetVerbsButton = makeElement('button', 'reset-verbs-button', buttonWrapper, 'Reset', handleResetVerbsClick);

  initialize();
}


const initialize = () => {
  const contentSection = sel('.content-section');
  const currentVerbEl = sel('.current-verb-span');
  const allVerbsWrapper = sel('.all-verbs-wrapper');

  currentVerbEl.setAttribute('draggable', 'true');
  currentVerbEl.setAttribute('id', 'current-verb');
  switchVerbGroup(currentVerbEl);
  // -------------------------
  // Desktop + mobile
  // -------------------------
  if (!currentVerbEl.dataset.listenersAttached) {
    // -------------------------
    // Desktop drag start
    // -------------------------
    currentVerbEl.addEventListener('dragstart', (event: DragEvent) => {
      const target = event.target as HTMLSpanElement;

      event.dataTransfer!.setData('text/plain', target.id);
      target.style.opacity = '0.5';
    });
    // -------------------------
    // Desktop drag end
    // -------------------------
    currentVerbEl.addEventListener('dragend', (event: DragEvent) => {
      const target = event.target as HTMLSpanElement;

      target.style.opacity = '1';
    });
    // -------------------------
    // Mobile pointer events
    // -------------------------
    let mobileDragging = false;
    let highlightedVerb: HTMLDivElement | null = null;
    let dragGhost: HTMLSpanElement | null = null;
    currentVerbEl.style.touchAction = 'none';
    // -------------------------
    // Grab
    // -------------------------
    currentVerbEl.addEventListener('pointerdown', (event: PointerEvent) => {

      if (event.pointerType !== 'touch') {
        return;
      }
      mobileDragging = true;
      currentVerbEl.classList.add('mobile-dragging');

      // Create a visual copy that follows the finger
      dragGhost = currentVerbEl.cloneNode(true) as HTMLSpanElement;

      dragGhost.classList.remove('mobile-dragging');
      dragGhost.classList.add('mobile-drag-ghost');

      document.body.append(dragGhost);

      dragGhost.style.left = `${event.clientX}px`;
      dragGhost.style.top = `${event.clientY}px`;

      currentVerbEl.setPointerCapture(event.pointerId);
    });
    // -------------------------
    // Drag
    // -------------------------
    currentVerbEl.addEventListener('pointermove', (event: PointerEvent) => {

      if (!mobileDragging || event.pointerType !== 'touch') {
        return;
      }
      // Move the visual copy with the finger
      if (dragGhost) {
        dragGhost.style.left = `${event.clientX}px`;
        dragGhost.style.top = `${event.clientY}px`;
      }
      const element = document.elementFromPoint(event.clientX, event.clientY);
      const verbEl = element?.closest('.verb-div') as HTMLDivElement | null;

      // Remove highlight from previous target
      if (highlightedVerb && highlightedVerb !== verbEl) {
        highlightedVerb.style.backgroundColor = '#004489';
        highlightedVerb = null;
      }

      // Highlight current target
      if (verbEl && allVerbsWrapper.contains(verbEl)) {
        verbEl.style.backgroundColor = '#007efcff';
        highlightedVerb = verbEl;
      }
    });

    // -------------------------
    // Drop
    // -------------------------
    currentVerbEl.addEventListener('pointerup', (event: PointerEvent) => {

      if (!mobileDragging || event.pointerType !== 'touch') {
        return;
      }

      mobileDragging = false;

      // Remove visual copy
      if (dragGhost) {
        dragGhost.remove();
        dragGhost = null;
      }

      currentVerbEl.classList.remove('mobile-dragging');
      const element = document.elementFromPoint(event.clientX, event.clientY);
      const verbEl = element?.closest('.verb-div') as HTMLDivElement | null;

      // Reset highlighted target
      if (highlightedVerb) {
        highlightedVerb.style.backgroundColor = '#004489';
        highlightedVerb = null;
      }

      // Check drop
      if (verbEl && allVerbsWrapper.contains(verbEl)) {
        // Drop animation
        verbEl.style.transform = 'scale(1.15)';
        verbEl.style.boxShadow = '0 0 15px white';
        setTimeout(() => {
          verbEl.style.transform = 'scale(1)';
          verbEl.style.boxShadow = '';
        }, 300);
        checkVerb(verbEl, currentVerbEl, contentSection);
      }
      if (currentVerbEl.hasPointerCapture(event.pointerId)) {
        currentVerbEl.releasePointerCapture(event.pointerId);
      }
    });
    // -------------------------
    // Cancel
    // -------------------------
    currentVerbEl.addEventListener('pointercancel', (event: PointerEvent) => {
      mobileDragging = false;

      if (dragGhost) {
        dragGhost.remove();
        dragGhost = null;
      }

      currentVerbEl.classList.remove('mobile-dragging');
      if (highlightedVerb) {
        highlightedVerb.style.backgroundColor = '#004489';
        highlightedVerb = null;
      }

      if (currentVerbEl.hasPointerCapture(event.pointerId)) {
        currentVerbEl.releasePointerCapture(event.pointerId);
      }
    });

    currentVerbEl.dataset.listenersAttached = 'true';
  }

  // -------------------------
  // Desktop drag and drop
  // -------------------------
  if (!allVerbsWrapper.dataset.listenersAttached) {
    // -------------------------
    // Drag over
    // -------------------------
    allVerbsWrapper.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
      const verbEl = event.target as HTMLDivElement;

      if (verbEl.classList.contains('verb-div')) {
        verbEl.style.backgroundColor = '#007efcff';
      }
    });
    // -------------------------
    // Drag leave
    // -------------------------
    allVerbsWrapper.addEventListener('dragleave', (event: DragEvent) => {
      const verbEl = event.target as HTMLDivElement;

      if (verbEl.classList.contains('verb-div')) {
        verbEl.style.backgroundColor = '#004489';
      }
    });
    // -------------------------
    // Drop
    // -------------------------
    allVerbsWrapper.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault();
      const verbEl = event.target as HTMLDivElement;

      if (verbEl.matches('.verb-div')) {
        verbEl.style.backgroundColor = '#004489';
        // Drop animation
        verbEl.style.transform = 'scale(1.15)';
        verbEl.style.boxShadow = '0 0 15px white';

        setTimeout(() => {
          verbEl.style.transform = 'scale(1)';
          verbEl.style.boxShadow = '';
        }, 300);

        const data = event.dataTransfer!.getData('text/plain');
        const draggedElement = document.getElementById(data) as HTMLSpanElement;
        checkVerb(verbEl, draggedElement, contentSection);
      }
    });

    allVerbsWrapper.dataset.listenersAttached = 'true';
  }
  // -------------------------
  // Shared checking function
  // -------------------------
  function checkVerb(verbEl: HTMLDivElement, draggedElement: HTMLElement, contentSection: HTMLElement) {
    const draggedElementText = draggedElement.innerText.replace(/\s+/g, '');
    const isInArray = (element: string) =>
      element === draggedElementText;
    const found = allVerbs[verbEl.innerText]!.some(isInArray);
    console.log(found);
    if (found) {
      showNotification("That's right!", contentSection, 50, 63);

      if (regVerbFlags.currentVerbGroup === 'common') {
        regVerbFlags.currentVerbCommon++;
      } else {
        regVerbFlags.currentVerbUncommon++;
      }
      saveRegVerFlagsToLocalStorage();
      speak(verbEl.textContent);
      speak(draggedElement.textContent);

    } else {

      showNotification('Try again.', contentSection, 50, 63);
    }
    switchVerbGroup(currentVerbEl);
  }
};

const switchVerbGroup = (currentVerbEl: HTMLSpanElement) => {
  if (regVerbFlags.currentVerbGroup === 'uncommon') {
    const currentVerb = regVerbData[1]!.uncommonVerbs![regVerbFlags.currentVerbUncommon]!;
    currentVerbEl.textContent = currentVerb;
      underlineLastConsonant(currentVerbEl);
  } else {
    const currentVerb = regVerbData[1]!.commonVerbs![regVerbFlags.currentVerbCommon];
    // "if currentVerb is undefined, use an empty string instead."
    currentVerbEl.textContent = currentVerb ?? '';
      underlineLastConsonant(currentVerbEl);
    // console.log(currentVerb);
  }
}

const handleShowCommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'common';
  initialize();
}

const handleShowUncommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'uncommon';
  initialize();
}

const handleResetVerbsClick = () => {
  regVerbFlags.currentVerbCommon = 0;
  regVerbFlags.currentVerbUncommon = 0;
  saveRegVerFlagsToLocalStorage();
  initialize();
}

console.table(
    speechSynthesis.getVoices().map(v => ({
        name: v.name,
        lang: v.lang,
        default: v.default
    }))
);

const saveRegVerFlagsToLocalStorage = () => {
  localStorage.setItem('regVerbFlags', JSON.stringify(regVerbFlags));

}

const underlineLastConsonant = (verbEl: HTMLSpanElement) => {
  const verbELText = verbEl.textContent.trim();
  const thirdTolastChar = verbELText[verbELText.length -3];
  const fourthTolastChar = verbELText[verbELText.length -4];
  const beginning = verbELText.slice(0, verbELText.length -4);
  const beginningOfNormalVerb = verbELText.slice(0, verbELText.length -3);

  if ((thirdTolastChar === 'h' && fourthTolastChar === 's') || (thirdTolastChar === 'h' && fourthTolastChar === 'g') || (thirdTolastChar === 'h' && fourthTolastChar === 'c')) {
    verbEl.innerHTML = `
      ${beginning}<span class="underlined-consonants-span">${fourthTolastChar + thirdTolastChar}</span>ed
    `;
    return;
  }
  if (thirdTolastChar === fourthTolastChar) {
    verbEl.innerHTML = `
      ${beginning}<span class="underlined-consonants-span">${fourthTolastChar! + thirdTolastChar}</span>ed
    `;
  } else  if (thirdTolastChar !== fourthTolastChar) {
    verbEl.innerHTML = `
      ${beginningOfNormalVerb}<span class="underlined-consonants-span">${thirdTolastChar}</span>ed
    `;
  }
}