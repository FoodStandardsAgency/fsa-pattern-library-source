import './stickySidebar.html.twig';
import './stickySidebar.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.sticky-sidebar');
    if (!el) {
      return;
    }

    // The top position for the sidebar once fixed.
    const sidebarTopPosition = 18;
    // The margin-top value for the footer once fixed.
    const footerMarginTop = 54;

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

    // Get the position of the footer element if present
    function getFooterPosition(footer) {
      if (footer && footer.childElementCount !== 0) {
        return footer.offsetTop;
      } else {
        return null;
      }
    }

    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    const parent = el.parentNode;
    const footer = document.querySelector('.content-layout__footer');

    let mode = getMode();
    let footerTop = getFooterPosition(footer);

    window.addEventListener('resize', () => {
      mode = getMode();
      footerTop = getFooterPosition(footer);
      changeSidebarWidth(parent, el, mode);
    });

    window.addEventListener('scroll', () => {
      mode = getMode();
      if (mode === 'desktop') {
        const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        // If there is a footer
        if (footerTop) {
          // If the scroll position is between the top of the page and the top of the footer, fix the sidebar
          if ((scrollTop + sidebarTopPosition >= top) && (scrollTop + footerMarginTop <= footerTop)) {
            el.classList.add('sticky-sidebar--fixed');
            el.classList.remove('sticky-sidebar--bottom');
            changeSidebarWidth(parent, el, mode);
          }
          // If the scroll position is past the footer, move the sidebar to the bottom.
          else if (scrollTop + footerMarginTop > footerTop) {
            el.classList.add('sticky-sidebar--bottom');
            el.classList.remove('sticky-sidebar--fixed');
            changeSidebarWidth(parent, el, mode);
          }
          // Otherwise, return the sidebar to the top of the page
          else {
            el.classList.remove('sticky-sidebar--fixed');
            el.classList.remove('sticky-sidebar--bottom');
            changeSidebarWidth(parent, el, mode);
          }
        }
        // If there isn't a footer
        else {
          // If the scroll position is below the top of the page, fix the sidebar
          if (scrollTop + sidebarTopPosition >= top) {
            el.classList.add('sticky-sidebar--fixed');
            changeSidebarWidth(parent, el, mode);
          }
          // Otherwise, return the sidebar to the top of the page
          else {
            el.classList.remove('sticky-sidebar--fixed');
            changeSidebarWidth(parent, el, mode);
          }
        }
      }
    });
  });
}