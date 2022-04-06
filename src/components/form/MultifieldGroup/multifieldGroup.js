import './multifieldGroup.html.twig';
import './multifieldGroup.scss';
import { domContentLoadedWrapper, generateHash } from '../../../helpers';
import {
  activateMultivalueField,
  addField,
  setMappingForLabel,
} from '../MultivalueField/multivalueField';
import { activateTooltip } from '../Tooltip/tooltip';

export default function () {
  function addGroup(group, count, values = { values: {}, errors: [] }) {
    const parent = group.closest('.multifield-group');
    const template = parent
      .querySelector('.multifield-group__template .multifield-group__item')
      .cloneNode(true);

    const groupId = generateHash();
    template.setAttribute('id', groupId);

    template
      .querySelector('.multifield-group__delete-item')
      .addEventListener('click', function (e) {
        e.preventDefault();

        const deletedItem = e.target.closest('.multifield-group__item');
        const group = e.target.closest('.multifield-group');
        deletedItem.remove();
        dispatchMultigroupEvent(group);
      });

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

    // Set existed values.
    for (const key in values.values) {
      const element = template.querySelector(`[name^="${key}"]`);

      if (element) {
        const multivalueField = element.closest('.multivalue-field');
        if (multivalueField && Array.isArray(values.values[key]) && values.values[key].length) {
          element.setAttribute('value', values.values[key][0]);

          for (const value of values.values[key].splice(1)) {
            addField(multivalueField, value);
          }
        } else {
          element.setAttribute('value', values.values[key]);
        }
      }
    }

    // Set proper attrs for all fields, even no predefined.
    const allInputs = template.querySelectorAll(`input`);
    for (const element of allInputs) {
      const name = element.getAttribute('name').replace('[]', '');
      element.setAttribute('data-field-name', name);
      element.setAttribute('data-sub-group-id', groupId);

      // Set mapping between labels and fields for single fields.
      const multiWrapper = element.closest('.multivalue-field');
      if (!multiWrapper) {
        const singleWrapper = element.closest('.input-field');
        if (singleWrapper) {
          const label = singleWrapper.querySelector('label');
          setMappingForLabel(label);
        }
      }
    }

    // Set errors.
    for (const field of values.errors) {
      const element = template.querySelector(`[name^="${field}"]`);

      if (element) {
        const wrapper = element.closest('.input-field');

        if (wrapper) {
          wrapper.classList.add('input-field--error');
        }
      }
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
        dispatchMultigroupEvent(e.target);
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

export function dispatchMultigroupEvent(element, event = 'input') {
  const group = element.classList.contains('multifield-group')
    ? element
    : element.closest('.multifield-group');

  if (group) {
    group.dispatchEvent(new Event(event));
  }
}
