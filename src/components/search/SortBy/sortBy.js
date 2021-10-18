import './sortBy.html.twig';
import './sortBy.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.sort');
    if(!el) {
      return;
    }

    const sortBy = el.querySelector('select');
    sortBy.addEventListener('change', () => {
      const currUrl = new URL(window.location.href);
      let params = new URLSearchParams(currUrl.search.slice(1));
      const value = sortBy.value;
      params.append('sort', value);
      const query = params.toString();
      window.location.href = window.location + query;
    });
  });
}
