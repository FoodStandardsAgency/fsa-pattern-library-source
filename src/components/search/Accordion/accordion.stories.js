import generateDatepickerContent from '../../../helpers/generateDatepickerContent';

import accordion from './accordion.html.twig';
import './accordion.scss';

export default {
  title: 'Components/Search/Accordion',
};

const Template = (args) => accordion(args);

export const Open = Template.bind({});
Open.args = {
  title: 'Date',
  name:'date_select',
  fields: [
    {
      type: 'datepicker',
      dateType: 'From',
      label: 'Updated from',
      applyLabel: 'Apply date',
      applyLink: '#',
      selects: [
        { id: 'from_day', label: 'Day', accessibleLabel: 'Select a day', options: generateDatepickerContent('days') },
        { id: 'from_month', label: 'Month', accessibleLabel: 'Select a month', options: generateDatepickerContent('months') },
        { id: 'from_year', label: 'Year', accessibleLabel: 'Select a year', options: generateDatepickerContent('years') },
      ],
    },
      {
        type: 'datepicker',
        dateType: 'To',
        label: 'Updated to',
        applyLabel: 'Apply date',
        applyLink: '#',
        selects: [
          { id: 'from_day', label: 'Day', accessibleLabel: 'Select a day', options: generateDatepickerContent('days') },
          { id: 'from_month', label: 'Month', accessibleLabel: 'Select a month', options: generateDatepickerContent('months') },
          { id: 'from_year', label: 'Year', accessibleLabel: 'Select a year', options: generateDatepickerContent('years') },
        ],
      },
  ],
  open: true,
  selected: 'selected',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Open.args,
  open: false,
};
