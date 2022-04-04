import radio from './radio.html.twig';
import './radio.scss';

export default {
  title: 'Components/Form/Radio Buttons',
  parameters: {
    //Center the component so that the red error border-left is visible.
    layout: 'centered',
  },
};

const Template = (args) => radio(args);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Email frequency',
  description: 'How often the emails are',
  fields: [
    { value: 'immediately', label: 'Send updates immediately', id: 'immediately' },
    { value: 'daily', label: 'Send updates daily', id: 'daily' },
    { value: 'weekly', label: 'Send updates weekly', id: 'weekly' },
  ],
  name: 'frequency',
  required: '',
  error: false,
  default: 'immediately',
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  required: 'required',
  error: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  ...Normal.args,
  tooltip: {
    open: 'Open tooltip',
    close: 'Close',
    message: 'Choose how often you want to get emails.',
  },
};
