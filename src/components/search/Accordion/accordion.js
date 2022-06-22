import './accordion.html.twig';
import './accordion.scss';

export default function () {
  const accordions = document.querySelectorAll('.accordion');
  if (!accordions) {
    return;
  }

  //Update the 'x selected description for the accordion passed in as first arg
  function updateDesc(accordion) {
    const remainingCheckboxes = accordion.querySelectorAll('.accordion__input');
    const numChecked = Array.from(remainingCheckboxes).filter(
      (checkbox) => checkbox.checked
    ).length;

    const descriptionElement = accordion.querySelector('.accordion__description');
    const description = numChecked + ' ' + descriptionElement.dataset.selected;
    descriptionElement.textContent = numChecked ? description : '';
  }

  //Update description when checking checkboxes
  function updateDescOnClick(e) {
    const accordion = e.target.closest('.accordion');
    updateDesc(accordion);
  }

  //Toggle accordion
  function toggleAccordion(e) {
    let currentButton = e.target;
    // Click on the label instead of the button itself
    if (currentButton.classList.contains('accordion__title-text')) {
      currentButton = currentButton.closest('.accordion__button');
    }
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
    const button = e.target;
    const buttons = document.querySelectorAll(
      '.accordion:not(.accordion--hidden) .accordion__button'
    );
    const currentIndex = Array.from(buttons).indexOf(button);
    const keyCode = e.keyCode ? e.keyCode : e.which;

    //40 === down, move to the next accordion
    if (keyCode === 40) {
      e.preventDefault();
      if (buttons.length - 1 > currentIndex) {
        buttons[currentIndex + 1].focus();
      } else {
        //If this is the last accordion, move to the first accordion
        buttons[0].focus();
      }
      return;
    }

    //38 === up, move to the previous accordion
    if (keyCode === 38) {
      e.preventDefault();
      if (currentIndex > 0) {
        buttons[currentIndex - 1].focus();
      } else {
        //If this is the first accordion, move to the last accordion
        buttons[buttons.length - 1].focus();
      }
      return;
    }

    // 36 === home, move to the first accordion
    if (keyCode === 36) {
      e.preventDefault();
      buttons[0].focus();
      return;
    }

    // 35 === end, move to the last accordion
    if (keyCode === 35) {
      e.preventDefault();
      buttons[buttons.length - 1].focus();
    }
  }

  accordions.forEach((accordion) => {
    //Update description on first load
    updateDesc(accordion);

    //Update description when checking checkboxes
    const checkboxes = accordion.querySelectorAll('.accordion__input');
    if (checkboxes.length) {
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', updateDescOnClick);
      });
    }

    //Toggle accordion on click
    const button = accordion.querySelector('.accordion__button');
    button.addEventListener('click', toggleAccordion);

    //Add keyboard control
    button.addEventListener('keydown', moveFocus);
  });
}
