import './chartBlock.html.twig';
import './chartBlock.scss';

export default function () {
  let DOMContentFirstLoad = true;
  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }

    const el = document.querySelector('.chart-block');
    if (!el) {
      return;
    }

    const tableButton = el.querySelector('.chart-block__switch-button--table');
    const chartButton = el.querySelector('.chart-block__switch-button--chart');
    const image = el.querySelector('.chart-block__image');
    const content = el.querySelector('.chart-block__content');
    if (!tableButton || !chartButton || !image || !content) {
      return;
    }

    function toggleVisibility() {
      [tableButton, chartButton, image, content].forEach((element) => {
        element.classList.toggle('hide');
      });
    }

    tableButton.addEventListener('click', toggleVisibility);
    chartButton.addEventListener('click', toggleVisibility);
  });
}
