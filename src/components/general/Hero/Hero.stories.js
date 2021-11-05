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
