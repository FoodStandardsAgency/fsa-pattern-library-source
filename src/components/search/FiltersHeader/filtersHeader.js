import './filtersHeader.html.twig';
import './filtersHeader.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const returnButton = document.querySelector('.filters-header__return');
    if (!returnButton) return;

    function scrollToResults() {
      let targetEl;
      const firstResult = document.querySelector('.listing-item');
      const noResults = document.querySelector('.search-no-results');

      if (firstResult) {
        //Scroll to first result
        targetEl = firstResult;
      } else if (noResults) {
        //Or scroll to no result screen if no results are avaialble;
        targetEl = noResults;
      } else return;

      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    returnButton.addEventListener('click', scrollToResults);
  });
}
