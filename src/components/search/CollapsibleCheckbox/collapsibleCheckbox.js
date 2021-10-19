import './collapsibleCheckbox.html.twig';
import './collapsibleCheckbox.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((accordion) => {
      //Update description on first load
      function updateDesc() {
        const remainingCheckboxes = accordion.querySelectorAll(
          '.accordion__input'
        );
        const numChecked = Array.from(remainingCheckboxes).filter(
          (checkbox) => checkbox.checked
        ).length;

        const descriptionElement = accordion.querySelector(
          '.accordion__description'
        );
        const description = `${numChecked} selected`;
        descriptionElement.textContent = numChecked ? description : '';
      }
      updateDesc();

      //Update description when checking checkboxes
      const checkboxes = accordion.querySelectorAll('.accordion__input');
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', updateDesc);
      });

      //Toggle accordion
      const button = accordion.querySelector('.accordion__button');
      function toggleAccordion(e) {
        const fields = accordion.querySelector('.accordion__fields');
        fields.classList.toggle('.accordion__fields--active');
        console.log('I run');
      }
      button.addEventListener('click', toggleAccordion);
    });
  });
}
