import article from './articleAlert.html.twig';

export default {
  title: 'Pages/Article/Alert',
  parameters: {
    controls: { disabled: true },
    layout: 'fullscreen',
  },
};

export const Alert = () => {
  return article();
};
