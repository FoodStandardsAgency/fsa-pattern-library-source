import './dropdownMenu.scss';
import './dropdownMenu.html.twig';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    const dropdowns = document.querySelectorAll('.dropdown-menu__label');

    if (!dropdowns.length) {
      return;
    }

    for (const dropdown of dropdowns) {
      dropdown.addEventListener('click', (e) => {
        e.preventDefault();

        const openedList = document.querySelector('.dropdown-menu__options-open');
        const options = e.target.closest('.dropdown-menu').querySelector('.dropdown-menu__options');

        if (options && openedList && !options.classList.contains('dropdown-menu__options-open')) {
          openedList.classList.remove('dropdown-menu__options-open');
        }

        options.classList.toggle('dropdown-menu__options-open');
      });
    }

    document.addEventListener('click', hideUnfocusedDropdowns);
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Tab') {
        hideUnfocusedDropdowns(e);
      }
    });
  }

  return domContentLoadedWrapper(callback);
}

function hideUnfocusedDropdowns(e) {
  if (e.target.closest('.dropdown-menu') === null) {
    const openedList = document.querySelector('.dropdown-menu__options-open');

    if (openedList) {
      openedList.classList.remove('dropdown-menu__options-open');
    }
  }
}
