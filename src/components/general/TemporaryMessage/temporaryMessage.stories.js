import temporaryMessage from './temporaryMessage.html.twig';
import './temporaryMessage.scss';

export default {
  title: 'Components/General/Temporary Message',
};

const Template = (args) => temporaryMessage(args);

export const Low = Template.bind({});
Low.args = {
  message:
    '<p><a href="#" class="external-link">Coronavirus (COVID 19):</a> Guidance and support</p>',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Low.args,
  level: 'warning',
};

export const High = Template.bind({});
High.args = {
  ...Low.args,
  level: 'danger',
};
