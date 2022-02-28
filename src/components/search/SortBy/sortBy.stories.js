import sortBy from './sortBy.html.twig';
import './sortBy.scss';

export default {
  title: 'Components/Search/Sort By',
};

const Template = (args) => {
  return sortBy(args);
};

export const SortBy = Template.bind({});
SortBy.args = {
  sort_by: 'Sort by',
  options: [
    {
      text: 'Relevance',
      value: 'relevance',
    },
    {
      text: 'Most recent',
      value: 'created',
    },
  ],
  default: 'Relevance',
};
