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
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'For businesses',
      description:
        'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
      promo_link: '#',
    },
    {
      title: 'For businesses',
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
      title: 'For businesses',
      link_list: [
        { label: 'Food safety for food delivery', href: '#' },
        { label: 'Placing a regulated product on the market', href: '#' },
        { label: 'Starting a food business', href: '#' },
        { label: 'Safer food, better business', href: '#' },
        { label: 'Allergen guidance', href: '#' },
      ],
    },
  ],
};
