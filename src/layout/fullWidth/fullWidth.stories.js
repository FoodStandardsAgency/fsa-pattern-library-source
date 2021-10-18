import fullwidth from './fullWidth.html.twig';
import "./fullWidth.scss";

export default {
  title: 'Layout/Full Width',
}

export const FullWidth = (args) => {
  return fullwidth(args);
}
FullWidth.args = {}