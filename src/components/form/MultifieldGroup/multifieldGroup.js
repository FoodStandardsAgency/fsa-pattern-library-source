import './multifieldGroup.html.twig';
import './multifieldGroup.scss';

import { domContentLoadedWrapper } from '../../../domContentLoadedWrapper';

export default function () {
  function callback() {
    const groups = document.querySelectorAll('.multifield-group');

    for (const group of groups) {
      // ...
    }
  }

  return domContentLoadedWrapper(callback);
}
