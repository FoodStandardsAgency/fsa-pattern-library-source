import updateParams from '../../../helpers/updateParams';

import './datepicker.html.twig';
import './datepicker.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.datepicker');
    if (!els) {
      return;
    }

    els.forEach((el) => {
      const applyButton = el.querySelector('.datepicker__apply-button');
      const type = el.getAttribute('data-type');
      let day = '';
      let month = '';
      let year = '';
      applyButton.addEventListener('click', (e) => {
        e.preventDefault();
        const selects = el.querySelectorAll('select');
        selects.forEach((select) => {
          const selected = select.value;
          const name = select.name;
          switch(name) {
            case 'Day':
              day = selected !== 'none' ? selected : null;
              break;
            case 'Month':
              month = selected !== 'none' ? selected : null;
              break;
            case 'Year':
              year = selected !== 'none' ? selected : new Date().getFullYear();
              break;
          }
        });
        const date = new Date(year, month, day).getTime() / 1000;
        updateParams('date' + type, date);
      });
    });
  });
}