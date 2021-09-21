import './searchBar.html.twig';
import './searchBar.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.search-bar');
    if(!el) {
      return;
    }

    const input = el.querySelector('.search-bar__box');
    input.addEventListener('input', () => {
      if (input.value !== '') {
        input.classList.add('search-bar__box--has-content');
      } else {
        input.classList.remove('search-bar__box--has-content');
      }
    })
  });
}
