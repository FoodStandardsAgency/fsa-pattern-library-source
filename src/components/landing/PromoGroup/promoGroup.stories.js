import promoGroup from './promoGroup.html.twig';

export default {
  title: 'Components/Landing/PromoGroup',
}

const Template = args => promoGroup(args);

export const oneLink = Template.bind({});
oneLink.args = {
  title: 'For businesses',
  description: 'Cras sagittis. Vivamus in erat ut urna cursus vestibulum. Nulla facilisi.',
  promo_link: '#',
}