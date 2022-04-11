import './multivalueField.html.twig';
import './multivalueField.scss';
import { domContentLoadedWrapper, generateHash } from '../../../helpers';
import { dispatchMultigroupEvent } from '@components/components/form/MultifieldGroup/multifieldGroup';

export default function () {
  function callback() {
    const multivalueFields = document.querySelectorAll('.multivalue-field');

    for (const field of multivalueFields) {
      const parsedValues = JSON.parse(field.getAttribute('data-values'));
      const values =
        Array.isArray(parsedValues) && parsedValues.length ? parsedValues.slice(1) : [];

      for (const value of values) {
        addField(field, value);
      }

      activateMultivalueField(field);
    }
  }

  return domContentLoadedWrapper(callback);
}

export function addField(scope, initialValue = '') {
  const wrappers = scope.querySelectorAll('.input-field__wrapper');
  const wrapper = wrappers[wrappers.length - 1];

  const clonedEl = wrapper.cloneNode(true);
  const clonedDeleteButton = clonedEl.querySelector('.multivalue-field__delete-entity');

  if (clonedDeleteButton) {
    clonedDeleteButton.remove();
  }

  const clonedInput = clonedEl.querySelector('input');

  clonedInput.value = initialValue;
  clonedInput.setAttribute('data-field-name', clonedInput.getAttribute('name').replace('[]', ''));

  const multifieldSubGroup = scope.closest('.multifield-group__item');
  if (multifieldSubGroup && multifieldSubGroup.hasAttribute('id')) {
    clonedEl
      .querySelector('input')
      .setAttribute('data-sub-group-id', multifieldSubGroup.getAttribute('id'));
  }

  const deleteButton = buildDeleteButton(scope);

  clonedEl.append(deleteButton);

  wrapper.parentNode.insertBefore(clonedEl, wrapper.nextSibling);

  scope.setAttribute('data-count', wrappers.length + 1);

  return clonedEl;
}

export function activateMultivalueField(scope) {
  scope.querySelector('.multivalue-field__add-entity').addEventListener('click', function (e) {
    e.preventDefault();
    addField(scope, '');
    dispatchMultigroupEvent(e.target);
  });

  const deleteButton = buildDeleteButton(scope);
  scope.querySelector('.input-field__wrapper').append(deleteButton);

  // Set mapping between labels and inputs.
  const labels = scope.querySelectorAll('label');
  for (const label of labels) {
    setLabelMappingForInput(label);
  }
}

export function setLabelMappingForInput(label) {
  const input = label.closest('.input-field');

  if (input) {
    const id = generateHash();
    input.querySelector('input').setAttribute('id', id);
    label.setAttribute('for', id);
    label.setAttribute('id', `${id}-label`);
  }
}

export function setLabelMappingForSelect(label) {
  const select = label.closest('.dropdown');

  if (select) {
    const id = generateHash();
    select.querySelector('select').setAttribute('id', id);
    label.setAttribute('for', id);
    label.setAttribute('id', `${id}-label`);
  }
}

function buildDeleteButton(scope) {
  const deleteButton = document.createElement('a');
  deleteButton.href = '#';
  deleteButton.classList.add('multivalue-field__delete-entity');
  deleteButton.setAttribute('aria-label', 'Delete element');

  deleteButton.addEventListener('click', function (e) {
    e.preventDefault();

    const parent = e.target.parentNode;
    const group = e.target.closest('.multifield-group');
    const label = parent.closest('.multivalue-field').querySelector('label');

    parent.remove();

    if (group) {
      dispatchMultigroupEvent(group);
    }

    setLabelMappingForInput(label);

    scope.setAttribute('data-count', scope.getAttribute('data-count') - 1);
  });

  return deleteButton;
}
