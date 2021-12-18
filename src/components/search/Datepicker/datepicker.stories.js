import datepicker from './datepicker.html.twig';
import './datepicker.scss';

export default {
  title: 'Components/Search/Datepicker',
};

const Template = (args) => datepicker(args);

const days = [...Array(32).keys()];
const months = [
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
    ];
const currentYear = new Date().getFullYear();
const years = Array(currentYear - 1990 + 1).fill().map((_, idx) => 1990 + idx)

export const Open = Template.bind({});
Open.args = {
  title: 'Date',
  name:'date_select',
  fields: [
    {
      label: 'Updated from',
      datepicker: [
        { label: 'Day', accessibleLabel: 'Select a day', options: days },
        { label: 'Month', accessibleLabel: 'Select a month', options: months },
        { label: 'Year', accessibleLabel: 'Select a year', options: years },
      ],
      apply: 'Apply date',
      applyLink: '#',
    },
    {
      label: 'Updated to',
      datepicker: [
        { label: 'Day', accessibleLabel: 'Select a day', options: days },
        { label: 'Month', accessibleLabel: 'Select a month', options: months },
        { label: 'Year', accessibleLabel: 'Select a year', options: years },
      ],
      apply: 'Apply date',
      applyLink: '#',
    }
  ],
  open: true,
  selected: 'selected',
};
