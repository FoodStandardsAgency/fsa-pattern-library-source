import './button.scss';
import './button.html.twig';
export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button--event');
    if (!buttons.length) return;
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();

        if (button.classList.contains('button-cancel')) {
          button.textContent = 'I was cancelled';
        } else {
          button.textContent = 'I was clicked';
        }
      });
    });
  });
}
