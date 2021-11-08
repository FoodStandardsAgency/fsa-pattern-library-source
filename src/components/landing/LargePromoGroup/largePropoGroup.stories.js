import largePromoGroup from './largePromoGroup.html.twig';
import './largePromoGroup.scss';

export default {
  title: 'Components/Landing/Large Promo Group',
  parameters: {
    layout: "fullscreen",
    controls: {
      disabled: false,
    }
  }
};


 const Template = (args) => { 
  return largePromoGroup(args);
}

export const LargePromoGroup = Template.bind({});
LargePromoGroup.args = {
  promoGroup: [
    {
      image: "https://www.food.gov.uk/sites/default/files/styles/promo_large/public/media/image/homepage-1.png",
      title: "Report a food allergy, intolerance or coeliac reaction",
      description: "<p>Use this tool to tell us about a reaction or near-miss that you, or someone you care for, has had due to a food allergy, intolerance or coeliac disease. This data will help inform future development, target research and help to produce effective government policy.</p><p>This is another paragarph</p>",
      ctaLink: "#",
      ctaLabel: "Report a food allergy, intolerance or coeliac reaction"
    },
    {
      image: "https://www.food.gov.uk/sites/default/files/styles/promo_large/public/media/image/fhrs-5_0.jpg",
      title: "Food hygiene ratings",
      description: "<p>Food hygiene ratings help you choose where to eat out or shop for food by telling you how seriously the business takes their food hygiene standards.",
      ctaLink: "#",
      ctaLabel: "Find a food hygiene rating"
    },
    {
      image: "https://www.food.gov.uk/sites/default/files/styles/promo_large/public/media/image/juice-banner-1.png",
      title: "Labelling guidance for prepacked for direct sale food",
      description: "<p>Guidance to help food businesses, affected by the new prepacked for direct sale (PPDS) allergen labelling requirements, better understand how to label their food products ahead of new allergen labelling legislation coming into effect on 1 October 2021.</p>",
      ctaLink: "#",
      ctaLabel: "All News and Alerts"
    },
    {
      image: "https://www.food.gov.uk/sites/default/files/styles/promo_large/public/media/image/allergy-training-inspection.png",
      title: "Food allergy and intolerance training",
      description: "<p>Food business operators must make sure that staff receive training on managing allergens effectively. We have free online food safety courses available to help you and your business comply with food hygiene and food standards.</p>",
      ctaLink: "#",
      ctaLabel: "Online food safety training"
    }
  ]
};
