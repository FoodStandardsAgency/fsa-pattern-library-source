import './collapsibleCheckbox.html.twig';
import './collapsibleCheckbox.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
    if (!accordions) {
      return;
    }

    //Update the 'x selected description for the accordion passed in as first arg
    function updateDesc(accordion) {
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

    function updateDescOnClick(e) {
      const accordion = e.target.closest('.accordion');
      updateDesc(accordion);
    }

    //Toggle accordion
    function toggleAccordion(e) {
      const currentButton = e.target;
      currentButton.classList.toggle('accordion__button--expanded');
      const isExpanded = currentButton.getAttribute('aria-expanded');
      if (isExpanded === 'true') {
        currentButton.setAttribute('aria-expanded', 'false');
      } else {
        currentButton.setAttribute('aria-expanded', 'true');
      }

      const accordion = currentButton.closest('.accordion');
      const fields = accordion.querySelector('.accordion__fields');
      fields.classList.toggle('accordion__fields--active');
    }

    //Additional keyboard control: Navigate between accordion blocks using up, down, home and end buttons
    function moveFocus(e) {
      const triggerElement = e.target;
      const accordions = document.querySelectorAll('.accordion');
      if (!triggerElement.classList.contains('accordion__button')) return;

      const currentAccordion = e.currentTarget;
      //40 === down, move to the next accordion
      if (e.keyCode === 40) {
        e.preventDefault();
        const nextElement = currentAccordion.nextElementSibling;
        if (nextElement && nextElement.classList.contains('accordion')) {
          nextElement.querySelector('.accordion__button').focus();
        } else {
          //If this is the last accordion, move to the first accordion
          accordions[0].querySelector('.accordion__button').focus();
        }
        return;
      }

      //38 === up, move to the previous accordion
      if (e.keyCode === 38) {
        e.preventDefault();
        const previousElement = currentAccordion.previousElementSibling;
        if (
          previousElement &&
          previousElement.classList.contains('accordion')
        ) {
          previousElement.querySelector('.accordion__button').focus();
        } else {
          //If this is the first accordion, move to the last accordion
          accordions[accordions.length - 1]
            .querySelector('.accordion__button')
            .focus();
        }
        return;
      }

      // 36 === home, move to the first accordion
      if (e.keyCode === 36) {
        e.preventDefault();
        accordions[0].querySelector('.accordion__button').focus();
        return;
      }

      // 35 === end, move to the last accordion
      if (e.keyCode === 35) {
        e.preventDefault();
        accordions[accordions.length - 1]
          .querySelector('.accordion__button')
          .focus();
        return;
      }
    }

    accordions.forEach((accordion) => {
      //Update description on first load
      updateDesc(accordion);

      //Update description when checking checkboxes
      const checkboxes = accordion.querySelectorAll('.accordion__input');
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', updateDescOnClick);
      });

      //Toggle accordion on click
      const button = accordion.querySelector('.accordion__button');
      button.addEventListener('click', toggleAccordion);

      //Add keyboard control
      accordion.addEventListener('keydown', moveFocus);
    });
  });
}
