import grid from './grid.html.twig';
import './grid.scss';

export default {
  title: 'Style Guide/Grid',
  parameters: {
    controls: {
      disabled: true,
    },
    layout: 'fullscreen',
  }
};

export const Grid = ({ label, ...args }) => {
  return grid(args);
}

