import typography from './typography.html.twig';
import './typography.scss';

export default {
  title: 'Style Guide/Typography',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

export const Typography = (args) => {
  return typography(args);
};
