export default function () {

  window.addEventListener("DOMContentLoaded",function() {
    const button = document.querySelector('.button');
    if (!button) return;
    button.addEventListener('click', event => {
      button.textContent = `Button ${event.detail}`;
    });
  });
}
