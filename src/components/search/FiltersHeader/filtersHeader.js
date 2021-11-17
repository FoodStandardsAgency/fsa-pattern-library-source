import './filtersHeader.html.twig';
import './react/filtersHeader.html.twig';
import './filtersHeader.scss';

export default function () {
  let DOMContentFirstLoad = true;

  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }

    const openButton = document.querySelector('.search-filters__button');
    const returnButton = document.querySelector('.search-filters__return');
    const contentDiv = document.querySelector('.search-filters__content');

    if (openButton && returnButton && contentDiv) {
      //Add eventlisteners for buttons
      function toggleClass() {
        openButton.classList.toggle('search-filters__button--open');
        contentDiv.classList.toggle('search-filters__content--open');
        document.body.classList.toggle('overflow-hidden');
      }

      openButton.addEventListener('click', toggleClass);
      returnButton.addEventListener('click', toggleClass);

      //Trap user focus within the modal
      //Find the last visible focusable element in the modal
      function getLastElement() {
        let lastElement;
        const focusableElements = contentDiv.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        for (let i = focusableElements.length - 1; i >= 0; i--) {
          //offsetParent returns null when an element or one of its parents has display: none;
          if (focusableElements[i].offsetParent) {
            lastElement = focusableElements[i];
            break;
          }
        }
        return lastElement;
      }
      function focusLastElement(e) {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        //If user pressed shift + tab on the return button, move focus to the end of the modal
        if (keyCode === 9 || e.key === 'Tab') {
          if (e.shiftKey) {
            e.preventDefault();
            const lastElement = getLastElement();
            lastElement.focus();
          }
        }
      }

      function focusFirstItem(e) {
        //Check if we are in the modal on mobile
        const position = window.getComputedStyle(contentDiv).getPropertyValue('position');
        if (position !== 'fixed') return;

        //Check if the element that triggered the event is the last focusable element
        const lastElement = getLastElement();
        if (lastElement !== e.target) return;

        const keyCode = e.keyCode ? e.keyCode : e.which;
        //If user pressed tab on the last focusable element in the modal, move focus to the start of the modal
        if (keyCode === 9 || e.key === 'Tab') {
          if (!e.shiftKey) {
            e.preventDefault();
            returnButton.focus();
          }
        }
      }

      returnButton.addEventListener('keydown', focusLastElement);
      //Use event delegation, because the last focusable element will change as filters change.
      contentDiv.addEventListener('keydown', focusFirstItem);
    }
  });
}
