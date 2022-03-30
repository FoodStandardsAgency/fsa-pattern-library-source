import './multivalueField.html.twig';
import './multivalueField.scss';
import { domContentLoadedWrapper } from '../../../helpers';

export function addField(scope, initialValue = '') {
  const wrappers = scope.querySelectorAll('.input-field__wrapper');
  const wrapper = wrappers[wrappers.length - 1];

  const clonedEl = wrapper.cloneNode(true);
  const clonedDeleteButton = clonedEl.querySelector('.multivalue-field__delete-entity');

  if (clonedDeleteButton) {
    clonedDeleteButton.remove();
  }
  clonedEl.querySelector('input').value = initialValue;

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('multivalue-field__delete-entity');

  deleteButton.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.parentNode.remove();
  });

  clonedEl.append(deleteButton);

  wrapper.parentNode.insertBefore(clonedEl, wrapper.nextSibling);
}

export default function () {
  function callback() {
    const multivalueFields = document.querySelectorAll('.multivalue-field');

    for (const field of multivalueFields) {
      const parsedValues = JSON.parse(field.querySelector('.multivalue-field__values').innerHTML);
      const values =
        Array.isArray(parsedValues) && parsedValues.length ? parsedValues.slice(1) : [];

      for (const value of values) {
        addField(field, value);
      }

      field.querySelector('.multivalue-field__add-entity').addEventListener('click', function (e) {
        e.preventDefault();
        addField(field);
      });
    }
  }

  return domContentLoadedWrapper(callback);
}
