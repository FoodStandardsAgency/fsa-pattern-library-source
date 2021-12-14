import phoneField from './phoneField.html.twig';
import './phoneField.scss';

export default {
  title: 'Components/Form/Phone Field',
  parameters: {
    layout: "centered",
  }
}

const Template = args => phoneField(args);

export const Normal = Template.bind();
Normal.args = {
  label: 'Phone number',
  required: '',
  prefix: '+44',
  name: 'phone',
  description: 'Subscribe to news and alerts.',
  error: false,
}

export const Error = Template.bind();
Error.args = {
  ...Normal.args,
  required: 'required',
  error: true,
}