import collapsibleCheckbox from './collapsibleCheckbox.html.twig';

export default {
  title: 'Components/Search/Collapsible Checkbox',
};

const Template = (args) => collapsibleCheckbox(args);

export const Default = Template.bind({});
Default.args = {
  title: 'topics',
  description: '1 selected',
  fields: [
    { label: 'Alergy alert', id: 'alergy-alert', results: 20 },
    { label: 'News', id: 'news', results: 10 },
    { label: 'Consultation', id: 'consultation', results: 15 },
    { label: 'Business Guidance', id: 'business-guidance', results: 23 },
    { label: 'Consumer Guidance', id: 'consumer-guidance', results: 3 },
  ],
};
