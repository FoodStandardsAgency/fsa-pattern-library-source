import filtersSelected from './filtersSelected.html.twig';
import './filtersSelected.scss';

export default {
  title: 'Components/Search/Filters Selected',
};

const Template = (args) => {
  return filtersSelected(args);
};

export const FiltersSelected = Template.bind({});
FiltersSelected.args = {
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
