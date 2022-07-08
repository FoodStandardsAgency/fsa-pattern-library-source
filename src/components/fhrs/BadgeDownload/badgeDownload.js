import './badgeDownload.html.twig';
import './badgeDownload.scss';

export default function () {
  const badgeDownload = document.querySelector('.badge-download');
  // Map related - uncomment when FSA confirm whether it should be added to search
  // const isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);

  if (!badgeDownload) {
    return;
  }

  const badges = badgeDownload.querySelectorAll('.badge-download__badge-wrapper');

  badges.forEach((badge) => {
    const codeWrapper = badge.querySelector('.badge-download__code-wrapper');
    const codeButton = badge.querySelector('.badge-download__code-button');
    codeButton.addEventListener('click', () => {
      codeWrapper.classList.toggle('badge-download__code-wrapper--open');
      if (codeButton.getAttribute('aria-expanded') === 'true') {
        codeButton.setAttribute('aria-expanded', false);
      } else {
        codeButton.setAttribute('aria-expanded', true);
      }
    });
  });
}
