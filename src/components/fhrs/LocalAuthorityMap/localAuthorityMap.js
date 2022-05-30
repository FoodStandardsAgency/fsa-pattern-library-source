import './localAuthorityMap.html.twig';
import './localAuthorityMap.scss';
import placeholderMap from './assets/fhrs-map.svg';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    const localAuthorityMap = document.querySelector('.local-authority-map');

    if (!localAuthorityMap) {
      return;
    }

    // Set placeholder map
    const map = localAuthorityMap.querySelector('img');
    map.src = placeholderMap;
  }
  return domContentLoadedWrapper(callback);
}
