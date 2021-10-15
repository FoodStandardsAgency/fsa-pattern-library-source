import './breadcrumb.scss';
import './breadcrumb.html.twig';

export default function () {
  // Toggles the expanded class to expand the breadcrumb or not
  function toggleBreadcrumb(breadcrumb, mobileOverlay) {
    if (breadcrumb.classList.contains('expanded')) {
      breadcrumb.classList.remove('expanded');
    } else {
      breadcrumb.classList.add('expanded');
    }
    if (mobileOverlay.ariaExpanded === 'true') {
      mobileOverlay.setAttribute('aria-expanded', 'false');
    } else {
      mobileOverlay.setAttribute('aria-expanded', 'true');
    }
  }

  // Toggles the overflowed class to handle the overflow on the breadcrumb 
  // depending on screensizes
  function overflow(breadcrumb, breadcrumbItems, breadcrumbLength) {
    if (!breadcrumb.classList.contains('expanded')) {
      if (breadcrumbLength > breadcrumbItems.clientWidth) {
        breadcrumbItems.classList.add('overflowed');
      } else {
        breadcrumbItems.classList.remove('overflowed');
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    const mobileOverlay = document.querySelector('.breadcrumb__mobile-overlay');
    const breadcrumb = document.querySelector('.breadcrumb');
    const breadcrumbItems = document.querySelector('.breadcrumb__items');
    if(!mobileOverlay && !breadcrumbItems) return;

     // Calculates the length of the breadcrumb (+ some extra spacing for the separators)
     let breadcrumbLength = 0;
     const breadcrumbItemList = document.querySelectorAll('.breadcrumb__item');
     breadcrumbItemList.forEach((item) => {
       breadcrumbLength += item.clientWidth + 10;
     });

    // Handles the expanded toggle with both click & keyboard (enter)
    mobileOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleBreadcrumb(breadcrumb, mobileOverlay);
    });
    mobileOverlay.addEventListener('keyUp', (e) => {
      const keyCode = (e.keyCode ? e.keyCode : e.which);
      if (keyCode === 13) {
        toggleBreadcrumb(breadcrumb, mobileOverlay);
      }
    });

    //-- Overflow state
    // Upon resize, check if the breadcrumb length is bigger than the visible part of the breadcrumb
    window.addEventListener('resize', () => {
      overflow(breadcrumb, breadcrumbItems, breadcrumbLength);
    });
    // Triggers it once upon first load
    overflow(breadcrumb, breadcrumbItems, breadcrumbLength);
  });

  
}

