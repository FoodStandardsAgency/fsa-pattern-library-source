import tooltip from './tooltip.html.twig';
import './tooltip.scss';

export default {
  title: 'Components/Form/Tooltip',
};

const Template = (args) => tooltip(args);

export const Tooltip = Template.bind({});
Tooltip.args = {
  message: 'These are \'pre-requirements\' to the application and implementation of a HACCP system, to demonstrate you have control they should be well established, fully operational and verified. <a href="#">See more information</a>.',
};
