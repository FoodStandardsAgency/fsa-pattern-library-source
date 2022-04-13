import './tooltip.scss';
import './tooltip.html.twig';
import { domContentLoadedWrapper } from '../../../helpers';
import { activatePopup } from '../../general/GuidancePopup/guidancePopup';

export default function () {
  function callback() {
    document.addEventListener('click', activateTooltip);

    document.addEventListener('click', closeTooltipAfterActivityOutside);
    document.addEventListener('focusin', closeTooltipAfterActivityOutside);
  }

  return domContentLoadedWrapper(callback);
}

function activateTooltip(e) {
  const tooltip = e.target.closest('.tooltip');

  if (!tooltip) {
    return;
  }

  if (tooltip.hasAttribute('pl-listener-assigned')) {
    return;
  }

  e.preventDefault();

  tooltip.setAttribute('pl-listener-assigned', '1');

  const questionMark = tooltip.querySelector('.tooltip__question-mark');
  const closeMark = tooltip.querySelector('.tooltip__close');
  const guidancePopup = tooltip.querySelector('.guidance-popup');

  questionMark.addEventListener('click', handleTooltip);
  closeMark.addEventListener('click', handleTooltip);

  if (guidancePopup) {
    const openLink = tooltip.querySelector('.tooltip__popup-open');
    activatePopup(openLink, guidancePopup);
  }

  questionMark.dispatchEvent(new Event('click'));
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

  // Used to provide the proper space from left side of a tooltip.
  const oneMobileRem = 16;
  const oneDesktopRem = 18;
  const borders = 4;

  // Min width of a tooltip.
  const minWidth = 100;

  const tooltipWrapper = tooltip.closest('.label-with-tooltip');

  const parentWidth = tooltipWrapper ? tooltipWrapper.offsetWidth : tooltip.parentNode.offsetWidth;

  if (window.innerWidth < 1024) {
    body.style.width = `${parentWidth - oneMobileRem - borders}px`;
  } else {
    body.style.maxWidth = `${Math.max(minWidth, parentWidth - oneDesktopRem - borders)}px`;
  }

  body.classList.toggle('tooltip__body-opened');
}

function closeTooltipAfterActivityOutside(e) {
  const activeTooltip = document.querySelector('.tooltip__body-opened');

  if (!activeTooltip) {
    return;
  }

  const element = e.target.closest('.tooltip');

  if (!element || element !== activeTooltip.closest('.tooltip')) {
    closeAllTooltips();
  }
}
