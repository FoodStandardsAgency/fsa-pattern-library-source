const focusableElements =
  'button, [href]:not(.navigation__group-title--mobile), input:not(.js-form-submit), select, textarea, [tabindex]:not([tabindex="-1"])';

function getMode() {
  return window.innerWidth < 1024 ? 'mobile' : 'desktop';
}

function menuFocus(direction, event, link, classes, submenu = null, anchor = null) {
  if (direction == 'out') {
    if (link.contains(event.relatedTarget)) {
      return;
    }
    link.classList.remove(classes.linkOpen);
    link.setAttribute('aria-expanded', 'false');
    if (submenu) {
      submenu.classList.remove(classes.subMenuOpen);
    }
  }
  if (direction == 'in') {
    link.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        link.classList.remove(classes.linkOpen);
        link.setAttribute('aria-expanded', 'false');
        if (submenu) {
          submenu.classList.remove(classes.subMenuOpen);
        }
        if (anchor) {
          anchor.focus();
        }
      }
    });
  }
}

function resetArrows() {
  const arrows = document.querySelectorAll('.navigation__link__arrow--flipped');
  arrows.forEach(arrow => {
    arrow.classList.remove('navigation__link__arrow--flipped');
  });
}

function subMenuFocus(direction, event, link, classes, parent = null, submenu = null) {
  if (direction == 'out') {
    if (parent.contains(event.relatedTarget)) {
      return;
    }
    link.classList.remove(classes.linkOpen);
    link.setAttribute('aria-expanded', 'false');
    resetArrows();
    if (submenu) {
      submenu.classList.remove(classes.subMenuOpen);
    }
  }
  if (direction == 'in') {
    link.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        link.classList.remove(classes.linkOpen);
        link.setAttribute('aria-expanded', 'false');
        if (submenu) {
          submenu.classList.remove(classes.subMenuOpen);
        }
        if (anchor) {
          anchor.focus();
        }
      }
    });
  }
}

function prevAll(element) {
  var result = [];

  while (element = element.previousElementSibling) {
    result.push(element);
  }
  return result;
}

function nextAll(element) {
  var result = [];

  while (element = element.nextElementSibling) {
    result.push(element);
  }
  return result;
}

function menuArrows(links) {
  links.forEach((link) => {
    const primarySubMenu = link.querySelector('.navigation__submenu');
    let prev = [];
    let next = [];
    link.addEventListener('keydown', e => {
      if ([37, 38, 39, 40].indexOf(e.keyCode) == -1) {
        return;
      }
      // Make sure to stop event bubbling
      e.preventDefault();
      e.stopPropagation();
      switch (e.keyCode) {
        case 37: // left arrow
          // This is the first item in the top level mega menu list
          // Focus on the previous item in the top level
          prev = prevAll(link)[0];
          if (prev && getMode() == 'desktop') {
            prev.querySelector('a').focus();
            const submenu = prev.querySelector('.navigation__submenu');
            //open submenu
            if (submenu) {
              prev.classList.add('navigation__link--open');
              submenu.classList.add('navigation__submenu--expanded');
            }
          }
          break;
        case 39: // right arrow
          // Focus on the next item in the top level
          next = nextAll(link)[0];
          if (next && getMode() == 'desktop') {
            next.querySelector('a').focus();
            const submenu = next.querySelector('.navigation__submenu');
            if (submenu) {
              next.classList.add('navigation__link--open');
              submenu.classList.add('navigation__submenu--expanded');
            }
          }
          break;
        case 40: // down arrow
          // If there is a UL available, place focus on the first focusable element within
          next = nextAll(link)[0];
          if (primarySubMenu && getMode() == 'desktop') {
            link.classList.add('navigation__link--open');
            primarySubMenu.classList.add('navigation__submenu--expanded');
            primarySubMenu.querySelectorAll(focusableElements)[0].focus();
          }
          break;
      }
    });
  });
}

function subMenuArrows(group) {
  const links = group.querySelectorAll('.navigation__link');
  const topLevel = group.parentNode.parentNode;
  const submenu = topLevel.querySelector('.navigation__submenu');
  const firstElement = group.parentNode.querySelector('.navigation__group > .navigation__menu > .navigation__link > a');
  links.forEach((link) => {
    link.addEventListener('keydown', e => {
      if ([37, 38, 39, 40].indexOf(e.keyCode) == -1) {
        return;
      }
      // Make sure to stop event bubbling
      e.preventDefault();
      e.stopPropagation();
      switch (e.keyCode) {
        case 37: // left arrow
          if (prevAll(group)[0]) {
            prevAll(group)[0].querySelector('.navigation__menu > .navigation__link > a').focus();
          }
          break;
        case 39: // right arrow
          if (nextAll(group)[0]) {
            nextAll(group)[0].querySelector('.navigation__menu > .navigation__link > a').focus();
          }
          break;
        case 38: /// up arrow
          if (link.querySelector('a') == firstElement) {
            topLevel.querySelector('a').focus();
            topLevel.classList.remove('navigation__link--open');
            submenu.classList.remove('navigation__submenu--expanded');
          } else if (prevAll(link)[0]) {
            prevAll(link)[0].querySelector('a').focus();
          } else if (prevAll(group)[0]) {
            const sibLinks = prevAll(group)[0].querySelectorAll('.navigation__menu > .navigation__link > a');
            sibLinks[sibLinks.length - 1].focus();
          }
          break;
        case 40: // down arrow
          if (nextAll(link)[0]) {
            nextAll(link)[0].querySelector('a').focus();
          } else if (nextAll(group)[0]) {
            const sibLinks = nextAll(group)[0].querySelectorAll('.navigation__menu > .navigation__link > a');
            sibLinks[0].focus();
          }
          break;
      }
    });
  });
}

export {
  getMode,
  menuFocus,
  subMenuFocus,
  menuArrows,
  subMenuArrows
}