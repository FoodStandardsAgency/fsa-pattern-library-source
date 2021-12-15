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
    {
      'name': 'Allergy Alert',
      'value': 'allergy-alert'
    },
    {
      'name': 'News',
      'value': 'news'
    },
    {
      'name': 'Ecoli',
      'value': 'ecoli'
    },
    {
      'name': 'England',
      'value': 'england'
    },
    {
      'name': 'Northern Ireland',
      'value': 'northern-ireland'
    },
    {
      'name': 'Consumer Guidance',
      'value': 'consumer-guidance'
    },
  ],
  remove_filter: 'Remove filter',
  remove_all_filters: 'Remove all filters',
};
