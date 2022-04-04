import './multivalueField.html.twig';
import './multivalueField.scss';
import { domContentLoadedWrapper } from '../../../helpers';

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
  clonedEl.querySelector('input').value = initialValue;

  const deleteButton = buildDeleteButton(scope);

  clonedEl.append(deleteButton);

  wrapper.parentNode.insertBefore(clonedEl, wrapper.nextSibling);

  scope.setAttribute('data-count', wrappers.length + 1);
}

export function activateMultivalueField(scope, initialValue = '') {
  scope.querySelector('.multivalue-field__add-entity').addEventListener('click', function (e) {
    e.preventDefault();
    addField(scope, initialValue);
  });

  const deleteButton = buildDeleteButton(scope);
  scope.querySelector('.input-field__wrapper').append(deleteButton);
}

function buildDeleteButton(scope) {
  const deleteButton = document.createElement('a');
  deleteButton.href = '#';
  deleteButton.classList.add('multivalue-field__delete-entity');

  deleteButton.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.parentNode.remove();
    scope.setAttribute('data-count', scope.getAttribute('data-count') - 1);
  });

  return deleteButton;
}
