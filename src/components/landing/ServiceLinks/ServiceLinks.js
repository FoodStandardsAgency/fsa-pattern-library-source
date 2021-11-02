//ANCHOR questions
//Should title and description be optional? How would the overlay be added? How would this affect how I write the service link component?
//What's the tag for heading?

import './serviceLinks.html.twig';
import './serviceLinks.scss';

export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    const serviceLinks = document.querySelectorAll('.service-links__card');
    const numOfLinks = serviceLinks.length;
    if (!numOfLinks) return;

    serviceLinks.forEach((serviceLink) => {
      if (numOfLinks === 1 || numOfLinks % 3 === 0) {
        //1, 3 or 6 links
        serviceLink.classList.add('service-links__card--three');
      } else {
        //others
        serviceLink.classList.add('service-links__card--four');
      }
    });
  });
}
