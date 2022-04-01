import './guidancePopup.scss';
import './guidancePopup.html.twig';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') {
        return;
      }

      const popups = document.querySelectorAll('.guidance-popup__opened');

      for (const popup of popups) {
        popup.classList.remove('guidance-popup__opened');
      }
    });
  }

  return domContentLoadedWrapper(callback);
}

export function activatePopup(sourceElement, popup) {
  sourceElement.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('guidance-popup__opened');
  });

  popup.querySelector('.guidance-popup__close').addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('.guidance-popup').classList.remove('guidance-popup__opened');
  });
}
