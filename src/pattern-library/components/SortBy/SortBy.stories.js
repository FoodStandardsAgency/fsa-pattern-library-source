import sortBy from './sortBy.html.twig';
import './sortBy.scss';

export default {
  title: 'Pattern Library/Components/List/Sort By',
};

const Template = (args) => {
  return sortBy(args);
};

export const Default = Template.bind({});
