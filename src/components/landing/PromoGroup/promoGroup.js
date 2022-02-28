import './promoGroup.html.twig';
import './promoGroup.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.promo-group__card--one-link');
    if (!cards.length) return;

    //Make the whole card clickable
    function makeClickable(card) {
      const link = card.querySelector('.promo-group__title-link');
      if (!link) return;
      card.onclick = () => {
        link.click();
      };
    }

    cards.forEach((card) => {
      makeClickable(card);
    });
  });
}
