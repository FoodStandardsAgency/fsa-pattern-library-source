import inputField from './inputField.html.twig';
import './inputField.scss';

export default {
  title: 'Components/Form/Input Field',
  parameters: {
    layout: 'centered',
    controls: {
      disable: false,
    },
  },
};

const Template = (args) => {
  return inputField(args);
};

export const Normal = Template.bind({});
Normal.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: '',
  type: 'text',
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  required: 'required',
  error: true,
  error_message: 'This information is required',
  value: '',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  placeholder: 'Please enter your email address.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: '',
  type: 'text',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: 'test@example.com',
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  id: 'password',
  name: 'password',
  label: 'Password',
  caption: 'Enter your password.',
  required: 'required',
  error: false,
  error_message: 'Unrecognized password',
  value: '',
  type: 'password',
};

export const Phone = Template.bind({});
Phone.args = {
  id: 'phone',
  name: 'phone',
  label: 'Phone number',
  caption: '',
  required: 'required',
  error: false,
  error_message: '',
  value: '',
  type: 'tel',
  prefix: '+44',
  nested: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  id: 'email',
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: '',
  error: false,
  error_message: 'Unrecognized username or password',
  value: '',
  type: 'text',
  tooltip_message: 'Type your email address here.',
};