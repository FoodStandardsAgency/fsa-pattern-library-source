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