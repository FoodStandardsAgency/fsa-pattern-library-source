import './webToolProgressBar.html.twig';
import './webToolProgressBar.scss';

export default function () {
  let DOMContentFirstLoad = true;
  window.addEventListener('DOMContentLoaded', function () {
    if (!DOMContentFirstLoad) {
      return;
    }

    DOMContentFirstLoad = false;

  });
}
