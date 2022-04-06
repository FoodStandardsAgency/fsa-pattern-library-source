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
  accordions: [
    {
      title: 'Types of Content',
      name: 'content_type',
      fields: [
        {
          type: 'collapsible_checkbox',
          label: 'Allergy alert',
          id: 'allergy-alert',
          value: 'allergy-alert',
          results: 20,
        },
        {
          type: 'collapsible_checkbox',
          label: 'News',
          id: 'news',
          value: 'news',
          results: 10,
        },
        {
          type: 'collapsible_checkbox',
          label: 'Consultation',
          id: 'consultation',
          value: 'consultation',
          results: 15,
        },
        {
          type: 'collapsible_checkbox',
          label: 'Business Guidance',
          id: 'business-guidance',
          value: 'business-guidance',
          results: 23,
        },
        {
          type: 'collapsible_checkbox',
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
          type: 'collapsible_checkbox',
          label: 'Campylobacter',
          id: 'campylobacter',
          value: 'campylobacter',
          results: 82,
        },
        {
          type: 'collapsible_checkbox',
          label: 'Food safety',
          id: 'food-safety',
          value: 'food-safety',
          results: 22,
        },
        {
          type: 'collapsible_checkbox',
          label: 'Listeria',
          id: 'listeria',
          value: 'listeria',
          results: 3,
        },
        {
          type: 'collapsible_checkbox',
          label: 'Nutrition in Northern Ireland',
          id: 'northern-ireland-nutrition',
          value: 'northern-ireland-nutrition',
          results: 129,
        },
        {
          type: 'collapsible_checkbox',
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
        {
          type: 'collapsible_checkbox',
          label: 'England',
          id: 'england',
          value: 'england',
          results: 100,
        },
        {
          type: 'collapsible_checkbox',
          label: 'Northern Ireland',
          id: 'northern-ireland',
          value: 'northern-ireland',
          results: 89,
        },
        {
          type: 'collapsible_checkbox',
          label: 'Wales',
          id: 'wales',
          value: 'wales',
          results: 78,
        },
      ],
      open: true,
      selected: 'selected',
    },
    {
      title: 'Date',
      name: 'date_select',
      fields: [
        {
          type: 'datepicker',
          date_type: 'From',
          id: 'from',
          label: 'Updated from',
          apply_label: 'Apply date',
          apply_link: '#',
          minimum_selection: 'Please select a year as a minimum, the day and month are optional.',
          invalid_date: 'Please select a valid date combination.',
          start_year: 2016,
        },
        {
          type: 'datepicker',
          date_type: 'To',
          id: 'to',
          label: 'Updated to',
          apply_label: 'Apply date',
          apply_link: '#',
          minimum_selection: 'Please select a year as a minimum, the day and month are optional.',
          invalid_date: 'Please select a valid date combination.',
          start_year: 2016,
        },
      ],
    },
  ],
};
