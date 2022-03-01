import swatches from './swatches.html.twig';
import './swatches.scss';

export default {
  title: 'Style Guide/Colour',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  },
};

export const Colour = (args) => {
  return swatches(args);
};
