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
  required: 'required',
};
