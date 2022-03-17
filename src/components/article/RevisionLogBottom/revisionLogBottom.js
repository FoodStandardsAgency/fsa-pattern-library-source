import './revisionLogBottom.html.twig';
import './revisionLogBottom.scss';

export default function () {

  window.addEventListener('DOMContentLoaded', function () {
    const logs = document.querySelectorAll(
      '.revision-log__link-list'
    );
    if (!logs.length) {
      return;
    }
    const showButton = document.querySelector('.revision-log__toggle-button-show');
    const hideButton = document.querySelector('.revision-log__toggle-button-hide');
    const logsContainer = document.querySelector('.revision-log');
    // Add eventlisteners for buttons.
    function toggleClass() {
      logsContainer.classList.toggle ('revision-log--open');
      logsContainer.classList.toggle ('revision-log--closed');
    }
    if (showButton) {
      showButton.addEventListener('click', toggleClass);
      hideButton.addEventListener('click', toggleClass);
    }
    },
    { once: true }
  );
}
