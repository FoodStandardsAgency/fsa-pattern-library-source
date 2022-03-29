import './webToolProgressBar.html.twig';
import './webToolProgressBar.scss';
import { domContentLoadedWrapper } from '../../../domContentLoadedWrapper';

export default function () {
  function callback() {
    const labels = document.querySelectorAll('.webtool-progress-bar__label');

    for (const label of labels) {
      label.addEventListener('click', function (e) {
        const parentLine = e.target.closest('.webtool-progress-bar__line');
        const isOpened = parentLine.classList.contains('webtool-progress-bar__line-opened');

        const lines = e.target
          .closest('.webtool-progress-bar')
          .querySelectorAll('.webtool-progress-bar__line');

        for (const line of lines) {
          line.classList.remove('webtool-progress-bar__line-opened');
        }

        if (isOpened) {
          return;
        }

        parentLine.classList.add('webtool-progress-bar__line-opened');
      });
    }
  }

  return domContentLoadedWrapper(callback);
}
