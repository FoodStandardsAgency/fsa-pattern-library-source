import hero from './hero.html.twig';
import './hero.scss';

export default {
  title: 'Components/General/Hero',
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
  },
};

const Template = (args) => {
  return hero(args);
};

export const Hero = Template.bind({});
Hero.args = {
  type: 'hero--without-image',
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
};

export const HeroWithImage = Template.bind({});
HeroWithImage.args = {
  type: 'hero--with-image',
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
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
};

export const HeroWithFourServices = Template.bind({});
HeroWithFourServices.args = {
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

export const HeroWithTwoServices = Template.bind({});
HeroWithTwoServices.args = {
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

export const HeroWithEightServices = Template.bind({});
HeroWithEightServices.args = {
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
    { label: 'Safer food, better business', url: '#' },
    { label: 'Apply for a regulated product authorisation', url: '#' },
    { label: 'Register a food business', url: '#' },
    { label: 'Allergen guidance for businesses', url: '#' },
  ],
};

export const HeroWithFourServicesAndImage = Template.bind({});
HeroWithFourServicesAndImage.args = {
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

export const HeroWithEightServicesAndImage = Template.bind({});
HeroWithEightServicesAndImage.args = {
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

