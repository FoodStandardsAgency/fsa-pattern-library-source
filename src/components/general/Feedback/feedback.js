import './feedback.html.twig';
import './feedback.scss';
import {domContentLoadedWrapper} from '../../../domContentLoadedWrapper';

export default function () {
  function callback() {
    const feedback = document.querySelector('.feedback');
    if (!feedback) return;

    function showThanks(e) {
      e.preventDefault();
      feedback.classList.add('feedback--thank');
      feedback.classList.remove('feedback--form');
    }

    function showForm(e) {
      e.preventDefault();
      feedback.classList.add('feedback--form');
      feedback.classList.remove('feedback--thank');
    }

    function showQuestions(e) {
      e.preventDefault();
      feedback.classList.remove('feedback--form');
      feedback.classList.remove('feedback--thank');
    }

    function addButtonListener(buttonSelector, listener) {
      const button = feedback.querySelector(buttonSelector);
      if (button) {
        button.addEventListener('click', listener);
      }
    }

    addButtonListener('.feedback__yes', showThanks);
    addButtonListener('.feedback__no', showForm);
    addButtonListener('.feedback__report-button', showForm);
    addButtonListener('.feedback__close', showQuestions);
    addButtonListener('.feedback__submit', showThanks);
  }

  return domContentLoadedWrapper(callback);
}
