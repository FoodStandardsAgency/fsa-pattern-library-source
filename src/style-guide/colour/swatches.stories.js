import swatches from './swatches.html.twig';
import './swatches.scss';

export default {
  title: 'Style Guide/Colour',
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

export const Colour = ({ label, ...args }) => {
  return swatches(args);
}

