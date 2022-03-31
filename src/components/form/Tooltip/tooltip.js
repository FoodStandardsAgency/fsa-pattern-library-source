import './tooltip.scss';
import './tooltip.html.twig';
import { domContentLoadedWrapper } from '../../../helpers';
import {activatePopup} from '../../general/GuidancePopup/guidancePopup';

export default function () {
  function callback() {
    const tooltips = document.querySelectorAll('.tooltip');

    for (const tooltip of tooltips) {
      activateTooltip(tooltip);
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

export function activateTooltip(tooltip) {
  const questionMark = tooltip.querySelector('.tooltip__question-mark');
  const closeMark = tooltip.querySelector('.tooltip__close');
  const guidancePopup = tooltip.querySelector('.guidance-popup');

  questionMark.addEventListener('click', handleTooltip);
  closeMark.addEventListener('click', handleTooltip);

  if (guidancePopup) {
    const openLink = tooltip.querySelector('.tooltip__popup-open');
    activatePopup(openLink, guidancePopup);
  }
}

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
