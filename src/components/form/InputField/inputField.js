import './inputField.html.twig';
import './inputField.scss';

export default function () {}
window.addEventListener('DOMContentLoaded', function () {
  const textFields = document.querySelectorAll('.input-field');
  if (!textFields) {
    return;
  }
  textFields.forEach((field) => {
    const charCounter = field.querySelector('.input-field__character-limit__count');
    if (charCounter) {
      const startingCount = charCounter.innerHTML;
      const input = field.querySelector('input');
      input.addEventListener('input', (e) => {
        charCounter.innerHTML = String(parseInt(startingCount) - e.target.value.length);
      });
    }
  });
});
