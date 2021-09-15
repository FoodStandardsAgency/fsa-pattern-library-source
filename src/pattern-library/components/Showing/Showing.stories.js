import showing from './showing.html.twig';
import './showing.scss';

export default {
  title: 'Pattern Library/Components/Showing',
};

const Template = (args) => {
  return showing(args);
};

export const Default = Template.bind({});
Default.args = {
  displayed_results: '1-10',
  total_results: '103',
};
