import './multifieldGroup.html.twig';
import './multifieldGroup.scss';
import { domContentLoadedWrapper } from '../../../helpers';
import { activateMultivalueField, addField } from '../MultivalueField/multivalueField';
import { activateTooltip } from '../Tooltip/tooltip';

export default function () {
  function addGroup(group, count, values = {}) {
    const parent = group.closest('.multifield-group');
    const template = parent
      .querySelector('.multifield-group__template .multifield-group__item')
      .cloneNode(true);

    template
      .querySelector('.multifield-group__delete-item')
      .addEventListener('click', function (e) {
        e.preventDefault();
        e.target.closest('.multifield-group__item').remove();
      });

    // Set existed values.
    for (const key in values) {
      const element = template.querySelector(`[name^="${key}"]`);
      element.setAttribute('id', element.getAttribute('id') + '-' + count);
      const label = template.querySelector(`[for^="${key}"]`);
      label.setAttribute('for', label.getAttribute('for') + '-' + count);
      const labelId = element.getAttribute('id') + '-label-' + count;
      label.setAttribute('id', labelId);

      const multivalueField = element.closest('.multivalue-field');
      if (multivalueField && Array.isArray(values[key]) && values[key].length) {
        element.setAttribute('value', values[key][0]);

        for (const value of values[key].splice(1)) {
          addField(multivalueField, value, labelId);
        }
      } else {
        element.setAttribute('value', values[key]);
      }
    }

    // Handle multivalue fields.
    const multivalueFields = template.querySelectorAll('.multivalue-field');
    for (const field of multivalueFields) {
      activateMultivalueField(field);
    }

    // Activate tooltips.
    const tooltips = template.querySelectorAll('.tooltip');
    for (const tooltip of tooltips) {
      activateTooltip(tooltip);
    }

    parent.insertBefore(template, group.parentNode);
  }

  function callback() {
    const groups = document.querySelectorAll('.multifield-group');
    let count = 0;
    for (const group of groups) {
      const button = group.querySelector('.multifield-group__add-item button');
      button.addEventListener('click', function (e) {
        addGroup(e.target, count);
      });

      const parsedValues = JSON.parse(group.getAttribute('data-items'));
      const values = Array.isArray(parsedValues) ? parsedValues : [];

      for (const value of values) {
        addGroup(button, count, value);
        count++;
      }
    }
  }

  return domContentLoadedWrapper(callback);
}
