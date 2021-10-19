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
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: false,
  error: false,
  errorMessage: 'Unrecognized username or password'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Email or username',
  caption: 'Enter your email address or username.',
  required: true,
  error: true,
  errorMessage: 'This information is required'
};