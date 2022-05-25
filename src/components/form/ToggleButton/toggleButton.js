import './toggleButton.scss';
import './toggleButton.html.twig';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    if (!toggleButtons) {
      return;
    }

    toggleButtons.forEach((toggleButton) => {
      const button = toggleButton.querySelector('button');
      button.addEventListener('click', () => {
        const state = button.getAttribute('aria-checked');
        const isState = state === 'true';
        button.setAttribute('aria-checked', !isState);
      });
    });
  }

  return domContentLoadedWrapper(callback);
}
