import { domContentLoadedWrapper } from '@components/helpers';

let navigation;

function callback() {
  navigation = document.querySelector('#navigation');
}

if (document.readyState === 'loading') {
  domContentLoadedWrapper(callback);
} else {
  navigation = document.querySelector('#navigation');
}

const focusableElements =
  'a[href], button:not(.navigation__group-title--mobile), input:not(.js-form-submit), select, textarea, [tabindex]:not([tabindex="-1"])';

function getMode() {
  return window.innerWidth < 1024 ? 'mobile' : 'desktop';
}

function menuFocus(direction, event, link, classes, submenu = null, button = null) {
  if (direction === 'out') {
    if (link.contains(event.relatedTarget)) {
      return;
    }
    link.classList.remove(classes.linkOpen);
    button.setAttribute('aria-expanded', 'false');
    if (submenu) {
      submenu.classList.remove(classes.subMenuOpen);
      blurBackground(navigation);
    }
  }
  if (direction === 'in') {
    link.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        link.classList.remove(classes.linkOpen);
        button.setAttribute('aria-expanded', 'false');
        if (submenu) {
          submenu.classList.remove(classes.subMenuOpen);
          blurBackground(navigation);
        }
      }
    });
  }
}

function resetArrows() {
  const arrows = document.querySelectorAll('.navigation__link__arrow--flipped');
  arrows.forEach((arrow) => {
    arrow.classList.remove('navigation__link__arrow--flipped');
  });
}

function subMenuFocus(direction, event, link, classes, parent = null, submenu = null) {
  if (direction === 'out') {
    if (parent.contains(event.relatedTarget)) {
      return;
    }
    link.classList.remove(classes.linkOpen);
    link.setAttribute('aria-expanded', 'false');
    resetArrows();
    if (submenu) {
      submenu.classList.remove(classes.subMenuOpen);
      blurBackground(navigation);
    }
  }
  if (direction === 'in') {
    link.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        link.classList.remove(classes.linkOpen);
        link.setAttribute('aria-expanded', 'false');
        if (submenu) {
          submenu.classList.remove(classes.subMenuOpen);
          blurBackground(navigation);
        }
      }
    });
  }
}

function prevAll(element) {
  var result = [];

  element = element.previousElementSibling;
  while (element) {
    result.push(element);
    element = element.previousElementSibling;
  }
  return result;
}

function nextAll(element) {
  var result = [];

  element = element.nextElementSibling;
  while (element) {
    result.push(element);
    element = element.nextElementSibling;
  }
  return result;
}

function menuArrows(links) {
  links.forEach((link) => {
    const primarySubMenu = link.querySelector('.navigation__submenu');
    let prev = [];
    let next = [];
    link.addEventListener('keydown', (e) => {
      if ([37, 38, 39, 40].indexOf(e.keyCode) === -1) {
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
          if (prev && getMode() === 'desktop') {
            if (prev.querySelector('button')) {
              prev.querySelector('button').focus();
            } else {
              prev.querySelector('a').focus();
            }
            const submenu = prev.querySelector('.navigation__submenu');
            //open submenu
            if (submenu) {
              prev.classList.add('navigation__link--open');
              submenu.classList.add('navigation__submenu--expanded');
              blurBackground(navigation);
            }
          }
          break;
        case 39: // right arrow
          // Focus on the next item in the top level
          next = nextAll(link)[0];
          if (next && getMode() === 'desktop') {
            next.querySelector('button').focus();
            const submenu = next.querySelector('.navigation__submenu');
            if (submenu) {
              next.classList.add('navigation__link--open');
              submenu.classList.add('navigation__submenu--expanded');
              blurBackground(navigation);
            }
          }
          break;
        case 40: // down arrow
          // If there is a UL available, place focus on the first focusable element within
          next = nextAll(link)[0];
          if (primarySubMenu && getMode() === 'desktop') {
            link.classList.add('navigation__link--open');
            primarySubMenu.classList.add('navigation__submenu--expanded');
            primarySubMenu.querySelectorAll(focusableElements)[0].focus();
            blurBackground(navigation);
          }
          break;
      }
    });
  });
}

function subMenuArrows(group) {
  const links = group.querySelectorAll('.navigation__link');
  const parentButton = group.parentNode.previousSibling.previousSibling;
  const firstElement = group.parentNode.querySelector(
    '.navigation__group >  .navigation__menu-wrapper > .navigation__menu > .navigation__link > a'
  );
  const submenu = group.parentNode;
  const parentLink = group.parentNode.parentNode;
  links.forEach((link) => {
    link.addEventListener('keydown', (e) => {
      if ([37, 38, 39, 40].indexOf(e.keyCode) === -1) {
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
          if (link.querySelector('a') === firstElement) {
            parentButton.focus();
            parentLink.classList.remove('navigation__link--open');
            submenu.classList.remove('navigation__submenu--expanded');
            blurBackground(navigation);
          } else if (prevAll(link)[0]) {
            prevAll(link)[0].querySelector('a').focus();
          } else if (prevAll(group)[0]) {
            const sibLinks = prevAll(group)[0].querySelectorAll(
              '.navigation__menu > .navigation__link > a'
            );
            sibLinks[sibLinks.length - 1].focus();
          }
          break;
        case 40: // down arrow
          if (nextAll(link)[0]) {
            nextAll(link)[0].querySelector('a').focus();
          } else if (nextAll(group)[0]) {
            const sibLinks = nextAll(group)[0].querySelectorAll(
              '.navigation__menu > .navigation__link > a'
            );
            sibLinks[0].focus();
          }
          break;
      }
    });
  });
}

function blurBackground(navigation) {
  const mode = getMode();
  if (mode === 'desktop') {
    const backgroundBlur = navigation.querySelector('.navigation__background-blur');
    const body = document.body;
    const html = document.documentElement;
    // Height of page
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    // Navigation distance from top
    const distanceFromTop = window.pageYOffset + navigation.getBoundingClientRect().top;
    const navHeight = navigation.offsetHeight;
    if (navigation.querySelector('.navigation__submenu--expanded')) {
      backgroundBlur.classList.add('navigation__background-blur--blurred');
      backgroundBlur.style.height = height - distanceFromTop - navHeight + 'px';
    } else {
      backgroundBlur.classList.remove('navigation__background-blur--blurred');
    }
  }
}

export { getMode, menuFocus, subMenuFocus, menuArrows, subMenuArrows, blurBackground };
