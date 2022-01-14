import updateParams from '../../../helpers/updateParams';

import './datepicker.html.twig';
import './datepicker.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.datepicker');
    if (!els) {
      return;
    }
    
    function isLeapYear(year) {
      return new Date(year, 1, 29).getDate() === 29;
    }

    function minimumSelection(datepicker, errorContainer) {
      const accordion = datepicker.closest('.accordion');
      datepicker.classList.add('datepicker--error');
      errorContainer.classList.add('datepicker__error-message--visible');
      if (accordion) {
        accordion.classList.add('accordion--error');
      }
    }

    function validateDate(day, month, year, datepicker, errorContainer) {
      const shortMonths = [4, 6, 9, 11];
      if (day === 31 && shortMonths.includes(month)) {
        errorContainer.classList.add('datepicker__error-message--visible')
        return false;
      }
      else if ((day > 29 && month === 2) || ((day === 29 && month === 2 && !isLeapYear(year)))) {
        errorContainer.classList.add('datepicker__error-message--visible')
        return false;
      }
      else {
        return true;
      }
    }

    function clearErrors(minErrContainer, validationErrContainer) {
      minErrContainer.classList.remove('datepicker__error-message--visible')
      validationErrContainer.classList.remove('datepicker__error-message--visible');
    }

    els.forEach((el) => {
      const applyButton = el.querySelector('.datepicker__apply-button');
      const type = el.getAttribute('data-type');
      const minimumSelectionErrMsg = el.querySelector('.datepicker__error-message--minimum-selection');
      const invalidDateErrMsg = el.querySelector('.datepicker__error-message--invalid-dates');
      let day = '';
      let month = '';
      let year = '';
      applyButton.addEventListener('click', (e) => {
        e.preventDefault();
        clearErrors(minimumSelectionErrMsg, invalidDateErrMsg)
        const selects = el.querySelectorAll('select');
        selects.forEach((select) => {
          const selected = select.value;
          const name = select.name;
          switch(name) {
            case 'Day':
              day = selected !== 'none' ? parseInt(selected, 10) : null;
              break;
            case 'Month':
              month = selected !== 'none' ? parseInt(selected, 10) - 1 : null;
              break;
            case 'Year':
              year = selected !== 'none' ? selected : null;
              break;
          }
        });
        if (!year) {
          minimumSelection(el, minimumSelectionErrMsg);
          return;
        }
        if (validateDate(day, month, year, invalidDateErrMsg)) {
          const date = new Date(year, month, day).getTime() / 1000;
          updateParams('date' + type, date);
        }
      });
    });
  });
}