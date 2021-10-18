import './pagination.html.twig';
import './pagination.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.pagination');
    if(!el) {
      return;
    }

    const pages = el.querySelectorAll('.pagination__item a');
    pages.forEach((page) => {
      page.addEventListener('click', (e) => {
        e.preventDefault();
        const currUrl = new URL(window.location.href);
        let params = new URLSearchParams(currUrl.search.slice(1));
        const value = page.getAttribute('data-page');
        params.append('page', value);
        const query = params.toString();
        window.location.href = window.location + query;
      });
    });
  });
}