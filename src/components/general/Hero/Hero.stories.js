import hero from './hero.html.twig';
import './Hero.js';

export default {
    title: 'Components/General/Hero',
    argTypes: {
      type: {
        defaultValue: 'hero',
      },
    },
  };

const Template = (args) => {
  return hero(args);
};

export const Hero = Template.bind({});
Hero.args = {
  type: 'hero',
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

// export const HeroWithImage = Template.bind({});
// HeroWithImage.args = {
//   type: 'hero-with-image',
//   title: 'Food we can trust',
//   content: 'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
//   ctas: [
//     {
//       external: false,
//       name: 'Food and allergy',
//       link: '#',
//     },
//   ],
//   image: {
//     alt: 'Alt text',
//     url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
//   },
// };

// export const HeroWithServices = Template.bind({});
// HeroWithServices.args = {
//   type: 'hero-with-services',
//   title: 'Food we can trust',
//   content: 'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
//   ctaOne: {
//     external: false,
//     name: 'Food and allergy',
//     link: '#',
//   },
//   ctaTwo: {
//     external: true,
//     name: 'Food and allergy',
//     link: '#',
//   },
//   image: {
//     alt: 'Alt text',
//     url: '#'
//   },
// };
//
// export const NewsHero = Template.bind({});
// NewsHero.args = {
//   type: 'news-hero',
//   title: 'Food we can trust',
//   content: 'Our job is to use our expertise and influence so that people can trust that the food they buy and eat is safe and what it says it is.',
//   ctaOne: {
//     external: false,
//     name: 'Food and allergy',
//     link: '#',
//   },
//   ctaTwo: {
//     external: true,
//     name: 'Food and allergy',
//     link: '#',
//   },
//   image: {
//     alt: 'Alt text',
//     url: '#'
//   },
// };
