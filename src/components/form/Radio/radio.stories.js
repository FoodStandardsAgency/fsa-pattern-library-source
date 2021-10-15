import radio from './radio.html.twig';

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
  fields: [
    { value: 'immediately', label: 'Send updates immediately' },
    { value: 'daily', label: 'Send updates daily' },
    { value: 'weekly', label: 'Send updates weekly' },
  ],
  name: 'frequency',
  required: false,
  error: false,
  default: 'immediately',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Email length',
  fields: [
    { value: 'long', label: 'Send long emails' },
    { value: 'medium', label: 'Send medium-length emails' },
    { value: 'short', label: 'Send short emails' },
  ],
  name: 'length',
  required: true,
  error: true,
  default: 'long',
};
