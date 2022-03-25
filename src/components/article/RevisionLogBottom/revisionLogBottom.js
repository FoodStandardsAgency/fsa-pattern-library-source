import './revisionLogBottom.html.twig';
import './revisionLogBottom.scss';

export default function () {
  window.addEventListener(
    'DOMContentLoaded',
    function () {
      const logs = document.querySelectorAll('.revision-log__link-list');
      if (!logs.length) {
        return;
      }
      
      const gotoButton = document.querySelector('.article-hero__toolbar__revision-log');
      const showButton = document.querySelector('.revision-log__toggle-button-show');
      const hideButton = document.querySelector('.revision-log__toggle-button-hide');
      const logsContainer = document.querySelector('.revision-log');
      const logsList = document.querySelector('.revision-log__link-list');
      function closeRevisionLog() {
        showButton.setAttribute('aria-hidden', 'true');
        hideButton.setAttribute('aria-hidden', 'false');
        logsList.setAttribute('aria-hidden', 'false');
      }
      function openRevisionLog() {
        showButton.setAttribute('aria-hidden', 'false');
        hideButton.setAttribute('aria-hidden', 'true');
        logsList.setAttribute('aria-hidden', 'true');
      }
      function toggleClass() {
        logsContainer.classList.toggle('revision-log--open');
        logsContainer.classList.toggle('revision-log--closed');
        if (logsContainer.classList.contains('revision-log--open')) {
          closeRevisionLog();
        } else {
          openRevisionLog();
        }
      }
      function goToRevisionLog () 
      {
        logsContainer.classList.add('revision-log--open');
        logsContainer.classList.remove('revision-log--closed');
        openRevisionLog();
      }
      if (showButton) {
        showButton.addEventListener('click', toggleClass);
        hideButton.addEventListener('click', toggleClass);
      }
      if (gotoButton) {
        gotoButton.addEventListener('click', goToRevisionLog);
      }
    },
    { once: true }
  );
}
