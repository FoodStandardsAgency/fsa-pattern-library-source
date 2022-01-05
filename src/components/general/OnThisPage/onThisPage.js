import './onThisPage.html.twig';
import './onThisPage.scss';

export default function () {
  let DOMContentFirstLoad = true;
  window.addEventListener('DOMContentLoaded', function () {
    if (DOMContentFirstLoad) {
      DOMContentFirstLoad = false;
      return;
    }

    const sideNav = document.querySelector('.on-this-page');
    const sideNavParent = sideNav.parentElement;

    if (sideNav && sideNavParent) {
      function fixSideNav() {
        const parentTop = sideNavParent.getBoundingClientRect().top;
        const rem = parseInt(getComputedStyle(document.documentElement).fontSize);

        if (parentTop <= rem * 2) {
          sideNav.classList.add('on-this-page--sticky');
        } else {
          sideNav.classList.remove('on-this-page--sticky');
        }
      }

      window.addEventListener('scroll', fixSideNav);
    }
  });
}
