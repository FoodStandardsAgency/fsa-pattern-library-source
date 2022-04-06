import './textBlock.html.twig';
import './textBlock.scss';

export default function () {
  window.addEventListener(
    'DOMContentLoaded',
    function () {
      const textBlocks = document.querySelectorAll('.text-block');
      if (!textBlocks) {
        return;
      }

      // Get table header positions, i.e. none, mixed, left column or top row
      function getTableHeaderType(table) {
        const th = table.querySelectorAll('th');
        if (th.length === 0) {
          return 'none';
        } else {
          const scopes = [];
          th.forEach((header) => {
            if (header.hasAttribute('scope')) {
              const scope = header.getAttribute('scope').toString();
              scopes.push(scope);
            }
          });
          if (scopes.includes('col') && scopes.includes('row')) {
            return 'mixed';
          } else if (scopes.includes('col')) {
            return 'column';
          } else if (scopes.includes('row')) {
            return 'row';
          }
        }
      }

      // Get the table header associated with the specified cell and add in a span to the cell
      function getAssocHeader(table, cell, headerCell) {
        if (!headerCell) {
          return;
        }
        const headerLabel = headerCell.innerHTML;
        const header = document.createElement('span');
        header.classList.add('responsive-table__heading');
        headerCell.setAttribute('aria-hidden', 'true');
        header.innerHTML = headerLabel;
        cell.insertAdjacentElement('afterbegin', header);
      }

      textBlocks.forEach((block) => {
        const tables = block.querySelectorAll('table');
        tables.forEach((table) => {
          table.classList.add('fsa-table');
          const type = getTableHeaderType(table);
          const tr = table.querySelectorAll('tbody tr');
          const th = table.querySelectorAll('tbody tr th');
          const td = table.querySelectorAll('tbody tr td');
          switch (type) {
            case 'none':
              table.classList.add('fsa-table--no-headers');
              break;
            case 'mixed':
            case 'column':
              table.classList.add('fsa-table--column');
              tr.forEach((row) => {
                row.setAttribute('role', 'row');
              });
              td.forEach((cell) => {
                cell.setAttribute('role', 'cell');
                const headerCell = table.rows[0].cells[cell.cellIndex];
                getAssocHeader(table, cell, headerCell);
              });
              break;
            case 'row':
              table.classList.add('fsa-table--rows');
              th.forEach((heading) => {
                heading.classList.add('fsa-table__heading--hidden');
              });
              tr.forEach((row) => {
                row.setAttribute('role', 'row');
              });
              td.forEach((cell) => {
                cell.setAttribute('role', 'cell');
                const row = cell.parentNode.rowIndex;
                const headerCell = table.rows[row].cells[0];
                getAssocHeader(table, cell, headerCell);
              });
              break;
          }
        });
      });
    },
    { once: true }
  );
}
