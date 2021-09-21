import './filtersSelected.html.twig';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filters__button');
    const removeButton = document.querySelector('.filters__remove');
    if (!buttons.length) return;

    buttons.forEach((button) =>
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        e.target.parentNode.removeChild(e.target);

        const currentButtons = document.querySelectorAll('.filters__button');
        if (!currentButtons.length) removeButton.parentNode.removeChild(removeButton);
      })
    );

    removeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const buttonDiv = document.querySelector('.filters__buttons');
      buttonDiv.innerHTML = '';
      removeButton.parentNode.removeChild(removeButton);
    });
  });
}
