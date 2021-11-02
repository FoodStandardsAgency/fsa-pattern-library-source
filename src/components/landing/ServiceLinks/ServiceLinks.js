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
      if (numOfLinks === 1) {
        //Only one link
        serviceLinks.classList.add('service-links__card--single');
      } else if (numOfLinks === 2) {
        //2 links
        serviceLinks.classList.add('service-links__card--two');
      } else if (numOfLinks % 3 === 0 || numOfLinks === 5) {
        //3, 5 or 6 links
        serviceLinks.classList.add('service-links__card--three');
      } else {
        //4, 6, 7 and 8 links
        serviceLinks.classList.add('service-links__card--many');
      }
    });
  });
}
