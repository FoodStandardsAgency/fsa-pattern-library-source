import textarea from './textarea.html.twig';

export default {
  title: 'Components/Form/Textarea',
};

const Template = args => textarea(args);

export const Normal = Template.bind({});
Normal.args = {
  error: false,
  name: "crime",
  label: "What is the food crime you are reporting?",
  required: "required",
  description: "Please describe the food crime that you are reporting",
  rows: 20,
}