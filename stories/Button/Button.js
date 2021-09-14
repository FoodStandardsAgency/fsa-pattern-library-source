import './button.scss';
import './button.html.twig';
export default function () {

  window.addEventListener("DOMContentLoaded",function() {
    const button = document.querySelector('.button--event');
    if (!button) return;
    button.addEventListener('click', event => {
      button.textContent = "I was clicked";
    });
  });
}
