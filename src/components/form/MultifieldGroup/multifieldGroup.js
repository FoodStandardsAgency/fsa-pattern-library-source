import './multifieldGroup.html.twig';
import './multifieldGroup.scss';
import { domContentLoadedWrapper, generateHash } from '../../../helpers';
import {
  activateMultivalueField,
  addField,
  setLabelMappingForInput,
  setLabelMappingForSelect,
  setLabelMappingForTextarea,
} from '../MultivalueField/multivalueField';
import { activateTooltip } from '../Tooltip/tooltip';

export default function () {
  function addGroup(group, count, values = { values: {}, errors: [], placeholders: {} }) {
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
      field.removeAttribute('pl-listener-assigned');
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
          if (element.tagName === 'INPUT') {
            element.setAttribute('value', values.values[key]);
          } else if (element.tagName === 'TEXTAREA') {
            element.innerHTML = values.values[key];
          } else if (element.tagName === 'SELECT') {
            for (const option of element.options) {
              option.setAttribute('value', option.getAttribute('data-value'));

              if (option.getAttribute('data-value') === values.values[key]) {
                option.setAttribute('selected', 'selected');
              }
            }
          }
        }
      } else {
        // Fill placeholders
        const regex = new RegExp(`\\[${key}\\]`, 'g');
        template.innerHTML = template.innerHTML.replace(regex, values.values[key]);
      }
    }

    // Set proper attrs for all fields, even no predefined.
    const allInputs = template.querySelectorAll('input, select, textarea');

    for (const element of allInputs) {
      const name = element.getAttribute('name').replace('[]', '');
      element.setAttribute('data-field-name', name);
      element.setAttribute('data-sub-group-id', groupId);

      // Set mapping between labels and fields for single fields.
      if (element.tagName === 'INPUT') {
        const multiWrapper = element.closest('.multivalue-field');
        if (!multiWrapper) {
          const singleWrapper = element.closest('.input-field');
          if (singleWrapper) {
            const label = singleWrapper.querySelector('label');
            setLabelMappingForInput(label);
          }
        }
      } else if (element.tagName === 'SELECT') {
        const singleWrapper = element.closest('.dropdown');
        if (singleWrapper) {
          const label = singleWrapper.querySelector('label');
          setLabelMappingForSelect(label);
        }
      } else if (element.tagName === 'TEXTAREA') {
        const singleWrapper = element.closest('.textarea');
        if (singleWrapper) {
          const label = singleWrapper.querySelector('label');
          setLabelMappingForTextarea(label);
        }
      }
    }

    // Set errors.
    for (const field of values.errors) {
      const element = template.querySelector(`[name^="${field}"]`);

      if (element) {
        if (element.tagName === 'INPUT') {
          const wrapper = element.closest('.input-field');

          if (wrapper) {
            wrapper.classList.add('input-field--error');
          }
        } else if (element.tagName === 'SELECT') {
          const wrapper = element.closest('.dropdown');

          if (wrapper) {
            wrapper.classList.add('dropdown--error');
          }
        } else if (element.tagName === 'TEXTAREA') {
          const wrapper = element.closest('.textarea');

          if (wrapper) {
            wrapper.classList.add('textarea--error');
          }
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

      dispatchMultigroupEvent(group);

      group.addEventListener('updateErrors', function (e) {
        const dataItems = JSON.parse(e.target.getAttribute('data-items'));

        if (!dataItems) {
          return;
        }

        const errorFields = e.target.querySelectorAll(
          '.input-field--error, .dropdown--error, .textarea--error'
        );
        for (const errorField of errorFields) {
          errorField.classList.remove('input-field--error');
          errorField.classList.remove('dropdown--error');
          errorField.classList.remove('textarea--error');
        }

        for (const i in dataItems) {
          const line = dataItems[i];
          if (line.errors.length) {
            const items = e.target.querySelectorAll('.multifield-group__item');
            const item = items[+i + 1];

            if (item) {
              for (const fieldName of line.errors) {
                const elements = item.querySelectorAll(`[data-field-name="${fieldName}"]`);
                for (const element of elements) {
                  if (element.tagName === 'INPUT') {
                    element.closest('.input-field').classList.add('input-field--error');
                  } else if (element.tagName === 'SELECT') {
                    element.closest('.dropdown').classList.add('dropdown--error');
                  }
                  if (element.tagName === 'TEXTAREA') {
                    element.closest('.textarea').classList.add('textarea--error');
                  }
                }
              }
            }
          }
        }
      });
    }
  }

  return domContentLoadedWrapper(callback);
}

export function dispatchMultigroupEvent(element) {
  const group = element.classList.contains('multifield-group')
    ? element
    : element.closest('.multifield-group');

  if (group) {
    group.dispatchEvent(new Event('input'));
    group.dispatchEvent(new Event('select'));
  }
}
