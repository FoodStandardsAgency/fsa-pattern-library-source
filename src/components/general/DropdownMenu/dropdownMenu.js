import './dropdownMenu.scss';
import './dropdownMenu.html.twig';
import { domContentLoadedWrapper } from '../../../domContentLoadedWrapper';

export default function () {
  function callback() {
    const dropdowns = document.querySelectorAll('.dropdown-menu__label');

    for (const dropdown of dropdowns) {
      dropdown.addEventListener('click', (e) => {
        const openedList = document.querySelector('.dropdown-menu__options-open');
        const options = e.target.closest('.dropdown-menu').querySelector('.dropdown-menu__options');

        if (options && openedList && !options.classList.contains('dropdown-menu__options-open')) {
          openedList.classList.remove('dropdown-menu__options-open');
        }

        options.classList.toggle('dropdown-menu__options-open');
      });
    }

    document.addEventListener('click', (e) => {
      if (e.target.closest('.dropdown-menu') === null) {
        const openedList = document.querySelector('.dropdown-menu__options-open');

        if (openedList) {
          openedList.classList.remove('dropdown-menu__options-open');
        }
      }
    });
  }

  return domContentLoadedWrapper(callback);
}
