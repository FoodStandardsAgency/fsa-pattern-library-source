import './header.html.twig';
import './header.scss';
import 'element-closest-polyfill';

export default function () {
  let DOMContentFirstLoad = true;

  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }

    const menuButton = document.querySelector('.header__menu');
    if (!menuButton) return;

    menuButton.addEventListener('click', toggleButton);
    function toggleButton() {
      const expanded = menuButton.getAttribute('aria-expanded');
      if (expanded === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
      } else {
        menuButton.setAttribute('aria-expanded', 'true');
      }

      const header = menuButton.closest('.header');
      header.classList.toggle('header--expanded');
    }
  });
}
