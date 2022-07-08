import './backToTop.html.twig';
import './backToTop.scss';
import smoothscroll from 'smoothscroll-polyfill';

export default function () {
  smoothscroll.polyfill();
  const backToTop = document.querySelector('.back-to-top__link');
  if (!backToTop) {
    return;
  }

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });
}
