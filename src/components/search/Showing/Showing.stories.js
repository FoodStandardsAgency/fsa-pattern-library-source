import showing from './showing.html.twig';
import './showing.scss';

export default {
  title: 'Components/Search/Showing',
};

const Template = (args) => {
  return showing(args);
};

export const Showing = Template.bind({});
Showing.args = {
  showing: 'Showing',
  of: 'of',
  results: 'results',
  displayed_results: '1-10',
  total_results: '103',
};
