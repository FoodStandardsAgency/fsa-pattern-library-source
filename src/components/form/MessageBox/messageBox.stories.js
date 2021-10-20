import messageBox from './messageBox.html.twig';
import './messageBox.scss';


export default {
  title: 'Components/Form/Message Box',
  parameters: {
    layout: "centered",
    controls: {
      disabled: false,

    }
  }
};

const Template = (args) => {
  return messageBox(args);
}


export const MessageBoxStatus = Template.bind({});
MessageBoxStatus.args = {
  text: 'You have just used your one-time login link. Please set yourself a password that you can use to log in again.',
  type: 'status'
};

export const MessageBoxError = Template.bind({});
MessageBoxError.args = {
  text: 'You have just used your one-time login link. Please set yourself a password that you can use to log in again.',
  type: 'error'
};

export const MessageBoxWarning = Template.bind({});
MessageBoxWarning.args = {
  text: 'You have just used your one-time login link. Please set yourself a password that you can use to log in again.',
  type: 'warning'
};