import updateParams from '../../../helpers/updateParams';

import './sortBy.html.twig';
import './sortBy.scss';

export default function () {
  const el = document.querySelector('.sort');
  if (!el) {
    return;
  }

  const sortBy = el.querySelector('select');
  sortBy.addEventListener('change', (e) => {
    e.preventDefault();
    updateParams('sort', sortBy.value);
  });
}
