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
  text: 'You have just used your one-time login link. <a href="#">This is a link</a> Please set yourself a password that you can use to log in again. <a href="#" target="_blank">This is an external link</a>',
  type: 'status'
};

export const MessageBoxError = Template.bind({});
MessageBoxError.args = {
  ...MessageBoxStatus.args,
  type: 'error'
};

export const MessageBoxWarning = Template.bind({});
MessageBoxWarning.args = {
  ...MessageBoxStatus.args,
  type: 'warning'
};