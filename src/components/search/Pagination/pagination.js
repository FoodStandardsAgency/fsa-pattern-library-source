import updateParams from '../../../helpers/updateParams';

import './pagination.html.twig';
import './pagination.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.pagination');
    if (!el) {
      return;
    }

    const pages = el.querySelectorAll('.pagination__item a');
    pages.forEach((page) => {
      page.addEventListener('click', (e) => {
        e.preventDefault();
        updateParams('page', page.getAttribute('data-page'));
      });
    });
  });
}