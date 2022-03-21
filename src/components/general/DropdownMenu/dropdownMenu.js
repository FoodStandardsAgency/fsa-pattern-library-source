import './dropdownMenu.scss';
import './dropdownMenu.html.twig';

export default function () {
    let DOMContentFirstLoad = true;
    window.addEventListener('DOMContentLoaded', function () {
        if (DOMContentFirstLoad) {
            DOMContentFirstLoad = false;
            return;
        }

        const dropdowns = document.querySelectorAll('.dropdown-menu__label');

        for (const dropdown of dropdowns) {
            dropdown.addEventListener('click', (e) => {
                const options = e.target.closest('.dropdown-menu').querySelector('.dropdown-menu__options');

                options.classList.toggle('dropdown-menu__options-open');
            });
        }
    });
}
