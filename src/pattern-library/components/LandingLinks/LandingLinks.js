import './landingLinks.scss';
import './landingLinks.html.twig';

export default function () {

  window.addEventListener('DOMContentLoaded', function () {
   const listItems = document.querySelectorAll('.landing-links__item');
   if(!listItems) return;
   listItems.forEach(item => {
     item.addEventListener('click', ()=> {
       const link = item.querySelector('.landing-links__link');
       link.click();
     })
   })
  
  });
}