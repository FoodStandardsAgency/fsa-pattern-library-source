import step from './step.html.twig';
import './step.scss';

export default {
  title: 'Components/Form/Step',
};

const Template = (args) => step(args);

export const English = Template.bind({});
English.args = {
  step: 'Step 1 of 3',
};

export const Welsh = Template.bind({});
Welsh.args = {
  step: 'Cam 1 o 3',
};
