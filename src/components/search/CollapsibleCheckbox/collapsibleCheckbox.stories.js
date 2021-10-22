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
  fields: [
    { label: 'Alergy alert', id: 'alergy-alert', results: 20 },
    { label: 'News', id: 'news', results: 10 },
    { label: 'Consultation', id: 'consultation', results: 15 },
    { label: 'Business Guidance', id: 'business-guidance', results: 23 },
    { label: 'Consumer Guidance', id: 'consumer-guidance', results: 3 },
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
  fields_one: [
    { label: 'Campylobacter', id: 'campylobacter', results: 82 },
    { label: 'Food safety', id: 'food-safety', results: 22 },
    { label: 'Listeria', id: 'listeria', results: 3 },
    { label: 'Nutrition in Northern Ireland', id: 'northern-ireland-nutrition', results: 129 },
    { label: 'Shellfish', id: 'shellfish', results: 10 },
  ],
  title_two: "Nation",
  fields_two: [
    { label: 'England', id: 'england', results: 100 },
    { label: 'Northern Ireland', id: 'northern-ireland', results: 89 },
    { label: 'Wales', id: 'wales', results: 78 },
  ]
};
Multiple.parameters = {
    controls: {
      disable: true,
    },
};
