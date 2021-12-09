import hero from './hero.html.twig';
import './hero.scss';

export default {
  title: 'Components/General/Hero/With Services/2 Columns',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      defaultValue: 'hero',
    },
    backgroundColour: {
      options: ['green', 'blue', 'grey'],
      control: { type: 'radio' },
    },
    columns: {
      name: 'columns',
      type: { name: 'number', required: false },
      defaultValue: 2,
    },
  },
};

const Template = (args) => {
  return hero(args);
};

export const TwoServices = Template.bind({});
TwoServices.args = {
  type: 'hero--with-services hero--without-image',
  backgroundColour: 'green',
  title: 'Food we can trust',
  content: 'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
  ctas: [
    {
      external: false,
      name: 'Food and allergy',
      link: '#',
    },
  ],
  services: [
    { label: 'Safer food, better business', url: '#' },
    { label: 'Apply for a regulated product authorisation', url: '#' },
  ],
};

export const FourServices = Template.bind({});
FourServices.args = {
  type: 'hero--with-services hero--without-image',
  backgroundColour: 'green',
  title: 'Food we can trust',
  content: 'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
  ctas: [
    {
      external: false,
      name: 'Food and allergy',
      link: '#',
    },
  ],
  services: [
    { label: 'Safer food, better business', url: '#' },
    { label: 'Apply for a regulated product authorisation', url: '#' },
    { label: 'Register a food business', url: '#' },
    { label: 'Allergen guidance for businesses', url: '#' },
  ],
};

export const TwoServicesWithImage = Template.bind({});
TwoServicesWithImage.args = {
  type: 'hero--with-image hero--with-services',
  backgroundColour: 'green',
  title: 'Food we can trust',
  content: 'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
  ctas: [
    {
      external: false,
      name: 'Food and allergy',
      link: '#',
    },
  ],
  services: [
    { label: 'Safer food, better business', url: '#' },
    { label: 'Apply for a regulated product authorisation', url: '#' },
  ],
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
};

export const FourServicesWithImage = Template.bind({});
FourServicesWithImage.args = {
  type: 'hero--with-image hero--with-services',
  backgroundColour: 'green',
  title: 'Food we can trust',
  content: 'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
  ctas: [
    {
      external: false,
      name: 'Food and allergy',
      link: '#',
    },
  ],
  services: [
    { label: 'Safer food, better business', url: '#' },
    { label: 'Apply for a regulated product authorisation', url: '#' },
    { label: 'Register a food business', url: '#' },
    { label: 'Allergen guidance for businesses', url: '#' },
  ],
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
};
