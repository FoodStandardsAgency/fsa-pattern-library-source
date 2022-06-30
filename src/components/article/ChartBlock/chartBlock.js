import './chartBlock.html.twig';
import './chartBlock.scss';

export default function () {
  const el = document.querySelectorAll('.chart-block');
  if (!el) {
    return;
  }

  for (const chartBlock of el) {
    const tableButton = chartBlock.querySelector('.chart-block__switch-button--table');
    const chartButton = chartBlock.querySelector('.chart-block__switch-button--chart');
    const image = chartBlock.querySelector('.chart-block__image');
    const content = chartBlock.querySelector('.chart-block__content');
    if (!tableButton || !chartButton || !image || !content) {
      return;
    }

    const toggleVisibility = function () {
      [tableButton, chartButton, image, content].forEach((element) => {
        element.classList.toggle('hide');
      });
    };

    tableButton.addEventListener('click', toggleVisibility);
    chartButton.addEventListener('click', toggleVisibility);
  }
}
