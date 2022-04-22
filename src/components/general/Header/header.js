import './header.html.twig';
import './header.scss';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    const menuButton = document.querySelector('.header__menu');
    if (!menuButton) return;

    const body = document.body;

    menuButton.addEventListener('click', toggleButton);
    function toggleButton() {
      const expanded = menuButton.getAttribute('aria-expanded');
      if (expanded === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        body.classList.remove('lock-scroll');
      } else {
        menuButton.setAttribute('aria-expanded', 'true');
        body.classList.add('lock-scroll');
      }

      const header = menuButton.closest('.header');
      header.classList.toggle('header--expanded');
    }
  }

  return domContentLoadedWrapper(callback);
}
