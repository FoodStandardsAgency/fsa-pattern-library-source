import collapsibleCheckbox from './collapsibleCheckbox.html.twig';
import multipleCollapsibleCheckbox from './multipleCollapsibleCheckbox.html.twig';
import './collapsibleCheckbox.scss';
import collapsibleCheckboxJs from './collapsibleCheckbox';

collapsibleCheckboxJs();

export default {
  title: 'Components/Search/Collapsible Checkbox',
  argTypes: {
    multiple: { table: { disable: true } },
  },
};

const Template = (args) => collapsibleCheckbox(args);

export const Open = Template.bind({});
Open.args = {
  title: 'Types of Content',
  name:'content_type',
  fields: [
    { label: 'Allergy alert', id: 'allergy-alert', value: 'allergy-alert', results: 20, data_fsa_at: 'allergy-alert' },
    { label: 'News', id: 'news', value: 'news', results: 10, data_fsa_at: 'news' },
    { label: 'Consultation', id: 'consultation', value: 'consultation', results: 15, data_fsa_at: 'consultation' },
    { label: 'Business Guidance', id: 'business-guidance', value: 'business-guidance', results: 23, data_fsa_at: 'business-guidance' },
    { label: 'Consumer Guidance', id: 'consumer-guidance', value: 'consumer-guidance', results: 3, data_fsa_at: 'consumer-guidance' },
  ],
  open: true,
  selected: 'selected',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Open.args,
  open: false,
};

export const Multiple = args => multipleCollapsibleCheckbox(args);
Multiple.args = {
  ...Open.args,
  title_one: "Topics",
  name_one:'topics',
  fields_one: [
    { label: 'Campylobacter', id: 'campylobacter', value: 'campylobacter', results: 82, data_fsa_at: 'campylobacter' },
    { label: 'Food safety', id: 'food-safety', value: 'food-safety', results: 22, data_fsa_at: 'food-safety' },
    { label: 'Listeria', id: 'listeria', value: 'listeria', results: 3, data_fsa_at: 'listeria' },
    { label: 'Nutrition in Northern Ireland', id: 'northern-ireland-nutrition', value: 'northern-ireland-nutrition', results: 129, data_fsa_at: 'northern-ireland-nutrition' },
    { label: 'Shellfish', id: 'shellfish', value: 'shellfish', results: 10, data_fsa_at: 'shellfish' },
  ],
  title_two: "Nation",
  name_two:'nation',
  fields_two: [
    { label: 'England', id: 'england', value: 'england', results: 100, data_fsa_at: 'england' },
    { label: 'Northern Ireland', id: 'northern-ireland', value: 'northern-ireland', results: 89, data_fsa_at: 'northern-ireland' },
    { label: 'Wales', id: 'wales', value: 'wales', results: 78, data_fsa_at: 'wales' },
  ]
};
Multiple.parameters = {
    controls: {
      disable: true,
    },
};
