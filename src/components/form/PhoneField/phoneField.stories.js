import phoneField from './phoneField.html.twig';

export default {
  title: 'Components/Form/Phone Field',
  parameters: {
    layout: "centered",
  }
}

const Template = args => phoneField(args);

export const Normal = Template.bind();
Normal.args = {
  title: 'Phone number',
  required: '',
  prefix: '+44',
  name: 'phone',
  description: 'Subscribe to news and alerts.',
  error: false,
}

Error.args = {
  ...Normal.args,
  required: 'required',
  error: true,
}