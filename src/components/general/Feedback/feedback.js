import './feedback.html.twig';
import './feedback.scss';

export default function () {
  let DOMContentFirstLoad = true;
  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }

    const feedback = document.querySelector('.feedback');
    if (!feedback) return;

    const questions = feedback.querySelector('.feedback__questions');
    const thank = feedback.querySelector('.feedback__thank');
    const form = feedback.querySelector('.feedback__form-wrapper');

    if (questions && thank && form) {
      function showThanks(e) {
        e.preventDefault();
        questions.classList.add('feedback__questions--hide');
        thank.classList.remove('feedback__thank--hide');
        form.classList.add('feedback__form-wrapper--hide');
      }

      function showForm(e) {
        e.preventDefault();
        questions.classList.add('feedback__questions--hide');
        thank.classList.add('feedback__thank--hide');
        form.classList.remove('feedback__form-wrapper--hide');
      }

      function showQuestions(e) {
        e.preventDefault();
        questions.classList.remove('feedback__questions--hide');
        thank.classList.add('feedback__thank--hide');
        form.classList.add('feedback__form-wrapper--hide');
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
  });
}
