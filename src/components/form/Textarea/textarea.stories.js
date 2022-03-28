import textarea from './textarea.html.twig';
import './textarea.scss';

export default {
  title: 'Components/Form/Textarea',
  parameters: {
    //Center the component so that the red error border-left is visible.
    layout: 'centered',
  },
};

const Template = (args) => textarea(args);

export const Normal = Template.bind({});
Normal.args = {
  error: false,
  id: 'crime',
  name: 'crime',
  label: 'What is the food crime you are reporting?',
  required: 'required',
  description: 'Please describe the food crime that you are reporting',
  rows: 10,
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  error: true,
  error_message: 'This field is required',
  required: 'required',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  error: false,
  id: 'crime',
  name: 'crime',
  label: 'What is the food crime you are reporting?',
  required: 'required',
  description: 'Please describe the food crime that you are reporting',
  rows: 10,
  value: 'My custom text',
};
