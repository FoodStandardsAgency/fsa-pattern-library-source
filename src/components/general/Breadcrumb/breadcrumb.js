import './breadcrumb.scss';
import './breadcrumb.html.twig';

export default function () {
  // Toggles the expanded class to expand the breadcrumb or not
  function toggleBreadcrumb(breadcrumbItems, mobileOverlay) {
    if (breadcrumbItems.classList.contains('expanded')) {
      breadcrumbItems.classList.remove('expanded');
    } else {
      breadcrumbItems.classList.add('expanded');
    }
    if (mobileOverlay.ariaExpanded === 'true') {
      mobileOverlay.setAttribute('aria-expanded', 'false');
    } else {
      mobileOverlay.setAttribute('aria-expanded', 'true');
    }
  }

  // Toggles the overflowed class to handle the overflow on the breadcrumb 
  // depending on screensizes
  function overflow(breadcrumbItems, breadcrumbLength) {
    if (!breadcrumbItems.classList.contains('expanded')) {
      if (breadcrumbLength > breadcrumbItems.clientWidth) {
        breadcrumbItems.classList.add('overflowed');
      } else {
        breadcrumbItems.classList.remove('overflowed');
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    const mobileOverlay = document.querySelector('.breadcrumb__mobile-overlay');
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
      toggleBreadcrumb(breadcrumbItems, mobileOverlay);
    });
    mobileOverlay.addEventListener('keyUp', (e) => {
      const keyCode = (e.keyCode ? e.keyCode : e.which);
      if (keyCode === 13) {
        toggleBreadcrumb(breadcrumbItems, mobileOverlay);
      }
    });

    //-- Overflow state
    // Upon resize, check if the breadcrumb length is bigger than the visible part of the breadcrumb
    window.addEventListener('resize', () => {
      overflow(breadcrumbItems, breadcrumbLength);
    });
    // Triggers it once upon first load
    overflow(breadcrumbItems, breadcrumbLength);
  });

  
}

