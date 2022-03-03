import grid from './grid.html.twig';
import './grid.scss';

export default {
  title: 'Style Guide/Grid',
  parameters: {
    controls: {
      disable: true,
    },
    layout: 'fullscreen',
  },
};

export const Grid = (args) => {
  return grid(args);
};
