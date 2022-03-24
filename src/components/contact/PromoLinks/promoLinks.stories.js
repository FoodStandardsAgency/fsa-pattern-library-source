import promoLinks from './promoLinks.html.twig';
import './promoLinks.scss';

import { svgs } from '../../svg-icons';

export default {
  title: 'Components/Contact/Promo Links',
};

export const PromoLinks = (args) => promoLinks(args);
PromoLinks.args = {
  links: [
    {
      href: '#',
      title: 'Suspected food poisoning',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.foodPoison,
    },
    {
      href: '#',
      title: 'Food product',
      description: "Report a problem with food that you've bought to the local authority.",
      svg: svgs.foodProduct,
    },
    {
      href: '#',
      title: 'Poor food safety and hygiene practices',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.poorFood,
    },
    {
      href: '#',
      title: 'Report a product labelling issue',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.reportLabel,
    },
    {
      href: '#',
      title: 'Report a food crime',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.foodCrime,
    },
  ],
};

export const PromoLinksWithTitle = (args) => promoLinks(args);
PromoLinksWithTitle.args = {
  title: 'Section 1',
  links: [
    {
      href: '#',
      title: 'Suspected food poisoning',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.foodPoison,
    },
    {
      href: '#',
      title: 'Food product',
      description: "Report a problem with food that you've bought to the local authority.",
      svg: svgs.foodProduct,
    },
    {
      href: '#',
      title: 'Poor food safety and hygiene practices',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.poorFood,
    },
    {
      href: '#',
      title: 'Report a product labelling issue',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.reportLabel,
    },
    {
      href: '#',
      title: 'Report a food crime',
      description: 'Report suspected food poisoning from a restaurant, takeaway or food shop.',
      svg: svgs.foodCrime,
    },
  ],
};
