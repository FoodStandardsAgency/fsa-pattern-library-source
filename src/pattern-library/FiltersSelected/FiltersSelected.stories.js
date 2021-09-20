import filtersSelected from './filtersSelected.html.twig';

export default {
  title: 'Pattern Library/Components/Filters Selected',
};

const Template = (args) => {
  return filtersSelected(args);
};

export const Default = Template.bind({});
Default.args = {
  filter_names: [
    'Alergy Alert',
    'News',
    'Ecoli',
    'England',
    'Northern Ireland',
    'Consumer',
  ],
  remove_filter: 'Remove filter',
  remove_all_filters: 'Remove all filters',
};
