import './collapsibleCheckbox.html.twig';
import './collapsibleCheckbox.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion__button');
    buttons.forEach((button) => {
      function toggleAccordion(e) {
        const title = e.target.dataset.accordion;
        const fieldsClass = '.accordion__fields--' + title;
        const fields = document.querySelector(fieldsClass);
        fields.classList.toggle('.accordion__fields--active');
        console.log('I run');
      }

      button.addEventListener('click', toggleAccordion);
    });
  });
}
