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
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'Our risk analysis',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'Listeria',
      description:
        'What you can do to reduce the chances of your food being infected with listeria.',
      promo_link: '#',
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'Our risk analysis',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
  ],
};

export const multipleLinks = Template.bind({});
multipleLinks.args = {
  title: 'Popular content',
  cards: [
    {
      title: 'For consumers',
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
