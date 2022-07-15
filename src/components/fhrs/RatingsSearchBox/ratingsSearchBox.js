import './ratingsSearchBox.html.twig';
import './ratingsSearchBox.scss';

export default function () {
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
  const businessField = ratingsSearchBox.querySelector('.ratings-search-box__business-name');
  const locationContainer = ratingsSearchBox.querySelector('.ratings-search-box__location-toggle');
  const blockedLabel = locationContainer.getAttribute('data-blocked-location');
  locationToggle.addEventListener('click', () => {
    const label = locationContainer.querySelector('label > span');
    if (locationToggle.getAttribute('aria-checked') === 'true') {
      locationInput.classList.add('ratings-search-box__location-search--closed');
      businessField.classList.add('ratings-search-box__business-name--full-width');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          locationField.value = position.coords.latitude + ',' + position.coords.longitude;
        },
        () => {
          label.innerText = blockedLabel;
          locationToggle.disabled = true;
          locationToggle.classList.add('toggle-button__button--disabled');
          locationToggle.ariaChecked = 'false';
          locationInput.classList.remove('ratings-search-box__location-search--closed');
          businessField.classList.remove('ratings-search-box__business-name--full-width');
        }
      );
    } else {
      locationInput.classList.remove('ratings-search-box__location-search--closed');
      businessField.classList.remove('ratings-search-box__business-name--full-width');
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
  const moreOptionsLabel = additionalOptionsLink.querySelector(
    '.ratings-search-box__more-search-options__label'
  );
  const moreOptionsLabelText = moreOptionsLabel.innerHTML;
  additionalOptionsLink.addEventListener('click', (e) => {
    e.preventDefault();
    const fewerOptionsLabelText = additionalOptionsLink.getAttribute('data-fewer-options-label');
    additionalOptions.classList.toggle('ratings-search-box__additional-options--open');
    additionalOptionsLinkArrow.classList.toggle(
      'ratings-search-box__more-search-options__arrow--open'
    );
    if (additionalOptions.getAttribute('aria-expanded') === 'true') {
      additionalOptions.ariaExpanded = 'false';
      moreOptionsLabel.innerHTML = moreOptionsLabelText;
    } else {
      additionalOptions.ariaExpanded = 'true';
      moreOptionsLabel.innerHTML = fewerOptionsLabelText;
    }
  });

  // If hygiene rating or status dropdowns are used, automatically check the radio button
  const hygieneRatingSelect = ratingsSearchBox.querySelector('#hygiene_rating');
  const hygieneRatingRadio = ratingsSearchBox.querySelector('#rating');

  const hygieneStatusSelect = ratingsSearchBox.querySelector('#hygiene_status');
  const hygieneStatusRadio = ratingsSearchBox.querySelector('#status');

  if (hygieneStatusRadio || hygieneRatingRadio) {
    hygieneRatingSelect.addEventListener('change', () => {
      hygieneRatingRadio.checked = true;
    });

    hygieneStatusSelect.addEventListener('change', () => {
      hygieneStatusRadio.checked = true;
    });
  }
}
