import './collapsibleCheckbox.html.twig';
import './collapsibleCheckbox.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((accordion) => {
      //Update description on first load
      const checkboxes = accordion.querySelectorAll('.accordion__input');
      const numChecked = Array.from(checkboxes).filter(
        (checkbox) => checkbox.checked
      ).length;

      const description = `${numChecked} selected`;
      const descriptionElement = accordion.querySelector(
        '.accordion__description'
      );
      descriptionElement.textContent = description;

      //Update description when checking checkboxes

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
