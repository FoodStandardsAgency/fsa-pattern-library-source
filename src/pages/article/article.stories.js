import article from './article.html.twig';

export default {
  title: 'Pages/Article',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Article = () => {
  return article();
};