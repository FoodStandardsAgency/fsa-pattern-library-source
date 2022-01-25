import backTo from './backTo.html.twig';
import './backTo.scss';

export default {
  title: 'Components/Article/Back To',
};

const Template = (args) => backTo(args);

export const BackTo = Template.bind({});
BackTo.args = {
  label: 'Back to previous',
  url: '#',
};

