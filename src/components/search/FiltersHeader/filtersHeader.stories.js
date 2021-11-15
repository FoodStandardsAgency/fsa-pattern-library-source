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
        },
        { label: 'News', id: 'news', value: 'news', results: 10 },
        {
          label: 'Consultation',
          id: 'consultation',
          value: 'consultation',
          results: 15,
        },
        {
          label: 'Business Guidance',
          id: 'business-guidance',
          value: 'business-guidance',
          results: 23,
        },
        {
          label: 'Consumer Guidance',
          id: 'consumer-guidance',
          value: 'consumer-guidance',
          results: 3,
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
        },
        {
          label: 'Food safety',
          id: 'food-safety',
          value: 'food-safety',
          results: 22,
        },
        { label: 'Listeria', id: 'listeria', value: 'listeria', results: 3 },
        {
          label: 'Nutrition in Northern Ireland',
          id: 'northern-ireland-nutrition',
          value: 'northern-ireland-nutrition',
          results: 129,
        },
        {
          label: 'Shellfish',
          id: 'shellfish',
          value: 'shellfish',
          results: 10,
        },
      ],
      open: true,
      selected: 'selected',
    },
    {
      title: 'Nation',
      name: 'nation',
      fields: [
        { label: 'England', id: 'england', value: 'england', results: 100 },
        {
          label: 'Northern Ireland',
          id: 'northern-ireland',
          value: 'northern-ireland',
          results: 89,
        },
        { label: 'Wales', id: 'wales', value: 'wales', results: 78 },
      ],
      open: true,
      selected: 'selected',
    },
  ],
};
