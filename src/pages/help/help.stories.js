import help from './help.html.twig';

export default {
  title: 'Pages/Help',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  }
};

export const Help = () => {
  return help();
};