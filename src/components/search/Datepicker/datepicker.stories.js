import datepicker from './datepicker.html.twig';
import './datepicker.scss';

export default {
  title: 'Components/Search/Datepicker',
};

const Template = (args) => datepicker(args);

export const Datepicker = Template.bind({});
Datepicker.args = {
  type: 'From',
  id: 'from',
  label: 'Updated from',
  applyLabel: 'Apply date',
  applyLink: '#',
  minimumSelection: 'Please select a year as a minimum, the day and month are optional.',
  invalidDate: 'Please select a valid date combination.',
};
