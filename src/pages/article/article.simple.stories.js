import article from './articleSimple.html.twig';

export default {
  title: 'Pages/Article/Simple',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Simple = () => {
  return article();
};