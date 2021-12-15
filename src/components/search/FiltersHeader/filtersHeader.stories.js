import filtersHeader from './filtersHeader.html.twig';
import './filtersHeader.scss';
import filtersHeaderJS from './filtersHeader';

filtersHeaderJS();

export default {
  title: 'Components/Search/Filters Header',
};

const Template = (args) => filtersHeader(args);

export const FiltersHeader = Template.bind({});
FiltersHeader.args = {
  title: 'Filter your search',
  link_text: 'Return to results',
  button_text: 'Filter your search',
  checkbox_filters: [
    {
      title: 'Types of Content',
      name: 'content_type',
      fields: [
        {
          label: 'Allergy alert',
          id: 'allergy-alert',
          value: 'allergy-alert',
          results: 20,
          data_fsa_at: 'allergy-alert',
        },
        {
          label: 'News',
          id: 'news',
          value: 'news',
          results: 10,
          data_fsa_at: 'news',
        },
        {
          label: 'Consultation',
          id: 'consultation',
          value: 'consultation',
          results: 15,
          data_fsa_at: 'consultation',
        },
        {
          label: 'Business Guidance',
          id: 'business-guidance',
          value: 'business-guidance',
          results: 23,
          data_fsa_at: 'business-guidance',
        },
        {
          label: 'Consumer Guidance',
          id: 'consumer-guidance',
          value: 'consumer-guidance',
          results: 3,
          data_fsa_at: 'consumer-guidance',
        },
      ],
      open: true,
      selected: 'selected',
    },
    {
      title: 'Topics',
      name: 'topics',
      fields: [
        {
          label: 'Campylobacter',
          id: 'campylobacter',
          value: 'campylobacter',
          results: 82,
          data_fsa_at: 'campylobacter',
        },
        {
          label: 'Food safety',
          id: 'food-safety',
          value: 'food-safety',
          results: 22,
          data_fsa_at: 'food-safety',
        },
        {
          label: 'Listeria',
          id: 'listeria',
          value: 'listeria',
          results: 3,
          data_fsa_at: 'listeria',
        },
        {
          label: 'Nutrition in Northern Ireland',
          id: 'northern-ireland-nutrition',
          value: 'northern-ireland-nutrition',
          results: 129,
          data_fsa_at: 'northern-ireland-nutrition',
        },
        {
          label: 'Shellfish',
          id: 'shellfish',
          value: 'shellfish',
          results: 10,
          data_fsa_at: 'shellfish',
        },
      ],
      open: true,
      selected: 'selected',
    },
    {
      title: 'Nation',
      name: 'nation',
      fields: [
        {
          label: 'England',
          id: 'england',
          value: 'england',
          results: 100,
          data_fsa_at: 'england',
        },
        {
          label: 'Northern Ireland',
          id: 'northern-ireland',
          value: 'northern-ireland',
          results: 89,
          data_fsa_at: 'northern-ireland',
        },
        {
          label: 'Wales',
          id: 'wales',
          value: 'wales',
          results: 78,
          data_fsa_at: 'wales',
        },
      ],
      open: true,
      selected: 'selected',
    },
  ],
};
