import './tooltip.scss';
import './tooltip.html.twig';
import { domContentLoadedWrapper } from '../../../helpers';

export default function () {
  function closeAllTooltips(except = null) {
    const openedTooltips = document.querySelectorAll('.tooltip__body-opened');

    for (const openedTooltip of openedTooltips) {
      if (except !== openedTooltip) {
        openedTooltip.classList.remove('tooltip__body-opened');
      }
    }
  }

  function handleTooltip(e) {
    e.preventDefault();

    const tooltip = e.target.closest('.tooltip');
    const body = tooltip.querySelector('.tooltip__body');

    closeAllTooltips(body);

    body.style.maxWidth = `${tooltip.getBoundingClientRect().left - 20}px`;

    body.classList.toggle('tooltip__body-opened');
  }

  function callback() {
    const questionMarks = document.querySelectorAll('.tooltip__question-mark');
    for (const questionMark of questionMarks) {
      questionMark.addEventListener('click', handleTooltip);
    }

    const closeMarks = document.querySelectorAll('.tooltip__close');
    for (const closeMark of closeMarks) {
      closeMark.addEventListener('click', handleTooltip);
    }

    document.addEventListener('click', function (e) {
      const tooltip = e.target.closest('.tooltip');

      if (!tooltip) {
        closeAllTooltips();
      }
    });
  }

  return domContentLoadedWrapper(callback);
}
