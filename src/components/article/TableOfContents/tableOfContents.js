import './tableOfContents.html.twig';
import './tableOfContents.scss';
import { getMode } from '../../general/Navigation/navigation-accessibility.js';

export default function () {
  let DOMContentFirstLoad = true;

  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }
    const els = document.querySelectorAll('.table-of-contents');
    if (!els) {
      return;
    }

    let mode = getMode();

    els.forEach((el) => {
      const button = el.querySelector('.table-of-contents__title button');
      const list = el.querySelector('.table-of-contents__list');
      const arrow = button.querySelector('.table-of-contents__arrow');
      button.addEventListener('click', () => {
        if (mode === 'mobile') {
          list.classList.toggle('table-of-contents__list--open');
          arrow.classList.toggle('table-of-contents__arrow--active');
          if (button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false');
          } else {
            button.setAttribute('aria-expanded', 'true');
          }
        }
      });

      // Handle the visibility of the "skip menu" link
      const skipLink = el.querySelector('.table-of-contents__skip');
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        // If there is another group, move to that.
        const nextGroup = el.parentElement.nextElementSibling;
        if (nextGroup) {
          nextGroup.querySelector('a').focus();
        }
        // Otherwise scroll and focus the top of the content
        else {
          const tocSkip = document.querySelector('#toc-skip-to');
          tocSkip.scrollIntoView();
          tocSkip.focus();
        }
      });
    });

    window.addEventListener('resize', () => {
      mode = getMode();
    });
  });
}
