import './stickySidebar.html.twig';
import './stickySidebar.scss';

export default function () {
  const el = document.querySelector('.sticky-sidebar');
  if (!el) {
    return;
  }

  // The top position for the sidebar once fixed.
  const sidebarTopPosition = 18;
  // The margin-top value for the footer once fixed.
  const contentFooterMarginTop = 54;
  // The margin-top value for the footer once fixed.
  const generalFooterMarginTop = 2;
  // The margin-top value for the footer once fixed.
  const relatedContentMarginTop = 30;

  // Work out whether the screensize is mobile/desktop
  function getMode() {
    return window.innerWidth < 1024 ? 'mobile' : 'desktop';
  }

  // Fixed elements are relative to the screen size. When the sidebar becomes fixed, check its parent's width and set its width to match.
  function changeSidebarWidth(parent, el, mode) {
    if (mode === 'mobile') {
      el.style.width = 'auto';
    } else {
      const computedStyle = getComputedStyle(parent);
      let parentWidth = parent.clientWidth;
      parentWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
      el.style.width = parentWidth + 'px';
    }
  }

  // Get the position of the element if present
  function getElementPosition(element) {
    if (element && element.childElementCount !== 0) {
      return element.offsetTop;
    } else {
      return null;
    }
  }

  const viewportOffset = el.getBoundingClientRect();
  const clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
  const initScrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const top = viewportOffset.top + initScrollTop - clientTop;
  const parent = el.parentNode;
  const contentFooter = document.querySelector('.content-layout__footer');
  const generalFooter = document.querySelector('.feedback');
  const relatedContent = document.querySelector('.related-content');
  const sidebarHeight = document.querySelector('.sticky-sidebar').offsetHeight;

  let mode = getMode();
  let contentFooterTop = getElementPosition(contentFooter);
  let relatedContentTop = getElementPosition(relatedContent);
  let generalFooterTop = getElementPosition(generalFooter);

  window.addEventListener('resize', () => {
    mode = getMode();
    contentFooterTop = getElementPosition(contentFooter);
    changeSidebarWidth(parent, el, mode);
  });

  function scrollAction(elementTop, elementMarginTop, scrollTop) {
    // If the scroll position is between the top of the page and the top of the element, fix the sidebar
    if (
      scrollTop + sidebarTopPosition >= top &&
      scrollTop + elementMarginTop + sidebarHeight <= elementTop
    ) {
      el.classList.add('sticky-sidebar--fixed');
      el.classList.remove('sticky-sidebar--bottom');
      changeSidebarWidth(parent, el, mode);
    }
    // If the scroll position is past the element, move the sidebar to the bottom.
    else if (scrollTop + elementMarginTop + sidebarHeight > elementTop) {
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

  window.addEventListener('scroll', () => {
    mode = getMode();
    if (mode === 'desktop') {
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      // If related content, sidebar needs to stop earlier than up to the footer
      if (relatedContentTop) {
        scrollAction(relatedContentTop, relatedContentMarginTop, scrollTop);
      }
      // If there is a content footer
      else if (contentFooterTop) {
        scrollAction(contentFooterTop, contentFooterMarginTop, scrollTop);
      }
      // If there isn't a footer, use the "global" footer
      // If there is a content footer
      else {
        scrollAction(generalFooterTop, generalFooterMarginTop, scrollTop);
      }
    }
  });
}
