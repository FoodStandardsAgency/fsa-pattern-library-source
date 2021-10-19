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
    { label: 'News', id: 'news' },
    { label: 'Consultation', id: 'consultation' },
  ],
};
