import './stickySidebar.html.twig';
import './stickySidebar.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.sticky-sidebar');
    if (!el) {
      return;
    }

    function getMode() {
      return window.innerWidth < 1024 ? 'mobile' : 'desktop';
    }

    function moveSidebar(mode, hero, leftRegion, el) {
      if (mode === 'desktop') {
        if (leftRegion.querySelector('.sticky-sidebar')) {
          return;
        }
        else {
          leftRegion.prepend(el);
        }
      }
      else {
        if (hero.nextElementSibling.classList.contains('sticky-sidebar')) {
          return;
        }
        else {
          hero.parentNode.insertBefore(el, hero.nextSibling);
        }
      }
    }

    function changeSidebarWidth(parent, el) {
      const computedStyle = getComputedStyle(parent);
      let parentWidth = parent.clientWidth;
      parentWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
      el.style.width = parentWidth + 'px';
    }

    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    const parent = el.parentNode;
    const hero = document.querySelector('.article-hero');
    const leftRegion = document.querySelector('.content-layout__left');

    let mode = getMode();
    if (mode === 'mobile') {
      moveSidebar(mode, hero, leftRegion, el);
    }

    window.addEventListener('resize', () => {
      mode = getMode();
      moveSidebar(mode, hero, leftRegion, el);
      changeSidebarWidth(parent, el);
    });

    window.addEventListener('scroll', () => {
      if (mode === 'desktop') {
        const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollTop + 18 >= top) {
          el.classList.add('sticky-sidebar--fixed');
          changeSidebarWidth(parent, el);
        } else {
          el.classList.remove('sticky-sidebar--fixed');
          changeSidebarWidth(parent, el);
        }
      }
    });
  });
}