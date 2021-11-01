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
    { label: 'Allergy alert', id: 'allergy-alert', name: 'type[allergy-alert]', value: 'allergy-alert', results: 20 },
    { label: 'News', id: 'news', name: 'type[news]', value: 'news', results: 10 },
    { label: 'Consultation', id: 'consultation', name: 'type[consultation]', value: 'consultation', results: 15 },
    { label: 'Business Guidance', id: 'business-guidance', name: 'type[business-guidance]', value: 'business-guidance', results: 23 },
    { label: 'Consumer Guidance', id: 'consumer-guidance', name: 'type[consumer-guidance]', value: 'consumer-guidance', results: 3 },
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
    { label: 'Campylobacter', id: 'campylobacter', name: 'topics[campylobacter]', value: 'campylobacter', results: 82 },
    { label: 'Food safety', id: 'food-safety', name: 'topics[food-safety]', value: 'food-safety', results: 22 },
    { label: 'Listeria', id: 'listeria', name: 'topics[listeria]', value: 'listeria', results: 3 },
    { label: 'Nutrition in Northern Ireland', id: 'northern-ireland-nutrition', name: 'topics[northern-ireland-nutrition]', value: 'northern-ireland-nutrition', results: 129 },
    { label: 'Shellfish', id: 'shellfish', name: 'topics[shellfish]', value: 'shellfish', results: 10 },
  ],
  title_two: "Nation",
  fields_two: [
    { label: 'England', id: 'england', name: 'nation[england]', value: 'england', results: 100 },
    { label: 'Northern Ireland', id: 'northern-ireland', name: 'nation[northern-ireland]', value: 'northern-ireland', results: 89 },
    { label: 'Wales', id: 'wales', name: 'nation[wales]', value: 'wales', results: 78 },
  ]
};
Multiple.parameters = {
    controls: {
      disable: true,
    },
};
