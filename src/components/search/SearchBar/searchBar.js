import updateParams from '../../../helpers/updateParams';

import './searchBar.html.twig';
import './react/searchBar.html.twig';
import './searchBar.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.search-bar');
    if (!el) {
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
      const form = document.getElementsByClassName('search-bar');
      updateParams('keywords', input.value, form[0]);
    });
  });
}
