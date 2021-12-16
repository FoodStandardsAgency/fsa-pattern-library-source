import inputField from './inputField.html.twig';
import './inputField.scss';


export default {
  title: 'Components/Form/Input Field',
  parameters: {
    layout: "centered",
    controls: {
      disabled: false,

    }
  }
};

const Template = (args) => {
  return inputField(args);
}


export const Normal = Template.bind({});
Normal.args = {
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: "",
  error: false,
  errorMessage: 'Unrecognized username or password',
  value: ''
};

export const Error = Template.bind({});
Error.args = {
  name: 'email',
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: "required",
  error: true,
  errorMessage: 'This information is required',
  value: ''
};

export const Password = Template.bind({});
Password.args = {
  name: 'password',
  label: 'Password',
  caption: 'Enter your password.',
  required: "required",
  error: false,
  errorMessage: 'Unrecognized password',
  value: '',
  type: 'password'
};

export const Phone = Template.bind({});
Phone.args = {
  name: 'phone',
  label: 'Phone number',
  caption: 'Subscribe to news and alerts.',
  required: 'required',
  error: false,
  errorMessage: '',
  value: '',
  type: 'tel',
  prefix: '+44',
}