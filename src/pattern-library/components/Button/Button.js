import './button.scss';
import './button.html.twig';
export default function () {
  console.log('Eo');
  window.addEventListener("DOMContentLoaded",function() {
    const button = document.querySelector('.button');
    if (!button) return;
    button.addEventListener('click', event => {
      button.textContent = `Button ${event.detail}`;
    });
    const img = document.querySelector('img');
    img.setAttribute('alt', 'some alt');
  });
}
