import './multifieldGroup.html.twig';
import './multifieldGroup.scss';
import { domContentLoadedWrapper } from '../../../helpers';
import { activateMultivalueField, addField } from '../MultivalueField/multivalueField';
import { activateTooltip } from '../Tooltip/tooltip';

export default function () {
  function addGroup(group, values = {}) {
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

      const multivalueField = element.closest('.multivalue-field');
      if (multivalueField && Array.isArray(values[key]) && values[key].length) {
        element.setAttribute('value', values[key][0]);
        for (const value of values[key].splice(1)) {
          addField(multivalueField, value);
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

    for (const group of groups) {
      const button = group.querySelector('.multifield-group__add-item button');
      button.addEventListener('click', function (e) {
        addGroup(e.target);
      });

      const parsedValues = JSON.parse(group.getAttribute('data-items'));
      const values = Array.isArray(parsedValues) ? parsedValues : [];

      for (const value of values) {
        addGroup(button, value);
      }
    }
  }

  return domContentLoadedWrapper(callback);
}