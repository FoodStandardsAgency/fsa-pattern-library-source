import temporaryMessage from './temporaryMessage.html.twig';
import './temporaryMessage.scss';

export default {
  title: 'Components/General/Temporary Message',
};

const Template = (args) => temporaryMessage(args);

export const DefaultMessage = Template.bind({});
DefaultMessage.args = {
  message: '<p><a href="#" class="external-link">Coronavirus (COVID 19):</a> Guidance and support</p>',
};

export const WarningMessage = Template.bind({});
WarningMessage.args = {
  ...DefaultMessage.args,
  level: 'warning',
};

export const DangerMessage = Template.bind({});
DangerMessage.args = {
  ...DefaultMessage.args,
  level: 'danger',
};
