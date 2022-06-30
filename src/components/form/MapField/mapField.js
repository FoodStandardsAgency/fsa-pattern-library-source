import './mapField.html.twig';
import './mapField.scss';

export default function () {
  const mapField = document.querySelector('.map-field');
  if (!mapField) {
    return;
  }

  const mapButton = mapField.querySelector('.map-field__button input');
  const map = mapField.querySelector('.map-field__map');
  const isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);

  if (isIE) {
    mapButton.classList.add('map-field__button--hidden');
    map.classList.add('map-field__map--hidden');
  }
}
