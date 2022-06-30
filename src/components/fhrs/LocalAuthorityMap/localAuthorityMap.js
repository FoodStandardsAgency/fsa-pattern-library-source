import './localAuthorityMap.html.twig';
import './localAuthorityMap.scss';
import placeholderMap from './assets/fhrs-map.svg';
import imageMapResize from 'image-map-resizer';

export default function () {
  const localAuthorityMap = document.querySelector('.local-authority-map');

  if (!localAuthorityMap) {
    return;
  }

  // Set placeholder map
  const map = localAuthorityMap.querySelector('img');
  map.src = placeholderMap;

  // Resize image map automatically
  imageMapResize();
}
