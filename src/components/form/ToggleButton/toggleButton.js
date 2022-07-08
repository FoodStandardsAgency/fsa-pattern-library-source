import './toggleButton.scss';
import './toggleButton.html.twig';

export default function () {
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
