import fullwidth from './fullWidth.html.twig';
import './fullWidth.scss';

export default {
  title: 'Layout/Full Width Container',
};

export const FullWidthContainer = (args) => {
  return fullwidth(args);
};
FullWidthContainer.args = {};
