import './navigation.html.twig';
import './navigation.scss';

import { getMode, menuFocus, subMenuFocus, menuArrows, subMenuArrows } from './navigation-accessibility';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const navigation = document.querySelector('#navigation');
    if (!navigation) {
      return;
    }

    function setRole(menuWrappers, mode) {
      menuWrappers.forEach(menuWrapper => {
        if (mode == 'desktop') {
          menuWrapper.setAttribute('role', '');
        }
        else {
          menuWrapper.setAttribute('role', 'region');
        }
      });
    }

    // Set initial window size
    let mode = getMode();
    // Set appropriate roles
    const menuWrappers = document.querySelectorAll('.navigation__menu-wrapper');
    setRole(menuWrappers, mode);
    // Update window size on resize
    window.addEventListener('resize', () => {
      mode = getMode();
      setRole(menuWrappers, mode);
    });

    //Get top level menu
    const topLevel = navigation.querySelector('.navigation__menu--level-1');
    // Get all top level links
    const topLevelLinks = topLevel.querySelectorAll('.navigation__menu--level-1 > .navigation__link');

    // Initialise arrow navigation
    menuArrows(topLevelLinks);

    // Handle top level menu opening
    topLevelLinks.forEach((link) => {
      const submenu = link.querySelector(".navigation__submenu");
      if (submenu) {
        const button = link.querySelector('button');
        button.addEventListener('click', (e) => {
          navigation.querySelectorAll('.navigation-link--open').forEach(openItem => {
            if (openItem !== link) {
              openItem.classList.remove('navigation-link--open');
              const toggle = openItem.querySelector('button')
              if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
              }
            }
          });
          submenu.classList.toggle("navigation__submenu--expanded");
          submenu.setAttribute('aria-modal', 'true')
          button.setAttribute('aria-expanded', 'true');
          link.classList.toggle("navigation__link--open");
        });
        const classes = {
          linkOpen: 'navigation__link--open',
          subMenuOpen: 'navigation__submenu--expanded',
        };
        link.addEventListener('focusout', event => {
          menuFocus('out', event, link, classes, submenu, button);
        });
        link.addEventListener('focusin', event => {
          menuFocus('in', event, link, classes, submenu, button);
        });
      }
    });

    // Get all second level links
    const secondLevel = navigation.querySelectorAll('.navigation__submenu');
    // Handle submenu opening and navigation
    secondLevel.forEach((submenu) => {
      // Need to do this for each group
      const groups = submenu.querySelectorAll(".navigation__group");
      groups.forEach((group) => {
        const title = group.querySelector(".navigation__group-title--mobile");
        const thirdLevel = group.querySelector(".navigation__menu");
        // Init submenu arrows
        subMenuArrows(group);
        if (title) {
          const arrow = title.querySelector('.navigation__link__arrow');
          title.addEventListener('click', (e) => {
            thirdLevel.classList.toggle("navigation__menu--level-2--expanded");
            arrow.classList.toggle('navigation__link__arrow--flipped');
          });
          const classes = {
            linkOpen: 'navigation__link--open',
            subMenuOpen: 'navigation__menu--level-2--expanded',
          };
          group.addEventListener('focusout', event => {
            subMenuFocus('out', event, title, classes, group, thirdLevel);
          });
          group.addEventListener('focusin', event => {
            subMenuFocus('in', event, title, classes, group, thirdLevel);
          });
        }
      });
    });
  }, { once: true });
}