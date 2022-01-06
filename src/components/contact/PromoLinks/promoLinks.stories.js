import promoLinks from './promoLinks.html.twig';

export default {
  title: 'Components/Contact/Promo Links',
};

export const PromoLinks = (args) => promoLinks(args);
PromoLinks.args = {
  links: [
    {
      href: '#',
      title: 'Suspected food poisoning',
      description:
        'Report suspected food poisoning from a restaurant, takeaway or food shop.',
    },
    {
      href: '#',
      title: 'Food product',
      description:
        "Report a problem with food that you've bought to the local authority.",
    },
    {
      href: '#',
      title: 'Poor food safety and hygiene practices',
      description:
        'Report suspected food poisoning from a restaurant, takeaway or food shop.',
    },
    {
      href: '#',
      title: 'Report a product labelling issue',
      description:
        'Report suspected food poisoning from a restaurant, takeaway or food shop.',
    },
    {
      href: '#',
      title: 'Suspected food poisoning',
      description:
        'Report suspected food poisoning from a restaurant, takeaway or food shop.',
    },
  ],
};
