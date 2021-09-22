import showing from './showing.html.twig';
import './showing.scss';

export default {
  title: 'Pattern Library/Components/List/Showing',
};

const Template = (args) => {
  return showing(args);
};

export const Default = Template.bind({});
Default.args = {
  showing: 'Showing',
  of: 'of',
  results: 'results',
  displayed_results: '1-10',
  total_results: '103',
};
