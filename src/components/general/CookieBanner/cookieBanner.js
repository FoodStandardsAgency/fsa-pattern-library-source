import './cookieBanner.html.twig';
import './cookieBanner.scss';

export default function () {
  let DOMContentFirstLoad = true;

  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }

    const acceptButton = document.querySelector('.cookie-banner__accept');
    if (!acceptButton) return;
    
    acceptButton.addEventListener('click', () => {
      const cookieBanner = document.querySelector('.cookie-banner');
      if (!cookieBanner) return;
      cookieBanner.classList.add('cookie-banner--hidden');
    })
  });
}
