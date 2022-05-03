import './multivalueField.html.twig';
import './multivalueField.scss';
import { domContentLoadedWrapper } from '../../../helpers';
import { dispatchMultigroupEvent } from '@components/components/form/MultifieldGroup/multifieldGroup';
import { v4 as uuidv4 } from 'uuid';

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
  clonedInput.setAttribute('id', uuidv4());

  const multifieldSubGroup = scope.closest('.multifield-group__item');
  if (multifieldSubGroup && multifieldSubGroup.hasAttribute('id')) {
    clonedInput.setAttribute('data-sub-group-id', multifieldSubGroup.getAttribute('id'));

    clonedInput.setAttribute('aria-labelledby', multifieldSubGroup.getAttribute('id'));
  }

  const deleteButton = buildDeleteButton(scope);

  clonedEl.append(deleteButton);

  wrapper.parentNode.insertBefore(clonedEl, wrapper.nextSibling);

  scope.setAttribute('data-count', wrappers.length + 1);

  return clonedEl;
}

export function activateMultivalueField(scope) {
  if (scope.hasAttribute('pl-listener-assigned')) {
    return;
  }

  const wrapper = scope.querySelector('.input-field__wrapper');
  const deleteEntity = wrapper.querySelector('.multivalue-field__delete-entity');

  if (deleteEntity) {
    deleteEntity.remove();
  }

  const deleteButton = buildDeleteButton(scope);
  scope.querySelector('.input-field__wrapper').append(deleteButton);

  scope.querySelector('.multivalue-field__add-entity a').addEventListener('click', function (e) {
    e.preventDefault();
    addField(scope, '');
    [...scope.querySelectorAll('input')].pop().focus();
    dispatchMultigroupEvent(e.target);
  });

  // Set mapping between labels and inputs.
  const labels = scope.querySelectorAll('label');
  for (const label of labels) {
    setLabelMappingForInput(label);
  }

  scope.setAttribute('pl-listener-assigned', '1');
}

export function setLabelMappingForInput(label) {
  const input = label.closest('.input-field');

  if (input) {
    const id = uuidv4();
    input.querySelector('input').setAttribute('id', id);
    label.setAttribute('for', id);
    label.setAttribute('id', `${id}-label`);
  }
}

export function setLabelMappingForSelect(label) {
  const select = label.closest('.dropdown');

  if (select) {
    const id = uuidv4();
    select.querySelector('select').setAttribute('id', id);
    label.setAttribute('for', id);
    label.setAttribute('id', `${id}-label`);
  }
}

export function setLabelMappingForTextarea(label) {
  const textarea = label.closest('.textarea');

  if (textarea) {
    const id = uuidv4();
    textarea.querySelector('textarea').setAttribute('id', id);
    label.setAttribute('for', id);
    label.setAttribute('id', `${id}-label`);

    const description = textarea.querySelector('.textarea__description');
    if (description) {
      description.setAttribute('id', `label-${id}`);
      textarea.querySelector('textarea').setAttribute('aria-describedby', `label-${id}`);
    }
  }
}

export function setLabelMappingForRadio(label) {
  const radio = label.closest('.radio__field');

  if (radio) {
    const id = uuidv4();
    radio.querySelector('input').setAttribute('id', id);
    label.setAttribute('for', id);
    label.setAttribute('id', `label-${id}`);

    const description = radio.closest('.radio').querySelector('.radio__description');
    if (description) {
      description.setAttribute('id', `descr-${id}`);
      radio.closest('.radio').setAttribute('aria-describedby', `descr-${id}`);
    }

    const legend = radio.closest('.radio').querySelector('.radio__legend');
    if (legend) {
      legend.setAttribute('id', `legend-${id}`);
    }
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

    const next = parent.nextSibling;

    if (next && next.nodeName === 'DIV' && next.querySelector('input')) {
      next.querySelector('input').focus();
    } else {
      parent.closest('.multivalue-field').querySelector('.multivalue-field__add-entity a').focus();
    }

    parent.remove();

    if (group) {
      dispatchMultigroupEvent(group);
    }

    setLabelMappingForInput(label);

    scope.setAttribute('data-count', scope.getAttribute('data-count') - 1);
  });

  return deleteButton;
}
