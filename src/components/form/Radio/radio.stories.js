import radio from './radio.html.twig';
import './radio.scss';

export default {
  title: 'Components/Form/Radio Buttons',
  arameters: {
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
  required: false,
  error: false,
  default: 'immediately',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Email length',
  description: 'How long the emails are',
  fields: [
    { value: 'long', label: 'Send long emails', id: 'long' },
    { value: 'medium', label: 'Send medium-length emails', id: 'medium' },
    { value: 'short', label: 'Send short emails', id: 'short' },
  ],
  name: 'length',
  required: true,
  error: true,
  default: 'long',
};
