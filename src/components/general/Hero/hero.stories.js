import hero from './hero.html.twig';
import './hero.scss';

export default {
  title: 'Components/General/Hero',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    background_colour: {
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
};

export const HeroWithImage = Template.bind({});
HeroWithImage.args = {
  type: 'hero--with-image',
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
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
};

export const HeroWithCampaignBlock = Template.bind({});
HeroWithCampaignBlock.args = {
  type: 'hero--without-image',
  background_colour: 'grey',
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
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  campaign_block: {
    title: 'Food Standards Agency launches new campaign',
    description:
      'The campaign is designed to educate and motivate consumers to make healthier informed choices when food shopping by looking at nutritional labels',
    cta: {
      url: '#',
      label: 'Find out more',
    },
    has_hero: true,
  },
};

export const HiddenHeroWithCampaignBlock = Template.bind({});
HiddenHeroWithCampaignBlock.args = {
  type: 'hero--without-image',
  background_colour: 'grey',
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
  image: {
    alt: 'Alt text',
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  campaign_block: {
    title: 'Food Standards Agency launches new campaign',
    description:
      'The campaign is designed to educate and motivate consumers to make healthier informed choices when food shopping by looking at nutritional labels',
    cta: {
      url: '#',
      label: 'Find out more',
    },
    has_hero: false,
  },
};

export const MiniHero = Template.bind({});
MiniHero.args = {
  type: 'hero--with-image',
  background_colour: 'green',
  title: 'Food hygiene ratings',
  content: 'Use our online service to find a food business’s hygiene rating.',
  image: {
    alt: 'Alt text',
    url: 'https://www.food.gov.uk/sites/default/files/styles/promo_large/public/media/image/fhrs-5_0.jpg',
  },
  mini: true,
};
