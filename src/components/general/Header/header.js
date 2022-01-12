import './header.html.twig';
import './header.scss';
import 'element-closest-polyfill';

export default function () {
    window.addEventListener('DOMContentLoaded', function () {
    let mode = window.innerWidth < 1024 ? 'mobile' : 'desktop';
    window.addEventListener('resize', () => {
      mode = window.innerWidth < 1024 ? 'mobile' : 'desktop';
    });

    const languageSwitcherMobile = document.querySelector('.header__languages--mobile');
    const languageSwitcherDesktop = document.querySelector('.header__languages--desktop');
    if (languageSwitcherMobile && languageSwitcherDesktop) {
      if (mode == 'mobile') {
        //languageSwitcherMobile.setAttribute('aria-hidden', false);
        //languageSwitcherDesktop.setAttribute('aria-hidden', true);
      } else if (mode == 'desktop') {
        //languageSwitcherMobile.setAttribute('aria-hidden', true);
        //languageSwitcherDesktop.setAttribute('aria-hidden', false);
      }
    }
    const menuButton = document.querySelector('.header__menu');
    if (!menuButton) return;

    const body = document.body;

    menuButton.addEventListener('click', toggleButton);
    function toggleButton() {
      const expanded = menuButton.getAttribute('aria-expanded');
      if (expanded === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        body.classList.remove('lock-scroll');
      } else {
        menuButton.setAttribute('aria-expanded', 'true');
        body.classList.add('lock-scroll');
      }

      const header = menuButton.closest('.header');
      header.classList.toggle('header--expanded');
    }
  }, { once: true });
}
