import './multifieldGroup.html.twig';
import './multifieldGroup.scss';
import { domContentLoadedWrapper } from '../../../helpers';
import {
  activateMultivalueField,
  addField,
  setLabelMappingForInput,
  setLabelMappingForRadio,
  setLabelMappingForSelect,
  setLabelMappingForTextarea,
} from '../MultivalueField/multivalueField';
import { v4 as uuidv4 } from 'uuid';

export default function () {
  function callback() {
    const groups = document.querySelectorAll('.multifield-group');
    for (const group of groups) {
      if (!group.hasAttribute('pl-listener-assigned')) {
        initGroup(group);
      }
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

function initGroup(group) {
  group.setAttribute('pl-listener-assigned', '1');

  // Delete all IDs to avoid problems with accessibility.
  const allInputs = group
    .querySelector('.multifield-group__template')
    .querySelectorAll('input, select, textarea');
  for (const input of allInputs) {
    input.removeAttribute('id');
  }

  const button = group.querySelector('.multifield-group__add-item button');
  button.addEventListener('click', function (e) {
    const groupId = addGroup(e.target);

    dispatchMultigroupEvent(e.target);

    document
      .getElementById(groupId)
      .querySelector('[data-field-name]:not([type="hidden"])')
      .focus();
  });

  const parsedValues = JSON.parse(decodeURIComponent(group.getAttribute('data-items')));
  const values = Array.isArray(parsedValues) ? parsedValues : [];

  for (const value of values) {
    addGroup(button, value);
  }

  dispatchMultigroupEvent(group);

  group.addEventListener('updateErrors', function (e) {
    const dataItems = JSON.parse(decodeURIComponent(e.target.getAttribute('data-items')));

    if (!dataItems) {
      return;
    }

    const errorFields = e.target.querySelectorAll(
      '.input-field--error, .dropdown--error, .textarea--error, .radio--error'
    );
    for (const errorField of errorFields) {
      errorField.classList.remove('input-field--error');
      errorField.classList.remove('dropdown--error');
      errorField.classList.remove('textarea--error');
      errorField.classList.remove('radio--error');
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
              if (element.tagName === 'INPUT' && element.type === 'radio') {
                element.closest('.radio').classList.add('radio--error');
              } else if (element.tagName === 'INPUT' && element.closest('.input-field')) {
                element.closest('.input-field').classList.add('input-field--error');
              } else if (element.tagName === 'SELECT') {
                element.closest('.dropdown').classList.add('dropdown--error');
              } else if (element.tagName === 'TEXTAREA') {
                element.closest('.textarea').classList.add('textarea--error');
              }
            }
          }
        }
      }
    }
  });
}

function addGroup(group, values = { values: {}, errors: [], placeholders: {} }) {
  const parent = group.closest('.multifield-group');

  const template = parent
    .querySelector('.multifield-group__template .multifield-group__item')
    .cloneNode(true);

  const numberOfItems = [...parent.children].filter((item) =>
    item.classList.contains('multifield-group__item')
  ).length;

  if (!numberOfItems) {
    template.querySelector('.multifield-group__form--other-items').remove();
  } else {
    template.querySelector('.multifield-group__form--first-item').remove();
  }

  const groupId = uuidv4();
  template.setAttribute('id', groupId);

  template.querySelector('.multifield-group__delete-item').addEventListener('click', function (e) {
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

  // Set uuid for ID field.
  const uuidField = template.querySelector(`[name="uuid[]"]`);
  if (uuidField) {
    uuidField.setAttribute('value', uuidv4());
  }

  // Handle radio buttons.
  const radioInputs = template.querySelectorAll(`.radio input`);
  for (const radio of radioInputs) {
    const name = radio.getAttribute('name');
    radio.setAttribute('name', `${name}[${groupId}]`);
    radio.setAttribute('id', `${name}--${groupId}`);
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
        if (element.tagName === 'INPUT' && element.type === 'radio') {
          const defaultRadioElem = template.querySelector(
            `[name^="${key}"][value="${values.values[key]}"]`
          );

          if (defaultRadioElem) {
            defaultRadioElem.setAttribute('checked', 'checked');
          }
        } else if (element.tagName === 'INPUT') {
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
    const name = element.getAttribute('name').replace(/\[.*?\]/g, '');
    element.setAttribute('data-field-name', name);
    element.setAttribute('data-sub-group-id', groupId);

    // Set mapping between labels and fields for single fields.
    if (element.tagName === 'INPUT') {
      const multiWrapper = element.closest('.multivalue-field');

      if (!multiWrapper && element.type !== 'radio') {
        const singleWrapper = element.closest('.input-field');
        if (singleWrapper) {
          const label = singleWrapper.querySelector('label');
          setLabelMappingForInput(label);
        }
      } else if (!multiWrapper && element.type === 'radio') {
        const singleWrapper = element.closest('.radio');
        if (singleWrapper) {
          const labels = singleWrapper.querySelectorAll('label');
          for (const label of labels) {
            setLabelMappingForRadio(label);
          }
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
        if (element.type === 'radio') {
          const wrapper = element.closest('.radio');
          if (wrapper) {
            wrapper.classList.add('radio--error');
          }
        } else {
          const wrapper = element.closest('.input-field');
          if (wrapper) {
            wrapper.classList.add('input-field--error');
          }
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

  return groupId;
}
