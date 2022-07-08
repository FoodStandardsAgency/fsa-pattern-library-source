import './textarea.scss';
import './textarea.html.twig';

export default function () {
  const textAreas = document.querySelectorAll('.textarea');
  if (!textAreas) {
    return;
  }
  textAreas.forEach((field) => {
    const charCounter = field.querySelector('.textarea__character-limit__count');
    if (charCounter) {
      const startingCount = charCounter.innerHTML;
      const input = field.querySelector('textarea');
      input.addEventListener('input', (e) => {
        charCounter.innerHTML = String(parseInt(startingCount) - e.target.value.length);
      });
    }
  });
}
