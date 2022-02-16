import './tableOfContents.html.twig';
import './tableOfContents.scss';

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

    // Work out whether the screen size is mobile/desktop
    function getMode() {
      return window.innerWidth < 1024 ? 'mobile' : 'desktop';
    }

    let mode = getMode();

    els.forEach(el => {
      const button = el.querySelector('.table-of-contents__title button')
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
    });

    window.addEventListener('resize', () => {
      mode = getMode();
    });
  });
}