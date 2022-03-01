import typography from './typography.html.twig';
import './typography.scss';

export default {
  title: 'Style Guide/Typography',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  },
};

export const Typography = (args) => {
  return typography(args);
};
