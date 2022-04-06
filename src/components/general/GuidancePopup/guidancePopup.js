import './guidancePopup.scss';
import './guidancePopup.html.twig';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function callback() {
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') {
        return;
      }

      document.querySelector('html').style.overflow = 'auto';

      const popups = document.querySelectorAll('.guidance-popup__opened');

      for (const popup of popups) {
        popup.classList.remove('guidance-popup__opened');
        popup.classList.remove('guidance-popup__compact');
      }
    });
  }

  return domContentLoadedWrapper(callback);
}

export function activatePopup(sourceElement, popup) {
  sourceElement.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('guidance-popup__opened');

    const adminToolbar = document.getElementById('toolbar-bar');
    if (adminToolbar) {
      popup.classList.add('guidance-popup__compact');
    }

    document.querySelector('html').style.overflow = 'hidden';
  });

  popup.querySelector('.guidance-popup__close').addEventListener('click', function (e) {
    e.preventDefault();
    const popup = e.target.closest('.guidance-popup');
    popup.classList.remove('guidance-popup__opened');
    popup.classList.remove('guidance-popup__compact');
    document.querySelector('html').style.overflow = 'auto';
  });
}
