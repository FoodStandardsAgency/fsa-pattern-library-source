import './cookieBanner.html.twig';
import './cookieBanner.scss';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    const acceptButton = document.querySelector('.cookie-banner__accept');
    if (!acceptButton) return;

    acceptButton.addEventListener('click', () => {
      const cookieBanner = document.querySelector('.cookie-banner');
      if (cookieBanner) {
        cookieBanner.classList.add('cookie-banner--hidden');
      }
    });
  }

  return domContentLoadedWrapper(callback);
}
