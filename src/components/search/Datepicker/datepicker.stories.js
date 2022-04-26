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
  apply_label: 'Apply date',
  apply_link: '#',
  minimum_selection: 'Please select a year as a minimum, the day and month are optional.',
  invalid_date: 'Please select a valid date combination.',
  years: [2000, 2019, 2020, 2021, 2022],
};
