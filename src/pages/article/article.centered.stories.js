import article from './articleCentered.html.twig';

export default {
  title: 'Pages/Article/Centered',
  parameters: {
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return article(args);
};

export const Centered = Template.bind({});
Centered.args = {};
