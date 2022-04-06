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

export function addField(scope, initialValue = '', labelId = '') {
  const wrappers = scope.querySelectorAll('.input-field__wrapper');
  const wrapper = wrappers[wrappers.length - 1];

  const clonedEl = wrapper.cloneNode(true);
  const clonedDeleteButton = clonedEl.querySelector('.multivalue-field__delete-entity');

  if (clonedDeleteButton) {
    clonedDeleteButton.remove();
  }

  const clonedInput = clonedEl.querySelector('input');

  clonedInput.value = initialValue;
  clonedInput.setAttribute('aria-labelledby', labelId);
  clonedInput.setAttribute('id', `multifield-${generateHash()}`);
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
}

function buildDeleteButton(scope) {
  const deleteButton = document.createElement('a');
  deleteButton.href = '#';
  deleteButton.classList.add('multivalue-field__delete-entity');
  deleteButton.setAttribute('aria-label', 'Delete element');

  deleteButton.addEventListener('click', function (e) {
    e.preventDefault();

    dispatchMultigroupEvent(e.target);

    e.target.parentNode.remove();
    scope.setAttribute('data-count', scope.getAttribute('data-count') - 1);
  });

  return deleteButton;
}
