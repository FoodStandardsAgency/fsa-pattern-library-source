import './filtersSelected.scss';
import './filtersSelected.html.twig';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filters__button');
    const removeButton = document.querySelector('.filters__remove');
    if (!buttons.length) return;

    buttons.forEach((button) =>
      button.addEventListener('click', (e) => {
        e.target.remove();

        const currentButtons = document.querySelectorAll('.filters__button');
        if (!currentButtons.length) removeButton.remove();
      })
    );

    removeButton.addEventListener('click', (e) => {
      const buttonDiv = document.querySelector('.filters__buttons');
      buttonDiv.innerHTML = '';
      removeButton.remove();
    });
  });
}
