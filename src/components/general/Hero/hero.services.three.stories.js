import hero from './hero.html.twig';
import './hero.scss';

export default {
  title: 'Components/General/Hero/With Services/3 Columns',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      defaultValue: 'hero',
    },
    background_colour: {
      options: ['green', 'blue', 'grey'],
      control: { type: 'radio' },
    },
    columns: {
      name: 'columns',
      type: { name: 'number', required: false },
      defaultValue: 3,
    },
  },
};

const Template = (args) => {
  return hero(args);
};

export const ThreeServices = Template.bind({});
ThreeServices.args = {
  type: 'hero--with-services hero--without-image',
  background_colour: 'green',
  title: 'Food we can trust',
  content:
    'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
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
  ],
};

export const SixServices = Template.bind({});
SixServices.args = {
  type: 'hero--with-services hero--without-image',
  background_colour: 'green',
  title: 'Food we can trust',
  content:
    'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
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
    { label: 'Safer food, better business', url: '#' },
    { label: 'Apply for a regulated product authorisation', url: '#' },
    { label: 'Register a food business', url: '#' },
  ],
};

export const ThreeServicesWithImage = Template.bind({});
ThreeServicesWithImage.args = {
  type: 'hero--with-image hero--with-services',
  background_colour: 'green',
  title: 'Food we can trust',
  content:
    'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
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
  ],
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
};

export const SixServicesWithImage = Template.bind({});
SixServicesWithImage.args = {
  type: 'hero--with-image hero--with-services',
  background_colour: 'green',
  title: 'Food we can trust',
  content:
    'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
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
    { label: 'Safer food, better business', url: '#' },
    { label: 'Apply for a regulated product authorisation', url: '#' },
    { label: 'Register a food business', url: '#' },
  ],
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
};
