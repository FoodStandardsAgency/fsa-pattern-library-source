import './businessHero.html.twig';
import './businessHero.scss';

export default function () {
  const businessHero = document.querySelector('.business-hero');

  if (!businessHero) {
    return;
  }

  // Open map section
  const mapButton = businessHero.querySelector('.business-hero__map__button');

  if (mapButton) {
    const mapButtonArrow = businessHero.querySelector('.business-hero__map__arrow');
    const mapButtonText = businessHero.querySelector('.business-hero__map__button-label');
    const mapWrapper = businessHero.querySelector('.business-hero__map__wrapper');

    mapButton.addEventListener('click', (e) => {
      e.preventDefault();
      const showMapLabel = mapButtonText.getAttribute('data-show-map');
      const hideMapLabel = mapButtonText.getAttribute('data-hide-map');
      mapButtonArrow.classList.toggle('business-hero__map__arrow--open');
      mapWrapper.classList.toggle('business-hero__map__wrapper--open');
      if (mapButton.getAttribute('aria-expanded') === 'true') {
        mapButton.ariaExpanded = 'false';
        mapButtonText.innerHTML = showMapLabel;
      } else {
        mapButton.ariaExpanded = 'true';
        mapButtonText.innerHTML = hideMapLabel;
      }
    });
  }
}
