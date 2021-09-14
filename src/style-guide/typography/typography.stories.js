import typography from './typography.html.twig';
import './typography.scss';

export default {
  title: 'Style Guide/Typography',
  parameters: {
    controls: {
      disabled: true,
    }
  }
};

export const Typography = ({ label, ...args }) => {
  return typography(args);
}

