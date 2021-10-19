import collapsibleCheckbox from './collapsibleCheckbox.html.twig';
import './collapsibleCheckbox.scss';
import collapsibleCheckboxJs from './collapsibleCheckbox';
('./collapsibleCheckbox');

collapsibleCheckboxJs();

export default {
  title: 'Components/Search/Collapsible Checkbox',
};

const Template = (args) => collapsibleCheckbox(args);

export const Open = Template.bind({});
Open.args = {
  title: 'topics',
  fields: [
    { label: 'Alergy alert', id: 'alergy-alert', results: 20 },
    { label: 'News', id: 'news', results: 10 },
    { label: 'Consultation', id: 'consultation', results: 15 },
    { label: 'Business Guidance', id: 'business-guidance', results: 23 },
    { label: 'Consumer Guidance', id: 'consumer-guidance', results: 3 },
  ],
  open: true,
};

export const Closed = Template.bind({});
Closed.args = {
  title: 'topics',
  fields: [
    { label: 'Alergy alert', id: 'alergy-alert', results: 20 },
    { label: 'News', id: 'news', results: 10 },
    { label: 'Consultation', id: 'consultation', results: 15 },
    { label: 'Business Guidance', id: 'business-guidance', results: 23 },
    { label: 'Consumer Guidance', id: 'consumer-guidance', results: 3 },
  ],
  open: false,
};
