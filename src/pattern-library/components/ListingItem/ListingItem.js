import './listingItem.scss';
import './listingItem.html.twig';

export default function () {

  window.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.listing-item__content');
    if (!cards) return;

    cards.forEach(card => {
      card.addEventListener('click', (event) => {
        event.stopPropagation();
        const link = card.querySelector('.listing-item__title a');
        link.click();
      })
    })
  });
}