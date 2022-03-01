import errorBox from './errorBox.html.twig';
import './errorBox.scss';

const errorItems = {
  required: {
    label: 'Please complete the following required fields',
    fields: [
      {
        label: 'E-mail address',
        id: 'email',
      },
      {
        label: 'Password',
        id: 'password',
      },
    ],
  },
  format: {
    label: 'Please complete the following with the correct format',
    fields: [
      {
        label: 'Password',
        id: 'password',
      },
    ],
  },
  unrecognized: {
    label: 'Unrecognized username or password.',
    fields: [
      {
        label: 'Email address or username',
        id: 'email-username',
      },
    ],
  },
};

export default {
  title: 'Components/Form/Error Box',
  parameters: {
    controls: {
      disabled: false,
    },
    layout: 'centered',
  },
};

const Template = (args) => {
  return errorBox(args);
};

export const ErrorBox = Template.bind({});

ErrorBox.args = {
  title: 'There is a problem with your submission',
  errorList: errorItems,
};
