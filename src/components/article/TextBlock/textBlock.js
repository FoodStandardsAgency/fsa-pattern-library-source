import './textBlock.html.twig';
import './textBlock.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const textBlocks = document.querySelectorAll('.text-block');
    if (!textBlocks) {
      return;
    }
    // Get the table header associated with the specified cell and add in a span to the cell
    function getAssocHeader(table, cell) {
      const headerCell = table.rows[0].cells[cell.cellIndex];
      if (!headerCell) {
        return;
      }
      const headerLabel = headerCell.innerHTML;
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
