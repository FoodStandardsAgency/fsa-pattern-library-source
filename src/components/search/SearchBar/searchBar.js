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
    });

    const submit = el.querySelector('.search-bar__submit');
    submit.addEventListener('click', (e) => {
      e.preventDefault();
      const currUrl = new URL(window.location.href);
      let params = new URLSearchParams(currUrl.search.slice(1));
      const value = input.value;
      params.append('keywords', value);
      const query = params.toString();
      console.log(window.location + query);
      window.location.href = window.location + query;
    });
  });
}
