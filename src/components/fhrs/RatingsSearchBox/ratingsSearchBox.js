import './ratingsSearchBox.html.twig';
import './ratingsSearchBox.scss';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    const ratingsSearchBox = document.querySelector('.ratings-search-box');
    // Map related - uncomment when FSA confirm whether it should be added to search
    // const isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);

    if (!ratingsSearchBox) {
      return;
    }

    // Use location
    const locationToggle = ratingsSearchBox.querySelector('#location-toggle');
    const locationInput = ratingsSearchBox.querySelector('.ratings-search-box__location-search');
    const locationField = ratingsSearchBox.querySelector('.ratings-search-box__location');
    locationToggle.addEventListener('click', () => {
      if (locationToggle.getAttribute('aria-checked') === 'true') {
        locationInput.classList.add('ratings-search-box__location-search--closed');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            locationField.value = position.coords.latitude + ',' + position.coords.longitude;
          },
          () => {
            alert('Location settings are blocked on this browser.');
          }
        );
      } else {
        locationInput.classList.remove('ratings-search-box__location-search--closed');
        locationField.value = '';
      }
    });
    // Map related - uncomment when FSA confirm whether it should be added to search
    // // Show results with map
    // const map = ratingsSearchBox.querySelector('.ratings-search-box__map');
    // const mapToggleContainer = ratingsSearchBox.querySelector('.ratings-search-box__map-toggle');
    // const mapToggle = ratingsSearchBox.querySelector('#map-toggle');
    //
    // if (isIE) {
    //   mapToggleContainer.classList.add('hidden');
    // }
    // else {
    //   mapToggle.addEventListener('click', () => {
    //     console.log('I am clicked');
    //     const hideLabel = mapToggleContainer.getAttribute('data-hide-button');
    //     const showLabel = mapToggleContainer.getAttribute('data-show-button');
    //     const label = mapToggleContainer.querySelector('label > span');
    //     if (mapToggle.getAttribute('aria-checked') === 'true') {
    //       map.classList.add('ratings-search-box__map--open');
    //       label.innerText = hideLabel;
    //     }
    //     else {
    //       map.classList.remove('ratings-search-box__map--open');
    //       label.innerText = showLabel;
    //     }
    //   })
    // }

    // Open additional search options
    const additionalOptionsLink = ratingsSearchBox.querySelector(
      '.ratings-search-box__more-search-options'
    );
    const additionalOptionsLinkArrow = ratingsSearchBox.querySelector(
      '.ratings-search-box__more-search-options__arrow'
    );
    const additionalOptions = ratingsSearchBox.querySelector(
      '.ratings-search-box__additional-options'
    );
    additionalOptionsLink.addEventListener('click', (e) => {
      e.preventDefault();
      additionalOptions.classList.toggle('ratings-search-box__additional-options--open');
      additionalOptionsLinkArrow.classList.toggle(
        'ratings-search-box__more-search-options__arrow--open'
      );
    });
  }

  return domContentLoadedWrapper(callback);
}
