import promoGroup from './promoGroup.html.twig';

export default {
  title: 'Components/Landing/PromoGroup',
};

const Template = (args) => promoGroup(args);

export const oneLink = Template.bind({});
oneLink.args = {
  title: 'Popular content',
  cards: [
    {
      title: 'Listeria',
      description:
        'What you can do to reduce the chances of your food being infected with listeria.',
      promo_link: '#',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/NDawe_Bell_FSA_150320_324.jpg?itok=E9uzlVec',
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/industry-kitchen-cooking_0.jpg?itok=uyO6myYB',
    },
    {
      title: 'Our risk analysis',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/AS_FSA_011216_L1_276.jpg?itok=oVF8mrBO',
    },
    {
      title: 'Listeria',
      description:
        'What you can do to reduce the chances of your food being infected with listeria.',
      promo_link: '#',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/NDawe_Bell_FSA_150320_324.jpg?itok=E9uzlVec',
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/industry-kitchen-cooking_0.jpg?itok=uyO6myYB',
    },
    {
      title: 'Our risk analysis',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/AS_FSA_011216_L1_276.jpg?itok=oVF8mrBO',
    },
  ],
};

export const multipleLinks = Template.bind({});
multipleLinks.args = {
  title: 'Popular content',
  cards: [
    {
      title: 'For consumers',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/NDawe_Bell_FSA_150320_324.jpg?itok=E9uzlVec',
      link_list: [
        { label: 'Food hygiene ratings scheme', href: '#' },
        { label: 'Report a food problem', href: '#' },
        { label: 'Allergy and intolerance', href: '#' },
        { label: 'Subscribe to news and alerts', href: '#' },
        { label: 'View all consumer advice', href: '#' },
      ],
    },
    {
      title: 'For businesses',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/industry-kitchen-cooking_0.jpg?itok=uyO6myYB',
      link_list: [
        { label: 'Food safety for food delivery', href: '#' },
        { label: 'Placing a regulated product on the market', href: '#' },
        { label: 'Starting a food business', href: '#' },
        { label: 'Safer food, better business', href: '#' },
        { label: 'Allergen guidance', href: '#' },
      ],
    },
    {
      title: 'About us',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/AS_FSA_011216_L1_276.jpg?itok=oVF8mrBO',
      link_list: [
        { label: 'Who are we', href: '#' },
        { label: 'Our risk analysis', href: '#' },
        { label: 'Our approach to science', href: '#' },
        { label: 'Our board', href: '#' },
        { label: 'Contact us', href: '#' },
      ],
    },
    {
      title: 'For consumers',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/NDawe_Bell_FSA_150320_324.jpg?itok=E9uzlVec',
      link_list: [
        { label: 'Food hygiene ratings scheme', href: '#' },
        { label: 'Report a food problem', href: '#' },
        { label: 'Allergy and intolerance', href: '#' },
        { label: 'Subscribe to news and alerts', href: '#' },
        { label: 'View all consumer advice', href: '#' },
      ],
    },
    {
      title: 'For businesses',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/industry-kitchen-cooking_0.jpg?itok=uyO6myYB',
      link_list: [
        { label: 'Food safety for food delivery', href: '#' },
        { label: 'Placing a regulated product on the market', href: '#' },
        { label: 'Starting a food business', href: '#' },
        { label: 'Safer food, better business', href: '#' },
        { label: 'Allergen guidance', href: '#' },
      ],
    },
    {
      title: 'About us',
      image:
        'https://www.food.gov.uk/sites/default/files/styles/promo_medium/public/media/image/AS_FSA_011216_L1_276.jpg?itok=oVF8mrBO',
      link_list: [
        { label: 'Who are we', href: '#' },
        { label: 'Our risk analysis', href: '#' },
        { label: 'Our approach to science', href: '#' },
        { label: 'Our board', href: '#' },
        { label: 'Contact us', href: '#' },
      ],
    },
  ],
};
