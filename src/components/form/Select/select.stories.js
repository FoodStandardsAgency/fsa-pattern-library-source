import select from './select.html.twig';
import './select.scss';

export default {
  title: 'Components/Form/Select',
};

const Template = (args) => select(args);

export const Normal = Template.bind({});
Normal.args = {
  label: 'Month',
  accessibleLabel: 'Select a month',
  options: [
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     'November',
     'December',
  ],
};

export const Error = Template.bind({});
Error.args = {
  label: 'Month',
  accessibleLabel: 'Select a month',
  options: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  required: "required",
  error: true,
};
