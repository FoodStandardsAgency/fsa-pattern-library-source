import './stickySidebar.html.twig';
import './stickySidebar.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.sticky-sidebar');
    if (!el) {
      return;
    }

    // Work out whether the screensize is mobile/desktop
    function getMode() {
      return window.innerWidth < 1024 ? 'mobile' : 'desktop';
    }

    // Fixed elements are relative to the screen size. When the sidebar becomes fixed, check its parent's width and set its width to match.
    function changeSidebarWidth(parent, el, mode) {
      if (mode === 'mobile') {
        el.style.width = 'auto';
      }
      else {
        const computedStyle = getComputedStyle(parent);
        let parentWidth = parent.clientWidth;
        parentWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        el.style.width = parentWidth + 'px';
      }
    }

    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    const parent = el.parentNode;
    const hero = document.querySelector('.article-hero');
    const leftRegion = document.querySelector('.content-layout__left');

    let mode = getMode();

    window.addEventListener('resize', () => {
      mode = getMode();
      changeSidebarWidth(parent, el, mode);
    });

    window.addEventListener('scroll', () => {
      mode = getMode();
      if (mode === 'desktop') {
        const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollTop + 18 >= top) {
          el.classList.add('sticky-sidebar--fixed');
          changeSidebarWidth(parent, el, mode);
        } else {
          el.classList.remove('sticky-sidebar--fixed');
          changeSidebarWidth(parent, el, mode);
        }
      }
    });
  });
}