import './textBlock.html.twig';
import './textBlock.scss';

export default function () {
  let DOMContentFirstLoad = true;
  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }
    const textBlocks = document.querySelectorAll('.text-block');
    if (!textBlocks) {
      return;
    }
    // Get the table header associated with the specified cell and add in a span to the cell
    function getAssocHeader(table, cell) {
      const headerLabel = table.rows[0].cells[cell.cellIndex].innerHTML;
      const header = document.createElement('span');
      header.classList.add('responsive-table__heading');
      header.setAttribute('aria-hidden', 'true');
      header.innerHTML = headerLabel;
      cell.insertAdjacentElement('afterbegin', header);
    }
    textBlocks.forEach((block) => {
      const tables = block.querySelectorAll('table');
      tables.forEach((table) => {
        const tr = table.querySelectorAll('tbody tr');
        const th = table.querySelectorAll('tbody th');
        const td = table.querySelectorAll('tbody tr td');
        th.forEach((heading) => {
          getAssocHeader(table, heading);
        });
        tr.forEach((row) => {
          row.setAttribute('role', 'row');
        });
        td.forEach((cell) => {
          cell.setAttribute('role', 'cell');
          getAssocHeader(table, cell);
        });
      });
    });
  });
}
