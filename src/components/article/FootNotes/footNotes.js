import './footNotes.html.twig';
import './footNotes.scss';

import smoothscroll from 'smoothscroll-polyfill';

export default function () {
  smoothscroll.polyfill();
  const notes = document.querySelectorAll(
    '.foot-notes__link-list__item-link, .foot-notes__ref-link'
  );

  if (!notes.length) {
    return;
  }

  for (const note of notes) {
    note.addEventListener('click', (e) => {
      const id = e.target.getAttribute('href').substring(1);
      const ref = document.querySelector(`[id='${id}']`);

      if (ref) {
        window.scroll({ top: ref.offsetTop, left: 0, behavior: 'smooth' });
        window.location.hash = id;
      }

      e.preventDefault();
    });
  }
}
