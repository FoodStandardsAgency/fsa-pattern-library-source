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
      'value': 'allergy-alert',
      'fsa_data_at': 'allergy-alert',
    },
    {
      'name': 'News',
      'value': 'news',
      'fsa_data_at': 'news',
    },
    {
      'name': 'Ecoli',
      'value': 'ecoli',
      'fsa_data_at': 'ecoli'
    },
    {
      'name': 'England',
      'value': 'england',
      'fsa_data_at': 'england',
    },
    {
      'name': 'Northern Ireland',
      'value': 'northern-ireland',
      'fsa_data_at': 'northern-ireland',
    },
    {
      'name': 'Consumer Guidance',
      'value': 'consumer-guidance',
      'fsa_data_at': 'consumer-guidance',
    },
  ],
  remove_filter: 'Remove filter',
  remove_all_filters: 'Remove all filters',
};
