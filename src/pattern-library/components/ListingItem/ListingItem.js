import './listingItem.scss';
import './listingItem.html.twig';

export default function () {

  window.addEventListener("DOMContentLoaded",function() {
   const card = document.querySelector(".listing-item");

   card.addEventListener('click', ()=>{
     const link = document.querySelector(".listing-item__title a");
     link.click();
   })

  });
}
