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
      name: 'Allergy Alert',
      value: 'allergy-alert',
      id: 'allergy-alert',
    },
    {
      name: 'News',
      value: 'news',
      id: 'news',
    },
    {
      name: 'Ecoli',
      value: 'ecoli',
      id: 'ecoli',
    },
    {
      name: 'England',
      value: 'england',
      id: 'england',
    },
    {
      name: 'Northern Ireland',
      value: 'northern-ireland',
      id: 'northern-ireland',
    },
    {
      name: 'Consumer Guidance',
      value: 'consumer-guidance',
      id: 'consumer-guidance',
    },
  ],
  remove_filter: 'Remove filter',
  remove_all_filters: 'Remove all filters',
};
