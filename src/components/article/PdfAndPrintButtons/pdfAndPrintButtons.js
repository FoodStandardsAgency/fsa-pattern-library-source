import './pdfAndPrintButtons.html.twig';
import './pdfAndPrintButtons.scss';
import { domContentLoadedWrapper } from '../../../domContentLoadedWrapper';

export default function () {
  function callback() {
    const el = document.querySelector('.pdf-and-print-buttons');
    if (!el) {
      return;
    }
    const printButton = el.querySelector('.pdf-and-print-buttons__button--print button');
    if (!printButton) {
      return;
    }
    printButton.addEventListener('click', () => {
      window.print();
    });
  }

  return domContentLoadedWrapper(callback);
}
